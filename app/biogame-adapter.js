// ============================================
// BIOGAME ADAPTER — Traduce il DB reale in formato BioGame
// ============================================
// Legge: INGREDIENTI_DATA, IMPLICAZIONI_MATRICE (dal DB)
// Produce: ING, IMPLICAZIONI, FAM_CANDIDATI (per BioGame)
// v1 — 27 febbraio 2026

(function(){
'use strict';

// ── 1. MAPPING FAMIGLIA → CATEGORIA SLOT ──
const FAM_TO_CAT = {
  PROTEINA:               'matrice',
  POLISACCARIDE_NEUTRO:   'matrice',
  POLISACCARIDE_ANIONICO: 'matrice',
  POLICATIONE:            'matrice',
  PLASTIFICANTE:          'plastificante',
  SALE_RETICOLANTE:       'reticolante',
  RESINA_LIPIDE:          'lipide',
  CARICA:                 'carica',
  COLORANTE:              'colorante',
  ADDITIVO:               'additivo',
  COLTURA:                'coltura',   // escluso dal BioGame chimico
  SOLVENTE:               'additivo'
};

// ── 2. INGREDIENTI DA ESCLUDERE ──
const ESCLUDI = new Set([
  'scoby','micelio',     // → BioGame Crescite
  'acqua',               // solvente implicito
  'latte',               // troppo generico
  'alcool_isopropilico'  // solvente industriale, non didattico
]);

// ── 3. NOMI BREVI (override per nomi DB troppo lunghi) ──
const NOMI_BREVI = {
  gelatina:'Gelatina',
  caseina:'Caseina',
  albumina:'Albumina',
  cheratina:'Cheratina',
  zeina:'Zeina',
  agar:'Agar',
  alginato:'Alginato',
  carragenina:'Carragenina',
  pectina:'Pectina',
  chitosano:'Chitosano',
  amido_mais:'Amido mais',
  amido_patata:'Amido patata',
  amido_tapioca:'Amido tapioca',
  gomma_guar:'Gomma guar',
  gomma_arabica:'Gomma arabica',
  farina_riso:'Farina riso',
  glicerina:'Glicerina',
  cacl2:'CaCl₂',
  tannini:'Tannini',
  allume:'Allume',
  lattato_calcio:'Lattato Ca',
  borace:'Borace',
  urea:'Urea',
  kcl:'KCl',
  te_nero_forte:'Tè nero forte',
  cera_carnauba:'Cera carnauba',
  cera_api:'Cera d\'api',
  gommalacca:'Gommalacca',
  colofonia:'Colofonia',
  olio_tung:'Olio di tung',
  olio_oliva:'Olio d\'oliva',
  acido_stearico:'Ac. stearico',
  fondi_caffe:'Fondi caffè',
  cellulosa_carta:'Cellulosa',
  fibre_cotone:'Fibre cotone',
  fibre_lino:'Fibre lino',
  caolino:'Caolino',
  gusci_uovo:'Gusci uovo',
  carbonato_calcio:'CaCO₃',
  grafite:'Grafite',
  segatura:'Segatura',
  fibre_canapa:'Fibre canapa',
  fibre_juta:'Fibre juta',
  bucce_agrumi:'Bucce agrumi',
  cenere_legno:'Cenere legno',
  pula_riso:'Pula riso',
  canapa_hurd:'Canapa hurd',
  sansa_oliva:'Sansa oliva',
  sughero:'Sughero',
  talco:'Talco',
  carbone_vegetale:'Carbone veg.',
  ossido_ferro:'Ossido ferro',
  acido_citrico:'Ac. citrico',
  aceto:'Aceto',
  oli_essenziali:'Oli essenziali',
  bicarbonato:'Bicarbonato',
  zucchero:'Zucchero',
  te_nero:'Tè nero',
  sapone:'Sapone',
  alcool:'Alcool',
  sale:'Sale',
  aquafaba:'Aquafaba',
  cremor_tartaro:'Cremor tartaro',
  miele:'Miele',
  ammoniaca_dolci:'Ammoniaca dolci',
  gesso:'Gesso'
};

// ── 4. COLORI PER FAMIGLIA ──
const COLORI_FAMIGLIA = {
  PROTEINA:               '#1B5E20',
  POLISACCARIDE_NEUTRO:   '#2E7D32',
  POLISACCARIDE_ANIONICO: '#388E3C',
  POLICATIONE:            '#00695C',
  PLASTIFICANTE:          '#558B2F',
  SALE_RETICOLANTE:       '#1565C0',
  RESINA_LIPIDE:          '#827717',
  CARICA:                 '#5D4037',
  COLORANTE:              '#E65100',
  ADDITIVO:               '#6A1B9A',
  SOLVENTE:               '#455A64'
};
// Sfumature dentro ogni famiglia per distinguere ingredienti
const SFUMATURE = {
  PROTEINA:               ['#1B5E20','#2E7D32','#1A237E','#33691E','#004D40'],
  POLISACCARIDE_NEUTRO:   ['#2E7D32','#388E3C','#43A047','#558B2F','#33691E','#689F38','#7CB342','#8BC34A'],
  POLISACCARIDE_ANIONICO: ['#388E3C','#00695C','#00796B'],
  POLICATIONE:            ['#00695C'],
  PLASTIFICANTE:          ['#558B2F','#689F38','#827717'],
  SALE_RETICOLANTE:       ['#1565C0','#0D47A1','#0277BD','#01579B','#1976D2','#283593','#1A237E','#0288D1'],
  RESINA_LIPIDE:          ['#827717','#9E9D24','#F9A825','#FF8F00','#EF6C00','#A1887F','#6D4C41'],
  CARICA:                 ['#5D4037','#6D4C41','#795548','#8D6E63','#A1887F','#4E342E','#3E2723',
                           '#5D4037','#795548','#6D4C41','#8D6E63','#A1887F','#4E342E','#3E2723',
                           '#5D4037','#795548','#6D4C41','#8D6E63','#A1887F','#4E342E'],
  COLORANTE:              ['#F57F17','#1B5E20','#BF360C','#212121','#B71C1C','#FF6F00','#FFD600'],
  ADDITIVO:               ['#6A1B9A','#7B1FA2','#8E24AA','#9C27B0','#AB47BC',
                           '#6A1B9A','#7B1FA2','#8E24AA','#9C27B0','#AB47BC',
                           '#6A1B9A','#7B1FA2','#8E24AA','#9C27B0','#AB47BC','#6A1B9A','#7B1FA2'],
  SOLVENTE:               ['#455A64']
};

// ── 5. CONVERSIONE STRINGHE → NUMERI (proprietà) ──
// Le stringhe del DB sono eterogenee. Classifico per campo e pattern.

function parseNumericProp(campo, val, famiglia) {
  if (val === null || val === undefined || val === 'null' || val === 'N/A') return null;
  const s = String(val).toLowerCase().trim();

  // Pattern generici
  if (/eccellente|ottim/.test(s)) return 90;
  if (/molto alta|molto buona/.test(s)) return 85;
  if (s === 'alta' || s === 'buona') return 80;
  if (/media[- ]alta/.test(s)) return 65;
  if (s === 'media' || s === 'moderata' || s === 'discreta') return 50;
  if (/media[- ]bassa/.test(s)) return 35;
  if (s === 'bassa') return 25;
  if (/molto bassa/.test(s)) return 12;
  if (s === 'scarsa' || /scarsa/.test(s)) return 15;
  if (s === 'nulla') return 0;

  // Campo-specifici per trasparenza
  if (campo === 'trasparenza') {
    if (/trasparente/.test(s)) return 85;
    if (/traslucid/.test(s)) return 55;
    if (/opac/.test(s)) return 10;
    if (/nero/.test(s)) return 5;
    if (/riduc/.test(s)) return null; // è un delta, non un valore base
    if (/non influenza|neutr/.test(s)) return null;
    if (/colora/.test(s)) return null; // colorante, non base
    if (/migliora/.test(s)) return null; // delta
  }

  // Campo-specifici per flessibilita
  if (campo === 'flessibilita') {
    if (/aumenta/.test(s)) return null; // è un delta
    if (/riduc/.test(s)) return null;
    if (/fragile|rigida/.test(s)) return 15;
    if (/elastico|comprimibile/.test(s)) return 60;
    if (/variabile/.test(s)) return 50;
    if (/neutr/.test(s)) return null;
    if (/plastifica/.test(s)) return null; // delta
  }

  // Campo-specifici per barriera_H2O
  if (campo === 'barriera_H2O') {
    if (/idrofob/.test(s)) return 85;
    if (/igroscopic/.test(s)) return 10;
    if (/peggior/.test(s)) return null; // delta
    if (/miglior/.test(s)) return null; // delta
    if (/neutr/.test(s)) return null;
    if (/riduc/.test(s)) return null; // delta
  }

  // Campo-specifici per barriera_O2
  if (campo === 'barriera_O2') {
    if (/miglior/.test(s)) return null; // delta
    if (/riduc/.test(s)) return null;
    if (/neutr/.test(s)) return null;
  }

  return null; // non mappabile → non incluso
}

// Calcola delta da stringhe di proprietà (per non-matrici)
function parseDelta(campo, val) {
  if (val === null || val === undefined || val === 'null' || val === 'N/A') return 0;
  const s = String(val).toLowerCase().trim();

  // Plastificanti
  if (/aumenta/.test(s) && campo === 'flessibilita') return +35;
  if (/aumenta inizialmente/.test(s)) return +15;
  if (/aumenta leggermente/.test(s)) return +12;
  if (/plastifica/.test(s)) return +30;
  if (/plastificante blando/.test(s)) return +15;

  // Peggioramenti
  if (/peggiora.*igroscopic/.test(s)) return -25;
  if (/peggiora/.test(s)) return -20;
  if (/riduce.*molto/.test(s)) return -30;
  if (/riduce.*leggermente/.test(s)) return -8;
  if (/riduce/.test(s)) return -18;

  // Miglioramenti
  if (/migliora.*leggermente/.test(s)) return +10;
  if (/miglior/.test(s)) return +20;

  // Cariche/coloranti: opacizzazione
  if (campo === 'trasparenza') {
    if (/opac/.test(s)) return -40;
    if (/nero/.test(s)) return -55;
    if (/riduc/.test(s)) return -30;
    if (/colora/.test(s)) return -18;
    if (/non influenza|neutr/.test(s)) return 0;
  }

  // Flessibilità effetti
  if (campo === 'flessibilita') {
    if (/fragile|rigida/.test(s)) return -20;
    if (/irrigidisce/.test(s)) return -18;
    if (/neutr/.test(s)) return 0;
  }

  // Barriera H2O miglioramenti
  if (campo === 'barriera_H2O') {
    if (/eccellente|alta.*idrofob/.test(s)) return +35;
    if (/igroscopic/.test(s)) return -20;
    if (/neutr/.test(s)) return 0;
  }

  return 0;
}

// ── 6. DERIVE EFFETTI (per pannello PERCHÉ) ──
function deriveEffetti(ing, cat) {
  const eff = {};
  const p = ing.proprieta || {};

  // Per ogni asse BioGame, analizza la stringa del DB
  const axes = [
    ['trasparenza', 'trasparenza'],
    ['flessibilita', 'flessibilita'],
    ['resistenzaH2O', 'barriera_H2O'],
    ['resistenzaMecc', 'struttura'],
    ['biodegradabilita', null]
  ];

  for (const [axis, dbField] of axes) {
    if (!dbField || !p[dbField]) continue;
    const s = String(p[dbField]).toLowerCase();
    let dir = null, note = '';

    if (cat === 'matrice') {
      // Per matrici: descrivere il valore base
      if (axis === 'trasparenza') {
        if (/trasparente|molto alta|alta/.test(s)) { dir = 'su'; note = 'alta'; }
        else if (/traslucid|media/.test(s)) { dir = 'neu'; note = 'media'; }
        else if (/opac|bassa/.test(s)) { dir = 'giu'; note = 'opaca'; }
      }
      if (axis === 'flessibilita') {
        if (/alta|elastico/.test(s)) { dir = 'su'; note = 'alta'; }
        else if (/media/.test(s)) { dir = 'neu'; note = 'media'; }
        else if (/bassa|fragile|rigid/.test(s)) { dir = 'giu'; note = 'bassa'; }
      }
      if (axis === 'resistenzaH2O') {
        if (/eccellente|buona|alta/.test(s)) { dir = 'su'; note = 'buona'; }
        else if (/media|moderata/.test(s)) { dir = 'neu'; note = 'media'; }
        else if (/scarsa|bassa/.test(s)) { dir = 'giu'; note = 'scarsa'; }
      }
      if (axis === 'resistenzaMecc') {
        if (/rigido|duro|resistente|forte/.test(s)) { dir = 'su'; note = 'alta'; }
        else if (/film|gel elastico|flessibile/.test(s)) { dir = 'neu'; note = 'media'; }
        else if (/fragile|schiuma/.test(s)) { dir = 'giu'; note = 'bassa'; }
      }
    } else {
      // Per modificatori: descrivere la direzione del cambiamento
      if (axis === 'trasparenza') {
        if (/opac|nero|riduc/.test(s)) { dir = 'giu'; note = cleanNote(s); }
        else if (/colora/.test(s)) { dir = 'giu'; note = cleanNote(s); }
        else if (/trasparente|migliora/.test(s)) { dir = 'su'; note = 'migliora'; }
      }
      if (axis === 'flessibilita') {
        if (/aumenta|plastifica/.test(s)) { dir = 'su'; note = 'sale'; }
        else if (/riduc|irrigidisce|fragile/.test(s)) { dir = 'giu'; note = 'scende'; }
      }
      if (axis === 'resistenzaH2O') {
        if (/migliora|eccellente|alta|idrofob/.test(s)) { dir = 'su'; note = 'sale'; }
        else if (/peggiora|riduc|igroscopic/.test(s)) { dir = 'giu'; note = 'scende'; }
      }
      if (axis === 'resistenzaMecc') {
        if (/rinforzo|rigido|resistente/.test(s)) { dir = 'su'; note = 'sale'; }
        else if (/riduc|indebol/.test(s)) { dir = 'giu'; note = 'scende'; }
      }
    }
    if (dir) eff[axis] = { dir, note };
  }
  return eff;
}

function cleanNote(s) {
  // Prima parola significativa
  if (/nero/.test(s)) return 'nero';
  if (/opaco/.test(s)) return 'opaco';
  if (/colora/.test(s)) return s.replace(/colora\s*/,'').substring(0,20);
  return s.substring(0,20);
}

// ── 7. GENERA TESTO PERCHÉ ──
function buildPerche(id, ing) {
  let html = '';
  // Funzione principale (sempre presente)
  if (ing.funzione) {
    html += ing.funzione.replace(/\b(film|gel|rigido|flessibil|trasparent|opac|antimicrob|reticol|plasti|coating)/gi, '<b>$1</b>');
  }
  // Descrizione breve se diversa dalla funzione
  if (ing.descrizione && ing.descrizione !== ing.funzione) {
    const desc = ing.descrizione.split('.').slice(0,2).join('.') + '.';
    if (desc.length < 200 && desc !== ing.funzione) {
      html += '<br><br>' + desc;
    }
  }
  return html || 'Ingrediente del database BioLab.';
}

// ── 8. GENERA nota_slider ──
const NOTA_SLIDER_TEMPLATES = {
  matrice:       'Più ${nome} → struttura più densa. Sotto il minimo non si forma materiale; oltre il massimo difficile da lavorare.',
  plastificante: 'Poco → appena meno fragile. Molto → gommoso. Oltre il massimo → appiccicoso.',
  reticolante:   'Piccole quantità hanno già effetto. Eccesso → materiale fragile o depositi.',
  lipide:        'Poco → effetto coating sottile. Molto → superficie cerosa/oleosa.',
  carica:        'Troppa carica → il materiale si sgretola. Granulometria fine per superficie liscia.',
  colorante:     'Poco → pastello. Molto → saturo. Oltre il massimo → accumuli di pigmento.',
  additivo:      'Regola la dose in base all\'effetto desiderato. Vedi funzione specifica.'
};

function buildNotaSlider(id, ing, cat) {
  // Specifici per ingredienti noti
  const specifici = {
    gelatina: 'Più gelatina → struttura più densa. Sotto il minimo il film non si forma; oltre il massimo diventa gommoso.',
    agar: 'Già 2g/100ml formano un gel. Oltre 8g il materiale diventa quasi ceramico.',
    alginato: 'Range stretto: sopra il massimo diventa troppo viscoso da lavorare. Serve sempre CaCl₂.',
    caseina: 'Usare come polvere secca prima di qualsiasi coagulazione.',
    amido_mais: 'Troppo poco → film fragile; troppo → pasta non lavorabile.',
    amido_patata: 'Simile all\'amido di mais ma gel più trasparente.',
    chitosano: 'Già a 4-5g forma film densi. Richiede dissoluzione in acido acetico.',
    glicerina: 'Poco → appena meno fragile. Molto → gommoso. Oltre il massimo → appiccicoso.',
    sorbitolo: 'Meno potente della glicerina ma più stabile in ambienti umidi.',
    olio_lino: 'Poco → plastificazione lieve con effetto coating. Molto → superficie oleosa.',
    cacl2: 'Piccole quantità hanno effetto immediato. Eccesso → indebolisce per osmosi.',
    tannini: 'Poco → sfumatura e lieve irrigidimento. Molto → effetto cuoio marcato.',
    borace: 'Molto attivo: dosi minime. Usare con cautela.',
    carbone_vegetale: 'Pochissimo basta: già 0.5g/100ml → grigio scuro.'
  };
  if (specifici[id]) return specifici[id];
  return (NOTA_SLIDER_TEMPLATES[cat] || NOTA_SLIDER_TEMPLATES.additivo).replace('${nome}', ing.nome);
}

// ── 9. CALCOLA PROPS BASE (solo matrici) ──
// Override manuali per matrici principali — valori calibrati didatticamente
const PROPS_OVERRIDE = {
  gelatina:    { trasparenza:85, flessibilita:55, resistenzaH2O:15, resistenzaMecc:50, biodegradabilita:95 },
  agar:        { trasparenza:70, flessibilita:25, resistenzaH2O:30, resistenzaMecc:65, biodegradabilita:90 },
  alginato:    { trasparenza:60, flessibilita:40, resistenzaH2O:25, resistenzaMecc:40, biodegradabilita:95 },
  caseina:     { trasparenza:20, flessibilita:20, resistenzaH2O:40, resistenzaMecc:80, biodegradabilita:85 },
  amido_mais:  { trasparenza:50, flessibilita:30, resistenzaH2O:20, resistenzaMecc:55, biodegradabilita:92 },
  amido_patata:{ trasparenza:55, flessibilita:32, resistenzaH2O:18, resistenzaMecc:52, biodegradabilita:92 },
  amido_tapioca:{trasparenza:58, flessibilita:35, resistenzaH2O:18, resistenzaMecc:48, biodegradabilita:92 },
  pectina:     { trasparenza:65, flessibilita:35, resistenzaH2O:28, resistenzaMecc:50, biodegradabilita:95 },
  chitosano:   { trasparenza:55, flessibilita:40, resistenzaH2O:45, resistenzaMecc:60, biodegradabilita:88 },
  carragenina: { trasparenza:72, flessibilita:30, resistenzaH2O:25, resistenzaMecc:55, biodegradabilita:92 },
  albumina:    { trasparenza:45, flessibilita:30, resistenzaH2O:30, resistenzaMecc:55, biodegradabilita:90 },
  cheratina:   { trasparenza:30, flessibilita:35, resistenzaH2O:50, resistenzaMecc:70, biodegradabilita:80 },
  zeina:       { trasparenza:40, flessibilita:25, resistenzaH2O:55, resistenzaMecc:60, biodegradabilita:82 },
  gomma_guar:  { trasparenza:60, flessibilita:50, resistenzaH2O:15, resistenzaMecc:30, biodegradabilita:95 },
  xantana:     { trasparenza:65, flessibilita:55, resistenzaH2O:18, resistenzaMecc:28, biodegradabilita:95 },
  gomma_arabica:{ trasparenza:70, flessibilita:45, resistenzaH2O:15, resistenzaMecc:25, biodegradabilita:95 },
  farina_riso: { trasparenza:45, flessibilita:28, resistenzaH2O:20, resistenzaMecc:50, biodegradabilita:92 },
};

function calcPropsBase(id, ing) {
  // Override manuale se disponibile
  if (PROPS_OVERRIDE[id]) return { ...PROPS_OVERRIDE[id] };

  const p = ing.proprieta || {};
  const props = {};
  const mappings = [
    ['trasparenza', 'trasparenza'],
    ['flessibilita', 'flessibilita'],
    ['resistenzaH2O', 'barriera_H2O'],
    ['resistenzaMecc', 'struttura'],
  ];
  for (const [axis, dbField] of mappings) {
    const v = parseNumericProp(dbField, p[dbField], ing.famiglia);
    props[axis] = v !== null ? v : 50; // default 50 se non mappabile
  }
  // Biodegradabilità: quasi tutti i biomateriali sono biodegradabili
  const dur = ing.durabilita || {};
  if (dur.biodegradabile === true && dur.compostabile === true) props.biodegradabilita = 95;
  else if (dur.biodegradabile === true) props.biodegradabilita = 85;
  else if (dur.biodegradabile === false) props.biodegradabilita = 20;
  else props.biodegradabilita = 80; // default biomateriale

  return props;
}

// ── 10. CALCOLA DELTA (non-matrici) ──
function calcDelta(id, ing, cat) {
  const p = ing.proprieta || {};
  const delta = {};

  // Mappings: asse BioGame → campo DB
  const mappings = [
    ['trasparenza', 'trasparenza'],
    ['flessibilita', 'flessibilita'],
    ['resistenzaH2O', 'barriera_H2O'],
    ['resistenzaMecc', 'struttura'],
  ];

  for (const [axis, dbField] of mappings) {
    const d = parseDelta(dbField, p[dbField]);
    if (d !== 0) delta[axis] = d;
  }

  // Overrides specifici per ingredienti noti (dove la stringa del DB non produce buoni delta)
  const overrides = {
    glicerina:    { flessibilita: +38, resistenzaH2O: -6, resistenzaMecc: -18 },
    sorbitolo:    { flessibilita: +26, resistenzaH2O: -3, resistenzaMecc: -10 },
    olio_lino:    { flessibilita: +20, resistenzaH2O: +8, trasparenza: -12 },
    cacl2:        { trasparenza: -10, resistenzaH2O: +32, resistenzaMecc: +20 },
    tannini:      { trasparenza: -28, flessibilita: -18, resistenzaH2O: +28, resistenzaMecc: +28 },
    allume:       { trasparenza: -8, resistenzaH2O: +18, resistenzaMecc: +15 },
    borace:       { trasparenza: -5, resistenzaH2O: +22, resistenzaMecc: +18, flessibilita: -10 },
    urea:         { flessibilita: +15, resistenzaH2O: -15 },
    lattato_calcio:{ trasparenza: -5, resistenzaH2O: +28, resistenzaMecc: +18 },
    kcl:          { trasparenza: -5, resistenzaH2O: +15, resistenzaMecc: +12 },
    te_nero_forte:{ trasparenza: -15, resistenzaH2O: +18, resistenzaMecc: +15 },
    carbone_vegetale:{ trasparenza: -60, resistenzaMecc: +5 },
    lecitina:     { trasparenza: -5 },
    // Cariche specifiche
    fondi_caffe:  { trasparenza: -45, flessibilita: -12, resistenzaH2O: +5, resistenzaMecc: +12 },
    cellulosa_carta:{ trasparenza: -35, resistenzaMecc: +18, flessibilita: -8 },
    caolino:      { trasparenza: -40, resistenzaMecc: +22, resistenzaH2O: +8 },
    segatura:     { trasparenza: -50, resistenzaMecc: +10, flessibilita: -15 },
    gusci_uovo:   { trasparenza: -30, resistenzaMecc: +15, resistenzaH2O: +5 },
    grafite:      { trasparenza: -50, resistenzaMecc: +8 },
    carbonato_calcio:{ trasparenza: -25, resistenzaMecc: +15, resistenzaH2O: +5 },
    // Lipidi specifici
    cera_carnauba:{ resistenzaH2O: +30, trasparenza: -15, flessibilita: -8 },
    cera_api:     { resistenzaH2O: +25, trasparenza: -10, flessibilita: +5 },
    gommalacca:   { resistenzaH2O: +28, trasparenza: -5, resistenzaMecc: +12 },
    colofonia:    { resistenzaH2O: +20, trasparenza: -12, resistenzaMecc: +8 },
    olio_tung:    { resistenzaH2O: +22, trasparenza: -8 },
    olio_oliva:   { resistenzaH2O: +10, trasparenza: -5, flessibilita: +8 },
    acido_stearico:{ resistenzaH2O: +20, trasparenza: -12 },
  };

  if (overrides[id]) return overrides[id];

  // Heuristiche per categorie senza dati specifici
  if (cat === 'carica' && Object.keys(delta).length === 0) {
    delta.trasparenza = -35;
    delta.resistenzaMecc = +12;
    delta.flessibilita = -10;
  }
  if (cat === 'colorante' && Object.keys(delta).length === 0) {
    delta.trasparenza = -20;
  }
  if (cat === 'lipide' && Object.keys(delta).length === 0) {
    delta.resistenzaH2O = +15;
    delta.trasparenza = -10;
  }

  return delta;
}

// ══════════════════════════════════════
//  FUNZIONE PRINCIPALE: buildBioGameData()
// ══════════════════════════════════════
function buildBioGameData() {
  const ING = {};
  const FAM_CANDIDATI = {
    matrice: [],
    plastificante: [],
    reticolante: [],
    lipide: [],
    carica: [],
    colorante: [],
    additivo: [],
    libero: []   // sarà riempito alla fine
  };

  const famCounters = {}; // per colori sfumatura

  for (const [id, ing] of Object.entries(INGREDIENTI_DATA.ingredienti)) {
    // Salta esclusi
    if (ESCLUDI.has(id)) continue;

    const fam = ing.famiglia;
    const cat = FAM_TO_CAT[fam];
    if (!cat) continue; // famiglia sconosciuta

    // Colore sfumatura
    if (!famCounters[fam]) famCounters[fam] = 0;
    const sfum = SFUMATURE[fam] || ['#888'];
    const colore = sfum[famCounters[fam] % sfum.length];
    famCounters[fam]++;

    // Nome breve
    const nome = NOMI_BREVI[id] || ing.nome.replace(/\s*\(.*?\)\s*/g, '').trim();

    // Range grammi → g effettivi (DB usa %, base 100ml acqua)
    const gMin = ing.parametri.range_percent_min;
    const gMax = ing.parametri.range_percent_max;

    // Props base (solo matrici) o delta (altri)
    const isMatrice = cat === 'matrice';
    const props = isMatrice ? calcPropsBase(id, ing) : {};
    const delta = isMatrice ? {} : calcDelta(id, ing, cat);

    // Effetti
    const effetti = deriveEffetti(ing, cat);

    // Perché
    const perche = buildPerche(id, ing);

    // nota_slider
    const nota_slider = buildNotaSlider(id, ing, cat);

    // Costruisci oggetto ING
    ING[id] = {
      nome, cat, fam: cat, gMin, gMax, colore,
      props, delta, effetti, perche, nota_slider,
      // Metadata dal DB (utili per display ma non per calcoli)
      famiglia_db: fam,
      vegano: ing.vegano,
      food_safe: ing.food_safe
    };

    // Aggiungi a FAM_CANDIDATI
    if (FAM_CANDIDATI[cat]) {
      FAM_CANDIDATI[cat].push(id);
    }
  }

  // Slot libero: tutti gli ingredienti
  FAM_CANDIDATI.libero = Object.keys(ING);

  // ── IMPLICAZIONI: dal DB reale ──
  const IMPL = {};
  for (const [matId, impl] of Object.entries(IMPLICAZIONI_MATRICE)) {
    if (!ING[matId]) continue; // matrice non nel BioGame (es. scoby, micelio)

    const sblocca = (impl.sblocca || []).map(f => FAM_TO_CAT[f] || f).filter(Boolean);
    const obbliga = impl.obbliga || [];
    const penalty_se_manca = [];

    // Se ha obbliga, la famiglia del primo obbligatorio è penalty
    if (obbliga.length > 0) {
      const obbFam = ING[obbliga[0]]?.cat;
      if (obbFam) penalty_se_manca.push(obbFam);
    }
    // Amido: plastificante quasi obbligatorio
    if (/amido/.test(matId)) {
      if (!obbliga.includes('plastificante')) {
        penalty_se_manca.push('plastificante');
      }
    }

    IMPL[matId] = {
      sblocca: [...new Set(sblocca)],
      obbliga: obbliga.filter(id => ING[id]), // solo IDs presenti nel BioGame
      suggerisce: impl.suggerisce || '',
      penalty_se_manca,
      forma: impl.forma || '',
      reticolanti_compatibili: (impl.reticolanti_compatibili || []).filter(id => ING[id])
    };
  }

  return { ING, FAM_CANDIDATI, IMPLICAZIONI: IMPL };
}

// ── ESPORTA GLOBALMENTE ──
window.buildBioGameData = buildBioGameData;

// Log a console per debug
console.log('[biogame-adapter] Adapter caricato. Chiamare buildBioGameData() dopo il DB.');

})();
