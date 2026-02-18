// ============================================================
// LAB-FORMULA.JS — Calcolo proprietà, formula, dosaggi, messaggi
// Estratto da lab.html per modularità
// ============================================================

function calculateMaterial() {
    var typeEl = document.getElementById('resultType');
    var baseEl = document.getElementById('resultBase');
    var tagsEl = document.getElementById('resultTags');
    if (!typeEl || !baseEl || !tagsEl) return;
    
    updateTecnicaAvailability();
    
    var ings = (typeof INGREDIENTI_DATA !== 'undefined') ? INGREDIENTI_DATA.ingredienti || {} : {};
    var selected = [...formulaSelection];
    
    if (selected.length === 0) {
        typeEl.textContent = '-';
        baseEl.textContent = 'Seleziona ingredienti con le caselle';
        tagsEl.innerHTML = '-';
        updateBar('barTrasp', 0); updateBar('barFlex', 0); updateBar('barH2O', 0); updateBar('barMecc', 0);
        document.getElementById('limitsSection').style.display = 'none';
        document.getElementById('suggestionsSection').style.display = 'none';
        var descEl = document.getElementById('descriptionContent');
        if (descEl) descEl.innerHTML = '<div class="description-empty">Aggiungi ingredienti al tavolo per vedere una descrizione del possibile materiale</div>';
        return;
    }
    
    var matrice = null, plastificante = null, lipide = null;
    var allVegano = true, allFoodSafe = true;
    
    selected.forEach(function(id) {
        var ing = ings[id];
        if (!ing) return;
        if (['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'].includes(ing.famiglia)) {
            if (!matrice) matrice = ing;
        }
        if (ing.famiglia === 'PLASTIFICANTE') plastificante = ing;
        if (ing.famiglia === 'RESINA_LIPIDE') lipide = ing;
        if (!ing.vegano) allVegano = false;
        if (!ing.food_safe) allFoodSafe = false;
    });
    
    // Tipo materiale
    var tipo = 'Miscela';
    if (matrice) {
        var forme = (matrice.lavorabilita && matrice.lavorabilita.forma_tipica) ? matrice.lavorabilita.forma_tipica : ['materiale'];
        tipo = forme[0].charAt(0).toUpperCase() + forme[0].slice(1);
    }
    if (plastificante) tipo += ' flessibile';
    if (lipide) tipo += coatingAttivo ? ' con coating' : ' impermeabilizzato';
    var tecSuffix = TECNICA_MODIFIERS[currentTecnica];
    if (tecSuffix && tecSuffix.descTipo) tipo += tecSuffix.descTipo;
    typeEl.textContent = tipo;
    baseEl.textContent = matrice ? 'Base: ' + matrice.nome : selected.length + ' ingredienti';
    
    // Calcolo proprieta con valori CALIBRATI + interazioni + cap opacizzanti
    var trasparenza = 0, flessibilita = 0, resistH2O = 0, resistMecc = 0;
    var hasMatrice = false;
    var famiglieConte = {};
    var famigliePresenti = new Set();
    
    selected.forEach(function(id) {
        var ing = ings[id];
        if (!ing) return;
        var fam = ing.famiglia;
        famiglieConte[fam] = (famiglieConte[fam] || 0) + 1;
        famigliePresenti.add(fam);
        
        // Valori fissi CALIBRATI
        if (fam === 'PROTEINA')               { trasparenza += 52; flessibilita += 31; resistH2O += 19; resistMecc += 37; hasMatrice = true; }
        else if (fam === 'POLISACCARIDE_NEUTRO')   { trasparenza += 61; flessibilita += 17; resistH2O += 26; resistMecc += 42; hasMatrice = true; }
        else if (fam === 'POLISACCARIDE_ANIONICO') { trasparenza += 77; flessibilita += 30; resistH2O += 27; resistMecc += 48; hasMatrice = true; }
        else if (fam === 'POLICATIONE')            { trasparenza += 50; flessibilita += 25; resistH2O += 32; resistMecc += 62; hasMatrice = true; }
        else if (fam === 'COLTURA')                { trasparenza += 30; flessibilita += 50; resistH2O += 25; resistMecc += 55; hasMatrice = true; }
        else if (fam === 'PLASTIFICANTE')     { flessibilita += 42; resistMecc -= 6; trasparenza -= 1; resistH2O += 8; }
        else if (fam === 'RESINA_LIPIDE')            { resistH2O += 23; trasparenza += 10; flessibilita += 13; resistMecc += 30; }
        else if (fam === 'CARICA')            { resistMecc += 29; trasparenza -= 28; flessibilita -= 5; resistH2O += 3; }
        else if (fam === 'SALE_RETICOLANTE')  { resistMecc += 16; resistH2O += 22; flessibilita -= 15; trasparenza -= 9; }
        else if (fam === 'COLORANTE')         { trasparenza -= 34; flessibilita += 1; resistH2O += 10; resistMecc += 7; }
        else if (fam === 'ACIDO')             { resistMecc += 5; }
        else if (fam === 'ADDITIVO')          { resistH2O += 19; resistMecc += 7; trasparenza -= 1; flessibilita += 1; }
        else if (fam === 'EMULSIONANTE')      { flessibilita += 10; trasparenza += 5; }
    });
    
    // Interazioni tra famiglie
    var famArray = [...famigliePresenti];
    for (var fi = 0; fi < famArray.length; fi++) {
        for (var fj = fi; fj < famArray.length; fj++) {
            var key1 = famArray[fi] + '+' + famArray[fj];
            var key2 = famArray[fj] + '+' + famArray[fi];
            var interaction = FAMILY_INTERACTIONS[key1] || FAMILY_INTERACTIONS[key2];
            if (interaction) {
                trasparenza += interaction.trasp || 0;
                flessibilita += interaction.flex || 0;
                resistH2O += interaction.h2o || 0;
                resistMecc += interaction.mecc || 0;
            }
        }
    }
    // Doppia carica
    if ((famiglieConte['CARICA'] || 0) >= 2) {
        var dc = FAMILY_INTERACTIONS['CARICA+CARICA'];
        if (dc) { trasparenza += dc.trasp||0; flessibilita += dc.flex||0; resistH2O += dc.h2o||0; resistMecc += dc.mecc||0; }
    }
    
    // Cap opacizzanti
    if (famigliePresenti.has('CARICA')) trasparenza = Math.min(trasparenza, 40);
    if (famigliePresenti.has('COLORANTE')) trasparenza = Math.min(trasparenza, 35);
    var opacizzanti = ['fondi_caffe','bucce_agrumi','segatura','paglia','cellulosa_carta'];
    if (selected.some(function(id) { return opacizzanti.includes(id); })) trasparenza = Math.min(trasparenza, 25);
    
    // Senza matrice: floor
    if (!hasMatrice && selected.length > 0) {
        trasparenza = Math.max(trasparenza, 20);
        flessibilita = Math.max(flessibilita, 20);
        resistH2O = Math.max(resistH2O, 10);
        resistMecc = Math.max(resistMecc, 15);
    }
    
    // Tecnica modifiers
    var tecMod = TECNICA_MODIFIERS[currentTecnica];
    if (tecMod) { trasparenza += tecMod.trasp; flessibilita += tecMod.flex; resistH2O += tecMod.h2o; resistMecc += tecMod.mecc; }
    
    // Coating swap
    if (coatingAttivo && famigliePresenti.has('RESINA_LIPIDE')) {
        trasparenza -= 10; flessibilita -= 13; resistH2O -= 23; resistMecc -= 30;
        trasparenza -= 2; resistH2O += 45;
    }
    
    // Clamp
    trasparenza = Math.max(0, Math.min(100, trasparenza));
    flessibilita = Math.max(0, Math.min(100, flessibilita));
    resistH2O = Math.max(0, Math.min(100, resistH2O));
    resistMecc = Math.max(0, Math.min(100, resistMecc));
    
    // Override con dosaggi personalizzati (Pezzo 2)
    if (Object.keys(customDosages).length > 0 && window.currentFormula && window.currentFormula.properties) {
        var cp = window.currentFormula.properties;
        trasparenza = cp.trasparenza; flessibilita = cp.flessibilita;
        resistH2O = cp.resistenzaH2O; resistMecc = cp.resistenzaMecc;
    }
    
    updateBar('barTrasp', trasparenza); updateBar('barFlex', flessibilita);
    updateBar('barH2O', resistH2O); updateBar('barMecc', resistMecc);
    
    // Tags
    tagsEl.innerHTML = '<span class="tag ' + (allFoodSafe ? 'ok' : 'no') + '">' + (allFoodSafe ? '&#10003;' : '&#10007;') + ' Food-safe</span>' +
        '<span class="tag ' + (allVegano ? 'ok' : 'no') + '">' + (allVegano ? '&#10003;' : '&#10007;') + ' Vegano</span>';
    
    // Limiti e warning composizione
    var limitsSection = document.getElementById('limitsSection');
    var limitsContent = document.getElementById('limitsContent');
    var limits = [];
    // --- Motore generico: legge regole da REGOLE_CHIMICHE.limits ---
    var props = { resistH2O: resistH2O, flessibilita: flessibilita, trasparenza: trasparenza, resistMecc: resistMecc };
    var matriciFams = ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'];
    var nMatrici = 0;
    matriciFams.forEach(function(f) { nMatrici += famiglieConte[f] || 0; });
    if (typeof REGOLE_CHIMICHE !== 'undefined' && REGOLE_CHIMICHE.limits) {
        REGOLE_CHIMICHE.limits.forEach(function(regola) {
            var c = regola.condizione;
            var ok = true;
            if (c.prop_sotto) { for (var p in c.prop_sotto) { if (props[p] >= c.prop_sotto[p]) ok = false; } }
            if (ok && c.famiglie_assenti) { c.famiglie_assenti.forEach(function(f) { if (famigliePresenti.has(f)) ok = false; }); }
            if (ok && c.famiglie_presenti_any) { var any = false; c.famiglie_presenti_any.forEach(function(f) { if (famigliePresenti.has(f)) any = true; }); if (!any) ok = false; }
            if (ok && c.famiglie_presenti) { c.famiglie_presenti.forEach(function(f) { if (!famigliePresenti.has(f)) ok = false; }); }
            if (ok && c.famiglie_assenti_all) { var allAbsent = true; c.famiglie_assenti_all.forEach(function(f) { if (famigliePresenti.has(f)) allAbsent = false; }); if (!allAbsent) ok = false; }
            if (ok && c.conteggio_matrici_sopra) { if (nMatrici <= c.conteggio_matrici_sopra) ok = false; }
            if (ok && c.famiglia_conteggio_sopra) { for (var fam in c.famiglia_conteggio_sopra) { if ((famiglieConte[fam]||0) <= c.famiglia_conteggio_sopra[fam]) ok = false; } }
            if (ok) {
                var msg = { problem: regola.msg.problem.replace('{n}', nMatrici).replace('{n}', famiglieConte['CARICA']||0), solution: regola.msg.solution, type: regola.msg.type };
                limits.push(msg);
            }
        });
    }
    
    if (limits.length > 0) {
        limitsSection.style.display = 'block';
        limitsContent.innerHTML = limits.map(function(l) {
            var icon = l.type === 'alert' ? '<span style="color:#d32f2f">&#9679;</span>' : (l.type === 'warn' ? '<span style="color:#f57c00">&#9679;</span>' : '<span style="color:#1976d2">&#9679;</span>');
            return '<div class="limit-item"><div class="limit-problem">' + icon + ' ' + l.problem + '</div><div class="limit-solution">&#8594; ' + l.solution + '</div></div>';
        }).join('');
    } else { limitsSection.style.display = 'none'; }
    
    // Suggerimenti
    var suggestionsSection = document.getElementById('suggestionsSection');
    var suggestionsContent = document.getElementById('suggestionsContent');
    var suggestions = [];
    if (!matrice && selected.length > 0) suggestions.push('Manca una matrice come base');
    if (suggestions.length > 0) {
        suggestionsSection.style.display = 'block';
        suggestionsContent.innerHTML = suggestions.map(function(s) { return '<div class="suggestion-item">' + s + '</div>'; }).join('');
    } else { suggestionsSection.style.display = 'none'; }
    
    // Genera descrizione (stub — Pezzo 3)
    // Salva parametri per ri-generazione dopo recalcPropsFromFormula
    window._descParams = { selected, matrice, plastificante, lipide, vegano: allVegano, foodSafe: allFoodSafe, limits };
    generateMaterialDescription(selected, matrice, plastificante, lipide, trasparenza, flessibilita, resistH2O, resistMecc, allVegano, allFoodSafe, limits);
}

// =============================================
// RELIABILITY SCORE (Jaccard vs materiali testati)
// =============================================
function calculateReliabilityScore(selectedIds, limits) {
    var ings = (typeof INGREDIENTI_DATA !== 'undefined') ? INGREDIENTI_DATA.ingredienti || {} : {};
    var materialiDB = (typeof MATERIALI_DATA !== 'undefined') ? MATERIALI_DATA : null;
    var compatDB = (typeof INGREDIENTI_DATA !== 'undefined') ? INGREDIENTI_DATA.regole_compatibilita_famiglie || {} : {};
    var score = 50;
    var reasons = [];
    var bestMatch = null;
    var bestJaccard = 0;
    
    // === A. JACCARD: somiglianza con materiali nel DB (come prima) ===
    if (materialiDB) {
        var userNoAcqua = selectedIds.filter(function(id) { return id !== 'acqua'; });
        
        (materialiDB.materiali_in_progress || []).forEach(function(mat) {
            var matIngs = (mat.ingredienti_correlati || []).filter(function(id) { return id !== 'acqua'; });
            if (matIngs.length === 0) return;
            var overlap = userNoAcqua.filter(function(id) { return matIngs.includes(id); });
            var unionSize = new Set([...userNoAcqua, ...matIngs]).size;
            var jaccard = unionSize > 0 ? overlap.length / unionSize : 0;
            if (jaccard > bestJaccard) { bestJaccard = jaccard; bestMatch = { nome:mat.nome, jaccard:jaccard, tipo:'lab', id:mat.id }; }
        });
        
        (materialiDB.materiali_documentati || []).forEach(function(mat) {
            var matIngs = (mat.ingredienti_correlati || mat.ingredienti || []).filter(function(id) { return id !== 'acqua'; });
            if (matIngs.length === 0) return;
            var overlap = userNoAcqua.filter(function(id) { return matIngs.includes(id); });
            var unionSize = new Set([...userNoAcqua, ...matIngs]).size;
            var jaccard = unionSize > 0 ? overlap.length / unionSize : 0;
            if (jaccard > bestJaccard) { bestJaccard = jaccard; bestMatch = { nome:mat.nome || mat.subtitle, jaccard:jaccard, tipo:'doc' }; }
        });
    }
    
    if (bestJaccard >= 0.95) { score = 95; reasons.push('ricetta identica a materiale testato'); }
    else if (bestJaccard >= 0.8) { score = 75 + Math.round(bestJaccard * 20); reasons.push('ricetta molto simile a "' + bestMatch.nome + '"'); }
    else if (bestJaccard >= 0.5) { score = 55 + Math.round(bestJaccard * 25); reasons.push('ricetta affine a materiali noti'); }
    else if (bestJaccard >= 0.3) { score = 45 + Math.round(bestJaccard * 15); reasons.push('alcuni ingredienti in comune con materiali testati'); }
    else { reasons.push('combinazione nuova, non ancora testata'); }
    
    // === B. COMPATIBILITA CHIMICA: bonus/malus basato su regole famiglie ===
    var famiglie = [];
    var hasMatrice = false;
    selectedIds.forEach(function(id) {
        var ing = ings[id]; if (!ing) return;
        var fam = ing.famiglia;
        if (!famiglie.includes(fam)) famiglie.push(fam);
        if (['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'].includes(fam)) hasMatrice = true;
    });
    
    // Valuta tutte le coppie di famiglie presenti
    var nEcc = 0, nBuona = 0, nAtt = 0, nInc = 0;
    for (var fi = 0; fi < famiglie.length; fi++) {
        for (var fj = fi + 1; fj < famiglie.length; fj++) {
            var f1 = famiglie[fi], f2 = famiglie[fj];
            var compat = null;
            if (compatDB[f1] && compatDB[f1][f2]) compat = compatDB[f1][f2];
            else if (compatDB[f2] && compatDB[f2][f1]) compat = compatDB[f2][f1];
            if (compat && compat.liv) {
                if (compat.liv === 'eccellente') nEcc++;
                else if (compat.liv === 'buona') nBuona++;
                else if (compat.liv === 'attenzione') nAtt++;
                else if (compat.liv === 'incompatibile' || compat.liv === 'limitata') nInc++;
            }
        }
    }
    // Bonus/malus chimico
    var chemBonus = (nEcc * 5) + (nBuona * 2) - (nAtt * 5) - (nInc * 15);
    score += chemBonus;
    if (nEcc > 0 && nInc === 0 && nAtt === 0) reasons.push('compatibilita chimica eccellente');
    else if (nInc > 0) reasons.push('incompatibilita chimica rilevata');
    else if (nAtt > 0) reasons.push('alcune coppie richiedono attenzione');
    
    // === C. PENALITA DA LIMITI (alert/warn dal motore) ===
    var nAlert = 0, nWarn = 0;
    (limits || []).forEach(function(l) { if (l.type === 'alert') nAlert++; else if (l.type === 'warn') nWarn++; });
    if (nAlert >= 2) { score -= 25; reasons.push('composizione molto anomala'); }
    else if (nAlert >= 1) { score -= 15; reasons.push('composizione anomala'); }
    if (nWarn >= 2) score -= 10; else if (nWarn >= 1) score -= 5;
    
    // === D. BONUS STRUTTURA ===
    if (hasMatrice && selectedIds.length >= 2 && selectedIds.length <= 5) score += 5;
    if (!hasMatrice && selectedIds.length > 0) { score -= 15; reasons.push('manca matrice strutturante'); }
    
    // === E. BONUS TUTOR: compatibilita gia verificata step-by-step ===
    if (typeof labMode !== 'undefined' && labMode === 'tutor') {
        score += 15;
        reasons.unshift('ricetta guidata dal tutor');
    }
    
    score = Math.max(5, Math.min(100, score));
    var level, icon, color, label;
    if (score >= 90) { level='verified'; icon='&#9745;'; color='#2e7d32'; label='Previsione verificata'; }
    else if (score >= 70) { level='high'; icon='&#9679;'; color='#4caf50'; label='Previsione attendibile'; }
    else if (score >= 50) { level='medium'; icon='&#9681;'; color='#ff9800'; label='Previsione teorica'; }
    else if (score >= 30) { level='low'; icon='&#9680;'; color='#f57c00'; label='Previsione incerta'; }
    else { level='verylow'; icon='&#9888;'; color='#d32f2f'; label='Previsione inaffidabile'; }
    
    return { score:score, level:level, icon:icon, color:color, label:label, reasons:reasons, bestMatch:bestMatch, bestJaccard:bestJaccard };
}


function applyPostCalcModifiers(trasp, flex, h2o, mecc, formula) {
    if (formula && formula.length > 0) {
        var total = 0;
        formula.forEach(function(f) { total += (f.percent || 0); });
        if (total > 0) {
            var plastPct = 0, caricaPct = 0, reticPct = 0, lipidePct = 0;
            formula.forEach(function(f) {
                var fam = f.ing ? f.ing.famiglia : '';
                if (fam === 'PLASTIFICANTE') plastPct += f.percent;
                else if (fam === 'CARICA') caricaPct += f.percent;
                else if (fam === 'SALE_RETICOLANTE') reticPct += f.percent;
                else if (fam === 'RESINA_LIPIDE') lipidePct += f.percent;
            });
            var plastEff = plastPct / total * 100;
            var caricaEff = caricaPct / total * 100;
            var reticEff = reticPct / total * 100;
            if (plastEff > 40) mecc = Math.min(mecc, 15);
            else if (plastEff > 35) mecc = Math.min(mecc, 25);
            if (caricaEff > 30) flex = Math.min(flex, 20);
            else if (caricaEff > 25) flex = Math.min(flex, 35);
            if (reticEff > 7) { trasp = Math.min(trasp, 25); flex = Math.min(flex, 20); }
            
            if (coatingAttivo && lipidePct > 0) {
                var lipRates = FAMILY_PROP_RATES['RESINA_LIPIDE'];
                if (lipRates) {
                    // Annulla effetto mix del lipide (gia calcolato con rates)
                    trasp -= lipidePct * lipRates.trasp;
                    flex  -= lipidePct * lipRates.flex;
                    h2o  -= lipidePct * lipRates.h2o;
                    mecc -= lipidePct * lipRates.mecc;
                    // Ricalcola come coating: quasi zero su trasp/flex/mecc, forte su H2O
                    trasp += lipidePct * (-0.2);
                    // flex: nessun contributo (coating non cambia flessibilita substrato)
                    h2o  += lipidePct * 4.0;
                    // mecc: nessun contributo
                }
            }
        }
    }
    var mod = TECNICA_MODIFIERS[currentTecnica];
    if (mod) { trasp += mod.trasp; flex += mod.flex; h2o += mod.h2o; mecc += mod.mecc; }
    return {
        trasparenza: Math.max(0, Math.min(100, Math.round(trasp))),
        flessibilita: Math.max(0, Math.min(100, Math.round(flex))),
        resistenzaH2O: Math.max(0, Math.min(100, Math.round(h2o))),
        resistenzaMecc: Math.max(0, Math.min(100, Math.round(mecc)))
    };
}


// =============================================
// CALCOLO FORMULA + DOSAGGI (from v97)
// =============================================

function calculateFormula() {
  try {
    const contentEl = document.getElementById('formulaContent');
    if (!contentEl) { console.warn('calculateFormula: no formulaContent element'); return; }
    
    const selected = [...formulaSelection];
    
    if (selected.length === 0) {
        contentEl.innerHTML = '<div class="formula-empty">Seleziona ingredienti con le checkbox sul tavolo</div>';
        return;
    }
    
    const ings = INGREDIENTI_DATA?.ingredienti || {};
    const compatDB = INGREDIENTI_DATA.regole_compatibilita_famiglie || {};
    
    // Categorizza ingredienti per ruolo
    let matrici = [], plastificanti = [], cariche = [], reticolanti = [], lipidi = [], coloranti = [], acidi = [], altri = [];
    
    selected.forEach(id => {
        const ing = ings[id];
        if (!ing) return;
        const fam = ing.famiglia;
        
        if (['PROTEINA', 'POLISACCARIDE_NEUTRO', 'POLISACCARIDE_ANIONICO', 'POLICATIONE', 'COLTURA'].includes(fam)) {
            matrici.push({ id, ing, role: 'Matrice' });
        } else if (fam === 'PLASTIFICANTE') {
            plastificanti.push({ id, ing, role: 'Plastificante' });
        } else if (fam === 'CARICA') {
            cariche.push({ id, ing, role: 'Carica/Fibra' });
        } else if (fam === 'SALE_RETICOLANTE') {
            reticolanti.push({ id, ing, role: 'Reticolante' });
        } else if (fam === 'RESINA_LIPIDE') {
            lipidi.push({ id, ing, role: 'Lipide/Coating' });
        } else if (fam === 'COLORANTE') {
            coloranti.push({ id, ing, role: 'Colorante' });
        } else if (fam === 'ACIDO') {
            acidi.push({ id, ing, role: 'Regolatore pH' });
        } else {
            altri.push({ id, ing, role: 'Altro' });
        }
    });
    
    // Calcola percentuali BASE
    let formula = [];
    let totalPercent = 0;
    
    if (matrici.length > 0) {
        const perMatrice = Math.round(70 / matrici.length);
        matrici.forEach(m => { formula.push({ ...m, percent: perMatrice }); totalPercent += perMatrice; });
    }
    plastificanti.forEach(p => {
        const pct = Math.round(((p.ing.range_percent_min || 10) + (p.ing.range_percent_max || 30)) / 2);
        formula.push({ ...p, percent: pct }); totalPercent += pct;
    });
    if (cariche.length > 0) {
        const perCarica = Math.round(15 / cariche.length);
        cariche.forEach(c => { formula.push({ ...c, percent: perCarica }); totalPercent += perCarica; });
    }
    reticolanti.forEach(r => {
        const pct = Math.round(((r.ing.range_percent_min || 1) + (r.ing.range_percent_max || 5)) / 2);
        formula.push({ ...r, percent: pct }); totalPercent += pct;
    });
    if (lipidi.length > 0) {
        const perLipide = Math.round(10 / lipidi.length);
        lipidi.forEach(l => { formula.push({ ...l, percent: perLipide }); totalPercent += perLipide; });
    }
    coloranti.forEach(c => { formula.push({ ...c, percent: 2 }); totalPercent += 2; });
    acidi.forEach(a => { formula.push({ ...a, percent: 2 }); totalPercent += 2; });
    altri.forEach(o => { formula.push({ ...o, percent: 5 }); totalPercent += 5; });
    
    // Normalizza a 100% per i valori BASE
    if (totalPercent !== 100 && formula.length > 0) {
        const factor = 100 / totalPercent;
        let sum = 0;
        formula.forEach((f, i) => {
            if (i < formula.length - 1) { f.percent = Math.round(f.percent * factor); sum += f.percent; }
            else { f.percent = 100 - sum; }
        });
    }
    
    let hasCustom = false;
    formula.forEach(f => {
        f.basePercent = f.percent;
        if (customDosages[f.id] !== undefined) {
            f.percent = customDosages[f.id];
            f.modified = true;
            hasCustom = true;
        }
    });
    
    // Calcola totale effettivo
    let total = formula.reduce((s, f) => s + f.percent, 0);
    
    // Raccogli note di compatibilità 
    let notes = [];
    for (let i = 0; i < selected.length; i++) {
        for (let j = i + 1; j < selected.length; j++) {
            const ing1 = ings[selected[i]], ing2 = ings[selected[j]];
            if (!ing1 || !ing2) continue;
            const fam1 = ing1.famiglia, fam2 = ing2.famiglia;
            let compat = null;
            if (compatDB[fam1] && compatDB[fam1][fam2]) compat = compatDB[fam1][fam2];
            else if (compatDB[fam2] && compatDB[fam2][fam1]) compat = compatDB[fam2][fam1];
            if (compat && compat.note && compat.note !== 'Compatibili' && compat.note !== 'Non interagiscono') {
                notes.push(compat.note);
            }
        }
    }
    
    // Genera nome formula — tutte le matrici + modificatore principale
    let formulaName = 'Formula';
    if (matrici.length > 0) {
        formulaName = matrici.slice(0, 2).map(m => m.ing.nome).join(' + ');
        if (matrici.length > 2) formulaName += ' +…';
        // Aggiungi modificatore principale (plastificante > reticolante > carica)
        const mod = plastificanti[0] || reticolanti[0] || cariche[0] || lipidi[0];
        if (mod) formulaName += ' · ' + mod.ing.nome;
    }
    
    // === v71: RENDER HTML CON +/- ===
    let html = '<table class="formula-table">';
    html += '<thead><tr><th>Ingrediente</th><th>Ruolo</th><th style="text-align:right">Grammi</th><th style="text-align:right">%</th></tr></thead>';
    html += '<tbody>';
    formula.forEach(f => {
        const dotClass = getCategoryClass(f.ing.famiglia);
        const rules = FAMILY_DOSE_RULES[f.ing.famiglia] || { min: 1, max: 50, step: 1 };
        const atMin = f.percent <= rules.min;
        const atMax = f.percent >= rules.max;
        const delta = f.modified ? f.percent - f.basePercent : 0;
        const deltaStr = delta > 0 ? '+' + delta : '' + delta;
        const effectivePct = total > 0 ? Math.round(f.percent / total * 100) : 0;
        
        html += '<tr>';
        html += '<td><div class="ing-name"><span class="dot ' + dotClass + '"></span>' + f.ing.nome + '</div></td>';
        html += '<td>' + f.role + '</td>';
        html += '<td><div class="dose-controls">';
        html += '<button class="dose-btn' + (atMin ? ' at-limit' : '') + '" onclick="adjustDosage(\'' + f.id + '\',-1)" title="\u22121g">\u2212</button>';
        html += '<span class="dose-val' + (f.modified ? ' modified' : '') + '">' + f.percent + 'g</span>';
        if (f.modified) html += '<span class="dose-delta">(' + deltaStr + ')</span>';
        html += '<button class="dose-btn' + (atMax ? ' at-limit' : '') + '" onclick="adjustDosage(\'' + f.id + '\',1)" title="+1g">+</button>';
        html += '</div></td>';
        html += '<td class="grams' + (f.modified && effectivePct !== f.basePercent ? ' modified' : '') + '" style="text-align:right">' + effectivePct + '%</td>';
        html += '</tr>';
    });
    html += '</tbody>';
    
    // Riga totale
    html += '<tfoot><tr><td colspan="2"><strong>' + formulaName + '</strong>';
    if (hasCustom) html += ' <span class="formula-reset-link" onclick="resetDosages()">reset</span>';
    html += '</td><td style="text-align:right;font-weight:600' + (total !== 100 ? ';color:#e65100' : '') + '">' + total + 'g</td>';
    html += '<td style="text-align:right;font-weight:600">100%</td></tr></tfoot>';
    html += '</table>';

    
    const smartMsgs = getSmartMessages(formula, total);
    smartMsgs.forEach(msg => {
        html += '<div class="formula-total-msg ' + msg.type + '">' + msg.text + '</div>';
    });
    
    if (notes.length > 0) {
        // Filtra note generiche/inutili — mostra solo quelle operative
        const skipNotes = ['Standard', 'Rinforzo', 'Rinforzo meccanico', 'Rinforzo strutturale',
            'Coating', 'Coating possibile', 'Blend comuni', 'Combinabili', 'Post-processing',
            'Miscele colori', 'Mix cariche possibile', 'Variabile', 'Possono combinarsi',
            'Antiossidante', 'Variabile per reticolante', 'Coating per waterproofing',
            'Solo chitosano nel database', 'Alginato+carragenina possibile',
            'Non interazione diretta significativa', 'Non interazione significativa',
            'Gelatina+agar classico', 'Chitosano come coating', 'Chitosano come coating antimicrobico',
            'Olio riduce shrinkage', 'Gusci+alginato classico', 'Tinture durante o dopo crescita'];
        const filteredNotes = [...new Set(notes)].filter(n => 
            !skipNotes.includes(n) && n.length > 22
        );
        if (filteredNotes.length > 0) {
            html += '<div class="formula-notes"><div class="formula-notes-title">Note di processo</div>';
            html += filteredNotes.map(n => '→ ' + n).join('<br>');
            html += '</div>';
        }
    }
    
    html += '<div class="formula-actions">';
    html += '<button class="btn-save" onclick="saveFormula()">Salva</button>';
    html += '<button class="btn-download" onclick="printFormula()">Stampa scheda</button>';
    html += '</div>';
    
    contentEl.innerHTML = html;
    
    const props = recalcPropsFromFormula(formula);
    
    // Salva formula corrente per export (note GIÀ filtrate)
    const skipNotesExport = ['Standard', 'Rinforzo', 'Rinforzo meccanico', 'Rinforzo strutturale',
        'Coating', 'Coating possibile', 'Blend comuni', 'Combinabili', 'Post-processing',
        'Miscele colori', 'Mix cariche possibile', 'Variabile', 'Possono combinarsi',
        'Antiossidante', 'Variabile per reticolante', 'Coating per waterproofing',
        'Solo chitosano nel database', 'Alginato+carragenina possibile',
        'Non interazione diretta significativa', 'Non interazione significativa',
        'Gelatina+agar classico', 'Chitosano come coating', 'Chitosano come coating antimicrobico',
        'Olio riduce shrinkage', 'Gusci+alginato classico', 'Tinture durante o dopo crescita'];
    const filteredNotesForExport = [...new Set(notes)].filter(n =>
        !skipNotesExport.includes(n) && n.length > 22
    );
    window.currentFormula = { name: formulaName, items: formula, notes: filteredNotesForExport, total, properties: props };
    
    updateBar('barTrasp', props.trasparenza);
    updateBar('barFlex', props.flessibilita);
    updateBar('barH2O', props.resistenzaH2O);
    updateBar('barMecc', props.resistenzaMecc);
    if (hasCustom) {
        ['barTrasp', 'barFlex', 'barH2O', 'barMecc'].forEach(id => {
            const el = document.getElementById(id);
            if (el) { el.classList.remove('pulse'); void el.offsetWidth; el.classList.add('pulse'); }
        });
    }

    if (window._descParams) {
        const dp = window._descParams;
        generateMaterialDescription(dp.selected, dp.matrice, dp.plastificante, dp.lipide,
            props.trasparenza, props.flessibilita, props.resistenzaH2O, props.resistenzaMecc,
            dp.vegano, dp.foodSafe, dp.limits);
    }
    
    if (hasCustom) {
        clearTimeout(descUpdateTimer);
        descUpdateTimer = setTimeout(() => {
            if (window._descParams) {
                const dp = window._descParams;
                generateMaterialDescription(dp.selected, dp.matrice, dp.plastificante, dp.lipide,
                    props.trasparenza, props.flessibilita, props.resistenzaH2O, props.resistenzaMecc,
                    dp.vegano, dp.foodSafe, dp.limits);
            }
        }, 600);
    }
  } catch(e) { console.error('calculateFormula ERROR:', e); }
}

function adjustDosage(ingId, delta) {
    const ings = INGREDIENTI_DATA?.ingredienti || {};
    const ing = ings[ingId];
    if (!ing) return;
    
    const rules = FAMILY_DOSE_RULES[ing.famiglia] || { min: 1, max: 50, step: 5 };
    
    // Trova valore attuale
    const current = customDosages[ingId] !== undefined ? customDosages[ingId] : getBasePercent(ingId);
    const newVal = Math.max(rules.min, Math.min(rules.max, current + delta));
    
    if (newVal === current) return;
    
    // Se torna al base, rimuovi custom
    const base = getBasePercent(ingId);
    if (newVal === base) {
        delete customDosages[ingId];
    } else {
        customDosages[ingId] = newVal;
    }
    
    calculateFormula();
}

function getBasePercent(ingId) {
    if (window.currentFormula && window.currentFormula.items) {
        const item = window.currentFormula.items.find(f => f.id === ingId);
        if (item) return item.basePercent;
    }
    return 0;
}

function resetDosages() {
    customDosages = {};
    calculateFormula();
    showToast('Dosaggi ripristinati', 'info');
}


function recalcPropsFromFormula(formula) {
    let trasp = 0, flex = 0, h2o = 0, mecc = 0;
    let hasMatrice = false;
    let famigliePresenti = new Set();
    let famiglieConte = {};
    
    formula.forEach(f => {
        const fam = f.ing.famiglia;
        const rates = FAMILY_PROP_RATES[fam];
        if (!rates) return;
        
        famigliePresenti.add(fam);
        famiglieConte[fam] = (famiglieConte[fam] || 0) + 1;
        
        const pct = f.percent;
        trasp += pct * rates.trasp;
        flex += pct * rates.flex;
        h2o += pct * rates.h2o;
        mecc += pct * rates.mecc;
        
        if (['PROTEINA', 'POLISACCARIDE_NEUTRO', 'POLISACCARIDE_ANIONICO', 'POLICATIONE', 'COLTURA'].includes(fam)) {
            hasMatrice = true;
        }
    });
    
    const famArray = [...famigliePresenti];
    for (let i = 0; i < famArray.length; i++) {
        for (let j = i; j < famArray.length; j++) {
            const key1 = famArray[i] + '+' + famArray[j];
            const key2 = famArray[j] + '+' + famArray[i];
            const interaction = FAMILY_INTERACTIONS[key1] || FAMILY_INTERACTIONS[key2];
            if (interaction) {
                trasp += interaction.trasp || 0;
                flex += interaction.flex || 0;
                h2o += interaction.h2o || 0;
                mecc += interaction.mecc || 0;
            }
        }
    }
    if ((famiglieConte['CARICA'] || 0) >= 2) {
        const dc = FAMILY_INTERACTIONS['CARICA+CARICA'];
        if (dc) { trasp += dc.trasp||0; flex += dc.flex||0; h2o += dc.h2o||0; mecc += dc.mecc||0; }
    }
    
    if (famigliePresenti.has('CARICA')) trasp = Math.min(trasp, 40);
    if (famigliePresenti.has('COLORANTE')) trasp = Math.min(trasp, 35);
    const opacizzanti = ['fondi_caffe', 'bucce_agrumi', 'segatura', 'paglia', 'cellulosa_carta'];
    if (formula.some(f => opacizzanti.includes(f.id))) trasp = Math.min(trasp, 25);
    
    if (!hasMatrice && formula.length > 0) {
        trasp = Math.max(trasp, 20);
        flex = Math.max(flex, 20);
        h2o = Math.max(h2o, 10);
        mecc = Math.max(mecc, 15);
    }
    
    return applyPostCalcModifiers(trasp, flex, h2o, mecc, formula);
}


// =============================================

// =============================================
// SMART MESSAGES (from v97)
// =============================================

// =============================================
function getSmartMessages(formula, total) {
    let msgs = [];
    if (typeof REGOLE_CHIMICHE === 'undefined') return msgs;
    
    // Analisi composizione
    let plastPct = 0, matricePct = 0, reticPct = 0, lipidePct = 0, caricaPct = 0;
    let hasFamilies = {};
    let ingredientNomi = [];
    formula.forEach(f => {
        const fam = f.ing.famiglia;
        hasFamilies[fam] = true;
        ingredientNomi.push((f.ing.nome || '').toLowerCase());
        if (fam === 'PLASTIFICANTE') plastPct += f.percent;
        else if (['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'].includes(fam)) matricePct += f.percent;
        else if (fam === 'SALE_RETICOLANTE') reticPct += f.percent;
        else if (fam === 'RESINA_LIPIDE') lipidePct += f.percent;
        else if (fam === 'CARICA') caricaPct += f.percent;
    });
    
    // Helper: check se un nome ingrediente e' presente (substring match)
    function hasIngNome(searchTerm) {
        return ingredientNomi.some(n => n.includes(searchTerm));
    }
    
    // Helper: check condizione generica
    function checkCondition(c) {
        if (c.famiglie_presenti) { for (var i=0; i<c.famiglie_presenti.length; i++) { if (!hasFamilies[c.famiglie_presenti[i]]) return false; } }
        if (c.famiglie_assenti) { for (var i=0; i<c.famiglie_assenti.length; i++) { if (hasFamilies[c.famiglie_assenti[i]]) return false; } }
        if (c.famiglie_presenti_any) { var any = false; for (var i=0; i<c.famiglie_presenti_any.length; i++) { if (hasFamilies[c.famiglie_presenti_any[i]]) any = true; } if (!any) return false; }
        if (c.ingredienti_presenti_nome) { for (var i=0; i<c.ingredienti_presenti_nome.length; i++) { if (!hasIngNome(c.ingredienti_presenti_nome[i])) return false; } }
        if (c.ingredienti_assenti_nome) { for (var i=0; i<c.ingredienti_assenti_nome.length; i++) { if (hasIngNome(c.ingredienti_assenti_nome[i])) return false; } }
        return true;
    }
    
    // ===== VINCOLI CHIMICI E STRUTTURALI (da DB) =====
    REGOLE_CHIMICHE.smart.forEach(function(regola) {
        if (checkCondition(regola.condizione)) {
            msgs.push({ type: regola.type, text: regola.testo });
        }
    });
    
    // ===== MESSAGGI SU DOSAGGIO (da DB) =====
    var dosRules = REGOLE_CHIMICHE.dosaggio || {};
    
    // Totale
    if (dosRules.totale && total !== 100) {
        var inRange = (total >= 95 && total <= 105);
        if (!inRange) {
            dosRules.totale.forEach(function(r) {
                if (total >= r.soglia_min && total < r.soglia_max) {
                    msgs.push({ type: r.type, text: r.testo.replace(/{total}/g, total) });
                }
            });
        }
    }
    
    // Percentuali
    if (dosRules.percentuali && total > 0) {
        var pctMap = {
            PLASTIFICANTE: Math.round(plastPct / total * 100),
            MATRICE: Math.round(matricePct / total * 100),
            SALE_RETICOLANTE: Math.round(reticPct / total * 100),
            CARICA: Math.round(caricaPct / total * 100),
            LIPIDE: Math.round(lipidePct / total * 100)
        };
        dosRules.percentuali.forEach(function(r) {
            if (r.tipo === 'rapporto_plast_matrice') {
                if (plastPct > 0 && matricePct > 0 && plastPct / matricePct > r.soglia) {
                    msgs.push({ type: r.type, text: r.testo.replace('{pct}', Math.round(plastPct/matricePct*100)) });
                }
                return;
            }
            var pct = pctMap[r.famiglia];
            if (pct === undefined || pct === 0) return;
            if (r.min_ingredienti && formula.length < r.min_ingredienti) return;
            var match = false;
            if (r.soglia && r.soglia_max) { match = pct > r.soglia && pct <= r.soglia_max; }
            else if (r.soglia) { match = pct > r.soglia; }
            else if (r.soglia_max) { match = pct > 0 && pct < r.soglia_max; }
            if (match) {
                msgs.push({ type: r.type, text: r.testo.replace('{pct}', pct) });
            }
        });
    }
    
    return msgs;
}
