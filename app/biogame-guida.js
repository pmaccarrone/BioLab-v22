// ============================================
// BIOGAME GUIDA — Modalità guidata nel BioGame
// ============================================
// Estrae la conoscenza dal Tutor (scenari, affinità, requisiti)
// e la integra nell'interfaccia circolare del BioGame.
// Sostituisce tutor.js quando funziona bene.
// v2 — 27 febbraio 2026

(function(){
'use strict';

// ═══════════════════════════════════════════
// IBRIDAZIONE: famiglie complementari per seconda matrice
// ═══════════════════════════════════════════
const FAMIGLIE_COMPLEMENTARI = {
  PROTEINA: ['POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE'],
  POLISACCARIDE_NEUTRO: ['PROTEINA','POLISACCARIDE_ANIONICO'],
  POLISACCARIDE_ANIONICO: ['PROTEINA','POLISACCARIDE_NEUTRO'],
  POLICATIONE: ['PROTEINA','POLISACCARIDE_NEUTRO']
};

// Mappa ingrediente → famiglia (per ibridazione)
const FAMIGLIA_MAP = {
  gelatina:'PROTEINA', caseina:'PROTEINA', albumina:'PROTEINA',
  cheratina:'PROTEINA', zeina:'PROTEINA',
  agar:'POLISACCARIDE_NEUTRO', amido_mais:'POLISACCARIDE_NEUTRO',
  amido_patata:'POLISACCARIDE_NEUTRO', amido_tapioca:'POLISACCARIDE_NEUTRO',
  gomma_guar:'POLISACCARIDE_NEUTRO', xantana:'POLISACCARIDE_NEUTRO',
  gomma_arabica:'POLISACCARIDE_NEUTRO', farina_riso:'POLISACCARIDE_NEUTRO',
  alginato:'POLISACCARIDE_ANIONICO', carragenina:'POLISACCARIDE_ANIONICO',
  pectina:'POLISACCARIDE_ANIONICO',
  chitosano:'POLICATIONE'
};

// Note ibridazione per coppie comuni
const NOTE_IBRIDAZIONE = {
  'gelatina+agar': 'Classica combinazione: l\'agar dà rigidità strutturale, la gelatina aggiunge elasticità e trasparenza. Procedura: bollire agar prima, raffreddare a 60°C, poi aggiungere gelatina.',
  'gelatina+alginato': 'Film composito: gelatina dà la base, alginato reticolato con CaCl₂ dà resistenza all\'acqua. Processo in due fasi.',
  'gelatina+chitosano': 'Proteine + policatione: buona interazione ionica. Il chitosano porta proprietà antimicrobiche.',
  'agar+gelatina': 'Classica combinazione: l\'agar dà rigidità strutturale, la gelatina aggiunge elasticità e trasparenza. Procedura: bollire agar prima, raffreddare a 60°C, poi aggiungere gelatina.',
  'amido_mais+gelatina': 'Blend economico: amido riduce costi, gelatina migliora flessibilità e trasparenza.',
  'alginato+gelatina': 'Gel composito: combina reticolazione ionica (alginato) con termoreversibilità (gelatina).',
  'chitosano+gelatina': 'Film antimicrobico flessibile. Buona sinergia carica+/carica-.',
  'chitosano+pectina': 'Polielettrolita complesso: il chitosano (+) e la pectina (-) si auto-assemblano per attrazione ionica.',
};

function getIbridazioneNota(mat1, mat2) {
  return NOTE_IBRIDAZIONE[mat1+'+'+mat2] || NOTE_IBRIDAZIONE[mat2+'+'+mat1] || null;
}

// ═══════════════════════════════════════════
// CONOSCENZA: scenari per matrice
// ═══════════════════════════════════════════
// Ogni matrice ha una sequenza di step.
// step.slot = quale slot BioGame puntare
// step.cat = categoria famiglia da cercare
// step.q = domanda/guida mostrata nel pannello PERCHÉ
// step.obbligatorio = non si può saltare
// step.note = nota didattica
// step.multi = true → step con più categorie opzionali

const SCENARI_GUIDA = {
  gelatina: {
    intro: 'La gelatina forma film trasparenti e gel elastici. Termoreversibile: si rifonde a 30°C. Base versatile per molti materiali.',
    tecnica: 'Sciogliere gelatina in acqua calda (50-60°C), aggiungere modificatori, versare su superficie liscia, asciugare 24-48h.',
    chiavistello: { trasparenza:80, flessibilita:70, resistenzaH2O:20, resistenzaMecc:40, biodegradabilita:95 },
    steps: [
      { slot:'pla', q:'Il film sarà rigido e fragile. Vuoi renderlo flessibile?',
        note:'La glicerina è il plastificante classico per gelatina. Senza di essa il film si crepa.', skippable:true, skipLabel:'No — film rigido tipo vetro' },
      { slot:'ret', q:'Vuoi stabilizzare il materiale? Senza reticolante la gelatina si rifonde a 30°C.',
        note:'Tannini: concia naturale, come il cuoio. Borace: reticola ma è tossico. CaCl₂ non funziona con le proteine.', skippable:true, skipLabel:'No — materiale termoreversibile' },
      { slot:'car', q:'Vuoi dare corpo con una carica?',
        note:'Le cariche rendono il materiale composito — più strutturale ma meno trasparente.', skippable:true },
      { slot:'col', q:'Colorante naturale?',
        note:'Curcuma (giallo), spirulina (verde), carbone (nero). Riduce trasparenza.', skippable:true },
      { slot:'lip', q:'Coating impermeabile?',
        note:'Cera o lipide sulla superficie. Protegge dall\'acqua ma il materiale non è più trasparente.', skippable:true },
    ]
  },
  caseina: {
    intro: 'La caseina precipitata con acido forma una massa modellabile. Con reticolante diventa plastica dura tipo Galalite (1897).',
    tecnica: 'Precipitare caseina dal latte con acido, impastare, aggiungere reticolante, pressare in stampo, stagionare.',
    chiavistello: { trasparenza:20, flessibilita:20, resistenzaH2O:50, resistenzaMecc:80, biodegradabilita:85 },
    steps: [
      { slot:'ret', q:'La caseina è friabile senza reticolante. Quale usi?',
        note:'Borace o allume sono i reticolanti classici per proteine. Storicamente la formalina veniva usata (tossica). I tannini funzionano bene.', obbligatorio:true },
      { slot:'car', q:'Carica per modificare texture?',
        note:'Fondi caffè, segatura, fibre: cambiano aspetto e proprietà meccaniche.', skippable:true },
      { slot:'col', q:'Colorante? La caseina è naturalmente bianca.',
        note:'Si colora la massa prima della pressatura.', skippable:true },
    ]
  },
  agar: {
    intro: 'Agar forma gel rigidi e trasparenti. Richiede ebollizione (>85°C). Vegano.',
    tecnica: 'Portare a ebollizione con agar (1-2%), versare in stampo, gelifica a ~38°C. Per film: stendere sottile, essiccare.',
    chiavistello: { trasparenza:85, flessibilita:30, resistenzaH2O:35, resistenzaMecc:55, biodegradabilita:95 },
    steps: [
      { slot:'pla', q:'L\'agar è rigido e fragile. Plastificante?',
        note:'Plastificante ESSENZIALE per evitare crepe. Ma non aspettarti la flessibilità della gelatina — l\'agar resta sempre più rigido.', skippable:true, skipLabel:'No — lastra rigida per stampo' },
      { slot:'car', q:'Carica per composito strutturale?',
        note:'Fibre e polveri danno corpo. Buono per pelle vegetale.', skippable:true },
      { slot:'col', q:'Colorante? L\'agar puro è molto trasparente.',
        note:'Colora prima di versare nello stampo.', skippable:true },
      { slot:'lip', q:'Coating protettivo?',
        note:'L\'agar è sensibile all\'umidità. Un coating superficiale aiuta.', skippable:true },
    ]
  },
  amido_mais: {
    intro: 'Amido di mais: film economico traslucido. Tendenza alla retrogradazione (diventa opaco nel tempo).',
    tecnica: 'Miscelare amido in acqua fredda, cuocere a 70-80°C mescolando fino a gelificazione, versare, asciugare lentamente.',
    chiavistello: { trasparenza:50, flessibilita:60, resistenzaH2O:15, resistenzaMecc:35, biodegradabilita:95 },
    steps: [
      { slot:'pla', q:'Senza plastificante si spacca. Quale?',
        note:'20-30% di glicerina è il range classico per amidi. Senza almeno il 20% il film si crepa.', obbligatorio:true },
      { slot:'car', q:'Carica per composito?', note:'Per dare struttura.', skippable:true },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
      { slot:'lip', q:'Coating per protezione acqua?', note:'L\'amido è molto sensibile all\'umidità.', skippable:true },
    ]
  },
  amido_patata: {
    intro: 'Amido di patata: più trasparente dell\'amido di mais, film più liscio. Fragile secco.',
    tecnica: 'Come amido mais. Gelifica a temperatura leggermente più bassa.',
    chiavistello: { trasparenza:60, flessibilita:55, resistenzaH2O:15, resistenzaMecc:30, biodegradabilita:95 },
    steps: [
      { slot:'pla', q:'Plastificante per evitare crepe:', note:'Obbligatorio per gli amidi.', obbligatorio:true },
      { slot:'col', q:'Colorante?', note:'L\'amido di patata dà film molto trasparenti — il colore risalta bene.', skippable:true },
      { slot:'lip', q:'Coating?', note:'Protezione dall\'umidità.', skippable:true },
    ]
  },
  amido_tapioca: {
    intro: 'Amido di tapioca: film molto elastico. Più flessibile degli altri amidi.',
    tecnica: 'Come amido mais.',
    chiavistello: { trasparenza:55, flessibilita:70, resistenzaH2O:15, resistenzaMecc:30, biodegradabilita:95 },
    steps: [
      { slot:'pla', q:'Plastificante per flessibilità extra?',
        note:'La tapioca è già più flessibile degli altri amidi. Il plastificante è meno critico.', skippable:true, skipLabel:'No — già abbastanza flessibile' },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
      { slot:'car', q:'Carica per struttura?', note:'Composito.', skippable:true },
    ]
  },
  alginato: {
    intro: 'L\'alginato non gelifica da solo. Servono ioni calcio (CaCl₂ o lattato di calcio) per creare il gel ionico.',
    tecnica: 'Sciogliere alginato in acqua, aggiungere colorante/carica, versare/immergere in bagno CaCl₂ (0.5-2%).',
    chiavistello: { trasparenza:70, flessibilita:50, resistenzaH2O:60, resistenzaMecc:45, biodegradabilita:90 },
    autoRequire: 'cacl2', // aggiunto automaticamente
    steps: [
      { slot:'col', q:'Colorante PRIMA del bagno di calcio',
        note:'Va aggiunto all\'alginato prima della reticolazione. Dopo non penetra nel gel.', skippable:true },
      { slot:'car', q:'Carica / rinforzo?',
        note:'Fondi caffè, fibre: corpo e texture. Per composito tipo cuoio.', skippable:true },
      { slot:'pla', q:'Plastificante?',
        note:'Glicerina rende il gel meno rigido dopo essiccazione.', skippable:true },
      { slot:'lip', q:'Coating post-reticolazione?',
        note:'Protezione superficiale dopo che il gel si è formato.', skippable:true },
    ]
  },
  carragenina: {
    intro: 'Carragenina: gel elastico trasparente. Simile alla gelatina ma vegano. Richiede ebollizione.',
    tecnica: 'Portare a ebollizione, versare, gelifica raffreddando. Film: stendere sottile e essiccare.',
    chiavistello: { trasparenza:75, flessibilita:60, resistenzaH2O:40, resistenzaMecc:45, biodegradabilita:90 },
    steps: [
      { slot:'pla', q:'Plastificante?', note:'La carragenina forma gel già elastici. Opzionale.',
        skippable:true, skipLabel:'No — gel elastico naturalmente' },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
      { slot:'lip', q:'Coating?', note:'Protezione superficiale.', skippable:true },
    ]
  },
  pectina: {
    intro: 'Pectina: gelifica con acido+zucchero (marmellata) o con CaCl₂ (gel ionico). Vegana, food-safe.',
    tecnica: 'Sciogliere pectina con zucchero e acido, cuocere, versare. Oppure: sciogliere e reticolare con CaCl₂.',
    chiavistello: { trasparenza:60, flessibilita:45, resistenzaH2O:30, resistenzaMecc:35, biodegradabilita:95 },
    steps: [
      { slot:'pla', q:'Plastificante?', note:'Per flessibilità.', skippable:true },
      { slot:'ret', q:'Reticolante (CaCl₂) per gel ionico più stabile?',
        note:'CaCl₂ crea gel ionico con la pectina (meccanismo egg-box). Alternativa: gelificazione acida con zucchero.', skippable:true },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
    ]
  },
  chitosano: {
    intro: 'Chitosano: film antimicrobico naturale. Richiede acido per sciogliersi (acido citrico, aceto). Non vegano (da crostacei).',
    tecnica: 'Sciogliere in soluzione acida (1-2% acido citrico), versare su superficie liscia, asciugare.',
    chiavistello: { trasparenza:65, flessibilita:35, resistenzaH2O:55, resistenzaMecc:50, biodegradabilita:85 },
    steps: [
      { slot:'pla', q:'Plastificante? Il chitosano puro è rigido.',
        note:'Il chitosano forma film parzialmente idrofobi e antimicrobici anche da solo.', skippable:true, skipLabel:'No — film rigido antibatterico' },
      { slot:'car', q:'Carica per rinforzo strutturale?', note:'Rinforzo.', skippable:true },
      { slot:'ret', q:'Reticolante per stabilità extra?', note:'Tannini funzionano bene con chitosano.', skippable:true },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
    ]
  },
  zeina: {
    intro: 'Zeina: proteina del mais. Film idrofobo giallastro. Si scioglie solo in alcool etilico (70-80%), non in acqua. Vegana.',
    tecnica: 'Sciogliere zeina in alcool etilico 70-80%, aggiungere plastificante, versare, far evaporare. Il film si forma per evaporazione.',
    chiavistello: { trasparenza:40, flessibilita:30, resistenzaH2O:70, resistenzaMecc:50, biodegradabilita:80 },
    steps: [
      { slot:'pla', q:'Plastificante? La zeina pura è fragile.',
        note:'Coating rigido senza plastificante.', skippable:true, skipLabel:'No — coating rigido' },
      { slot:'col', q:'Colorante?', note:'La zeina è già gialla naturalmente.', skippable:true },
      { slot:'lip', q:'Coating aggiuntivo?', note:'Doppia barriera: zeina + cera.', skippable:true },
    ]
  },
  cheratina: {
    intro: 'Cheratina: proteina strutturale da lana/capelli/piume. Film resistenti e idrofobi. Processo complesso.',
    tecnica: 'Sciogliere in soluzione basica o con urea, versare, asciugare. Richiede attenzione alla denaturazione.',
    chiavistello: { trasparenza:30, flessibilita:35, resistenzaH2O:65, resistenzaMecc:70, biodegradabilita:80 },
    steps: [
      { slot:'pla', q:'Plastificante?', note:'Film più morbido.', skippable:true, skipLabel:'No — film rigido' },
      { slot:'car', q:'Carica per rinforzo?', note:'Rinforzo strutturale.', skippable:true },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
    ]
  },
  albumina: {
    intro: 'Albumina (da uovo): coagula irreversibilmente con il calore (>60°C). Film rigidi, schiume stabili. Food-safe.',
    tecnica: 'Film: sciogliere in acqua, versare, coagulare a 60-70°C. Schiuma: sbattere a neve, stabilizzare, cuocere. Irreversibile.',
    chiavistello: { trasparenza:45, flessibilita:25, resistenzaH2O:40, resistenzaMecc:55, biodegradabilita:90 },
    steps: [
      { slot:'pla', q:'Plastificante?', note:'L\'albumina coagulata è rigida.', skippable:true, skipLabel:'No — film/schiuma rigida' },
      { slot:'car', q:'Carica / rinforzo?', note:'Fibre o polveri per composito.', skippable:true },
      { slot:'ret', q:'Reticolante?', note:'Stabilizza la struttura prima della coagulazione.', skippable:true },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
      { slot:'lip', q:'Coating?', note:'Protezione superficiale.', skippable:true },
    ]
  },
  // Matrici minori — scenari semplificati
  gomma_guar: {
    intro: 'Gomma guar: addensante naturale. Non gelifica da solo — usato come modificatore reologico.',
    tecnica: 'Sciogliere in acqua fredda mescolando vigorosamente. Combina bene con altre matrici.',
    chiavistello: { trasparenza:60, flessibilita:50, resistenzaH2O:15, resistenzaMecc:20, biodegradabilita:95 },
    steps: [
      { slot:'pla', q:'Plastificante?', note:'Per flessibilità del film.', skippable:true },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
    ]
  },
  xantana: {
    intro: 'Xantana: polisaccaride da fermentazione batterica. Eccellente addensante, film possibili.',
    tecnica: 'Sciogliere in acqua fredda. Ottimo in combinazione con gomma guar (effetto sinergico).',
    chiavistello: { trasparenza:55, flessibilita:45, resistenzaH2O:15, resistenzaMecc:25, biodegradabilita:95 },
    steps: [
      { slot:'pla', q:'Plastificante?', note:'Per flessibilità.', skippable:true },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
    ]
  },
  gomma_arabica: {
    intro: 'Gomma arabica: legante naturale, forma film trasparenti. Usata come incapsulante e coating.',
    tecnica: 'Sciogliere in acqua calda (50°C), versare, essiccare.',
    chiavistello: { trasparenza:70, flessibilita:40, resistenzaH2O:20, resistenzaMecc:30, biodegradabilita:95 },
    steps: [
      { slot:'pla', q:'Plastificante?', note:'Per flessibilità.', skippable:true },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
    ]
  },
  farina_riso: {
    intro: 'Farina di riso: alto contenuto di amido. Film opachi, economici.',
    tecnica: 'Come amido mais. Più opaco per la presenza di proteine e fibre.',
    chiavistello: { trasparenza:30, flessibilita:45, resistenzaH2O:15, resistenzaMecc:35, biodegradabilita:95 },
    steps: [
      { slot:'pla', q:'Plastificante?', note:'Essenziale come per gli amidi.', obbligatorio:true },
      { slot:'col', q:'Colorante?', note:'Colore.', skippable:true },
    ]
  }
};

// Auto-inject ibridazione step (m2) in ogni scenario che ha famiglie complementari
Object.keys(SCENARI_GUIDA).forEach(matId => {
  const fam = FAMIGLIA_MAP[matId];
  const compl = FAMIGLIE_COMPLEMENTARI[fam];
  if (!compl || !compl.length) return;
  const sc = SCENARI_GUIDA[matId];
  // Non iniettare se già presente
  if (sc.steps.some(s => s.slot === 'm2')) return;
  // Inserisci dopo il primo step (posizione 1)
  sc.steps.splice(1, 0, {
    slot: 'm2',
    q: 'Vuoi ibridare con una seconda matrice?',
    note: `Le famiglie complementari per ${matId} sono: ${compl.join(', ')}. L'ibridazione combina proprietà diverse — è più complessa ma dà materiali unici.`,
    skippable: true,
    skipLabel: 'No — processo più semplice',
    isIbridazione: true,
    famiglieComplementari: compl
  });
});

// ═══════════════════════════════════════════
// AFFINITÀ: ingredienti consigliati per matrice
// ═══════════════════════════════════════════
const AFFINITA_GUIDA = {
  // RETICOLANTI
  cacl2:    { conMatrice:['alginato','pectina','carragenina'],
              nota_ok:'CaCl₂ crea gel ionico con polisaccaridi anionici',
              nota_no:'CaCl₂ non reticola questa matrice. Meglio tannini o borace.' },
  borace:   { conMatrice:['gelatina','caseina','albumina','cheratina'],
              nota_ok:'Borace reticola proteine. Attenzione: tossico, non food-safe.',
              nota_no:'Borace funziona solo con proteine.' },
  tannini:  { conMatrice:['gelatina','caseina','albumina','cheratina','zeina','chitosano','pectina'],
              nota_ok:'Reticolante naturale, food-safe. Ottimo con proteine e chitosano.',
              nota_no:null },
  allume:   { conMatrice:['gelatina','caseina','albumina','cheratina'],
              nota_ok:'Reticolante classico per proteine.',
              nota_no:'Funziona meglio con proteine.' },
  lattato_calcio: { conMatrice:['alginato','pectina'],
              nota_ok:'Alternativa food-safe al CaCl₂ per sferificazione inversa.',
              nota_no:'Funziona con polisaccaridi anionici.' },
  urea:     { conMatrice:['cheratina'],
              nota_ok:'Denatura e scioglie la cheratina.',
              nota_no:null },
  kcl:      { conMatrice:['carragenina'],
              nota_ok:'KCl gelifica la kappa-carragenina.',
              nota_no:'KCl specifico per kappa-carragenina.' },
  te_nero_forte: { conMatrice:['gelatina','caseina','albumina','cheratina','zeina','chitosano'],
              nota_ok:'Tannini naturali dal tè nero. Stesso meccanismo della concia.',
              nota_no:null }
};

// ═══════════════════════════════════════════
// STATO MODALITÀ GUIDATA
// ═══════════════════════════════════════════
const guidaState = {
  active: false,        // modalità guidata attiva?
  matriceId: null,      // matrice scelta per la guida
  currentStep: 0,       // indice step corrente
  skipped: new Set(),   // step saltati
  completed: new Set(), // step completati (slot riempito)
  autoRequired: null    // ingrediente auto-aggiunto (es. CaCl₂ per alginato)
};

// ═══════════════════════════════════════════
// API PUBBLICA
// ═══════════════════════════════════════════

function isActive() { return guidaState.active; }

function getState() { return guidaState; }

function getScenario(matriceId) {
  return SCENARI_GUIDA[matriceId] || null;
}

function hasScenario(matriceId) {
  return !!SCENARI_GUIDA[matriceId];
}

// Attiva la modalità guidata
function activate(matriceId) {
  if (!matriceId) return false;
  const sc = SCENARI_GUIDA[matriceId];
  if (!sc) return false;

  guidaState.active = true;
  guidaState.matriceId = matriceId;
  guidaState.currentStep = 0;
  guidaState.skipped = new Set();
  guidaState.completed = new Set();
  guidaState.autoRequired = null;

  // Auto-require (es. alginato → CaCl₂)
  if (sc.autoRequire && typeof ING !== 'undefined' && ING[sc.autoRequire]) {
    guidaState.autoRequired = sc.autoRequire;
  }

  return true;
}

// Disattiva (torna a libero)
function deactivate() {
  guidaState.active = false;
  // NON pulisce gli slot — gli ingredienti scelti restano
}

// Segna step come completato (slot riempito)
function completeStep(stepIdx) {
  guidaState.completed.add(stepIdx);
  advanceToNext();
}

// Salta step
function skipStep(stepIdx) {
  guidaState.skipped.add(stepIdx);
  advanceToNext();
}

// Avanza al prossimo step non completato/saltato
function advanceToNext() {
  const sc = SCENARI_GUIDA[guidaState.matriceId];
  if (!sc) return;
  for (let i = 0; i < sc.steps.length; i++) {
    if (!guidaState.completed.has(i) && !guidaState.skipped.has(i)) {
      guidaState.currentStep = i;
      return;
    }
  }
  // Tutti completati/saltati
  guidaState.currentStep = sc.steps.length; // beyond last = done
}

// Ricalcola completamento basandosi sui slot effettivamente pieni
function syncWithSlots(slotData) {
  const sc = SCENARI_GUIDA[guidaState.matriceId];
  if (!sc) return;

  sc.steps.forEach((step, i) => {
    if (slotData[step.slot]) {
      guidaState.completed.add(i);
    } else {
      guidaState.completed.delete(i);
      guidaState.skipped.delete(i); // se slot svuotato, riapri step
    }
  });

  advanceToNext();
}

// Controlla se un ingrediente è "consigliato" per la matrice corrente
function getAffinita(ingId) {
  const aff = AFFINITA_GUIDA[ingId];
  if (!aff) return null;
  if (aff.conMatrice && aff.conMatrice.includes(guidaState.matriceId)) {
    return { tag:'consigliato', nota: aff.nota_ok };
  }
  if (aff.nota_no) {
    return { tag:'sconsigliato', nota: aff.nota_no };
  }
  return null;
}

// Stato di ogni palla: 'focus' | 'attiva' | 'attenuata' | 'completata' | 'neutra'
function getPallaStato(slotId, slotCfg, slotData) {
  if (!guidaState.active) return 'neutra';

  const sc = SCENARI_GUIDA[guidaState.matriceId];
  if (!sc) return 'neutra';

  // Matrice m1: sempre neutra (già scelta)
  // Matrice m2: check ibridazione step
  if (slotId === 'm1') return 'neutra';

  // Slot già pieno
  if (slotData[slotId]) return 'completata';

  // Trovare se questo slot è nello step corrente
  const currentIdx = guidaState.currentStep;
  if (currentIdx >= sc.steps.length) return 'attenuata'; // tutti fatti

  const currentStep = sc.steps[currentIdx];
  if (currentStep.slot === slotId) return 'focus';

  // Slot è in uno step futuro?
  const futureStep = sc.steps.find((s, i) =>
    i > currentIdx && s.slot === slotId &&
    !guidaState.completed.has(i) && !guidaState.skipped.has(i)
  );
  if (futureStep) return 'attiva';

  return 'attenuata';
}

// Genera il contenuto del pannello PERCHÉ per lo step corrente
function getPercheContent() {
  const sc = SCENARI_GUIDA[guidaState.matriceId];
  if (!sc) return null;

  const idx = guidaState.currentStep;

  // Tutti gli step completati?
  if (idx >= sc.steps.length) {
    return {
      tipo: 'completo',
      titolo: 'Ricetta completa',
      testo: sc.tecnica,
      intro: sc.intro
    };
  }

  const step = sc.steps[idx];
  const progress = `Passo ${idx + 1} di ${sc.steps.length}`;

  const result = {
    tipo: 'step',
    titolo: step.q,
    note: step.note || '',
    progress,
    obbligatorio: !!step.obbligatorio,
    skippable: !!step.skippable && !step.obbligatorio,
    skipLabel: step.skipLabel || 'Salta →',
    stepIdx: idx,
    slotTarget: step.slot
  };

  // Ibridazione: aggiungi info complementari
  if (step.isIbridazione) {
    result.isIbridazione = true;
    result.famiglieComplementari = step.famiglieComplementari || [];
    result.matriceId = guidaState.matriceId;
  }

  return result;
}

// Dato un ingId matrice2, restituisce nota ibridazione se esiste
function getIbridazioneNotaForPair(mat2Id) {
  if (!guidaState.matriceId) return null;
  return getIbridazioneNota(guidaState.matriceId, mat2Id);
}

// Restituisce le matrici candidate per ibridazione (filtrate per famiglie complementari)
function getIbridazioniCandidati(allIngredients) {
  const sc = SCENARI_GUIDA[guidaState.matriceId];
  if (!sc) return [];
  const step = sc.steps[guidaState.currentStep];
  if (!step?.isIbridazione) return [];
  
  const famCompl = step.famiglieComplementari || [];
  return Object.keys(allIngredients).filter(id => {
    if (id === guidaState.matriceId) return false;
    const fam = FAMIGLIA_MAP[id];
    return fam && famCompl.includes(fam);
  });
}

// Tutti gli step sono completati o saltati?
function isComplete() {
  const sc = SCENARI_GUIDA[guidaState.matriceId];
  if (!sc) return false;
  return guidaState.currentStep >= sc.steps.length;
}

// Lista matrici che hanno uno scenario guidato
function getMatriciDisponibili() {
  return Object.keys(SCENARI_GUIDA);
}

// ═══════════════════════════════════════════
// ESPORTA
// ═══════════════════════════════════════════
window.BioGameGuida = {
  isActive, getState, getScenario, hasScenario,
  activate, deactivate,
  completeStep, skipStep, advanceToNext, syncWithSlots,
  getAffinita, getPallaStato, getPercheContent, isComplete,
  getMatriciDisponibili, SCENARI_GUIDA, AFFINITA_GUIDA,
  getIbridazioneNotaForPair, getIbridazioniCandidati,
  FAMIGLIA_MAP, NOTE_IBRIDAZIONE
};

console.log('[biogame-guida] Modulo guidato caricato.');

})();
