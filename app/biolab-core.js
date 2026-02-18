/* ============================================================
   BioLab_21 — Core: stato condiviso, carrello, navigazione
   Usato da tutte le pagine
   ============================================================ */

const BioLab = {
    version: '22.0',
    dbVersion: '11.1-IED',

    // ---- Stato globale ----
    cart: [],

    // ---- Colori famiglia ----
    familyColors: {
        PROTEINA:               '#e74c3c',
        POLISACCARIDE_NEUTRO:   '#3498db',
        POLISACCARIDE_ANIONICO: '#9b59b6',
        POLICATIONE:            '#1abc9c',
        PLASTIFICANTE:          '#f39c12',
        SALE_RETICOLANTE:       '#e67e22',
        RESINA_LIPIDE:          '#27ae60',
        COLORANTE:              '#e91e63',
        CARICA:                 '#795548',
        ADDITIVO:               '#607d8b',
        COLTURA:                '#00bcd4'
    },

    familyClasses: {
        PROTEINA:               'cat-proteina',
        POLISACCARIDE_NEUTRO:   'cat-polisaccaride',
        POLISACCARIDE_ANIONICO: 'cat-polisaccaride',
        POLICATIONE:            'cat-policatione',
        PLASTIFICANTE:          'cat-plastificante',
        SALE_RETICOLANTE:       'cat-sale',
        RESINA_LIPIDE:          'cat-lipide',
        COLORANTE:              'cat-colorante',
        CARICA:                 'cat-carica',
        COLTURA:                'cat-coltura',
        ADDITIVO:               'cat-additivo'
    },

    // ---- Utility ----
    getCategoryColor(fam) {
        return this.familyColors[fam] || '#888';
    },

    getCategoryClass(fam) {
        return this.familyClasses[fam] || 'cat-default';
    },

    formatFamiglia(f) {
        return (f || '').replace(/_/g, ' ').toLowerCase().replace(/^\w/, c => c.toUpperCase());
    },

    // ---- Carrello (localStorage) ----
    loadCart() {
        try {
            const raw = localStorage.getItem('biolab_cart');
            if (raw) this.cart = JSON.parse(raw);
        } catch(e) { this.cart = []; }
        this.updateCartBadge();
    },

    saveCart() {
        localStorage.setItem('biolab_cart', JSON.stringify(this.cart));
        this.updateCartBadge();
    },

    addToCart(id) {
        const ings = (typeof INGREDIENTI_DATA !== 'undefined') ? INGREDIENTI_DATA.ingredienti : {};
        const ing = ings[id];
        if (!ing) return false;
        if (this.cart.find(c => c.id === id)) return false; // già presente
        this.cart.push({ id, nome: ing.nome, famiglia: ing.famiglia });
        this.saveCart();
        this.showToast(ing.nome + ' aggiunto al carrello', 'success');
        return true;
    },

    removeFromCart(id) {
        const item = this.cart.find(c => c.id === id);
        if (!item) return;
        this.cart = this.cart.filter(c => c.id !== id);
        this.saveCart();
    },

    clearCart() {
        if (this.cart.length === 0) return;
        this.cart = [];
        this.saveCart();
    },

    isInCart(id) {
        return !!this.cart.find(c => c.id === id);
    },

    updateCartBadge() {
        const badge = document.getElementById('cartBadge');
        if (badge) {
            badge.textContent = this.cart.length;
            badge.style.display = this.cart.length > 0 ? 'inline-flex' : 'none';
        }
    },

    // ---- Pannello carrello laterale ----
    toggleCartPanel() {
        const panel = document.getElementById('cartPanel');
        if (!panel) return;
        panel.classList.toggle('open');
        if (panel.classList.contains('open')) this.renderCartPanel();
    },

    // Functional role grouping for cart display
    _cartRoles: [
        { key: 'matrici', label: 'Matrici', color: '#e74c3c',
          fams: ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE'] },
        { key: 'colture', label: 'Colture', color: '#00bcd4',
          fams: ['COLTURA'] },
        { key: 'plastificanti', label: 'Plastificanti', color: '#f39c12',
          fams: ['PLASTIFICANTE'] },
        { key: 'reticolanti', label: 'Reticolanti', color: '#e67e22',
          fams: ['SALE_RETICOLANTE'] },
        { key: 'coating', label: 'Coating / Resine', color: '#27ae60',
          fams: ['RESINA_LIPIDE'] },
        { key: 'cariche', label: 'Cariche', color: '#795548',
          fams: ['CARICA'] },
        { key: 'coloranti', label: 'Coloranti', color: '#e91e63',
          fams: ['COLORANTE'] },
        { key: 'additivi', label: 'Additivi', color: '#607d8b',
          fams: ['ADDITIVO','SOLVENTE'] }
    ],

    renderCartPanel() {
        const body = document.getElementById('cartPanelBody');
        const clearBtn = document.getElementById('cartClearBtn');
        if (!body) return;

        if (this.cart.length === 0) {
            body.innerHTML = '<div class="bl-cart-empty">Carrello vuoto</div>';
            if (clearBtn) clearBtn.style.display = 'none';
            return;
        }

        // Show/hide Svuota
        if (clearBtn) clearBtn.style.display = this.cart.length > 1 ? 'inline-block' : 'none';

        // Read tavolo to dim + if already there
        let tav = [];
        try { tav = JSON.parse(localStorage.getItem('biolab_tavolo') || '[]'); } catch(e) {}
        tav = tav.map(t => typeof t === 'object' ? (t.id || '') : String(t));

        // Group by functional role
        const groups = {};
        this.cart.forEach(item => {
            const fam = item.famiglia || 'ADDITIVO';
            const role = this._cartRoles.find(r => r.fams.indexOf(fam) >= 0);
            const key = role ? role.key : 'additivi';
            if (!groups[key]) groups[key] = [];
            groups[key].push(item);
        });

        let h = '';
        this._cartRoles.forEach(role => {
            if (!groups[role.key]) return;
            h += '<div class="bl-cart-group">'
              + '<div class="bl-cart-group-hd" style="color:' + role.color + ';background:' + role.color + '20">'
              + '<span class="bl-cart-group-dot" style="background:' + role.color + '"></span>'
              + role.label + ' <span class="bl-cart-group-n">' + groups[role.key].length + '</span></div>';
            groups[role.key].forEach(item => {
                const onTav = tav.indexOf(item.id) >= 0;
                const safeNome = item.nome.replace(/'/g, "\\'");
                h += '<div class="bl-cart-item" id="cartItem_' + item.id + '">'
                  + '<span class="bl-cart-name">' + item.nome + '</span>'
                  + '<button class="bl-cart-act bl-cart-add' + (onTav ? ' bl-cart-done' : '') + '" '
                  + 'onclick="BioLab._confirmAddToTavolo(\'' + item.id + '\',\'' + safeNome + '\')" '
                  + 'title="' + (onTav ? 'Già sul tavolo' : 'Aggiungi al tavolo') + '">+</button>'
                  + '<button class="bl-cart-act bl-cart-rem" '
                  + 'onclick="BioLab._confirmRemove(\'' + item.id + '\',\'' + safeNome + '\')" '
                  + 'title="Rimuovi dal carrello">&minus;</button>'
                  + '</div>';
            });
            h += '</div>';
        });

        body.innerHTML = h;
    },

    // + button: add to tavolo with confirm
    _confirmAddToTavolo(id, nome) {
        // Check if already on tavolo
        let tav = [];
        try { tav = JSON.parse(localStorage.getItem('biolab_tavolo') || '[]'); } catch(e) {}
        tav = tav.map(t => typeof t === 'object' ? (t.id || '') : String(t));
        if (tav.indexOf(id) >= 0) {
            BioLab.showToast(nome + ' è già sul tavolo', 'info');
            return;
        }
        BioLab.confirm('Aggiungere <strong>' + nome + '</strong> al tavolo?', function() {
            let tav2 = [];
            try { tav2 = JSON.parse(localStorage.getItem('biolab_tavolo') || '[]'); } catch(e) {}
            tav2 = tav2.map(t => typeof t === 'object' ? (t.id || '') : String(t));
            if (tav2.indexOf(id) < 0) {
                tav2.push(id);
                localStorage.setItem('biolab_tavolo', JSON.stringify(tav2));
            }
            BioLab.showToast(nome + ' aggiunto al tavolo', 'success');
            BioLab.renderCartPanel();
            if (typeof onCartChanged === 'function') onCartChanged();
        });
    },

    // − button: remove from cart with confirm
    _confirmRemove(id, nome) {
        BioLab.confirm('Rimuovere <strong>' + nome + '</strong> dal carrello?', function() {
            BioLab.removeFromCart(id);
            BioLab.renderCartPanel();
            BioLab.updateCartBadge();
            if (typeof onCartChanged === 'function') onCartChanged();
        });
    },

    _confirmClear() {
        BioLab.confirm('Svuotare il carrello? (' + BioLab.cart.length + ' ingredienti)', function() {
            BioLab.clearCart();
            BioLab.renderCartPanel();
            BioLab.updateCartBadge();
            if (typeof onCartChanged === 'function') onCartChanged();
        });
    },

    // ---- Toast ----
    // ---- Modale conferma universale ----
    confirm(msg, onYes, onNo) {
        // Remove any existing
        const old = document.getElementById('blConfirmOverlay');
        if (old) old.remove();

        const overlay = document.createElement('div');
        overlay.id = 'blConfirmOverlay';
        overlay.className = 'bl-confirm-overlay';
        overlay.innerHTML = '<div class="bl-confirm-box">'
          + '<div class="bl-confirm-msg">' + msg + '</div>'
          + '<div class="bl-confirm-btns">'
          + '<button class="bl-confirm-yes" id="blConfirmYes">Sì</button>'
          + '<button class="bl-confirm-no" id="blConfirmNo">No</button>'
          + '</div></div>';
        document.body.appendChild(overlay);

        document.getElementById('blConfirmNo').onclick = function() {
            overlay.remove();
            if (onNo) onNo();
        };
        document.getElementById('blConfirmYes').onclick = function() {
            overlay.remove();
            if (onYes) onYes();
        };
        // Click outside = No
        overlay.onclick = function(e) {
            if (e.target === overlay) {
                overlay.remove();
                if (onNo) onNo();
            }
        };
    },

    showToast(msg, type, duration) {
        type = type || 'info';
        duration = duration || 2500;
        let container = document.getElementById('toastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toastContainer';
            container.className = 'bl-toast-container';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.className = 'bl-toast bl-toast-' + type;
        toast.textContent = msg;
        container.appendChild(toast);
        setTimeout(() => { toast.classList.add('fade-out'); }, duration - 400);
        setTimeout(() => { toast.remove(); }, duration);
    },

    // ---- Navigazione centralizzata ----
    currentPage: '',

    // Definizione nav — UNICO PUNTO da aggiornare per aggiungere/rinominare pagine
    navLinks: [
        { href: 'materiali.html',  name: 'Materiali',    sub: 'Catalogo' },
        { href: 'ingredienti.html',name: 'Ingredienti',  sub: 'Schede' },
        { href: 'applicazioni.html',name:'Applicazioni', sub: 'Progetti reali' },
        { href: 'lab.html',        name: 'Laboratorio',  sub: 'Sperimenta & Tutor', dropdown: true },
        { href: 'criticita.html',  name: 'Criticità',    sub: 'Diagnostica' },
        { href: '#guide',          name: 'Guide',        sub: 'PDF scaricabili', action: 'guide' },
    ],

    initNav() {
        const path = window.location.pathname;
        const file = path.split('/').pop() || 'index.html';
        this.currentPage = file.replace('.html', '');

        // ---- Genera header se trova il placeholder ----
        const header = document.getElementById('blHeader');
        if (header) {
            // Brand bar
            let h = '<div class="bl-brand-bar">'
              + '<a href="../index.html"><img src="../asset/logo_albertina.png" class="bl-brand-logo" alt="Logo Accademia Albertina"></a>'
              + '<div class="bl-brand-text">'
              + '<a href="../index.html" class="bl-brand-title">BioLab</a>'
              + '<div class="bl-brand-sub">Configuratore Biomateriali \u00b7 Accademia Albertina di Belle Arti \u00b7 Scuola PAI \u00b7 Tipologia dei Nuovi Materiali \u00b7 Prof. Paolo Maccarrone</div>'
              + '</div>'
              + '<div class="bl-brand-spacer"></div>'
              + '<div class="bl-nav-right">'
              + '<button class="bl-info-btn" onclick="BioLab.showInfoModal()" title="Info e credits">'
              + '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>'
              + '</button>'
              + '<button class="bl-cart-btn" onclick="BioLab.toggleCartPanel()">'
              + '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>'
              + '<span id="cartBadge" class="bl-cart-badge" style="display:none">0</span>'
              + '</button></div></div>';

            // Nav tab bar
            h += '<nav class="bl-tab-bar">';
            this.navLinks.forEach(link => {
                const page = link.href.replace('.html', '').replace(/#.*/, '');
                const active = (page === this.currentPage) ? ' active' : '';
                if (link.action === 'guide') {
                    h += '<a href="#" class="bl-nav-link bl-nav-guide" onclick="event.preventDefault();BioLab.showGuideModal()">'
                      + '<span class="bl-nav-link-name">' + link.name + '</span>'
                      + '<span class="bl-nav-link-sub">' + link.sub + '</span></a>';
                } else if (link.dropdown) {
                    h += '<div class="bl-nav-dropdown">'
                      + '<a href="' + link.href + '#sperimenta" class="bl-nav-link' + active + '">'
                      + '<span class="bl-nav-link-name">' + link.name + '<span class="bl-nav-arrow"> &#9662;</span></span>'
                      + '<span class="bl-nav-link-sub">' + link.sub + '</span></a>'
                      + '<div class="bl-nav-dropdown-menu">'
                      + '<a href="lab.html#sperimenta" class="bl-nav-dropdown-item"><span class="bl-dropdown-icon">&#9874;</span> Sperimenta<span class="bl-dropdown-desc">Tavolo ingredienti e predizioni</span></a>'
                      + '<a href="lab.html#tutor" class="bl-nav-dropdown-item"><span class="bl-dropdown-icon">&#9998;</span> Tutor guidato<span class="bl-dropdown-desc">Percorso passo-passo</span></a>'
                      + '</div></div>';
                } else {
                    h += '<a href="' + link.href + '" class="bl-nav-link' + active + '">'
                      + '<span class="bl-nav-link-name">' + link.name + '</span>'
                      + '<span class="bl-nav-link-sub">' + link.sub + '</span></a>';
                }
            });
            h += '</nav>';
            header.innerHTML = h;
        } else {
            // Fallback: header già nell'HTML (retrocompatibilità)
            // Applica dropdown al link Lab e active state come prima
            document.querySelectorAll('.bl-nav-link').forEach(link => {
                const href = link.getAttribute('href') || '';
                if (href.indexOf('lab.html') !== -1 && !link.closest('.bl-nav-dropdown')) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'bl-nav-dropdown';
                    link.parentNode.insertBefore(wrapper, link);
                    wrapper.appendChild(link);
                    const sub = link.querySelector('.bl-nav-link-sub');
                    if (sub) sub.textContent = 'Sperimenta & Tutor';
                    const arrow = document.createElement('span');
                    arrow.className = 'bl-nav-arrow';
                    arrow.innerHTML = ' &#9662;';
                    const name = link.querySelector('.bl-nav-link-name');
                    if (name) name.appendChild(arrow);
                    link.setAttribute('href', 'lab.html#sperimenta');
                    const menu = document.createElement('div');
                    menu.className = 'bl-nav-dropdown-menu';
                    menu.innerHTML =
                        '<a href="lab.html#sperimenta" class="bl-nav-dropdown-item"><span class="bl-dropdown-icon">&#9874;</span> Sperimenta<span class="bl-dropdown-desc">Tavolo ingredienti e predizioni</span></a>' +
                        '<a href="lab.html#tutor" class="bl-nav-dropdown-item"><span class="bl-dropdown-icon">&#9998;</span> Tutor guidato<span class="bl-dropdown-desc">Percorso passo-passo</span></a>';
                    wrapper.appendChild(menu);
                }
            });
            document.querySelectorAll('.bl-nav-link').forEach(link => {
                const href = link.getAttribute('href') || '';
                const linkPage = href.replace('.html', '').replace(/#.*/, '');
                if (linkPage === this.currentPage || (this.currentPage === '' && linkPage === 'index')) {
                    link.classList.add('active');
                }
            });
        }

        // ---- Genera cart panel se non esiste ----
        if (!document.getElementById('cartPanel')) {
            const cp = document.createElement('div');
            cp.className = 'bl-cart-panel';
            cp.id = 'cartPanel';
            cp.innerHTML = '<div class="bl-cart-panel-header">Carrello'
              + '<span class="bl-cart-header-actions">'
              + '<button class="btn btn-small btn-danger" id="cartClearBtn" onclick="BioLab._confirmClear()" style="display:none">Svuota</button>'
              + '<button class="btn btn-small btn-secondary" onclick="BioLab.toggleCartPanel()">Chiudi</button>'
              + '</span></div>'
              + '<div class="bl-cart-panel-body" id="cartPanelBody"><div class="bl-cart-empty">Carrello vuoto</div></div>';
            document.body.insertBefore(cp, document.body.children[1] || null);
            // Cart +/- button styles
            if (!document.getElementById('blCartActCSS')) {
                const st = document.createElement('style'); st.id = 'blCartActCSS';
                st.textContent = '.bl-cart-act{width:22px;height:22px;border-radius:50%;border:1.5px solid #ccc;background:#fff;color:#666;font-size:14px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all .15s;padding:0;line-height:1;flex-shrink:0;margin-left:3px}'
                  + '.bl-cart-add:hover{border-color:#2d5a3d;color:#2d5a3d;background:#e8f0eb}'
                  + '.bl-cart-rem:hover{border-color:#c0392b;color:#c0392b;background:#fdecea}'
                  + '.bl-cart-done{border-color:#aaa;color:#aaa;opacity:.45;cursor:default}'
                  + '.bl-cart-done:hover{border-color:#aaa;color:#aaa;background:#fff}'
                  + '.bl-cart-group{margin-bottom:2px}'
                  + '.bl-cart-group-hd{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:5px 8px 4px;display:flex;align-items:center;gap:5px;border-radius:6px}'
                  + '.bl-cart-group-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}'
                  + '.bl-cart-group-n{font-weight:400;opacity:.5;font-size:8px}';
                document.head.appendChild(st);
            }
        }
    },

    // ---- Info Modal (credits, disclaimer, fonti) ----
    showInfoModal() {
        if (document.getElementById('blInfoOverlay')) {
            document.getElementById('blInfoOverlay').style.display = 'flex';
            return;
        }
        const ov = document.createElement('div');
        ov.id = 'blInfoOverlay';
        ov.className = 'bl-info-overlay';
        ov.onclick = function(e) { if (e.target === ov) ov.style.display = 'none'; };

        let h = '<div class="bl-info-modal">';
        h += '<button class="bl-info-close" onclick="document.getElementById(\'blInfoOverlay\').style.display=\'none\'">&times;</button>';
        h += '<h2>BioLab</h2>';
        h += '<p class="bl-info-sub">Simulatore Didattico per Biomateriali</p>';

        h += '<div class="bl-info-section"><h3>Disclaimer</h3>';
        h += '<p>Questo è uno strumento <strong>didattico</strong> pensato per studenti di design e maker. NON è un manuale professionale né una fonte primaria per applicazioni industriali o alimentari.</p>';
        h += '<p>Alcuni materiali e processi comportano rischi (calore, sostanze irritanti, reazioni chimiche). Lavorare sempre con protezioni adeguate e sotto supervisione se inesperti.</p>';
        h += '<p>Le indicazioni "food-safe" sono riferite agli ingredienti puri. Il materiale finale può NON essere idoneo al contatto alimentare.</p></div>';

        h += '<div class="bl-info-section"><h3>Nota AI</h3>';
        h += '<p>I testi descrittivi sono stati generati con assistenza di intelligenza artificiale (Claude, Anthropic) sulla base di conoscenze consolidate di chimica e scienza dei materiali. I concetti di base sono affidabili; dosaggi e tempi sono indicativi, da tarare sperimentalmente.</p></div>';

        h += '<div class="bl-info-section"><h3>Fonti principali</h3>';
        h += '<ul>';
        h += '<li><a href="https://materiom.org" target="_blank">Materiom</a> — Database open-source ricette</li>';
        h += '<li><a href="https://textile-academy.org" target="_blank">Fabricademy</a> — Programma educativo bio-based</li>';
        h += '<li>Stevens, E.S. — <em>Green Plastics</em> (Princeton, 2002)</li>';
        h += '<li>Dunne, M. — <em>Bioplastic Cook Book</em> (2018)</li>';
        h += '<li>Schede tecniche: Sigma-Aldrich, MSK, Sosa</li>';
        h += '</ul></div>';

        h += '<div class="bl-info-section"><h3>Credits</h3>';
        h += '<p>Ideazione: Prof. Paolo Maccarrone — Corso "Tipologia dei Nuovi Materiali", Accademia Albertina di Torino</p>';
        h += '<p>Sviluppo database e interfaccia con assistenza AI (Claude, Anthropic)</p>';
        h += '<p>Dati sperimentali: studenti Accademia Albertina e IED Torino, 2025-2026</p>';
        h += '<p style="margin-top:0.5rem;font-size:0.75rem;color:#999;">BioLab v22 · Database v11.1-IED · Licenza: CC BY-NC-SA (proposta)</p>';
        h += '</div>';

        h += '</div>';
        ov.innerHTML = h;
        document.body.appendChild(ov);

        document.addEventListener('keydown', function handler(e) {
            if (e.key === 'Escape') { ov.style.display = 'none'; }
        });
    },

    // ---- Guide Modal (PDF scaricabili) ----
    showGuideModal() {
        if (document.getElementById('blGuideOverlay')) {
            document.getElementById('blGuideOverlay').style.display = 'flex';
            return;
        }
        const ov = document.createElement('div');
        ov.id = 'blGuideOverlay';
        ov.className = 'bl-info-overlay';
        ov.onclick = function(e) { if (e.target === ov) ov.style.display = 'none'; };

        let h = '<div class="bl-info-modal bl-guide-modal">';
        h += '<button class="bl-info-close" onclick="document.getElementById(\'blGuideOverlay\').style.display=\'none\'">&times;</button>';
        h += '<h2 style="margin:0 0 6px;color:#1565C0;font-size:1.3em;">Guide e Documentazione</h2>';
        h += '<p style="color:#666;font-size:0.85em;margin:0 0 18px;">PDF scaricabili generati dal database BioLab. Stampali o consultali offline.</p>';

        const guides = [
            { file: 'guida_ingredienti_multifase.pdf', title: 'Guida Ingredienti',
              desc: 'Schede operative per 17 matrici e 10 modificatori: temperature, pH, processo step-by-step, reticolanti compatibili, combinazioni importanti.',
              icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1565C0" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
              tag: 'Completa' },
            { file: 'guida_compatibilita_famiglie.pdf', title: 'Tabella Compatibilita',
              desc: 'Matrice 11\u00d711 delle compatibilita tra famiglie chimiche. Stampa in formato orizzontale per consultazione rapida in laboratorio.',
              icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1565C0" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
              tag: 'Riferimento' },
            { file: 'guida_dosaggi.pdf', title: 'Guida Dosaggi',
              desc: 'Range di concentrazione per tutti gli 80 ingredienti, organizzati per famiglia con barre visive e consigli pratici.',
              icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1565C0" stroke-width="1.5"><path d="M6 2v6.5c0 .8-.3 1.5-.9 2L2 13l3.1 2.5c.6.5.9 1.2.9 2V22"/><path d="M18 2v6.5c0 .8.3 1.5.9 2L22 13l-3.1 2.5c-.6.5-.9 1.2-.9 2V22"/><line x1="10" y1="9" x2="14" y2="9"/><line x1="10" y1="13" x2="14" y2="13"/><line x1="10" y1="17" x2="14" y2="17"/></svg>',
              tag: 'Pratica' },
        ];

        guides.forEach(g => {
            h += '<a href="../asset/guide/' + g.file + '" target="_blank" class="bl-guide-card">'
              + '<div class="bl-guide-card-left">'
              + '<div class="bl-guide-card-icon">' + g.icon + '</div></div>'
              + '<div class="bl-guide-card-body">'
              + '<div class="bl-guide-card-title">' + g.title
              + '<span class="bl-guide-card-tag">' + g.tag + '</span></div>'
              + '<div class="bl-guide-card-desc">' + g.desc + '</div></div>'
              + '<div class="bl-guide-card-dl">'
              + '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
              + '</div></a>';
        });

        h += '<div style="margin-top:16px;padding-top:12px;border-top:1px solid #eee;font-size:0.8em;color:#999;">'
          + 'I PDF vengono generati automaticamente dal database. '
          + 'Posizionare i file nella cartella <code>asset/guide/</code>.</div>';
        h += '</div>';
        ov.innerHTML = h;
        document.body.appendChild(ov);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') { ov.style.display = 'none'; }
        });
    },

    // ---- Archivio (salvataggi unificati) ----
    ARCHIVE_KEY: 'biolab_archive',

    loadArchive() {
        try { return JSON.parse(localStorage.getItem(this.ARCHIVE_KEY) || '[]'); }
        catch(e) { return []; }
    },

    saveToArchive(entry) {
        const archive = this.loadArchive();
        entry.id = entry.id || Date.now();
        entry.data = entry.data || new Date().toISOString();
        archive.push(entry);
        localStorage.setItem(this.ARCHIVE_KEY, JSON.stringify(archive));
        return entry;
    },

    updateInArchive(id, entry) {
        const archive = this.loadArchive();
        const idx = archive.findIndex(a => String(a.id) === String(id));
        if (idx >= 0) {
            entry.id = archive[idx].id;
            archive[idx] = entry;
            localStorage.setItem(this.ARCHIVE_KEY, JSON.stringify(archive));
            return true;
        }
        return false;
    },

    deleteFromArchive(id) {
        const archive = this.loadArchive();
        const filtered = archive.filter(a => String(a.id) !== String(id));
        localStorage.setItem(this.ARCHIVE_KEY, JSON.stringify(filtered));
    },

    getArchiveByOrigine(origine) {
        return this.loadArchive().filter(a => a.origine === origine);
    },

    // Migra vecchie chiavi al boot (una tantum)
    migrateOldSaves() {
        let migrated = false;
        // Lab: savedFormulas → biolab_archive con origine:"lab"
        try {
            const old = JSON.parse(localStorage.getItem('savedFormulas') || '[]');
            if (old.length) {
                const archive = this.loadArchive();
                const existingIds = new Set(archive.map(a => String(a.id)));
                old.forEach(f => {
                    if (!existingIds.has(String(f.id))) {
                        archive.push({
                            id: f.id || Date.now() + Math.random(),
                            nome: f.name || 'Formula',
                            origine: 'lab',
                            data: f.date || new Date().toISOString(),
                            note: f.annotations || '',
                            ingredientIds: f.ingredientIds || [],
                            customDosages: f.customDosages || {},
                            tecnica: f.tecnica || 'colata',
                            coating: f.coating || false,
                            formula: f
                        });
                    }
                });
                localStorage.setItem(this.ARCHIVE_KEY, JSON.stringify(archive));
                localStorage.removeItem('savedFormulas');
                migrated = true;
            }
        } catch(e) {}
        return migrated;
    },

    // ---- Init globale ----
    init() {
        this.initNav();        // genera header + badge nel DOM
        this.loadCart();       // loadCart → updateCartBadge (badge ora esiste)
        this.migrateOldSaves();
    }
};

// Auto-init quando DOM è pronto
document.addEventListener('DOMContentLoaded', () => BioLab.init());
