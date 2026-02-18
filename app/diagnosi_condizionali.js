// =============================================================
//  DIAGNOSI_CONDIZIONALI — Problem Solver BioLab v2
//  Dati puri: conoscenza di dominio, nessuna logica
//  20 problemi × 3-6 diagnosi ciascuna
//  Versione: 1.0 — 16 febbraio 2026
// =============================================================

var DIAGNOSI_CONDIZIONALI = {

// === GRUPPO: ESSICCAZIONE ===

"crepe": [
    {
        id: "crepe_plast_basso", priorita: 1,
        condizione: { famiglie_presenti: ["PLASTIFICANTE"], dosaggio_sotto: { famiglia: "PLASTIFICANTE", soglia_pct: 20 } },
        diagnosi: "Plastificante insufficiente. Sotto il 20% del peso matrice, le catene polimeriche non hanno abbastanza mobilit\u00e0 per assorbire le tensioni che si generano quando l'acqua evapora.",
        azione: "Porta il plastificante al 25-30% del peso della matrice. Con glicerina: 25-30%. Con sorbitolo: 15-20% (meno igroscopico).",
        tradeoff: "Pi\u00f9 plastificante = pi\u00f9 flessibile e meno crepe, ma superficie pi\u00f9 igroscopica e tendenza ad assorbire umidit\u00e0 dall'aria.",
        probabilita: "alta"
    },
    {
        id: "crepe_no_plast", priorita: 2,
        condizione: { famiglie_assenti: ["PLASTIFICANTE"], famiglie_presenti_any: ["PROTEINA", "POLISACCARIDE_NEUTRO", "POLISACCARIDE_ANIONICO"] },
        diagnosi: "Nessun plastificante in una matrice biopolimerica. Il film essiccato sar\u00e0 rigido e fragile \u2014 le tensioni interne dell'essiccazione superano la resistenza del materiale e causano fratture.",
        azione: "Aggiungi glicerina al 25-30% o sorbitolo al 15-20% del peso della matrice.",
        tradeoff: "Senza plastificante il film si crepa quasi sempre. Con plastificante diventa flessibile ma meno resistente all'acqua.",
        probabilita: "alta"
    },
    {
        id: "crepe_agar", priorita: 3,
        condizione: { ingredienti_presenti: ["agar"] },
        diagnosi: "L'agar \u00e8 la matrice pi\u00f9 soggetta a crepe. Forma gel rigidi per isteresi termica (gelifica ~38\u00b0C, fonde ~85\u00b0C) \u2014 la struttura a doppia elica \u00e8 intrinsecamente poco flessibile.",
        azione: "Con agar serve almeno 30-40% di glicerina. Essicca lentamente (copri con pellicola forata). Per vera flessibilit\u00e0: blend agar + gelatina.",
        tradeoff: "Molto plastificante rende l'agar meno fragile ma non raggiunge la flessibilit\u00e0 della gelatina. Il blend \u00e8 pi\u00f9 efficace.",
        probabilita: "alta"
    },
    {
        id: "crepe_carica_alta", priorita: 4,
        condizione: { famiglie_presenti: ["CARICA"], dosaggio_sopra: { famiglia: "CARICA", soglia_pct: 30 } },
        diagnosi: "Carica elevata. Le particelle creano discontinuit\u00e0 nella matrice \u2014 punti dove si concentrano le tensioni e da cui partono le fessure.",
        azione: "Riduci la carica al 15-20%. Oppure macina pi\u00f9 fine per distribuire meglio le particelle.",
        tradeoff: "Meno carica = meno struttura e texture, ma essiccazione pi\u00f9 uniforme e meno fratture.",
        probabilita: "media"
    },
    {
        id: "crepe_essiccazione_generica", priorita: 10,
        condizione: null,
        diagnosi: "L'essiccazione troppo rapida crea un gradiente di umidit\u00e0: la superficie si secca e si contrae mentre l'interno \u00e8 ancora umido.",
        azione: "Copri con pellicola forata nelle prime 12h. Oppure essicca in forno a 40\u00b0C con porta socchiusa.",
        tradeoff: "Essiccazione lenta = meno crepe, ma tempi pi\u00f9 lunghi e maggior rischio muffe.",
        probabilita: "media"
    }
],

"sineresi": [
    {
        id: "sineresi_agar", priorita: 1,
        condizione: { ingredienti_presenti: ["agar"] },
        diagnosi: "L'agar \u00e8 il biopolimero pi\u00f9 soggetto a sineresi. La rete a doppia elica espelle acqua spontaneamente durante l'invecchiamento.",
        azione: "Riduci la concentrazione di agar (1-1.5% \u00e8 spesso sufficiente). Aggiungi plastificante per trattenere acqua nella matrice.",
        tradeoff: "Meno agar = gel pi\u00f9 debole. Il plastificante aiuta ma ammorbidisce la struttura.",
        probabilita: "alta"
    },
    {
        id: "sineresi_amido", priorita: 2,
        condizione: { ingredienti_presenti_any: ["amido_mais", "amido_patata", "amido_tapioca"] },
        diagnosi: "La retrogradazione dell'amido (riallineamento delle catene di amilosio) espelle acqua dal gel. L'amido di mais \u00e8 il peggiore (25-28% amilosio).",
        azione: "Preferisci amido di tapioca (basso amilosio) o aggiungi plastificante al 25-30%.",
        tradeoff: "Il plastificante rallenta il processo ma non lo elimina. Per amido di mais il fenomeno \u00e8 inevitabile.",
        probabilita: "alta"
    },
    {
        id: "sineresi_generica", priorita: 10,
        condizione: null,
        diagnosi: "La sineresi \u00e8 l'espulsione spontanea di acqua da un gel durante l'invecchiamento. La rete polimerica si contrae e strizza fuori l'acqua intrappolata.",
        azione: "Aumenta il plastificante, conserva in ambiente umido, oppure usa la sineresi come effetto di texture.",
        tradeoff: "Pi\u00f9 plastificante rallenta la sineresi ma rende il materiale pi\u00f9 morbido e igroscopico.",
        probabilita: "media"
    }
],

"ritiro": [
    {
        id: "ritiro_amido", priorita: 1,
        condizione: { ingredienti_presenti_any: ["amido_mais", "amido_patata", "amido_tapioca"] },
        diagnosi: "Gli amidi hanno il ritiro pi\u00f9 alto tra i biopolimeri (50-70%) perch\u00e9 il gel trattiene molta acqua che poi evapora.",
        azione: "Aggiungi carica al 10-20%. Fibre lunghe (lino, canapa) funzionano meglio delle particelle perch\u00e9 resistono alla contrazione.",
        tradeoff: "Le cariche riducono il ritiro ma rendono il materiale opaco e meno flessibile.",
        probabilita: "alta"
    },
    {
        id: "ritiro_gelatina", priorita: 2,
        condizione: { ingredienti_presenti: ["gelatina"] },
        diagnosi: "La gelatina ha ritiro medio (30-50%). Il plastificante riduce il ritiro perch\u00e9 trattiene acqua nella matrice.",
        azione: "Plastificante al 25-30% riduce il ritiro. Per forme precise, sovradimensiona lo stampo del 30-40%.",
        tradeoff: "Pi\u00f9 plastificante = meno ritiro ma materiale pi\u00f9 morbido e igroscopico.",
        probabilita: "alta"
    },
    {
        id: "ritiro_generico", priorita: 10,
        condizione: null,
        diagnosi: "Il ritiro \u00e8 inevitabile nei biomateriali a base acquosa: l'acqua evapora e il volume diminuisce. Entit\u00e0: amidi > proteine > cellulosa.",
        azione: "Sovradimensiona lo stampo, aggiungi cariche, assicura essiccazione uniforme.",
        tradeoff: "Le cariche riducono il ritiro ma cambiano le propriet\u00e0 meccaniche e l'aspetto.",
        probabilita: "media"
    }
],

// === GRUPPO: MECCANICA ===

"fragile": [
    {
        id: "fragile_no_plast", priorita: 1,
        condizione: { famiglie_assenti: ["PLASTIFICANTE"], famiglie_presenti_any: ["PROTEINA", "POLISACCARIDE_NEUTRO", "POLISACCARIDE_ANIONICO"] },
        diagnosi: "Nessun plastificante. Le catene polimeriche sono rigide e non possono scorrere \u2014 qualsiasi sollecitazione causa frattura fragile.",
        azione: "Aggiungi glicerina al 25-30% del peso matrice. Per film che devono piegare: 30-35%.",
        tradeoff: "Il plastificante \u00e8 indispensabile per la flessibilit\u00e0, ma rende il materiale pi\u00f9 sensibile all'umidit\u00e0.",
        probabilita: "alta"
    },
    {
        id: "fragile_agar_caseina", priorita: 2,
        condizione: { ingredienti_presenti_any: ["agar", "caseina"] },
        diagnosi: "Fragilit\u00e0 intrinseca della matrice. L'agar forma strutture a doppia elica rigide. La caseina forma aggregati proteici compatti. Anche con plastificante non diventano flessibili come la gelatina.",
        azione: "Il plastificante migliora ma ha limiti: oltre il 35% si rischia appiccicosit\u00e0. Per flessibilit\u00e0 vera: blend con gelatina oppure cambio matrice.",
        tradeoff: "Accettare la rigidit\u00e0 come propriet\u00e0 del materiale, oppure cambiare matrice.",
        probabilita: "alta"
    },
    {
        id: "fragile_carica_eccesso", priorita: 3,
        condizione: { famiglie_presenti: ["CARICA"], dosaggio_sopra: { famiglia: "CARICA", soglia_pct: 35 } },
        diagnosi: "Eccesso di carica. Oltre il 35% le particelle interrompono la continuit\u00e0 della matrice \u2014 il materiale si sbriciola perch\u00e9 non c'\u00e8 abbastanza polimero a tenere tutto insieme.",
        azione: "Riduci la carica sotto il 25% oppure bilancia con pi\u00f9 plastificante. Fibre lunghe (lino, canapa) danno struttura senza rendere fragile.",
        tradeoff: "Meno carica = meno texture. Le fibre lunghe sono il miglior compromesso.",
        probabilita: "alta"
    },
    {
        id: "fragile_invecchiamento", priorita: 5,
        condizione: { ingredienti_presenti_any: ["amido_mais", "amido_patata"] },
        diagnosi: "L'amido retrograda nel tempo \u2014 le catene di amilosio si riallineano e il materiale diventa progressivamente pi\u00f9 rigido e fragile. Stesso fenomeno del pane raffermo.",
        azione: "Plastificante al 30%+ rallenta il processo. Amido di tapioca (basso amilosio) retrograda meno.",
        tradeoff: "La retrogradazione \u00e8 inevitabile con amido di mais \u2014 si pu\u00f2 rallentare ma non eliminare.",
        probabilita: "alta"
    },
    {
        id: "fragile_generico", priorita: 10,
        condizione: null,
        diagnosi: "La fragilit\u00e0 nei biomateriali deriva quasi sempre da: assenza di plastificante, matrice rigida, eccesso di carica, o invecchiamento.",
        azione: "Verifica prima il plastificante (\u00e8 la causa pi\u00f9 comune), poi la carica, poi la matrice.",
        tradeoff: "Ogni soluzione alla fragilit\u00e0 tende a ridurre la resistenza all'acqua \u2014 \u00e8 il trade-off fondamentale dei biomateriali.",
        probabilita: "media"
    }
],

"troppo_rigido": [
    {
        id: "rigido_agar_caseina", priorita: 1,
        condizione: { ingredienti_presenti_any: ["agar", "caseina", "amido_mais"] },
        diagnosi: "Rigidit\u00e0 strutturale della matrice. Agar, caseina e amido di mais producono materiali rigidi per natura chimica.",
        azione: "Per ammorbidire: plastificante al 30-35%. Per flessibilit\u00e0 vera: cambia matrice a gelatina o blend gelatina+amido.",
        tradeoff: "Oltre il 30% di plastificante si rischia appiccicosit\u00e0 senza vera flessibilit\u00e0 \u2014 meglio cambiare matrice.",
        probabilita: "alta"
    },
    {
        id: "rigido_plast_basso", priorita: 2,
        condizione: { famiglie_presenti: ["PLASTIFICANTE"], dosaggio_sotto: { famiglia: "PLASTIFICANTE", soglia_pct: 20 } },
        diagnosi: "Plastificante presente ma insufficiente. Sotto il 20% l'effetto plastificante \u00e8 minimo.",
        azione: "Aumenta al 25-35% del peso matrice.",
        tradeoff: "Pi\u00f9 plastificante = pi\u00f9 flessibile ma pi\u00f9 sensibile all'umidit\u00e0.",
        probabilita: "alta"
    },
    {
        id: "rigido_reticolazione", priorita: 3,
        condizione: { famiglie_presenti: ["SALE_RETICOLANTE"] },
        diagnosi: "La reticolazione irrigidisce sempre il materiale \u2014 tannini e borace creano legami tra le catene che limitano il movimento.",
        azione: "Riduci il reticolante o aumenta il plastificante per compensare.",
        tradeoff: "Meno reticolante = pi\u00f9 flessibile ma meno resistente all'acqua e al calore.",
        probabilita: "alta"
    },
    {
        id: "rigido_generico", priorita: 10,
        condizione: null,
        diagnosi: "La rigidit\u00e0 dipende dalla matrice, dal dosaggio di plastificante e dalla reticolazione.",
        azione: "Aumenta il plastificante come primo intervento. Se non basta, valuta cambio o blend di matrice.",
        tradeoff: "Flessibilit\u00e0 e resistenza all'acqua sono quasi sempre inversamente proporzionali.",
        probabilita: "media"
    }
],

"appiccicoso": [
    {
        id: "appiccicoso_plast_alto", priorita: 1,
        condizione: { famiglie_presenti: ["PLASTIFICANTE"], dosaggio_sopra: { famiglia: "PLASTIFICANTE", soglia_pct: 35 } },
        diagnosi: "Eccesso di plastificante. La glicerina \u00e8 fortemente igroscopica \u2014 oltre il 35% migra in superficie e assorbe umidit\u00e0 dall'aria.",
        azione: "Riduci sotto il 30%. Se serve flessibilit\u00e0 alta, sostituisci parte della glicerina con sorbitolo (meno igroscopico) in rapporto 2:1.",
        tradeoff: "Meno plastificante = meno appiccicoso ma pi\u00f9 rigido. Il sorbitolo \u00e8 il miglior compromesso.",
        probabilita: "alta"
    },
    {
        id: "appiccicoso_glicerina", priorita: 2,
        condizione: { ingredienti_presenti: ["glicerina"] },
        diagnosi: "La glicerina \u00e8 il plastificante pi\u00f9 igroscopico \u2014 assorbe fino al 30% del suo peso in acqua dall'aria. In ambienti umidi (>60% HR) il problema peggiora.",
        azione: "Sostituisci parzialmente con sorbitolo. Oppure applica un coating lipidico (cera, gommalacca) per bloccare l'assorbimento.",
        tradeoff: "Il coating risolve l'appiccicosit\u00e0 superficiale ma aggiunge un passaggio. Il sorbitolo d\u00e0 meno flessibilit\u00e0.",
        probabilita: "alta"
    },
    {
        id: "appiccicoso_ambiente", priorita: 5,
        condizione: null,
        diagnosi: "L'appiccicosit\u00e0 pu\u00f2 dipendere dall'ambiente: umidit\u00e0 relativa alta (>60%), temperatura, o essiccazione incompleta.",
        azione: "Conserva in ambiente secco (<50% HR). Completa l'essiccazione a 40-50\u00b0C se possibile.",
        tradeoff: "In ambienti umidi il problema si ripresenta \u2014 il coating \u00e8 la soluzione pi\u00f9 duratura.",
        probabilita: "media"
    }
],

// === GRUPPO: BIOLOGICI ===

"muffe": [
    {
        id: "muffe_scarti_no_anti", priorita: 1,
        condizione: { ingredienti_presenti_any: ["fondi_caffe", "pula_riso", "bucce_agrumi", "segatura", "sansa_oliva"], ingredienti_assenti: ["chitosano", "acido_citrico"] },
        diagnosi: "Scarti organici senza antimicrobici. Fondi caff\u00e8, segatura, bucce sono substrati ideali per muffe \u2014 contengono nutrienti e trattengono umidit\u00e0. Senza protezione, la contaminazione \u00e8 quasi inevitabile.",
        azione: "Aggiungi acido citrico (2-3%) per abbassare il pH sotto 4.5, oppure chitosano che \u00e8 antimicrobico naturale. Essicca completamente e rapidamente.",
        tradeoff: "L'acido citrico cambia il pH e pu\u00f2 influenzare la gelificazione. Il chitosano \u00e8 pi\u00f9 caro ma aggiunge anche propriet\u00e0 meccaniche.",
        probabilita: "alta"
    },
    {
        id: "muffe_proteina_no_anti", priorita: 2,
        condizione: { famiglie_presenti: ["PROTEINA"], ingredienti_assenti: ["chitosano", "acido_citrico"] },
        diagnosi: "Le proteine (gelatina, caseina) sono nutrienti per microrganismi. In presenza di umidit\u00e0 residua, le muffe colonizzano rapidamente la superficie.",
        azione: "Essicca completamente, aggiungi antimicrobico (acido citrico 2-3%, chitosano), o reticola per ridurre la disponibilit\u00e0 di nutrienti.",
        tradeoff: "La reticolazione riduce parzialmente il rischio ma non lo elimina. L'essiccazione completa \u00e8 la prima difesa.",
        probabilita: "alta"
    },
    {
        id: "muffe_umidita", priorita: 5,
        condizione: { famiglie_presenti: ["PLASTIFICANTE"] },
        diagnosi: "Il plastificante (glicerina, sorbitolo) trattiene umidit\u00e0 nel materiale \u2014 crea un microambiente favorevole alle muffe.",
        azione: "Bilancia il plastificante con buona essiccazione. Conserva in ambiente secco. L'acido citrico al 2-3% \u00e8 la protezione pi\u00f9 semplice.",
        tradeoff: "Ridurre il plastificante riduce le muffe ma aumenta la fragilit\u00e0 \u2014 compromesso fondamentale con gli scarti organici.",
        probabilita: "media"
    },
    {
        id: "muffe_generico", priorita: 10,
        condizione: null,
        diagnosi: "I biomateriali a base organica sono tutti potenzialmente soggetti a contaminazione biologica. Il rischio aumenta con: scarti organici, proteine, alta umidit\u00e0, essiccazione lenta.",
        azione: "Essicca completamente e rapidamente. Aggiungi antimicrobici (acido citrico, chitosano). Conserva in ambiente secco.",
        tradeoff: "L'antimicrobico migliore dipende dal sistema: acido citrico per il pH, chitosano per azione di superficie.",
        probabilita: "media"
    }
],

"odore": [
    {
        id: "odore_proteina", priorita: 1,
        condizione: { famiglie_presenti: ["PROTEINA"] },
        diagnosi: "Le proteine (gelatina, caseina) hanno odore intrinseco che si intensifica con il calore e la degradazione.",
        azione: "Aggiungi oli essenziali (2-5 gocce per 100g) dopo aver tolto dal fuoco. La reticolazione con tannini maschera parzialmente l'odore.",
        tradeoff: "Gli oli essenziali evaporano nel tempo. I tannini colorano il materiale.",
        probabilita: "alta"
    },
    {
        id: "odore_scarti", priorita: 2,
        condizione: { ingredienti_presenti_any: ["fondi_caffe", "pula_riso", "bucce_agrumi", "segatura", "sansa_oliva"] },
        diagnosi: "Gli scarti organici portano i loro odori: fondi caff\u00e8 (forte, spesso gradevole), bucce agrumi (terpeni), segatura (resina). Con la degradazione l'odore peggiora.",
        azione: "L'odore dei fondi caff\u00e8 \u00e8 spesso un vantaggio. Per gli altri: essicca completamente, aggiungi antimicrobici per prevenire la degradazione.",
        tradeoff: "L'odore \u00e8 intrinseco alla carica organica \u2014 si attenua con l'essiccazione ma non si elimina. Consideralo parte del carattere del materiale.",
        probabilita: "media"
    },
    {
        id: "odore_generico", priorita: 10,
        condizione: null,
        diagnosi: "L'odore nei biomateriali viene da: proteine (cottura), scarti organici (odore proprio), degradazione biologica (acre/muffa), o processi chimici (aceto nell'amido).",
        azione: "Identifica la fonte. Se \u00e8 degradazione: essicca e aggiungi antimicrobici. Se \u00e8 intrinseco: oli essenziali o accettalo come caratteristica.",
        tradeoff: "Eliminare completamente l'odore \u00e8 difficile nei biomateriali organici.",
        probabilita: "media"
    }
],

// === GRUPPO: PROCESSO ===

"bolle": [
    {
        id: "bolle_agitazione", priorita: 10,
        condizione: null,
        diagnosi: "Proteine e polisaccaridi sono tensioattivi naturali \u2014 stabilizzano le bolle d'aria intrappolate durante la miscelazione.",
        azione: "Mescola lentamente e in una sola direzione. Lascia riposare 5-10 minuti prima di versare. Per gelatina: degasa a 50-55\u00b0C.",
        tradeoff: "La degasazione richiede tempo. Bolle piccole e uniformi possono essere un effetto estetico interessante.",
        probabilita: "alta"
    },
    {
        id: "bolle_spirulina", priorita: 2,
        condizione: { ingredienti_presenti: ["spirulina"] },
        diagnosi: "La spirulina in polvere intrappola aria \u2014 le particelle fini agiscono come nuclei di bolle e la proteina della spirulina le stabilizza.",
        azione: "Mescola la spirulina in poca acqua fredda prima (slurry), poi aggiungi alla matrice calda. Versa lentamente.",
        tradeoff: "Le bolle con spirulina sono difficili da eliminare completamente. Usa meno spirulina se la trasparenza conta.",
        probabilita: "alta"
    },
    {
        id: "bolle_bicarbonato", priorita: 3,
        condizione: { ingredienti_presenti_any: ["bicarbonato", "aceto", "acido_citrico"] },
        diagnosi: "Reazione acido-base in corso. Bicarbonato + acido produce CO\u2082 \u2014 le bolle sono chimiche, non meccaniche.",
        azione: "Se le bolle non sono volute: separa ingredienti acidi dal bicarbonato. Se vuoi schiuma: aggiungi l'acido lentamente e versa subito.",
        tradeoff: "La reazione \u00e8 rapida e difficile da controllare. Per schiume strutturate \u00e8 meglio albumina o aquafaba.",
        probabilita: "alta"
    },
    {
        id: "bolle_generico", priorita: 10,
        condizione: null,
        diagnosi: "Le bolle vengono da: agitazione meccanica (le pi\u00f9 comuni), reazioni chimiche (bicarbonato+acido), o aria nelle cariche in polvere.",
        azione: "Mescola lentamente, lascia riposare prima di versare, versa da basso per non introdurre aria.",
        tradeoff: "Le bolle piccole spesso spariscono durante l'essiccazione. Quelle grandi restano.",
        probabilita: "media"
    }
],

"grumi": [
    {
        id: "grumi_agar_amido", priorita: 1,
        condizione: { ingredienti_presenti_any: ["agar", "amido_mais", "amido_patata", "amido_tapioca"] },
        diagnosi: "Agar e amido formano grumi se aggiunti in acqua calda \u2014 la superficie gelatinizza istantaneamente e intrappola polvere secca all'interno.",
        azione: "Sempre: disperdere la polvere in acqua FREDDA, mescolare, poi scaldare. Per l'agar: idratare 10 min in acqua fredda. Per l'amido: slurry freddo poi versare nel liquido caldo.",
        tradeoff: "Richiede pi\u00f9 tempo ma \u00e8 l'unico modo per evitare grumi.",
        probabilita: "alta"
    },
    {
        id: "grumi_cariche", priorita: 2,
        condizione: { famiglie_presenti: ["CARICA"] },
        diagnosi: "Le cariche in polvere possono formare aggregati se aggiunte tutte insieme. L'acqua non penetra nelle particelle compattate.",
        azione: "Aggiungi la carica gradualmente, mescolando. Per particelle fini: mescola prima con il plastificante (dispersione in glicerina).",
        tradeoff: "Aggiungere gradualmente richiede pi\u00f9 tempo ma d\u00e0 un risultato molto pi\u00f9 omogeneo.",
        probabilita: "alta"
    },
    {
        id: "grumi_generico", priorita: 10,
        condizione: null,
        diagnosi: "I grumi si formano quando un ingrediente in polvere incontra il liquido troppo velocemente \u2014 la superficie si idrata e forma una barriera.",
        azione: "Regola generale: polveri in liquido freddo, poi scaldare. Mai polvere in liquido bollente.",
        tradeoff: "Nessuno \u2014 \u00e8 solo questione di procedura corretta.",
        probabilita: "alta"
    }
],

"non_gelifica": [
    {
        id: "non_gelifica_alginato", priorita: 1,
        condizione: { ingredienti_presenti: ["alginato"], famiglie_assenti: ["SALE_RETICOLANTE"] },
        diagnosi: "L'alginato non gelifica da solo \u2014 \u00e8 un polianione che resta in soluzione viscosa senza ioni Ca\u00b2\u207a. Serve un bagno in CaCl\u2082 (meccanismo egg-box).",
        azione: "Prepara un bagno di CaCl\u2082 allo 0.5-1% e immergi la soluzione di alginato. La gelificazione \u00e8 istantanea dalla superficie.",
        nota_processo: "Il CaCl₂ si usa per IMMERSIONE, mai in massa (gelificazione istantanea a blocco). Prepara il bagno separatamente. Per sfere: gocciola la soluzione nel bagno con siringa. Per film: versa alginato nello stampo, spruzza CaCl₂ sopra. Il lattato di calcio funziona per gelificazione interna (lenta, uniforme).",
        tradeoff: "Il CaCl\u2082 \u00e8 indispensabile per l'alginato. Senza, non c'\u00e8 gel.",
        probabilita: "alta"
    },
    {
        id: "non_gelifica_gelatina_temp", priorita: 2,
        condizione: { ingredienti_presenti: ["gelatina"] },
        diagnosi: "La gelatina gelifica sotto i 35\u00b0C \u2014 se l'ambiente \u00e8 troppo caldo il gel non si forma. Il plastificante abbassa ulteriormente la temperatura di gelificazione.",
        azione: "Metti in frigorifero (4-8\u00b0C) per almeno 2h. Se non gelifica nemmeno in frigo: concentrazione troppo bassa.",
        tradeoff: "Il frigo accelera la gelificazione ma il gel \u00e8 leggermente pi\u00f9 rigido rispetto a gelificazione lenta.",
        probabilita: "alta"
    },
    {
        id: "non_gelifica_agar_temp", priorita: 3,
        condizione: { ingredienti_presenti: ["agar"] },
        diagnosi: "L'agar deve BOLLIRE per sciogliersi (>85\u00b0C). Se \u00e8 stato solo scaldato senza raggiungere l'ebollizione, non si \u00e8 sciolto.",
        azione: "Porta a ebollizione piena e mantieni 2-3 minuti. L'agar gelifica sotto 38\u00b0C \u2014 non serve frigo.",
        tradeoff: "Se c'\u00e8 anche gelatina: sciogli prima l'agar, raffredda a 55-60\u00b0C, poi aggiungi la gelatina (che NON deve bollire).",
        probabilita: "alta"
    },
    {
        id: "non_gelifica_amido", priorita: 4,
        condizione: { ingredienti_presenti_any: ["amido_mais", "amido_patata", "amido_tapioca"] },
        diagnosi: "L'amido richiede gelatinizzazione: riscaldamento con acqua sufficiente oltre 60-70\u00b0C. Se l'acqua \u00e8 poca o la temperatura bassa, i granuli non si rompono.",
        azione: "Assicura rapporto acqua:amido di almeno 5:1. Scalda gradualmente mescolando fino a quando la miscela diventa traslucida.",
        tradeoff: "Troppa acqua = gel debole con molto ritiro. Trova il rapporto giusto.",
        probabilita: "alta"
    },
    {
        id: "non_gelifica_generico", priorita: 10,
        condizione: null,
        diagnosi: "Ogni matrice ha un meccanismo diverso: temperatura (gelatina, agar, amido), ioni (alginato, carragenina), pH (pectina). Se non gelifica, il meccanismo non \u00e8 stato attivato.",
        azione: "Identifica la matrice e verifica: temperatura raggiunta, ioni disponibili, pH, concentrazione.",
        tradeoff: "Il problema \u00e8 quasi sempre procedurale \u2014 la soluzione \u00e8 rifare il processo correttamente.",
        probabilita: "media"
    }
],

"schiuma_collassa": [
    {
        id: "schiuma_albumina", priorita: 1,
        condizione: { ingredienti_presenti_any: ["albumina", "aquafaba"] },
        diagnosi: "La schiuma di albumina/aquafaba \u00e8 stabilizzata da proteine denaturate all'interfaccia aria-acqua. Collassa se: non montata abbastanza, contaminata da grassi, o non fissata.",
        azione: "Monta a neve ferma. Evita tracce di grasso (recipienti pulitissimi). Fissa con calore (forno 80-100\u00b0C) o con agar subito dopo.",
        tradeoff: "Schiuma fissata con agar \u00e8 pi\u00f9 stabile ma meno soffice. Il forno d\u00e0 la struttura migliore.",
        probabilita: "alta"
    },
    {
        id: "schiuma_bicarbonato", priorita: 2,
        condizione: { ingredienti_presenti: ["bicarbonato"] },
        diagnosi: "La schiuma da bicarbonato+acido \u00e8 instabile \u2014 la CO\u2082 si disperde rapidamente senza tensioattivo proteico a stabilizzare le bolle.",
        azione: "Combina con stabilizzante (albumina, aquafaba) per trattenere il gas. Oppure versa in stampo e fissa immediatamente.",
        tradeoff: "Senza stabilizzante proteico la schiuma chimica non dura. Il bicarbonato da solo d\u00e0 porosit\u00e0 ma non vera schiuma.",
        probabilita: "alta"
    },
    {
        id: "schiuma_generica", priorita: 10,
        condizione: null,
        diagnosi: "Le schiume sono intrinsecamente instabili \u2014 servono espandente (aria, CO\u2082), stabilizzante (proteine) e fissaggio rapido.",
        azione: "Tre step: espandi, stabilizza, fissa. Se manca uno dei tre, la schiuma collassa.",
        tradeoff: "Le schiume stabili richiedono pi\u00f9 passaggi e controllo rispetto ai materiali pieni.",
        probabilita: "media"
    }
],

// === GRUPPO: STABILITÀ ===

"calore": [
    {
        id: "calore_gelatina", priorita: 1,
        condizione: { ingredienti_presenti: ["gelatina"], famiglie_assenti: ["SALE_RETICOLANTE"] },
        diagnosi: "La gelatina fonde a 25-30\u00b0C \u2014 \u00e8 un limite chimico della proteina, non un errore di dosaggio. Il plastificante abbassa ulteriormente questa temperatura.",
        azione: "Reticola con tannini (3%) o t\u00e8 nero forte per rendere la gelatina stabile anche in acqua bollente. Alternativa radicale: cambia matrice (agar fonde a 85\u00b0C).",
        nota_processo: "Tannini e tè nero si aggiungono IN MASSA: mescola nella soluzione di gelatina calda (50-55°C), poi versa nello stampo. La reticolazione matura in 24h. Il borace si usa allo stesso modo.",
        tradeoff: "I tannini scuriscono il materiale (brunito) e lo irrigidiscono. Il cambio a agar perde la flessibilit\u00e0 della gelatina.",
        probabilita: "alta"
    },
    {
        id: "calore_gelatina_reticolata", priorita: 2,
        condizione: { ingredienti_presenti: ["gelatina"], famiglie_presenti: ["SALE_RETICOLANTE"] },
        diagnosi: "La gelatina reticolata resiste meglio al calore. Se si deforma ancora, la reticolazione potrebbe essere insufficiente.",
        azione: "Verifica concentrazione (tannini: 3%, borace: 2-3%). Tempo di reticolazione: almeno 24h per tannini, 2-4h per borace.",
        nota_processo: "Tannini: mescola in massa, lascia maturare 24h. Borace: mescola in massa, gel si irrigidisce in 2-4h. Non immergere — questi reticolanti funzionano solo mescolati nella soluzione.",
        tradeoff: "Pi\u00f9 reticolante = pi\u00f9 resistenza termica ma anche pi\u00f9 rigidit\u00e0.",
        probabilita: "media"
    },
    {
        id: "calore_generico", priorita: 10,
        condizione: null,
        diagnosi: "Stabilit\u00e0 termica per matrice: gelatina (25-30\u00b0C), amidi (variano), agar (85\u00b0C), alginato reticolato (stabile). Conoscere la temperatura critica \u00e8 fondamentale.",
        azione: "Se serve resistenza al calore: agar o alginato reticolato. Gelatina: reticolazione obbligatoria.",
        tradeoff: "Le matrici termostabili hanno altre limitazioni: agar \u00e8 rigido, alginato richiede ioni.",
        probabilita: "media"
    }
],

"retrogradazione": [
    {
        id: "retrogradazione_mais", priorita: 1,
        condizione: { ingredienti_presenti: ["amido_mais"] },
        diagnosi: "L'amido di mais ha il contenuto di amilosio pi\u00f9 alto (25-28%) \u2014 le catene lineari si riallineano rapidamente, rendendo il materiale progressivamente rigido, opaco e fragile. Stesso fenomeno del pane raffermo.",
        azione: "Plastificante al 30%+ rallenta il processo. Alternativa: sostituisci con amido di tapioca (basso amilosio) o patata (intermedio).",
        tradeoff: "La tapioca retrograda meno ma d\u00e0 gel pi\u00f9 deboli e trasparenti. La patata \u00e8 un buon compromesso.",
        probabilita: "alta"
    },
    {
        id: "retrogradazione_amido_generico", priorita: 2,
        condizione: { ingredienti_presenti_any: ["amido_patata", "amido_tapioca"] },
        diagnosi: "Tutti gli amidi retrogradano, ma in misura diversa. Patata: intermedia. Tapioca (basso amilosio): la meno soggetta.",
        azione: "Plastificante al 25-30% \u00e8 la prima difesa. Conserva in ambiente a umidit\u00e0 controllata.",
        tradeoff: "La retrogradazione \u00e8 termodinamicamente favorita \u2014 si rallenta ma non si elimina.",
        probabilita: "alta"
    },
    {
        id: "retrogradazione_generica", priorita: 10,
        condizione: null,
        diagnosi: "La retrogradazione \u00e8 il riallineamento delle catene di amido dopo la gelatinizzazione. Pi\u00f9 amilosio = pi\u00f9 retrogradazione.",
        azione: "Scegli amidi a basso amilosio (tapioca). Aggiungi plastificante abbondante. Conserva correttamente.",
        tradeoff: "\u00c8 un processo naturale dell'amido \u2014 progetta sapendo che il materiale cambier\u00e0.",
        probabilita: "media"
    }
],

"delaminazione": [
    {
        id: "delaminazione_lipide", priorita: 1,
        condizione: { famiglie_presenti: ["RESINA_LIPIDE"], ingredienti_assenti: ["lecitina"] },
        diagnosi: "Separazione di fase acqua-lipide. Senza emulsionante il lipide forma strati separati che si delaminano durante l'essiccazione.",
        azione: "Aggiungi lecitina (1-2%) come emulsionante. Alternativa: applica il lipide come coating esterno invece di miscelarlo.",
        tradeoff: "La lecitina funziona ma il sistema resta metastabile. Il coating esterno \u00e8 pi\u00f9 affidabile.",
        probabilita: "alta"
    },
    {
        id: "delaminazione_carica", priorita: 2,
        condizione: { famiglie_presenti: ["CARICA"], dosaggio_sopra: { famiglia: "CARICA", soglia_pct: 30 } },
        diagnosi: "Eccesso di carica. Le particelle pesanti sedimentano creando zone deboli dove il materiale si separa.",
        azione: "Riduci la carica o mescola pi\u00f9 vigorosamente prima di versare. Per particelle pesanti: gel pi\u00f9 viscosi.",
        tradeoff: "Gel pi\u00f9 viscosi trattengono le particelle ma sono pi\u00f9 difficili da versare e degasare.",
        probabilita: "media"
    },
    {
        id: "delaminazione_generica", priorita: 5,
        condizione: null,
        diagnosi: "La delaminazione tra strati diversi indica scarsa adesione: superfici troppo lisce, materiali incompatibili, o tempi sbagliati.",
        azione: "Applica il secondo strato quando il primo \u00e8 ancora leggermente umido. Oppure scarta la superficie.",
        tradeoff: "L'adesione tra strati \u00e8 sempre un punto debole \u2014 i materiali monolitici sono pi\u00f9 affidabili.",
        probabilita: "media"
    }
],

// === GRUPPO: COLTURE ===

"micelio_no_crescita": [
    {
        id: "micelio_contaminazione", priorita: 1,
        condizione: { ingredienti_presenti: ["micelio"] },
        diagnosi: "La causa pi\u00f9 comune \u00e8 la contaminazione \u2014 batteri o muffe competitor colonizzano il substrato prima del micelio.",
        azione: "Sterilizza il substrato a 121\u00b0C per 1.5-2.5h. Inocula in ambiente pulito, con guanti. Lavora vicino a una fiamma per creare una zona sterile.",
        tradeoff: "La pastorizzazione (71\u00b0C per 1-2h) \u00e8 un'alternativa pi\u00f9 tollerante per substrati come la paglia.",
        probabilita: "alta"
    },
    {
        id: "micelio_substrato", priorita: 2,
        condizione: { ingredienti_presenti: ["micelio"] },
        diagnosi: "Substrato inadeguato: troppo secco, troppo bagnato, o nutrienti insufficienti. L'umidit\u00e0 ottimale \u00e8 60-70%.",
        azione: "Verifica: il substrato spremuto deve rilasciare poche gocce. Mix classico: 50% segatura legno duro + 50% crusca/soia. Fondi caff\u00e8 entro 24h.",
        tradeoff: "Substrati troppo nutrienti crescono veloce ma attirano contaminanti. Il mix \u00e8 pi\u00f9 sicuro.",
        probabilita: "alta"
    },
    {
        id: "micelio_temperatura", priorita: 3,
        condizione: { ingredienti_presenti: ["micelio"] },
        diagnosi: "Temperatura fuori range. La maggior parte delle specie cresce tra 20-28\u00b0C. Sotto i 15\u00b0C rallenta, sopra i 32\u00b0C pu\u00f2 morire.",
        azione: "Mantieni 22-25\u00b0C costanti. Evita sbalzi. Un armadio chiuso in stanza riscaldata funziona. Non serve luce.",
        tradeoff: "Temperature pi\u00f9 alte (25-28\u00b0C) accelerano ma aumentano rischio contaminazione. 22\u00b0C \u00e8 il compromesso.",
        probabilita: "alta"
    }
],

"scoby_no_forma": [
    {
        id: "scoby_medium", priorita: 1,
        condizione: { ingredienti_presenti: ["scoby"] },
        diagnosi: "Il medium \u00e8 fondamentale. Serve t\u00e8 nero zuccherato: caffeina e polifenoli nutrono i batteri, lo zucchero nutre i lieviti. Tisane o acqua zuccherata non funzionano altrettanto.",
        azione: "Medium standard: 2L acqua bollente + 200g zucchero + 5 bustine t\u00e8 nero. Raffredda a <30\u00b0C prima di aggiungere lo starter. pH iniziale: 4-4.5.",
        tradeoff: "Lo zucchero viene consumato durante la fermentazione. Meno zucchero = crescita pi\u00f9 lenta e pellicola pi\u00f9 sottile.",
        probabilita: "alta"
    },
    {
        id: "scoby_temperatura", priorita: 2,
        condizione: { ingredienti_presenti: ["scoby"] },
        diagnosi: "SCOBY cresce tra 20-30\u00b0C, ottimale 24-28\u00b0C. Sotto i 20\u00b0C rallenta molto. La pellicola si forma in superficie \u2014 non muovere il contenitore.",
        azione: "Posto caldo (24-28\u00b0C), al riparo dalla luce, fermo per 7-21 giorni. Copri con panno traspirante, non coperchio chiuso.",
        tradeoff: "Temperature alte danno pellicole pi\u00f9 spesse ma meno uniformi. 7 giorni a 25\u00b0C d\u00e0 risultati consistenti.",
        probabilita: "alta"
    },
    {
        id: "scoby_sottile", priorita: 3,
        condizione: { ingredienti_presenti: ["scoby"] },
        diagnosi: "Pellicola troppo sottile: tempo insufficiente, poco zucchero, o starter debole. Servono almeno 10-14 giorni per pellicole utili.",
        azione: "Aspetta 14-21 giorni per 5-10mm. Assicura zucchero residuo. Usa starter attivo e recente.",
        tradeoff: "Si possono stratificare pi\u00f9 pellicole sottili come alternativa a una singola spessa.",
        probabilita: "media"
    }
],

"contaminazione": [
    {
        id: "contaminazione_micelio", priorita: 1,
        condizione: { ingredienti_presenti: ["micelio"] },
        diagnosi: "Nel micelio, la contaminazione appare come macchie colorate: verde (Trichoderma), nero (Aspergillus), rosa (Neurospora). Il micelio sano \u00e8 bianco e uniforme.",
        azione: "Contaminazione piccola e localizzata: rimuovi con margine e monitora. Estesa: scarta tutto e ricomincia con substrato nuovo.",
        tradeoff: "\u00c8 quasi sempre meglio ricominciare che salvare una coltura contaminata.",
        probabilita: "alta"
    },
    {
        id: "contaminazione_scoby", priorita: 2,
        condizione: { ingredienti_presenti: ["scoby"] },
        diagnosi: "Nello SCOBY, la muffa appare SOPRA la pellicola: macchie secche, sfocate, colorate. Le formazioni bianche e umide SOTTO la superficie sono normali (nuovi strati di cellulosa).",
        azione: "Muffa vera (sopra, secca, colorata): scarta tutto incluso il liquido. Formazioni bianche normali: la coltura \u00e8 sana.",
        tradeoff: "Prevenzione: mantieni pH basso con 10-15% di kombucha gi\u00e0 fermentata o aceto di mele come starter.",
        probabilita: "alta"
    },
    {
        id: "contaminazione_prevenzione", priorita: 5,
        condizione: null,
        diagnosi: "La contaminazione viene da: substrato non sterile, ambiente sporco, strumenti contaminati, correnti d'aria con spore.",
        azione: "Sterilizza tutto. Lavora pulito con guanti. Per SCOBY: pH acido dello starter. Per micelio: sterilizzazione substrato.",
        tradeoff: "La sterilit\u00e0 assoluta \u00e8 impossibile in laboratorio didattico \u2014 l'obiettivo \u00e8 minimizzare le fonti e reagire rapidamente.",
        probabilita: "alta"
    }
],

// === GRUPPO: AMBIENTE ===

"colore": [
    {
        id: "colore_curcuma", priorita: 1,
        condizione: { ingredienti_presenti: ["curcuma"] },
        diagnosi: "La curcuma \u00e8 fotosensibile \u2014 la curcumina degrada con la luce UV. Il giallo brillante diventa marrone-verdastro in settimane.",
        azione: "Proteggi dalla luce. Per stabilizzare: abbassa il pH (acido citrico mantiene il giallo). In ambiente basico la curcuma diventa rosso-arancio.",
        tradeoff: "La fotodegradazione \u00e8 inevitabile se esposta. Per colore stabile: ossido di ferro (giallo) o carbone vegetale (nero).",
        probabilita: "alta"
    },
    {
        id: "colore_spirulina", priorita: 2,
        condizione: { ingredienti_presenti: ["spirulina"] },
        diagnosi: "La spirulina d\u00e0 verde intenso ma \u00e8 sensibile al calore \u2014 sopra 60\u00b0C la ficocianina denatura e il colore vira al verde oliva.",
        azione: "Aggiungi dopo aver tolto dal fuoco, sotto i 50\u00b0C. Per colori stabili: ossido di ferro o carbone vegetale.",
        tradeoff: "Nessun colorante naturale \u00e8 stabile come un pigmento minerale.",
        probabilita: "alta"
    },
    {
        id: "colore_ph", priorita: 3,
        condizione: { ingredienti_presenti_any: ["curcuma", "spirulina", "paprika"] },
        diagnosi: "I coloranti naturali sono indicatori di pH \u2014 cambiano colore con l'acidit\u00e0. La matrice influenza il colore finale.",
        azione: "Controlla il pH. Acido citrico (pH 3-4) stabilizza molti coloranti. Evita combinazioni con bicarbonato.",
        tradeoff: "Il controllo del pH \u00e8 efficace ma limita le combinazioni possibili.",
        probabilita: "alta"
    },
    {
        id: "colore_generico", priorita: 10,
        condizione: null,
        diagnosi: "I coloranti naturali sono sensibili a: luce, calore, pH. I pigmenti minerali (ossido di ferro, carbone) sono molto pi\u00f9 stabili.",
        azione: "Per colori temporanei: coloranti naturali. Per colori permanenti: pigmenti minerali.",
        tradeoff: "Il cambiamento di colore nel tempo pu\u00f2 essere un valore estetico, non solo un difetto.",
        probabilita: "media"
    }
],

"dissolve_acqua": [
    {
        id: "dissolve_no_retic", priorita: 1,
        condizione: { famiglie_presenti_any: ["PROTEINA", "POLISACCARIDE_NEUTRO", "POLISACCARIDE_ANIONICO"], famiglie_assenti: ["SALE_RETICOLANTE", "RESINA_LIPIDE"] },
        diagnosi: "Biopolimeri senza reticolante n\u00e9 coating sono intrinsecamente idrofili \u2014 i legami idrogeno con l'acqua competono con quelli della struttura.",
        azione: "Due strategie: (1) reticolante per rendere insolubile (tannini per proteine, CaCl\u2082 per alginato) oppure (2) coating lipidico (cera, gommalacca).",
        nota_processo: "Metodi: TANNINI/BORACE → in massa (mescola nella soluzione calda). CaCl₂ → immersione o spruzzo (mai in massa con alginato). COATING → pennello o immersione rapida su pezzo essiccato.",
        tradeoff: "Reticolante: cambia propriet\u00e0 meccaniche. Coating: protezione solo superficiale, si graffia.",
        probabilita: "alta"
    },
    {
        id: "dissolve_gelatina", priorita: 2,
        condizione: { ingredienti_presenti: ["gelatina"], famiglie_assenti: ["SALE_RETICOLANTE"] },
        diagnosi: "La gelatina \u00e8 termoreversibile \u2014 fonde a 25-30\u00b0C e si dissolve in acqua tiepida. Senza reticolazione non resister\u00e0 mai.",
        azione: "Reticola con tannini (3%) o t\u00e8 nero forte. Dopo la reticolazione resiste anche all'acqua bollente.",
        nota_processo: "IN MASSA: mescola tannini nella soluzione calda (50-55°C) prima di versare. Per pezzi già fatti: immergi in soluzione di tannini al 3% per 2-4h, poi asciuga.",
        tradeoff: "I tannini scuriscono (brunito) e irrigidiscono. \u00c8 il prezzo della resistenza all'acqua con gelatina.",
        probabilita: "alta"
    },
    {
        id: "dissolve_amido", priorita: 3,
        condizione: { ingredienti_presenti_any: ["amido_mais", "amido_patata", "amido_tapioca"] },
        diagnosi: "L'amido gelatinizzato si rigonfia in acqua e perde coesione. La retrogradazione migliora leggermente ma non basta.",
        azione: "Coating con cera o gommalacca \u00e8 la soluzione pi\u00f9 pratica per l'amido.",
        tradeoff: "Il coating protegge la superficie ma non l'interno. Per vera resistenza all'acqua, l'amido non \u00e8 la matrice ideale.",
        probabilita: "alta"
    },
    {
        id: "dissolve_generico", priorita: 10,
        condizione: null,
        diagnosi: "La sensibilit\u00e0 all'acqua \u00e8 il limite fondamentale dei biomateriali idrofili. Nessun biopolimero a base acquosa resiste senza trattamento.",
        azione: "Tre livelli: (1) reticolazione, (2) coating, (3) combinazione. La strategia dipende dalla matrice.",
        tradeoff: "La resistenza all'acqua \u00e8 sempre un compromesso con flessibilit\u00e0, trasparenza, biodegradabilit\u00e0.",
        probabilita: "media"
    }
]

}; // fine DIAGNOSI_CONDIZIONALI

// =============================================================
//  DOMANDE GUIDATE (per modalità senza contesto)
// =============================================================

var DOMANDE_GUIDATE = {
    "crepe":             { testo: "Quale matrice stai usando?", opzioni: ["gelatina", "agar", "amido_mais", "amido_patata", "caseina"] },
    "sineresi":          { testo: "Quale matrice stai usando?", opzioni: ["agar", "amido_mais", "amido_patata", "gelatina"] },
    "ritiro":            { testo: "Quale matrice stai usando?", opzioni: ["amido_mais", "amido_patata", "gelatina", "agar"] },
    "fragile":           { testo: "Quale matrice stai usando?", opzioni: ["agar", "caseina", "amido_mais", "gelatina"] },
    "troppo_rigido":     { testo: "Quale matrice stai usando?", opzioni: ["agar", "caseina", "amido_mais", "gelatina"] },
    "appiccicoso":       { testo: "Stai usando glicerina?", opzioni: ["glicerina", "sorbitolo"] },
    "muffe":             { testo: "Cosa contiene la tua ricetta?", opzioni: ["fondi_caffe", "segatura", "gelatina", "caseina"] },
    "odore":             { testo: "Quale ingrediente pensi causi l'odore?", opzioni: ["gelatina", "caseina", "fondi_caffe", "bucce_agrumi"] },
    "bolle":             { testo: "Cosa stai mescolando?", opzioni: ["spirulina", "bicarbonato", "amido_mais", "gelatina"] },
    "grumi":             { testo: "Quale ingrediente fa grumi?", opzioni: ["agar", "amido_mais", "amido_patata", "fondi_caffe"] },
    "non_gelifica":      { testo: "Quale matrice stai usando?", opzioni: ["alginato", "gelatina", "agar", "amido_mais"] },
    "schiuma_collassa":  { testo: "Come stai facendo la schiuma?", opzioni: ["albumina", "aquafaba", "bicarbonato"] },
    "calore":            { testo: "Quale matrice stai usando?", opzioni: ["gelatina", "amido_mais", "agar", "alginato"] },
    "retrogradazione":   { testo: "Quale amido stai usando?", opzioni: ["amido_mais", "amido_patata", "amido_tapioca"] },
    "delaminazione":     { testo: "Cosa si separa?", opzioni: ["lipide_superficie", "strati_diversi", "carica_sedimenta"] },
    "micelio_no_crescita": { testo: "Che substrato stai usando?", opzioni: ["segatura", "fondi_caffe", "paglia", "canapa_hurd"] },
    "scoby_no_forma":    { testo: "Da quanto tempo aspetti?", opzioni: ["meno_7gg", "tra_7_14gg", "piu_14gg"] },
    "contaminazione":    { testo: "Che coltura stai usando?", opzioni: ["micelio", "scoby"] },
    "colore":            { testo: "Quale colorante stai usando?", opzioni: ["curcuma", "spirulina", "paprika", "carbone_vegetale", "ossido_ferro"] },
    "dissolve_acqua":    { testo: "Quale matrice stai usando?", opzioni: ["gelatina", "amido_mais", "amido_patata", "agar", "alginato"] }
};

// =============================================================
//  NOMI DISPLAY PER OPZIONI
// =============================================================

var NOMI_OPZIONI = {
    gelatina: "Gelatina", agar: "Agar", amido_mais: "Amido di mais",
    amido_patata: "Amido di patata", amido_tapioca: "Amido di tapioca",
    caseina: "Caseina", alginato: "Alginato", chitosano: "Chitosano",
    glicerina: "Glicerina", sorbitolo: "Sorbitolo",
    fondi_caffe: "Fondi caff\u00e8", segatura: "Segatura",
    bucce_agrumi: "Bucce agrumi", paglia: "Paglia", canapa_hurd: "Canapa",
    spirulina: "Spirulina", curcuma: "Curcuma", paprika: "Paprika",
    carbone_vegetale: "Carbone vegetale", ossido_ferro: "Ossido di ferro",
    bicarbonato: "Bicarbonato", albumina: "Albumina", aquafaba: "Aquafaba",
    micelio: "Micelio", scoby: "SCOBY",
    lipide_superficie: "Cera/coating si stacca",
    strati_diversi: "Strati diversi si separano",
    carica_sedimenta: "Carica sedimenta sul fondo",
    meno_7gg: "Meno di 7 giorni",
    tra_7_14gg: "7-14 giorni",
    piu_14gg: "Pi\u00f9 di 14 giorni"
};

// =============================================================
//  CORRELAZIONI TRA PROBLEMI
//  tipo: "effetto_collaterale" = risolvendo A potresti causare B
//  tipo: "causa_comune" = A e B hanno spesso la stessa origine
// =============================================================

var CORRELAZIONI_PROBLEMI = {
  "crepe": [
    { verso: "appiccicoso", tipo: "effetto_collaterale", nota: "Aggiungendo plastificante per risolvere le crepe, potresti rendere il materiale appiccicoso se superi il 35%" },
    { verso: "fragile", tipo: "causa_comune", nota: "Crepe e fragilit\u00e0 hanno la stessa origine: poco plastificante o matrice rigida" },
    { verso: "muffe", tipo: "effetto_collaterale", nota: "Essiccazione lenta per evitare crepe aumenta il rischio muffe con substrati organici" },
  ],
  "sineresi": [
    { verso: "retrogradazione", tipo: "causa_comune", nota: "Con l'amido, sineresi e retrogradazione sono lo stesso fenomeno: riallineamento delle catene di amilosio" },
    { verso: "ritiro", tipo: "causa_comune", nota: "L'acqua espulsa dalla sineresi contribuisce al ritiro del campione" },
  ],
  "ritiro": [
    { verso: "crepe", tipo: "causa_comune", nota: "Il ritiro genera tensioni interne che possono causare crepe se il materiale non \u00e8 abbastanza flessibile" },
    { verso: "delaminazione", tipo: "causa_comune", nota: "In materiali multistrato, il ritiro differenziale tra strati causa delaminazione" },
  ],
  "fragile": [
    { verso: "crepe", tipo: "causa_comune", nota: "Stessa causa: matrice troppo rigida o plastificante assente" },
    { verso: "dissolve_acqua", tipo: "effetto_collaterale", nota: "Aggiungendo plastificante per ridurre la fragilit\u00e0, il materiale diventa pi\u00f9 sensibile all'acqua" },
    { verso: "troppo_rigido", tipo: "causa_comune", nota: "Fragilit\u00e0 e rigidit\u00e0 sono due aspetti dello stesso problema: catene poco mobili" },
  ],
  "troppo_rigido": [
    { verso: "fragile", tipo: "causa_comune", nota: "Rigidit\u00e0 e fragilit\u00e0 vanno insieme \u2014 un materiale troppo rigido si rompe invece di flettersi" },
    { verso: "appiccicoso", tipo: "effetto_collaterale", nota: "Aggiungendo molto plastificante per ammorbidire, rischi l'appiccicosit\u00e0" },
    { verso: "dissolve_acqua", tipo: "effetto_collaterale", nota: "Ridurre il reticolante per ammorbidire peggiora la resistenza all'acqua" },
  ],
  "appiccicoso": [
    { verso: "muffe", tipo: "effetto_collaterale", nota: "La superficie appiccicosa trattiene umidit\u00e0 e polvere, creando ambiente favorevole alle muffe" },
    { verso: "fragile", tipo: "effetto_collaterale", nota: "Riducendo il plastificante per togliere l'appiccicosit\u00e0, il materiale potrebbe diventare fragile" },
  ],
  "muffe": [
    { verso: "odore", tipo: "causa_comune", nota: "Le muffe producono odori sgradevoli \u2014 se c'\u00e8 odore, controlla se ci sono anche muffe" },
    { verso: "contaminazione", tipo: "causa_comune", nota: "Stesso problema su substrati diversi: scarti organici vs colture biologiche" },
    { verso: "crepe", tipo: "effetto_collaterale", nota: "Essiccare velocemente per prevenire le muffe aumenta il rischio di crepe" },
  ],
  "odore": [
    { verso: "muffe", tipo: "causa_comune", nota: "L'odore acre pu\u00f2 indicare degradazione biologica in corso \u2014 verifica la presenza di muffe" },
  ],
  "bolle": [
    { verso: "schiuma_collassa", tipo: "causa_comune", nota: "Bolle e schiuma instabile derivano dallo stesso problema: gas intrappolato senza stabilizzazione" },
  ],
  "grumi": [
    { verso: "non_gelifica", tipo: "causa_comune", nota: "I grumi indicano che l'ingrediente non si \u00e8 sciolto completamente \u2014 la gelificazione sar\u00e0 incompleta" },
  ],
  "non_gelifica": [
    { verso: "grumi", tipo: "causa_comune", nota: "Se non gelifica, controlla anche la presenza di grumi: l'ingrediente potrebbe non essersi sciolto" },
  ],
  "schiuma_collassa": [
    { verso: "bolle", tipo: "causa_comune", nota: "Se la schiuma collassa ma restano bolle grandi, il problema \u00e8 la stabilizzazione, non l'espansione" },
  ],
  "calore": [
    { verso: "dissolve_acqua", tipo: "causa_comune", nota: "Sensibilit\u00e0 al calore e all'acqua hanno la stessa origine: biopolimero non reticolato" },
    { verso: "troppo_rigido", tipo: "effetto_collaterale", nota: "Reticolare per resistere al calore irrigidisce il materiale" },
  ],
  "retrogradazione": [
    { verso: "sineresi", tipo: "causa_comune", nota: "Retrogradazione e sineresi nell'amido sono aspetti dello stesso fenomeno: riallineamento amilosio" },
    { verso: "fragile", tipo: "effetto_collaterale", nota: "La retrogradazione rende il materiale progressivamente fragile" },
  ],
  "delaminazione": [
    { verso: "ritiro", tipo: "causa_comune", nota: "Ritiro differenziale tra strati causa delaminazione" },
  ],
  "micelio_no_crescita": [
    { verso: "contaminazione", tipo: "causa_comune", nota: "Se il micelio non cresce, spesso \u00e8 perch\u00e9 un contaminante ha colonizzato prima" },
  ],
  "scoby_no_forma": [
    { verso: "contaminazione", tipo: "causa_comune", nota: "Se lo SCOBY non si forma, verifica che non ci sia muffa sulla superficie" },
  ],
  "contaminazione": [
    { verso: "muffe", tipo: "causa_comune", nota: "Contaminazione nelle colture e muffe nei biomateriali: stessa dinamica biologica, stesse difese" },
    { verso: "micelio_no_crescita", tipo: "causa_comune", nota: "Il contaminante spesso impedisce la crescita del micelio" },
    { verso: "scoby_no_forma", tipo: "causa_comune", nota: "La muffa sulla superficie impedisce la formazione della pellicola SCOBY" },
  ],
  "colore": [
    { verso: "odore", tipo: "causa_comune", nota: "Degradazione del colore e odore possono avere la stessa causa: degradazione biologica o chimica" },
  ],
  "dissolve_acqua": [
    { verso: "calore", tipo: "causa_comune", nota: "Sensibilit\u00e0 all'acqua e al calore: stessa debolezza del biopolimero non trattato" },
    { verso: "troppo_rigido", tipo: "effetto_collaterale", nota: "Reticolare per resistere all'acqua irrigidisce il materiale" },
    { verso: "fragile", tipo: "effetto_collaterale", nota: "Aggiungere plastificante senza coating peggiora la resistenza all'acqua" },
  ],
};
