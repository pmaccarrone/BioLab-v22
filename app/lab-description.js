// ============================================================
// LAB-DESCRIPTION.JS — Generazione testo descrittivo materiale
// Estratto da lab.html per modularità
// ============================================================

function generateMaterialDescription(selectedIds, matrice, plastificante, lipide, trasp, flex, resistH2O, resistMecc, vegano, foodSafe, limits) {
  try {
    const descEl = document.getElementById('descriptionContent');
    if (!descEl) return;
    
    const materialiDB = (typeof MATERIALI_DATA !== 'undefined') ? MATERIALI_DATA : null;
    
    if (selectedIds.length === 0) {
        descEl.innerHTML = '<div class="description-empty">Aggiungi ingredienti al tavolo per vedere una descrizione del possibile materiale</div>';
        return;
    }
    
    const ings = INGREDIENTI_DATA?.ingredienti || {};
    let html = '';

    
    var reliability = calculateReliabilityScore(selectedIds, limits || []);
    html += '<div class="desc-reliability" style="background:linear-gradient(135deg, ' + reliability.color + '22, ' + reliability.color + '11); border-left:4px solid ' + reliability.color + '; padding:12px 15px; margin-bottom:15px; border-radius:0 8px 8px 0;">';
    html += '<div style="display:flex; align-items:center; gap:10px; margin-bottom:6px;">';
    html += '<span style="font-size:1.5em; color:' + reliability.color + '">' + reliability.icon + '</span>';
    html += '<span style="font-weight:600; color:' + reliability.color + '; font-size:1.1em;">' + reliability.label + '</span>';
    html += '<span style="background:' + reliability.color + '; color:white; padding:2px 8px; border-radius:12px; font-size:0.85em; font-weight:600;">' + reliability.score + '%</span>';
    html += '</div>';
    if (reliability.reasons.length > 0) {
        html += '<div style="font-size:0.85em; color:#555;">' + reliability.reasons.slice(0,2).join(' - ') + '</div>';
    }
    if (reliability.bestMatch && reliability.bestJaccard >= 0.5) {
        var linkId = reliability.bestMatch.id || '';
        html += '<div style="font-size:0.8em; color:#777; margin-top:4px;">Riferimento: <strong>' + reliability.bestMatch.nome + '</strong> (' + Math.round(reliability.bestJaccard * 100) + '% affinita)';
        
        html += '</div>';
    }
    html += '</div>';        
    // Raccogli info dettagliate su tutti gli ingredienti
    let hasCarica = false, hasColorante = false, hasReticolante = false, hasAcido = false, hasEmulsionante = false;
    let hasFibra = false, hasAmido = false, hasGelatina = false, hasAgar = false, hasAlginato = false;
    let hasCaseina = false, hasChitosano = false, hasPectina = false, hasGlicerina = false;
    let hasCera = false, hasGommalacca = false, hasTannini = false, hasCarbone = false;
    let matriceNome = matrice ? matrice.nome : null;
    let matriceFamiglia = matrice ? matrice.famiglia : null;
    let plastificanteNome = plastificante ? plastificante.nome : null;
    let lipideNome = lipide ? lipide.nome : null;
    let numIngredienti = selectedIds.length;
    let caricaNome = null, coloranteNome = null;
    
    selectedIds.forEach(id => {
        const ing = ings[id];
        if (!ing) return;
        const nome = (ing.nome || '').toLowerCase();
        const fam = ing.famiglia;
        
        if (fam === 'CARICA') { hasCarica = true; caricaNome = ing.nome; }
        if (fam === 'COLORANTE') { hasColorante = true; coloranteNome = ing.nome; }
        if (fam === 'SALE_RETICOLANTE') hasReticolante = true;
        if (fam === 'ACIDO') hasAcido = true;
        if (fam === 'EMULSIONANTE') hasEmulsionante = true;
        
        // Ingredienti specifici - controlli precisi con termini IT/EN
        // FIBRE: esclude "olio di lino", "alginato", "caolino"
        const isOlioLino = nome.includes('olio') && nome.includes('lino');
        const isAlginato = nome.includes('alginato') || nome.includes('alginate');
        const isCaolino = nome.includes('caolino') || nome.includes('kaolin');
        const isFibraTerms = nome.includes('fibr') || nome.includes('fiber') || nome.includes('fibre') ||
            nome.includes('juta') || nome.includes('jute') || 
            nome.includes('canapa') || nome.includes('hemp') ||
            nome.includes('flax') || nome.includes('sisal') || nome.includes('kenaf') ||
            (nome.includes('lino') && !isOlioLino && !isAlginato && !isCaolino) ||
            (nome.includes('cellulosa') && !nome.includes('batterica')) ||
            (nome.includes('cellulose') && !nome.includes('bacterial'));
        if (isFibraTerms) hasFibra = true;
        if (nome.includes('amido')) hasAmido = true;
        if (nome.includes('gelatina')) hasGelatina = true;
        if (nome.includes('agar')) hasAgar = true;
        if (nome.includes('alginato')) hasAlginato = true;
        if (nome.includes('caseina')) hasCaseina = true;
        if (nome.includes('chitosano')) hasChitosano = true;
        if (nome.includes('pectina')) hasPectina = true;
        if (nome.includes('glicerina') || nome.includes('sorbitolo')) hasGlicerina = true;
        if (nome.includes('cera') || nome.includes('carnauba') || nome.includes('candelilla')) hasCera = true;
        if (nome.includes('gommalacca')) hasGommalacca = true;
        if (nome.includes('tannin')) hasTannini = true;
        if (nome.includes('carbone')) hasCarbone = true;
    });
    
    // Rileva ingredienti che riducono SEMPRE la trasparenza (anche se non classificati come CARICA)
    let hasOpacizzante = false;
    let opacizzanteNome = null;
    selectedIds.forEach(id => {
        const ing = ings[id];
        if (!ing) return;
        const nome = (ing.nome || '').toLowerCase();
        // Bucce, scarti, polveri, fondi, fibre = sempre opachi (IT/EN)
        if (nome.includes('bucc') || nome.includes('peel') || nome.includes('scorz') || 
            nome.includes('agrumi') || nome.includes('citrus') ||
            nome.includes('aranci') || nome.includes('orange') || 
            nome.includes('limon') || nome.includes('lemon') || nome.includes('pomelo') ||
            nome.includes('scart') || nome.includes('waste') || 
            nome.includes('fondi') || nome.includes('ground') || nome.includes('coffee') || nome.includes('caffe') ||
            nome.includes('polpa') || nome.includes('pulp') || 
            nome.includes('pula') || nome.includes('husk') || nome.includes('crusca') || nome.includes('bran') ||
            nome.includes('gusci') || nome.includes('shell') || 
            nome.includes('noccioli') || nome.includes('pit') || nome.includes('seed') ||
            nome.includes('legno') || nome.includes('wood') || 
            nome.includes('segatura') || nome.includes('sawdust') || 
            nome.includes('sughero') || nome.includes('cork') ||
            nome.includes('vinaccia') || nome.includes('grape') || nome.includes('marc') ||
            nome.includes('lolla') || nome.includes('bagassa') || nome.includes('bagasse')) {
            hasOpacizzante = true;
            opacizzanteNome = ing.nome;
        }
    });
    
    // Calcola trasparenza reale considerando opacizzanti
    let traspReale = trasp;
    if (hasOpacizzante) traspReale = Math.min(traspReale, 25); // Max 25% con scarti/bucce
    if (hasCarica) traspReale = Math.min(traspReale, 30);
    if (hasFibra) traspReale = Math.min(traspReale, 35);
    if (hasColorante || hasCarbone) traspReale = Math.min(traspReale, 40);
    
    // === LIVELLO DI DIFFICOLTÀ ===
    let diffLevel = 1;
    let diffReasons = [];
    const hasCarragenina = selectedIds.some(id => (ings[id]?.nome || '').toLowerCase().includes('carragenina'));
    const needsBoiling = hasAgar || hasCarragenina || hasAmido;
    
    if (selectedIds.length > 4) { diffLevel++; diffReasons.push('formula complessa (' + selectedIds.length + ' ingredienti)'); }
    if (selectedIds.length > 6) { diffLevel++; }
    if (needsBoiling) { diffLevel++; diffReasons.push('richiede ebollizione controllata'); }
    if (hasReticolante && hasAlginato) { diffLevel++; diffReasons.push('gelificazione ionica (timing critico)'); }
    if (matriceFamiglia === 'COLTURA') { diffLevel += 2; diffReasons.push('coltura biologica (giorni/settimane)'); }
    if (hasEmulsionante) { diffLevel++; diffReasons.push('emulsione (tecnica di miscelazione)'); }
    if (hasCaseina) { diffReasons.push('acidificazione e pressatura'); }
    if (hasChitosano) { diffReasons.push('dissoluzione in acido'); }
    if (hasAgar && hasGelatina) { diffReasons.push('temperature incompatibili da gestire'); }
    diffLevel = Math.min(diffLevel, 5);
    
    const diffLabels = ['', 'Base', 'Facile', 'Intermedio', 'Avanzato', 'Esperto'];
    const diffColors = ['', '#4caf50', '#8bc34a', '#ff9800', '#f44336', '#9c27b0'];
    let dots = '';
    for (let d = 1; d <= 5; d++) {
        dots += '<span style="color:' + (d <= diffLevel ? diffColors[diffLevel] : '#ddd') + '; font-size:1.1em;">●</span>';
    }
    html += '<div class="desc-difficulty">' + dots + ' <span style="color:' + diffColors[diffLevel] + '; font-weight:600;">' + diffLabels[diffLevel] + '</span>';
    if (diffReasons.length > 0) {
        html += ' <span class="desc-diff-detail">– ' + diffReasons.slice(0, 3).join(', ') + '</span>';
    }
    html += '</div>';
    
    // === FORMA E CONSISTENZA ===
    html += '<div class="desc-title">Forma e consistenza</div>';
    if (!matrice) {
        html += '<p>Senza una <span class="desc-warning">matrice strutturante</span> (proteina, polisaccaride), gli ingredienti non formeranno un materiale solido autonomo. Otterrai probabilmente una miscela liquida, pastosa o una polvere che non si aggrega.</p>';
        if (hasCarica && !hasFibra) html += '<p>Le cariche minerali da sole non creano struttura: servono a rinforzare una matrice esistente.</p>';
    } else {
        // === MOTORE GENERICO FORMA (legge REGOLE_CHIMICHE.descrizione) ===
        let forma = '';
        if (typeof REGOLE_CHIMICHE !== 'undefined' && REGOLE_CHIMICHE.descrizione) {
            var regDesc = REGOLE_CHIMICHE.descrizione.per_matrice;
            var classRetic = REGOLE_CHIMICHE.classificazione_reticolanti || {};
            
            // Raccogli nomi reticolanti presenti
            var reticNomi = selectedIds.filter(function(id) { return ings[id] && ings[id].famiglia === 'SALE_RETICOLANTE'; })
                .map(function(id) { return (ings[id].nome || '').toLowerCase(); });
            var hasCaSalt = reticNomi.some(function(n) { return (classRetic.calcio_nome||[]).some(function(t) { return n.includes(t); }); });
            var hasBorace = reticNomi.some(function(n) { return n.includes('borace'); });
            var hasAllume = reticNomi.some(function(n) { return n.includes('allume'); });
            var hasSaleIonico = reticNomi.some(function(n) { return (classRetic.ionici_nome||[]).some(function(t) { return n.includes(t); }); });
            var hasKcl = reticNomi.some(function(n) { return n.includes('kcl') || (n.includes('cloruro') && n.includes('potassio')); });
            
            // Trova regole per questa famiglia matrice
            var famRules = regDesc[matriceFamiglia];
            if (famRules) {
                // Trova sotto-regola per ingrediente specifico o _default/_any
                var subRule = null;
                if (hasGelatina && famRules.gelatina) subRule = famRules.gelatina;
                else if (hasCaseina && famRules.caseina) subRule = famRules.caseina;
                else if (hasAgar && famRules.agar) subRule = famRules.agar;
                else if (hasAmido && famRules.amido) subRule = famRules.amido;
                else if (hasAlginato && famRules.alginato) subRule = famRules.alginato;
                else if (hasPectina && famRules.pectina) subRule = famRules.pectina;
                else if (hasChitosano && famRules.chitosano) subRule = famRules.chitosano;
                else if (famRules._any) subRule = famRules._any;
                else if (famRules._default) subRule = famRules._default;
                
                if (subRule) {
                    forma = subRule.base || '';
                    
                    // Dissoluzione (chitosano)
                    if (subRule.dissoluzione) forma += subRule.dissoluzione;
                    
                    // Plastificante
                    if (plastificante && subRule.con_plastificante) {
                        var pRules = subRule.con_plastificante;
                        if (hasGlicerina && pRules.glicerina) forma += pRules.glicerina;
                        else if (pRules._default) forma += pRules._default;
                    }
                    
                    // Carica
                    if (hasCarica && subRule.con_carica) forma += subRule.con_carica;
                    
                    // Fibra
                    if (hasFibra && subRule.con_fibra) forma += subRule.con_fibra;
                    
                    // Acido
                    if (hasAcido && subRule.con_acido) forma += subRule.con_acido;
                    
                    // Tannini (per COLTURA)
                    if (hasTannini && subRule.con_tannini) forma += subRule.con_tannini;
                    
                    // Reticolante — logica specifica per tipo
                    if (hasReticolante && subRule.con_reticolante) {
                        var rRules = subRule.con_reticolante;
                        // Gelatina/Proteina: distingue borace/allume/ionico/tannini
                        if (hasTannini && rRules.tannini) { /* gia gestito sopra */ }
                        else if (hasBorace && rRules.borace) forma += rRules.borace;
                        else if (hasAllume && rRules.allume) forma += rRules.allume;
                        else if (hasSaleIonico && rRules._ionico) forma += rRules._ionico;
                        // Alginato: distingue calcio / non-calcio / assente
                        else if (hasCaSalt && rRules._calcio) forma += rRules._calcio;
                        else if (hasKcl && rRules.kcl) forma += rRules.kcl;
                        else if (!hasCaSalt && rRules._non_calcio) forma += rRules._non_calcio;
                        else if (!hasCaSalt && rRules._non_ionico) forma += rRules._non_ionico;
                        else if (rRules._default) forma += rRules._default;
                    } else if (!hasReticolante && subRule.con_reticolante && subRule.con_reticolante._assente) {
                        forma += subRule.con_reticolante._assente;
                    }
                }
            }
            
            // Combinazioni generiche
            if (REGOLE_CHIMICHE.descrizione.combinazioni) {
                REGOLE_CHIMICHE.descrizione.combinazioni.forEach(function(combo) {
                    if (combo.condizione.matrice_presente && matrice) {
                        if (combo.condizione.flag === 'hasFibra' && hasFibra) html += combo.testo;
                    }
                });
            }
        }
        
        html += '<p>' + forma + '</p>';
        
        // Cariche minerali (non fibra)
        if (matrice && hasCarica && !hasFibra) {
            html += '<p>Le <span class=desc-highlight>cariche minerali</span> (' + (caricaNome || 'minerali') + ') aumenteranno rigidita e resistenza al graffio, ma renderanno il materiale piu fragile e opaco.</p>';
        }
    }
    // === MATERIALI SIMILI TESTATI ===
    if (materialiDB) {
        let simili = [];
        const MATRICE_FAMIGLIE = ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'];
        function hasMatriceOverlap(overlapIds) {
            return overlapIds.some(id => {
                const ing = ings[id];
                return ing && MATRICE_FAMIGLIE.includes(ing.famiglia);
            });
        }
        // Scan in_progress
        (materialiDB.materiali_in_progress || []).forEach(mat => {
            const matIngs = mat.ingredienti_correlati || [];
            const userNoAcqua = selectedIds.filter(id => id !== 'acqua');
            const matNoAcqua = matIngs.filter(id => id !== 'acqua');
            const overlap = userNoAcqua.filter(id => matNoAcqua.includes(id));
            const unionSize = new Set([...userNoAcqua, ...matNoAcqua]).size;
            const matriceInComune = hasMatriceOverlap(overlap);
            if ((overlap.length >= 2 && matriceInComune) || overlap.length >= 3 || (overlap.length >= 1 && matNoAcqua.length <= 2 && userNoAcqua.length <= 3 && matriceInComune)) {
                simili.push({
                    nome: mat.nome,
                    tipo: 'lab',
                    overlap: overlap.length,
                    jaccard: unionSize > 0 ? overlap.length / unionSize : 0,
                    consistenza: mat.consistenza || '',
                    colore: mat.colore || '',
                    trasparenza: mat.trasparenza || '',
                    test_acqua: mat.test_acqua || '',
                    test_calore: mat.test_calore || '',
                    test_flessione: mat.test_flessione || '',
                    cucibile: mat.cucibile || '',
                    incollabile: mat.incollabile || '',
                    problemi: mat.problemi_realizzazione || '',
                    id: mat.id
                });
            }
        });
        // Scan documentati
        (materialiDB.materiali_documentati || []).forEach(mat => {
            const matIngs = mat.ingredienti_correlati || mat.ingredienti || [];
            const userNoAcqua = selectedIds.filter(id => id !== 'acqua');
            const matNoAcqua = matIngs.filter(id => id !== 'acqua');
            const overlap = userNoAcqua.filter(id => matNoAcqua.includes(id));
            const unionSize = new Set([...userNoAcqua, ...matNoAcqua]).size;
            if (overlap.length >= 2) {
                const matriceInComune = hasMatriceOverlap(overlap);
                if (!matriceInComune && overlap.length < 3) return;
                simili.push({
                    nome: mat.nome || mat.subtitle || mat.name || '',
                    tipo: 'doc',
                    overlap: overlap.length,
                    jaccard: unionSize > 0 ? overlap.length / unionSize : 0,
                    trl: mat.trl || 0,
                    replicabile: mat.replicabile_lab || mat.replicabile || false
                });
            }
        });
        
        simili.sort((a, b) => b.jaccard - a.jaccard);
        
        if (simili.length > 0) {
            html += '<div class="desc-title">Materiali simili testati</div>';
            html += '<div class="desc-matches">';
            simili.slice(0, 4).forEach(m => {
                const pct = Math.round(m.jaccard * 100);
                const col = pct > 70 ? '#4caf50' : pct > 40 ? '#ff9800' : '#999';
                html += '<div class="desc-match-card">';
                html += '<div class="desc-match-header">';
                html += '<strong>' + m.nome + '</strong> ';
                html += '<span class="desc-match-badge" style="background:' + col + '">' + pct + '% affinita</span>';
                if (m.tipo === 'lab') html += ' <span class="desc-match-src">Lab Albertina</span>';
                else html += ' <span class="desc-match-src">Documentato' + (m.trl ? ' · TRL ' + m.trl : '') + '</span>';
                html += '</div>';
                if (m.tipo === 'lab') {
                    let det = [];
                    if (m.consistenza) det.push(m.consistenza);
                    if (m.colore) det.push(m.colore.toLowerCase());
                    if (m.trasparenza) det.push(m.trasparenza.toLowerCase());
                    if (det.length > 0) html += '<div class="desc-match-detail">' + det.join(' · ') + '</div>';
                    let tests = [];
                    if (m.test_flessione) tests.push('Flessione: ' + m.test_flessione.toLowerCase());
                    if (m.test_acqua) tests.push('Acqua: ' + m.test_acqua.toLowerCase());
                    if (m.test_calore) tests.push('Calore: ' + m.test_calore.toLowerCase());
                    if (tests.length > 0) html += '<div class="desc-match-tests">' + tests.join(' · ') + '</div>';
                    if (m.problemi) {
                        const probTrunc = m.problemi.length > 150 ? m.problemi.substring(0, 150).replace(/\s+\S*$/, '') + '...' : m.problemi;
                        html += '<div class="desc-match-warn">[!] ' + probTrunc + '</div>';
                    }
                }
                html += '</div>';
            });
            html += '</div>';
            if (simili.length > 4) {
                html += '<p class="desc-match-more">...e altri ' + (simili.length - 4) + ' materiali con ingredienti in comune</p>';
            }
        } else {
            let parziali = [];
            const userNoAcqua = selectedIds.filter(id => id !== 'acqua');
            (materialiDB.materiali_in_progress || []).forEach(mat => {
                const matIngs = (mat.ingredienti_correlati || []).filter(id => id !== 'acqua');
                const shared = userNoAcqua.filter(id => matIngs.includes(id));
                if (shared.length >= 1) {
                    parziali.push({ nome: mat.nome, shared: shared, tipo: 'lab' });
                }
            });
            (materialiDB.materiali_documentati || []).forEach(mat => {
                const matIngs = (mat.ingredienti_correlati || mat.ingredienti || []).filter(id => id !== 'acqua');
                const shared = userNoAcqua.filter(id => matIngs.includes(id));
                if (shared.length >= 1) {
                    parziali.push({ nome: mat.nome || mat.subtitle || '', shared: shared, tipo: 'doc' });
                }
            });
            if (parziali.length > 0) {
                html += '<div class="desc-title">Materiali simili testati</div>';
                html += '<p style="color:#666;font-size:0.85rem;margin-bottom:0.5rem;">Nessun materiale nel database condivide 2+ ingredienti con la tua ricetta. <strong>Stai esplorando territorio nuovo!</strong></p>';
                html += '<p style="color:#888;font-size:0.8rem;margin-bottom:0.5rem;">Materiali con 1 ingrediente in comune:</p>';
                html += '<div class="desc-matches">';
                parziali.sort((a, b) => b.shared.length - a.shared.length);
                parziali.slice(0, 5).forEach(p => {
                    const ingNames = p.shared.map(id => {
                        const ing = ings[id];
                        return ing ? ing.nome : id;
                    }).join(', ');
                    html += '<div class="desc-match-card" style="opacity:0.8">';
                    html += '<div class="desc-match-header"><strong>' + p.nome + '</strong>';
                    html += ' <span class="desc-match-src">' + (p.tipo === 'lab' ? 'Lab Albertina' : 'Documentato') + '</span></div>';
                    html += '<div class="desc-match-detail">In comune: ' + ingNames + '</div>';
                    html += '</div>';
                });
                html += '</div>';
            }
        }
    }
    
    // === ASPETTO VISIVO ===
    html += '<div class="desc-title">Aspetto visivo</div>';
    let aspetto = '';
    
    // Usa traspReale che considera opacizzanti, cariche, fibre, coloranti
    if (traspReale > 70) {
        aspetto = 'Il materiale sara <span class="desc-positive">molto trasparente</span>, quasi cristallino se lavorato con cura (senza bolle, essiccazione lenta).';
        // Nomina le matrici effettivamente presenti
        let matriciTrasp = [];
        if (hasAgar) matriciTrasp.push('agar');
        if (hasGelatina) matriciTrasp.push('gelatina');
        if (hasCarragenina) matriciTrasp.push('carragenina');
        if (hasAlginato) matriciTrasp.push('alginato');
        if (matriciTrasp.length > 0) aspetto += ' ' + matriciTrasp.map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(' e ') + ' puri possono raggiungere trasparenze simili al vetro.';
    } else if (traspReale > 40) {
        aspetto = 'Otterrai una <span class="desc-highlight">trasparenza parziale</span>: vedrai attraverso il materiale ma con un aspetto opalescente o "nebbiato".';
        if (hasAmido) aspetto += ' L\'amido tende naturalmente all\'opacita biancastra.';
        if (hasPectina && !hasOpacizzante) aspetto += ' La pectina pura puo essere traslucida, ma con estratti vegetali sara piu opaca.';
    } else {
        aspetto = 'Il materiale sara <span class="desc-warning">opaco</span>';
        if (hasOpacizzante) aspetto += ', per la presenza di ' + (opacizzanteNome || 'materiale vegetale') + ' che contiene particelle e pigmenti naturali';
        else if (hasCarica) aspetto += ', principalmente per le cariche minerali che diffondono la luce';
        else if (hasColorante) aspetto += ' per i coloranti aggiunti';
        else if (hasFibra) aspetto += ' a causa delle fibre di rinforzo';
        else if (hasCarbone) aspetto += ', con il carbone che dara un nero intenso';
        else if (hasAmido) aspetto += ', l\'amido produce naturalmente film opachi biancastri';
        else if (lipide) aspetto += ' per la presenza di resine e oli che riducono la trasparenza';
        else aspetto += ' per le caratteristiche intrinseche degli ingredienti';
        aspetto += '.';
    }
    if (hasColorante) {
        aspetto += ' ' + (coloranteNome || 'Il colorante') + ' dara tonalita naturali. ';
        aspetto += 'Nota: i coloranti naturali possono sbiadire con luce e tempo, e il colore puo variare con il pH del materiale.';
    }
    if (hasCarbone) {
        aspetto += ' Il carbone attivo conferira un <span class="desc-highlight">nero profondo</span> e proprieta assorbenti/deodoranti.';
    }
    if (lipide && hasCera) {
        aspetto += ' La cera dara una <span class="desc-highlight">finitura satinata</span> e un leggero effetto perlescente.';
    }
    html += '<p>' + aspetto + '</p>';
    
    // === SENSAZIONE AL TATTO ===
    html += '<div class="desc-title">Al tatto</div>';
    let tatto = '';
    if (flex > 70) {
        tatto = 'Sara <span class="desc-positive">morbido e flessibile</span>, piacevole da manipolare. Si pieghera facilmente senza rompersi.';
        if (hasGelatina && hasGlicerina) tatto += ' La combinazione gelatina+glicerina da un tatto simile alla gomma morbida o alla pelle sottile.';
    } else if (flex > 40) {
        tatto = 'Avra una <span class="desc-highlight">flessibilita moderata</span>: si piegera ma con resistenza, simile a un cartoncino spesso.';
        tatto += ' Piegature ripetute nello stesso punto potrebbero causare rottura.';
    } else {
        tatto = 'Il materiale sara <span class="desc-warning">rigido</span>: non si piega, si spezza. Simile a plastica dura o ceramica sottile.';
        if (!plastificante && matrice) tatto += ' Considera di aggiungere un plastificante se serve flessibilita.';
    }
    if (lipide) {
        if (hasCera) tatto += ' La cera dara una superficie <span class="desc-highlight">liscia e leggermente scivolosa</span>, idrorepellente al tatto.';
        else if (hasGommalacca) tatto += ' La gommalacca creera una superficie <span class="desc-highlight">lucida e dura</span>, simile a una vernice naturale.';
        else tatto += ' Il lipide dara una superficie leggermente cerosa o oleosa.';
    }
    if (hasFibra) {
        tatto += ' Le fibre potrebbero essere percepibili in superficie, dando una <span class="desc-highlight">texture tessile</span>.';
    }
    if (hasCarica) {
        tatto += ' Le cariche minerali possono dare una sensazione leggermente <span class="desc-highlight">granulosa o "terrosa"</span>.';
    }
    html += '<p>' + tatto + '</p>';
    
    // === COMPORTAMENTO CON ACQUA ===
    html += '<div class="desc-title">Comportamento con acqua</div>';
    let acqua = '';
    if (resistH2O > 60) {
        acqua = '<span class="desc-positive">Buona resistenza all\'umidita</span>: il materiale sopportera esposizioni prolungate senza deformarsi rapidamente.';
        if (lipide) {
            if (hasCera) acqua += ' La cera crea una vera barriera idrofoba - l\'acqua scorrera via.';
            else if (hasGommalacca) acqua += ' La gommalacca sigilla la superficie impedendo l\'assorbimento.';
            else acqua += ' Il coating lipidico protegge dalla penetrazione dell\'acqua.';
        }
        if (hasChitosano) acqua += ' Il chitosano e naturalmente piu idrofobico di altri biopolimeri.';
    } else if (resistH2O > 30) {
        acqua = '<span class="desc-highlight">Resistenza moderata</span>: il materiale sopportera schizzi o brevi esposizioni, ma si ammorbidira con contatto prolungato.';
        acqua += ' Evitare immersione diretta.';
    } else {
        acqua = '<span class="desc-warning">Molto sensibile all\'umidita</span>: ';
        if (hasGelatina) acqua += 'la gelatina si scioglie completamente in acqua tiepida. ';
        else if (hasAgar) acqua += 'l\'agar assorbe acqua e si gonfia, perdendo forma. ';
        else if (hasAmido) acqua += 'l\'amido diventa appiccicoso e si deforma. ';
        else acqua += 'il materiale si ammorbidira e deformera rapidamente. ';
        acqua += 'Questo puo essere un <span class="desc-positive">vantaggio</span> per materiali pensati per dissolversi/compostarsi velocemente.';
    }
    html += '<p>' + acqua + '</p>';
    
    // === v91: TECNICA DI LAVORAZIONE ===
    if (currentTecnica && currentTecnica !== 'colata') {
        var tecInfo = TECNICA_MODIFIERS[currentTecnica];
        if (tecInfo) {
            html += '<div class="desc-title">Tecnica: ' + tecInfo.label + '</div>';
            html += '<p style="background:#e8eef8;padding:10px 14px;border-radius:8px;border-left:3px solid #1565c0;font-size:0.9em;">' + tecInfo.descNota + '</p>';
            var effetti = [];
            if (tecInfo.h2o > 0) effetti.push('<span class="desc-positive">+resistenza H2O</span>');
            if (tecInfo.h2o < 0) effetti.push('<span class="desc-negative">-resistenza H2O</span>');
            if (tecInfo.mecc > 0) effetti.push('<span class="desc-positive">+resistenza meccanica</span>');
            if (tecInfo.mecc < 0) effetti.push('<span class="desc-negative">-resistenza meccanica</span>');
            if (tecInfo.flex > 0) effetti.push('<span class="desc-positive">+flessibilita</span>');
            if (tecInfo.flex < 0) effetti.push('<span class="desc-negative">-flessibilita</span>');
            if (tecInfo.trasp < 0) effetti.push('<span class="desc-negative">-trasparenza</span>');
            if (effetti.length > 0) html += '<p style="font-size:0.85em;color:#546e7a;">Effetti sulla previsione: ' + effetti.join(', ') + '</p>';
        }
    }
    
    if (coatingAttivo) {
        html += '<div class="desc-title">Coating superficiale</div>';
        var lipideNomi = [];
        selectedIds.forEach(function(id) { var ing = ings[id]; if (ing && ing.famiglia === 'RESINA_LIPIDE') lipideNomi.push(ing.nome); });
        html += '<p style="background:#fff3e0;padding:10px 14px;border-radius:8px;border-left:3px solid #e65100;font-size:0.9em;">';
        html += 'Il lipide (' + (lipideNomi.length > 0 ? lipideNomi.join(', ') : 'lipide') + ') viene applicato come <b>rivestimento superficiale</b>, non mescolato nella formula. ';
        html += 'Questo massimizza la <span class="desc-positive">barriera all\'acqua</span> senza alterare trasparenza, flessibilita o meccanica del materiale base.</p>';
        html += '<p style="font-size:0.85em;color:#546e7a;">Effetti: <span class="desc-positive">+++ resistenza H2O (superficie)</span>, trasparenza e meccanica invariate rispetto al substrato.</p>';
    }
    
    // === LAVORAZIONE ===
    html += '<div class="desc-title">Note di lavorazione</div>';
    let lavorazione = '<ul>';
    if (hasGelatina) {
        lavorazione += '<li><b>Gelatina</b>: sciogliere in acqua fredda (blooming 5-10 min), poi scaldare a 50-60C. Non bollire mai.</li>';
    }
    if (hasCarragenina) {
        lavorazione += '<li><b>Carragenina</b>: DEVE bollire (60-80C, ideale 70C). Gelifica raffreddando. κ-carragenina gelifica con K⁺ (KCl), ι-carragenina con Ca²⁺.</li>';
    }
    if (hasCarragenina && hasGelatina) {
        lavorazione += '<li><b>⚠ Carragenina + Gelatina</b>: sciogliere carragenina PRIMA a 70-80C. Raffreddare a 55-60C, poi aggiungere gelatina (bloomed). NON bollire con la gelatina gia presente.</li>';
    }
    if (hasAgar) {
        lavorazione += '<li><b>Agar</b>: DEVE bollire (90-100C) per sciogliersi. Gelifica raffreddando sotto i 35C.</li>';
    }
    if (hasAlginato) {
        lavorazione += '<li><b>Alginato</b>: sciogliere in acqua con frullatore (forma grumi). Immergere in bagno di CaCl2 per gelificare.</li>';
    }
    if (hasCaseina) {
        lavorazione += '<li><b>Caseina</b>: acidificare il latte (aceto/limone), filtrare i coaguli, impastare. Stagionare giorni/settimane.</li>';
    }
    if (hasChitosano) {
        lavorazione += '<li><b>Chitosano</b>: sciogliere in soluzione acida (1-2% acido acetico). Neutralizzare per far precipitare il film.</li>';
    }
    if (hasPectina) {
        lavorazione += '<li><b>Pectina</b>: serve pH acido e/o zuccheri per gelificare correttamente.</li>';
    }
    if (hasAmido) {
        lavorazione += '<li><b>Amido</b>: scaldare gradualmente mescolando per evitare grumi. Gelatinizza a 60-80C.</li>';
    }
    if (hasCera) {
        lavorazione += '<li><b>Cera</b>: fondere a bagnomaria (60-80C). Applicare a caldo su superficie asciutta.</li>';
    }
    if (hasGommalacca) {
        lavorazione += '<li><b>Gommalacca</b>: sciogliere in alcol etilico. Applicare a strati sottili, lasciando asciugare tra uno e l\'altro.</li>';
    }
    if (hasFibra) {
        lavorazione += '<li><b>Fibre</b>: immergere nella matrice liquida calda, disporre a strati o casualmente, pressare durante l\'asciugatura.</li>';
    }
    if (currentTecnica === 'aerazione') {
        lavorazione += '<li><b>Stabilizzazione schiuma</b>: fissare rapidamente (gelificazione, essiccazione rapida o reticolazione) prima del collasso. Asciugatura delicata.</li>';
    } else if (currentTecnica === 'fermentazione') {
        lavorazione += '<li><b>Incubazione</b>: mantenere 20-30C, ambiente pulito. Durata: 1-4 settimane. Pronto quando raggiunge spessore desiderato.</li>';
    } else if (currentTecnica === 'compressione') {
        lavorazione += '<li><b>Pressatura</b>: pre-asciugare, poi comprimere a 50-120C con pressa o morsa per 15-60 minuti.</li>';
    } else if (currentTecnica === 'reticolazione') {
        lavorazione += '<li><b>Bagno reticolante</b>: preparare CaCl2 2-5% o borace 4%. Immergere 1-30 min. Risciacquare con acqua distillata.</li>';
    } else if (currentTecnica === 'stratificazione') {
        lavorazione += '<li><b>Stratificazione</b>: preparare ogni strato separatamente. Asciugare completamente ogni strato prima di applicare il successivo. Spessore strato singolo: 1-3mm.</li>';
    } else {
        lavorazione += '<li><b>Essiccazione</b>: lenta e uniforme (24-72h) per evitare crepe e deformazioni.</li>';
    }
    if (coatingAttivo) {
        lavorazione += '<li><b>Coating finale</b>: applicare il lipide a pennello o immersione sulla superficie <em>asciutta</em> del materiale. Strati sottili multipli sono piu efficaci di un singolo strato spesso. La barriera all\'acqua dipende dalla copertura uniforme.</li>';
    }
    lavorazione += '</ul>';
    html += lavorazione;
    
    // === DOSAGGI CONSIGLIATI ===
    let dosaggi = [];
    selectedIds.forEach(id => {
        const ing = ings[id];
        if (!ing || id === 'acqua') return;
        const params = ing.parametri || {};
        let d = { nome: ing.nome, range: null, tipico: null, temp: null };
        if (params.range_percent_min != null && params.range_percent_max != null) {
            d.range = params.range_percent_min + '–' + params.range_percent_max + '%';
            if (params.range_tipico_min && params.range_tipico_max) {
                d.tipico = params.range_tipico_min + '–' + params.range_tipico_max + '%';
            }
        }
        if (params.temp_dissoluzione_min || params.temp_dissoluzione) {
            const tMin = params.temp_dissoluzione_min || params.temp_dissoluzione;
            const tMax = params.temp_dissoluzione_max;
            d.temp = tMin + (tMax ? '–' + tMax : '') + '°C';
        }
        if (d.range || d.temp) dosaggi.push(d);
    });
    
    if (dosaggi.length > 0) {
        html += '<div class="desc-title">Dosaggi consigliati</div>';
        html += '<table class="desc-dosaggi"><thead><tr><th>Ingrediente</th><th>Dosaggio</th><th>T dissoluzione</th></tr></thead><tbody>';
        dosaggi.forEach(d => {
            html += '<tr>';
            html += '<td><strong>' + d.nome + '</strong></td>';
            html += '<td>' + (d.tipico ? d.tipico + ' <small>(range ' + d.range + ')</small>' : (d.range || '–')) + '</td>';
            html += '<td>' + (d.temp || '–') + '</td>';
            html += '</tr>';
        });
        html += '</tbody></table>';
        html += '<p class="desc-dosaggi-note">Percentuali sul peso totale della miscela (esclusa acqua solvente). Variare gradualmente.</p>';
    }
    
    // === POSSIBILI UTILIZZI ===
    html += '<div class="desc-title">Possibili utilizzi</div>';
    let usi = '<ul>';
    if (trasp > 50 && flex > 40 && matrice) {
        usi += '<li>Packaging trasparente per piccoli oggetti, gioielli, campioni</li>';
        if (foodSafe) usi += '<li>Involucri alimentari temporanei (per cibi secchi)</li>';
    }
    if (trasp > 50 && flex > 60) {
        usi += '<li>Finestre per packaging, buste con vista sul contenuto</li>';
    }
    if (resistMecc > 50 && flex < 50) {
        usi += '<li>Contenitori rigidi, vassoi, scatole strutturali</li>';
        usi += '<li>Supporti per esposizione, basi per oggetti</li>';
    }
    if (flex > 60) {
        usi += '<li>Pellicole avvolgenti, fogli di copertura</li>';
        usi += '<li>Etichette flessibili, nastri decorativi</li>';
    }
    if (flex > 40 && flex < 70 && resistMecc > 40) {
        usi += '<li>Copertine, rilegature, cartellette</li>';
    }
    if (hasCarica || hasFibra) {
        usi += '<li>Pannelli decorativi con texture naturale</li>';
        usi += '<li>Elementi di design con aspetto "materico"</li>';
    }
    if (matriceFamiglia === 'COLTURA') {
        usi += '<li>Accessori simil-pelle (portafogli, cinturini, cover)</li>';
        usi += '<li>Packaging premium con estetica organica unica</li>';
    }
    if (hasTannini && hasGelatina) {
        usi += '<li>Materiale simil-cuoio per rilegature, accessori</li>';
    }
    if (hasTannini && matriceFamiglia === 'COLTURA') {
        usi += '<li>Pelle vegetale conciata: i tannini stabilizzano la cellulosa batterica come nel cuoio tradizionale</li>';
    }
    if (resistH2O < 30) {
        usi += '<li>Packaging solubile/compostabile per dosi singole</li>';
        usi += '<li>Materiale effimero per installazioni temporanee</li>';
    }
    if (resistH2O > 50 && foodSafe) {
        usi += '<li>Contenitori per alimenti con media shelf-life</li>';
    }
    if (hasCarbone) {
        usi += '<li>Filtri assorbenti, deodoranti naturali</li>';
    }
    if (hasChitosano) {
        usi += '<li>Packaging antimicrobico per prodotti freschi</li>';
        usi += '<li>Medicazioni e cerotti biodegradabili</li>';
    }
    usi += '</ul>';
    html += usi;
    
    // === DURABILITA ===
    html += '<div class="desc-title">Durabilita e conservazione</div>';
    let durata = '';
    if (resistH2O > 50 && resistMecc > 40) {
        durata = 'In condizioni ideali (ambiente secco, al riparo dalla luce), il materiale puo durare <span class="desc-positive">mesi o anche anni</span>.';
    } else if (resistH2O > 30) {
        durata = 'Durata stimata <span class="desc-highlight">settimane o mesi</span> in ambiente controllato.';
    } else {
        durata = 'Durata stimata <span class="desc-highlight">giorni o settimane</span>. Degradazione accelerata in ambiente umido.';
    }
    html += '<p>' + durata + '</p>';
    
    html += '<p><b>Conservare al riparo da:</b></p><ul>';
    if (resistH2O < 50) html += '<li>Umidita (causa principale di degradazione)</li>';
    if (hasGelatina) html += '<li>Calore sopra 30-35C (la gelatina fonde e perde struttura)</li>';
    else if (matriceFamiglia === 'PROTEINA') html += '<li>Calore sopra 35C (le proteine si degradano)</li>';
    html += '<li>Luce diretta prolungata (ingiallimento, fragilizzazione)</li>';
    if (hasGelatina || hasCaseina || matriceFamiglia === 'PROTEINA') html += '<li>Muffe (le proteine sono nutrienti per funghi)</li>';
    if (hasColorante) html += '<li>UV (sbiadimento dei coloranti naturali)</li>';
    html += '</ul>';
    
    // === E SE VOLESSI... ===
    let tradeoffs = [];
    
    if (traspReale < 50 && (hasCarica || hasOpacizzante || hasFibra || hasColorante)) {
        const causa = hasOpacizzante ? (opacizzanteNome || 'gli scarti vegetali') : hasCarica ? (caricaNome || 'le cariche') : hasFibra ? 'le fibre' : (coloranteNome || 'il colorante');
        tradeoffs.push({q: 'Piu trasparente', a: 'Riduci o elimina ' + causa + '. Le matrici pure (agar, gelatina) danno la massima trasparenza.'});
    }
    if (resistH2O < 40 && !lipide && matrice) {
        tradeoffs.push({q: 'Piu resistente all\'acqua', a: 'Aggiungi un lipide come coating: cera d\'api (piu semplice), gommalacca (piu resistente), o cera di carnauba (la piu dura).'});
    }
    if (flex < 40 && !plastificante && matrice) {
        tradeoffs.push({q: 'Piu flessibile', a: 'Aggiungi glicerina (10-30% sul peso della matrice). Piu ne metti, piu sara morbido – ma anche piu appiccicoso e sensibile all\'umidita.'});
    }
    if (flex > 60 && matrice && !hasCarica && !hasFibra) {
        tradeoffs.push({q: 'Piu rigido', a: 'Aggiungi una carica (fondi di caffe, gusci d\'uovo macinati) o fibre (lino, cotone). Se c\'e plastificante, riducilo.'});
    }
    if (!vegano) {
        let nonVeg = [];
        selectedIds.forEach(id => { const ing = ings[id]; if (ing && !ing.vegano) nonVeg.push(ing.nome); });
        let alt = '';
        if (hasGelatina) {
            let altGel = [];
            if (!hasAgar) altGel.push('agar (gel rigido)');
            if (!hasCarragenina) altGel.push('carragenina (gel elastico)');
            if (!hasAmido) altGel.push('amido (film opaco)');
            alt = altGel.length > 0 ? altGel.join(' o ') : 'un altro polisaccaride vegetale';
        } else if (hasCaseina) {
            alt = 'amido con carica minerale per rigidita simile';
        } else {
            alt = 'ingredienti di origine vegetale equivalenti';
        }
        tradeoffs.push({q: 'Versione vegana', a: 'Sostituisci ' + nonVeg.join(', ') + ' con ' + alt + '.'});
    }
    if (!hasChitosano && matrice && matriceFamiglia !== 'POLICATIONE') {
        tradeoffs.push({q: 'Proprieta antimicrobiche', a: 'Aggiungi chitosano (anche in piccola %). La carica positiva del chitosano e antibatterica naturale.'});
    }
    if (!foodSafe && matrice) {
        let nonFood = [];
        selectedIds.forEach(id => { const ing = ings[id]; if (ing && !ing.food_safe) nonFood.push(ing.nome); });
        if (nonFood.length > 0) tradeoffs.push({q: 'Compatibile con alimenti', a: 'Rimuovi o sostituisci: ' + nonFood.join(', ') + '. Verifica sempre con la normativa locale.'});
    }
    if (resistH2O < 30 && matrice && !hasReticolante) {
        tradeoffs.push({q: 'Maggiore durata', a: 'Un coating lipidico protegge dalla superficie. Un reticolante (tannini per proteine, CaCl\u2082 per alginato) stabilizza la struttura interna.'});
    }
    if (matrice && resistH2O < 50) {
        var sugAntiMuffa = [];
        var hasTipAceto = selectedIds.includes('aceto');
        var hasTipOliEss = selectedIds.includes('oli_essenziali');
        var hasTipAllume = selectedIds.includes('allume');
        var hasTipTannini = selectedIds.includes('tannini');
        var hasTipAcidoCit = selectedIds.includes('acido_citrico');
        var hasTipTeNero = selectedIds.includes('te_nero');
        var hasTipCurcuma = selectedIds.includes('curcuma');
        
        if (!hasTipAceto) sugAntiMuffa.push('<strong>aceto</strong> (abbassa il pH — le muffe odiano l\'acidita)');
        if (!hasTipAcidoCit) sugAntiMuffa.push('<strong>acido citrico</strong> (stesso principio, piu neutro nell\'odore)');
        if (!hasTipOliEss) sugAntiMuffa.push('<strong>oli essenziali</strong> (tea tree, chiodi di garofano, timo — antimicotici naturali, poche gocce bastano)');
        if (!hasChitosano) sugAntiMuffa.push('<strong>chitosano</strong> (antimicrobico naturale, protegge a lungo)');
        if (!hasTipCurcuma) sugAntiMuffa.push('<strong>curcuma</strong> (antimicrobica naturale, colora di giallo)');
        if (!hasTipTannini) sugAntiMuffa.push('<strong>tannini</strong> (conservante naturale, stabilizza le proteine)');
        if (!hasTipAllume) sugAntiMuffa.push('<strong>allume</strong> (antisettico tradizionale, usato nella concia)');
        if (!hasTipTeNero) sugAntiMuffa.push('<strong>te nero</strong> (contiene tannini naturali, dona colore ambrato)');
        
        if (sugAntiMuffa.length > 0) {
            var txt = 'Problema comune nei biomateriali. ';
            if (matriceFamiglia === 'PROTEINA') txt += 'Le proteine sono particolarmente vulnerabili. ';
            txt += 'Puoi aggiungere alla ricetta: ' + sugAntiMuffa.slice(0, 4).join('; ') + '. ';
            txt += 'In piu: essicca bene (sotto il 15% di umidita) e conserva con silica gel.';
            tradeoffs.push({q: 'Prevenire le muffe', a: txt});
        }
    }
    
    if (tradeoffs.length > 0) {
        html += '<div class="desc-title">E se volessi...</div>';
        html += '<div class="desc-tradeoffs">';
        tradeoffs.forEach(t => {
            html += '<div class="desc-tradeoff"><span class="desc-tradeoff-q">◆ ' + t.q + '?</span> ' + t.a + '</div>';
        });
        html += '</div>';
    }
    
    // === AVVERTENZE ===
    let avvertenze = [];
    // --- Motore generico avvertenze (legge REGOLE_CHIMICHE.avvertenze) ---
    if (typeof REGOLE_CHIMICHE !== 'undefined' && REGOLE_CHIMICHE.avvertenze) {
        var classRetic = REGOLE_CHIMICHE.classificazione_reticolanti || {};
        var ingredientNomiAvv = selectedIds.map(function(id) { return (ings[id] && ings[id].nome) ? ings[id].nome.toLowerCase() : ''; });
        function hasIngNomeAvv(term) { return ingredientNomiAvv.some(function(n) { return n.includes(term); }); }
        var hasIonicSalt = ingredientNomiAvv.some(function(n) { return (classRetic.ionici_nome||[]).some(function(t) { return n.includes(t); }); });
        
        REGOLE_CHIMICHE.avvertenze.forEach(function(regola) {
            var c = regola.condizione;
            var ok = true;
            
            if (ok && c.matrice_assente) { if (matrice) ok = false; }
            if (ok && c.matrice_presente) { if (!matrice) ok = false; }
            if (ok && c.famiglie_presenti) { c.famiglie_presenti.forEach(function(f) { if (!selectedIds.some(function(id) { return ings[id] && ings[id].famiglia === f; })) ok = false; }); }
            if (ok && c.famiglie_assenti) { c.famiglie_assenti.forEach(function(f) { if (selectedIds.some(function(id) { return ings[id] && ings[id].famiglia === f; })) ok = false; }); }
            if (ok && c.ingredienti_presenti_nome) {
                c.ingredienti_presenti_nome.forEach(function(term) { if (!hasIngNomeAvv(term)) ok = false; });
            }
            if (ok && c.ingredienti_assenti_nome) {
                c.ingredienti_assenti_nome.forEach(function(term) { if (hasIngNomeAvv(term)) ok = false; });
            }
            if (ok && c.prop_sotto) { for (var p in c.prop_sotto) { if (p === 'flessibilita' && flex >= c.prop_sotto[p]) ok = false; } }
            if (ok && c.min_ingredienti) { if (numIngredienti < c.min_ingredienti) ok = false; }
            if (ok && c.reticolante_tipo === 'ionico') { if (!hasIonicSalt) ok = false; }
            if (ok && c.matrice_famiglia_non) { if (matriceFamiglia && !matriceFamiglia.includes(c.matrice_famiglia_non.replace('POLISACCARIDE_',''))) ok = false; }
            if (ok && c.matrice_famiglia_non_in) {
                if (c.matrice_famiglia_non_in.some(function(f) { return matriceFamiglia === f; })) ok = false;
            }
            
            if (ok) avvertenze.push(regola.testo);
        });
    }
    if (avvertenze.length > 0) {
        html += '<div class="desc-title">Punti di attenzione</div>';
        html += '<ul>';
        avvertenze.forEach(a => html += '<li class="desc-warning">' + a + '</li>');
        html += '</ul>';
    }
    
    descEl.innerHTML = html;
  } catch(e) { console.error('generateMaterialDescription ERROR:', e); }
}



