// ============================================================
// LAB-PRINT.JS — Salvataggio, stampa, export/import, portfolio
// Estratto da lab.html per modularità
// ============================================================

function saveFormula() {
    if (!window.currentFormula) return;
    
    const ings = INGREDIENTI_DATA?.ingredienti || {};
    const matriciFams = ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'];

    let autoName = '';
    if (tavolo.length > 0) {
        // Ordina per ruolo: matrici prima, poi resto
        const sorted = [...tavolo].sort((a, b) => {
            const famA = ings[a]?.famiglia || '';
            const famB = ings[b]?.famiglia || '';
            const isMatA = matriciFams.includes(famA) ? 0 : 1;
            const isMatB = matriciFams.includes(famB) ? 0 : 1;
            return isMatA - isMatB;
        });
        const nomi = sorted.slice(0, 3).map(id => {
            const ing = ings[id];
            return ing ? ing.nome.split(' ')[0] : id;
        });
        autoName = nomi.join('+');
        if (tavolo.length > 3) autoName += '+…';
    } else {
        autoName = 'Formula ' + new Date().toLocaleDateString('it-IT');
    }
    
    // Mostra modal per confermare/modificare nome
    showSaveNameModal(autoName);
}

function showSaveNameModal(suggestedName) {
    document.querySelectorAll('.confirm-modal-overlay').forEach(function(m) { m.remove(); });
    
    const isEditing = !!window._editingFormulaId;
    const editName = window._editingFormulaName || '';
    
    var overlay = document.createElement('div');
    overlay.className = 'confirm-modal-overlay';
    overlay.innerHTML = '<div class="confirm-modal">' +
        '<div class="confirm-modal-header">' + (isEditing ? 'Aggiorna Formula' : 'Salva Formula') + '</div>' +
        '<div class="confirm-modal-body">' +
            (isEditing ? '<div style="font-size:0.75rem;color:#888;margin-bottom:0.5rem;">Caricata da: "' + editName + '"</div>' : '') +
            '<label style="display:block;margin-bottom:0.5rem;font-size:0.8rem;color:#555;">Nome della formula:</label>' +
            '<input type="text" id="formulaNameInput" value="' + (isEditing ? editName : suggestedName) + '" ' +
                   'style="width:100%;padding:0.5rem;border:1px solid #ddd;border-radius:4px;font-size:0.85rem;" ' +
                   'onkeydown="if(event.key===\'Enter\'){doSaveFormula(true);event.preventDefault();}">' +
        '</div>' +
        '<div class="confirm-modal-actions" style="flex-wrap:wrap;gap:0.4rem;">' +
            '<button class="btn-confirm-cancel" onclick="this.closest(\'.confirm-modal-overlay\').remove()">Annulla</button>' +
            (isEditing ? '<button class="btn-confirm-ok" style="background:#4caf50;" onclick="doSaveFormula(true)">Aggiorna</button>' +
                         '<button class="btn-confirm-ok" style="background:#2196f3;" onclick="doSaveFormula(false)">Salva come nuova</button>'
                       : '<button class="btn-confirm-ok" onclick="doSaveFormula(false)">Salva</button>') +
        '</div>' +
    '</div>';
    document.body.appendChild(overlay);
    
    setTimeout(function() {
        var input = document.getElementById('formulaNameInput');
        if (input) { input.focus(); input.select(); }
    }, 100);
}

function doSaveFormula(overwrite) {
    var nameInput = document.getElementById('formulaNameInput');
    var name = nameInput ? nameInput.value.trim() : 'Formula';
    
    document.querySelectorAll('.confirm-modal-overlay').forEach(function(m) { m.remove(); });
    
    var saved = BioLab.getArchiveByOrigine('lab');
    var annotations = document.getElementById('formulaAnnotations')?.value || '';
    
    var dosaggiDaSalvare = {};
    if (Object.keys(customDosages).length > 0) {
        dosaggiDaSalvare = JSON.parse(JSON.stringify(customDosages));
    }
    
    var formula = {
        ...window.currentFormula,
        name: name,
        annotations: annotations,
        ingredientIds: [...formulaSelection],
        customDosages: dosaggiDaSalvare,
        tecnica: currentTecnica,
        coating: coatingAttivo,
        date: new Date().toISOString()
    };
    
    if (overwrite && window._editingFormulaId) {
        var idx = saved.findIndex(f => String(f.id) === String(window._editingFormulaId));
        if (idx >= 0) {
            formula.id = saved[idx].id; // mantieni ID originale
            saved[idx] = formula;
            _writeLabFormulas(saved);
            // Aggiorna tracking
            window._editingFormulaName = name;
            loadSavedFormulas();
            showToast('Formula "' + name + '" aggiornata!', 'success');
            return;
        }
    }
    
    // Salva come nuova
    formula.id = Date.now();
    saved.push(formula);
    _writeLabFormulas(saved);
    window._editingFormulaId = formula.id;
    window._editingFormulaName = name;
    loadSavedFormulas();
    showToast('Formula "' + name + '" salvata!', 'success');
}

function loadSavedFormulas() {
    const saved = BioLab.getArchiveByOrigine('lab');
    const listEl = document.getElementById('savedFormulasList');
    const countEl = document.getElementById('savedCount');
    
    if (!listEl) return;
    
    countEl.textContent = saved.length;
    countEl.style.background = saved.length > 0 ? '#4caf50' : '#aaa';
    
    if (saved.length === 0) {
        listEl.innerHTML = '<div class="saved-empty">Nessuna formula salvata</div>';
        return;
    }
    
    let html = '';
    saved.slice().reverse().forEach(f => {
        const date = new Date(f.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
        const numIng = f.ingredientIds?.length || f.items?.length || 0;
        html += '<div class="saved-formula-item">';
        html += '<div class="saved-formula-info" onclick="loadFormula(' + f.id + ')">';
        const hasNotes = f.annotations && f.annotations.trim().length > 0;
        html += '<div class="saved-formula-name">' + (f.name || 'Formula') + ' <small>(' + numIng + ' ing.)</small>' + (hasNotes ? ' <span class="note-indicator" title="Ha annotazioni">*</span>' : '') + '</div>';
        html += '<div class="saved-formula-date">' + date + '</div>';
        html += '</div>';
        html += '<div class="saved-formula-actions">';
        html += '<button class="btn-load" onclick="loadFormula(' + f.id + ')" title="Carica">Carica</button>';
        html += '<button class="btn-delete" onclick="deleteFormula(' + f.id + ')" title="Elimina">X</button>';
        html += '</div>';
        html += '</div>';
    });
    
    listEl.innerHTML = html;
}

function loadFormula(id) {
    const saved = BioLab.getArchiveByOrigine('lab');
    const formula = saved.find(f => String(f.id) === String(id));
    if (!formula) return;
    
    // Controlla se c'è lavoro in corso sul tavolo
    if (tavolo.length > 0) {
        if (!confirm("Hai " + tavolo.length + " ingredienti sul tavolo. Caricare \"" + (formula.name || "Formula") + "\"? Il lavoro attuale sara sovrascritto.")) return;
        doLoadFormula(formula);
        return;
    }
    
    // Nessun lavoro in corso, carica direttamente
    doLoadFormula(formula);
}


function doLoadFormula(formula) {
    tavolo = [];
    formulaSelection.clear(); customDosages = {};
    
    window._editingFormulaId = formula.id || null;
    window._editingFormulaName = formula.name || null;
    
    const ings = INGREDIENTI_DATA?.ingredienti || {};
    const ids = formula.ingredientIds || formula.items?.map(i => i.id || i) || [];
    
    if (formula.customDosages) {
        try { customDosages = JSON.parse(JSON.stringify(formula.customDosages)); } catch(e) {}
    }
    if (formula.tecnica && TECNICA_MODIFIERS[formula.tecnica]) {
        setTecnica(formula.tecnica);
    } else {
        setTecnica('colata');
    }
    coatingAttivo = !!formula.coating;
    var coatingCb = document.getElementById('coatingCheck');
    if (coatingCb) coatingCb.checked = coatingAttivo;
    var coatingRow = document.getElementById('coatingRow');
    if (coatingRow) coatingRow.classList.toggle('active', coatingAttivo);
    
    ids.forEach(ingId => {
        if (!BioLab.isInCart(ingId)) {
            BioLab.addToCart(ingId);
        }
        if (!tavolo.includes(ingId)) tavolo.push(ingId);
        formulaSelection.add(ingId);
    });
    
    const annotationsEl = document.getElementById('formulaAnnotations');
    if (annotationsEl) annotationsEl.value = formula.annotations || '';
    
    updateCart();
    updateTavolo();
    saveLabState();
    
    
    showToast('Formula "' + (formula.name || 'Formula') + '" caricata!', 'success');
}

function deleteFormula(id) {
    showConfirmModal(
        'Elimina formula',
        'Eliminare questa formula salvata?',
        function() {
            let saved = BioLab.getArchiveByOrigine('lab');
            saved = saved.filter(f => String(f.id) !== String(id));
            _writeLabFormulas(saved);
            loadSavedFormulas();
            showToast('Formula eliminata', 'info');
        }
    );
}

// =============================================
// DESCRIZIONE MATERIALE (from v97)
// =============================================


function printFormula() {
    if (!window.currentFormula) return;
    var f = window.currentFormula;
    var props = f.properties || { trasparenza: 50, flessibilita: 50, resistenzaH2O: 50, resistenzaMecc: 50 };
    var date = new Date().toLocaleDateString('it-IT');
    
    // Role colors for dots
    var roleColors = {
        'Matrice': '#1565c0', 'Matrice 2': '#0d47a1', 'Plastificante': '#43a047',
        'Reticolante': '#e53935', 'Carica/Fibra': '#795548', 'Colorante': '#7b1fa2',
        'Lipide/Coating': '#f57f17', 'Lipide': '#f57f17', 'Additivo': '#607d8b',
        'Altro': '#607d8b', 'Coltura': '#00897b', 'Regolatore pH': '#ec407a',
        'Emulsionante': '#ec407a', 'Solvente': '#546e7a'
    };
    
    // Build formula rows
    var formulaRows = '';
    (f.items || []).forEach(function(item) {
        var effPct = f.total > 0 ? Math.round(item.percent / f.total * 100) : 0;
        var color = roleColors[item.role] || '#888';
        formulaRows += '<tr><td><span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:' + color + ';margin-right:6px;vertical-align:middle;"></span>' + item.ing.nome + '</td>';
        formulaRows += '<td>' + (item.role || '-') + '</td>';
        formulaRows += '<td class="r">' + item.percent + 'g</td>';
        formulaRows += '<td class="r">' + effPct + '%</td></tr>';
    });
    
    // Build property bars
    function barColor(v) { return v > 55 ? '#43a047' : '#ef6c00'; }
    function propBar(label, val) {
        var c = barColor(val);
        return '<div class="pr"><span class="pl">' + label + '</span>' +
            '<span class="pb"><span class="pf" style="width:' + val + '%;background:' + c + '"></span></span>' +
            '<span class="pv">' + val + '%</span></div>';
    }
    var barsHtml = propBar('Trasparenza', props.trasparenza) +
        propBar('Flessibilità', props.flessibilita) +
        propBar('Resist. H₂O', props.resistenzaH2O) +
        propBar('Resist. mecc.', props.resistenzaMecc);
    
    // Tags
    var allVegano = true, allFoodSafe = true;
    (f.items || []).forEach(function(item) {
        if (!item.ing.vegano) allVegano = false;
        if (!item.ing.food_safe) allFoodSafe = false;
    });
    var tagsHtml = '<div class="tags">';
    tagsHtml += allFoodSafe ? '<span class="tag tg">✓ Food-safe</span>' : '<span class="tag tr">✗ Food-safe</span>';
    tagsHtml += allVegano ? '<span class="tag tg">✓ Vegano</span>' : '<span class="tag tr">✗ Vegano</span>';
    tagsHtml += '</div>';
    
    // Notes
    var notesHtml = '';
    if (f.notes && f.notes.length > 0) {
        notesHtml = '<div class="np">';
        f.notes.forEach(function(n) { notesHtml += '<div>• ' + n + '</div>'; });
        notesHtml += '</div>';
    }
    
    // Shopping list
    var shopRows = '';
    (f.items || []).forEach(function(item) {
        shopRows += '<tr><td>' + item.ing.nome + '</td><td>' + item.percent + 'g</td><td>' + (item.ing.reperibilita || '—') + '</td></tr>';
    });
    
    // Extract description sections from DOM
    var descEl = document.getElementById('descriptionContent');
    var sectionsHtml = '';
    var reliHtml = '';
    var diffHtml = '';
    
    if (descEl) {
        // Reliability
        var reliEl = descEl.querySelector('.desc-reliability');
        if (reliEl) {
            var reliClone = reliEl.cloneNode(true);
            reliHtml = '<div class="reli">' + reliClone.innerHTML + '</div>';
        }
        // Difficulty
        var diffEl = descEl.querySelector('.desc-difficulty');
        if (diffEl) {
            diffHtml = '<div class="diff">' + diffEl.innerHTML + '</div>';
        }
        // All titled sections
        var titles = descEl.querySelectorAll('.desc-title');
        titles.forEach(function(titleEl) {
            var sectionContent = '';
            var sibling = titleEl.nextElementSibling;
            while (sibling && !sibling.classList.contains('desc-title') && !sibling.classList.contains('desc-reliability') && !sibling.classList.contains('desc-difficulty')) {
                sectionContent += sibling.outerHTML || '';
                sibling = sibling.nextElementSibling;
            }
            sectionsHtml += '<div class="sec"><div class="st">' + titleEl.textContent.trim() + '</div>' + sectionContent + '</div>';
        });
    }
    
    // Compose final HTML
    var html = '<!DOCTYPE html><html lang="it"><head><meta charset="UTF-8">';
    html += '<title>Scheda Formula — ' + f.name + '</title>';
    html += '<style>';
    html += '@page{size:A4;margin:14mm 16mm 16mm 16mm}';
    html += '*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}';
    html += 'body{font-family:"Segoe UI",system-ui,-apple-system,sans-serif;font-size:9.5pt;line-height:1.45;color:#1a1a1a;-webkit-print-color-adjust:exact;print-color-adjust:exact}';
    // Header
    html += '.hdr{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2.5px solid #2d5a3d;padding-bottom:10px;margin-bottom:14px}';
    html += '.hdr h1{font-size:14.5pt;font-weight:700;color:#2d5a3d;letter-spacing:-0.3px;margin-bottom:2px}';
    html += '.hdr .sub{font-size:8.5pt;color:#666}';
    html += '.hdr .ri{text-align:right;font-size:8pt;color:#888;line-height:1.5}';
    html += '.hdr .ri b{font-size:9pt;color:#2d5a3d}';
    // Reliability
    html += '.reli{margin-bottom:10px}';
    html += '.reli>div{display:inline-flex;align-items:center;gap:8px;border-radius:6px;padding:5px 12px;font-size:8.5pt}';
    html += '.diff{display:inline;font-size:8.5pt;margin-left:10px}';
    // Columns
    html += '.cols{display:flex;gap:16px;margin-bottom:12px}';
    html += '.cl{flex:1.1}.cr{flex:0.9}';
    // Formula table
    html += 'table.ft{width:100%;border-collapse:collapse;font-size:9pt;margin-bottom:8px}';
    html += '.ft th{text-align:left;font-size:7.5pt;text-transform:uppercase;letter-spacing:.5px;color:#888;border-bottom:1.5px solid #2d5a3d;padding:3px 6px}';
    html += '.ft td{padding:5px 6px;border-bottom:1px solid #eee}';
    html += '.ft .r{text-align:right}';
    html += '.ft tfoot td{border-top:1.5px solid #2d5a3d;border-bottom:none;font-weight:600;padding-top:5px}';
    html += '.aq{font-size:8pt;color:#666;margin:4px 0 8px 2px}';
    // Notes processo
    html += '.np{background:#f5f5f5;border-radius:4px;padding:6px 10px;font-size:8.5pt;margin-bottom:8px}';
    html += '.np div{margin-bottom:2px}';
    // Tags
    html += '.tags{display:flex;gap:8px;margin-bottom:8px}';
    html += '.tag{font-size:7.5pt;padding:2px 8px;border-radius:10px;font-weight:600}';
    html += '.tg{background:#e8f5e9;color:#2e7d32}.tr{background:#fce4ec;color:#c62828}';
    // Property bars
    html += '.pr{display:flex;align-items:center;margin-bottom:5px}';
    html += '.pl{width:82px;font-size:8.5pt;color:#555;flex-shrink:0}';
    html += '.pb{flex:1;height:9px;background:#eee;border-radius:4px;overflow:hidden;display:block}';
    html += '.pf{display:block;height:100%;border-radius:4px}';
    html += '.pv{width:36px;text-align:right;font-size:8.5pt;font-weight:600;color:#444;flex-shrink:0}';
    // Sections
    html += '.sec{margin-bottom:10px}';
    html += '.st{font-size:8pt;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#2d5a3d;border-bottom:1px solid #e0e0e0;padding-bottom:2px;margin-bottom:5px}';
    html += '.sec p{margin-bottom:4px}';
    html += '.sec ul{padding-left:16px;margin-bottom:4px}';
    html += '.sec ol{padding-left:16px;margin-bottom:4px}';
    html += '.sec li{margin-bottom:3px;font-size:9pt}';
    html += '.sec b{font-weight:600}';
    // Description warning/positive spans
    html += '.desc-warning{color:#c62828;font-weight:600}';
    html += '.desc-positive{color:#2e7d32;font-weight:600}';
    html += '.desc-negative{color:#c62828;font-weight:600}';
    html += '.desc-highlight{color:#e65100;font-weight:600}';
    // Match cards
    html += '.desc-matches{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:6px}';
    html += '.desc-match-card{flex:1 1 47%;border:1px solid #e0e0e0;border-radius:6px;padding:7px 9px;font-size:8.5pt;background:#fafafa}';
    html += '.desc-match-header{font-weight:600;margin-bottom:2px}';
    html += '.desc-match-badge{color:#fff;padding:1px 6px;border-radius:10px;font-size:7.5pt;font-weight:600;margin-left:4px}';
    html += '.desc-match-src{font-size:7.5pt;color:#888;margin-left:4px}';
    html += '.desc-match-detail{font-size:8pt;color:#555;margin-top:2px}';
    html += '.desc-match-tests{font-size:7.5pt;color:#777;margin-top:2px}';
    html += '.desc-match-warn{font-size:7.5pt;color:#c62828;margin-top:2px}';
    html += '.desc-match-more{font-size:7.5pt;color:#999;margin-top:4px}';
    // Dosaggi
    html += '.desc-dosaggi{width:100%;border-collapse:collapse;font-size:8.5pt;margin:6px 0}';
    html += '.desc-dosaggi th{text-align:left;font-size:7pt;text-transform:uppercase;letter-spacing:.4px;color:#999;border-bottom:1px solid #ddd;padding:3px 5px}';
    html += '.desc-dosaggi td{padding:3px 5px;border-bottom:1px solid #f0f0f0}';
    html += '.desc-dosaggi-note{font-size:8pt;color:#888;margin-top:3px}';
    // Tradeoffs
    html += '.desc-tradeoffs{margin-top:4px}';
    html += '.desc-tradeoff{margin-bottom:6px;font-size:9pt}';
    html += '.desc-tradeoff-q{font-weight:700;color:#1565c0}';
    // Difficulty detail
    html += '.desc-diff-detail{font-size:8pt;color:#888;margin-top:2px}';
    // Shopping
    html += 'table.sh{width:100%;border-collapse:collapse;font-size:9pt}';
    html += '.sh th{text-align:left;font-size:7pt;text-transform:uppercase;letter-spacing:.4px;color:#999;border-bottom:1px solid #ddd;padding:3px 4px}';
    html += '.sh td{padding:4px 4px;border-bottom:1px solid #f0f0f0}';
    // Avvertenza
    html += '.avv{background:#fff8e1;border-left:3px solid #ffa000;padding:8px 12px;margin-bottom:10px;font-size:9pt;border-radius:0 4px 4px 0}';
    // Footer
    html += '.ftr{margin-top:16px;padding-top:8px;border-top:1.5px solid #2d5a3d;display:flex;justify-content:space-between;font-size:7.5pt;color:#999}';
    html += '</style></head><body>';
    
    // HEADER
    html += '<div class="hdr"><div><h1>' + f.name + '</h1>';
    // Subtitle from primary matrix
    var primaryMatrix = (f.items || []).find(function(i) { return i.role === 'Matrice'; });
    if (primaryMatrix) {
        var formaInfo = '';
        try { formaInfo = IMPLICAZIONI_MATRICE[primaryMatrix.id]?.forma || ''; } catch(e) {}
        if (formaInfo) html += '<div class="sub">' + formaInfo + ' · Base: ' + primaryMatrix.ing.nome + '</div>';
    }
    html += '</div><div class="ri"><b>BioLab v22</b><br>Accademia Albertina di Belle Arti<br>Tipologia dei Nuovi Materiali<br>' + date + '</div></div>';
    
    // RELIABILITY + DIFFICULTY
    if (reliHtml || diffHtml) {
        html += '<div style="margin-bottom:12px">' + reliHtml + diffHtml + '</div>';
    }
    
    // TWO COLUMNS: formula + properties
    html += '<div class="cols"><div class="cl">';
    // Formula table
    html += '<table class="ft"><thead><tr><th>Ingrediente</th><th>Ruolo</th><th class="r">Grammi</th><th class="r">%</th></tr></thead>';
    html += '<tbody>' + formulaRows + '</tbody>';
    html += '<tfoot><tr><td colspan="2">Totale</td><td class="r">' + (f.total || 100) + 'g</td><td class="r">100%</td></tr></tfoot></table>';
    html += '<div class="aq">+ Acqua: rapporto 1:3–4 (' + Math.round((f.total||100)*3) + '–' + Math.round((f.total||100)*4) + ' ml)</div>';
    html += notesHtml;
    html += tagsHtml;
    html += '</div><div class="cr">';
    // Property bars
    html += barsHtml;
    html += '</div></div>';
    
    // DESCRIPTION SECTIONS — split into two columns where possible
    html += '<div class="cols"><div class="cl">';
    
    // Walk sections, distribute them between left and right columns
    var allSections = [];
    if (descEl) {
        var titles = descEl.querySelectorAll('.desc-title');
        titles.forEach(function(titleEl) {
            var content = '';
            var sibling = titleEl.nextElementSibling;
            while (sibling && !sibling.classList.contains('desc-title') && !sibling.classList.contains('desc-reliability') && !sibling.classList.contains('desc-difficulty')) {
                content += sibling.outerHTML || '';
                sibling = sibling.nextElementSibling;
            }
            allSections.push({ title: titleEl.textContent.trim(), html: content });
        });
    }
    
    // Assign sections to left/right columns
    var leftSections = ['Forma e consistenza', 'Aspetto visivo', 'Al tatto', 'Comportamento con acqua', 'Possibili utilizzi', 'E se volessi...'];
    var rightSections = ['Materiali simili testati', 'Note di lavorazione', 'Dosaggi consigliati', 'Coating superficiale', 'Durabilita e conservazione', 'Durabilità e conservazione', 'Punti di attenzione'];
    
    var leftHtml = '', rightHtml = '', extraHtml = '';
    allSections.forEach(function(s) {
        var block = '<div class="sec"><div class="st">' + s.title + '</div>' + s.html + '</div>';
        if (leftSections.some(function(ls) { return s.title.indexOf(ls) >= 0 || ls.indexOf(s.title) >= 0; })) {
            leftHtml += block;
        } else if (rightSections.some(function(rs) { return s.title.indexOf(rs) >= 0 || rs.indexOf(s.title) >= 0; })) {
            rightHtml += block;
        } else {
            // Tecnica, other dynamic sections → left
            leftHtml += block;
        }
    });
    
    html += leftHtml;
    html += '</div><div class="cr">';
    html += rightHtml;
    
    // Shopping list always in right column at bottom
    html += '<div class="sec"><div class="st">Lista della spesa</div>';
    html += '<table class="sh"><thead><tr><th>Ingrediente</th><th>Qty</th><th>Reperibilità</th></tr></thead>';
    html += '<tbody>' + shopRows + '</tbody></table></div>';
    
    html += '</div></div>';
    
    // FOOTER
    html += '<div class="ftr"><span>BioLab v22 · Accademia Albertina di Belle Arti · Tipologia dei Nuovi Materiali</span>';
    html += '<span>Formula sperimentale — verificare sempre in laboratorio</span></div>';
    
    html += '</body></html>';
    
    // Open in new window and print
    var win = window.open('', '_blank');
    if (win) {
        win.document.write(html);
        win.document.close();
        showToast('Attiva "Grafica in background" per stampare i colori', 'info');
        setTimeout(function() { win.onafterprint = function() { win.close(); }; win.print(); }, 500);
    } else {
        showToast('Popup bloccato — abilita popup per questo sito', 'error');
    }
}
// LOCAL STORAGE

// =============================================
// LOCAL STORAGE
// =============================================
function saveLabState() {
    try {
        localStorage.setItem('biolab_tavolo', JSON.stringify(tavolo));
        localStorage.setItem('biomaterialiSelection', JSON.stringify([...formulaSelection]));
        localStorage.setItem('biomaterialiCustomDosages', JSON.stringify(customDosages));
        localStorage.setItem('biomaterialiTecnica', currentTecnica);
        localStorage.setItem('biomaterialiCoating', coatingAttivo ? '1' : '0');
    } catch(e) { console.warn('saveLabState error:', e); }
}

function loadLabState() {
    try {
        // Tavolo from shared key
        var savedTavolo = JSON.parse(localStorage.getItem('biolab_tavolo') || '[]');
        tavolo = savedTavolo.map(function(t) { return typeof t === 'object' ? t.id : t; }).filter(Boolean);
        
        // If tavolo empty but BioLab.cart has items, populate from cart
        if (tavolo.length === 0 && BioLab.cart.length > 0) {
            BioLab.cart.forEach(function(c) { if (c && c.id) tavolo.push(c.id); });
        }
        
        // Ensure tavolo items are in BioLab.cart (silent, no toasts)
        var ings = (typeof INGREDIENTI_DATA !== 'undefined') ? INGREDIENTI_DATA.ingredienti || {} : {};
        var cartChanged = false;
        tavolo.forEach(function(id) {
            if (!BioLab.isInCart(id) && ings[id]) {
                BioLab.cart.push({ id: id, nome: ings[id].nome, famiglia: ings[id].famiglia });
                cartChanged = true;
            }
        });
        if (cartChanged) BioLab.saveCart();
        
        var savedSelection = JSON.parse(localStorage.getItem('biomaterialiSelection') || '[]');
        var savedDosages = JSON.parse(localStorage.getItem('biomaterialiCustomDosages') || '{}');
        var savedTecnica = localStorage.getItem('biomaterialiTecnica') || 'colata';
        var savedCoating = localStorage.getItem('biomaterialiCoating') === '1';
        
        formulaSelection = new Set(savedSelection);
        customDosages = savedDosages;
        currentTecnica = savedTecnica;
        coatingAttivo = savedCoating;
        
        // If tavolo has items but no selection (from componi), auto-select all
        if (tavolo.length > 0 && formulaSelection.size === 0) {
            tavolo.forEach(function(id) { formulaSelection.add(id); });
        }
        
        // Restore tecnica UI
        document.querySelectorAll('.tecnica-btn').forEach(function(b) {
            b.classList.toggle('active', b.dataset.tecnica === currentTecnica);
        });
        var cb = document.getElementById('coatingCheck');
        if (cb) cb.checked = coatingAttivo;
        
        updateCart();
        updateTavolo();
        loadSavedFormulas();
    } catch(e) { console.warn('loadLabState:', e); }
}

// =============================================
// EXPORT / IMPORT DATI
// =============================================
function exportLabData() {
    try {
        var data = {
            _meta: {
                app: 'BioLab v22',
                exportDate: new Date().toISOString(),
                version: 1
            },
            biolab_archive: JSON.parse(localStorage.getItem('biolab_archive') || '[]'),
            biolab_cart: JSON.parse(localStorage.getItem('biolab_cart') || '[]'),
            biolab_tavolo: JSON.parse(localStorage.getItem('biolab_tavolo') || '[]'),
            biomaterialiSelection: JSON.parse(localStorage.getItem('biomaterialiSelection') || '[]'),
            biomaterialiCustomDosages: JSON.parse(localStorage.getItem('biomaterialiCustomDosages') || '{}'),
            biomaterialiTecnica: localStorage.getItem('biomaterialiTecnica') || 'colata',
            biomaterialiCoating: localStorage.getItem('biomaterialiCoating') || '0'
        };
        var nFormule = data.biolab_archive.length;
        var nCart = data.biolab_cart.length;
        var json = JSON.stringify(data, null, 2);
        var blob = new Blob([json], { type: 'application/json;charset=utf-8' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        var dateStr = new Date().toISOString().slice(0, 10);
        a.download = 'biolab_backup_' + dateStr + '.json';
        a.click();
        URL.revokeObjectURL(a.href);
        showToast('Backup esportato (' + nFormule + ' formule, ' + nCart + ' nel carrello)', 'success');
    } catch(e) {
        console.error('exportLabData:', e);
        showToast('Errore durante l\'esportazione', 'error');
    }
}

function importLabData(input) {
    var file = input.files && input.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var data = JSON.parse(e.target.result);
            // Validate
            if (!data._meta || !data._meta.app || !data._meta.app.startsWith('BioLab')) {
                showToast('File non valido — non è un backup BioLab', 'error');
                input.value = '';
                return;
            }
            var nFormule = (data.biolab_archive || []).length;
            var existingArchive = JSON.parse(localStorage.getItem('biolab_archive') || '[]');
            var nExisting = existingArchive.length;
            
            var msg = 'Importare il backup del ' + new Date(data._meta.exportDate).toLocaleDateString('it-IT') + '?';
            msg += '<br><br>Contiene <b>' + nFormule + ' formule</b>.';
            if (nExisting > 0) {
                msg += '<br><br>Hai già <b>' + nExisting + ' formule</b> salvate.';
                msg += '<br>Le formule importate verranno <b>aggiunte</b> (nessun dato verrà cancellato).';
            }
            
            showConfirmModal('Importa dati', msg, function() {
                try {
                    // Merge archives — add imported formulas, skip duplicates by id
                    var currentArchive = JSON.parse(localStorage.getItem('biolab_archive') || '[]');
                    var existingIds = new Set(currentArchive.map(function(f) { return f.id; }));
                    var imported = (data.biolab_archive || []);
                    var added = 0;
                    imported.forEach(function(f) {
                        if (!existingIds.has(f.id)) {
                            currentArchive.push(f);
                            added++;
                        }
                    });
                    localStorage.setItem('biolab_archive', JSON.stringify(currentArchive));
                    
                    // Merge cart — add new items
                    var currentCart = JSON.parse(localStorage.getItem('biolab_cart') || '[]');
                    var cartIds = new Set(currentCart.map(function(c) { return c.id; }));
                    (data.biolab_cart || []).forEach(function(c) {
                        if (c.id && !cartIds.has(c.id)) {
                            currentCart.push(c);
                        }
                    });
                    localStorage.setItem('biolab_cart', JSON.stringify(currentCart));
                    
                    // Restore tavolo and settings from backup
                    if (data.biolab_tavolo) localStorage.setItem('biolab_tavolo', JSON.stringify(data.biolab_tavolo));
                    if (data.biomaterialiSelection) localStorage.setItem('biomaterialiSelection', JSON.stringify(data.biomaterialiSelection));
                    if (data.biomaterialiCustomDosages) localStorage.setItem('biomaterialiCustomDosages', JSON.stringify(data.biomaterialiCustomDosages));
                    if (data.biomaterialiTecnica) localStorage.setItem('biomaterialiTecnica', data.biomaterialiTecnica);
                    if (data.biomaterialiCoating) localStorage.setItem('biomaterialiCoating', data.biomaterialiCoating);
                    
                    // Reload state
                    BioLab.loadCart();
                    loadLabState();
                    
                    showToast(added + ' formule importate' + (nFormule - added > 0 ? ', ' + (nFormule - added) + ' già presenti' : ''), 'success');
                } catch(e2) {
                    console.error('importLabData apply:', e2);
                    showToast('Errore durante l\'importazione', 'error');
                }
            });
        } catch(e) {
            console.error('importLabData parse:', e);
            showToast('File non valido — JSON non leggibile', 'error');
        }
        input.value = '';
    };
    reader.readAsText(file);
}

function printPortfolio() {
    var saved = BioLab.getArchiveByOrigine('lab');
    if (saved.length === 0) {
        showToast('Nessuna formula salvata da stampare', 'info');
        return;
    }
    
    var ings = INGREDIENTI_DATA?.ingredienti || {};
    var date = new Date().toLocaleDateString('it-IT');
    var roleColors = {
        'Matrice': '#1565c0', 'Plastificante': '#43a047',
        'Reticolante': '#e53935', 'Carica/Fibra': '#795548', 'Colorante': '#7b1fa2',
        'Lipide/Coating': '#f57f17', 'Additivo': '#607d8b',
        'Coltura': '#00897b', 'Regolatore pH': '#ec407a', 'Altro': '#607d8b'
    };
    
    var html = '<!DOCTYPE html><html lang="it"><head><meta charset="UTF-8">';
    html += '<title>Portfolio Formule — BioLab</title>';
    html += '<style>';
    html += '@page{size:A4;margin:12mm 14mm}';
    html += '*{box-sizing:border-box;margin:0;padding:0}';
    html += 'body{font-family:"Segoe UI",system-ui,-apple-system,sans-serif;font-size:9pt;line-height:1.4;color:#1a1a1a;-webkit-print-color-adjust:exact;print-color-adjust:exact}';
    html += '.hdr{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2.5px solid #2d5a3d;padding-bottom:8px;margin-bottom:14px}';
    html += '.hdr h1{font-size:16pt;color:#2d5a3d;font-weight:700}';
    html += '.hdr .sub{font-size:9pt;color:#666;margin-top:2px}';
    html += '.hdr .ri{text-align:right;font-size:8pt;color:#888}';
    html += '.hdr .ri b{color:#2d5a3d;font-size:9pt}';
    html += '.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}';
    html += '.card{border:1px solid #ddd;border-radius:8px;padding:10px 12px;break-inside:avoid;page-break-inside:avoid}';
    html += '.card-hdr{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;border-bottom:1px solid #eee;padding-bottom:5px}';
    html += '.card-name{font-size:10pt;font-weight:700;color:#2d5a3d}';
    html += '.card-date{font-size:7.5pt;color:#999}';
    html += '.card-num{font-size:7.5pt;color:#999;margin-top:1px}';
    html += '.ing-row{display:flex;justify-content:space-between;padding:2px 0;font-size:8.5pt;border-bottom:1px solid #f5f5f5}';
    html += '.ing-name{display:flex;align-items:center;gap:4px}';
    html += '.dot{display:inline-block;width:6px;height:6px;border-radius:50%}';
    html += '.ing-pct{color:#888;font-size:8pt}';
    html += '.bars{margin-top:6px}';
    html += '.bar-r{display:flex;align-items:center;margin-bottom:2px}';
    html += '.bar-l{width:55px;font-size:7.5pt;color:#777}';
    html += '.bar-bg{flex:1;height:6px;background:#eee;border-radius:3px;overflow:hidden;display:block}';
    html += '.bar-f{display:block;height:100%;border-radius:3px}';
    html += '.bar-v{width:28px;text-align:right;font-size:7.5pt;font-weight:600;color:#555}';
    html += '.tags{display:flex;gap:4px;flex-wrap:wrap;margin-top:5px}';
    html += '.tag{font-size:6.5pt;padding:1px 5px;border-radius:8px;font-weight:600}';
    html += '.tg{background:#e8f5e9;color:#2e7d32}.tn{background:#fce4ec;color:#c62828}';
    html += '.tt{background:#e3f2fd;color:#1565c0}';
    html += '.annot{font-size:8pt;color:#555;font-style:italic;margin-top:5px;padding-top:4px;border-top:1px dashed #e0e0e0}';
    html += '.ftr{margin-top:16px;padding-top:6px;border-top:1.5px solid #2d5a3d;display:flex;justify-content:space-between;font-size:7.5pt;color:#999}';
    html += '.stats{display:flex;gap:16px;margin-bottom:14px;font-size:8.5pt;color:#555}';
    html += '.stat-n{font-weight:700;color:#2d5a3d;font-size:10pt}';
    html += '</style></head><body>';
    
    // HEADER
    html += '<div class="hdr"><div>';
    html += '<h1>Portfolio Formule</h1>';
    html += '<div class="sub">Riepilogo formule salvate</div>';
    html += '</div><div class="ri"><b>BioLab v22</b><br>Accademia Albertina di Belle Arti<br>' + date + '</div></div>';
    
    // STATS
    var allIngs = new Set();
    var allFams = new Set();
    saved.forEach(function(f) {
        (f.ingredientIds || []).forEach(function(id) {
            allIngs.add(id);
            if (ings[id]) allFams.add(ings[id].famiglia);
        });
    });
    html += '<div class="stats">';
    html += '<span><span class="stat-n">' + saved.length + '</span> formule</span>';
    html += '<span><span class="stat-n">' + allIngs.size + '</span> ingredienti unici</span>';
    html += '<span><span class="stat-n">' + allFams.size + '</span> famiglie chimiche</span>';
    var dates = saved.map(function(f) { return new Date(f.date); }).filter(function(d) { return !isNaN(d.getTime()); }).sort(function(a,b) { return a-b; });
    if (dates.length > 1) {
        html += '<span>' + dates[0].toLocaleDateString('it-IT', {day:'numeric',month:'short'}) + ' — ' + dates[dates.length-1].toLocaleDateString('it-IT', {day:'numeric',month:'short',year:'numeric'}) + '</span>';
    }
    html += '</div>';
    
    // CARDS
    html += '<div class="grid">';
    var sorted = saved.slice().sort(function(a,b) { return new Date(b.date) - new Date(a.date); });
    
    sorted.forEach(function(f, idx) {
        var fDate = f.date ? new Date(f.date).toLocaleDateString('it-IT', { day:'2-digit', month:'short', year:'numeric' }) : '—';
        var items = f.items || [];
        var props = f.properties || {};
        
        // Reconstruct from ingredientIds if items missing
        if (items.length === 0 && f.ingredientIds && f.ingredientIds.length > 0) {
            var matFams = ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'];
            var famRole = { PLASTIFICANTE:'Plastificante', CARICA:'Carica/Fibra', SALE_RETICOLANTE:'Reticolante',
                RESINA_LIPIDE:'Lipide/Coating', LIPIDE:'Lipide/Coating', COLORANTE:'Colorante', ACIDO:'Regolatore pH', ADDITIVO:'Altro', SOLVENTE:'Altro' };
            var mats = [], others = [];
            f.ingredientIds.forEach(function(id) {
                var ing = ings[id];
                if (!ing) return;
                var role = matFams.includes(ing.famiglia) ? 'Matrice' : (famRole[ing.famiglia] || 'Altro');
                var item = { id: id, ing: ing, role: role, percent: 0 };
                if (role === 'Matrice') mats.push(item); else others.push(item);
            });
            // Assign rough percentages
            var perMat = mats.length > 0 ? Math.round(70 / mats.length) : 0;
            mats.forEach(function(m) { m.percent = perMat; });
            others.forEach(function(o) {
                if (o.role === 'Plastificante') o.percent = 20;
                else if (o.role === 'Reticolante') o.percent = 5;
                else if (o.role === 'Carica/Fibra') o.percent = 15;
                else if (o.role === 'Colorante') o.percent = 3;
                else o.percent = 5;
            });
            // Apply saved custom dosages
            if (f.customDosages) {
                mats.concat(others).forEach(function(item) {
                    if (f.customDosages[item.id] !== undefined) item.percent = f.customDosages[item.id];
                });
            }
            items = mats.concat(others);
        }
        
        // Reconstruct name from ingredients if generic
        var displayName = f.name || 'Formula';
        if (displayName === 'Formula' && items.length > 0) {
            displayName = items.filter(function(it) { return it.role === 'Matrice'; })
                .map(function(it) { return it.ing?.nome || it.id; }).join(' + ');
            var mods = items.filter(function(it) { return it.role !== 'Matrice'; });
            if (mods.length > 0) displayName += ' · ' + mods[0].ing?.nome || mods[0].id;
            if (mods.length > 1) displayName += ' +' + (mods.length - 1);
        }
        
        var total = items.reduce(function(s, it) { return s + (it.percent || 0); }, 0) || (f.total || 100);
        
        // Estimate properties if missing
        if (!props.trasparenza && items.length > 0) {
            var hasPlast = items.some(function(it) { return it.role === 'Plastificante'; });
            var hasCarica = items.some(function(it) { return it.role === 'Carica/Fibra'; });
            var hasRetic = items.some(function(it) { return it.role === 'Reticolante'; });
            var hasLipide = items.some(function(it) { return it.role === 'Lipide/Coating'; });
            props = {
                trasparenza: hasCarica ? 20 : 65,
                flessibilita: hasPlast ? 70 : 35,
                resistenzaH2O: (hasRetic ? 20 : 0) + (hasLipide ? 25 : 0) + 20,
                resistenzaMecc: (hasRetic ? 15 : 0) + (hasCarica ? 15 : 0) + 40
            };
        }
        
        html += '<div class="card">';
        html += '<div class="card-hdr"><div>';
        html += '<div class="card-name">' + displayName + '</div>';
        html += '<div class="card-num">#' + (sorted.length - idx) + ' · ' + items.length + ' ing. · ' + total + 'g</div>';
        html += '</div><div class="card-date">' + fDate + '</div></div>';
        
        // Ingredients
        items.forEach(function(item) {
            var color = roleColors[item.role] || '#888';
            var effPct = total > 0 ? Math.round(item.percent / total * 100) : 0;
            html += '<div class="ing-row"><span class="ing-name"><span class="dot" style="background:' + color + '"></span>' + (item.ing?.nome || item.id || '?') + '</span>';
            html += '<span class="ing-pct">' + item.percent + 'g · ' + effPct + '%</span></div>';
        });
        
        // Bars
        function bC(v) { return v > 55 ? '#43a047' : '#ef6c00'; }
        html += '<div class="bars">';
        ['trasparenza','flessibilita','resistenzaH2O','resistenzaMecc'].forEach(function(k, i) {
            var labels = ['Trasp.','Flex.','H₂O','Mecc.'];
            var v = props[k] || 0;
            html += '<div class="bar-r"><span class="bar-l">' + labels[i] + '</span><span class="bar-bg"><span class="bar-f" style="width:' + v + '%;background:' + bC(v) + '"></span></span><span class="bar-v">' + v + '</span></div>';
        });
        html += '</div>';
        
        // Tags
        var veg = true, fs = true;
        items.forEach(function(item) {
            if (item.ing && !item.ing.vegano) veg = false;
            if (item.ing && !item.ing.food_safe) fs = false;
        });
        html += '<div class="tags">';
        html += fs ? '<span class="tag tg">Food-safe</span>' : '<span class="tag tn">Non food-safe</span>';
        html += veg ? '<span class="tag tg">Vegano</span>' : '<span class="tag tn">Non vegano</span>';
        if (f.tecnica && f.tecnica !== 'colata') html += '<span class="tag tt">' + f.tecnica + '</span>';
        if (f.coating) html += '<span class="tag tt">+coating</span>';
        html += '</div>';
        
        // Annotations
        if (f.annotations && f.annotations.trim()) {
            var ann = f.annotations.trim();
            if (ann.length > 120) ann = ann.substring(0, 117) + '...';
            html += '<div class="annot">' + ann.replace(/\n/g, ' · ') + '</div>';
        }
        
        html += '</div>';
    });
    
    html += '</div>';
    
    // FOOTER
    html += '<div class="ftr"><span>BioLab v22 · Accademia Albertina · Portfolio Formule</span>';
    html += '<span>Generato il ' + date + ' · ' + saved.length + ' formule</span></div>';
    html += '</body></html>';
    
    var win = window.open('', '_blank');
    if (win) {
        win.document.write(html);
        win.document.close();
        showToast('Attiva "Grafica in background" per i colori', 'info');
        setTimeout(function() { win.onafterprint = function() { win.close(); }; win.print(); }, 500);
    } else {
        showToast('Popup bloccato — abilita popup per questo sito', 'error');
    }
}

// =============================================
// CHIEDI A CLAUDE — prompt pre-compilato
// =============================================
function askClaude() {
    var ings = INGREDIENTI_DATA.ingredienti;
    var selected = tavolo.filter(function(id) { return formulaSelection.has(id); });
    
    if (selected.length === 0) {
        showToast('Seleziona almeno un ingrediente nella formula', 'warning');
        return;
    }
    
    // Build ingredient list with roles and dosages
    var ingredientList = selected.map(function(id) {
        var ing = ings[id];
        if (!ing) return id;
        var dose = customDosages[id] || getBasePercent(id);
        var fam = ing.famiglia || '';
        var role = '';
        if (['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'].indexOf(fam) >= 0) role = 'matrice';
        else if (fam === 'PLASTIFICANTE') role = 'plastificante';
        else if (fam === 'SALE_RETICOLANTE') role = 'reticolante';
        else if (fam === 'CARICA') role = 'carica';
        else if (fam === 'RESINA_LIPIDE' || fam === 'LIPIDE') role = 'lipide/coating';
        else if (fam === 'COLORANTE') role = 'colorante';
        else role = 'additivo';
        return '- ' + (ing.nome || id) + ' (' + role + ', ' + dose + 'g)';
    }).join('\n');
    
    var tecnica = currentTecnica || 'colata';
    var coating = coatingAttivo ? 'Si, coating lipidico previsto' : 'No';
    
    var prompt = 'Sono uno studente di design all\'Accademia Albertina di Torino. '
        + 'Sto sperimentando con biomateriali nel laboratorio. '
        + 'Ho formulato questa ricetta e vorrei il tuo parere:\n\n'
        + 'INGREDIENTI:\n' + ingredientList + '\n\n'
        + 'Tecnica di lavorazione: ' + tecnica + '\n'
        + 'Coating: ' + coating + '\n\n'
        + 'Puoi dirmi:\n'
        + '1. La compatibilita chimica tra questi ingredienti e corretta?\n'
        + '2. Le proporzioni ti sembrano ragionevoli?\n'
        + '3. Quali problemi potrei incontrare durante la lavorazione?\n'
        + '4. Suggerimenti per migliorare il risultato?\n\n'
        + 'Rispondi in italiano, in modo pratico e adatto a uno studente di design (non chimico).';
    
    var url = 'https://claude.ai/new?q=' + encodeURIComponent(prompt);
    window.open(url, '_blank');
}

// Callback da biolab-core.js quando il carrello cambia dal pannello

