/* ============================================================
   BioLab v22 — TUTOR v4.1
   Albero di scelte con feedback: ogni scelta apre nuovi scenari.
   Lo studente vede conseguenze, costruisce la ricetta step by step
   con sotto-selezione ingrediente.
   Colture: protocolli ricchi per SCOBY e micelio con fasi
   esplicative (perché chimico/biologico), avvisi critici,
   substrati specifici per micelio.
   ============================================================ */

(function() {
'use strict';

// ============================================================
// CONOSCENZA: scenari per matrice
// ============================================================
// Ogni matrice ha scenari sequenziali.
// Scenario single (multi:false): radio, 1 scelta. Gate per il prossimo.
// Scenario multi (multi:true): checkbox categorie cumulabili.
//   Ogni categoria espande un picker ingrediente specifico.
// famFilter: stringa o array di famiglie DB da cercare nel carrello.
// allowSkip: testo bottone "nessuno".
// obbligatorio: se true, non si può saltare.
// condizioneCarrello: function(cart) → boolean, scenario visibile solo se true.

// Famiglie complementari per ibridazione seconda matrice
var FAMIGLIE_COMPLEMENTARI = {
    PROTEINA: ['POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE'],
    POLISACCARIDE_NEUTRO: ['PROTEINA','POLISACCARIDE_ANIONICO'],
    POLISACCARIDE_ANIONICO: ['PROTEINA','POLISACCARIDE_NEUTRO'],
    POLICATIONE: ['PROTEINA','POLISACCARIDE_NEUTRO']
};

function makeMatrice2(matriceId, skipLabel) {
    var fam = null;
    // Will be resolved at render time via getIngFam, but we need the
    // family filter now. Use a lookup for known IDs.
    var famMap = {
        gelatina:'PROTEINA', caseina:'PROTEINA', albumina:'PROTEINA',
        cheratina:'PROTEINA', zeina:'PROTEINA',
        agar:'POLISACCARIDE_NEUTRO', amido_mais:'POLISACCARIDE_NEUTRO',
        amido_patata:'POLISACCARIDE_NEUTRO', amido_tapioca:'POLISACCARIDE_NEUTRO',
        alginato:'POLISACCARIDE_ANIONICO', carragenina:'POLISACCARIDE_ANIONICO',
        pectina:'POLISACCARIDE_ANIONICO',
        chitosano:'POLICATIONE'
    };
    fam = famMap[matriceId];
    var compl = FAMIGLIE_COMPLEMENTARI[fam] || [];
    if (compl.length === 0) return null;
    return {
        id: 'matrice2', q: 'Vuoi ibridare con una seconda matrice?',
        multi: false, famFilter: compl, ruolo: 'matrice',
        allowSkip: skipLabel || 'No \u2014 processo pi\u00f9 semplice',
        condizioneCarrello: function(ids) {
            return ids.some(function(id) {
                var f = getIngFam(id);
                return f && compl.indexOf(f) >= 0;
            });
        }
    };
}

var SCENARIOS = {
    gelatina: {
        intro: 'La gelatina forma film trasparenti e gel elastici. Termoreversibile: si rifonde a 30\u00b0C. Base versatile per molti materiali.',
        scenari: [
            { id: 'plast', q: 'Il film sar\u00e0 rigido e fragile. Vuoi renderlo flessibile?',
              multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante',
              allowSkip: 'Nessuno \u2014 film rigido tipo vetro' },
            { id: 'matrice2', q: 'Vuoi ibridare con una seconda matrice?',
              multi: false, famFilter: ['POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO'],
              ruolo: 'matrice', allowSkip: 'Solo gelatina \u2014 processo pi\u00f9 semplice',
              condizioneCarrello: function(ids) {
                  return ids.some(function(id) { var f = getIngFam(id); return f === 'POLISACCARIDE_NEUTRO' || f === 'POLISACCARIDE_ANIONICO'; });
              }
            },
            { id: 'migliora', q: 'Come vuoi caratterizzare il materiale? Puoi combinare pi\u00f9 scelte.',
              multi: true, categorie: [
                { key: 'rinforzo', label: 'Rinforzo / carica', famFilter: 'CARICA', ruolo: 'rinforzo',
                  desc: 'D\u00e0 corpo e struttura. Il materiale diventa composito tipo pelle vegetale.' },
                { key: 'coating', label: 'Coating impermeabile', famFilter: 'RESINA_LIPIDE', ruolo: 'coating',
                  desc: 'Strato di cera idrorepellente. Protegge dall\'acqua ma riduce trasparenza.' },
                { key: 'colore', label: 'Colorante naturale', famFilter: 'COLORANTE', ruolo: 'colorante',
                  desc: 'Curcuma (giallo), spirulina (verde), carbone (nero). Riduce trasparenza.' },
                { key: 'reticola', label: 'Reticolante per stabilit\u00e0', famFilter: 'SALE_RETICOLANTE', ruolo: 'reticolante',
                  desc: 'Tannini o borace rendono il film stabile in acqua. Non pi\u00f9 rifondibile.' },
            ]},
        ],
        tecnica: 'Sciogliere gelatina in acqua calda (50-60\u00b0C), aggiungere modificatori, versare su superficie liscia, asciugare 24-48h.'
    },
    caseina: {
        intro: 'La caseina precipitata con acido forma una massa modellabile. Con reticolante diventa plastica dura tipo Galalite.',
        scenari: [
            { id: 'reticola', q: 'La caseina \u00e8 friabile senza reticolante. Quale usi?',
              multi: false, famFilter: 'SALE_RETICOLANTE', ruolo: 'reticolante', obbligatorio: true },
            { id: 'migliora', q: 'Aggiunte opzionali:', multi: true, categorie: [
                { key: 'rinforzo', label: 'Carica / rinforzo', famFilter: 'CARICA', ruolo: 'rinforzo',
                  desc: 'Riempitivo, modifica texture e colore.' },
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante',
                  desc: 'Colora la massa prima della pressatura.' },
            ]},
        ],
        tecnica: 'Precipitare caseina dal latte con acido, impastare, aggiungere reticolante, pressare in stampo, stagionare.'
    },
    agar: {
        intro: 'Agar forma gel rigidi e trasparenti. Richiede ebollizione (>85\u00b0C). Vegano.',
        scenari: [
            { id: 'plast', q: 'L\'agar \u00e8 rigido e fragile. Plastificante?',
              multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante',
              allowSkip: 'Nessuno \u2014 lastra rigida, stampo' },
            { id: 'migliora', q: 'Aggiunte opzionali:', multi: true, categorie: [
                { key: 'rinforzo', label: 'Carica / rinforzo', famFilter: 'CARICA', ruolo: 'rinforzo',
                  desc: 'Per composito strutturale.' },
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante',
                  desc: 'Colora il gel. L\'agar puro \u00e8 molto trasparente.' },
                { key: 'coating', label: 'Coating', famFilter: 'RESINA_LIPIDE', ruolo: 'coating',
                  desc: 'Protezione superficiale.' },
            ]},
        ],
        tecnica: 'Portare a ebollizione con agar (1-2%), versare in stampo, gelifica a ~38\u00b0C. Per film: stendere sottile, essiccare.'
    },
    amido_mais: {
        intro: 'Amido di mais: film economico traslucido. Tendenza alla retrogradazione (diventa opaco nel tempo).',
        scenari: [
            { id: 'plast', q: 'Senza plastificante si spacca. Quale?',
              multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante', obbligatorio: true },
            { id: 'migliora', q: 'Aggiunte opzionali:', multi: true, categorie: [
                { key: 'rinforzo', label: 'Carica', famFilter: 'CARICA', ruolo: 'rinforzo', desc: 'Per composito.' },
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante', desc: 'Colore.' },
                { key: 'coating', label: 'Coating', famFilter: 'RESINA_LIPIDE', ruolo: 'coating', desc: 'Protezione acqua.' },
            ]},
        ],
        tecnica: 'Miscelare amido in acqua fredda, cuocere a 70-80\u00b0C mescolando fino a gelificazione, versare, asciugare lentamente.'
    },
    amido_patata: {
        intro: 'Amido di patata: pi\u00f9 trasparente dell\'amido di mais, film pi\u00f9 liscio. Fragile secco.',
        scenari: [
            { id: 'plast', q: 'Plastificante per evitare crepe:', multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante', obbligatorio: true },
            { id: 'migliora', q: 'Aggiunte:', multi: true, categorie: [
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante', desc: 'Colore.' },
                { key: 'coating', label: 'Coating', famFilter: 'RESINA_LIPIDE', ruolo: 'coating', desc: 'Protezione.' },
            ]},
        ],
        tecnica: 'Come amido mais. Gelifica a temperatura leggermente pi\u00f9 bassa.'
    },
    amido_tapioca: {
        intro: 'Amido di tapioca: film molto elastico. Pi\u00f9 flessibile degli altri amidi.',
        scenari: [
            { id: 'plast', q: 'Plastificante per flessibilit\u00e0 extra:', multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante', allowSkip: 'Nessuno \u2014 gi\u00e0 abbastanza flessibile' },
            { id: 'migliora', q: 'Aggiunte:', multi: true, categorie: [
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante', desc: 'Colore.' },
                { key: 'rinforzo', label: 'Carica', famFilter: 'CARICA', ruolo: 'rinforzo', desc: 'Struttura.' },
            ]},
        ],
        tecnica: 'Come amido mais.'
    },
    alginato: {
        intro: 'L\'alginato non gelifica da solo. Servono ioni calcio (CaCl\u2082 o lattato di calcio) per creare il gel ionico.',
        richiede: 'cacl2', // o qualsiasi SALE_RETICOLANTE compatibile
        scenari: [
            { id: 'forma', q: 'Che tipo di materiale vuoi ottenere?', multi: false, tipo: 'opzioni_fisse',
              opzioni_fisse: [
                { key: 'sfere', label: 'Sferificazione \u2192 capsule', desc: 'Gocce nel bagno CaCl\u2082. Sfere tipo caviale.' },
                { key: 'stampo', label: 'Gel in stampo \u2192 forme 3D', desc: 'Versa in stampo, poi bagno CaCl\u2082.' },
                { key: 'film', label: 'Film essiccato', desc: 'Stendi sottile, reticola, asciuga.' },
            ]},
            { id: 'migliora', q: 'Aggiunte opzionali. Combinabili.', multi: true, categorie: [
                { key: 'colore', label: 'Colorante (PRIMA del bagno)', famFilter: 'COLORANTE', ruolo: 'colorante',
                  desc: 'Va aggiunto all\'alginato prima della reticolazione. Dopo non penetra.' },
                { key: 'rinforzo', label: 'Carica / rinforzo', famFilter: 'CARICA', ruolo: 'rinforzo',
                  desc: 'Fondi caff\u00e8, fibre: corpo e texture. Per composito tipo cuoio.' },
                { key: 'plast', label: 'Plastificante', famFilter: 'PLASTIFICANTE', ruolo: 'plastificante',
                  desc: 'Glicerina rende il gel meno rigido dopo essiccazione.' },
                { key: 'coating', label: 'Coating', famFilter: 'RESINA_LIPIDE', ruolo: 'coating',
                  desc: 'Protezione superficiale post-reticolazione.' },
            ]},
        ],
        tecnica: 'Sciogliere alginato in acqua, aggiungere colorante/carica, versare/immergere in bagno CaCl\u2082 (0.5-2%).'
    },
    carragenina: {
        intro: 'Carragenina: gel elastico trasparente. Simile alla gelatina ma vegano. Richiede ebollizione.',
        scenari: [
            { id: 'plast', q: 'Plastificante?', multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante',
              allowSkip: 'Nessuno \u2014 gel elastico naturalmente' },
            { id: 'migliora', q: 'Aggiunte:', multi: true, categorie: [
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante', desc: 'Colore.' },
                { key: 'coating', label: 'Coating', famFilter: 'RESINA_LIPIDE', ruolo: 'coating', desc: 'Protezione.' },
            ]},
        ],
        tecnica: 'Portare a ebollizione, versare, gelifica raffreddando. Film: stendere sottile e essiccare.'
    },
    pectina: {
        intro: 'Pectina: gelifica con acido+zucchero (marmellata) o con CaCl\u2082 (gel ionico). Vegana, food-safe.',
        scenari: [
            { id: 'plast', q: 'Plastificante?', multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante',
              allowSkip: 'Nessuno' },
            { id: 'migliora', q: 'Aggiunte:', multi: true, categorie: [
                { key: 'reticola', label: 'Reticolante (CaCl\u2082)', famFilter: 'SALE_RETICOLANTE', ruolo: 'reticolante',
                  desc: 'Gel ionico pi\u00f9 stabile.' },
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante', desc: 'Colore.' },
            ]},
        ],
        tecnica: 'Sciogliere pectina con zucchero e acido, cuocere, versare. Oppure: sciogliere e reticolare con CaCl\u2082.'
    },
    chitosano: {
        intro: 'Chitosano: film antimicrobico naturale. Richiede acido per sciogliersi (acido citrico, aceto). Non vegano.',
        scenari: [
            { id: 'plast', q: 'Plastificante? Il chitosano puro \u00e8 rigido.', multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante',
              allowSkip: 'Nessuno \u2014 film rigido antibatterico' },
            { id: 'migliora', q: 'Aggiunte:', multi: true, categorie: [
                { key: 'rinforzo', label: 'Carica', famFilter: 'CARICA', ruolo: 'rinforzo', desc: 'Rinforzo strutturale.' },
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante', desc: 'Colore.' },
                { key: 'reticola', label: 'Reticolante', famFilter: 'SALE_RETICOLANTE', ruolo: 'reticolante', desc: 'Stabilit\u00e0 extra.' },
            ]},
        ],
        tecnica: 'Sciogliere in soluzione acida (1-2% acido citrico), versare su superficie liscia, asciugare, neutralizzare con NaOH se necessario.'
    },
    zeina: {
        intro: 'Zeina: proteina del mais. Film idrofobo giallastro. Si scioglie solo in alcool etilico (70-80%), non in acqua. Vegana.',
        scenari: [
            { id: 'plast', q: 'Plastificante? La zeina pura \u00e8 fragile.',
              multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante',
              allowSkip: 'Nessuno \u2014 coating rigido' },
            { id: 'migliora', q: 'Aggiunte:', multi: true, categorie: [
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante',
                  desc: 'Colore. La zeina \u00e8 gi\u00e0 gialla naturalmente.' },
                { key: 'coating', label: 'Coating aggiuntivo', famFilter: 'RESINA_LIPIDE', ruolo: 'coating',
                  desc: 'Doppia barriera: zeina + cera.' },
            ]},
        ],
        tecnica: 'Sciogliere zeina in alcool etilico 70-80%, aggiungere plastificante, versare, far evaporare alcool in ambiente ventilato. Il film si forma per evaporazione solvente, non per gelificazione.'
    },
    cheratina: {
        intro: 'Cheratina: proteina strutturale da lana/capelli/piume. Film resistenti e idrofobi. Processo complesso.',
        scenari: [
            { id: 'plast', q: 'Plastificante?',
              multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante',
              allowSkip: 'Nessuno \u2014 film rigido' },
            { id: 'migliora', q: 'Aggiunte:', multi: true, categorie: [
                { key: 'rinforzo', label: 'Carica', famFilter: 'CARICA', ruolo: 'rinforzo',
                  desc: 'Rinforzo strutturale.' },
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante', desc: 'Colore.' },
            ]},
        ],
        tecnica: 'Sciogliere cheratina in soluzione basica o con urea, versare, asciugare. Processo richiede attenzione alla denaturazione.'
    },
    albumina: {
        intro: 'Albumina (da uovo o siero): coagula irreversibilmente con il calore (>60\u00b0C). Film rigidi, schiume stabili. Food-safe.',
        scenari: [
            { id: 'plast', q: 'Plastificante? L\'albumina coagulata \u00e8 rigida.',
              multi: false, famFilter: 'PLASTIFICANTE', ruolo: 'plastificante',
              allowSkip: 'Nessuno \u2014 film/schiuma rigida' },
            { id: 'migliora', q: 'Aggiunte:', multi: true, categorie: [
                { key: 'rinforzo', label: 'Carica / rinforzo', famFilter: 'CARICA', ruolo: 'rinforzo',
                  desc: 'Fibre o polveri per composito.' },
                { key: 'colore', label: 'Colorante', famFilter: 'COLORANTE', ruolo: 'colorante', desc: 'Colore.' },
                { key: 'reticola', label: 'Reticolante', famFilter: 'SALE_RETICOLANTE', ruolo: 'reticolante',
                  desc: 'Stabilizza la schiuma prima della coagulazione.' },
                { key: 'coating', label: 'Coating', famFilter: 'RESINA_LIPIDE', ruolo: 'coating', desc: 'Protezione.' },
            ]},
        ],
        tecnica: 'Film: sciogliere in acqua, versare, coagulare a 60-70\u00b0C. Schiuma: sbattere a neve, stabilizzare, cuocere. Irreversibile: non si rifonde.'
    },
    // ---- COLTURE ----
    scoby: {
        intro: 'La cellulosa batterica (SCOBY) \u00e8 un materiale che si auto-genera: una colonia di batteri e lieviti produce una pellicola di nanofibbre di cellulosa pura. Non si "mescola e versa" \u2014 si coltiva.',
        isColtura: true,
        scenari: [
            // FASE 1: Medium (fisso, spiegato)
            { id: 'medium_info', tipo: 'protocollo', titolo: 'Preparazione del medium',
              intro: 'Il medium \u00e8 fisso \u2014 non si sceglie. I batteri Acetobacter hanno bisogno di t\u00e8 zuccherato: la caffeina e i tannini del t\u00e8 stimolano la crescita, lo zucchero \u00e8 il carburante che i batteri convertono in cellulosa.',
              fasi: [
                { label: 'Ingredienti', desc: '2 litri acqua bollente + 200 g zucchero bianco + 5 bustine di t\u00e8 nero',
                  perche: 'T\u00e8 nero: fonte di azoto e polifenoli. Zucchero: i batteri lo metabolizzano in acido gluconico e cellulosa. Non usare miele (antibatterico) n\u00e9 dolcificanti artificiali (non fermentabili).' },
                { label: 'Preparazione', desc: 'Sciogli zucchero in acqua bollente, aggiungi t\u00e8, lascia in infusione 15 min. Filtra. Raffredda a 20\u201325\u00b0C.',
                  perche: 'Temperatura critica: sopra 35\u00b0C uccidi lo SCOBY. Verifica col polso o con termometro prima di inoculare.' },
                { label: 'Inoculazione', desc: 'Versa il medium nel contenitore. Aggiungi lo SCOBY madre + 100 ml di liquido starter (kombucha precedente).',
                  perche: 'Lo starter acidifica il medium a pH 2.5\u20134.5, proteggendo dai contaminanti. Senza starter il rischio di muffe sale drasticamente.' },
              ],
              avviso: 'La forma del contenitore determina la forma della pellicola. Un contenitore quadrato produce un film quadrato. Puoi "stampare" forme crescendole.'
            },

            // FASE 2: Protocollo crescita
            { id: 'crescita', tipo: 'protocollo', titolo: 'Crescita (7\u201321 giorni)',
              intro: 'La cellulosa si forma all\u2019interfaccia aria-liquido. Non si pu\u00f2 accelerare significativamente \u2014 la pazienza \u00e8 l\u2019ingrediente principale.',
              fasi: [
                { label: 'Giorno 0\u20131', desc: 'Copri il contenitore con tessuto traspirante (no coperchio ermetico). Posiziona in ambiente buio, 20\u201328\u00b0C.',
                  perche: 'I batteri sono aerobi: serve scambio d\u2019aria, ma il tessuto blocca polvere, moscerini e spore di muffa. Buio e calore stabile favoriscono la crescita.' },
                { label: 'Giorno 2\u20135', desc: 'Appare un sottile velo traslucido sulla superficie. Non toccare, non spostare, non inclinare.',
                  perche: 'Il film iniziale \u00e8 fragilissimo. Ogni movimento lo spezza e la colonia deve ricominciare. La regola: posiziona e dimentica.',
                  avviso: 'Macchie bianche = cellulosa (ok). Macchie verdi/nere/pelose = muffa (scarta tutto, sterilizza, ricomincia).' },
                { label: 'Giorno 5\u201314', desc: 'La pellicola si ispessisce progressivamente. Colore bianco-crema, consistenza gelatinosa.',
                  perche: 'Ogni strato di cellulosa si deposita sopra il precedente. Spessore finale tipico: 3\u201310 mm a seconda della durata.' },
                { label: 'Giorno 14\u201321', desc: 'Spessore \u22653 mm: pronta. Estrai con mani pulite, lava delicatamente con acqua corrente.',
                  perche: 'Il lavaggio rimuove residui acidi e zucchero non fermentato. Non strizzare \u2014 le fibre sono orientate e lo strappo \u00e8 permanente.' },
              ],
              avviso: 'Temperatura sotto 18\u00b0C: crescita quasi ferma. Sopra 32\u00b0C: i lieviti prendono il sopravvento sui batteri (pi\u00f9 aceto, meno cellulosa). Range ideale: 22\u201326\u00b0C.'
            },

            // FASE 3: Post-processing (scelte reali)
            { id: 'post', q: 'Post-crescita: la pellicola grezza \u00e8 bagnata, fragile e traslucida. Ogni trattamento cambia radicalmente il risultato finale.',
              multi: true, categorie: [
                { key: 'plast', label: 'Bagno in glicerina \u2192 flessibilit\u00e0', famFilter: 'PLASTIFICANTE', ruolo: 'post-plastificante',
                  desc: 'ESSENZIALE. Senza glicerina la pellicola essiccata diventa rigida e fragile come carta vetrata. Immersione in soluzione 2.5\u20133% glicerina in acqua, 24 ore. Poi asciugare su superficie liscia a temperatura ambiente (o 80\u00b0C in forno se disponibile).' },
                { key: 'coating', label: 'Coating idrorepellente', famFilter: 'RESINA_LIPIDE', ruolo: 'post-coating',
                  desc: 'Cera d\u2019api, cera carnauba o acido stearico. La cellulosa \u00e8 naturalmente idrofila \u2014 senza coating si ammorbidisce con l\u2019umidit\u00e0. Acido stearico: angolo di contatto da 38\u00b0 a 125\u00b0 (da idrofilo a idrorepellente).' },
                { key: 'colore', label: 'Colorazione', famFilter: 'COLORANTE', ruolo: 'post-colorante',
                  desc: 'Due opzioni: (1) durante la crescita \u2014 aggiungi spirulina o curcuma al medium, il pigmento si integra nelle fibre; (2) dopo la raccolta \u2014 tintura per immersione o a pennello. Il colore integrato \u00e8 pi\u00f9 stabile.' },
                { key: 'reticola', label: 'Concia con tannini', famFilter: 'SALE_RETICOLANTE', ruolo: 'reticolante',
                  desc: 'Immersione in soluzione di tannini (acido tannico 3\u20135% o t\u00e8 nero molto concentrato). Migliora resistenza meccanica e stabilit\u00e0 all\u2019acqua. Inscurisce il materiale. Stessa logica della concia del cuoio.' },
            ]},
        ],
        tecnica: 'Preparazione medium (t\u00e8 zuccherato) \u2192 Inoculazione SCOBY madre \u2192 Crescita 2\u20133 settimane a 22\u201326\u00b0C \u2192 Raccolta e lavaggio \u2192 Post-processing (glicerina, coating, tintura) \u2192 Essiccazione.'
    },

    micelio: {
        intro: 'Il micelio \u00e8 la rete di filamenti (ife) dei funghi. Cresce dentro e attraverso un substrato organico, digerendolo e trasformandolo in un composito unico: non \u00e8 "micelio + segatura" \u2014 \u00e8 un materiale nuovo dove le parti non si separano pi\u00f9.',
        isColtura: true,
        scenari: [
            // FASE 1: Substrato (la vera scelta del micelio)
            { id: 'substrato', q: 'Su quale substrato cresce il micelio? Il substrato diventa parte del materiale: la scelta determina peso, texture e resistenza.',
              tipo: 'substrato_micelio' },

            // FASE 2: Protocollo crescita
            { id: 'crescita', tipo: 'protocollo', titolo: 'Preparazione e crescita',
              intro: 'Il micelio \u00e8 un organismo vivo e vulnerabile. La sterilizzazione \u00e8 il passaggio pi\u00f9 critico: un substrato contaminato \u00e8 una battaglia persa in partenza.',
              fasi: [
                { label: 'Sterilizzazione substrato', desc: 'Segatura/paglia: autoclave 121\u00b0C per 1.5\u20132.5 ore, oppure pentola a pressione. Fondi caff\u00e8: gi\u00e0 pastorizzati dalla preparazione, usare entro 24 ore.',
                  perche: 'Il substrato organico \u00e8 pieno di batteri e spore di muffe competitrici. Il micelio cresce lentamente e perde la competizione se il substrato non \u00e8 sterile.',
                  avviso: 'I fondi di caff\u00e8 sono l\u2019eccezione: la preparazione del caff\u00e8 (90\u201396\u00b0C) li pastorizza. Ma degradano in 24h \u2014 usali freschi.' },
                { label: 'Inoculazione', desc: 'Mescola substrato sterile con inoculo (micelio su grano o spawn) in rapporto 1:5\u20131:10. Lavora con guanti e in ambiente pulito. Inserisci in sacchetto filtro o contenitore con fori.',
                  perche: 'Il rapporto inoculo/substrato determina la velocit\u00e0: pi\u00f9 spawn = colonizzazione pi\u00f9 rapida = meno finestre per contaminazione. Il filtro permette scambio gassoso bloccando i contaminanti.' },
                { label: 'Colonizzazione (7\u201314 gg)', desc: 'Buio, 22\u201326\u00b0C, umidit\u00e0 60\u201370%. Filamenti bianchi invadono progressivamente il substrato. Superficie completamente bianca = colonizzazione completa.',
                  perche: 'Le ife secernono enzimi che decompongono lignina e cellulosa del substrato, sostituendole con una rete proteica/polisaccaridica. Il fungo sta letteralmente digerendo e riedificando il materiale.',
                  avviso: 'Macchie verdi, nere, arancioni = contaminazione. Isola e scarta. Non aprire il sacchetto per controllare \u2014 guarda attraverso.' },
                { label: 'Forma e densit\u00e0', desc: 'Il micelio prende la forma del contenitore. Per pannelli: stampi piatti. Per oggetti 3D: stampi chiusi. Comprimere il substrato prima dell\u2019inoculazione d\u00e0 materiale pi\u00f9 denso.',
                  perche: 'La densit\u00e0 del substrato iniziale determina la densit\u00e0 finale. Segatura compressa = pannello duro. Paglia sciolta = materiale leggero isolante.' },
                { label: 'Killing (essenziale)', desc: 'Essiccare a 60\u201380\u00b0C in forno per 4\u20138 ore. Il micelio muore ma la struttura resta intatta. Perdita peso: 50\u201360%.',
                  perche: 'Senza killing il micelio continua a crescere, pu\u00f2 produrre corpi fruttiferi (funghi), e il materiale si degrada. Il calore fissa la struttura come la cottura fissa l\u2019argilla.',
                  avviso: 'Non saltare questo passaggio. Un micelio "vivo" non \u00e8 un materiale stabile \u2014 \u00e8 un organismo che continuer\u00e0 a cambiare.' },
              ],
              avviso: 'Questo processo richiede sterilt\u00e0 pi\u00f9 della cellulosa batterica. Lavorare con guanti, superficie disinfettata, e idealmente in ambiente chiuso. La contaminazione \u00e8 il nemico principale.'
            },

            // FASE 3: Post-processing
            { id: 'post', q: 'Post-essiccazione: il materiale \u00e8 inerte e stabile. I trattamenti superficiali ne migliorano le prestazioni.',
              multi: true, categorie: [
                { key: 'coating', label: 'Impermeabilizzazione', famFilter: 'RESINA_LIPIDE', ruolo: 'post-coating',
                  desc: 'Cera d\u2019api o carnauba. Il micelio essiccato \u00e8 poroso e assorbe umidit\u00e0 \u2014 il coating lo sigilla. Applicare a caldo per penetrazione migliore.' },
                { key: 'compressione', label: 'Compressione a caldo', ruolo: 'modificatore',
                  desc: 'Pressare il pezzo essiccato a caldo (120\u2013160\u00b0C) produce un pannello denso con resistenza meccanica molto superiore. La superficie diventa liscia e compatta. Richiede pressa o morsa + piastra calda.',
                  noIngrediente: true },
                { key: 'colore', label: 'Colorazione superficiale', famFilter: 'COLORANTE', ruolo: 'post-colorante',
                  desc: 'A differenza dello SCOBY, il micelio non pu\u00f2 inglobare coloranti durante la crescita (intossicano il fungo). Solo tintura superficiale post-killing.' },
            ]},
        ],
        tecnica: 'Sterilizzazione substrato \u2192 Inoculazione spawn \u2192 Colonizzazione 1\u20132 settimane (buio, 22\u201326\u00b0C) \u2192 Killing in forno 60\u201380\u00b0C \u2192 Post-processing (coating, compressione, tintura).'
    }
};

// Substrati micelio — hardcoded perché il DB non ha ancora ruolo_coltura.
// Filtra dal carrello solo questi ID (non tutti i CARICA vanno bene come substrato).
var SUBSTRATI_MICELIO = {
    segatura:        { nome: 'Segatura / farina di legno', nota: 'Il pi\u00f9 comune. Legno duro preferibile. Sterilizzare in autoclave o pentola a pressione 121\u00b0C per 1.5\u20132.5h. Mix Master\u2019s: 50% segatura + 50% soy hulls.',
                       densita: 'medio-alta', risultato: 'Pannello compatto, buona resistenza meccanica.' },
    fondi_caffe:     { nome: 'Fondi di caff\u00e8', nota: 'Gi\u00e0 pastorizzati dalla preparazione del caff\u00e8. Usare entro 24 ore (degradano rapidamente). Mix ideale: 50% caff\u00e8 + 50% paglia o segatura.',
                       densita: 'media', risultato: 'Materiale scuro, odore di caff\u00e8 persistente. Buon materiale didattico.' },
    paglia:          { nome: 'Paglia', nota: 'Tagliare a 5\u201310 cm. Pastorizzare a 71\u00b0C per 1\u20132h (non serve autoclave). Umidit\u00e0 60\u201370%. Economica e accessibile.',
                       densita: 'bassa', risultato: 'Materiale leggero, isolante. Ideale per packaging e pannelli.' },
    cellulosa_carta: { nome: 'Cartone / carta triturata', nota: 'Economico e facile da reperire. Strappare a pezzi piccoli, immergere in acqua bollente per pastorizzare. Scolare bene.',
                       densita: 'bassa', risultato: 'Leggero, facile da lavorare. Buon punto di partenza per principianti.' },
    fibre_canapa:    { nome: 'Fibra di canapa', nota: 'Standard industriale (Ecovative, Grow.bio). Ottima ritenzione umidit\u00e0. Sterilizzare come la segatura.',
                       densita: 'media', risultato: 'Composito resistente, il riferimento industriale per myco-materiali.' }
};

// Famiglie considerate "matrice"
var FAMIGLIE_MATRICE = ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'];

// Auto-inject matrice2 scenario into all non-coltura matrices that don't have it
Object.keys(SCENARIOS).forEach(function(mId) {
    var sc = SCENARIOS[mId];
    if (sc.isColtura) return;
    var hasM2 = sc.scenari.some(function(s) { return s.id === 'matrice2'; });
    if (hasM2) return;
    var m2 = makeMatrice2(mId);
    if (m2) {
        // Insert after first scenario (position 1), not at end
        sc.scenari.splice(1, 0, m2);
    }
});

// Requisiti automatici (auto-aggiunti alla ricetta)
var REQUIRES = { alginato: 'cacl2' };

// Affinità: ingredienti consigliati per matrice e ruolo
// tag: 'consigliato' | 'sconsigliato', con motivo
var AFFINITA = {
    // RETICOLANTI
    cacl2:    { conMatrice: ['alginato','pectina','carragenina'],
                nota_ok: 'CaCl\u2082 crea gel ionico con polisaccaridi anionici',
                nota_no: 'CaCl\u2082 non reticola questa matrice. Meglio tannini o borace.' },
    borace:   { conMatrice: ['gelatina','caseina','albumina','cheratina'],
                nota_ok: 'Borace reticola proteine. Attenzione: tossico, non food-safe.',
                nota_no: 'Borace funziona solo con proteine.' },
    tannini:  { conMatrice: ['gelatina','caseina','albumina','cheratina','zeina','chitosano','pectina','scoby','micelio'],
                nota_ok: 'Reticolante naturale, food-safe. Ottimo con proteine, chitosano e cellulosa.',
                nota_no: null },
    allume:   { conMatrice: ['gelatina','caseina','albumina','cheratina'],
                nota_ok: 'Reticolante classico per proteine.',
                nota_no: 'Funziona meglio con proteine.' },
    lattato_calcio: { conMatrice: ['alginato','pectina'],
                nota_ok: 'Alternativa food-safe al CaCl\u2082 per sferificazione inversa.',
                nota_no: 'Lattato di calcio funziona con polisaccaridi anionici.' },
    urea:     { conMatrice: ['cheratina'],
                nota_ok: 'Denatura e scioglie la cheratina.',
                nota_no: null },
    kcl:      { conMatrice: ['carragenina'],
                nota_ok: 'KCl gelifica la kappa-carragenina.',
                nota_no: 'KCl specifico per kappa-carragenina.' },
    // PLASTIFICANTI — generici, nessuna affinità specifica
    // CARICHE — generici
    // COLORANTI — generici
};

// Ruolo label display
var RUOLO_LABELS = {
    matrice:'Matrice', coltura:'Coltura', substrato:'Substrato',
    reticolante:'Reticolante', plastificante:'Plastificante',
    'post-plastificante':'Post \u2014 plastificante',
    rinforzo:'Carica/Rinforzo', colorante:'Colorante',
    'post-colorante':'Post \u2014 colorante', coating:'Coating',
    'post-coating':'Post \u2014 coating', modificatore:'Altro'
};
var RUOLO_ORDER = ['matrice','coltura','substrato','reticolante','plastificante','post-plastificante','rinforzo','colorante','post-colorante','coating','post-coating','modificatore'];

// ============================================================
// HELPERS
// ============================================================

function esc(s) { return !s ? '' : String(s).replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function getIng(id) {
    return (typeof INGREDIENTI_DATA !== 'undefined' && INGREDIENTI_DATA.ingredienti) ? INGREDIENTI_DATA.ingredienti[id] : null;
}
function getIngNome(id) { var i = getIng(id); return i ? i.nome : id; }
function getIngFam(id) { var i = getIng(id); return i ? i.famiglia : null; }
function getFamColor(fam) {
    if (typeof BioLab !== 'undefined' && BioLab.getCategoryColor) return BioLab.getCategoryColor(fam);
    var c = { PROTEINA:'#c0392b', POLISACCARIDE_NEUTRO:'#27ae60', POLISACCARIDE_ANIONICO:'#2980b9',
              POLICATIONE:'#8e44ad', PLASTIFICANTE:'#f39c12', SALE_RETICOLANTE:'#e74c3c',
              LIPIDE:'#d4a017', CARICA:'#795548', COLORANTE:'#9b59b6', COLTURA:'#00897B', ADDITIVO:'#607d8b' };
    return c[fam] || '#999';
}

// Compatibility check using DB rules
function areCompatible(id1, id2) {
    if (!id1 || !id2 || id1 === id2) return true;
    // Check eccezioni_specifiche
    if (typeof INGREDIENTI_DATA !== 'undefined' && INGREDIENTI_DATA.eccezioni_specifiche) {
        var found = INGREDIENTI_DATA.eccezioni_specifiche.filter(function(e) {
            return (e.coppia[0] === id1 && e.coppia[1] === id2) || (e.coppia[0] === id2 && e.coppia[1] === id1);
        });
        for (var i = 0; i < found.length; i++) {
            if (found[i].tipo === 'INCOMPATIBILITA' || found[i].tipo === 'ERRORE_COMUNE' || found[i].tipo === 'INCOMPATIBILITA_FASE') {
                return false;
            }
        }
    }
    // Check regole_compatibilita_famiglie
    var f1 = getIngFam(id1), f2 = getIngFam(id2);
    if (f1 && f2 && typeof INGREDIENTI_DATA !== 'undefined' && INGREDIENTI_DATA.regole_compatibilita_famiglie) {
        var rule = INGREDIENTI_DATA.regole_compatibilita_famiglie[f1] && INGREDIENTI_DATA.regole_compatibilita_famiglie[f1][f2];
        if (rule && rule.liv === 'incompatibile') return false;
    }
    return true;
}

function getAffinita(ingId, matriceId) {
    var aff = AFFINITA[ingId];
    if (!aff) return null; // no opinion
    if (aff.conMatrice && aff.conMatrice.indexOf(matriceId) >= 0) return 'consigliato';
    if (aff.nota_no) return 'sconsigliato';
    return null;
}

function getAffinitaNota(ingId, matriceId) {
    var aff = AFFINITA[ingId];
    if (!aff) return null;
    if (aff.conMatrice && aff.conMatrice.indexOf(matriceId) >= 0) return aff.nota_ok;
    return aff.nota_no || null;
}

function getIncompatReason(id1, id2) {
    if (typeof INGREDIENTI_DATA !== 'undefined' && INGREDIENTI_DATA.eccezioni_specifiche) {
        var found = INGREDIENTI_DATA.eccezioni_specifiche.filter(function(e) {
            return (e.coppia[0] === id1 && e.coppia[1] === id2) || (e.coppia[0] === id2 && e.coppia[1] === id1);
        });
        if (found.length > 0) return found[0].descrizione || found[0].tipo;
    }
    return 'Non compatibile';
}

// ============================================================
// STATE
// ============================================================

// Inject ibridazione CSS if not already present
(function injectIbridCSS() {
    if (document.getElementById('tutor-ibr-css')) return;
    var style = document.createElement('style');
    style.id = 'tutor-ibr-css';
    style.textContent = [
        /* intro text */
        '.tutor-ibr-grid-intro { font-size: 0.78rem; color: #888; margin-bottom: 0.5rem; }',
        /* table wrapper: horizontal scroll on small screens */
        '.tutor-ibr-table-wrap { overflow-x: auto; margin: 0.4rem 0; -webkit-overflow-scrolling: touch; }',
        /* table */
        '.tutor-ibr-table { border-collapse: separate; border-spacing: 3px; width: 100%; min-width: 600px; }',
        /* header cells */
        '.tutor-ibr-th-corner { font-size: 0.75rem; font-weight: 600; color: #555; text-align: left; padding: 0.3rem 0.5rem; background: #f5f5f5; border-radius: 4px; white-space: nowrap; }',
        '.tutor-ibr-th { font-size: 0.68rem; font-weight: 500; color: #666; text-align: center; padding: 0.3rem 0.3rem; background: #fafafa; border-radius: 4px; white-space: nowrap; vertical-align: bottom; }',
        '.tutor-ibr-th-incart { background: #e8f5e9; font-weight: 600; color: #2e7d32; }',
        '.tutor-ibr-th .tutor-ing-dot { display: inline-block; margin-right: 2px; }',
        /* row header */
        '.tutor-ibr-td-row { font-size: 0.72rem; font-weight: 600; color: #555; padding: 0.3rem 0.5rem; background: #f5f5f5; border-radius: 4px; white-space: nowrap; }',
        /* data cells */
        '.tutor-ibr-td { padding: 0.4rem 0.3rem; border-radius: 6px; cursor: pointer; text-align: center; vertical-align: top; min-width: 90px; max-width: 120px; border: 2px solid transparent; transition: border-color 0.15s, background 0.15s; }',
        '.tutor-ibr-td:hover { border-color: #90caf9; }',
        '.tutor-ibr-td-sel { border-color: #1976d2 !important; background: #e3f2fd !important; }',
        '.tutor-ibr-td-incart { border-color: #a5d6a7; }',
        '.tutor-ibr-td-incompat { background: #fce4ec; cursor: pointer; }',
        '.tutor-ibr-td-raro { background: #fff8e1; }',
        '.tutor-ibr-td-empty { background: #f5f5f5; cursor: default; }',
        '.tutor-ibr-td-samefam { background: #f0f0f0; }',
        /* cell content */
        '.tutor-ibr-td-label { font-size: 0.72rem; font-weight: 500; color: #1a56a0; line-height: 1.25; margin-bottom: 2px; }',
        '.tutor-ibr-td-label.tutor-ibr-td-dim { color: #bbb; font-weight: 400; }',
        '.tutor-ibr-td-label.tutor-ibr-td-x { color: #c62828; font-size: 1rem; }',
        '.tutor-ibr-td-sub { font-size: 0.6rem; color: #999; line-height: 1.2; }',
        '.tutor-ibr-td-check { color: #1976d2; font-weight: 700; font-size: 0.85rem; }',
        '.tutor-ibr-td-tag-ok { font-size: 0.58rem; color: #2e7d32; background: #e8f5e9; padding: 0 3px; border-radius: 2px; display: inline-block; margin-top: 1px; }',
        '.tutor-ibr-td-tag-warn { font-size: 0.58rem; color: #e65100; background: #fff8e1; padding: 0 3px; border-radius: 2px; display: inline-block; margin-top: 1px; }',
        '.tutor-ibr-td-raro-tag { font-size: 0.55rem; color: #f57f17; font-style: italic; }',
        '.tutor-ibr-td-family-tag { font-size: 0.55rem; color: #999; font-style: italic; }',
        /* skip row */
        '.tutor-ibr-skip { padding: 0.5rem 0.8rem; border: 1px dashed #ccc; border-radius: 6px; text-align: center; color: #999; font-size: 0.8rem; cursor: pointer; margin-top: 0.5rem; }',
        '.tutor-ibr-skip:hover { border-color: #aaa; color: #666; }',
        '.tutor-ibr-skip-sel { border-color: #1976d2; background: #e3f2fd; color: #1976d2; }',
        /* detail panel */
        '.tutor-ibr-detail { background: #f0f7ff; border: 1px solid #b3d4fc; border-radius: 8px; padding: 0.9rem 1rem; margin: 0.6rem 0 0.2rem; animation: tutor-ibr-fadein 0.2s ease; }',
        '@keyframes tutor-ibr-fadein { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:translateY(0); } }',
        '.tutor-ibr-detail-title { font-weight: 700; font-size: 0.9rem; color: #1a56a0; margin-bottom: 0.5rem; }',
        '.tutor-ibr-detail-nocart { font-weight: 400; font-size: 0.78rem; color: #e65100; }',
        '.tutor-ibr-detail-row { font-size: 0.82rem; color: #333; line-height: 1.5; margin-bottom: 0.4rem; }',
        '.tutor-ibr-detail-label { font-weight: 600; color: #555; }',
        '.tutor-ibr-detail-processo { background: #fff8e1; border-left: 3px solid #ffb74d; padding: 0.45rem 0.7rem; border-radius: 4px; }',
        '.tutor-ibr-detail-incompat { background: #fce4ec; border-left: 3px solid #ef5350; padding: 0.45rem 0.7rem; border-radius: 4px; color: #b71c1c; }',
        '.tutor-ibr-detail-chimica { background: #e8f5e9; border-left: 3px solid #66bb6a; padding: 0.45rem 0.7rem; border-radius: 4px; font-size: 0.78rem; }',
        '.tutor-ibr-detail-esempio { font-size: 0.75rem; color: #888; font-style: italic; }',
        '.tutor-ibr-detail-add { margin-top: 0.6rem; }',
        '.tutor-ibr-add-btn { padding: 0.4rem 0.8rem; background: #4caf50; color: #fff; border: none; border-radius: 5px; font-size: 0.8rem; font-weight: 500; cursor: pointer; }',
        '.tutor-ibr-add-btn:hover { background: #43a047; }',
        /* ===== RUOLO GRID (affinità per ruolo) ===== */
        '.tutor-ruolo-grid-wrap { margin: 0.6rem 0 0.2rem; border-top: 1px solid #e8e8e8; padding-top: 0.5rem; }',
        '.tutor-ruolo-grid-label { font-size: 0.72rem; color: #888; margin-bottom: 0.4rem; font-style: italic; }',
        '.tutor-ruolo-grid-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 4px; }',
        '.tutor-ruolo-grid { display: inline-flex; gap: 5px; min-width: min-content; }',
        '.tutor-rg-cell { min-width: 100px; max-width: 130px; padding: 0.4rem 0.5rem; border-radius: 6px; border: 2px solid #e0e0e0; text-align: center; vertical-align: top; transition: border-color 0.15s, background 0.15s; flex-shrink: 0; }',
        '.tutor-rg-cell[onclick] { cursor: pointer; }',
        '.tutor-rg-cell[onclick]:hover { border-color: #90caf9; }',
        '.tutor-rg-picked { border-color: #1976d2 !important; background: #e3f2fd !important; }',
        '.tutor-rg-previewed { border-color: #ff9800 !important; background: #fff3e0 !important; opacity: 1 !important; }',
        '.tutor-rg-incart { border-style: solid; }',
        '.tutor-rg-cell:not(.tutor-rg-incart) { border-style: dashed; opacity: 0.7; }',
        '.tutor-rg-cell:not(.tutor-rg-incart):not(.tutor-rg-non_funziona):not(.tutor-rg-errore_comune):hover { opacity: 1; }',
        /* tag-based colors */
        '.tutor-rg-consigliato { background: #f1f8e9; border-color: #aed581; }',
        '.tutor-rg-funziona { background: #fafafa; }',
        '.tutor-rg-debole { background: #fff8e1; border-color: #ffe082; }',
        '.tutor-rg-non_funziona { background: #fce4ec; border-color: #ef9a9a; opacity: 0.6; cursor: default !important; }',
        '.tutor-rg-errore_comune { background: #ffebee; border-color: #ef5350; }',
        '.tutor-rg-attenzione { background: #fff3e0; border-color: #ffb74d; }',
        '.tutor-rg-neutro { background: #f5f5f5; }',
        /* cell content */
        '.tutor-rg-head { display: flex; align-items: center; gap: 3px; justify-content: center; margin-bottom: 2px; }',
        '.tutor-rg-nome { font-size: 0.72rem; font-weight: 600; color: #333; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }',
        '.tutor-rg-sintesi { font-size: 0.62rem; line-height: 1.25; margin-top: 1px; }',
        '.tutor-rg-sintesi-consigliato { color: #33691e; }',
        '.tutor-rg-sintesi-funziona { color: #555; }',
        '.tutor-rg-sintesi-debole { color: #e65100; }',
        '.tutor-rg-sintesi-non_funziona { color: #c62828; text-decoration: line-through; }',
        '.tutor-rg-sintesi-errore_comune { color: #b71c1c; font-weight: 600; }',
        '.tutor-rg-sintesi-attenzione { color: #e65100; }',
        '.tutor-rg-sintesi-neutro { color: #999; }',
        '.tutor-rg-nocart { font-size: 0.55rem; color: #bbb; font-style: italic; }',
        '.tutor-rg-detail-nocart { font-weight: 400; font-size: 0.75rem; color: #e65100; }',
        '.tutor-rg-detail-add { margin-top: 0.4rem; }',
        '.tutor-q-subtitle { font-size: 0.78rem; color: #1a56a0; font-weight: 500; margin: -0.2rem 0 0.4rem 0; padding-left: 0.2rem; }',
        /* detail panel */
        '.tutor-rg-detail { background: #f0f7ff; border: 1px solid #b3d4fc; border-radius: 8px; padding: 0.7rem 0.8rem; margin-top: 0.5rem; animation: tutor-ibr-fadein 0.2s ease; }',
        '.tutor-rg-detail-title { font-weight: 600; font-size: 0.82rem; color: #1a56a0; margin-bottom: 0.35rem; }',
        '.tutor-rg-detail-nota { font-size: 0.78rem; color: #333; line-height: 1.5; margin-bottom: 0.3rem; }',
        '.tutor-rg-detail-proc { font-size: 0.78rem; color: #333; background: #fff8e1; border-left: 3px solid #ffb74d; padding: 0.3rem 0.6rem; border-radius: 4px; margin-bottom: 0.3rem; }',
        '.tutor-rg-detail-chimica { font-size: 0.75rem; color: #2e7d32; background: #e8f5e9; border-left: 3px solid #66bb6a; padding: 0.3rem 0.6rem; border-radius: 4px; }'
    ].join('\n');
    document.head.appendChild(style);
})();

var stato = {
    fase: 'panoramica', // 'panoramica' | 'esplorazione'
    matriceId: null,
    scelte: {}, // scenarioId → string (single) | object { catKey: ingId|null|'_action' } (multi)
    ruoloGridPreview: null // { scenarioId, catKey, ingId } — for previewing non-cart ingredients
};

// ============================================================
// ANALISI CARRELLO
// ============================================================

function analizzaCarrello() {
    var cart = BioLab.cart || [];
    var a = { ids: [], perFamiglia: {}, famiglie: new Set() };
    cart.forEach(function(item) {
        var id = item.id || item;
        var fam = item.famiglia || getIngFam(id);
        if (!fam) return;
        a.ids.push(id);
        a.famiglie.add(fam);
        if (!a.perFamiglia[fam]) a.perFamiglia[fam] = [];
        a.perFamiglia[fam].push(id);
    });
    return a;
}

// Get available ingredients for a family filter, compatible with current recipe
function getAvailable(famFilter, analisi) {
    var fams = Array.isArray(famFilter) ? famFilter : [famFilter];
    return analisi.ids.filter(function(id) {
        var f = getIngFam(id);
        if (!fams.includes(f)) return false;
        if (id === stato.matriceId) return false;
        // Check compat with matrix
        if (!areCompatible(id, stato.matriceId)) return false;
        // Check compat with all current choices
        var ok = true;
        Object.keys(stato.scelte).forEach(function(sId) {
            if (!ok) return;
            var v = stato.scelte[sId];
            if (typeof v === 'string' && v !== 'skip') {
                if (!areCompatible(id, v)) ok = false;
            } else if (v && typeof v === 'object') {
                Object.values(v).forEach(function(ingId) {
                    if (typeof ingId === 'string' && ingId !== '_action' && ingId !== 'skip') {
                        if (!areCompatible(id, ingId)) ok = false;
                    }
                });
            }
        });
        return ok;
    });
}

// ============================================================
// BUILD RECIPE from state
// ============================================================

function buildRicetta(analisi) {
    if (!stato.matriceId) return [];
    var items = [];
    var added = {};
    function add(id, ruolo) {
        if (added[id]) return;
        added[id] = true;
        items.push({ id: id, nome: getIngNome(id), fam: getIngFam(id), ruolo: ruolo });
    }
    var scDef = SCENARIOS[stato.matriceId];
    var isColtura = scDef && scDef.isColtura;
    add(stato.matriceId, isColtura ? 'coltura' : 'matrice');
    // Auto-required
    if (REQUIRES[stato.matriceId]) {
        var reqId = REQUIRES[stato.matriceId];
        // Find compatible reticolante in cart
        if (analisi.ids.indexOf(reqId) >= 0) add(reqId, 'reticolante');
        else {
            // Look for any compatible SALE_RETICOLANTE
            var altRet = getAvailable('SALE_RETICOLANTE', analisi);
            if (altRet.length > 0) add(altRet[0], 'reticolante');
        }
    }
    // Choices
    var scenari = scDef ? scDef.scenari : [];
    scenari.forEach(function(s) {
        var v = stato.scelte[s.id];
        if (!v || v === 'skip') return;
        // substrato_micelio: value is an ingredient id → role substrato
        if (s.tipo === 'substrato_micelio' && typeof v === 'string') {
            add(v, 'substrato');
            return;
        }
        if (typeof v === 'string') {
            add(v, s.ruolo || 'modificatore');
        } else if (typeof v === 'object') {
            Object.keys(v).forEach(function(catKey) {
                var ingId = v[catKey];
                if (ingId === undefined || ingId === '_action') return;
                var cat = (s.categorie || []).filter(function(c) { return c.key === catKey; })[0];
                // noIngrediente categories (e.g. compressione) don't add to recipe
                if (cat && cat.noIngrediente) return;
                var finalId = ingId;
                // If category toggled on but user hasn't picked a specific
                // ingredient yet (null), do NOT auto-pick. The user must choose.
                // Only resolve auto if exactly 1 option AND not a coltura scenario
                // (colture have incompatible ingredients in same family).
                if (finalId === null && cat && cat.famFilter) {
                    var av = getAvailable(cat.famFilter, analisi);
                    if (av.length === 1) {
                        var aff = getAffinita(av[0], stato.matriceId);
                        if (aff !== 'sconsigliato') finalId = av[0];
                    }
                }
                if (typeof finalId === 'string') add(finalId, cat ? cat.ruolo : 'modificatore');
            });
        }
    });
    return items;
}

// ============================================================
// RENDER
// ============================================================

function render() {
    var el = document.getElementById('tutorContainer');
    if (!el) return;
    var analisi = analizzaCarrello();

    if (stato.fase === 'panoramica') {
        renderPanoramica(el, analisi);
    } else {
        renderEsplorazione(el, analisi);
    }
}

// ---- PANORAMICA: scegli matrice ----
function renderPanoramica(el, analisi) {
    var h = '<div class="tutor-panoramica">';
    h += '<h2 class="tutor-title">Da dove partiamo?</h2>';
    h += '<p class="tutor-subtitle">Scegli la base del tuo materiale. Ogni matrice apre possibilit\u00e0 diverse.</p>';

    // Find matrices in cart
    var matrici = analisi.ids.filter(function(id) {
        var fam = getIngFam(id);
        return FAMIGLIE_MATRICE.indexOf(fam) >= 0 && SCENARIOS[id];
    });

    if (matrici.length === 0) {
        h += '<div class="tutor-vuoto">Nessuna matrice nel carrello. Aggiungi gelatina, agar, alginato o altro dalla pagina Ingredienti.</div>';
        h += '</div>';
        el.innerHTML = h;
        return;
    }

    h += '<div class="tutor-matrici-grid">';
    matrici.forEach(function(id) {
        var ing = getIng(id);
        var sc = SCENARIOS[id];
        var fam = getIngFam(id);
        var isColtura = sc.isColtura;
        var col = getFamColor(fam);
        h += '<div class="tutor-matrice-card' + (isColtura ? ' tutor-matrice-coltura' : '') + '" onclick="BioLab.Tutor.scegliMatrice(\'' + id + '\')">';
        if (isColtura) h += '<div class="tutor-coltura-badge">Coltura \u2014 modalit\u00e0 crescita</div>';
        h += '<div class="tutor-matrice-nome">' + esc(ing ? ing.nome : id) + '</div>';
        h += '<div class="tutor-matrice-desc">' + esc(sc.intro) + '</div>';
        if (REQUIRES[id]) {
            var reqNome = getIngNome(REQUIRES[id]);
            var reqHas = analisi.ids.indexOf(REQUIRES[id]) >= 0;
            h += '<div class="tutor-matrice-req">';
            h += 'Richiede <strong>' + esc(reqNome) + '</strong> ';
            h += reqHas ? '<span class="tutor-check-ok">\u2713 nel carrello</span>' : '<span class="tutor-check-no">\u2717 manca</span>';
            h += '</div>';
        }
        h += '<div class="tutor-matrice-esplora">Esplora \u2192</div>';
        h += '</div>';
    });
    h += '</div></div>';
    el.innerHTML = h;
}

// ---- ESPLORAZIONE: scenari sequenziali ----
function renderEsplorazione(el, analisi) {
    var id = stato.matriceId;
    var sc = SCENARIOS[id];
    if (!sc) { stato.fase = 'panoramica'; render(); return; }
    var isColtura = sc.isColtura;
    var scenari = sc.scenari || [];
    var ricetta = buildRicetta(analisi);

    var h = '<div class="tutor-esplorazione">';

    // Header
    h += '<div class="tutor-expl-header">';
    h += '<span class="tutor-chip" style="border-color:' + getFamColor(getIngFam(id)) + ';color:' + getFamColor(getIngFam(id)) + '">';
    h += '<span class="tutor-chip-dot" style="background:' + getFamColor(getIngFam(id)) + '"></span>';
    h += esc(getIngNome(id)) + '</span>';
    if (REQUIRES[id]) h += '<span class="tutor-expl-req">+ ' + esc(getIngNome(REQUIRES[id])) + '</span>';
    h += '<button class="tutor-back-btn" onclick="BioLab.Tutor.tornaPanoramica()">\u2190 Cambia matrice</button>';
    h += '</div>';

    // Two-column layout: sidebar left + scenari right
    h += '<div class="tutor-two-col">';

    // LEFT SIDEBAR: ricetta (priorità) + carrello sotto
    h += '<div class="tutor-sidebar">';
    h += renderRicettaPanel(ricetta, analisi, isColtura);
    h += renderCarrelloMini(analisi);
    h += '<button class="tutor-sidebar-back" onclick="BioLab.Tutor.tornaPanoramica()">\u2190 Cambia matrice</button>';
    h += '</div>';

    // RIGHT: scenari
    h += '<div class="tutor-main">';

    // Intro
    h += '<div class="tutor-intro">' + esc(sc.intro);
    if (isColtura) h += '<br><span class="tutor-coltura-nota">Modalit\u00e0 crescita: il materiale si auto-genera nel tempo.</span>';
    h += '</div>';

    // Scenari
    var canShow = true;
    scenari.forEach(function(s, si) {
        // Gate: ALL previous single-choice scenarios must be answered
        if (!canShow) return;
        for (var pi = 0; pi < si; pi++) {
            var prev = scenari[pi];
            // Protocollo and timeline don't gate (informational)
            if (prev.tipo === 'protocollo' || prev.tipo === 'timeline') continue;
            if (prev.multi) continue;
            if (prev.tipo === 'opzioni_fisse' || prev.opzioni_fisse) {
                if (stato.scelte[prev.id] === undefined) { canShow = false; return; }
                continue;
            }
            // substrato_micelio gates (must choose)
            if (prev.tipo === 'substrato_micelio') {
                if (stato.scelte[prev.id] === undefined) { canShow = false; return; }
                continue;
            }
            // regular single
            if (prev.condizioneCarrello && !prev.condizioneCarrello(analisi.ids)) continue;
            if (stato.scelte[prev.id] === undefined) { canShow = false; return; }
        }
        // Condition
        if (s.condizioneCarrello && !s.condizioneCarrello(analisi.ids)) return;

        // PROTOCOLLO (rich phase guide)
        if (s.tipo === 'protocollo') {
            h += renderProtocollo(s);
            return;
        }
        // SUBSTRATO MICELIO (hardcoded picker)
        if (s.tipo === 'substrato_micelio') {
            h += renderSubstratoMicelio(s, analisi);
            return;
        }
        // TIMELINE (legacy)
        if (s.tipo === 'timeline') {
            h += renderTimeline(s);
            return;
        }
        // FIXED OPTIONS
        if (s.tipo === 'opzioni_fisse' || s.opzioni_fisse) {
            h += renderFixedOptions(s);
            return;
        }
        // SINGLE ingredient
        if (!s.multi && s.famFilter) {
            h += renderSingle(s, analisi);
            return;
        }
        // MULTI categories
        if (s.multi && s.categorie) {
            h += renderMulti(s, analisi);
            return;
        }
    });

    // Ready → dosaggi
    var singlesDone = scenari.filter(function(s) {
        if (s.multi || s.tipo === 'timeline' || s.tipo === 'protocollo') return false;
        if (s.condizioneCarrello && !s.condizioneCarrello(analisi.ids)) return false;
        return true;
    });
    var allDone = singlesDone.every(function(s) { return stato.scelte[s.id] !== undefined; });

    if (allDone) {
        var readyLabel = isColtura ? 'Protocollo completo' : 'Ricetta composta';
        var readyDesc = isColtura
            ? ricetta.length + ' elementi selezionati. I trattamenti post-crescita verranno caricati in <strong>Sperimenta</strong> per regolare dosaggi.'
            : ricetta.length + ' ingredienti selezionati. Passa a <strong>Sperimenta</strong> per regolare i dosaggi.';
        h += '<div class="tutor-ready">';
        h += '<div class="tutor-ready-label">' + readyLabel + '</div>';
        h += '<div class="tutor-ready-desc">' + readyDesc + '</div>';
        h += '<div class="tutor-ready-tech"><strong>Tecnica:</strong> ' + esc(sc.tecnica) + '</div>';
        h += '<div class="tutor-ready-actions">';
        h += '<button class="tutor-btn-primary" onclick="BioLab.Tutor.vaiAiDosaggi()">Vai ai dosaggi \u2192</button>';
        h += '<button class="tutor-btn-secondary" onclick="BioLab.Tutor.tornaPanoramica()">Ricomincia</button>';
        h += '</div></div>';
    }

    h += '</div>'; // close tutor-main
    h += '</div>'; // close tutor-two-col
    h += '</div>'; // close tutor-esplorazione
    el.innerHTML = h;
}

// ---- Render helpers ----

function renderTimeline(s) {
    var h = '<div class="tutor-scenario">';
    h += '<div class="tutor-q tutor-q-timeline">Timeline di crescita</div>';
    h += '<div class="tutor-timeline">';
    (s.fasi || []).forEach(function(f) {
        h += '<div class="tutor-timeline-row">';
        h += '<div class="tutor-timeline-label">' + esc(f.label) + '</div>';
        h += '<div class="tutor-timeline-desc">' + esc(f.desc) + '</div>';
        h += '</div>';
    });
    h += '</div></div>';
    return h;
}

// ---- PROTOCOLLO: guida procedurale ricca per colture ----
function renderProtocollo(s) {
    var h = '<div class="tutor-scenario tutor-protocollo">';
    h += '<div class="tutor-proto-title">' + esc(s.titolo) + '</div>';
    if (s.intro) h += '<div class="tutor-proto-intro">' + esc(s.intro) + '</div>';
    h += '<div class="tutor-proto-fasi">';
    (s.fasi || []).forEach(function(f, fi) {
        h += '<div class="tutor-proto-fase">';
        h += '<div class="tutor-proto-fase-head">';
        h += '<span class="tutor-proto-num">' + (fi + 1) + '</span>';
        h += '<span class="tutor-proto-label">' + esc(f.label) + '</span>';
        h += '</div>';
        h += '<div class="tutor-proto-desc">' + esc(f.desc) + '</div>';
        if (f.perche) {
            h += '<div class="tutor-proto-perche"><span class="tutor-proto-perche-tag">Perch\u00e9:</span> ' + esc(f.perche) + '</div>';
        }
        if (f.avviso) {
            h += '<div class="tutor-proto-avviso">' + esc(f.avviso) + '</div>';
        }
        h += '</div>';
    });
    h += '</div>';
    if (s.avviso) {
        h += '<div class="tutor-proto-banner">' + esc(s.avviso) + '</div>';
    }
    h += '</div>';
    return h;
}

// ---- SUBSTRATO MICELIO: picker hardcoded con note specifiche ----
function renderSubstratoMicelio(s, analisi) {
    var val = stato.scelte[s.id];
    // Filter: only substrati that are in cart
    var disponibili = [];
    Object.keys(SUBSTRATI_MICELIO).forEach(function(subId) {
        if (analisi.ids.indexOf(subId) >= 0) disponibili.push(subId);
    });

    var h = '<div class="tutor-scenario">';
    h += '<div class="tutor-q">' + esc(s.q) + ' <span class="tutor-badge-req">SERVE</span></div>';

    if (disponibili.length === 0) {
        // No substrate in cart — show what's needed
        h += '<div class="tutor-substrato-vuoto">';
        h += '<div class="tutor-substrato-vuoto-msg">Nessun substrato nel carrello. Il micelio ha bisogno di un substrato organico su cui crescere.</div>';
        h += '<div class="tutor-substrato-vuoto-lista"><strong>Substrati compatibili:</strong> ';
        var nomi = [];
        Object.keys(SUBSTRATI_MICELIO).forEach(function(subId) {
            var sub = SUBSTRATI_MICELIO[subId];
            nomi.push(sub.nome);
        });
        h += esc(nomi.join(' \u2022 '));
        h += '</div>';
        h += '<div class="tutor-substrato-vuoto-hint">Aggiungi almeno uno dalla pagina Ingredienti, poi torna qui.</div>';
        h += '</div>';
    } else {
        h += '<div class="tutor-substrato-grid">';
        disponibili.forEach(function(subId) {
            var sub = SUBSTRATI_MICELIO[subId];
            var sel = val === subId;
            var col = getFamColor('CARICA');
            h += '<div class="tutor-substrato-card' + (sel ? ' selected' : '') + '" onclick="BioLab.Tutor.sceltaSingle(\'' + s.id + '\',\'' + subId + '\')">';
            h += '<div class="tutor-substrato-head">';
            h += '<span class="tutor-ing-dot" style="background:' + col + '"></span>';
            h += '<span class="tutor-substrato-nome">' + esc(sub.nome) + '</span>';
            if (sel) h += '<span class="tutor-check-sm">\u2713</span>';
            h += '</div>';
            h += '<div class="tutor-substrato-nota">' + esc(sub.nota) + '</div>';
            h += '<div class="tutor-substrato-meta">';
            h += '<span class="tutor-substrato-tag">Densit\u00e0: ' + esc(sub.densita) + '</span>';
            h += '</div>';
            h += '<div class="tutor-substrato-risultato">' + esc(sub.risultato) + '</div>';
            h += '</div>';
        });
        h += '</div>';
    }
    h += '</div>';
    return h;
}

function renderFixedOptions(s) {
    var val = stato.scelte[s.id];
    var h = '<div class="tutor-scenario">';
    h += '<div class="tutor-q">' + esc(s.q) + '</div>';
    h += '<div class="tutor-fixed-grid">';
    (s.opzioni_fisse || []).forEach(function(o) {
        var sel = val === o.key;
        h += '<div class="tutor-fixed-opt' + (sel ? ' selected' : '') + '" onclick="BioLab.Tutor.sceltaSingle(\'' + s.id + '\',\'' + o.key + '\')">';
        h += '<div class="tutor-fixed-label">' + esc(o.label) + '</div>';
        h += '<div class="tutor-fixed-desc">' + esc(o.desc) + '</div>';
        if (sel) h += '<span class="tutor-check-mark">\u2713</span>';
        h += '</div>';
    });
    h += '</div></div>';
    return h;
}

function getIbridazioneInfo(matrice1Id, matrice2Id) {
    if (typeof REGOLE_CHIMICHE === 'undefined' || !REGOLE_CHIMICHE.ibridazioni_matrice) return null;
    var fam1 = getIngFam(matrice1Id), fam2 = getIngFam(matrice2Id);
    if (!fam1 || !fam2) return null;
    var found = null;
    REGOLE_CHIMICHE.ibridazioni_matrice.forEach(function(ib) {
        if (found) return;
        var c = ib.coppia;
        if ((c[0] === fam1 && c[1] === fam2) || (c[0] === fam2 && c[1] === fam1)) found = ib;
        if (c[0] === c[1] && c[0] === fam1 && fam1 === fam2) found = ib;
    });
    return found;
}

// All matrices that could appear in the grid
var GRID_MATRICI = ['gelatina','caseina','albumina','cheratina','zeina',
    'agar','amido_mais','amido_patata','amido_tapioca',
    'alginato','carragenina','pectina','chitosano'];

function getIbridazionePerIngrediente(id1, id2) {
    if (typeof REGOLE_CHIMICHE === 'undefined') return null;
    // Level 1: specific ingredient pair
    if (REGOLE_CHIMICHE.ibridazioni_ingrediente) {
        var found = null;
        REGOLE_CHIMICHE.ibridazioni_ingrediente.forEach(function(e) {
            if (found) return;
            if ((e.coppia[0]===id1 && e.coppia[1]===id2) || (e.coppia[0]===id2 && e.coppia[1]===id1)) found = e;
        });
        if (found) return found;
    }
    // Level 2: family fallback
    if (REGOLE_CHIMICHE.ibridazioni_matrice) {
        var fam1 = getIngFam(id1), fam2 = getIngFam(id2);
        if (fam1 && fam2) {
            var famEntry = null;
            REGOLE_CHIMICHE.ibridazioni_matrice.forEach(function(e) {
                if (famEntry) return;
                if ((e.coppia[0]===fam1 && e.coppia[1]===fam2) || (e.coppia[0]===fam2 && e.coppia[1]===fam1)) famEntry = e;
                if (e.coppia[0]===e.coppia[1] && e.coppia[0]===fam1 && fam1===fam2) famEntry = e;
            });
            if (famEntry) return { tipo: 'ibridazione', sintesi: famEntry.sintesi, vantaggi: famEntry.vantaggi,
                rischio: famEntry.rischio, processo: famEntry.processo, rapporto: famEntry.rapporto,
                risultato: famEntry.risultato, _fromFamily: true };
        }
    }
    return null;
}

function renderMatrice2Grid(s, analisi) {
    var val = stato.scelte[s.id];
    var matrice1 = stato.matriceId;
    var fam1 = getIngFam(matrice1);

    // Columns: all other matrices (not same as matrice1), grouped by family
    var cols = GRID_MATRICI.filter(function(id) { return id !== matrice1; });
    // Is in cart?
    function inCart(id) { return analisi.ids.indexOf(id) >= 0; }

    var h = '<div class="tutor-scenario">';
    h += '<div class="tutor-q">' + esc(s.q) + '</div>';
    h += '<div class="tutor-ibr-grid-intro">Clicca su una cella per vedere i dettagli. Le celle con bordo pieno sono nel tuo carrello.</div>';

    // === MATRIX TABLE ===
    h += '<div class="tutor-ibr-table-wrap">';
    h += '<table class="tutor-ibr-table">';

    // Header row
    h += '<thead><tr><th class="tutor-ibr-th-corner">' + esc(getIngNome(matrice1)) + ' +</th>';
    cols.forEach(function(id2) {
        var col = getFamColor(getIngFam(id2));
        var inC = inCart(id2);
        h += '<th class="tutor-ibr-th' + (inC ? ' tutor-ibr-th-incart' : '') + '">';
        h += '<span class="tutor-ing-dot" style="background:' + col + '"></span>';
        h += '<span>' + esc(getIngNome(id2)) + '</span>';
        h += '</th>';
    });
    h += '</tr></thead>';

    // Single row: matrice1 vs each column
    h += '<tbody><tr>';
    h += '<td class="tutor-ibr-td-row">' + esc(getIngNome(matrice1)) + '</td>';
    cols.forEach(function(id2) {
        var info = getIbridazionePerIngrediente(matrice1, id2);
        var sameFam = getIngFam(id2) === fam1;
        var sel = val === id2;
        var inC = inCart(id2);
        var isIncompat = info && info.tipo === 'incompatibile';
        var isRaro = info && info.tipo === 'raro';
        var isOk = info && info.tipo === 'ibridazione';
        var noInfo = !info;

        var cls = 'tutor-ibr-td';
        if (sel) cls += ' tutor-ibr-td-sel';
        if (inC) cls += ' tutor-ibr-td-incart';
        if (isIncompat) cls += ' tutor-ibr-td-incompat';
        if (isRaro) cls += ' tutor-ibr-td-raro';
        if (noInfo) cls += ' tutor-ibr-td-empty';
        if (sameFam && !info) cls += ' tutor-ibr-td-samefam';

        h += '<td class="' + cls + '" onclick="BioLab.Tutor.sceltaSingle(\'' + s.id + '\',\'' + id2 + '\')">';
        if (isIncompat) {
            h += '<div class="tutor-ibr-td-label tutor-ibr-td-x">\u2717</div>';
            h += '<div class="tutor-ibr-td-sub">' + esc(info.motivo ? info.motivo.substring(0, 30) + '...' : 'Incompatibile') + '</div>';
        } else if (isOk || isRaro) {
            if (sel) h += '<div class="tutor-ibr-td-check">\u2713</div>';
            h += '<div class="tutor-ibr-td-label">' + esc(info.sintesi || 'Possibile') + '</div>';
            if (info.vantaggi) h += '<div class="tutor-ibr-td-tag-ok">' + esc(info.vantaggi) + '</div>';
            if (info.rischio && info.rischio !== 'Nessuno, facile') h += '<div class="tutor-ibr-td-tag-warn">' + esc(info.rischio) + '</div>';
            if (isRaro) h += '<div class="tutor-ibr-td-raro-tag">raro</div>';
            if (info._fromFamily) h += '<div class="tutor-ibr-td-family-tag">nota generica</div>';
        } else if (sameFam) {
            h += '<div class="tutor-ibr-td-label tutor-ibr-td-dim">Blend ' + esc(getIngNome(id2)) + '</div>';
        } else {
            h += '<div class="tutor-ibr-td-label tutor-ibr-td-dim">?</div>';
        }
        h += '</td>';
    });
    h += '</tr></tbody></table>';
    h += '</div>'; // table-wrap

    // Skip option
    if (s.allowSkip) {
        var skipSel = val === 'skip';
        h += '<div class="tutor-ibr-skip' + (skipSel ? ' tutor-ibr-skip-sel' : '') + '" onclick="BioLab.Tutor.sceltaSingle(\'' + s.id + '\',\'skip\')">';
        h += esc(s.allowSkip);
        h += '</div>';
    }

    // === DETAIL PANEL: shown when a cell is selected ===
    if (val && val !== 'skip') {
        var selInfo = getIbridazionePerIngrediente(matrice1, val);
        if (selInfo) {
            var inC2 = inCart(val);
            h += '<div class="tutor-ibr-detail">';
            h += '<div class="tutor-ibr-detail-title">' + esc(getIngNome(matrice1)) + ' + ' + esc(getIngNome(val));
            if (!inC2) h += ' <span class="tutor-ibr-detail-nocart">\u2014 non nel carrello</span>';
            h += '</div>';

            if (selInfo.tipo === 'incompatibile') {
                h += '<div class="tutor-ibr-detail-row tutor-ibr-detail-incompat">';
                h += '<span class="tutor-ibr-detail-label">Incompatibile:</span> ' + esc(selInfo.motivo);
                h += '</div>';
                if (selInfo.alternativa) {
                    h += '<div class="tutor-ibr-detail-row">';
                    h += '<span class="tutor-ibr-detail-label">Alternativa:</span> ' + esc(selInfo.alternativa);
                    h += '</div>';
                }
            } else {
                if (selInfo.risultato) {
                    h += '<div class="tutor-ibr-detail-row"><span class="tutor-ibr-detail-label">Risultato:</span> ' + esc(selInfo.risultato) + '</div>';
                }
                h += '<div class="tutor-ibr-detail-row tutor-ibr-detail-processo"><span class="tutor-ibr-detail-label">Processo:</span> ' + esc(selInfo.processo) + '</div>';
                h += '<div class="tutor-ibr-detail-row"><span class="tutor-ibr-detail-label">Rapporto:</span> ' + esc(selInfo.rapporto) + '</div>';
                if (selInfo.nota_chimica) {
                    h += '<div class="tutor-ibr-detail-row tutor-ibr-detail-chimica"><span class="tutor-ibr-detail-label">Nota chimica:</span> ' + esc(selInfo.nota_chimica) + '</div>';
                }
                if (selInfo._fromFamily) {
                    h += '<div class="tutor-ibr-detail-row tutor-ibr-detail-esempio">Nota generica per famiglia \u2014 il processo potrebbe variare per questa coppia specifica.</div>';
                }
            }

            if (!inC2 && selInfo.tipo !== 'incompatibile') {
                h += '<div class="tutor-ibr-detail-add">';
                h += '<button class="tutor-ibr-add-btn" onclick="BioLab.Tutor.aggiungiAlCarrello(\'' + val + '\');event.stopPropagation()">Aggiungi ' + esc(getIngNome(val)) + ' al carrello</button>';
                h += '</div>';
            }
            h += '</div>';
        }
    }

    h += '</div>'; // close scenario
    return h;
}

function renderSingle(s, analisi) {
    // Matrice2 scenario → use grid UI
    if (s.id === 'matrice2') return renderMatrice2Grid(s, analisi);

    var avail = getAvailable(s.famFilter, analisi);
    var val = stato.scelte[s.id];
    var h = '<div class="tutor-scenario">';
    h += '<div class="tutor-q">' + esc(s.q);
    if (s.obbligatorio) h += ' <span class="tutor-badge-req">SERVE</span>';
    h += '</div>';
    // Dynamic subtitle based on selection
    if (val && val !== 'skip') {
        var singleAff = getAffinitaRuolo(stato.matriceId, val);
        if (singleAff && singleAff.sintesi) {
            h += '<div class="tutor-q-subtitle">' + esc(getIngNome(val)) + ': ' + esc(singleAff.sintesi) + '</div>';
        }
    }
    h += '<div class="tutor-single-grid">';
    avail.forEach(function(ingId) {
        var sel = val === ingId;
        var ing = getIng(ingId);
        var col = getFamColor(getIngFam(ingId));
        h += '<div class="tutor-ing-card' + (sel ? ' selected' : '') + '" onclick="BioLab.Tutor.sceltaSingle(\'' + s.id + '\',\'' + ingId + '\')">';
        h += '<div class="tutor-ing-head">';
        h += '<span class="tutor-ing-dot" style="background:' + col + '"></span>';
        h += '<span class="tutor-ing-nome">' + esc(getIngNome(ingId)) + '</span>';
        if (sel) h += '<span class="tutor-check-sm">\u2713</span>';
        h += '</div>';
        if (ing) h += '<div class="tutor-ing-desc">' + esc(ing.descrizione ? ing.descrizione.substring(0, 120) + (ing.descrizione.length > 120 ? '...' : '') : '') + '</div>';
        h += '</div>';
    });
    if (s.allowSkip) {
        var skipSel = val === 'skip';
        h += '<div class="tutor-ing-card tutor-skip' + (skipSel ? ' selected' : '') + '" onclick="BioLab.Tutor.sceltaSingle(\'' + s.id + '\',\'skip\')">';
        h += '<div class="tutor-skip-label">' + esc(s.allowSkip) + '</div>';
        h += '</div>';
    }
    if (avail.length === 0 && !s.allowSkip) {
        h += '<div class="tutor-no-avail">Nessun ingrediente compatibile nel carrello per questo ruolo.</div>';
    }
    h += '</div></div>';

    // RUOLO GRID: panorama completo per scenari single non-matrice2
    if (s.famFilter && s.id !== 'matrice2' && stato.matriceId) {
        var singleVal = stato.scelte[s.id];
        h += renderRuoloGrid(s.famFilter, stato.matriceId, s.id, null, singleVal && singleVal !== 'skip' ? singleVal : null, analisi);
    }

    return h;
}

// --- Griglia affinità ruolo: mostra TUTTI gli ingredienti di una famiglia rispetto alla matrice scelta ---
function getAffinitaRuolo(matriceId, ingId) {
    if (typeof REGOLE_CHIMICHE !== 'undefined' && REGOLE_CHIMICHE.affinita_ruolo) {
        var found = null;
        REGOLE_CHIMICHE.affinita_ruolo.forEach(function(e) {
            if (found) return;
            if ((e.coppia[0]===matriceId && e.coppia[1]===ingId) || (e.coppia[0]===ingId && e.coppia[1]===matriceId)) found = e;
        });
        if (found) return found;
    }
    return null;
}

function renderRuoloGrid(famFilter, matriceId, scenarioId, catKey, chosenIng, analisi) {
    var fams = Array.isArray(famFilter) ? famFilter : [famFilter];
    // All ingredients of this family in DB (not just cart)
    if (typeof INGREDIENTI_DATA === 'undefined') return '';
    var allIngs = Object.entries(INGREDIENTI_DATA.ingredienti)
        .filter(function(kv) { return fams.indexOf(kv[1].famiglia) >= 0; })
        .map(function(kv) { return kv[0]; });
    if (allIngs.length === 0 || allIngs.length > 20) return ''; // skip if too many (CARICA has 17, but still ok)

    var h = '<div class="tutor-ruolo-grid-wrap">';
    h += '<div class="tutor-ruolo-grid-label">Panorama completo con ' + esc(getIngNome(matriceId)) + ':</div>';
    h += '<div class="tutor-ruolo-grid-scroll"><div class="tutor-ruolo-grid">';

    allIngs.forEach(function(ingId) {
        var inC = analisi.ids.indexOf(ingId) >= 0;
        var compat = areCompatible(ingId, matriceId);
        var picked = chosenIng === ingId;
        var aff = getAffinitaRuolo(matriceId, ingId);
        var col = getFamColor(getIngFam(ingId));

        // Determine cell style
        var tag = 'neutro';
        var sintesi = '';
        if (aff) {
            tag = aff.tag;
            sintesi = aff.sintesi || '';
        } else if (!compat) {
            tag = 'non_funziona';
            sintesi = 'Incompatibile';
        }

        var cls = 'tutor-rg-cell';
        if (picked) cls += ' tutor-rg-picked';
        if (inC) cls += ' tutor-rg-incart';
        // Check if this cell is being previewed
        var isPreviewed = stato.ruoloGridPreview && stato.ruoloGridPreview.ingId === ingId &&
            stato.ruoloGridPreview.scenarioId === scenarioId && stato.ruoloGridPreview.catKey === (catKey||'');
        if (isPreviewed) cls += ' tutor-rg-previewed';
        cls += ' tutor-rg-' + tag;

        var clickable = inC && compat;
        var onclick = '';
        if (clickable) {
            if (catKey) {
                onclick = 'BioLab.Tutor.pickIng(\'' + scenarioId + '\',\'' + catKey + '\',\'' + ingId + '\')';
            } else {
                onclick = 'BioLab.Tutor.sceltaSingle(\'' + scenarioId + '\',\'' + ingId + '\')';
            }
        } else if (!inC && tag !== 'non_funziona' && tag !== 'errore_comune') {
            // Not in cart but viable: click to show detail + add option
            // Use a special selection mechanism via stato.ruoloGridPreview
            onclick = 'BioLab.Tutor.previewRuoloIng(\'' + scenarioId + '\',\'' + (catKey||'') + '\',\'' + ingId + '\')';
        }

        h += '<div class="' + cls + '"' + (onclick ? ' onclick="' + onclick + '"' : '') + '>';
        h += '<div class="tutor-rg-head">';
        h += '<span class="tutor-ing-dot" style="background:' + col + '"></span>';
        h += '<span class="tutor-rg-nome">' + esc(getIngNome(ingId)) + '</span>';
        if (picked) h += '<span class="tutor-check-sm">\u2713</span>';
        h += '</div>';
        if (sintesi) h += '<div class="tutor-rg-sintesi tutor-rg-sintesi-' + tag + '">' + esc(sintesi) + '</div>';
        if (!inC && tag !== 'non_funziona' && tag !== 'errore_comune') h += '<div class="tutor-rg-nocart">non nel carrello</div>';
        h += '</div>';
    });

    h += '</div></div>'; // grid + scroll

    // Determine which ingredient to show detail for: chosen (in cart) or previewed (not in cart)
    var detailIng = chosenIng;
    var isPreview = false;
    if (stato.ruoloGridPreview && stato.ruoloGridPreview.scenarioId === scenarioId &&
        stato.ruoloGridPreview.catKey === (catKey||'')) {
        detailIng = stato.ruoloGridPreview.ingId;
        isPreview = true;
    }

    // Detail panel for chosen or previewed ingredient
    if (detailIng) {
        var affDet = getAffinitaRuolo(matriceId, detailIng);
        if (affDet && affDet.nota) {
            var detInCart = analisi.ids.indexOf(detailIng) >= 0;
            h += '<div class="tutor-rg-detail">';
            h += '<div class="tutor-rg-detail-title">' + esc(getIngNome(detailIng)) + ' con ' + esc(getIngNome(matriceId));
            if (!detInCart) h += ' <span class="tutor-rg-detail-nocart">\u2014 non nel carrello</span>';
            h += '</div>';
            h += '<div class="tutor-rg-detail-nota">' + esc(affDet.nota) + '</div>';
            if (affDet.processo) h += '<div class="tutor-rg-detail-proc">' + esc(affDet.processo) + '</div>';
            if (affDet.nota_chimica) h += '<div class="tutor-rg-detail-chimica">' + esc(affDet.nota_chimica) + '</div>';
            if (!detInCart) {
                h += '<div class="tutor-rg-detail-add">';
                h += '<button class="tutor-ibr-add-btn" onclick="BioLab.Tutor.aggiungiAlCarrello(\'' + detailIng + '\');event.stopPropagation()">Aggiungi ' + esc(getIngNome(detailIng)) + ' al carrello</button>';
                h += '</div>';
            }
            h += '</div>';
        } else if (isPreview) {
            // No affinita data but ingredient clicked for preview
            var detInCart2 = analisi.ids.indexOf(detailIng) >= 0;
            h += '<div class="tutor-rg-detail">';
            h += '<div class="tutor-rg-detail-title">' + esc(getIngNome(detailIng)) + ' con ' + esc(getIngNome(matriceId)) + '</div>';
            h += '<div class="tutor-rg-detail-nota">Nessuna nota specifica per questa combinazione. Compatibilit\u00e0 basata sulla famiglia chimica.</div>';
            if (!detInCart2) {
                h += '<div class="tutor-rg-detail-add">';
                h += '<button class="tutor-ibr-add-btn" onclick="BioLab.Tutor.aggiungiAlCarrello(\'' + detailIng + '\');event.stopPropagation()">Aggiungi ' + esc(getIngNome(detailIng)) + ' al carrello</button>';
                h += '</div>';
            }
            h += '</div>';
        }
    }

    h += '</div>';
    return h;
}

function renderMulti(s, analisi) {
    var catState = (stato.scelte[s.id] && typeof stato.scelte[s.id] === 'object') ? stato.scelte[s.id] : {};
    var h = '<div class="tutor-scenario">';
    h += '<div class="tutor-q tutor-q-multi">' + esc(s.q) + ' <span class="tutor-multi-hint">selezione multipla</span></div>';

    (s.categorie || []).forEach(function(cat) {
        var isOn = catState[cat.key] !== undefined;
        var isAction = cat.noIngrediente;
        var avail = (!isAction && cat.famFilter) ? getAvailable(cat.famFilter, analisi) : [];
        var chosenIng = catState[cat.key];
        var autoIng = (!isAction && cat.famFilter && avail.length === 1) ? avail[0] : null;
        var noFam = !isAction && cat.famFilter && !analisi.famiglie.has(cat.famFilter);
        var noAvail = !isAction && !noFam && cat.famFilter && avail.length === 0;
        var disabled = !isAction && (noFam || noAvail);

        h += '<div class="tutor-cat' + (isOn ? ' tutor-cat-on' : '') + (disabled ? ' tutor-cat-disabled' : '') + (isAction ? ' tutor-cat-action' : '') + '">';

        // Header
        h += '<div class="tutor-cat-header" onclick="' + (disabled ? '' : 'BioLab.Tutor.toggleCat(\'' + s.id + '\',\'' + cat.key + '\')') + '">';
        h += '<div class="tutor-cat-check' + (isOn ? ' checked' : '') + '">' + (isOn ? '\u2713' : '') + '</div>';
        h += '<div class="tutor-cat-info">';
        h += '<div class="tutor-cat-label">' + esc(cat.label);
        if (!disabled && avail.length > 0 && !isOn) h += ' <span class="tutor-cat-count">' + avail.length + ' disponibil' + (avail.length === 1 ? 'e' : 'i') + '</span>';
        h += '</div>';
        // Dynamic desc: if ingredient is chosen and has specific affinita, show that instead
        var descText = cat.desc;
        if (chosenIng && chosenIng !== '_action') {
            var chosenAff = getAffinitaRuolo(stato.matriceId, chosenIng);
            if (chosenAff && chosenAff.sintesi) {
                descText = getIngNome(chosenIng) + ': ' + chosenAff.sintesi + (chosenAff.tag === 'attenzione' ? ' \u26a0' : chosenAff.tag === 'consigliato' ? ' \u2605' : '');
            } else {
                descText = getIngNome(chosenIng) + ' \u2014 ' + cat.desc;
            }
        }
        h += '<div class="tutor-cat-desc">' + esc(descText) + '</div>';
        if (noAvail) h += '<div class="tutor-cat-incompat">Nessun ingrediente compatibile con questa ricetta</div>';
        h += '</div>';
        // Chosen chip in header
        if (isOn && chosenIng && typeof chosenIng === 'string') {
            h += '<span class="tutor-chip tutor-chip-sm" style="border-color:' + getFamColor(getIngFam(chosenIng)) + ';color:' + getFamColor(getIngFam(chosenIng)) + '">';
            h += '<span class="tutor-chip-dot" style="background:' + getFamColor(getIngFam(chosenIng)) + '"></span>' + esc(getIngNome(chosenIng)) + '</span>';
        }
        if (isOn && autoIng && !chosenIng) {
            h += '<span class="tutor-chip tutor-chip-sm" style="border-color:' + getFamColor(getIngFam(autoIng)) + ';color:' + getFamColor(getIngFam(autoIng)) + '">';
            h += '<span class="tutor-chip-dot" style="background:' + getFamColor(getIngFam(autoIng)) + '"></span>' + esc(getIngNome(autoIng)) + '</span>';
        }
        if (noFam) h += '<span class="tutor-cat-nofam">non nel carrello</span>';
        h += '</div>'; // end header

        // Check if all available are sconsigliato
        var allSconsigliato = avail.length > 0 && avail.every(function(id) {
            return getAffinita(id, stato.matriceId) === 'sconsigliato';
        });

        // Picker: show if toggled on AND (multiple available OR single sconsigliato)
        if (isOn && !isAction && cat.famFilter && avail.length > 0 && (avail.length > 1 || allSconsigliato)) {
            h += '<div class="tutor-cat-picker">';
            if (allSconsigliato) {
                h += '<div class="tutor-picker-warn">Nessun ingrediente ideale nel carrello per questo ruolo. Puoi comunque scegliere, oppure aggiungi l\u2019ingrediente giusto dalla pagina Ingredienti.</div>';
            } else {
                h += '<div class="tutor-picker-label">Quale?</div>';
            }
            avail.forEach(function(ingId) {
                var picked = chosenIng === ingId;
                var ing = getIng(ingId);
                var col = getFamColor(getIngFam(ingId));
                var aff = getAffinita(ingId, stato.matriceId);
                h += '<div class="tutor-pick-item' + (picked ? ' picked' : '') + (aff === 'sconsigliato' ? ' sconsigliato' : '') + '" onclick="BioLab.Tutor.pickIng(\'' + s.id + '\',\'' + cat.key + '\',\'' + ingId + '\')">';
                h += '<span class="tutor-ing-dot" style="background:' + col + '"></span>';
                h += '<span class="tutor-pick-nome">' + esc(getIngNome(ingId)) + '</span>';
                if (aff === 'consigliato') h += '<span class="tutor-aff-ok">consigliato</span>';
                if (aff === 'sconsigliato') h += '<span class="tutor-aff-no">non ideale</span>';
                if (picked) h += '<span class="tutor-check-sm">\u2713</span>';
                if (ing && ing.descrizione) h += '<div class="tutor-pick-desc">' + esc(ing.descrizione.substring(0, 80)) + '</div>';
                var affNota = getAffinitaNota(ingId, stato.matriceId);
                if (affNota) h += '<div class="tutor-pick-aff-nota">' + esc(affNota) + '</div>';
                h += '</div>';
            });
            h += '</div>';
        }
        // Single available AND consigliato or neutral — auto info
        if (isOn && !isAction && autoIng && !allSconsigliato) {
            var affAuto = getAffinita(autoIng, stato.matriceId);
            var affNotaAuto = getAffinitaNota(autoIng, stato.matriceId);
            h += '<div class="tutor-cat-auto">';
            h += esc(getIngNome(autoIng));
            if (affAuto === 'consigliato') h += ' <span class="tutor-aff-ok">consigliato</span>';
            if (affAuto === 'sconsigliato' && affNotaAuto) h += '<div class="tutor-cat-auto-warn">' + esc(affNotaAuto) + '</div>';
            h += '</div>';
        }

        // RUOLO GRID: panorama completo di tutti gli ingredienti del ruolo
        if (isOn && !isAction && cat.famFilter) {
            h += renderRuoloGrid(cat.famFilter, stato.matriceId, s.id, cat.key, chosenIng, analisi);
        }

        h += '</div>'; // end cat
    });

    if (Object.keys(catState).length === 0) {
        h += '<div class="tutor-multi-none">Nessuna aggiunta selezionata. Il materiale resta base.</div>';
    }
    h += '</div>';
    return h;
}

function renderCarrelloMini(analisi) {
    var h = '<div class="tutor-cart-mini">';
    h += '<div class="tutor-cart-title">Carrello</div>';
    var ricettaIds = {};
    var ric = buildRicetta(analisi);
    ric.forEach(function(r) { ricettaIds[r.id] = true; });
    h += '<div class="tutor-cart-chips">';
    analisi.ids.forEach(function(id) {
        var col = getFamColor(getIngFam(id));
        var inRicetta = ricettaIds[id];
        h += '<span class="tutor-cart-chip' + (inRicetta ? ' in-ricetta' : '') + '" style="border-color:' + col + ';color:' + col + '">';
        h += '<span class="tutor-chip-dot" style="background:' + col + '"></span>';
        h += esc(getIngNome(id)) + '</span>';
    });
    h += '</div></div>';
    return h;
}

function renderRicettaPanel(ricetta, analisi, isColtura) {
    if (ricetta.length === 0) return '';
    // Group by role
    var groups = [];
    var used = {};
    RUOLO_ORDER.forEach(function(r) {
        var items = ricetta.filter(function(x) { return x.ruolo === r; });
        if (items.length > 0) {
            groups.push({ label: RUOLO_LABELS[r] || r, items: items });
            items.forEach(function(x) { used[x.id] = true; });
        }
    });
    var rest = ricetta.filter(function(x) { return !used[x.id]; });
    if (rest.length > 0) groups.push({ label: 'Altro', items: rest });

    var h = '<div class="tutor-ricetta-panel">';
    h += '<div class="tutor-ricetta-title">La tua ricetta</div>';
    h += '<div class="tutor-ricetta-body">';
    groups.forEach(function(g, gi) {
        if (gi > 0) h += '<div class="tutor-ricetta-sep"></div>';
        h += '<div class="tutor-ricetta-group-label">' + esc(g.label) + '</div>';
        g.items.forEach(function(r) {
            h += '<div class="tutor-ricetta-item">';
            h += '<span class="tutor-ricetta-dot" style="background:' + getFamColor(r.fam) + '"></span>';
            h += '<span class="tutor-ricetta-nome">' + esc(r.nome) + '</span>';
            h += '</div>';
        });
    });
    h += '</div>';
    h += '<div class="tutor-ricetta-count">' + ricetta.length + ' ingredienti' + (!isColtura ? ' + acqua' : '') + '</div>';
    h += '</div>';
    return h;
}

// ============================================================
// ACTIONS
// ============================================================

function scegliMatrice(id) {
    stato.fase = 'esplorazione';
    stato.matriceId = id;
    stato.scelte = {};
    render();
}

function tornaPanoramica() {
    stato.fase = 'panoramica';
    stato.matriceId = null;
    stato.scelte = {};
    render();
}

function sceltaSingle(scenarioId, value) {
    stato.ruoloGridPreview = null; // clear preview when making a choice
    if (stato.scelte[scenarioId] === value) {
        delete stato.scelte[scenarioId];
    } else {
        stato.scelte[scenarioId] = value;
    }
    // Clear subsequent scenario choices (they may depend on this)
    var sc = SCENARIOS[stato.matriceId];
    if (sc) {
        var found = false;
        (sc.scenari || []).forEach(function(s) {
            if (found && !s.multi) delete stato.scelte[s.id];
            if (s.id === scenarioId) found = true;
        });
    }
    render();
}

function toggleCat(scenarioId, catKey) {
    var cur = (stato.scelte[scenarioId] && typeof stato.scelte[scenarioId] === 'object') ? Object.assign({}, stato.scelte[scenarioId]) : {};
    if (cur[catKey] !== undefined) {
        delete cur[catKey];
    } else {
        var sc = SCENARIOS[stato.matriceId];
        var isColtura = sc && sc.isColtura;
        var scenario = sc ? (sc.scenari || []).filter(function(s) { return s.id === scenarioId; })[0] : null;
        var cat = scenario ? (scenario.categorie || []).filter(function(c) { return c.key === catKey; })[0] : null;
        var analisi = analizzaCarrello();
        if (!cat || !cat.famFilter) {
            cur[catKey] = '_action';
        } else {
            var av = getAvailable(cat.famFilter, analisi);
            if (av.length === 1) {
                var aff = getAffinita(av[0], stato.matriceId);
                if (aff === 'sconsigliato') {
                    cur[catKey] = null; // open picker, let user decide
                } else {
                    cur[catKey] = av[0]; // safe to auto-pick
                }
            } else {
                cur[catKey] = null;
            }
        }
    }
    stato.scelte[scenarioId] = Object.keys(cur).length > 0 ? cur : undefined;
    if (!stato.scelte[scenarioId]) delete stato.scelte[scenarioId];
    render();
}

function pickIng(scenarioId, catKey, ingId) {
    stato.ruoloGridPreview = null; // clear preview when making a choice
    var cur = (stato.scelte[scenarioId] && typeof stato.scelte[scenarioId] === 'object') ? Object.assign({}, stato.scelte[scenarioId]) : {};
    cur[catKey] = cur[catKey] === ingId ? null : ingId;
    stato.scelte[scenarioId] = cur;
    render();
}

function vaiAiDosaggi() {
    var analisi = analizzaCarrello();
    var ricetta = buildRicetta(analisi);
    // Confirm if tavolo not empty
    if (typeof tavolo !== 'undefined' && tavolo.length > 0) {
        if (typeof showConfirmModal === 'function') {
            showConfirmModal('Nuova ricetta', 'Il tavolo ha gi\u00e0 ingredienti. Sostituire con la ricetta del tutor?', function() {
                eseguiVaiDosaggi(ricetta);
            });
            return;
        }
    }
    eseguiVaiDosaggi(ricetta);
}

function eseguiVaiDosaggi(ricetta) {
    // Clear tavolo
    if (typeof clearTavoloSilent === 'function') clearTavoloSilent();
    // Add each recipe ingredient to tavolo
    ricetta.forEach(function(r) {
        if (typeof addToTavolo === 'function') addToTavolo(r.id);
        if (typeof formulaSelection !== 'undefined') formulaSelection.add(r.id);
    });
    if (typeof updateTavolo === 'function') updateTavolo();
    // Switch to Sperimenta
    if (typeof setLabMode === 'function') setLabMode('sperimenta');
}

function previewRuoloIng(scenarioId, catKey, ingId) {
    var cur = stato.ruoloGridPreview;
    // Toggle: click same = deselect
    if (cur && cur.ingId === ingId && cur.scenarioId === scenarioId && cur.catKey === catKey) {
        stato.ruoloGridPreview = null;
    } else {
        stato.ruoloGridPreview = { scenarioId: scenarioId, catKey: catKey, ingId: ingId };
    }
    render();
}

function aggiungiAlCarrello(ingId) {
    var cart = BioLab.cart || [];
    var gia = cart.some(function(item) { return (item.id || item) === ingId; });
    if (gia) return;
    var ing = getIng(ingId);
    BioLab.cart.push({ id: ingId, nome: ing ? ing.nome : ingId, famiglia: ing ? ing.famiglia : '' });
    if (typeof BioLab.saveCart === 'function') BioLab.saveCart();
    if (typeof updateCart === 'function') updateCart();
    render();
}

// ============================================================
// ESPONI
// ============================================================

if (typeof BioLab !== 'undefined') {
    BioLab.Tutor = {
        render: render,
        scegliMatrice: scegliMatrice,
        tornaPanoramica: tornaPanoramica,
        sceltaSingle: sceltaSingle,
        toggleCat: toggleCat,
        pickIng: pickIng,
        vaiAiDosaggi: vaiAiDosaggi,
        aggiungiAlCarrello: aggiungiAlCarrello,
        previewRuoloIng: previewRuoloIng
    };
}

})();
