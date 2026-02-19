// ============================================
// DATABASE BIOMATERIALI v11 - File esterno
// ============================================
// VERSIONE: 11 - Colture (te_nero_forte, canapa_hurd, acido_stearico), ruolo_coltura, materiali SCOBY+Mycocomposite
// DATA: 2026-02-19 (v11e: 14 materiali, 35 link aggiornati)
// BASE: v10.1 (Merge v9.3+v10, ripristino 145 valori persi)
// 
// MODIFICHE v6.0:
// - Base: v5.0 (link verificati ricette web)
// - NUOVI: Link, fonti, URL per ricette LAB 1-14
// - NUOVI: Credits (designer, aziende, istituzioni) per TUTTE le 32 ricette
// - Totale link verificati: 68 (vs 36 in v5)
//
// CREDITS PRINCIPALI:
// Designer: Suzanne Lee, Loes Bogers, Margaret Dunne, Cecilia Raspanti
// Aziende: Ecovative, BioCouture, Entropy Resins, Sicomin
// Istituzioni: Fabricademy, TextileLab Waag, Fab Lab Barcelona, Materiom
// Chef: Ferran Adrià (sferificazione alginato)
// Scienziati: Auguste Trillat (caseina), E.S. Stevens (Green Plastics)
//
// FONTI PER TIPO:
// Ricette LAB (1-14): Letteratura + industria + BioCouture + Ecovative
// Ricette Web (15-32): Materiom + Fabricademy + Bioplastic Cook Book
//
// Struttura dati materiali:
// fonte - Origine ricetta
// url - Link primario
// link_risorse - Array [{titolo, url}]
// credits - {designer, aziende, istituzioni, note}
//
// Struttura file:
// CATALOGO_DATA - Catalogo per tipologia output
// MATERIALI_DATA - 32 documentati + 34 in progress (LAB)
// INGREDIENTI_DATA - 70 ingredienti con proprietà
// OUTPUT_INFO - Descrizioni tipi output
// IN_PROGRESS_MAPPING - Mapping ricette in progress
// ============================================

const CATALOGO_DATA = {"metadata":{"versione": "11.1-IED","data":"2026-02","descrizione":"Catalogo biomateriali organizzato per tipologia di output","fonte_materiali":"SUPER_DB_materials_189 (filtrato BIO)","fonte_ingredienti":"database_biomateriali_v5"},"outputs":{"film":{"descrizione":"Foglio sottile, flessibile o rigido, autoportante","note_processo":"Richiede essiccazione controllata (12-48h). Stampo antiaderente o silicone.","documentati":[{"nome":"PHA","subtitle":"Poliidrossialcanoati batterici","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Cellulosa","subtitle":"Fibra vegetale universale","trl":9,"replicabile":true,"ingredienti":["cellulosa_carta","fibre_cotone","fibre_lino"]},{"nome":"SCOBY","subtitle":"Cellulosa batterica da kombucha","trl":6,"replicabile":true,"ingredienti":["scoby","aceto"]},{"nome":"Alghe biopolimeri","subtitle":"Plastica dal mare","trl":7,"replicabile":true,"ingredienti":["agar","alginato","carragenina"]},{"nome":"Chitina","subtitle":"Esoscheletro dei crostacei","trl":8,"replicabile":true,"ingredienti":["chitosano"]},{"nome":"Chitosano","subtitle":"Chitina deacetilata antimicrobica","trl":8,"replicabile":true,"ingredienti":["chitosano","acido_citrico"]},{"nome":"Collagene","subtitle":"Proteina strutturale animale","trl":9,"replicabile":true,"ingredienti":["gelatina"]},{"nome":"Cheratina","subtitle":"Proteina di capelli, piume, lana","trl":7,"replicabile":true,"ingredienti":["cheratina"]},{"nome":"Coating batterici","subtitle":"Rivestimenti bioattivi","trl":6,"replicabile":true,"ingredienti":["scoby"]},{"nome":"PBS","subtitle":"Polibutilene succinato","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Bio-PE","subtitle":"Polietilene da canna da zucchero","trl":9,"replicabile":false,"ingredienti":[]},{"nome":"Kombucha Leather","subtitle":"Pelle da SCOBY fermentato","trl":6,"replicabile":true,"ingredienti":["scoby","glicerina","aceto"]},{"nome":"Cheratina da capelli","subtitle":"Proteine da waste cheratinoso","trl":4,"replicabile":true,"ingredienti":["cheratina"]},{"nome":"Resine naturali","subtitle":"Resine vegetali (colofonia, dammar, lacca)","trl":9,"replicabile":true,"ingredienti":["colofonia","gommalacca"]},{"nome":"Bacterial cellulose comp","subtitle":"Composito cellulosa batterica","trl":6,"replicabile":true,"ingredienti":["scoby"]},{"nome":"Biofilm agar puro","ingredienti":["agar","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Film tapioca","ingredienti":["amido_tapioca","glicerina","aceto"],"replicabile":true,"trl":3,"note":""},{"nome":"Biofilm extra flessibile","ingredienti":["gelatina","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Biofilm agar+gelatina","ingredienti":["agar","gelatina","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Gelatina+Juta","ingredienti":["gelatina","fibre_juta","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Gelatina+Canapa","ingredienti":["gelatina","fibre_canapa","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Agar+Juta","ingredienti":["agar","fibre_juta","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Agar conduttivo","ingredienti":["agar","sale","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Gelatina+spirulina","ingredienti":["gelatina","spirulina","glicerina"],"replicabile":true,"trl":3,"note":""}],"n_documentati":24,"n_replicabili":12,"matrici":[{"famiglia":"PROTEINA","ingredienti":["Gelatina Alimentare","Caseina","Albumina (Albume d'uovo)","Cheratina","Zeina"],"ingredienti_id":["gelatina","caseina","albumina","cheratina","zeina"]},{"famiglia":"POLISACCARIDE_NEUTRO","ingredienti":["Agar Agar","Amido di Mais (Maizena)","Amido di Patata","Gomma di Guar","Gomma Xantana","Amido di Tapioca (Manioca)"],"ingredienti_id":["agar","amido_mais","amido_patata","gomma_guar","xantana","amido_tapioca"]},{"famiglia":"POLISACCARIDE_ANIONICO","ingredienti":["Alginato di Sodio","Carragenina","Pectina"],"ingredienti_id":["alginato","carragenina","pectina"]},{"famiglia":"POLICATIONE","ingredienti":["Chitosano"],"ingredienti_id":["chitosano"]},{"famiglia":"COLTURA","ingredienti":["SCOBY (Kombucha)","Micelio Fungino","Batteri (colture)"],"ingredienti_id":["scoby","micelio"]}],"modificatori":[{"famiglia":"PLASTIFICANTE","ingredienti":["Glicerina (Glicerolo)","Sorbitolo","Olio di Lino"],"ingredienti_id":["glicerina","sorbitolo","olio_lino"]},{"famiglia":"CARICA","ingredienti":["Fondi di Caffè","Cellulosa (Carta Riciclata)","Fibre di Cotone","Fibre di Lino","Caolino (Argilla Bianca)","Gusci d'Uovo Macinati","Carbonato di Calcio (CaCO₃)","Grafite Naturale","Paglia","Segatura/Farina di legno","Fibre di Canapa","Fibre di Juta","Bucce di Agrumi","Cenere di Legno","Pula di Riso","Gesso (Solfato di Calcio)","Canapa (Hemp Hurd)"],"ingredienti_id":["fondi_caffe","cellulosa_carta","fibre_cotone","fibre_lino","caolino","gusci_uovo","carbonato_calcio","grafite","paglia","segatura","fibre_canapa","fibre_juta","bucce_agrumi","cenere_legno","pula_riso","gesso","canapa_hurd"]},{"famiglia":"COLORANTE","ingredienti":["Curcuma","Spirulina","Paprika","Carbone Vegetale Attivo","Ossidi di Ferro"],"ingredienti_id":["curcuma","spirulina","paprika","carbone_vegetale","ossido_ferro"]},{"famiglia":"SALE_RETICOLANTE","ingredienti":["Cloruro di Calcio (CaCl2)","Tannini (Acido Tannico)","Allume di Potassio","Lattato di Calcio","Borace","Urea","Cloruro di Potassio (KCl)","Tè nero forte (reticolante)"],"ingredienti_id":["cacl2","tannini","allume","lattato_calcio","borace","urea","kcl","te_nero_forte"]},{"famiglia":"ADDITIVO","ingredienti":["Lecitina","Acido Citrico","Aceto (Acido Acetico)","Oli Essenziali","Bicarbonato di Sodio","Zucchero","Tè nero","Sapone (tensioattivo)","Alcool Etilico (Etanolo)","Sale da Cucina (NaCl)","Aquafaba"],"ingredienti_id":["lecitina","acido_citrico","aceto","oli_essenziali","bicarbonato","zucchero","te_nero","sapone","alcool","sale","aquafaba"]}],"warnings":[{"problema":"Troppo plastificante","effetto":"Film appiccicoso, non si stacca dallo stampo"},{"problema":"Poco plastificante","effetto":"Film fragile, si crepa"},{"problema":"Essiccazione troppo veloce","effetto":"Bordi curvi, bolle"}]},"gel":{"descrizione":"Massa idratata, da morbida a rigida, non autoportante se molto idratato","note_processo":"Temperature critiche: dissoluzione vs gelificazione. Ogni matrice ha range specifico.","documentati":[{"nome":"SCOBY","subtitle":"Cellulosa batterica da kombucha","trl":6,"replicabile":true,"ingredienti":["scoby","aceto"]},{"nome":"Alghe biopolimeri","subtitle":"Plastica dal mare","trl":7,"replicabile":true,"ingredienti":["agar","alginato","carragenina"]},{"nome":"Chitosano","subtitle":"Chitina deacetilata antimicrobica","trl":8,"replicabile":true,"ingredienti":["chitosano","acido_citrico"]},{"nome":"Collagene","subtitle":"Proteina strutturale animale","trl":9,"replicabile":true,"ingredienti":["gelatina"]},{"nome":"Bacterial cellulose comp","subtitle":"Composito cellulosa batterica","trl":6,"replicabile":true,"ingredienti":["scoby"]},{"nome":"Algae composites","subtitle":"Compositi da alghe","trl":6,"replicabile":true,"ingredienti":["agar","alginato"]},{"nome":"Orange peel composites","subtitle":"Compositi da bucce agrumi","trl":7,"replicabile":true,"ingredienti":["pectina"]},{"nome":"Biofilm agar+gelatina","ingredienti":["agar","gelatina","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Agar conduttivo","ingredienti":["agar","sale","glicerina"],"replicabile":true,"trl":3,"note":""}],"n_documentati":9,"n_replicabili":7,"matrici":[{"famiglia":"PROTEINA","ingredienti":["Gelatina Alimentare","Caseina","Albumina (Albume d'uovo)","Cheratina","Zeina"],"ingredienti_id":["gelatina","caseina","albumina","cheratina","zeina"]},{"famiglia":"POLISACCARIDE_NEUTRO","ingredienti":["Agar Agar","Amido di Mais (Maizena)","Amido di Patata","Gomma di Guar","Gomma Xantana","Amido di Tapioca (Manioca)"],"ingredienti_id":["agar","amido_mais","amido_patata","gomma_guar","xantana","amido_tapioca"]},{"famiglia":"POLISACCARIDE_ANIONICO","ingredienti":["Alginato di Sodio","Carragenina","Pectina"],"ingredienti_id":["alginato","carragenina","pectina"]},{"famiglia":"POLICATIONE","ingredienti":["Chitosano"],"ingredienti_id":["chitosano"]}],"modificatori":[{"famiglia":"SALE_RETICOLANTE","ingredienti":["Cloruro di Calcio (CaCl2)","Tannini (Acido Tannico)","Allume di Potassio","Lattato di Calcio","Borace","Urea","Cloruro di Potassio (KCl)","Tè nero forte (reticolante)"],"ingredienti_id":["cacl2","tannini","allume","lattato_calcio","borace","urea","kcl","te_nero_forte"]},{"famiglia":"PLASTIFICANTE","ingredienti":["Glicerina (Glicerolo)","Sorbitolo","Olio di Lino"],"ingredienti_id":["glicerina","sorbitolo","olio_lino"]},{"famiglia":"COLORANTE","ingredienti":["Curcuma","Spirulina","Paprika","Carbone Vegetale Attivo","Ossidi di Ferro"],"ingredienti_id":["curcuma","spirulina","paprika","carbone_vegetale","ossido_ferro"]},{"famiglia":"ADDITIVO","ingredienti":["Lecitina","Acido Citrico","Aceto (Acido Acetico)","Oli Essenziali","Bicarbonato di Sodio","Zucchero","Tè nero","Sapone (tensioattivo)","Alcool Etilico (Etanolo)","Sale da Cucina (NaCl)","Aquafaba"],"ingredienti_id":["lecitina","acido_citrico","aceto","oli_essenziali","bicarbonato","zucchero","te_nero","sapone","alcool","sale","aquafaba"]}],"warnings":[{"problema":"Agar + CaCl2","effetto":"NON funziona! CaCl2 non reticola agar (errore comune)"},{"problema":"Alginato senza Ca²⁺","effetto":"Non gelifica, resta liquido viscoso"},{"problema":"Gelatina sopra 30°C","effetto":"Fonde, non mantiene forma"}]},"rigido":{"descrizione":"Oggetto solido, strutturale, autoportante","note_processo":"Stampi rigidi. Essiccazione lenta per pezzi spessi. Cariche aumentano rigidità.","documentati":[{"nome":"PLA","subtitle":"Acido polilattico da mais","trl":9,"replicabile":false,"ingredienti":[]},{"nome":"PHA","subtitle":"Poliidrossialcanoati batterici","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Lignina","subtitle":"Collante naturale del legno","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Lino fibre","subtitle":"Fibra nobile europea","trl":9,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Bio-resine epossidiche","subtitle":"Resine vegetali strutturali","trl":8,"replicabile":true,"ingredienti":["colofonia","olio_lino","olio_tung"]},{"nome":"Alghe biopolimeri","subtitle":"Plastica dal mare","trl":7,"replicabile":true,"ingredienti":["agar","alginato","carragenina"]},{"nome":"Chitina","subtitle":"Esoscheletro dei crostacei","trl":8,"replicabile":true,"ingredienti":["chitosano"]},{"nome":"Chitosano","subtitle":"Chitina deacetilata antimicrobica","trl":8,"replicabile":true,"ingredienti":["chitosano","acido_citrico"]},{"nome":"Collagene","subtitle":"Proteina strutturale animale","trl":9,"replicabile":true,"ingredienti":["gelatina"]},{"nome":"Cheratina","subtitle":"Proteina di capelli, piume, lana","trl":7,"replicabile":true,"ingredienti":["cheratina"]},{"nome":"Bio-cementi MICP","subtitle":"Cemento da batteri","trl":6,"replicabile":true,"ingredienti":["carbonato_calcio","cacl2"]},{"nome":"PBS","subtitle":"Polibutilene succinato","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Starch TPS","subtitle":"Amido termoplastico","trl":9,"replicabile":true,"ingredienti":["amido_mais","amido_patata","glicerina","sorbitolo","acqua"]},{"nome":"Bio-PE","subtitle":"Polietilene da canna da zucchero","trl":9,"replicabile":false,"ingredienti":[]},{"nome":"Bio-PET","subtitle":"PET parzialmente bio-based","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"PEF","subtitle":"Furanoato 100% bio-based","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Kombucha Leather","subtitle":"Pelle da SCOBY fermentato","trl":6,"replicabile":true,"ingredienti":["scoby","glicerina","aceto"]},{"nome":"Lino+Epoxy","subtitle":"Composito naturale strutturale","trl":9,"replicabile":true,"ingredienti":["fibre_lino","colofonia","olio_lino"]},{"nome":"Canapa+PP","subtitle":"Composito automotive","trl":9,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Juta+PLA","subtitle":"Biocomposito 100% bio","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Basalto+Bio-resina","subtitle":"Composito minerale-bio","trl":7,"replicabile":true,"ingredienti":["colofonia","olio_lino"]},{"nome":"Sisal composites","subtitle":"Compositi fibra di sisal","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Coir (cocco) composites","subtitle":"Compositi fibra di cocco","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Bamboo composites","subtitle":"Compositi bambù strutturali","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Wood-plastic composites","subtitle":"WPC legno-plastica","trl":9,"replicabile":true,"ingredienti":["cellulosa_carta"]},{"nome":"Flax+PLA","subtitle":"Lino e PLA 100% bio","trl":7,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Kenaf composites","subtitle":"Compositi fibra di kenaf","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Bagasse (canna) composites","subtitle":"Compositi da scarto canna zucchero","trl":8,"replicabile":true,"ingredienti":["cellulosa_carta"]},{"nome":"Rice husk composites","subtitle":"Compositi da lolla di riso","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Pineapple leaf fiber","subtitle":"Piñatex - pelle da ananas","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Algae composites","subtitle":"Compositi da alghe","trl":6,"replicabile":true,"ingredienti":["agar","alginato"]},{"nome":"Coffee waste composites","subtitle":"Compositi da fondi caffè","trl":7,"replicabile":true,"ingredienti":["fondi_caffe"]},{"nome":"Grape marc composites","subtitle":"Compositi da vinaccia","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Orange peel composites","subtitle":"Compositi da bucce agrumi","trl":7,"replicabile":true,"ingredienti":["pectina"]},{"nome":"Flax composites","subtitle":"Compositi fibra di lino","trl":8,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Eggshell composite","ingredienti":["alginato","gusci_uovo","aceto","cacl2"],"replicabile":true,"trl":3,"note":""},{"nome":"Gommalacca liquida","ingredienti":["gommalacca","alcool"],"replicabile":true,"trl":3,"note":""},{"nome":"Caseina plastica","ingredienti":["caseina","aceto","acido_citrico"],"replicabile":true,"trl":3,"note":""}],"n_documentati":38,"n_replicabili":20,"matrici":[{"famiglia":"PROTEINA","ingredienti":["Gelatina Alimentare","Caseina","Albumina (Albume d'uovo)","Cheratina","Zeina"],"ingredienti_id":["gelatina","caseina","albumina","cheratina","zeina"]},{"famiglia":"POLISACCARIDE_NEUTRO","ingredienti":["Agar Agar","Amido di Mais (Maizena)","Amido di Patata","Gomma di Guar","Gomma Xantana","Amido di Tapioca (Manioca)"],"ingredienti_id":["agar","amido_mais","amido_patata","gomma_guar","xantana","amido_tapioca"]},{"famiglia":"POLISACCARIDE_ANIONICO","ingredienti":["Alginato di Sodio","Carragenina","Pectina"],"ingredienti_id":["alginato","carragenina","pectina"]},{"famiglia":"POLICATIONE","ingredienti":["Chitosano"],"ingredienti_id":["chitosano"]},{"famiglia":"COLTURA","ingredienti":["SCOBY (Kombucha)","Micelio Fungino","Batteri (colture)"],"ingredienti_id":["scoby","micelio"]},{"famiglia":"RESINA_LIPIDE","ingredienti":["Cera di Carnauba","Cera d'Api","Gommalacca (Shellac)","Colofonia (Pece Greca)","Olio di Tung","Olio di Oliva","Acido Stearico"],"ingredienti_id":["cera_carnauba","cera_api","gommalacca","colofonia","olio_tung","olio_oliva","acido_stearico"]}],"modificatori":[{"famiglia":"CARICA","ingredienti":["Fondi di Caffè","Cellulosa (Carta Riciclata)","Fibre di Cotone","Fibre di Lino","Caolino (Argilla Bianca)","Gusci d'Uovo Macinati","Carbonato di Calcio (CaCO₃)","Grafite Naturale","Paglia","Segatura/Farina di legno","Fibre di Canapa","Fibre di Juta","Bucce di Agrumi","Cenere di Legno","Pula di Riso","Gesso (Solfato di Calcio)","Canapa (Hemp Hurd)"],"ingredienti_id":["fondi_caffe","cellulosa_carta","fibre_cotone","fibre_lino","caolino","gusci_uovo","carbonato_calcio","grafite","paglia","segatura","fibre_canapa","fibre_juta","bucce_agrumi","cenere_legno","pula_riso","gesso","canapa_hurd"]},{"famiglia":"SALE_RETICOLANTE","ingredienti":["Cloruro di Calcio (CaCl2)","Tannini (Acido Tannico)","Allume di Potassio","Lattato di Calcio","Borace","Urea","Cloruro di Potassio (KCl)","Tè nero forte (reticolante)"],"ingredienti_id":["cacl2","tannini","allume","lattato_calcio","borace","urea","kcl","te_nero_forte"]},{"famiglia":"COLORANTE","ingredienti":["Curcuma","Spirulina","Paprika","Carbone Vegetale Attivo","Ossidi di Ferro"],"ingredienti_id":["curcuma","spirulina","paprika","carbone_vegetale","ossido_ferro"]},{"famiglia":"ADDITIVO","ingredienti":["Lecitina","Acido Citrico","Aceto (Acido Acetico)","Oli Essenziali","Bicarbonato di Sodio","Zucchero","Tè nero","Sapone (tensioattivo)","Alcool Etilico (Etanolo)","Sale da Cucina (NaCl)","Aquafaba"],"ingredienti_id":["lecitina","acido_citrico","aceto","oli_essenziali","bicarbonato","zucchero","te_nero","sapone","alcool","sale","aquafaba"]}],"warnings":[{"problema":"Solo plastificante","effetto":"Impossibile - serve matrice strutturale"},{"problema":"Troppo plastificante","effetto":"Oggetto morbido, si deforma"},{"problema":"Essiccazione incompleta","effetto":"Interno umido, muffe"}]},"coating":{"descrizione":"Rivestimento sottile applicato su superficie, non autoportante","note_processo":"Applicare a pennello, spray o immersione. Strati sottili multipli > strato unico spesso.","documentati":[{"nome":"Bio-resine epossidiche","subtitle":"Resine vegetali strutturali","trl":8,"replicabile":true,"ingredienti":["colofonia","olio_lino","olio_tung"]},{"nome":"SCOBY","subtitle":"Cellulosa batterica da kombucha","trl":6,"replicabile":true,"ingredienti":["scoby","aceto"]},{"nome":"Chitina","subtitle":"Esoscheletro dei crostacei","trl":8,"replicabile":true,"ingredienti":["chitosano"]},{"nome":"Chitosano","subtitle":"Chitina deacetilata antimicrobica","trl":8,"replicabile":true,"ingredienti":["chitosano","acido_citrico"]},{"nome":"Coating batterici","subtitle":"Rivestimenti bioattivi","trl":6,"replicabile":true,"ingredienti":["scoby"]},{"nome":"Resine naturali","subtitle":"Resine vegetali (colofonia, dammar, lacca)","trl":9,"replicabile":true,"ingredienti":["colofonia","gommalacca"]},{"nome":"Canapa+PP","subtitle":"Composito automotive","trl":9,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Basalto+Bio-resina","subtitle":"Composito minerale-bio","trl":7,"replicabile":true,"ingredienti":["colofonia","olio_lino"]},{"nome":"Hemp automotive","subtitle":"Compositi canapa per auto","trl":9,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Sisal composites","subtitle":"Compositi fibra di sisal","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Bamboo composites","subtitle":"Compositi bambù strutturali","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Wood-plastic composites","subtitle":"WPC legno-plastica","trl":9,"replicabile":true,"ingredienti":["cellulosa_carta"]},{"nome":"Cork composites","subtitle":"Compositi sughero","trl":9,"replicabile":false,"ingredienti":[]},{"nome":"Gommalacca liquida","ingredienti":["gommalacca","alcool"],"replicabile":true,"trl":3,"note":""},{"nome":"Beeswax wrap","ingredienti":["cera_api","colofonia","olio_lino"],"replicabile":true,"trl":3,"note":""},{"nome":"Hardwax oil","ingredienti":["olio_lino","cera_api","cera_carnauba"],"replicabile":true,"trl":3,"note":""}],"n_documentati":16,"n_replicabili":10,"matrici":[{"famiglia":"RESINA_LIPIDE","ingredienti":["Cera di Carnauba","Cera d'Api","Gommalacca (Shellac)","Colofonia (Pece Greca)","Olio di Tung","Olio di Oliva","Acido Stearico"],"ingredienti_id":["cera_carnauba","cera_api","gommalacca","colofonia","olio_tung","olio_oliva","acido_stearico"]},{"famiglia":"POLICATIONE","ingredienti":["Chitosano"],"ingredienti_id":["chitosano"]},{"famiglia":"COLTURA","ingredienti":["SCOBY (Kombucha)","Micelio Fungino","Batteri (colture)"],"ingredienti_id":["scoby","micelio"]},{"famiglia":"PROTEINA","ingredienti":["Gelatina Alimentare","Caseina","Albumina (Albume d'uovo)","Cheratina","Zeina"],"ingredienti_id":["gelatina","caseina","albumina","cheratina","zeina"]}],"modificatori":[{"famiglia":"PLASTIFICANTE","ingredienti":["Glicerina (Glicerolo)","Sorbitolo","Olio di Lino"],"ingredienti_id":["glicerina","sorbitolo","olio_lino"]},{"famiglia":"COLORANTE","ingredienti":["Curcuma","Spirulina","Paprika","Carbone Vegetale Attivo","Ossidi di Ferro"],"ingredienti_id":["curcuma","spirulina","paprika","carbone_vegetale","ossido_ferro"]},{"famiglia":"ADDITIVO","ingredienti":["Lecitina","Acido Citrico","Aceto (Acido Acetico)","Oli Essenziali","Bicarbonato di Sodio","Zucchero","Tè nero","Sapone (tensioattivo)","Alcool Etilico (Etanolo)","Sale da Cucina (NaCl)","Aquafaba"],"ingredienti_id":["lecitina","acido_citrico","aceto","oli_essenziali","bicarbonato","zucchero","te_nero","sapone","alcool","sale","aquafaba"]}],"warnings":[{"problema":"Coating acquoso su carta","effetto":"Deforma il supporto"},{"problema":"Strato troppo spesso","effetto":"Crepe, distacco"},{"problema":"Superficie non pulita","effetto":"Adesione scarsa"}]},"schiuma":{"descrizione":"Materiale poroso, leggero, con celle d'aria","note_processo":"RICHIEDE: agente espandente (bicarbonato+acido, aria meccanica, agente schiumogeno). Stabilizzare prima che collassi.","documentati":[{"nome":"Cellulosa","subtitle":"Fibra vegetale universale","trl":9,"replicabile":true,"ingredienti":["cellulosa_carta","fibre_cotone","fibre_lino"]},{"nome":"Lignina","subtitle":"Collante naturale del legno","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Canapa fibre","subtitle":"Fibra tessile resistente","trl":9,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Micelio","subtitle":"Radice del fungo costruttrice","trl":7,"replicabile":true,"ingredienti":["micelio"]},{"nome":"Alghe biopolimeri","subtitle":"Plastica dal mare","trl":7,"replicabile":true,"ingredienti":["agar","alginato","carragenina"]},{"nome":"Chitina","subtitle":"Esoscheletro dei crostacei","trl":8,"replicabile":true,"ingredienti":["chitosano"]},{"nome":"Bio-cementi MICP","subtitle":"Cemento da batteri","trl":6,"replicabile":true,"ingredienti":["carbonato_calcio","cacl2"]},{"nome":"MycoComposite","subtitle":"Micelio + scarti agricoli","trl":7,"replicabile":true,"ingredienti":["micelio","fondi_caffe","cellulosa_carta"]},{"nome":"Kenaf composites","subtitle":"Compositi fibra di kenaf","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Biofoam gelatina","ingredienti":["gelatina","glicerina","sapone"],"replicabile":true,"trl":3,"note":""},{"nome":"Agar foam","ingredienti":["agar","glicerina","sapone"],"replicabile":true,"trl":3,"note":""}],"n_documentati":11,"n_replicabili":7,"matrici":[{"famiglia":"PROTEINA","ingredienti":["Gelatina Alimentare","Caseina","Albumina (Albume d'uovo)","Cheratina","Zeina"],"ingredienti_id":["gelatina","caseina","albumina","cheratina","zeina"]},{"famiglia":"POLISACCARIDE_NEUTRO","ingredienti":["Agar Agar","Amido di Mais (Maizena)","Amido di Patata","Gomma di Guar","Gomma Xantana","Amido di Tapioca (Manioca)"],"ingredienti_id":["agar","amido_mais","amido_patata","gomma_guar","xantana","amido_tapioca"]},{"famiglia":"POLISACCARIDE_ANIONICO","ingredienti":["Alginato di Sodio","Carragenina","Pectina"],"ingredienti_id":["alginato","carragenina","pectina"]}],"modificatori":[{"famiglia":"CARICA","ingredienti":["Fondi di Caffè","Cellulosa (Carta Riciclata)","Fibre di Cotone","Fibre di Lino","Caolino (Argilla Bianca)","Gusci d'Uovo Macinati","Carbonato di Calcio (CaCO₃)","Grafite Naturale","Paglia","Segatura/Farina di legno","Fibre di Canapa","Fibre di Juta","Bucce di Agrumi","Cenere di Legno","Pula di Riso","Gesso (Solfato di Calcio)","Canapa (Hemp Hurd)"],"ingredienti_id":["fondi_caffe","cellulosa_carta","fibre_cotone","fibre_lino","caolino","gusci_uovo","carbonato_calcio","grafite","paglia","segatura","fibre_canapa","fibre_juta","bucce_agrumi","cenere_legno","pula_riso","gesso","canapa_hurd"]},{"famiglia":"PLASTIFICANTE","ingredienti":["Glicerina (Glicerolo)","Sorbitolo","Olio di Lino"],"ingredienti_id":["glicerina","sorbitolo","olio_lino"]},{"famiglia":"COLORANTE","ingredienti":["Curcuma","Spirulina","Paprika","Carbone Vegetale Attivo","Ossidi di Ferro"],"ingredienti_id":["curcuma","spirulina","paprika","carbone_vegetale","ossido_ferro"]},{"famiglia":"ADDITIVO","ingredienti":["Lecitina","Acido Citrico","Aceto (Acido Acetico)","Oli Essenziali","Bicarbonato di Sodio","Zucchero","Tè nero","Sapone (tensioattivo)","Alcool Etilico (Etanolo)","Sale da Cucina (NaCl)","Aquafaba"],"ingredienti_id":["lecitina","acido_citrico","aceto","oli_essenziali","bicarbonato","zucchero","te_nero","sapone","alcool","sale","aquafaba"]}],"warnings":[{"problema":"Senza agente espandente","effetto":"Non si forma schiuma"},{"problema":"Celle troppo grandi","effetto":"Struttura debole, collassa"},{"problema":"Essiccazione troppo lenta","effetto":"Celle collassano"}]},"pelle":{"descrizione":"Materiale simil-cuoio, flessibile, resistente, texture superficiale","note_processo":"Spessore minimo 2-3mm. Trattamento con cere/oli per impermeabilizzare. Conciatura migliora durata.","documentati":[{"nome":"Micelio","subtitle":"Radice del fungo costruttrice","trl":7,"replicabile":true,"ingredienti":["micelio"]},{"nome":"SCOBY","subtitle":"Cellulosa batterica da kombucha","trl":6,"replicabile":true,"ingredienti":["scoby","aceto"]},{"nome":"Chitosano","subtitle":"Chitina deacetilata antimicrobica","trl":8,"replicabile":true,"ingredienti":["chitosano","acido_citrico"]},{"nome":"Collagene","subtitle":"Proteina strutturale animale","trl":9,"replicabile":true,"ingredienti":["gelatina"]},{"nome":"Cheratina","subtitle":"Proteina di capelli, piume, lana","trl":7,"replicabile":true,"ingredienti":["cheratina"]},{"nome":"Kombucha Leather","subtitle":"Pelle da SCOBY fermentato","trl":6,"replicabile":true,"ingredienti":["scoby","glicerina","aceto"]},{"nome":"Hemp automotive","subtitle":"Compositi canapa per auto","trl":9,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"MycoComposite","subtitle":"Micelio + scarti agricoli","trl":7,"replicabile":true,"ingredienti":["micelio","fondi_caffe","cellulosa_carta"]},{"nome":"Cork composites","subtitle":"Compositi sughero","trl":9,"replicabile":false,"ingredienti":[]},{"nome":"Pineapple leaf fiber","subtitle":"Piñatex - pelle da ananas","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Grape marc composites","subtitle":"Compositi da vinaccia","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Coffee leather","ingredienti":["alginato","fondi_caffe","olio_oliva","glicerina","cacl2"],"replicabile":true,"trl":3,"note":""},{"nome":"Orange peel leather","ingredienti":["pectina","bucce_agrumi","glicerina"],"replicabile":true,"trl":3,"note":""}],"n_documentati":13,"n_replicabili":8,"matrici":[{"famiglia":"PROTEINA","ingredienti":["Gelatina Alimentare","Caseina","Albumina (Albume d'uovo)","Cheratina","Zeina"],"ingredienti_id":["gelatina","caseina","albumina","cheratina","zeina"]},{"famiglia":"POLICATIONE","ingredienti":["Chitosano"],"ingredienti_id":["chitosano"]},{"famiglia":"COLTURA","ingredienti":["SCOBY (Kombucha)","Micelio Fungino","Batteri (colture)"],"ingredienti_id":["scoby","micelio"]}],"modificatori":[{"famiglia":"PLASTIFICANTE","ingredienti":["Glicerina (Glicerolo)","Sorbitolo","Olio di Lino"],"ingredienti_id":["glicerina","sorbitolo","olio_lino"]},{"famiglia":"RESINA_LIPIDE","ingredienti":["Cera di Carnauba","Cera d'Api","Gommalacca (Shellac)","Colofonia (Pece Greca)","Olio di Tung","Olio di Oliva","Acido Stearico"],"ingredienti_id":["cera_carnauba","cera_api","gommalacca","colofonia","olio_tung","olio_oliva","acido_stearico"]},{"famiglia":"CARICA","ingredienti":["Fondi di Caffè","Cellulosa (Carta Riciclata)","Fibre di Cotone","Fibre di Lino","Caolino (Argilla Bianca)","Gusci d'Uovo Macinati","Carbonato di Calcio (CaCO₃)","Grafite Naturale","Paglia","Segatura/Farina di legno","Fibre di Canapa","Fibre di Juta","Bucce di Agrumi","Cenere di Legno","Pula di Riso","Gesso (Solfato di Calcio)","Canapa (Hemp Hurd)"],"ingredienti_id":["fondi_caffe","cellulosa_carta","fibre_cotone","fibre_lino","caolino","gusci_uovo","carbonato_calcio","grafite","paglia","segatura","fibre_canapa","fibre_juta","bucce_agrumi","cenere_legno","pula_riso","gesso","canapa_hurd"]},{"famiglia":"COLORANTE","ingredienti":["Curcuma","Spirulina","Paprika","Carbone Vegetale Attivo","Ossidi di Ferro"],"ingredienti_id":["curcuma","spirulina","paprika","carbone_vegetale","ossido_ferro"]},{"famiglia":"SALE_RETICOLANTE","ingredienti":["Cloruro di Calcio (CaCl2)","Tannini (Acido Tannico)","Allume di Potassio","Lattato di Calcio","Borace","Urea","Cloruro di Potassio (KCl)","Tè nero forte (reticolante)"],"ingredienti_id":["cacl2","tannini","allume","lattato_calcio","borace","urea","kcl","te_nero_forte"]},{"famiglia":"ADDITIVO","ingredienti":["Lecitina","Acido Citrico","Aceto (Acido Acetico)","Oli Essenziali","Bicarbonato di Sodio","Zucchero","Tè nero","Sapone (tensioattivo)","Alcool Etilico (Etanolo)","Sale da Cucina (NaCl)","Aquafaba"],"ingredienti_id":["lecitina","acido_citrico","aceto","oli_essenziali","bicarbonato","zucchero","te_nero","sapone","alcool","sale","aquafaba"]}],"warnings":[{"problema":"Senza plastificante","effetto":"Pelle rigida, si crepa"},{"problema":"Senza trattamento finale","effetto":"Sensibile ad acqua"},{"problema":"SCOBY troppo sottile","effetto":"Si strappa facilmente"}]},"composito":{"descrizione":"Materiale multi-componente, matrice + rinforzo","note_processo":"RICHIEDE rinforzo (fibre, polveri). Rapporto tipico: 70-80% matrice, 20-30% carica. Bagnare fibre prima.","documentati":[{"nome":"Cellulosa","subtitle":"Fibra vegetale universale","trl":9,"replicabile":true,"ingredienti":["cellulosa_carta","fibre_cotone","fibre_lino"]},{"nome":"Lignina","subtitle":"Collante naturale del legno","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Canapa fibre","subtitle":"Fibra tessile resistente","trl":9,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Lino fibre","subtitle":"Fibra nobile europea","trl":9,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Bio-resine epossidiche","subtitle":"Resine vegetali strutturali","trl":8,"replicabile":true,"ingredienti":["colofonia","olio_lino","olio_tung"]},{"nome":"Micelio","subtitle":"Radice del fungo costruttrice","trl":7,"replicabile":true,"ingredienti":["micelio"]},{"nome":"SCOBY","subtitle":"Cellulosa batterica da kombucha","trl":6,"replicabile":true,"ingredienti":["scoby","aceto"]},{"nome":"Seta spider artificiale","subtitle":"Fibra biomimetica del ragno","trl":6,"replicabile":false,"ingredienti":[]},{"nome":"Cheratina","subtitle":"Proteina di capelli, piume, lana","trl":7,"replicabile":true,"ingredienti":["cheratina"]},{"nome":"Lana/Wool","subtitle":"Fibra animale rinnovabile","trl":9,"replicabile":true,"ingredienti":["cheratina"]},{"nome":"Kombucha Leather","subtitle":"Pelle da SCOBY fermentato","trl":6,"replicabile":true,"ingredienti":["scoby","glicerina","aceto"]},{"nome":"Silk Proteins Fibroin","subtitle":"Proteine seta ricombinanti","trl":6,"replicabile":false,"ingredienti":[]},{"nome":"Cheratina da capelli","subtitle":"Proteine da waste cheratinoso","trl":4,"replicabile":true,"ingredienti":["cheratina"]},{"nome":"Lino+Epoxy","subtitle":"Composito naturale strutturale","trl":9,"replicabile":true,"ingredienti":["fibre_lino","colofonia","olio_lino"]},{"nome":"Canapa+PP","subtitle":"Composito automotive","trl":9,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Juta+PLA","subtitle":"Biocomposito 100% bio","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Basalto+Bio-resina","subtitle":"Composito minerale-bio","trl":7,"replicabile":true,"ingredienti":["colofonia","olio_lino"]},{"nome":"Hemp automotive","subtitle":"Compositi canapa per auto","trl":9,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"MycoComposite","subtitle":"Micelio + scarti agricoli","trl":7,"replicabile":true,"ingredienti":["micelio","fondi_caffe","cellulosa_carta"]},{"nome":"Bacterial cellulose comp","subtitle":"Composito cellulosa batterica","trl":6,"replicabile":true,"ingredienti":["scoby"]},{"nome":"Sisal composites","subtitle":"Compositi fibra di sisal","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Coir (cocco) composites","subtitle":"Compositi fibra di cocco","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Bamboo composites","subtitle":"Compositi bambù strutturali","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Wood-plastic composites","subtitle":"WPC legno-plastica","trl":9,"replicabile":true,"ingredienti":["cellulosa_carta"]},{"nome":"Flax+PLA","subtitle":"Lino e PLA 100% bio","trl":7,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Kenaf composites","subtitle":"Compositi fibra di kenaf","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Bagasse (canna) composites","subtitle":"Compositi da scarto canna zucchero","trl":8,"replicabile":true,"ingredienti":["cellulosa_carta"]},{"nome":"Rice husk composites","subtitle":"Compositi da lolla di riso","trl":8,"replicabile":false,"ingredienti":[]},{"nome":"Cork composites","subtitle":"Compositi sughero","trl":9,"replicabile":false,"ingredienti":[]},{"nome":"Pineapple leaf fiber","subtitle":"Piñatex - pelle da ananas","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Algae composites","subtitle":"Compositi da alghe","trl":6,"replicabile":true,"ingredienti":["agar","alginato"]},{"nome":"Coffee waste composites","subtitle":"Compositi da fondi caffè","trl":7,"replicabile":true,"ingredienti":["fondi_caffe"]},{"nome":"Grape marc composites","subtitle":"Compositi da vinaccia","trl":7,"replicabile":false,"ingredienti":[]},{"nome":"Orange peel composites","subtitle":"Compositi da bucce agrumi","trl":7,"replicabile":true,"ingredienti":["pectina"]},{"nome":"Flax composites","subtitle":"Compositi fibra di lino","trl":8,"replicabile":true,"ingredienti":["fibre_lino"]},{"nome":"Coffee leather","ingredienti":["alginato","fondi_caffe","olio_oliva","glicerina","cacl2"],"replicabile":true,"trl":3,"note":""},{"nome":"Orange peel leather","ingredienti":["pectina","bucce_agrumi","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Eggshell composite","ingredienti":["alginato","gusci_uovo","aceto","cacl2"],"replicabile":true,"trl":3,"note":""},{"nome":"Gelatina+Juta","ingredienti":["gelatina","fibre_juta","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Gelatina+Canapa","ingredienti":["gelatina","fibre_canapa","glicerina"],"replicabile":true,"trl":3,"note":""},{"nome":"Agar+Juta","ingredienti":["agar","fibre_juta","glicerina"],"replicabile":true,"trl":3,"note":""}],"n_documentati":41,"n_replicabili":23,"matrici":[{"famiglia":"PROTEINA","ingredienti":["Gelatina Alimentare","Caseina","Albumina (Albume d'uovo)","Cheratina","Zeina"],"ingredienti_id":["gelatina","caseina","albumina","cheratina","zeina"]},{"famiglia":"POLISACCARIDE_NEUTRO","ingredienti":["Agar Agar","Amido di Mais (Maizena)","Amido di Patata","Gomma di Guar","Gomma Xantana","Amido di Tapioca (Manioca)"],"ingredienti_id":["agar","amido_mais","amido_patata","gomma_guar","xantana","amido_tapioca"]},{"famiglia":"POLISACCARIDE_ANIONICO","ingredienti":["Alginato di Sodio","Carragenina","Pectina"],"ingredienti_id":["alginato","carragenina","pectina"]},{"famiglia":"COLTURA","ingredienti":["SCOBY (Kombucha)","Micelio Fungino","Batteri (colture)"],"ingredienti_id":["scoby","micelio"]},{"famiglia":"RESINA_LIPIDE","ingredienti":["Cera di Carnauba","Cera d'Api","Gommalacca (Shellac)","Colofonia (Pece Greca)","Olio di Tung","Olio di Oliva","Acido Stearico"],"ingredienti_id":["cera_carnauba","cera_api","gommalacca","colofonia","olio_tung","olio_oliva","acido_stearico"]}],"modificatori":[{"famiglia":"CARICA","ingredienti":["Fondi di Caffè","Cellulosa (Carta Riciclata)","Fibre di Cotone","Fibre di Lino","Caolino (Argilla Bianca)","Gusci d'Uovo Macinati","Carbonato di Calcio (CaCO₃)","Grafite Naturale","Paglia","Segatura/Farina di legno","Fibre di Canapa","Fibre di Juta","Bucce di Agrumi","Cenere di Legno","Pula di Riso","Gesso (Solfato di Calcio)","Canapa (Hemp Hurd)"],"ingredienti_id":["fondi_caffe","cellulosa_carta","fibre_cotone","fibre_lino","caolino","gusci_uovo","carbonato_calcio","grafite","paglia","segatura","fibre_canapa","fibre_juta","bucce_agrumi","cenere_legno","pula_riso","gesso","canapa_hurd"]},{"famiglia":"PLASTIFICANTE","ingredienti":["Glicerina (Glicerolo)","Sorbitolo","Olio di Lino"],"ingredienti_id":["glicerina","sorbitolo","olio_lino"]},{"famiglia":"SALE_RETICOLANTE","ingredienti":["Cloruro di Calcio (CaCl2)","Tannini (Acido Tannico)","Allume di Potassio","Lattato di Calcio","Borace","Urea","Cloruro di Potassio (KCl)","Tè nero forte (reticolante)"],"ingredienti_id":["cacl2","tannini","allume","lattato_calcio","borace","urea","kcl","te_nero_forte"]},{"famiglia":"COLORANTE","ingredienti":["Curcuma","Spirulina","Paprika","Carbone Vegetale Attivo","Ossidi di Ferro"],"ingredienti_id":["curcuma","spirulina","paprika","carbone_vegetale","ossido_ferro"]},{"famiglia":"ADDITIVO","ingredienti":["Lecitina","Acido Citrico","Aceto (Acido Acetico)","Oli Essenziali","Bicarbonato di Sodio","Zucchero","Tè nero","Sapone (tensioattivo)","Alcool Etilico (Etanolo)","Sale da Cucina (NaCl)","Aquafaba"],"ingredienti_id":["lecitina","acido_citrico","aceto","oli_essenziali","bicarbonato","zucchero","te_nero","sapone","alcool","sale","aquafaba"]}],"warnings":[{"problema":"Fibre non bagnate","effetto":"Adesione matrice-rinforzo scarsa"},{"problema":"Troppo rinforzo","effetto":"Matrice non lega tutto"},{"problema":"Fibre non orientate","effetto":"Resistenza non ottimale"}]}}};

// --- MATERIALI_DATA ---
const MATERIALI_DATA = {
 "metadata": {
 "versione": "6.0",
 "data": "2025-01",
 "descrizione": "Database biomateriali: 14 documentati DIY + 34 in progress LAB",
 "fonti": {
 "documentati": "Selezione DIY da SUPER_DB_materials_189",
 "in_progress": "Test F3 Lab Accademia Albertina 2024-25"
 },
 "note_versione": "v6.0: Link e credits completi per tutte le 32 ricette documentate",
 "ultimo_aggiornamento": "2026-02-10"
 },
 "statistiche": {
 "totale": 69,
 "documentati": {
 "totale": 34,
 "replicabili": 34,
 "industriali": 0
 },
 "in_progress": {
 "totale": 35,
 "trl_1_rosa": 18,
 "trl_2_bianco": 15,
 "trl_3_verde": 2
 }
 },
 "legenda_trl": {
 "1": {
 "colore": "rosa",
 "desc": "Sperimentale - problemi aperti"
 },
 "2": {
 "colore": "bianco",
 "desc": "Funziona - non ancora validato"
 },
 "3": {
 "colore": "verde",
 "desc": "Validato - risultati replicabili"
 },
 "4-6": {
 "colore": "-",
 "desc": "Sviluppo (TRL standard)"
 },
 "7-9": {
 "colore": "-",
 "desc": "Industriale/Commerciale"
 }
 },
 "materiali_documentati": [
 {
 "id": 1,
 "name": "Bio-resine epossidiche",
 "subtitle": "Resine vegetali strutturali",
 "category": "BIO-BASED",
 "trl": 8,
 "applications": "Compositi nautica, sport",
 "companies": "Sicomin, Entropy Resins",
 "description": "Le bio-resine epossidiche sono sistemi termoindurenti in cui parte o tutti i componenti derivano da fonti rinnovabili invece che dal petrolio. La sfida è sostituire il bisfenolo A (BPA) - componente tradizionale delle epossidiche, noto interferente endocrino - con molecole bio-based mantenendo le prestazioni meccaniche e la processabilità.\n\nLe fonti principali sono oli vegetali epossidati (lino, soia, ricino), lignina, tannini, e cardanolo (dal guscio dell'anacardo). Il contenuto bio può variare dal 20% al 100% secondo la formulazione. Le prestazioni delle migliori bio-epossidiche raggiungono 70-90% delle epossidiche petrolchimiche.\n\nAl tatto e visivamente le bio-resine indurite sono indistinguibili dalle convenzionali: rigide, lucide, trasparenti o ambrate secondo la formulazione. La lavorazione è simile: miscelazione bicomponente, applicazione liquida, indurimento a temperatura ambiente o accelerato con calore.\n\nApplicazioni attuali includono compositi per nautica e sport (Entropy Resins Super Sap usata da surfisti eco-conscious), coating protettivi, adesivi strutturali, e matrici per biocompositi. La sfida è raggiungere prestazioni e costi competitivi con le epossidiche tradizionali per applicazioni high-performance.",
 "properties": "Da oli vegetali, 30-100% bio",
 "sensory": {
 "tactile": "Liscia e dura una volta indurita, superficie lucida",
 "visual": "Trasparente o leggermente ambrata, ottima chiarezza",
 "thermal": "Neutro, bassa conducibilità",
 "acoustic": "Suono rigido, risonante",
 "olfactive": "Odore meno pungente delle resine fossili"
 },
 "aesthetic": {
 "appearance": "Artificiale raffinato, simile a resine tradizionali",
 "finish": "Liscio lucido o satinato",
 "aging": "Stabile, non biodegrada (termoindurente)",
 "transparency": "Trasparente o traslucido"
 },
 "ethical": {
 "sustainability": "Medio-Alto",
 "origin": "Rinnovabile - da oli di lino, soia, ricino",
 "biodegradability": "Non biodegradabile (termoindurente reticolato)",
 "bio_content": "30-100%",
 "circular_economy": "Parziale - difficile riciclo termoindurenti",
 "certifications": "USDA BioPreferred"
 },
 "specs_text": "'¢ Contenuto bio: 20-100%\n'¢ Prestazioni: 70-90% delle petrolchimiche\n'¢ Viscosità e processabilità: comparabili",
 "ingredienti_correlati": [
 "colofonia",
 "olio_lino",
 "olio_tung"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "bisfenolo A o equivalente bio"
 ],
 "fonte": "Ricerca industriale",
 "url": "https://www.entropyresins.com/technology/super-sap",
 "link_risorse": [
 {
 "titolo": "Entropy Resins - Super Sap Bio-based Epoxy",
 "url": "https://www.entropyresins.com/technology/super-sap"
 },
 {
 "titolo": "Sicomin - Bio-resine epossidiche",
 "url": "https://www.sicomin.com/"
 }
 ],
 "credits": {
 "aziende": [
 "Entropy Resins (USA)",
 "Sicomin (Francia)"
 ],
 "note": "Pionieri delle resine epossidiche bio-based per nautica e sport"
 }
 },
 {
 "id": 2,
 "name": "Chitosano",
 "subtitle": "Chitina deacetilata antimicrobica",
 "category": "BIO-BASED",
 "trl": 8,
 "applications": "Medicale, trattamento acque",
 "companies": "Kitozyme, Primex",
 "description": "Il chitosano è la forma deacetilata della chitina - ottenuto trattando la chitina con basi forti che rimuovono i gruppi acetile. Questa modifica chimica trasforma il polimero da insolubile a solubile in soluzioni acide diluite, e gli conferisce carica positiva che lo rende naturalmente antibatterico e capace di legare molecole cariche negativamente.\n\nAl tatto il chitosano in film è flessibile, liscio, simile a plastica sottile. In gel è viscoso e appiccicoso. La proprietà tattile più notevole è l'effetto \"stringente\" sulla pelle - il chitosano lega le proteine superficiali dando sensazione di astringenza, sfruttata in cosmetica.\n\nLe proprietà antibatteriche derivano dalla carica positiva: i batteri (carica negativa superficiale) vengono attratti e la loro membrana viene destabilizzata. Questo rende il chitosano interessante per packaging alimentare attivo, medicazioni, e trattamenti tessili antimicrobici.\n\nApplicazioni commerciali: medicazioni per ferite (Hemcon, accelera la coagulazione), coating per semi (protezione da funghi), trattamento acque (flocculante naturale), cosmetica (maschere, creme), e integratori alimentari (assorbe grassi, controverso). La varietà di applicazioni riflette la versatilità della molecola.",
 "properties": "Antimicrobico, chelante metalli",
 "sensory": {
 "tactile": "Liscio flessibile in film, gel morbido idratante",
 "visual": "Trasparente o leggermente giallastro",
 "thermal": "Neutro",
 "acoustic": "Sordo",
 "olfactive": "Inodore se purificato"
 },
 "aesthetic": {
 "appearance": "Artificiale pulito, aspetto plastico naturale",
 "finish": "Liscio, gel o film",
 "aging": "Biodegrada, stabile in uso",
 "transparency": "Trasparente a traslucido"
 },
 "ethical": {
 "sustainability": "Alto",
 "origin": "Rinnovabile - da chitina (scarti crostacei) + trattamento alcalino",
 "biodegradability": "Completamente biodegradabile",
 "bio_content": "100%",
 "circular_economy": "Chiusa - da scarti",
 "certifications": "Medical grade disponibili"
 },
 "specs_text": "'¢ Grado deacetilazione: 60-95%\n'¢ Solubilità: acidi diluiti\n'¢ Peso molecolare: 50.000-2.000.000 Da",
 "ingredienti_correlati": [
 "chitosano",
 "acido_citrico"
 ],
 "replicabile_lab": true,
 "fonte": "Letteratura scientifica",
 "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10342135/",
 "link_risorse": [
 {
 "titolo": "Fabricademy - Chitosan bioplastic (foto processo)",
 "url": "https://class.textile-academy.org/2022/annah-sangosanya/assignments/week06/"
 },
 {
 "titolo": "BioPills - Ricetta bioplastica dal chitosano (IT)",
 "url": "https://www.biopills.net/la-ricetta-per-la-bioplastica-gamberi-in-aceto/"
 }
 ],
 "credits": {
 "aziende": [
 "Kitozyme (Belgio)",
 "Primex (Islanda)"
 ],
 "note": "Leader mondiali nella produzione di chitosano da scarti di crostacei"
 }
 },
 {
 "id": 3,
 "name": "Bio-cementi MICP",
 "subtitle": "Cemento da batteri",
 "category": "BIO-BASED",
 "trl": 6,
 "applications": "Edilizia, restauro",
 "companies": "BioMason, Basilisk",
 "description": "Il bio-cemento MICP (Microbially Induced Calcium Carbonate Precipitation) rappresenta una rivoluzione nel mondo dei materiali cementizi: invece di cuocere calcare a 1450°C con enormi emissioni di CO2, i batteri producono carbonato di calcio a temperatura ambiente attraverso processi metabolici naturali.\n\nIl processo sfrutta batteri ureolitici (come Sporosarcina pasteurii) che, in presenza di urea e calcio, precipitano cristalli di calcite (CaCO₃) che legano insieme i granuli di sabbia o aggregati. Il risultato è un materiale cementizio prodotto senza combustione, con riduzione delle emissioni fino al 90% rispetto al cemento Portland tradizionale.\n\nAl tatto il bio-cemento MICP è simile al calcestruzzo tradizionale: duro, granulare, con superficie porosa. Visivamente presenta colorazione beige-grigia naturale, spesso con texture più organica e irregolare rispetto al cemento convenzionale.\n\nBioMason è l'azienda leader: produce mattoni \"cresciuti\" biologicamente in 4-5 giorni invece che cotti in forno. I mattoni vengono formati in stampi, inoculati con batteri e nutriti con soluzione di calcio e urea. Il processo avviene a temperatura ambiente, eliminando completamente la cottura.",
 "properties": "Batteri producono CaCO3",
 "sensory": {
 "tactile": "Duro rigido, superficie granulosa-ruvida pietra",
 "visual": "Grigio-beige opaco, aspetto cementizio naturale",
 "thermal": "Freddo-fresco, alta massa termica",
 "acoustic": "Risonante, suono pietroso",
 "olfactive": "Minerale-terroso leggero"
 },
 "aesthetic": {
 "appearance": "Naturale minerale, aspetto pietra/cemento",
 "finish": "Ruvido granuloso o levigato",
 "aging": "Carbonatazione continua (migliora), patina naturale",
 "transparency": "Opaco"
 },
 "ethical": {
 "sustainability": "Alto",
 "origin": "Bio-minerale - crescita batterica (Sporosarcina pasteurii) + CaCO3",
 "biodegradability": "Non biodegradabile (mineralizza)",
 "bio_content": "Processo biologico, risultato minerale",
 "circular_economy": "Parziale - cattura CO2 durante crescita",
 "certifications": "Varie costruzioni (in sviluppo)"
 },
 "specs_text": "'¢ Resistenza: 20-40 MPa (compressione)\n'¢ Tempo crescita: 4-7 giorni\n'¢ Riduzione CO2: fino a 90%",
 "ingredienti_correlati": [
 "carbonato_calcio",
 "cacl2"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "batteri ureolitici (Sporosarcina pasteurii)",
 "urea"
 ],
 "fonte": "Bioplastic Cook Book",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3",
 "link_risorse": [
    {
      "titolo": "Frontiers in Materials — MICP: Concepts and Applications in Bioconcrete (2019)",
      "url": "https://www.frontiersin.org/journals/materials/articles/10.3389/fmats.2019.00126/full"
    },
    {
      "titolo": "ASM Journals — Optimizing Biological CaCO₃ Precipitation by S. pasteurii (2023)",
      "url": "https://journals.asm.org/doi/10.1128/aem.01794-22"
    }
  ],
 "credits": {
 "designer": [
 "Margaret Dunne (Bioplastic Cook Book)",
 "Loes Bogers (TextileLab Waag)"
 ],
 "istituzioni": [
 "Fabricademy",
 "TextileLab Amsterdam"
 ],
 "note": "Ricetta base diffusa nella comunità maker dal 2014"
 }
 },
 {
 "id": 4,
 "name": "Starch TPS",
 "subtitle": "Amido termoplastico",
 "category": "BIO-BASED",
 "trl": 9,
 "applications": "Sacchetti biodegradabili",
 "companies": "Novamont (Mater-Bi)",
 "description": "L'amido termoplastico (TPS) è il biopolimero più economico e diffuso per applicazioni monouso compostabili. Si ottiene plastificando l'amido nativo (mais, patata, tapioca) con glicerolo o altri plastificanti, rendendolo processabile come una plastica convenzionale.\n\nL'amido è un polisaccaride di riserva energetica delle piante. Nativo è granulare e non termoplastico; la plastificazione distrugge la struttura cristallina e permette la fusione e lavorazione. Il TPS puro è sensibile all'umidità, per cui viene spesso blendato con altri biopolimeri (PLA, PBAT, PBS).\n\nAl tatto il TPS è simile alle plastiche convenzionali ma spesso leggermente più rigido. Visivamente è tipicamente opaco, bianco-crema. È sensibile all'umidità: assorbe acqua dall'ambiente diventando più flessibile.\n\nNovamont con Mater-Bi è il leader mondiale: i sacchetti per raccolta differenziata organico in Italia sono prevalentemente in Mater-Bi. È compostabile domestico secondo OK Compost HOME.",
 "properties": "Economico, compostabile domestico",
 "sensory": {
 "tactile": "Morbido flessibile, leggermente appiccicoso se umido",
 "visual": "Opaco bianco-crema, aspetto amidaceo",
 "thermal": "Tiepido, assorbe umidità",
 "acoustic": "Sordo, assorbente",
 "olfactive": "Odore amidaceo-cerealicolo"
 },
 "aesthetic": {
 "appearance": "Naturale grezzo, aspetto vegetale",
 "finish": "Opaco morbido",
 "aging": "Degrada rapidamente con umidità",
 "transparency": "Opaco"
 },
 "ethical": {
 "sustainability": "Molto Alto",
 "origin": "Rinnovabile - amido mais, patate, tapioca",
 "biodegradability": "Compostabile domestico e industriale",
 "bio_content": "100%",
 "circular_economy": "Chiusa",
 "certifications": "EN 13432, OK Compost HOME"
 },
 "specs_text": "'¢ Bio-content: 100% (TPS puro)\n'¢ Compostabilità: domestica (OK Compost HOME)\n'¢ Degradazione: 3-6 mesi",
 "ingredienti_correlati": [
 "amido_mais",
 "amido_patata",
 "glicerina",
 "sorbitolo",
 "acqua"
 ],
 "replicabile_lab": true,
 "fonte": "Materiom",
 "url": "https://labpastoe.gitbook.io/lab-pastoe/tutorials/bioplastics/starch-bioplastics",
 "link_risorse": [
    {
      "titolo": "Trinity College - Bioplastics (amido)",
      "url": "https://trinitycollegetrees.wordpress.com/2017/04/07/bioplastics/"
    },
    {
      "titolo": "Bioplastic Cook Book - Ricettario bioplastiche",
      "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3"
    },
    {
      "titolo": "Zanichelli - Produzione bioplastica da amido (IT, PDF)",
      "url": "https://online.scuola.zanichelli.it/industriagroalimentare2ed-files/laboratorio/p157_Produzione_bioplastica.pdf"
    }
  ],
 "credits": {
 "autori": [
 "E.S. Stevens (Green Plastics book)"
 ],
 "istituzioni": [
 "Materiom",
 "Fabricademy"
 ],
 "note": "Ricetta classica documentata nel libro 'Green Plastics' e poi diffusa da Materiom"
 }
 },
 {
 "id": 5,
 "name": "Kombucha Leather",
 "subtitle": "Pelle da SCOBY fermentato",
 "category": "BIO-BASED",
 "trl": 6,
 "applications": "Moda sostenibile, accessori, packaging",
 "companies": "Modern Synthesis, ricerca",
 "description": "La Kombucha Leather è un materiale simil-pelle prodotto dalla coltura simbiotica di batteri e lieviti (SCOBY) utilizzata per fermentare il tè kombucha. Durante la fermentazione, i batteri Acetobacter producono una pellicola di cellulosa batterica pura che galleggia sulla superficie del liquido.\n\nIl processo è semplice ma lento: tè zuccherato viene inoculato con SCOBY e lasciato fermentare per 2-4 settimane. La pellicola viene poi raccolta, lavata, e trattata per ottenere un materiale flessibile simile alla pelle.\n\nAl tatto la kombucha leather è morbida e flessibile quando idratata, più rigida quando secca. La texture è fibrosa e organica. Visivamente è traslucida color ambra quando sottile, opaca e più scura quando spessa.\n\nSuzanne Lee con BioCouture ha pionierato il campo dal 2003, \"crescendo\" giacche e accessori. La sfida principale è la resistenza all'acqua: la cellulosa batterica è idrofila. Modern Synthesis sta sviluppando processi industrializzati.",
 "properties": "Crescita batterica, biodegradabile, leather-like",
 "sensory": {
 "tactile": "Morbido flessibile simil-pelle, texture fibrosa",
 "visual": "Marrone-beige traslucido, aspetto organico",
 "thermal": "Neutro, traspirante",
 "acoustic": "Assorbente",
 "olfactive": "Lieve odore acetico-organico"
 },
 "aesthetic": {
 "appearance": "Bio-fabricated organico, aspetto naturale unique",
 "finish": "Variabile secondo lavorazione",
 "aging": "Biodegradabile, sensibile umidità",
 "transparency": "Traslucido a opaco"
 },
 "ethical": {
 "sustainability": "Molto Alto",
 "origin": "Bio-based - coltura SCOBY da tè zuccherato",
 "biodegradability": "Completamente biodegradabile",
 "bio_content": "100%",
 "circular_economy": "Chiusa",
 "certifications": "N/A (emergente)"
 },
 "specs_text": "'¢ Tempo crescita: 2-4 settimane\n'¢ Spessore: 1-10+ mm\n'¢ Biodegradazione: completa",
 "ingredienti_correlati": [
 "scoby",
 "glicerina",
 "aceto"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "tè zuccherato"
 ],
 "fonte": "Letteratura scientifica + Gastronomia molecolare",
 "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/alginatefoil/",
 "link_risorse": [
    {
      "titolo": "Suzanne Lee - Grow Your Own Clothes (TED)",
      "url": "https://www.ted.com/talks/suzanne_lee_grow_your_own_clothes"
    },
    {
      "titolo": "Science Buddies - Vegan Kombucha Leather",
      "url": "https://www.sciencebuddies.org/science-fair-projects/project-ideas/GreenChem_p010/green-chemistry/vegan-kombucha-leather"
    },
    {
      "titolo": "PMC - Bacterial Cellulose Applications",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10386690/"
    }
  ],
 "credits": {
 "designer": [
 "Loes Bogers (TextileLab Waag)",
 "Cecilia Raspanti (Fabricademy)"
 ],
 "chef": [
 "Ferran Adrià (El Bulli) - pioniere sferificazione"
 ],
 "note": "Tecnica egg-box di reticolazione con Ca2+ brevettata da W.J.S. Peschardt 1940s, popolarizzata da Adrià 2003"
 }
 },
 {
 "id": 6,
 "name": "Resine naturali",
 "subtitle": "Resine vegetali (colofonia, dammar, lacca)",
 "category": "BIO-BASED",
 "trl": 9,
 "applications": "Vernici, adesivi, cosmetica, encausto",
 "companies": "Kremer Pigmente, Zecchi, fornitori tradizionali",
 "description": "Le resine naturali sono essudati vegetali che induriscono all'aria, utilizzati dall'umanità da millenni come adesivi, vernici, incensi e medicinali. Le principali includono: colofonia (da pini, la più abbondante), dammar (dal Sud-Est asiatico), mastice, copale, gommalacca, e sandracca.\n\nChimicamente sono miscele complesse di terpeni e acidi resinici. Sono solubili in alcoli e oli, e formano film duri e brillanti per evaporazione del solvente.\n\nAl tatto le resine naturali sono dure e fragili allo stato solido, appiccicose quando riscaldate. Visivamente sono trasparenti con colorazioni ambra-dorate. L'odore è distintivo: balsamico, vagamente vanigliato. Bruciate producono incensi aromatici.\n\nLe applicazioni tradizionali includono vernici per strumenti musicali (la \"vernice dei Stradivari\"), pittura ad olio, sigillanti, incensi. Applicazioni moderne: additivi per inchiostri e adesivi, ingredienti cosmetici.",
 "properties": "Adesive, filmogene, naturali",
 "sensory": {
 "tactile": "Duro fragile glassy, sticky se soft/heated",
 "visual": "Ambra-giallo trasparente, aspetto prezioso",
 "thermal": "Ammorbidisce a caldo",
 "acoustic": "Fragile",
 "olfactive": "Aromatico caratteristico (pino, incenso)"
 },
 "aesthetic": {
 "appearance": "Ambrato naturale luminoso",
 "finish": "Lucido caldo profondo",
 "aging": "Scurisce, può craqueler",
 "transparency": "Trasparente ambrato"
 },
 "ethical": {
 "sustainability": "Alto",
 "origin": "Rinnovabile - essudati vegetali (pino, damar, lacca)",
 "biodegradability": "Biodegradabile",
 "bio_content": "100%",
 "circular_economy": "Naturale",
 "certifications": "Naturali, tradizionali"
 },
 "specs_text": "'¢ Punto fusione: 70-150°C\n'¢ Solubilità: alcoli, essenze, oli\n'¢ Produzione globale colofonia: ~1.2 Mton/anno",
 "ingredienti_correlati": [
 "colofonia",
 "gommalacca"
 ],
 "replicabile_lab": true,
 "fonte": "TextileLab Waag",
 "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/biofoam/",
 "link_risorse": [
    {
      "titolo": "Natural Pigments - Resins, Gums and Balsams in Painting",
      "url": "https://www.naturalpigments.com/artist-materials/resins-balsams"
    },
    {
      "titolo": "Natural Pigments - Shellac: Applications and Use in Art",
      "url": "https://www.naturalpigments.com/artist-materials/shellac-use-art"
    }
  ],
 "credits": {
 "designer": [
 "Loes Bogers (TextileLab Amsterdam)"
 ],
 "istituzioni": [
 "TextileLab Waag",
 "Fabricademy"
 ],
 "note": "Sviluppo 2019-2020 per alternative al polistirolo"
 }
 },
 {
 "id": 7,
 "name": "Lino+Epoxy",
 "subtitle": "Composito naturale strutturale",
 "category": "BIOCOMPOSITI",
 "trl": 9,
 "applications": "Automotive, sport, Formula 1",
 "companies": "Bcomp",
 "description": "Il composito lino-epossidico rappresenta la punta di diamante dei biocompositi strutturali: fibre di lino europeo in matrice di resina epossidica, con prestazioni meccaniche che sfidano i compositi in fibra di vetro e, in alcune applicazioni, si avvicinano alla fibra di carbonio.\n\nLe fibre di lino (Linum usitatissimum) sono coltivate principalmente in Francia, Belgio e Paesi Bassi - l'Europa produce l'80% del lino mondiale. Le fibre tecniche, lunghe 60-80 cm, hanno resistenza tensile di 800-1500 MPa e modulo elastico di 50-70 GPa. Il rapporto resistenza/peso è eccellente grazie alla bassa densità (1,4 g/cm³ vs 2,5 del vetro).\n\nAl tatto il composito lino-epoxy è rigido e solido, con superficie che può mostrare la texture del tessuto di lino sottostante - un pattern naturale elegante che molti designer lasciano a vista come elemento estetico distintivo. Visivamente il colore è beige-dorato naturale delle fibre, spesso visibili attraverso la resina semi-trasparente.\n\nIl vantaggio del lino rispetto al vetro è anche acustico: lo smorzamento delle vibrazioni è 3-5 volte superiore, cruciale per strumenti musicali, articoli sportivi, e interni automotive. Bcomp (Svizzera) ha sviluppato powerRibs e ampliTex, utilizzati da Porsche nella 718 Cayman GT4 RS per pannelli carrozzeria. Nell'America's Cup, diversi team usano compositi lino per componenti non strutturali.",
 "properties": "Performance vs fibra vetro",
 "sensory": {
 "tactile": "Rigido-resistente, superficie liscia con texture fibre visibili",
 "visual": "Beige-verde naturale con pattern tessile",
 "thermal": "Neutro-tiepido, isolante moderato",
 "acoustic": "Smorzante, meno risonante di GFRP",
 "olfactive": "Lievemente vegetale-resinoso"
 },
 "aesthetic": {
 "appearance": "Naturale-tecnico, bio-composito visibile",
 "finish": "Liscio semi-lucido con texture fibre",
 "aging": "Stabile, mantiene proprietà meccaniche",
 "transparency": "Opaco con traslucenza parziale resina"
 },
 "ethical": {
 "sustainability": "Medio-Alto",
 "origin": "Ibrido - fibre lino rinnovabili + resina (fossile o bio)",
 "biodegradability": "Non biodegradabile (resina epoxy)",
 "bio_content": "50-60% (fibre)",
 "circular_economy": "Parziale - difficile separazione",
 "certifications": "ISO 14001"
 },
 "specs_text": "'¢ Resistenza tensile fibre: 800-1500 MPa\n'¢ Modulo elastico: 50-70 GPa\n'¢ Densità: 1,4 g/cm³",
 "ingredienti_correlati": [
 "fibre_lino",
 "colofonia",
 "olio_lino"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "resina epossidica"
 ],
 "fonte": "Bioplastic Cook Book",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3",
 "link_risorse": [
    {
      "titolo": "PMC — Flax Fiber/Epoxy Composites with High Biobased Content (2023)",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10575258/"
    },
    {
      "titolo": "Easy Composites — Natural Flax Fibre Reinforcement in Composites (guida pratica)",
      "url": "https://www.easycomposites.co.uk/learning/flax-fibre-in-composites"
    }
  ],
 "credits": {
 "designer": [
 "Margaret Dunne (Bioplastic Cook Book)"
 ],
 "istituzioni": [
 "Fab Lab Barcelona"
 ],
 "note": "Foam ottenuto aerando miscela di amido cotto"
 }
 },
 {
 "id": 8,
 "name": "Basalto+Bio-resina",
 "subtitle": "Composito minerale-bio",
 "category": "BIOCOMPOSITI",
 "trl": 7,
 "applications": "Edilizia, infrastrutture",
 "companies": "Basaltex, Mafic",
 "description": "Il composito basalto-bioresina combina fibre minerali naturali (basalto vulcanico) con resine di origine biologica, creando un materiale ad alte prestazioni con impronta ambientale ridotta. Il basalto offre proprietà simili alla fibra di vetro ma con origine naturale e produzione potenzialmente più sostenibile.\n\nLa fibra di basalto si produce fondendo roccia basaltica a 1400-1500°C e trafilando filamenti continui di 9-23 μm. Le proprietà sono intermedie tra vetro E e vetro S: resistenza tensile 2800-4800 MPa, modulo 85-95 GPa, eccellente resistenza chimica e termica. A differenza del vetro, non contiene additivi e la materia prima è abbondante e naturale.\n\nAl tatto il composito è simile al GFRP: rigido, duro, con superficie liscia o texturizzata secondo la finitura. Visivamente la fibra di basalto è marrone-dorata (vs bianco del vetro), conferendo un'estetica distintiva ai laminati a vista. La combinazione con bio-resine (da olio di lino, ricino, o epoxy parzialmente bio) riduce la dipendenza dal petrolio.\n\nLe applicazioni sfruttano la resistenza al fuoco (superiore al vetro), alla corrosione, e all'abrasione: costruzioni (rinforzo calcestruzzo), automotive, nautica, e applicazioni industriali in ambienti aggressivi. Mafic, Kamenny Vek e altri produttori stanno espandendo la capacità produttiva.",
 "properties": "Resistenza chimica, no corrosione",
 "sensory": {
 "tactile": "Rigido duro, superficie ruvida",
 "visual": "Nero-marrone scuro, aspetto tecnico",
 "thermal": "Neutro, buon isolante",
 "acoustic": "Moderatamente assorbente",
 "olfactive": "Lieve odore resina"
 },
 "aesthetic": {
 "appearance": "Tecnico scuro, aspetto high-tech",
 "finish": "Ruvido o liscio secondo finitura",
 "aging": "Molto stabile, resiste UV e chimici",
 "transparency": "Opaco"
 },
 "ethical": {
 "sustainability": "Medio",
 "origin": "Ibrido - basalto (minerale vulcanico) + bio-resina",
 "biodegradability": "Non biodegradabile",
 "bio_content": "30-50% (solo resina)",
 "circular_economy": "Parziale",
 "certifications": "Varie costruzioni"
 },
 "specs_text": "'¢ Resistenza tensile fibra: 2800-4800 MPa\n'¢ Modulo elastico: 85-95 GPa\n'¢ Resistenza termica: fino a 700°C",
 "ingredienti_correlati": [
 "colofonia",
 "olio_lino"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "fibra di basalto"
 ],
 "fonte": "Letteratura packaging",
 "url": "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/carnauba-wax",
 "link_risorse": [
    {
      "titolo": "PMC - Basalt Fibre-Reinforced Laminates with Bio Resin (2024)",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11281058/"
    },
    {
      "titolo": "ScienceDirect - Basalt fibers: sustainable green material for composites",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0950061824019767"
    }
  ],
 "credits": {
 "origine": "Brasile (Copernicia prunifera palm)",
 "note": "FDA GRAS, E903 in EU. Usata dal 1900s per lucidatura e coating alimentare"
 }
 },
 {
 "id": 9,
 "name": "MycoComposite",
 "subtitle": "Micelio + scarti agricoli",
 "category": "BIOCOMPOSITI",
 "trl": 7,
 "applications": "Packaging (Dell, IKEA)",
 "companies": "Ecovative Design",
 "description": "Il MycoComposite è un materiale rivoluzionario: il micelio fungino (la rete di filamenti dei funghi) cresce attraverso scarti agricoli, legandoli in una struttura solida senza energia, senza colle, senza processi chimici. Il fungo fa tutto il lavoro, trasformando rifiuti in materiali utili.\n\nIl processo è elegante: scarti agricoli (paglia, lolla, trucioli) vengono sterilizzati e inoculati con micelio, tipicamente di funghi saprofiti come Pleurotus o Ganoderma. In 5-7 giorni a temperatura ambiente, il micelio colonizza completamente il substrato creando una rete tridimensionale che funge da legante naturale. La crescita viene poi arrestata con essiccazione o trattamento termico.\n\nAl tatto il mycocomposito è simile al polistirolo espanso o al sughero: leggero, caldo, con superficie leggermente irregolare e texture organica. Visivamente è beige-marrone, chiaramente naturale. Può essere modellato in qualsiasi forma usando stampi. La densità e le proprietà meccaniche dipendono dal substrato e dalla specie fungina.\n\nEcovative Design (USA) ha pionierato il campo con packaging alternativo al polistirolo per Dell, IKEA, e altri. MycoWorks e Bolt Threads sviluppano \"pelle\" di micelio (Mylo) per fashion. IKEA sta testando mycocomposite per packaging e componenti di arredo. Il materiale è home-compostabile: a fine vita diventa fertilizzante.",
 "properties": "100% bio, cresce in stampi",
 "sensory": {
 "tactile": "Leggero, leggermente ruvido, simile a polistirolo denso",
 "visual": "Bianco-crema con texture organica",
 "thermal": "Tiepido, isolante",
 "acoustic": "Fonoassorbente, suono sordo",
 "olfactive": "Lieve odore fungino (attenuato)"
 },
 "aesthetic": {
 "appearance": "Naturale organico, pattern irregolare",
 "finish": "Ruvido poroso naturale",
 "aging": "Stabile se essiccato, compostabile a fine vita",
 "transparency": "Opaco"
 },
 "ethical": {
 "sustainability": "Molto Alto",
 "origin": "Rinnovabile - micelio fungo + scarti agricoli",
 "biodegradability": "Completamente compostabile",
 "bio_content": "100%",
 "circular_economy": "Chiusa - da scarti a compost",
 "certifications": "Cradle to Cradle, compostabile"
 },
 "specs_text": "'¢ Tempo crescita: 5-7 giorni\n'¢ Densità: 50-200 kg/m³\n'¢ Compostabilità: domestica (4-6 settimane)",
 "ingredienti_correlati": [
 "micelio",
 "fondi_caffe",
 "cellulosa_carta"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "substrato agricolo (paglia, lolla)"
 ],
 "fonte": "Letteratura scientifica",
 "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10342135/",
 "link_risorse": [
    {
      "titolo": "MDPI - Mycelium-Based Composites",
      "url": "https://www.mdpi.com/2304-8158/12/18/3519"
    },
    {
      "titolo": "Nature - Mycelium Composite Materials",
      "url": "https://www.nature.com/articles/s41598-024-61377-9"
    },
    {
      "titolo": "Ecovative - Grow.bio",
      "url": "https://grow.bio/"
    }
  ],
 "credits": {
 "aziende": [
 "Kitozyme",
 "Primex"
 ],
 "note": "Film antibatterico da chitina deacetilata, carica positiva destabilizza membrane batteriche"
 }
 },
 {
 "id": 10,
 "name": "Wood-plastic composites",
 "subtitle": "WPC legno-plastica",
 "category": "BIOCOMPOSITI",
 "trl": 9,
 "applications": "Decking, arredo esterno",
 "companies": "Trex, TimberTech, Fiberon",
 "description": "I Wood-Plastic Composites (WPC) sono materiali compositi industriali che combinano farina o fibre di legno con polimeri termoplastici (PP, PE, PVC). Sono il biocomposito più diffuso in assoluto, con milioni di tonnellate prodotte annualmente per decking, rivestimenti, e profili.\n\nLa composizione tipica è 50-70% legno (farina, fibre, trucioli) e 30-50% plastica. La matrice plastica conferisce resistenza all'umidità, agli insetti, e alla marcescenza - i problemi principali del legno naturale in esterni. Il legno riduce il costo, aumenta la rigidezza, e dà aspetto naturale. I WPC si producono per estrusione e si lavorano come legno (taglio, foratura, avvitatura).\n\nAl tatto i WPC sono simili al legno composito: rigidi, caldi rispetto alla plastica pura, con superficie che può imitare la venatura del legno. Visivamente sono disponibili in colori \"legno\" (marrone, grigio, teak) con texture che replicano le finiture naturali. Non si scheggiano come il legno e non richiedono verniciatura periodica.\n\nLe applicazioni dominanti sono decking (terrazze, bordi piscina, pontili), rivestimenti esterni, recinzioni, e mobili da giardino. Trex, Fiberon, e UPM sono i maggiori produttori. Il mercato è maturo e in continua crescita come alternativa al legno tropicale (teak, ipé) per esterni.",
 "properties": "Simil-legno resistente a umidità",
 "sensory": {
 "tactile": "Rigido liscio, simil-legno plastico, caldo al tocco",
 "visual": "Marrone effetto legno, venatura artificiale o naturale",
 "thermal": "Si scalda al sole più del legno vero",
 "acoustic": "Suono plastico-legnoso",
 "olfactive": "Lieve odore plastico-legnoso"
 },
 "aesthetic": {
 "appearance": "Artificiale simil-legno, aspetto decking moderno",
 "finish": "Liscio o goffrato effetto legno",
 "aging": "Stabile, non marcisce, può sbiadire",
 "transparency": "Opaco"
 },
 "ethical": {
 "sustainability": "Medio",
 "origin": "Ibrido - scarti legno (50-70%) + PP/PE vergine o riciclato",
 "biodegradability": "Non biodegradabile",
 "bio_content": "50-70%",
 "circular_economy": "Parziale - riciclabile WPC",
 "certifications": "FSC Mix, ISO 14001"
 },
 "specs_text": "'¢ Contenuto legno: 50-70%\n'¢ Densità: 1.0-1.4 g/cm³\n'¢ Vita utile: 25+ anni",
 "ingredienti_correlati": [
 "cellulosa_carta"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "farina di legno",
 "polipropilene (PP) o PE"
 ],
 "fonte": "Bioplastic Cook Book",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3",
 "link_risorse": [
    {
      "titolo": "PMC — Critical Review on Wood-Based Polymer Composites: Processing and Properties (2022)",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8838915/"
    },
    {
      "titolo": "Oklahoma State University — What is Wood Plastic Composite? (guida tecnica)",
      "url": "https://extension.okstate.edu/fact-sheets/what-is-wood-plastic-composite.html"
    }
  ],
 "credits": {
 "designer": [
 "Margaret Dunne"
 ],
 "note": "Combinazione per bilanciare proprietà: gelatina (elasticità) + amido (rigidità)"
 }
 },
 {
 "id": 11,
 "name": "Bagasse (canna) composites",
 "subtitle": "Compositi da scarto canna zucchero",
 "category": "BIOCOMPOSITI",
 "trl": 8,
 "applications": "Packaging, stoviglie, pannelli",
 "companies": "Vegware, Eco-Products",
 "description": "I compositi di bagasse utilizzano il residuo fibroso della spremitura della canna da zucchero, uno dei più abbondanti waste agricoli del pianeta: 250-280 milioni di tonnellate/anno globali. Tradizionalmente bruciato per energia negli zuccherifici, il bagasse sta trovando applicazioni più nobili come rinforzo per compositi.\n\nIl bagasse contiene 40-50% cellulosa, 25-30% emicellulosa, e 20-25% lignina, con fibre lunghe 1-4 mm. Non ha le prestazioni delle fibre lunghe (lino, canapa) ma è essenzialmente gratuito come materia prima. Nei compositi, funge da filler/rinforzo riducendo il contenuto di plastica e il costo. Le proprietà meccaniche sono moderate ma sufficienti per molte applicazioni.\n\nAl tatto i compositi di bagasse sono simili ai wood-plastic composites: rigidi, con superficie che può variare da liscia a fibrosa. Visivamente il colore è beige-marrone chiaro. Il materiale è indistinguibile da altri compositi legno-plastica.\n\nLe applicazioni principali sono nelle stesse categorie dei WPC: decking, pannelli, imballaggi rigidi. Ma anche packaging monouso: piatti, vassoi, contenitori food-service in bagasse pressato (senza matrice plastica, 100% naturale) sono diffusissimi come alternativa al polistirolo. Eco-Products, Vegware, e molti altri producono stoviglie in bagasse compostabili.",
 "properties": "Da scarto zuccheriero abbondante",
 "sensory": {
 "tactile": "Rigido leggero, texture fibrosa fine",
 "visual": "Beige-marrone chiaro, aspetto naturale",
 "thermal": "Neutro, isolante",
 "acoustic": "Assorbente",
 "olfactive": "Lieve odore vegetale dolciastro"
 },
 "aesthetic": {
 "appearance": "Naturale pulito, aspetto carta pressata",
 "finish": "Semi-liscio, texture fine",
 "aging": "Compostabile",
 "transparency": "Opaco"
 },
 "ethical": {
 "sustainability": "Molto Alto",
 "origin": "Rinnovabile - scarto lavorazione canna da zucchero (100+ Mton/anno)",
 "biodegradability": "Completamente compostabile",
 "bio_content": "100%",
 "circular_economy": "Chiusa - valorizzazione scarto industriale",
 "certifications": "EN 13432, BPI compostable"
 },
 "specs_text": "'¢ Disponibilità: 250-280 Mton/anno\n'¢ Contenuto cellulosa: 40-50%\n'¢ Compostabilità: sì (bagasse puro)",
 "ingredienti_correlati": [
 "cellulosa_carta"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "bagasse (fibra canna da zucchero)"
 ],
 "fonte": "BioCouture / TED",
 "url": "https://www.ted.com/talks/suzanne_lee_grow_your_own_clothes",
 "link_risorse": [
    {
      "titolo": "MDPI - Sustainable Packaging from Bacterial Cellulose and Sugarcane Bagasse (2024)",
      "url": "https://www.mdpi.com/1996-1944/17/15/3732"
    },
    {
      "titolo": "Good Start Packaging - Guide to Sugarcane Fiber Packaging",
      "url": "https://www.goodstartpackaging.com/sugarcane-fiber-packaging-guide/"
    }
  ],
 "credits": {
 "designer": [
 "Suzanne Lee (BioCouture, fondatrice)",
 "Loes Bogers (TextileLab)"
 ],
 "aziende": [
 "BioCouture (UK)",
 "Modern Meadow (USA)",
 "Biofabricate"
 ],
 "istituzioni": [
 "Central Saint Martins",
 "TED Fellows"
 ],
 "note": "Suzanne Lee pioniera dal 2004, TED Talk 2011. SCOBY = Symbiotic Colony of Bacteria and Yeast"
 }
 },
 {
 "id": 12,
 "name": "Algae composites",
 "subtitle": "Compositi da alghe",
 "category": "BIOCOMPOSITI",
 "trl": 6,
 "applications": "Packaging, tessuti, schiume",
 "companies": "Algix, Bloom Foam",
 "description": "I compositi di alghe rappresentano la frontiera dei biomateriali: alghe marine (macro e micro) come fonte di polimeri, fibre, e filler per materiali innovativi. Le alghe crescono rapidamente senza terra arabile, senza acqua dolce, assorbendo CO2 e non competendo con l'agricoltura alimentare.\n\nLe alghe offrono diverse frazioni utilizzabili: alginati (polisaccaridi gelificanti), carragenina, agar, biomassa tal quale come filler, e persino bioplastiche (PHA da microalghe). I compositi possono usare alghe essiccate come rinforzo/filler in matrici plastiche, oppure alginati come matrici naturali. Le proprietà variano enormemente secondo la formulazione.\n\nAl tatto i compositi di alghe variano: possono essere rigidi (alghe come filler), flessibili (alginati plastificati), o spugnosi (schiume di alginato). Visivamente il colore è tipicamente verde-bruno, con texture che può mostrare la fibrosità delle alghe. L'aspetto \"marino\" è spesso valorizzato nel design.\n\nLe applicazioni emergenti includono: packaging biodegradabile (Evoware in Indonesia produce bustine edibili), filamenti per stampa 3D (Algix), schiume isolanti, e tessuti. La ricerca esplora alghe come feedstock per bioplastiche, biofuel, e prodotti chimici. È un settore in rapida evoluzione con molte startup innovative.",
 "properties": "Carbon negative, versatile",
 "sensory": {
 "tactile": "Variabile: flessibile (schiume) a rigido (compositi)",
 "visual": "Verde-marrone naturale, aspetto organico",
 "thermal": "Neutro a isolante",
 "acoustic": "Assorbente (schiume)",
 "olfactive": "Lieve odore marino (trattabile)"
 },
 "aesthetic": {
 "appearance": "Naturale organico marino",
 "finish": "Variabile secondo prodotto",
 "aging": "Biodegradabile",
 "transparency": "Opaco"
 },
 "ethical": {
 "sustainability": "Molto Alto",
 "origin": "Rinnovabile - alghe (bloom algae upcycling), carbon negative",
 "biodegradability": "Biodegradabile",
 "bio_content": "15-60% (blend con EVA o altri)",
 "circular_economy": "Chiusa - pulisce acque + cattura CO2",
 "certifications": "USDA Biobased"
 },
 "specs_text": "'¢ Crescita: alcune specie raddoppiano in ore\n'¢ Assorbimento CO2: elevato\n'¢ Biodegradabilità: marina (alghe pure)",
 "ingredienti_correlati": [
 "agar",
 "alginato"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "biomassa algale"
 ],
 "fonte": "Ecovative Design",
 "url": "https://grow.bio/",
 "link_risorse": [
    {
      "titolo": "PMC - Algal-Based Bioplastics: Global Trends and Commercialization (2024)",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11189328/"
    },
    {
      "titolo": "Packaging Digest - Algae's Role in Sustainable Packaging",
      "url": "https://www.packagingdigest.com/sustainability/algae-could-revolutionize-sustainable-packaging"
    },
    {
      "titolo": "WEF - Biodegradable Plastics from Spirulina Algae",
      "url": "https://www.weforum.org/stories/2023/08/biodegradable-plastics-spirulina-algae/"
    }
  ],
 "credits": {
 "fondatori": [
 "Eben Bayer",
 "Gavin McIntyre"
 ],
 "aziende": [
 "Ecovative Design (USA, fondata 2007)",
 "MyForest Foods",
 "Forager"
 ],
 "brevetti": "40+ brevetti in 31 paesi su MycoComposite™",
 "note": "Pionieri dei materiali a base micelio, Cradle to Cradle Gold certified"
 }
 },
 {
 "id": 13,
 "name": "Coffee waste composites",
 "subtitle": "Compositi da fondi caffè",
 "category": "BIOCOMPOSITI",
 "trl": 7,
 "applications": "Design, consumer goods",
 "companies": "Kaffeeform, Bio-Bean",
 "description": "I compositi di fondi di caffè trasformano uno dei più ubiqui waste urbani in materiali utili. Ogni anno vengono prodotti 6+ milioni di tonnellate di fondi di caffè esausti, ricchi di oli, composti aromatici, e fibre. Invece di finire in discarica, possono diventare compositi con proprietà uniche.\n\nI fondi di caffè contengono 10-15% oli (utilizzabili come biofuel o lubrificanti), 40% polisaccaridi, e particelle fibrose di 100-500 μm. Nei compositi fungono da filler organico con caratteristiche peculiari: i residui oleosi possono migliorare la processabilità, le particelle fini danno superficie omogenea, e l'aroma caratteristico può essere preservato o rimosso secondo l'applicazione.\n\nAl tatto i compositi di caffè sono simili ai wood-plastic composites ma con texture più fine. Visivamente il colore marrone scuro è distintivo e attraente. L'odore può mantenere note di caffè - un \"plus\" per alcuni prodotti, da eliminare per altri. La sensazione è \"calda\" e naturale.\n\nLe applicazioni sfruttano l'estetica e lo storytelling: tazze riutilizzabili (Kaffeeform a Berlino), mobili (bio-bean), filamenti per stampa 3D, e componenti di design. Ford, con McDonald's, ha sviluppato compositi caffè-plastica per componenti auto. È un mercato guidato dalla narrativa di sostenibilità tanto quanto dalle proprietà tecniche.",
 "properties": "Da scarto urbano abbondante",
 "sensory": {
 "tactile": "Rigido liscio, leggermente granuloso",
 "visual": "Marrone scuro caffè, aspetto terroso elegante",
 "thermal": "Neutro-tiepido",
 "acoustic": "Moderatamente assorbente",
 "olfactive": "Odore caffè residuo piacevole (attenua nel tempo)"
 },
 "aesthetic": {
 "appearance": "Naturale urbano, elegante scuro",
 "finish": "Liscio o texture fine",
 "aging": "Stabile, odore attenua",
 "transparency": "Opaco"
 },
 "ethical": {
 "sustainability": "Molto Alto",
 "origin": "Rinnovabile - fondi caffè urbani (8+ Mton/anno globali)",
 "biodegradability": "Parziale (dipende da binder)",
 "bio_content": "50-70%",
 "circular_economy": "Chiusa - upcycling scarto urbano",
 "certifications": "Varie"
 },
 "specs_text": "'¢ Disponibilità: 6+ Mton/anno globali\n'¢ Contenuto oli: 10-15%\n'¢ Dimensione particelle: 100-500 μm",
 "ingredienti_correlati": [
 "fondi_caffe"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "legante polimerico (PP, PLA o resina)"
 ],
 "fonte": "Science Buddies / Storico",
 "url": "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Chem_p101/chemistry/turn-milk-into-plastic",
 "link_risorse": [
    {
      "titolo": "Kaffeeform - Material (composito da fondi di caffè)",
      "url": "https://www.kaffeeform.com/en/material/"
    },
    {
      "titolo": "Dezeen - Kaffeeform: cups from recycled coffee grounds",
      "url": "https://www.dezeen.com/2015/05/22/kaffeeform-recycled-ground-coffee-waste-cup-julian-lechner/"
    },
    {
      "titolo": "MaterialDistrict - Coffee cups made from waste coffee grounds",
      "url": "https://materialdistrict.com/article/coffee-cups-waste-coffee-grounds/"
    }
  ],
 "credits": {
 "inventori": [
 "Auguste Trillat (1893, insolubilizzazione caseina con formaldeide)"
 ],
 "nomi_commerciali": [
 "Galalith (Germania)",
 "Erinoid (UK)",
 "Aladdinite (USA)",
 "Casolith (Paesi Bassi)"
 ],
 "designer_contemporanei": [
 "Marion Seignan (ENSCI, Francia)"
 ],
 "note": "Usata 1900-1945 per bottoni, gioielli, penne. Formaldeide sostituita con metodi più sicuri"
 }
 },
 {
 "id": 14,
 "name": "Orange peel composites",
 "subtitle": "Compositi da bucce agrumi",
 "category": "BIOCOMPOSITI",
 "trl": 7,
 "applications": "Tessuti, design, packaging",
 "companies": "Orange Fiber, Frumat",
 "description": "I compositi di bucce d'arancia e altri agrumi valorizzano uno scarto dell'industria dei succhi: per ogni litro di succo d'arancia si producono 500-600 g di residuo solido (bucce, polpa, semi). L'industria globale dei succhi genera 15+ milioni di tonnellate/anno di questo waste ricco di pectine, oli essenziali, e fibre.\n\nLe bucce di agrumi contengono: pectine (30%, gelificante naturale), oli essenziali (2-5%, limonene), cellulosa (20%), e pigmenti (carotenoidi). Nei compositi, le fibre cellulosiche fungono da rinforzo, le pectine possono servire come legante naturale, e gli oli conferiscono profumo e potenziali proprietà antimicrobiche. Il colore arancione è vivace e attraente.\n\nAl tatto i compositi di agrumi sono rigidi, con superficie che può essere liscia o granulare. Visivamente il colore arancione è distintivo e allegro. Il profumo di agrumi può essere mantenuto (prodotti profumati) o rimosso (estrazione oli per altri usi). La sensazione è \"naturale\" e piacevole.\n\nLe applicazioni sfruttano estetica e aroma: packaging (specialmente per food citrus-related), oggetti design, tessuti (Orange Fiber in Sicilia produce tessuto da agrumi per Ferragamo), e materiali da costruzione. In Sicilia e Florida, regioni citricole, diversi progetti valorizzano questo waste locale.",
 "properties": "Da scarto industria succhi",
 "sensory": {
 "tactile": "Setoso morbido (tessuti), rigido (compositi solidi)",
 "visual": "Da bianco a arancio secondo lavorazione",
 "thermal": "Neutro, traspirante (tessuti)",
 "acoustic": "Variabile",
 "olfactive": "Lieve odore agrumato (piacevole, attenua)"
 },
 "aesthetic": {
 "appearance": "Naturale luminoso, aspetto prezioso",
 "finish": "Setoso (tessuti) o liscio (compositi)",
 "aging": "Stabile",
 "transparency": "Opaco a semi-trasparente"
 },
 "ethical": {
 "sustainability": "Molto Alto",
 "origin": "Rinnovabile - bucce agrumi da industria succhi (30+ Mton/anno)",
 "biodegradability": "Fibre biodegradabili",
 "bio_content": "60-100%",
 "circular_economy": "Chiusa - upcycling scarto agrumicolo",
 "certifications": "GOTS (tessuti)"
 },
 "specs_text": "'¢ Disponibilità: 15+ Mton/anno (globale)\n'¢ Contenuto pectine: ~30%\n'¢ Oli essenziali: 2-5%",
 "ingredienti_correlati": [
 "pectina"
 ],
 "replicabile_lab": true,
 "ingredienti_teorici": [
 "bucce di agrumi"
 ],
 "fonte": "Letteratura scientifica",
 "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7042806/",
 "link_risorse": [
 {
 "titolo": "PMC - Pectin from Agro-Waste Review",
 "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7042806/"
 },
 {
 "titolo": "Hindawi - Pectin-Cellulose Biofilms from Citrus",
 "url": "https://onlinelibrary.wiley.com/doi/10.1155/2017/9732329"
 },
 {
 "titolo": "PMC - Pectin Active Packaging Review 2024",
 "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11902144/"
 }
 ],
 "credits": {
 "fonti_industriali": "Bucce agrumi, mele (scarti industria succhi)",
 "note": "Estratta da scarti agrumi con acido. Gelifica con zuccheri+acido (HM pectin) o Ca2+ (LM pectin)"
 }
 },
 {
 "id": 15,
 "name": "Biofilm agar puro",
 "subtitle": "Film rigido da agar - Materiom",
 "category": "FILM",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Film rigido, packaging",
 "companies": "DIY",
 "description": "Film base di agar puro. 400ml acqua, 12g agar, 18ml glicerolo. Cuocere a 95°C, versare in stampo, essiccare. Produce film rigido, traslucido.",
 "ingredienti_correlati": [
 "agar",
 "glicerina",
 "acqua"
 ],
 "fonte": "Materiom",
 "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/agarfoil/",
 "link_risorse": [
 {
 "titolo": "Fabricademy - Agar Foil ricetta originale (Loes Bogers)",
 "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/agarfoil/"
 },
 {
 "titolo": "Bioplastic Cook Book - Margaret Dunne",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3"
 }
 ],
 "credits": {
 "autori": [
 "E.S. Stevens (Green Plastics)"
 ],
 "istituzioni": [
 "Materiom"
 ],
 "note": "Ricetta Ag02 Materiom, da libro Green Plastics"
 }
 },
 {
 "id": 16,
 "name": "Film tapioca",
 "subtitle": "Bioplastica da amido di tapioca",
 "category": "FILM",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Film flessibile traslucido",
 "companies": "DIY",
 "description": "Film da amido di tapioca. Tapioca, acqua, glicerina, aceto. Cuocere mescolando, versare, essiccare. Film più trasparente dell'amido di mais.",
 "ingredienti_correlati": [
 "amido_tapioca",
 "glicerina",
 "aceto",
 "acqua"
 ],
 "fonte": "Fabricademy",
 "url": "https://labpastoe.gitbook.io/lab-pastoe/tutorials/bioplastics/starch",
 "link_risorse": [
 {
 "titolo": "Lab Pastoe - Starch bioplastics (copre tapioca)",
 "url": "https://labpastoe.gitbook.io/lab-pastoe/tutorials/bioplastics/starch"
 },
 {
 "titolo": "Fabricademy - Biofabricating Materials",
 "url": "https://class.textile-academy.org/2023/marieke-eyndhoven/assignments/week06/"
 }
 ],
 "credits": {
 "istituzioni": [
 "Materiom",
 "Fabricademy"
 ],
 "note": "Tapioca produce film più trasparente del mais"
 }
 },
 {
 "id": 17,
 "name": "Biofilm extra flessibile",
 "subtitle": "Gelatina alto glicerolo 1:1",
 "category": "FILM",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Film molto flessibile, simil-plastica",
 "companies": "DIY",
 "description": "Film gelatina con rapporto 1:1 gelatina:glicerina. Produce materiale molto flessibile, quasi gommoso. Meno resistente all'acqua.",
 "ingredienti_correlati": [
 "gelatina",
 "glicerina",
 "acqua"
 ],
 "fonte": "FabTextiles",
 "url": "https://www.nike.com/it/a/toccare-con-mano-come-creare-bio-materiali",
 "link_risorse": [
    {
      "titolo": "Nike - Toccare con mano come creare biomateriali (IT)",
      "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/gelatinefoil/"
    },
    {
      "titolo": "Bioplastic Cook Book - Ricettario bioplastiche",
      "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3"
    }
  ],
 "credits": {
 "istituzioni": [
 "FabTextiles",
 "Fab Lab Barcelona"
 ],
 "note": "Rapporto glicerina/polimero aumentato per max flessibilità"
 }
 },
 {
 "id": 18,
 "name": "Biofilm agar+gelatina",
 "subtitle": "Film ibrido agar-gelatina",
 "category": "FILM",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Film semi-flessibile",
 "companies": "DIY",
 "description": "500ml acqua, 3g agar, 20g gelatina, 15ml glicerina. Cuocere 45min a 80°C. Combina rigidità agar con flessibilità gelatina.",
 "ingredienti_correlati": [
 "agar",
 "gelatina",
 "glicerina",
 "acqua"
 ],
 "fonte": "Fabricademy",
 "url": "https://class.textile-academy.org/2020/carolina.delgado/assignments/week06/",
 "link_risorse": [
    {
      "titolo": "Fabricademy - Agar+Gelatine biofilms (Carolina Delgado)",
      "url": "https://class.textile-academy.org/2020/tanja.lovric/assignments/week06/"
    },
    {
      "titolo": "Bioplastic Cook Book - Ricettario bioplastiche",
      "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3"
    }
  ],
 "credits": {
 "autori": [
 "Materiom community"
 ],
 "codice": "AgGe01",
 "note": "Combinazione per bilanciare rigidità agar + elasticità gelatina"
 }
 },
 {
 "id": 19,
 "name": "Biofoam gelatina",
 "subtitle": "Schiuma biodegradabile da gelatina",
 "category": "FOAM",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Imballaggio, isolamento",
 "companies": "DIY",
 "description": "150ml acqua, gelatina, glicerina, sapone. Cuocere gelatina, aggiungere sapone, sbattere con frusta. Versare in stampo, essiccare. Schiuma tipo polistirolo.",
 "ingredienti_correlati": [
 "gelatina",
 "glicerina",
 "sapone",
 "acqua"
 ],
 "fonte": "Waag TextileLab",
 "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/biofoam/",
 "link_risorse": [
 {
 "titolo": "TextileLab Waag - Biofoam Recipe",
 "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/biofoam/"
 },
 {
 "titolo": "Material Factors - Bio Foam Recipe",
 "url": "https://www.materialfactors.org/recipes/bio-foam"
 }
 ],
 "credits": {
 "designer": [
 "Loes Bogers (TextileLab Waag)"
 ],
 "istituzioni": [
 "Fabricademy",
 "TextileLab Amsterdam"
 ],
 "note": "Sviluppo 2019-2020"
 }
 },
 {
 "id": 20,
 "name": "Agar foam",
 "subtitle": "Schiuma rigida da agar",
 "category": "FOAM",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Imballaggio rigido",
 "companies": "DIY",
 "description": "Agar, acqua, glicerina, sapone. Cuocere agar, aggiungere sapone, sbattere energicamente. Schiuma più rigida della gelatina.",
 "ingredienti_correlati": [
 "agar",
 "glicerina",
 "sapone",
 "acqua"
 ],
 "fonte": "Bioplastic Cookbook",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3",
 "link_risorse": [
 {
 "titolo": "Bioplastic Cook Book - Margaret Dunne",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3"
 },
 {
 "titolo": "Fabricademy - Agar Foam",
 "url": "https://class.textile-academy.org/2020/tanja.lovric/assignments/week06/"
 }
 ],
 "credits": {
 "designer": [
 "Margaret Dunne"
 ],
 "istituzioni": [
 "Fab Lab Barcelona"
 ],
 "note": "Foam rigido da agar aerato"
 }
 },
 {
 "id": 21,
 "name": "Coffee leather",
 "subtitle": "Pelle da fondi di caffè + alginato",
 "category": "COMPOSITO",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Pelle vegetale, accessori",
 "companies": "DIY",
 "description": "2g alginato, 33g acqua, 5g glicerina, 2g fondi caffè, 2g olio oliva. Mescolare, versare, spray CaCl2. Pelle marrone profumata.",
 "ingredienti_correlati": [
 "alginato",
 "fondi_caffe",
 "olio_oliva",
 "glicerina",
 "cacl2",
 "acqua"
 ],
 "fonte": "FabTextiles",
 "url": "https://class.textile-academy.org/2023/elena-bannaia/assignments/week06/",
 "link_risorse": [
    {
      "titolo": "Fabricademy - Coffee leather + composites (Elena Bannaia)",
      "url": "https://www.crafthub.eu/material/bio-leather-made-from-waste-coffee-grounds/"
    },
    {
      "titolo": "Bioplastic Cook Book - Ricettario bioplastiche",
      "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3"
    }
  ],
 "credits": {
 "istituzioni": [
 "FabTextiles",
 "Fab Lab Barcelona"
 ],
 "note": "Valorizzazione fondi caffè come filler"
 }
 },
 {
 "id": 22,
 "name": "Orange peel leather",
 "subtitle": "Pelle da bucce di arancia",
 "category": "COMPOSITO",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Pelle vegetale aromatica",
 "companies": "DIY",
 "description": "Base pectina o gelatina con bucce di arancia essiccate e macinate. Profumo agrumato naturale, colore arancio.",
 "ingredienti_correlati": [
 "pectina",
 "bucce_agrumi",
 "glicerina",
 "acqua"
 ],
 "fonte": "Remix el Barrio",
 "url": "https://fablabbcn.org/blog/emergent-ideas/biomaterials-101",
 "link_risorse": [
    {
      "titolo": "Dezeen - Peelsphere pelle da bucce di frutta",
      "url": "https://www.dezeen.com/2022/01/12/peelsphere-youyang-song-leather-alternative-biomaterial-fruit-waste/"
    },
    {
      "titolo": "Materiom - Orange Peel Bioplastic",
      "url": "https://commons.materiom.org/"
    },
    {
      "titolo": "Orange Fiber - Tessuti da agrumi (azienda italiana)",
      "url": "https://orangefiber.it/"
    }
  ],
 "credits": {
 "istituzioni": [
 "Fab Lab Barcelona"
 ],
 "progetti": [
 "Remix El Barrio"
 ],
 "note": "Pectina da bucce arancia + binding con chitosano"
 }
 },
 {
 "id": 23,
 "name": "Eggshell composite",
 "subtitle": "Composito con gusci d'uovo",
 "category": "COMPOSITO",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Materiale rigido decorativo",
 "companies": "DIY",
 "description": "Alginato con gusci d'uovo in polvere e aceto. Materiale rigido con texture speckled. Il calcio dei gusci aiuta la reticolazione.",
 "ingredienti_correlati": [
 "alginato",
 "gusci_uovo",
 "aceto",
 "cacl2",
 "acqua"
 ],
 "fonte": "Materiom",
 "url": "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Chem_p101/chemistry/eggshell-chalk",
 "link_risorse": [
    {
      "titolo": "Fabricademy - Eggshell composite (Marisa Satsia)",
      "url": "https://class.textile-academy.org/2022/marisa-satsia/assignments/week06/"
    },
    {
      "titolo": "GreenLab Wiki - Compositi da scarti alimentari",
      "url": "https://wiki.greenlab.org/2019/05/09/making-composite-materials-from-food-waste-algae/"
    }
  ],
 "credits": {
 "codice": "Eg01",
 "istituzioni": [
 "Materiom"
 ],
 "note": "Gusci d'uovo macinati come filler minerale in matrice biopolimerica"
 }
 },
 {
 "id": 24,
 "name": "Gelatina+Juta",
 "subtitle": "Composito gelatina rinforzato juta",
 "category": "COMPOSITO",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Pannelli rigidi, tessuti strutturali",
 "companies": "DIY",
 "description": "Gelatina calda impregnata su tessuto di juta. Pressare e essiccare. Tessuto rigido strutturale.",
 "ingredienti_correlati": [
 "gelatina",
 "fibre_juta",
 "glicerina",
 "acqua"
 ],
 "fonte": "Bioplastic Cookbook",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3",
 "link_risorse": [
 {
 "titolo": "Bioplastic Cook Book - Margaret Dunne",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3"
 },
 {
 "titolo": "Fabricademy - Textile Composites",
 "url": "https://class.textile-academy.org/2023/rachel-wambach/assignments/week06/"
 }
 ],
 "credits": {
 "designer": [
 "Margaret Dunne"
 ],
 "istituzioni": [
 "Bioplastic Cook Book"
 ],
 "note": "Composito con rinforzo fibra naturale"
 }
 },
 {
 "id": 25,
 "name": "Gelatina+Canapa",
 "subtitle": "Composito gelatina rinforzato canapa",
 "category": "COMPOSITO",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Compositi fibrosi leggeri",
 "companies": "DIY",
 "description": "Gelatina calda con fibre di canapa. Impregnare, pressare, essiccare. Composito leggero e resistente.",
 "ingredienti_correlati": [
 "gelatina",
 "fibre_canapa",
 "glicerina",
 "acqua"
 ],
 "fonte": "Bioplastic Cookbook",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3",
 "link_risorse": [
 {
 "titolo": "Bioplastic Cook Book - Margaret Dunne",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3"
 },
 {
 "titolo": "Fabricademy - Hemp Composites",
 "url": "https://class.textile-academy.org/2020/beatriz.sandini/assignments/week06/"
 }
 ],
 "credits": {
 "designer": [
 "Margaret Dunne"
 ],
 "istituzioni": [
 "Bioplastic Cook Book",
 "Fabricademy"
 ],
 "note": "Canapa come rinforzo sostenibile"
 }
 },
 {
 "id": 26,
 "name": "Agar+Juta",
 "subtitle": "Composito agar rinforzato juta",
 "category": "COMPOSITO",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Tessuti semi-rigidi",
 "companies": "DIY",
 "description": "Agar caldo impregnato su tessuto di juta. Più rigido della versione gelatina. Pressare e essiccare.",
 "ingredienti_correlati": [
 "agar",
 "fibre_juta",
 "glicerina",
 "acqua"
 ],
 "fonte": "Bioplastic Cookbook",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3",
 "link_risorse": [
 {
 "titolo": "Bioplastic Cook Book - Margaret Dunne",
 "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3"
 },
 {
 "titolo": "Fabricademy - Agar Composites",
 "url": "https://class.textile-academy.org/2020/loes.bogers/assignments/week06/"
 }
 ],
 "credits": {
 "designer": [
 "Margaret Dunne"
 ],
 "istituzioni": [
 "Bioplastic Cook Book"
 ],
 "note": "Agar come matrice rigida per composito"
 }
 },
 {
 "id": 27,
 "name": "Agar conduttivo",
 "subtitle": "Gel conduttivo per elettronica",
 "category": "SPECIALE",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Sensori, elettronica morbida",
 "companies": "DIY",
 "description": "Agar con 5-10% sale (NaCl). Conduce elettricità! Usato per sensori touch, elettrodi morbidi, e-textiles.",
 "ingredienti_correlati": [
 "agar",
 "sale",
 "glicerina",
 "acqua"
 ],
 "fonte": "Materiom",
 "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/agarfoil/",
 "link_risorse": [
    {
      "titolo": "Fabricademy - Agar bioplastics base (Loes Bogers)",
      "url": "https://class.textile-academy.org/2022/marisa-satsia/assignments/week06/"
    },
    {
      "titolo": "Bioplastic Cook Book - Ricettario bioplastiche",
      "url": "https://issuu.com/nat_arc/docs/bioplastic_cook_book_3"
    }
  ],
 "credits": {
 "codice": "Conductive Ag03",
 "istituzioni": [
 "Materiom",
 "Fabricademy"
 ],
 "note": "Carbone/grafite dispersi in matrice agar per conducibilità"
 }
 },
 {
 "id": 28,
 "name": "Gelatina+spirulina",
 "subtitle": "Biofilm nutriente verde",
 "category": "FILM",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Film edibile, packaging alimentare",
 "companies": "DIY",
 "description": "Gelatina con spirulina in polvere. Film verde intenso, ricco di proteine. Potenzialmente edibile.",
 "ingredienti_correlati": [
 "gelatina",
 "spirulina",
 "glicerina",
 "acqua"
 ],
 "fonte": "FabTextiles",
 "url": "https://class.textile-academy.org/2025/rawan-aziziyeh/assignments/week07/",
 "link_risorse": [
    {
      "titolo": "Fabricademy - Gelatin bioplastics (Rawan Aziziyeh 2025)",
      "url": "https://class.textile-academy.org/2025/rawan-aziziyeh/assignments/week07/"
    },
    {
      "titolo": "Bioplastic Cook Book - Ricettario bioplastiche",
      "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/bioplastic-spirulina/"
    }
  ],
 "credits": {
 "codice": "AgSp01",
 "istituzioni": [
 "Materiom",
 "ITP NYU"
 ],
 "progetti": [
 "Green Ocean"
 ],
 "note": "Spirulina come colorante naturale (ficcocianina)"
 }
 },
 {
 "id": 29,
 "name": "Gommalacca liquida",
 "subtitle": "Coating naturale tradizionale",
 "category": "COATING",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Finitura lucida, sigillante",
 "companies": "DIY",
 "description": "Gommalacca in fiocchi sciolta in alcool etilico (rapporto 1:4). Coating lucido, resistente, food-safe dopo essiccazione.",
 "ingredienti_correlati": [
 "gommalacca",
 "alcool"
 ],
 "fonte": "Tradizionale",
 "url": "https://en.wikipedia.org/wiki/Shellac",
 "link_risorse": [
 {
 "titolo": "Wikipedia - Shellac",
 "url": "https://en.wikipedia.org/wiki/Shellac"
 },
 {
 "titolo": "Natural Pigments - Shellac: Applications and Use in Art",
 "url": "https://www.naturalpigments.com/artist-materials/shellac-use-art"
 }
 ],
 "credits": {
 "origine": "India (secrezione insetto Kerria lacca)",
 "storia": "Usata da 3000 anni, nome 'lacquer' deriva da lac/lakh",
 "note": "Unica resina naturale di origine animale, FDA approved"
 }
 },
 {
 "id": 30,
 "name": "Beeswax wrap",
 "subtitle": "Pellicola alimentare riutilizzabile",
 "category": "COATING",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Food wrap, conservazione alimenti",
 "companies": "DIY",
 "description": "Cera d'api + colofonia + olio di lino. Fondere, impregnare tessuto cotone. Wrap alimentare riutilizzabile, modellabile col calore delle mani.",
 "ingredienti_correlati": [
 "cera_api",
 "colofonia",
 "olio_lino"
 ],
 "fonte": "Green Slice / DIY",
 "url": "https://homesteadandchill.com/diy-homemade-beeswax-wraps/",
 "link_risorse": [
 {
 "titolo": "Homestead and Chill - DIY Beeswax Wraps",
 "url": "https://homesteadandchill.com/diy-homemade-beeswax-wraps/"
 },
 {
 "titolo": "Mountain Rose Herbs - Beeswax Wraps Guide",
 "url": "https://blog.mountainroseherbs.com/the-complete-guide-to-diy-beeswax-wraps-including-a-beeless-vegan-food-wrap"
 }
 ],
 "credits": {
 "origine": "Tradizionale (apicoltura)",
 "movimenti": [
 "Zero Waste",
 "Plastic Free"
 ],
 "note": "Alternativa storica alla pellicola, rilanciata dal movimento zero-waste"
 }
 },
 {
 "id": 31,
 "name": "Hardwax oil",
 "subtitle": "Finitura naturale per legno",
 "category": "COATING",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Finitura legno, protezione",
 "companies": "DIY",
 "description": "60-70% olio di lino cotto, 10-20% cera d'api, 10-20% cera carnauba. Fondere e mescolare. Finitura penetrante idrorepellente.",
 "ingredienti_correlati": [
 "olio_lino",
 "cera_api",
 "cera_carnauba"
 ],
 "fonte": "Workshop Companion",
 "url": "https://workshopcompanion.com/know-how/materials/finish/hard-wax-finish.html",
 "link_risorse": [
 {
 "titolo": "Workshop Companion - Hardwax Oil Finish (DIY ricette)",
 "url": "https://workshopcompanion.com/know-how/materials/finish/hard-wax-finish.html"
 },
 {
 "titolo": "Lost Art Press - DIY Linseed Oil & Wax Finish (ricetta)",
 "url": "https://blog.lostartpress.com/2021/07/12/cook-your-own-linseed-oil-wax-finish/"
 }
 ],
 "credits": {
 "origine": "Tradizione ebanisteria nordeuropea",
 "note": "Olio essiccante (lino/tung) + cera per finitura legno"
 }
 },
 {
 "id": 33,
 "name": "Alginate film edibile",
 "subtitle": "Film commestibile da alginato di sodio",
 "category": "FILM",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Film edibile, packaging alimentare, coating frutta",
 "companies": "Notpla, Evoware, Loliware",
 "description": "2-4g alginato di sodio, 200ml acqua, 8-10g glicerina. Frullare fino a liscio, riposare una notte per eliminare bolle. Versare su superficie liscia (acrilico, silicone). Spruzzare soluzione CaCl₂ 10% per reticolare. Asciugare 24-48h. Film trasparente, flessibile, resistente al calore (fino a 150°C), idrosolubile ma resistente a pH neutro/acido dopo reticolazione. Commestibile se ingredienti food-grade.",
 "ingredienti_correlati": [
 "alginato",
 "glicerina",
 "cacl2",
 "acqua"
 ],
 "fonte": "Fabricademy / TextileLab Waag",
 "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/alginatefoil/",
 "link_risorse": [
 {
 "titolo": "Fabricademy - Alginate Foil Recipe (Loes Bogers / TextileLab Waag)",
 "url": "https://class.textile-academy.org/2020/loes.bogers/files/recipes/alginatefoil/"
 },
 {
 "titolo": "PMC - Alginate-Based Edible Films and Coatings for Food Packaging (review)",
 "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6211027/"
 }
 ],
 "credits": {
 "origine": "Alghe brune (Laminaria, Macrocystis)",
 "ricetta": "Cecilia Raspanti (TextileLab, Waag Amsterdam), Fabricademy 2019",
 "note": "Ricetta a freddo, non richiede cottura. Reticolazione con Ca²⁺ (egg-box model)"
 }
 },
 {
 "id": 32,
 "name": "Caseina plastica",
 "subtitle": "Plastica dal latte - Galalite",
 "category": "PROTEICO",
 "trl": 3,
 "replicabile_lab": true,
 "applications": "Oggetti rigidi, bottoni storici",
 "companies": "DIY",
 "description": "Caseina precipitata con acido (aceto o citrico). Modellare mentre calda, essiccare. Plastica rigida storica (Galalite). Può essere colorata.",
 "ingredienti_correlati": [
 "caseina",
 "aceto",
 "acido_citrico"
 ],
 "fonte": "Materiom / RISD",
 "url": "https://materiom.org/recipe/106",
 "link_risorse": [
    {
      "titolo": "Science Buddies - Turn Milk Into Plastic (Caseina)",
      "url": "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Chem_p101/chemistry/turn-milk-into-plastic"
    },
    {
      "titolo": "Scientific American - Milk Plastic",
      "url": "https://www.scientificamerican.com/article/bring-science-home-milk-plastic/"
    }
  ],
 "credits": {
 "inventori": [
 "Auguste Trillat (1893)"
 ],
 "nomi_commerciali": [
 "Galalith",
 "Erinoid"
 ],
 "istituzioni": [
 "Materiom",
 "Science Buddies"
 ],
 "note": "Ricetta moderna senza formaldeide"
 }
 }
 ,
 {
 "id": "scoby_cellulosa_batterica",
 "name": "SCOBY / Cellulosa Batterica",
 "subtitle": "Materiale da fermentazione kombucha",
 "category": "COLTURA",
 "trl": 6,
 "applications": "Pelle vegetale, packaging, tessuto, lampade, accessori moda",
 "companies": "BioCouture (Suzanne Lee), Polybion (Celium), Ponto Biodesign",
 "description": "La cellulosa batterica (BC) è un biomateriale prodotto da colture simbiotiche di batteri e lieviti (SCOBY) durante la fermentazione del kombucha. Il medium di crescita standard è tè nero zuccherato (2L acqua + 200g zucchero + 5 bustine tè nero). La pellicola si forma in superficie in 7-21 giorni a 20-28°C.\n\nIl materiale grezzo è traslucido, gelatinoso e fragile. Il post-processing è ESSENZIALE: bagno in glicerina (2.5-3% in acqua, 24h a 80rpm, essiccazione 80°C) conferisce flessibilità e trasparenza. Coating con acido stearico rende idrorepellente (angolo contatto 38°→125°). La colorazione può avvenire durante la crescita (aggiungendo spirulina o curcuma al medium) o post-essiccazione con tinture tessili.\n\nApplicazioni: Suzanne Lee (BioCouture) ha pionierato il tessuto da SCOBY per moda. Polybion produce Celium per pelle industriale. Compositi BC+PVA+chitosano o BC+gelatina+glicerina creano 'vegan leather' promettente. Lavaggio con H2O2+NaOH rimuove residui tè → materiale bianco.",
 "properties": "Flessibile (con glicerina), traslucido, accetta tinture. Idrofilo senza coating, fragile senza plastificante.",
 "sensory": {
 "tactile": "Liscio, simil-pelle quando trattato con glicerina. Gommoso-fragile se non trattato.",
 "visual": "Traslucido ambrato (naturale), bianco (dopo bleaching), colorabile.",
 "thermal": "Fresco al tatto, non conduttivo.",
 "acoustic": "Silenzioso, simile a pelle sottile.",
 "olfactive": "Odore acetico durante crescita, neutro dopo lavaggio."
 },
 "aesthetic": {
 "appearance": "Simil-pelle sottile, superficie liscia o texturizzata.",
 "finish": "Da opaco a lucido secondo trattamento.",
 "aging": "Ingiallisce senza trattamento. Stabile con coating.",
 "transparency": "Traslucido, dipende da spessore e trattamento."
 },
 "ethical": {
 "sustainability": "100% biodegradabile, ingredienti comuni.",
 "origin": "Fermentazione — tè, zucchero, SCOBY madre.",
 "biodegradability": "Completamente biodegradabile e compostabile.",
 "bio_content": "100%",
 "circular_economy": "SCOBY madre si riusa indefinitamente.",
 "certifications": "Nessuna formale."
 },
 "specs_text": "Tempo crescita: 7-21 giorni. Temperatura: 20-28°C. Medium: 100g/L zucchero + 5g/L tè nero. Post-processing: glicerina 2.5-3% (flessibilità), acido stearico (idrorepellenza). Spessore: 2-10mm.",
 "ingredienti_correlati": ["scoby", "te_nero", "te_nero_forte", "zucchero", "glicerina", "acido_stearico", "curcuma", "spirulina"],
 "replicabile_lab": true,
 "ingredienti_teorici": ["scoby", "te_nero", "zucchero", "glicerina"],
 "fonte": "PMC 2023, Springer 2019 (glicerina), MDPI 2024 (acido stearico), ACS Omega 2025 (compositi)",
 "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9866785/",
 "link_risorse": [
 {"titolo": "Glicerina su BC (Springer 2019)", "url": "https://link.springer.com/article/10.1007/s10570-019-02501-1"},
 {"titolo": "Acido stearico coating (MDPI 2024)", "url": "https://www.mdpi.com/1422-0067/25/24/13746"},
 {"titolo": "BC compositi (ACS Omega 2025)", "url": "https://pubs.acs.org/doi/10.1021/acsomega.5c10875"},
 {"titolo": "BioCouture", "url": "https://biocouture.co.uk"},
 {"titolo": "Polybion Celium", "url": "https://polybion.bio"}
 ],
 "credits": {
 "designer": "Suzanne Lee (BioCouture)",
 "aziende": ["BioCouture", "Polybion", "Ponto Biodesign"],
 "istituzioni": ["Fabricademy", "TextileLab Waag"],
 "note": "Ricerca BC ben documentata in letteratura scientifica."
 }
 },
 {
 "id": "mycocomposite_base",
 "name": "Mycocomposite Base",
 "subtitle": "Composito da micelio fungino + substrato vegetale",
 "category": "COLTURA",
 "trl": 7,
 "applications": "Packaging, pannelli isolanti, mattoni, lampade, mobili, scultura",
 "companies": "Ecovative Design (Mushroom Packaging, Grow.bio), Grown.bio, MycoWorks (Reishi)",
 "description": "I mycocompositi sono materiali ottenuti dalla crescita di micelio fungino (tipicamente Ganoderma lucidum o Pleurotus ostreatus) su substrati lignocellulosici. Il micelio colonizza il substrato in 7-14 giorni, creando una rete fibrosa che lega le particelle. L'essiccazione a 50-80°C ('killing') ferma la crescita e stabilizza il materiale.\n\nSubstrati documentati: segatura di legno duro (il più comune, mix 50% segatura + 50% soy hulls), fondi caffè (pre-pastorizzati, usare entro 24h, mix 50%+50% paglia), paglia (tagliata 5-10cm, pastorizzata 71°C per 1-2h), canapa hurd (standard Ecovative/Grow.bio), cartone triturato.\n\nSterilizzazione substrato essenziale: autoclave 121°C per 1.5-2.5h. Umidità substrato 60-70%. Colonizzazione al buio, 20-24°C. Post-processing: compressione a caldo per pannelli densi, coating con cera d'api per impermeabilizzazione.\n\nEcovative ha prodotto packaging per Dell, Puma, IKEA (Mushroom Packaging). The Living ha costruito Hy-Fi Tower (10.000 mattoni micelio, 40 piedi, MoMA PS1). Grow.bio e Grown.bio vendono kit GIY didattici.",
 "properties": "Leggero, isolante termico, compostabile. Sensibile a umidità senza coating. Resistenza meccanica dipende da substrato e compressione.",
 "sensory": {
 "tactile": "Ruvido-poroso (naturale), liscio se compresso. Caldo al tatto.",
 "visual": "Bianco-crema (micelio), marrone (substrato). Superficie organica.",
 "thermal": "Isolante termico. Caldo al tatto.",
 "acoustic": "Fonoassorbente (porosità).",
 "olfactive": "Odore fungo durante crescita, neutro dopo essiccazione."
 },
 "aesthetic": {
 "appearance": "Aspetto organico, texture variabile secondo substrato.",
 "finish": "Opaco naturale. Può essere levigato o verniciato.",
 "aging": "Stabile se asciutto. Degrada rapidamente se bagnato.",
 "transparency": "Completamente opaco."
 },
 "ethical": {
 "sustainability": "100% biodegradabile, da scarti agricoli.",
 "origin": "Micelio fungino + scarti lignocellulosici.",
 "biodegradability": "Completamente compostabile.",
 "bio_content": "100%",
 "circular_economy": "Usa scarti (segatura, caffè, paglia). Compostabile a fine vita.",
 "certifications": "Ecovative: Cradle to Cradle Certified."
 },
 "specs_text": "Colonizzazione: 7-14 giorni al buio, 20-24°C. Killing: 50-80°C. Perdita peso essiccazione: 50-60%. Substrato: umidità 60-70%. Sterilizzazione: 121°C, 1.5-2.5h. Densità: 50-200 kg/m³ secondo compressione.",
 "ingredienti_correlati": ["micelio", "segatura", "fondi_caffe", "paglia", "canapa_hurd", "cera_api", "cera_carnauba"],
 "replicabile_lab": true,
 "ingredienti_teorici": ["micelio", "segatura", "canapa_hurd"],
 "fonte": "Ecovative Design, Out-Grow, GroCycle, Designboom 2025 (Myco-Type)",
 "url": "https://grow.bio/",
 "link_risorse": [
 {"titolo": "Grow.bio GIY kits", "url": "https://grow.bio/"},
 {"titolo": "Grown.bio Europa", "url": "https://www.grown.bio/grow-it-yourself/"},
 {"titolo": "Mushroom Packaging", "url": "https://mushroompackaging.com/"},
 {"titolo": "Hy-Fi Tower (Dezeen)", "url": "https://www.dezeen.com/2014/07/01/tower-of-grown-bio-bricks-by-the-living-opens-at-moma-ps1/"},
 {"titolo": "Myco-Type RISD", "url": "https://www.designboom.com/design/myco-type-mycelium-blocks-sheets-sawdust-coffee-grounds-local-waste-08-01-2025/"},
 {"titolo": "Substrate recipes (Out-Grow)", "url": "https://www.out-grow.com/blogs/growing-mushrooms/mushroom-substrate-recipes"},
 {"titolo": "Coffee grounds mushrooms (GroCycle)", "url": "https://grocycle.com/growing-mushrooms-in-coffee-grounds/"}
 ],
 "credits": {
 "designer": "Eben Bayer & Gavin McIntyre (Ecovative), The Living (Hy-Fi), Danielle Trofe (Mush-Lume)",
 "aziende": ["Ecovative Design", "Grow.bio", "Grown.bio", "MycoWorks"],
 "istituzioni": ["RISD (Myco-Type)", "MoMA PS1"],
 "note": "Mycocompositi tra i biomateriali più avanzati commercialmente."
 }
 }
 ],
 "materiali_in_progress": [
 {
 "id": "r36",
 "ricetta_origine": "R36",
 "nome": "Caseina flessibile (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Latte 1.5L + Aceto + Borace + Compressione a caldo 60°C + Stampo",
 "ingredienti_correlati": ["caseina", "aceto", "allume"],
 "categoria_menu": "MATERIALI OPACHI RIGIDI/PLASTICI",
 "consistenza": "massa compatta rigida",
 "colore": "Bianco",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "1-2 mm",
 "test_flessione": "Rigido (non si piega)",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Si strappa subito",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Diventa appiccicoso",
 "aging_7giorni": "Ritirato / rimpicciolito",
 "forabile": "Sì, ma si crepa intorno",
 "cucibile": "No, troppo fragile",
 "incollabile": "Parzialmente",
 "problemi_realizzazione": "Il materiale non riesce a diventare omogeneo"
 },
 {
 "id": "r11",
 "ricetta_origine": "R11",
 "nome": "Carragenina gel elastico (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Carragenina kappa (10g) + KCl (2g) + Glicerina (20g) + Acqua (250ml)",
 "ingredienti_correlati": ["carragenina", "kcl", "glicerina"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "film flessibile",
 "colore": "Giallo chiaro",
 "trasparenza": "Trasparente (si vede attraverso)",
 "spessore": "< 1 mm (film sottile)",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Resta piegato (plastico)",
 "test_trazione": "Resiste moderatamente",
 "test_acqua": "Impermeabile (goccia resta)",
 "test_calore": "Stabile",
 "aging_7giorni": "Leggermente indurito, Leggermente ingiallito, Ritirato / rimpicciolito, Deformato / imbarcato, Odore cambiato, Perso peso significativo",
 "forabile": "Sì, foro pulito",
 "cucibile": "Sì",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "La temperatura di riscaldamento deve essere attentamente controllata, altrimenti il composto potrebbe non solidificarsi o solidificarsi troppo velocemente."
 },
 {
 "id": "r21b",
 "ricetta_origine": "R21B",
 "nome": "Gelatina + Sale+ Cristallizzato (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Gelatina (48g) + Sale grosso marino (30g) + Glicerina (12g) + Acqua (200ml)",
 "ingredienti_correlati": ["gelatina", "sale", "glicerina"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "film flessibile",
 "colore": "color carne",
 "trasparenza": "Trasparente (si vede attraverso)",
 "spessore": "< 1 mm (film sottile)",
 "test_flessione": "Si piega su se stesso",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Resiste moderatamente",
 "test_acqua": "Impermeabile (goccia resta)",
 "test_calore": "Stabile",
 "aging_7giorni": "Leggermente indurito",
 "forabile": "No, troppo duro",
 "cucibile": "Sì",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "presenta difficoltà nell'essere appiattito"
 },
 {
 "id": "r50",
 "ricetta_origine": "R50",
 "nome": "Bioplastica Alginato agar + amido (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 3,
 "colore_validazione": "verde",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "",
 "ingredienti_correlati": ["alginato", "agar", "amido_mais"],
 "categoria_menu": "",
 "consistenza": "massa compatta gommosa",
 "colore": "Bianco",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "4-6 mm",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Si strappa con poca forza",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Non testato",
 "aging_7giorni": "Invariato",
 "forabile": "Sì, foro pulito",
 "cucibile": "Sì",
 "incollabile": "Non testato",
 "problemi_realizzazione": "Nessuna."
 },
 {
 "id": "r37",
 "ricetta_origine": "R37",
 "nome": "Agar+Pula Riso Pannello (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Agar (20g) + Glicerina (20g) + Pula riso (100g) + Acqua (400ml) + Pressa",
 "ingredienti_correlati": ["agar", "glicerina", "pula_riso"],
 "categoria_menu": "BIOCOMPOSITI CON SCARTI/RINFORZ",
 "consistenza": "massa compatta gommosa",
 "colore": "Giallo chiaro",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "> 6 mm",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Si strappa con poca forza",
 "test_acqua": "Si scioglie / disgrega",
 "test_calore": "Si deforma",
 "aging_7giorni": "Ammuffito",
 "forabile": "Sì, ma si crepa intorno",
 "cucibile": "Non testato",
 "incollabile": "Non testato",
 "problemi_realizzazione": "Dopo 3 giorni ha iniziato a ammuffire e dopo 7 giorni emanava ancora un forte odore."
 },
 {
 "id": "r42",
 "ricetta_origine": "R42",
 "nome": "Biocomposito a base di caseina e scarti di feltro (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Caseina (1L latte) + Aceto + Borace + Ritagli tessuto cotone/lana (50g)",
 "ingredienti_correlati": ["caseina", "aceto", "allume", "fibre_cotone"],
 "categoria_menu": "BIOCOMPOSITI CON SCARTI/RINFORZ",
 "consistenza": "massa compatta rigida",
 "colore": "Bianco",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "4-6 mm",
 "test_flessione": "Rigido (non si piega)",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Si strappa con poca forza",
 "test_acqua": "Impermeabile (goccia resta)",
 "test_calore": "Si ammorbidisce leggermente",
 "aging_7giorni": "Molto indurito / fragile, Molto ingiallito / scurito",
 "forabile": "No, si sbriciola",
 "cucibile": "No, troppo duro",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "Se non compattato bene si sbriciola"
 },
 {
 "id": "r24",
 "ricetta_origine": "R24",
 "nome": "Caseina + Fibra Lino (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Latte (1L) + Aceto (60ml) + Borace (3g) + Fibra lino corta (20g)",
 "ingredienti_correlati": ["caseina", "aceto", "allume", "fibre_lino"],
 "categoria_menu": "BIOCOMPOSITI CON SCARTI/RINFORZ",
 "consistenza": "massa compatta rigida",
 "colore": "Giallo chiaro",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "2-4 mm",
 "test_flessione": "Rigido (non si piega)",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Molto resistente",
 "test_acqua": "Si deforma / gonfia",
 "test_calore": "Stabile",
 "aging_7giorni": "Molto indurito / fragile, Ritirato / rimpicciolito, Crepe superficiali, Odore cambiato",
 "forabile": "No, si sbriciola",
 "cucibile": "No, troppo duro",
 "incollabile": "Non testato",
 "problemi_realizzazione": "È necessario appesantirlo per evitare deformazioni (più la forma è regolare, meglio è, perché la deformazione ne faciliterà la rottura)."
 },
 {
 "id": "r14",
 "ricetta_origine": "R14",
 "nome": "Gelatina+Tannini Cuoio (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Gelatina (80g) + Glicerina (10g) + Tannini (15g) + Acqua (250ml)",
 "ingredienti_correlati": ["gelatina", "glicerina", "tannini"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "massa compatta rigida",
 "colore": "Marrone chiaro",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "2-4 mm",
 "test_flessione": "Si piega con fatica",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Resiste moderatamente",
 "test_acqua": "Si scioglie / disgrega",
 "test_calore": "Stabile",
 "aging_7giorni": "Leggermente indurito",
 "forabile": "No, si sbriciola",
 "cucibile": "No, troppo duro",
 "incollabile": "Parzialmente",
 "problemi_realizzazione": "Materiale simile a un biscotto, con prestazioni meccaniche comparabili a quelle di un biscotto; se la quantità d'acqua è eccessiva, tende facilmente a fratturarsi e sbriciolarsi."
 },
 {
 "id": "r40",
 "ricetta_origine": "R40",
 "nome": "Gelatina + Amido ibrido rigido (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 3,
 "colore_validazione": "verde",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Gelatina (40g) + Amido mais (20g) + Glicerina (15g) + Acqua (280ml)",
 "ingredienti_correlati": ["gelatina", "amido_mais", "glicerina"],
 "categoria_menu": "IBRIDI E AVANZATI",
 "consistenza": "film rigido",
 "colore": "Giallo chiaro",
 "trasparenza": "Trasparente (si vede attraverso)",
 "spessore": "1-2 mm",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Resiste moderatamente",
 "test_acqua": "Impermeabile (goccia resta)",
 "test_calore": "Si ammorbidisce leggermente",
 "aging_7giorni": "Invariato",
 "forabile": "Sì, foro pulito",
 "cucibile": "No, troppo duro",
 "incollabile": "Parzialmente",
 "problemi_realizzazione": "Nessuno"
 },
 {
 "id": "r2",
 "ricetta_origine": "R2",
 "nome": "Agar trasparente rigido (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Agar agar (12g) + Glicerina (20g) + Acqua (250ml)",
 "ingredienti_correlati": ["agar", "glicerina"],
 "ingredienti_correlati": ["agar", "glicerina"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "film rigido",
 "colore": "Giallo chiaro",
 "trasparenza": "Trasparente (si vede attraverso)",
 "spessore": "1-2 mm",
 "test_flessione": "Rigido (non si piega)",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Molto resistente",
 "test_acqua": "Si deforma / gonfia",
 "test_calore": "Stabile",
 "aging_7giorni": "Leggermente indurito, Molto indurito / fragile, Leggermente ingiallito, Ritirato / rimpicciolito, Ammuffito, Perso peso significativo",
 "forabile": "Sì, foro pulito",
 "cucibile": "No, troppo fragile",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "È soggetto a muffe e la sua forma cambia notevolmente dopo l'essiccazione."
 },
 {
 "id": "r46",
 "ricetta_origine": "R46",
 "nome": "Bucce Banana Bioplastica (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Bucce banana (3-4 banane) + Gelatina (10g) + Glicerina (10g) + Aceto (5ml) + Acqua (100ml)",
 "ingredienti_correlati": ["bucce_agrumi", "gelatina", "glicerina", "aceto"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "film flessibile",
 "colore": "Bianco",
 "trasparenza": "Trasparente (si vede attraverso)",
 "spessore": "< 1 mm (film sottile)",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Resta piegato (plastico)",
 "test_trazione": "Resiste moderatamente",
 "test_acqua": "Impermeabile (goccia resta)",
 "test_calore": "Si ammorbidisce molto",
 "aging_7giorni": "Leggermente indurito",
 "forabile": "Sì, foro pulito",
 "cucibile": "No, troppo duro",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "È necessario un frullatore, altrimenti sarà difficile ottenere una consistenza liscia."
 },
 {
 "id": "r7",
 "ricetta_origine": "R7",
 "nome": "gelatina colorata naturale (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Gelatina (50g) + Glicerina (15g) + Acqua (240ml) + Curcuma/Barbabietola/Spirulina (5-10g)",
 "ingredienti_correlati": ["gelatina", "glicerina", "curcuma"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "film flessibile",
 "colore": "Trasparente (senza coloranti naturali), verde (spirulina), giallo (curcuma), marrone (cacao).",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "< 1 mm (film sottile)",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna parzialmente",
 "test_trazione": "Resiste moderatamente",
 "test_acqua": "Si deforma / gonfia",
 "test_calore": "Si ammorbidisce molto",
 "aging_7giorni": "Leggermente indurito, Ritirato / rimpicciolito, Deformato / imbarcato, Perso peso significativo",
 "forabile": "Sì, foro pulito",
 "cucibile": "Sì",
 "incollabile": "Parzialmente",
 "problemi_realizzazione": "L'aggiunta di coloranti naturali ha causato sedimentazione. Inoltre, l'aggiunta di spirulina ha prodotto un gran numero di bolle."
 },
 {
 "id": "r17",
 "ricetta_origine": "R17",
 "nome": "CASEINA ESPANSA (Schiuma) (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Latte (750ml) + Aceto (60ml) + Borace (3g) + Pigmenti naturali (10g)",
 "ingredienti_correlati": ["caseina", "aceto", "allume"],
 "categoria_menu": "MATERIALI OPACHI RIGIDI/PLASTICI",
 "consistenza": "massa compatta rigida",
 "colore": "Giallo chiaro",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "> 6 mm",
 "test_flessione": "Rigido (non si piega)",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Molto resistente",
 "test_acqua": "Assorbe rapidamente",
 "test_calore": "Stabile",
 "aging_7giorni": "Molto indurito / fragile, Molto ingiallito / scurito, Ritirato / rimpicciolito, Deformato / imbarcato",
 "forabile": "No, troppo duro",
 "cucibile": "No, troppo duro",
 "incollabile": "Parzialmente",
 "problemi_realizzazione": "Un'asciugatura non uniforme può causare screpolature."
 },
 {
 "id": "r34b",
 "ricetta_origine": "R34B",
 "nome": "Pectina + Scarti Mela Elastico (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Pectina (15g) + Polpa mela essiccata tritata (20g) + Glicerina (20g) + Acqua (250ml)",
 "ingredienti_correlati": ["pectina", "bucce_agrumi", "glicerina"],
 "categoria_menu": "FILM OPACHI/COLORATI",
 "consistenza": "film flessibile",
 "colore": "Marrone chiaro",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "< 1 mm (film sottile)",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Resiste moderatamente",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Diventa appiccicoso",
 "aging_7giorni": "Crepe superficiali, Appiccicoso",
 "forabile": "Sì, foro pulito",
 "cucibile": "Sì",
 "incollabile": "Non testato",
 "problemi_realizzazione": ""
 },
 {
 "id": "r19",
 "ricetta_origine": "R19",
 "nome": "Aquafaba Foam Rigido (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Aquafaba montata (200ml liquido ceci) + Agar (10g) + Glicerina (15g) + Acqua (100ml)",
 "ingredienti_correlati": ["aquafaba", "agar", "glicerina"],
 "categoria_menu": "",
 "consistenza": "massa compatta gommosa",
 "colore": "Bianco",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "4-6 mm",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Molto resistente",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Si deforma",
 "aging_7giorni": "Molto indurito / fragile, Molto ingiallito / scurito, Ritirato / rimpicciolito, Deformato / imbarcato, Ammuffito, Crepe superficiali, Odore cambiato, Perso peso significativo",
 "forabile": "Sì, ma si crepa intorno",
 "cucibile": "Non testato",
 "incollabile": "No, non aderisce",
 "problemi_realizzazione": ""
 },
 {
 "id": "r45",
 "ricetta_origine": "R45",
 "nome": "Paper Pulp Modellato 3D (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Carta/cartone riciclato (200g) + Amido cotto (50g) + Acqua (1L) + Stampo",
 "ingredienti_correlati": ["cellulosa_carta", "amido_mais"],
 "categoria_menu": "BIOCOMPOSITI CON SCARTI/RINFORZ",
 "consistenza": "film rigido",
 "colore": "Bianco",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "1-2 mm",
 "test_flessione": "Si piega con fatica",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Molto resistente",
 "test_acqua": "Si scioglie / disgrega",
 "test_calore": "Si ammorbidisce molto",
 "aging_7giorni": "Invariato, Leggermente indurito, Odore cambiato",
 "forabile": "Sì, foro pulito",
 "cucibile": "Sì",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "Estremamente stabile"
 },
 {
 "id": "r48",
 "ricetta_origine": "R48",
 "nome": "Gelatina+Carbone Attivo Assorbente (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Gelatina (50g) + Glicerina (15g) + Carbone attivo in polvere (20g) + Acqua (250ml)",
 "ingredienti_correlati": ["gelatina", "glicerina", "carbone_vegetale"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "film flessibile",
 "colore": "Nero",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "< 1 mm (film sottile)",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Molto resistente",
 "test_acqua": "Non testato",
 "test_calore": "Si ammorbidisce molto",
 "aging_7giorni": "Leggermente indurito, Ritirato / rimpicciolito, Odore cambiato",
 "forabile": "Non testato",
 "cucibile": "Non testato",
 "incollabile": "Non testato",
 "problemi_realizzazione": "L'acqua e la temperatura sono difficili da controllare"
 },
 {
 "id": "r20v",
 "ricetta_origine": "R20V",
 "nome": "Agar+curcuma antimicrobico (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Agar (8g) + Curcuma in polvere (5g) + Glicerina (15g) + Acqua (200ml)",
 "ingredienti_correlati": ["agar", "curcuma", "glicerina"],
 "categoria_menu": "FILM OPACHI/COLORATI",
 "consistenza": "film rigido",
 "colore": "Giallo scuro / ambra",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "4-6 mm",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Si strappa con poca forza",
 "test_acqua": "Impermeabile (goccia resta)",
 "test_calore": "Si deforma",
 "aging_7giorni": "Leggermente indurito, Molto ingiallito / scurito, Ritirato / rimpicciolito, Deformato / imbarcato, Perso peso significativo",
 "forabile": "Non testato",
 "cucibile": "Non testato",
 "incollabile": "Non testato",
 "problemi_realizzazione": "Inizialmente, la miscela di curcuma in polvere e olio vegetale conteneva grumi perché non era stata mescolata accuratamente. Dopo aver regolato il rapporto, il numero di grumi è diminuito significativamente."
 },
 {
 "id": "r29",
 "ricetta_origine": "R29",
 "nome": "Agar Multi-Fibra Composito(Composito Agar Multi-fibra) (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Agar (15g) + Glicerina (25g) + Mix fibre (lino+canapa+carta) (25g) + Acqua (350ml)",
 "ingredienti_correlati": ["agar", "glicerina", "fibre_lino", "cellulosa_carta"],
 "categoria_menu": "BIOCOMPOSITI CON SCARTI/RINFORZ",
 "consistenza": "film rigido",
 "colore": "Giallo chiaro",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "1-2 mm",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Si strappa con poca forza",
 "test_acqua": "Assorbe rapidamente",
 "test_calore": "Non testato",
 "aging_7giorni": "Molto indurito / fragile, Leggermente ingiallito, Molto ingiallito / scurito, Crepe superficiali",
 "forabile": "No, si sbriciola",
 "cucibile": "Non testato",
 "incollabile": "Non testato",
 "problemi_realizzazione": "è facile che si rompa se non si controllano bene le dosi degli ingredienti"
 },
 {
 "id": "r8",
 "ricetta_origine": "R8",
 "nome": "chitosano film rigido (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Chitosano (15g) + Acido acetico (10ml) + Glicerina (20g) + Acqua (250ml)",
 "ingredienti_correlati": ["chitosano", "acido_citrico", "glicerina"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "film rigido",
 "colore": "Il colore dipende dalla soluzione utilizzata per la dissoluzione: può essere avorio, marrone, trasparente, ecc.",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "1-2 mm",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna parzialmente",
 "test_trazione": "Molto resistente",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Si ammorbidisce leggermente",
 "aging_7giorni": "Leggermente ingiallito, Odore cambiato",
 "forabile": "Sì, foro pulito",
 "cucibile": "Sì",
 "incollabile": "Parzialmente",
 "problemi_realizzazione": "Processo sperimentale (sintesi)\n1. Preparazione dei campioni\nHo preparato campioni a base di chitosano utilizzando sistemi acidi differenti:\nacido citrico, acido acetico cinese e acido acetico italiano.\nI campioni sono stati modellati e lasciati asciugare completamente.\n2. Osservazione in ambiente naturale\nI campioni asciutti sono stati posizionati in un ambiente con luce solare e buona ventilazione.\nHo osservato nel tempo eventuali cambiamenti di forma, colore, odore e la presenza di muffe.\nDopo circa due settimane, i campioni non hanno mostrato degradazione evidente.\n3. Test funzionali (fuoco e acqua)\nHo eseguito un test al fuoco su campioni asciutti:\nil materiale è risultato difficile da incendiare e tende a carbonizzarsi senza bruciare in modo continuo.\nSuccessivamente ho effettuato un test in acqua:\ni campioni con acido citrico non si dissolvono in acqua e restano stabili, ma fragili;\ni campioni con acido acetico assorbono acqua e diventano morbidi e gelatinosi, senza dissolversi.\nConclusione breve\nIl materiale mostra un comportamento temporaneo ma controllabile, con reazioni diverse in base all'ambiente e al sistema acido utilizzato.. Il materiale tende a deteriorarsi o a sviluppare muffe facilmente?\nDomanda\nI materiali di origine naturale sono spesso soggetti a degradazione biologica.\nOsservazione sperimentale\nI campioni sono stati lasciati in un ambiente con luce solare e buona ventilazione, e alcuni sono stati anche immersi in acqua.\nIl periodo di osservazione è stato di circa due settimane.\nRisultato\n[ok] Non sono stati osservati segni evidenti di muffa, decomposizione o cattivi odori.\nConclusione\nIl materiale mostra una buona stabilità nel breve periodo, coerente con applicazioni temporanee.\n2. Il materiale si dissolve facilmente a contatto con l'acqua?\nDomanda\nMolti biopolimeri sono considerati instabili in ambiente acquoso.\nOsservazione sperimentale\nSono stati confrontati campioni preparati con sistemi acidi differenti e successivamente immersi in acqua.\nRisultato\n[ok] Il materiale non si dissolve direttamente in acqua, ma reagisce in modo diverso:\nCon acido citrico, il campione resta stabile e recuperabile, ma risulta molto fragile.\nCon acido acetico, il campione assorbe molta acqua e diventa morbido e gelatinoso, mantenendo comunque coesione.\nConclusione\nIl materiale mostra un comportamento di assorbimento e trasformazione, piuttosto che di dissoluzione.\n3. Il materiale è facilmente infiammabile in stato secco?\nDomanda\nLa sicurezza al fuoco è un aspetto importante, soprattutto per applicazioni di packaging.\nOsservazione sperimentale\nÈ stato effettuato un test di combustione su campioni completamente asciutti.\nRisultato\n[ok] Il materiale è difficile da incendiare.\n[ok] Non brucia in modo continuo, ma tende a annerirsi e carbonizzarsi.\nConclusione\nIl materiale non può essere considerato facilmente infiammabile.\n4. Come si comporta il materiale nel tempo (aging)?\nDomanda\nLa temporaneità implica una degradazione immediata o incontrollata?\nOsservazione sperimentale\nI campioni sono stati osservati nel tempo in condizioni naturali di luce e ventilazione.\nRisultato\n[ok] Dopo circa due settimane:\nNessun cambiamento significativo di forma\nNessuna variazione rilevante di odore\nNessun degrado visibile\nConclusione\nIl materiale è temporaneo ma non instabile, con un comportamento prevedibile nel breve periodo.\n5. La comparsa di sostanze superficiali indica un problema del materiale?\nDomanda\nIn alcuni campioni è stata osservata una sostanza simile a umidità o residuo oleoso.\nOsservazione sperimentale\nIl fenomeno si manifesta solo in alcuni campioni a base acquosa dopo un periodo prolungato.\nInterpretazione attuale\n[ok] La causa non è certa.\n[ok] Potrebbe essere legata a migrazione interna di componenti o a processi di aging.\nConclusione\nIl fenomeno richiede ulteriori indagini e non può essere considerato un fallimento del materiale.\n6. Conclusione generale del processo sperimentale\n[ok] Nel complesso, il materiale testato:\nNon è permanente\nNon è immediatamente degradabile\nNon è facilmente infiammabile\nCambia comportamento in modo prevedibile in base all'ambiente\nConclusione finale\nIl valore del materiale non risiede nella sua durata,\nma nella possibilità di progettare e controllare il suo comportamento nel tempo."
 },
 {
 "id": "r26",
 "ricetta_origine": "R26",
 "nome": "Resina di pino + Segatura (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Segatura pino finissima (100g) + Resina pino/colofonia (30g) + Cera d'api opzionale (10g)",
 "ingredienti_correlati": ["segatura", "colofonia", "cera_api"],
 "categoria_menu": "BIOCOMPOSITI CON SCARTI/RINFORZ",
 "consistenza": "massa compatta rigida",
 "colore": "Marrone scuro",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "4-6 mm",
 "test_flessione": "Rigido (non si piega)",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Molto resistente",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Si ammorbidisce leggermente",
 "aging_7giorni": "Leggermente ingiallito",
 "forabile": "Non testato",
 "cucibile": "No, troppo duro",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "Dopo aver superato i test relativi all'acqua, emette un suono crepitante prima di frantumarsi in frammenti; durante le prove ad alta temperatura, si scioglie."
 },
 {
 "id": "r12",
 "ricetta_origine": "R12",
 "nome": "Gelatina spugnosa areata (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Gelatina (60g) + Glicerina (10g) + Acqua (300ml) + Bicarbonato (5g)",
 "ingredienti_correlati": ["gelatina", "glicerina", "bicarbonato"],
 "categoria_menu": "GEL E FORME 3D",
 "consistenza": "massa compatta gommosa",
 "colore": "Bianco",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "> 6 mm",
 "test_flessione": "Si piega su se stesso",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Si strappa con poca forza",
 "test_acqua": "Si scioglie / disgrega",
 "test_calore": "Si deforma",
 "aging_7giorni": "Leggermente ingiallito, Ritirato / rimpicciolito",
 "forabile": "Non testato",
 "cucibile": "Sì",
 "incollabile": "Non testato",
 "problemi_realizzazione": "Ricetta non totalmente valida"
 },
 {
 "id": "r23b",
 "ricetta_origine": "R23B",
 "nome": "Amido +Bucce Agrumi Profumato (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Amido mais (30g) + Bucce agrumi essiccate tritate (25g) + Glicerina (10g) + Aceto (5ml) + Acqua (200ml)",
 "ingredienti_correlati": ["amido_mais", "bucce_agrumi", "glicerina", "aceto"],
 "categoria_menu": "COMPOSITI E CARICHE",
 "consistenza": "film rigido",
 "colore": "Bianco",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "> 6 mm",
 "test_flessione": "Rigido (non si piega)",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Molto resistente",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Diventa appiccicoso",
 "aging_7giorni": "Molto indurito / fragile, Leggermente ingiallito, Ritirato / rimpicciolito, Ammuffito, Crepe superficiali",
 "forabile": "No, si sbriciola",
 "cucibile": "No, troppo duro",
 "incollabile": "No, non aderisce",
 "problemi_realizzazione": "Molto facile da sbriciolare, la muffa inizia dopo qualche giorno in acqua."
 },
 {
 "id": "r25",
 "ricetta_origine": "R25",
 "nome": "Agar+Spirulina Bioattivo (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Agar (12g) + Polvere spirulina (25g) + Glicerina (20g) + Acqua (280ml)",
 "ingredienti_correlati": ["agar", "spirulina", "glicerina"],
 "categoria_menu": "MATERIALI BIOLOGICI CRESCIUTI",
 "consistenza": "film rigido",
 "colore": "Verde Scuro",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "< 1 mm (film sottile)",
 "test_flessione": "Si piega con fatica",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Molto resistente",
 "test_acqua": "Assorbe rapidamente",
 "test_calore": "Stabile",
 "aging_7giorni": "Invariato",
 "forabile": "Sì, ma si crepa intorno",
 "cucibile": "No, troppo duro",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "È difficile da mescolare in modo uniforme, tende a formare grumi,Tende ad arricciarsi."
 },
 {
 "id": "r35",
 "ricetta_origine": "R35",
 "nome": "Agar + Fondi di caffè composito (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Agar (8g) + Fondi caffè essiccati (20-40g) + Glicerina (15g) + Acqua (200ml)",
 "ingredienti_correlati": ["agar", "fondi_caffe", "glicerina"],
 "categoria_menu": "BIOCOMPOSITI CON SCARTI/RINFORZ",
 "consistenza": "massa compatta rigida",
 "colore": "Marrone scuro",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "4-6 mm",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Si strappa con poca forza",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Stabile",
 "aging_7giorni": "Leggermente indurito, Ritirato / rimpicciolito",
 "forabile": "Sì, foro pulito",
 "cucibile": "No, troppo duro",
 "incollabile": "Non testato",
 "problemi_realizzazione": "Nessun problema evidente , difficoltà iniziale per il fatto che si è ridotto molto e asciugato velocemente"
 },
 {
 "id": "r30",
 "ricetta_origine": "R30",
 "nome": "Gusci d'uovo e gelatina (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Gelatina (55g) + Glicerina (15g) + Gusci uovo polverizzati (20g) + Acqua (260ml)",
 "ingredienti_correlati": ["gelatina", "glicerina", "gusci_uovo"],
 "categoria_menu": "BIOCOMPOSITI CON SCARTI/RINFORZ",
 "consistenza": "film rigido",
 "colore": "Crema",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "1-2 mm",
 "test_flessione": "Non testabile",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Si strappa con poca forza",
 "test_acqua": "Assorbe rapidamente",
 "test_calore": "Stabile",
 "aging_7giorni": "Leggermente indurito, Crepe superficiali",
 "forabile": "Sì, ma si crepa intorno",
 "cucibile": "Sì",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "Troppo fragile con manipolazione, tende a creparsi e perdere polvere"
 },
 {
 "id": "r38",
 "ricetta_origine": "R38",
 "nome": "Alginato Forme Complesse Multi-colore (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Alginato (25g) + CaCl2 doppio bagno + Pigmenti stratificati + Stampi negativi",
 "ingredienti_correlati": ["alginato", "cacl2"],
 "categoria_menu": "GEL E FORME 3D",
 "consistenza": "film flessibile",
 "colore": "Verde",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "< 1 mm (film sottile)",
 "test_flessione": "Non testabile",
 "test_flessione_ritorno": "Non testabile",
 "test_trazione": "Si strappa subito",
 "test_acqua": "Impermeabile (goccia resta)",
 "test_calore": "Stabile",
 "aging_7giorni": "Deformato / imbarcato, Appiccicoso",
 "forabile": "No, si sbriciola",
 "cucibile": "No, troppo fragile",
 "incollabile": "No, non aderisce",
 "problemi_realizzazione": ""
 },
 {
 "id": "r43",
 "ricetta_origine": "R43",
 "nome": "Albumina Bioplastica Antibatterica (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Albume uovo (100ml = 3 uova) + Glicerina (15g) + Aceto (5ml) + Acqua (50ml)",
 "ingredienti_correlati": ["albumina", "glicerina", "aceto"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "massa compatta gommosa",
 "colore": "Giallo chiaro",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "< 1 mm (film sottile)",
 "test_flessione": "Si piega su se stesso",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Si strappa con poca forza",
 "test_acqua": "Impermeabile (goccia resta)",
 "test_calore": "Stabile",
 "aging_7giorni": "Invariato, Leggermente ingiallito",
 "forabile": "Sì, foro pulito",
 "cucibile": "Sì",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "La temperatura della soluzione è difficile da controllare quando viene riscaldata ed è difficile che si solidifichi quando si forma la pellicola finale."
 },
 {
 "id": "r10",
 "ricetta_origine": "R10",
 "nome": "Caseina plastica dura (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Latte scremato (500ml) + Aceto (50ml) + Borace (2g)",
 "ingredienti_correlati": ["caseina", "aceto", "allume"],
 "categoria_menu": "MATERIALI OPACHI RIGIDI/PLASTICI",
 "consistenza": "massa compatta rigida",
 "colore": "Crema",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "4-6 mm",
 "test_flessione": "Non testabile",
 "test_flessione_ritorno": "Non testabile",
 "test_trazione": "Molto resistente",
 "test_acqua": "Impermeabile (goccia resta)",
 "test_calore": "Stabile",
 "aging_7giorni": "Molto indurito / fragile, Crepe superficiali, Odore cambiato",
 "forabile": "No, si sbriciola",
 "cucibile": "No, troppo duro",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "È molto difficile. Ed è troppo fragile."
 },
 {
 "id": "r6",
 "ricetta_origine": "R6",
 "nome": "Pectina Elastica (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Pectina (20g) + Glicerina (30g) + Acqua (250ml)",
 "ingredienti_correlati": ["pectina", "glicerina"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "film flessibile",
 "colore": "1.Giallo chiaro 2.Blu 3. Marrone scuro",
 "trasparenza": "Trasparente (si vede attraverso)",
 "spessore": "1-2 mm",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna parzialmente",
 "test_trazione": "Resiste moderatamente",
 "test_acqua": "Si scioglie / disgrega",
 "test_calore": "Si ammorbidisce leggermente",
 "aging_7giorni": "Leggermente indurito, Ritirato / rimpicciolito, Perso peso significativo",
 "forabile": "Non testato",
 "cucibile": "Sì",
 "incollabile": "Sì, buona adesione",
 "problemi_realizzazione": "È molto fragile quando viene staccato dalla superficie del contenitore e si asciuga lentamente."
 },
 {
 "id": "r28b",
 "ricetta_origine": "R28B",
 "nome": "Caseina Gesso (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Latte intero (500ml) + Aceto (30ml) + Gesso in polvere (40g) + Acqua per impasto",
 "ingredienti_correlati": ["caseina", "aceto", "gesso"],
 "categoria_menu": "COMPOSITI E CARICHE",
 "consistenza": "massa compatta rigida",
 "colore": "Giallo chiaro",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "2-4 mm",
 "test_flessione": "Rigido (non si piega)",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Molto resistente",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Si ammorbidisce leggermente",
 "aging_7giorni": "Molto indurito / fragile, Leggermente ingiallito, Crepe superficiali, Odore cambiato",
 "forabile": "Sì, foro pulito",
 "cucibile": "No, troppo duro",
 "incollabile": "Parzialmente",
 "problemi_realizzazione": ""
 },
 {
 "id": "r4",
 "ricetta_origine": "R4",
 "nome": "Amido Mais Bioplastica (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Amido mais (40g) + Glicerina (12g) + Acqua (200ml) + Aceto (5ml)",
 "ingredienti_correlati": ["amido_mais", "glicerina", "aceto"],
 "categoria_menu": "MATERIALI OPACHI RIGIDI/PLASTICI",
 "consistenza": "massa compatta rigida",
 "colore": "Giallo chiaro",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "2-4 mm",
 "test_flessione": "Rigido (non si piega)",
 "test_flessione_ritorno": "Si rompe piegando",
 "test_trazione": "Si strappa subito",
 "test_acqua": "Si scioglie / disgrega",
 "test_calore": "Stabile",
 "aging_7giorni": "Leggermente ingiallito",
 "forabile": "No, si sbriciola",
 "cucibile": "No, troppo duro",
 "incollabile": "Parzialmente",
 "problemi_realizzazione": "La bioplastica è troppo fragile e si rompe facilmente; le materie prime non sono distribuite in modo uniforme e presentano una consistenza granulosa; dopo la formatura si verificano ritiro e deformazione; la resistenza meccanica è bassa e le prestazioni a trazione sono scarse."
 },
 {
 "id": "r5",
 "ricetta_origine": "R5",
 "nome": "Amido Patata Trasparente (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 2,
 "colore_validazione": "bianco",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Amido patata (30g) + Glicerina (15g) + Acqua (200ml)",
 "ingredienti_correlati": ["amido_patata", "glicerina"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "film rigido",
 "colore": "Bianco",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "1-2 mm",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Resiste moderatamente",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Si ammorbidisce leggermente",
 "aging_7giorni": "Molto indurito / fragile, Ritirato / rimpicciolito, Deformato / imbarcato",
 "forabile": "No, troppo duro",
 "cucibile": "No, troppo duro",
 "incollabile": "Non testato",
 "problemi_realizzazione": "Avendo preparato la stessa ricetta diverse volte, la trasparenza è variata notevolmente. La risposta sopra riportata si basa sul primo tentativo. I modelli a bassa trasparenza hanno temperature di cottura basse, elevata fluidità ed eccellenti proprietà di modellabilità, ma la loro trasparenza è scarsa."
 },
 {
 "id": "r13",
 "ricetta_origine": "R13",
 "nome": "Amido di tapioca flessibile (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Amido tapioca (35g) + Glicerina (18g) + Acqua (220ml)",
 "ingredienti_correlati": ["amido_tapioca", "glicerina"],
 "categoria_menu": "FILM TRASPARENTI/FLESSIBILI",
 "consistenza": "film flessibile",
 "colore": "Bianco",
 "trasparenza": "Traslucido (passa luce, non si vede attraverso)",
 "spessore": "< 1 mm (film sottile)",
 "test_flessione": "Si piega facilmente",
 "test_flessione_ritorno": "Torna alla forma originale (elastico)",
 "test_trazione": "Si strappa subito",
 "test_acqua": "Assorbe lentamente",
 "test_calore": "Si ammorbidisce leggermente",
 "aging_7giorni": "Ritirato / rimpicciolito",
 "forabile": "Sì, ma si crepa intorno",
 "cucibile": "No, troppo fragile",
 "incollabile": "Non testato",
 "problemi_realizzazione": "Proporzioni da rivedere, stesura sottile per migliorare asciugatura e renderlo omogeneo, muffa nelle zone più spesse (perché fatica ad asciugare)."
 },
 {
 "id": "r47",
 "ricetta_origine": "R47",
 "nome": "Amido + Argilla Rinforzato (AA)",
 "categoria": "IN_PROGRESS",
 "trl": 1,
 "colore_validazione": "rosa",
 "fonte": "Lab Accademia Albertina 2024-25",
 "ingredienti_descrizione": "Amido mais (40g) + Argilla/caolino (15g) + Glicerina (12g) + Aceto (5ml) + Acqua (200ml)",
 "ingredienti_correlati": ["amido_mais", "caolino", "glicerina", "aceto"],
 "categoria_menu": "MATERIALI OPACHI RIGIDI/PLASTICI",
 "consistenza": "massa compatta rigida",
 "colore": "Bianco-grigio",
 "trasparenza": "Opaco (non passa luce)",
 "spessore": "2-3 mm",
 "test_flessione": "Rigido (non si piega)",
 "test_flessione_ritorno": "N/D",
 "test_trazione": "N/D",
 "test_acqua": "N/D",
 "test_calore": "N/D",
 "aging_7giorni": "N/D",
 "forabile": "N/D",
 "cucibile": "N/D",
 "incollabile": "N/D",
 "problemi_realizzazione": "Dispersione argilla uniforme, cottura completa amido, omogeneità impasto"
 }
 ,
    {"id":"IED_Olibrix","ricetta_origine":"IED_","nome":"Olibrix (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"OLIBRIX","ingredienti_descrizione":"Sansa solida + parte liquida","ingredienti_correlati":[],"categoria_menu":"composito","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Oryza_Pack","ricetta_origine":"IED_","nome":"Oryza Pack (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"ORYZA PACK","ingredienti_descrizione":"Farina riso + riso soffiato + latte riso + bicarbonato + limone + olio + miele + acqua gasata + ammoniaca dolci","ingredienti_correlati":[],"categoria_menu":"schiuma","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Bee_Sticky","ricetta_origine":"IED_","nome":"Bee Sticky (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"BEE STICKY","ingredienti_descrizione":"Resina pino 50g + cera api 25g + glicerolo 7.5g + carbone 2 past. + olio veg 1 cucch.","ingredienti_correlati":[],"categoria_menu":"rigido","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Cork_Jacket","ricetta_origine":"IED_","nome":"Cork Jacket (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"CORK JACKET","ingredienti_descrizione":"Sughero 70% + collante 30% (resina pino + cera api + glicerolo + olio oliva)","ingredienti_correlati":[],"categoria_menu":"composito","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Schin","ricetta_origine":"IED_","nome":"Schin (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"SCHIN","ingredienti_descrizione":"SCOBY 30g + tè verde 3g + glucosio 70g + acqua 1L","ingredienti_correlati":[],"categoria_menu":"pelle","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Bonelith","ricetta_origine":"IED_","nome":"Bonelith (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"BONELITH","ingredienti_descrizione":"Latte 100-300ml + aceto 15-45ml (± alcool isopropilico, fondi caffè, gusci uovo)","ingredienti_correlati":[],"categoria_menu":"rigido","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Alisea","ricetta_origine":"IED_","nome":"Alisea (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"ALISEA","ingredienti_descrizione":"Aquafaba 100ml + zucchero velo 30g + amido 5g + cremor tartaro 2g + limone 1ml","ingredienti_correlati":[],"categoria_menu":"rigido","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Caseo2","ricetta_origine":"IED_","nome":"Caseo² (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"CASEO²","ingredienti_descrizione":"Caseina (~130g da 1.5L latte) + aceto + zucchero 10g + bastoncini legno","ingredienti_correlati":[],"categoria_menu":"rigido","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Checkerboard_Amido","ricetta_origine":"IED_","nome":"Checkerboard Amido (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"CHECKERBOARD","ingredienti_descrizione":"Acqua 59% + amido 15% + glicerina 11% + aceto 15%","ingredienti_correlati":[],"categoria_menu":"film","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Checkerboard_Gelatina","ricetta_origine":"IED_","nome":"Checkerboard Gelatina (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"CHECKERBOARD","ingredienti_descrizione":"Acqua 75% + gelatina 13% + glicerina 6% + aceto 6%","ingredienti_correlati":[],"categoria_menu":"rigido","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Arabic_Sensation","ricetta_origine":"IED_","nome":"Arabic Sensation (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"ARABIC SENS.","ingredienti_descrizione":"Gomma arabica 10g + segatura 2g + profumo 2g","ingredienti_correlati":[],"categoria_menu":"composito","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Seed_in","ricetta_origine":"IED_","nome":"Seed-in (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"SEED-IN","ingredienti_descrizione":"Acqua 90% + agar 6% + glicerina 4%","ingredienti_correlati":[],"categoria_menu":"film","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""},
    {"id":"IED_Oobleck_D","ricetta_origine":"IED_","nome":"Oobleck D (IED)","categoria":"IN_PROGRESS","trl":1,"colore_validazione":"rosa","fonte":"OOBLECK","ingredienti_descrizione":"Amido mais + glicerina + acqua","ingredienti_correlati":[],"categoria_menu":"gel","consistenza":"","colore":"","trasparenza":"","spessore":"","test_flessione":"Da testare","test_flessione_ritorno":"Da testare","test_trazione":"Da testare","test_acqua":"Da testare","test_calore":"Da testare","aging_7giorni":"Da testare","forabile":true,"cucibile":false,"incollabile":"Da testare","problemi_realizzazione":""}
  ]
};

const INGREDIENTI_DATA = {
 "metadata": {
 "versione": "11.0",
 "data": "2026-02-10",
 "fasi_completate": [
 "Fase1_42ingredienti",
 "Fase2_letteratura",
 "Fase3_maker",
 "Fase4_compatibilita"
 ],
 "totale_ingredienti": 70,
 "famiglie": [
 "PROTEINA",
 "POLISACCARIDE_NEUTRO",
 "POLISACCARIDE_ANIONICO",
 "POLICATIONE",
 "PLASTIFICANTE",
 "SALE_RETICOLANTE",
 "RESINA_LIPIDE",
 "COLORANTE",
 "CARICA",
 "ADDITIVO",
 "COLTURA"
 ],
 "totale_famiglie": 11,
 "regole_compatibilita": "11x11 matrice + 14 eccezioni specifiche",
 "fonti": {
 "scientifiche": [
 "Food Hydrocolloids",
 "Carbohydrate Polymers",
 "Biofabrication",
 "MDPI Materials",
 "J. Fungi"
 ],
 "maker": [
 "Materiom.org",
 "Instructables",
 "Fabricademy",
 "HKU Labs",
 "Make Magazine"
 ],
 "integrative": "Note compatibilità SCOBY/Micelio da analisi specialistica"
 },
 "nuovi_v5": [
 "zeina",
 "olio_tung",
 "lattato_calcio",
 "borace",
 "grafite",
 "pectina"
 ],
 "nuove_sinergie_v5": 10,
 "verifiche": "Cross-check ricette Gemini con letteratura scientifica",
 "note_versione": "v11 - Colture: te_nero_forte (SALE_RETICOLANTE), canapa_hurd, acido_stearico. Campo ruolo_coltura. Materiali SCOBY e Mycocomposite."
 },
 "famiglie": {
 "PROTEINA": {
 "descrizione": "Proteine gelificanti e filmogene",
 "caratteristica": "Gelificazione termoreversibile, sensibili al pH",
 "esempi": [
 "gelatina",
 "caseina",
 "albumina",
 "chitosano",
 "cheratina"
 ]
 },
 "POLISACCARIDE_NEUTRO": {
 "descrizione": "Polisaccaridi senza carica ionica",
 "caratteristica": "Gelificazione termica, neutri",
 "esempi": [
 "agar",
 "amido_mais",
 "amido_patata",
 "pectina",
 "gomma_guar",
 "xantana"
 ]
 },
 "POLISACCARIDE_ANIONICO": {
 "descrizione": "Polisaccaridi con carica negativa",
 "caratteristica": "Reagiscono con cationi (Ca²⁺)",
 "esempi": [
 "alginato",
 "carragenina"
 ]
 },
 "POLICATIONE": {
 "descrizione": "Polimeri con carica positiva",
 "caratteristica": "Antibatterico, richiede pH acido",
 "esempi": [
 "chitosano"
 ]
 },
 "PLASTIFICANTE": {
 "descrizione": "Aumentano flessibilità",
 "caratteristica": "Si inseriscono tra catene polimeriche",
 "esempi": [
 "glicerina",
 "sorbitolo",
 "olio_lino"
 ]
 },
 "SALE_RETICOLANTE": {
 "descrizione": "Creano legami tra catene",
 "caratteristica": "Cross-linking ionico o covalente",
 "esempi": [
 "cacl2",
 "tannini",
 "allume",
 "te_nero_forte"
 ]
 },
 "RESINA_LIPIDE": {
 "descrizione": "Cere, oli, resine",
 "caratteristica": "Barriera idrofoba, coating",
 "esempi": [
 "cera_carnauba",
 "cera_api",
 "gommalacca",
 "colofonia",
 "acido_stearico"
 ]
 },
 "CARICA": {
 "descrizione": "Rinforzi e filler",
 "caratteristica": "Modificano proprietà meccaniche",
 "esempi": [
 "fondi_caffe",
 "cellulosa_carta",
 "fibre_cotone",
 "fibre_lino",
 "caolino",
 "gusci_uovo",
 "carbonato_calcio"
 ]
 },
 "COLORANTE": {
 "descrizione": "Pigmenti naturali",
 "caratteristica": "Colorazione",
 "esempi": [
 "curcuma",
 "spirulina",
 "paprika",
 "carbone_vegetale",
 "ossido_ferro"
 ]
 },
 "ADDITIVO": {
 "descrizione": "Funzioni ausiliarie",
 "caratteristica": "Emulsionanti, acidificanti, conservanti",
 "esempi": [
 "lecitina",
 "acido_citrico",
 "aceto",
 "oli_essenziali",
 "bicarbonato",
 "acqua"
 ]
 },
 "BIOLOGICO": {
 "descrizione": "Organismi viventi",
 "caratteristica": "Crescita, fermentazione",
 "esempi": [
 "scoby",
 "micelio"
 ]
 }
 },
 "ingredienti": {
 "gelatina": {
 "nome": "Gelatina Alimentare",
 "famiglia": "PROTEINA",
 "categoria": "Matrice proteica",
 "fonte": "Collagene animale (bovino, suino, pesce)",
 "reperibilita": "facile",
 "vegano": false,
 "food_safe": true,
 "funzione": "Matrice filmogena, gelificante termoreversibile",
 "descrizione": "Proteina ottenuta per idrolisi del collagene. Forma gel elastici e film flessibili eccellenti. Termoreversibile: fonde a 35-40°C, gelifica sotto 15-20°C.",
 "proprieta": {
 "struttura": "Film o gel elastico",
 "trasparenza": "Alta",
 "flessibilita": "Alta",
 "barriera_O2": "Buona",
 "barriera_H2O": "Scarsa"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 15,
 "temp_dissoluzione_min": 50,
 "temp_dissoluzione_max": 60,
 "temp_gelificazione": 20,
 "temp_fusione_gel": 35,
 "pH_min": 4,
 "pH_max": 9
 },
 "lavorabilita": {
 "forma_tipica": [
 "film",
 "gel",
 "coating",
 "capsule"
 ],
 "termosaldabile": true,
 "temp_saldatura_min": 50,
 "temp_saldatura_max": 60,
 "incollabile_con": [
 "acqua calda",
 "se stessa",
 "altre proteine"
 ],
 "cucibile": true,
 "note_cucibilita": "Film sottili cucibili, forare prima per evitare strappi",
 "colorabile": true,
 "metodo_colorazione": "Coloranti alimentari idrosolubili, in massa prima di colare",
 "reversibile": true,
 "stampabile_3D": true,
 "note_stampabilita": "Estrusione a 40-50°C, solidifica raffreddando. Buona per bioprinting"
 },
 "durabilita": {
 "durata_stimata": "Settimane-mesi (se asciutto, ambiente controllato)",
 "fattori_degradazione": [
 "umidità (rigonfia/ammorbidisce)",
 "calore >30°C (fonde)",
 "muffe",
 "enzimi proteolitici"
 ],
 "condizioni_conservazione": "Ambiente secco <60% UR, temperatura <25°C, contenitore ermetico",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Idratare in acqua fredda 5-10 min (foglio) o direttamente (polvere)",
 "Riscaldare a 50-60°C fino a dissoluzione completa",
 "NON BOLLIRE - degrada sopra 70°C",
 "Versare e lasciar raffreddare"
 ],
 "incompatibilita": [
 "Temperature > 70°C (degrada)",
 "Enzimi proteolitici (ananas, papaya, kiwi freschi)"
 ],
 "alternative": "Agar (vegano, più rigido), carragenina iota (vegana)",
 "acquisto": "Supermercati (fogli o polvere), Amazon. Preferire polvere ad alto bloom (200-250)"
 ,
      "note_IED": ["BLOOM: scala 80-150 (bassa), 150-220 (media), 220-300+ (alta) — definisce rigidità gel [REYNA]","TIPO: A (acido, suina) → gel morbidi. B (alcalino, bovina) → gel rigidi [REYNA]","PROVENIENZA: bovina (farmaceutico), suina (economica), ittica (fusione più bassa) [REYNA]","Film essiccato diventa quasi termoindurente: non rifonde facilmente, diverso dal gel fresco [CHECKERBOARD]","Come legante per sughero → rischio muffe rapido [CORK JACKET]"],
      "parametri_IED": {"bloom_range":"80-300+ (bassa/media/alta)"},
      "incompatibilita_IED": "Sughero (come legante → muffe rapide)"
    },
 "caseina": {
 "nome": "Caseina",
 "famiglia": "PROTEINA",
 "categoria": "Matrice proteica",
 "fonte": "Latte (80% delle proteine del latte)",
 "reperibilita": "media",
 "vegano": false,
 "food_safe": true,
 "funzione": "Matrice per plastiche rigide (galalite), reticolabile",
 "descrizione": "Proteina del latte precipitabile con acidi. Forma plastiche dure e lucidabili. Storica: galalite usata per bottoni e penne fino agli anni '50.",
 "proprieta": {
 "struttura": "Plastica rigida",
 "trasparenza": "Media-bassa",
 "flessibilita": "Bassa",
 "barriera_O2": "Media",
 "barriera_H2O": "Scarsa (senza reticolazione)"
 },
 "parametri": {
 "range_percent_min": 10,
 "range_percent_max": 30,
 "temp_dissoluzione_min": 60,
 "temp_dissoluzione_max": 80,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 4,
 "pH_max": 7
 },
 "lavorabilita": {
 "forma_tipica": [
 "plastica rigida",
 "oggetti stampati a caldo",
 "bottoni",
 "fogli"
 ],
 "termosaldabile": false,
 "temp_saldatura_min": null,
 "temp_saldatura_max": null,
 "incollabile_con": [
 "colla vinilica",
 "se stessa a caldo"
 ],
 "cucibile": false,
 "note_cucibilita": "Troppo rigida, forare e usare rivetti",
 "colorabile": true,
 "metodo_colorazione": "Pigmenti in massa durante impasto, o tintura successiva con coloranti acidi",
 "reversibile": false,
 "stampabile_3D": false,
 "note_stampabilita": "Non adatta, preferire stampaggio a compressione"
 },
 "durabilita": {
 "durata_stimata": "Anni (se reticolata con tannini/formaldeide)",
 "fattori_degradazione": [
 "umidità (senza reticolazione)",
 "muffe",
 "insetti"
 ],
 "condizioni_conservazione": "Ambiente secco. Reticolare per uso in ambienti umidi",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Scaldare latte a 60-80°C",
 "Aggiungere acido (aceto 10-15% o limone)",
 "Filtrare e raccogliere i grumi",
 "Impastare a caldo, modellare",
 "Opzionale: reticolare con tannini per resistenza acqua"
 ],
 "incompatibilita": [
 "Calcio in eccesso (aggrega troppo)",
 "pH molto basico"
 ],
 "alternative": "Gelatina (più flessibile), proteine di soia (vegane)",
 "acquisto": "Si prepara dal latte fresco + acido. Caseina in polvere: Amazon, fornitori caseifici"
 ,
      "note_IED": ["RESA: ~130g caseina secca da 1.5L latte (~8.7%) [CASEO²]","ESTRAZIONE: 50°C con aceto di mele. Aceto >> limone come coagulante (limone → fragile) [CASEO², BONELITH]","TRE USI: plastica dura (con reticolante), colla (con bicarbonato), pittura a tempera (con bic.+pigmenti) [BONELITH]","DUREZZA: scala empirica silicone 1-2, caseina ~5-6, ABS 6-7, acciaio 9-10 [CASEO²]","ESSICCAZIONE: ottimale 45°C ventilato 72h + 48h all'aria. Strizzatura meccanica forte riduce restringimento [CASEO²]","RESISTENZA H₂O = NULLA senza reticolante (confermato) [BONELITH]","Resistenza caduta 4.5m con formulazione compatta [CASEO²]","Carteggiabile, forabile, tagliabile [CASEO²]","ZUCCHERO ~15% su peso caseina → plastifica, elimina vetrosità [BONELITH]"],
      "parametri_IED": {"resa_estrazione":"~130g/1.5L latte","temp_estrazione":"50°C con aceto"}
    },
 "albumina": {
 "nome": "Albumina (Albume d'uovo)",
 "famiglia": "PROTEINA",
 "categoria": "Matrice proteica",
 "fonte": "Uova",
 "reperibilita": "facile",
 "vegano": false,
 "food_safe": true,
 "funzione": "Schiumogeno, legante, filmogeno",
 "descrizione": "Proteina dell'albume d'uovo. Coagula irreversibilmente a caldo. Ottimo schiumogeno per strutture porose.",
 "proprieta": {
 "struttura": "Film o schiuma",
 "trasparenza": "Alta (liquido), opaco (cotto)",
 "flessibilita": "Bassa (cotto)",
 "barriera_O2": "Media",
 "barriera_H2O": "Scarsa"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 100,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 20,
 "temp_gelificazione": 62,
 "temp_fusione_gel": null,
 "pH_min": 6,
 "pH_max": 9
 },
 "lavorabilita": {
 "forma_tipica": [
 "schiuma",
 "film sottile",
 "legante",
 "coating"
 ],
 "termosaldabile": false,
 "temp_saldatura_min": null,
 "temp_saldatura_max": null,
 "incollabile_con": [
 "se stessa prima di cottura"
 ],
 "cucibile": false,
 "note_cucibilita": "Film troppo fragili",
 "colorabile": true,
 "metodo_colorazione": "Coloranti alimentari prima di cottura (il bianco cotto è opaco)",
 "reversibile": false,
 "stampabile_3D": false,
 "note_stampabilita": "Non adatta, coagula irreversibilmente"
 },
 "durabilita": {
 "durata_stimata": "Giorni-settimane (fragile, igroscopica)",
 "fattori_degradazione": [
 "umidità",
 "muffe",
 "fragilità meccanica"
 ],
 "condizioni_conservazione": "Ambiente secco, maneggiare con cura",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Separare l'albume dal tuorlo con cura (anche tracce di grasso impediscono la montatura)",
 "Per schiume: montare a neve ferma, incorporando aria che crea la struttura porosa",
 "Per legante/coating: usare l'albume liquido tal quale, stendere a pennello o miscelare",
 "La cottura a 60-80\u00b0C denatura le proteine in modo IRREVERSIBILE: definire la forma prima",
 "ATTENZIONE: sotto 60\u00b0C il processo \u00e8 reversibile, sopra non si torna indietro"
 ],
 "incompatibilita": [
 "Grassi (impediscono montatura)",
 "pH molto acido"
 ],
 "alternative": "Aquafaba (vegana, da ceci)",
 "acquisto": "Supermercati (uova fresche), albumina in polvere su Amazon"
 },
 "chitosano": {
 "nome": "Chitosano",
 "famiglia": "POLICATIONE",
 "categoria": "Matrice polisaccaridica",
 "fonte": "Chitina (esoscheletri di crostacei, insetti)",
 "reperibilita": "media",
 "vegano": false,
 "food_safe": true,
 "funzione": "Filmogeno antibatterico, policatione",
 "descrizione": "Unico polisaccaride naturale carico positivamente. Proprietà antibatteriche. Richiede pH acido per sciogliersi.",
 "proprieta": {
 "struttura": "Film resistente",
 "trasparenza": "Alta",
 "flessibilita": "Media",
 "barriera_O2": "Buona",
 "barriera_H2O": "Media",
 "antibatterico": true
 },
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 3,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 50,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 3,
 "pH_max": 6
 },
 "lavorabilita": {
 "forma_tipica": [
 "film",
 "coating",
 "membrane",
 "microsfere"
 ],
 "termosaldabile": false,
 "temp_saldatura_min": null,
 "temp_saldatura_max": null,
 "incollabile_con": [
 "soluzione acida diluita",
 "se stesso"
 ],
 "cucibile": true,
 "note_cucibilita": "Film flessibili cucibili se plastificati",
 "colorabile": true,
 "metodo_colorazione": "Coloranti acidi, in massa. Attenzione: pH deve restare <6",
 "reversibile": false,
 "stampabile_3D": true,
 "note_stampabilita": "Bioprinting con soluzioni acide, gelifica con basi o polianioni"
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni (più stabile di gelatina)",
 "fattori_degradazione": [
 "pH basico (precipita)",
 "enzimi chitinasi",
 "luce UV prolungata"
 ],
 "condizioni_conservazione": "Ambiente secco, pH neutro-acido",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere in soluzione acida (aceto 1-2% o acido acetico 1%)",
 "Mescolare a lungo fino a dissoluzione (può richiedere ore)",
 "Filtrare eventuali grumi",
 "Colare e lasciar asciugare"
 ],
 "incompatibilita": [
 "pH > 6 (precipita)",
 "Polianioni (alginato) formano complessi"
 ],
 "alternative": "Nessuna con proprietà antibatteriche comparabili",
 "acquisto": "Amazon, fornitori chimici, fornitori cosmetici. In polvere"
 ,
      "note_IED": ["Variante fungina disponibile: adatta a usi vegani, più sostenibile della versione da crostacei [ALISEA]","Processo completo: pulizia → demineralizzazione → deproteizzazione → triturazione → formatura [ALISEA]"]
    },
 "cheratina": {
 "nome": "Cheratina",
 "famiglia": "PROTEINA",
 "categoria": "Matrice proteica",
 "fonte": "Capelli, piume, lana, unghie",
 "reperibilita": "media",
 "vegano": false,
 "food_safe": false,
 "funzione": "Proteina strutturale molto resistente",
 "descrizione": "Proteina di capelli, unghie, piume. Difficile da solubilizzare ma forma film molto resistenti. Estraibile da scarti.",
 "proprieta": {
 "struttura": "Film resistente",
 "trasparenza": "Media",
 "flessibilita": "Media",
 "barriera_O2": "Buona",
 "barriera_H2O": "Media"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 20,
 "temp_dissoluzione_min": 60,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 8,
 "pH_max": 13
 },
 "lavorabilita": {
 "forma_tipica": [
 "film resistente",
 "compositi con fibre"
 ],
 "termosaldabile": false,
 "temp_saldatura_min": null,
 "temp_saldatura_max": null,
 "incollabile_con": [
 "soluzioni alcaline diluite"
 ],
 "cucibile": true,
 "note_cucibilita": "Film resistenti cucibili",
 "colorabile": true,
 "metodo_colorazione": "Difficile, richiede mordenti. Meglio usare fonti già colorate",
 "reversibile": false,
 "stampabile_3D": false,
 "note_stampabilita": "Estrazione troppo complessa per bioprinting standard"
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni (molto resistente)",
 "fattori_degradazione": [
 "degradazione lenta",
 "attacco microbico limitato"
 ],
 "condizioni_conservazione": "Stabile in condizioni normali",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Estrazione richiede condizioni alcaline forti o riducenti",
 "Sciogliere in NaOH o urea/mercaptoetanolo",
 "Neutralizzare e colare",
 "Processo complesso - per utenti avanzati"
 ],
 "incompatibilita": [
 "Difficile dissoluzione",
 "Richiede reagenti aggressivi"
 ],
 "alternative": "Gelatina, collagene (più facili)",
 "acquisto": "Fornitori chimici, produzione da scarti (complessa)"
 },
 "agar": {
 "nome": "Agar Agar",
 "famiglia": "POLISACCARIDE_NEUTRO",
 "categoria": "Matrice polisaccaridica",
 "fonte": "Alghe rosse (Gelidium, Gracilaria)",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Gelificante termoreversibile, filmogeno",
 "descrizione": "Polisaccaride da alghe rosse. Gel rigidi e trasparenti. Isteresi termica: fonde a 85°C ma gelifica a 35°C.",
 "proprieta": {
 "struttura": "Gel rigido o film",
 "trasparenza": "Alta",
 "flessibilita": "Bassa",
 "barriera_O2": "Buona",
 "barriera_H2O": "Scarsa"
 },
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 4,
 "temp_dissoluzione_min": 85,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": 35,
 "temp_fusione_gel": 85,
 "pH_min": 5,
 "pH_max": 8
 },
 "lavorabilita": {
 "forma_tipica": [
 "gel rigido",
 "film",
 "lastra",
 "capsule"
 ],
 "termosaldabile": true,
 "temp_saldatura_min": 85,
 "temp_saldatura_max": 95,
 "incollabile_con": [
 "soluzione di agar calda",
 "acqua calda (parziale)"
 ],
 "cucibile": false,
 "note_cucibilita": "Troppo fragile anche con plastificante",
 "colorabile": true,
 "metodo_colorazione": "Coloranti alimentari in massa, aggiungere prima di colare",
 "reversibile": true,
 "stampabile_3D": true,
 "note_stampabilita": "Estrusione a 60-70°C, solidifica a <35°C. Isteresi termica utile"
 },
 "durabilita": {
 "durata_stimata": "Giorni (gel umido), settimane-mesi (film secco)",
 "fattori_degradazione": [
 "umidità (gel si secca/contrae)",
 "muffe (gel umido)",
 "pH <4.5 (idrolisi)"
 ],
 "condizioni_conservazione": "Film secco: ambiente secco. Gel: refrigerare, consumare in giorni",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "DEVE bollire per sciogliersi (85-100°C)",
 "Mantenere ebollizione 2-5 minuti",
 "Gelifica raffreddando a 32-40°C",
 "Film tendono a essere FRAGILI → plastificante abbondante (20-40%)"
 ],
 "incompatibilita": [
 "pH < 4.5 (idrolisi acida)",
 "Acidi forti a caldo"
 ],
 "alternative": "Carragenina (più elastica), gelatina (non vegana)",
 "acquisto": "Supermercati (reparto etnico/bio), negozi asiatici, Amazon. In polvere o fiocchi"
 ,
      "note_IED": ["TRE CONCENTRAZIONI: 6% = plastico flessibile, 3% = poroso strutturale, 1% = fragile opaco [SCHIN]","Degradabilità: ~6 giorni a bassa concentrazione (1%) [SCHIN]","Termosaldabile per sigillatura a incandescenza (confermato) [SCHIN]","Essiccazione rapida possibile: forno ventilato 35°C per 10h [SCHIN]","Applicazione insolita: pre-fertilizzante nel suolo (nutrimento per batteri del terreno) [SCHIN]"],
      "parametri_IED": {"concentrazioni_tipiche":"1% fragile, 3% poroso, 6% plastico"}
    },
 "alginato": {
 "nome": "Alginato di Sodio",
 "famiglia": "POLISACCARIDE_ANIONICO",
 "categoria": "Matrice polisaccaridica",
 "fonte": "Alghe brune (Laminaria, Macrocystis)",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Gelificante ionico (con Ca²⁺), filmogeno",
 "descrizione": "Polisaccaride da alghe brune. Gelificazione istantanea e irreversibile con calcio. Base della sferificazione.",
 "proprieta": {
 "struttura": "Gel (con Ca²⁺) o film",
 "trasparenza": "Alta",
 "flessibilita": "Media",
 "barriera_O2": "Buona",
 "barriera_H2O": "Scarsa"
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 4,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 60,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 4,
 "pH_max": 10
 },
 "lavorabilita": {
 "forma_tipica": [
 "gel (con Ca)",
 "film",
 "sfere",
 "membrane",
 "fibre"
 ],
 "termosaldabile": false,
 "temp_saldatura_min": null,
 "temp_saldatura_max": null,
 "incollabile_con": [
 "soluzione CaCl2 (salda bordi)",
 "se stesso con Ca"
 ],
 "cucibile": true,
 "note_cucibilita": "Film plastificati cucibili",
 "colorabile": true,
 "metodo_colorazione": "Coloranti idrosolubili in massa prima di gelificare",
 "reversibile": false,
 "stampabile_3D": true,
 "note_stampabilita": "Eccellente per bioprinting: estrusione in bagno CaCl2, gelifica istantaneamente"
 },
 "durabilita": {
 "durata_stimata": "Giorni (gel umido), settimane-mesi (film secco)",
 "fattori_degradazione": [
 "essiccazione (gel collassa)",
 "pH <4 (precipita)",
 "chelanti del calcio (EDTA dissolve)"
 ],
 "condizioni_conservazione": "Gel: mantenere umido o in soluzione CaCl2. Film: ambiente secco",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Si scioglie in acqua FREDDA (vantaggio!)",
 "Aggiungere LENTAMENTE mescolando per evitare grumi",
 "Per gel: immergere in soluzione CaCl2 o spruzzare",
 "Gelificazione ISTANTANEA e IRREVERSIBILE"
 ],
 "incompatibilita": [
 "pH < 4 (precipita)",
 "Alcoli > 30%",
 "Ca²⁺ in eccesso (gel fragile)"
 ],
 "alternative": "Pectina LM (gelifica con calcio)",
 "acquisto": "Amazon, negozi cucina molecolare, fornitori chimici. In polvere"
 ,
      "note_IED": ["ESTRAZIONE DIY da alga kombu: bollitura + bicarbonato → alginato di sodio [SEED-IN]","Film NON reticolato = solubile e debole. Reticolato (CaCl₂) = forte e resistente [SEED-IN]","Senza CaCl₂ funziona SOLO come addensante, non gelifica [SEED-IN]"]
    },
 "carragenina": {
 "nome": "Carragenina",
 "famiglia": "POLISACCARIDE_ANIONICO",
 "categoria": "Matrice polisaccaridica",
 "fonte": "Alghe rosse (Chondrus crispus)",
 "reperibilita": "media",
 "vegano": true,
 "food_safe": true,
 "funzione": "Gelificante, interagisce con proteine del latte",
 "descrizione": "Polisaccaride estratto da alghe rosse. Tre varianti con proprietà diverse: kappa forma gel rigidi e fragili (simile all'agar), iota forma gel elastici e morbidi, lambda non gelifica ma addensa. Il tipo kappa è il più usato nei biomateriali. Ottima sinergia con proteine del latte (caseinato). Gelifica a 40-60°C, più elastica dell'agar a parità di concentrazione.",
 "proprieta": {
 "struttura": "Gel elastico",
 "trasparenza": "Alta",
 "flessibilita": "Media-alta (iota)",
 "barriera_O2": "Media",
 "barriera_H2O": "Scarsa"
 },
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 3,
 "temp_dissoluzione_min": 60,
 "temp_dissoluzione_max": 80,
 "temp_gelificazione": 40,
 "temp_fusione_gel": 60,
 "pH_min": 4,
 "pH_max": 10
 },
 "lavorabilita": {
 "forma_tipica": [
 "gel elastico",
 "film",
 "coating"
 ],
 "termosaldabile": true,
 "temp_saldatura_min": 60,
 "temp_saldatura_max": 70,
 "incollabile_con": [
 "soluzione calda di carragenina",
 "latte caldo"
 ],
 "cucibile": false,
 "note_cucibilita": "Gel troppo elastici/scivolosi per cucitura",
 "colorabile": true,
 "metodo_colorazione": "Coloranti idrosolubili in massa",
 "reversibile": true,
 "stampabile_3D": true,
 "note_stampabilita": "Estrusione a 50-60°C, gelifica a <40°C. Kappa più rigido, iota più elastico"
 },
 "durabilita": {
 "durata_stimata": "Giorni (gel), settimane (film secco)",
 "fattori_degradazione": [
 "umidità",
 "pH molto acido (idrolisi)",
 "muffe"
 ],
 "condizioni_conservazione": "Gel: refrigerare. Film: ambiente secco",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere in acqua calda (60-80\u00b0C) mescolando: si idrata pi\u00f9 lentamente dell'agar",
 "Esistono TRE tipi con comportamenti diversi: kappa (gel rigido con KCl), iota (gel elastico con Ca\u00b2\u207a), lambda (non gelifica, solo addensante)",
 "Per kappa: aggiungere KCl allo 0.5-1% dopo dissoluzione, gelifica raffreddando",
 "Sinergia con proteine del latte: si lega naturalmente alla caseina, ideale per dessert",
 "Gelifica a 40-60\u00b0C a seconda del tipo; il gel \u00e8 termoreversibile (rifonde a 50-80\u00b0C)"
 ],
 "incompatibilita": [
 "pH molto acido"
 ],
 "alternative": "Agar (più rigido), alginato",
 "acquisto": "Amazon, cucina molecolare. Specificare tipo (kappa, iota, lambda)"
 },
 "amido_mais": {
 "nome": "Amido di Mais (Maizena)",
 "famiglia": "POLISACCARIDE_NEUTRO",
 "categoria": "Matrice polisaccaridica",
 "fonte": "Mais",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Matrice economica per bioplastiche",
 "descrizione": "Amido più diffuso e economico, buon punto di partenza per sperimentare. Gelatinizza a 62-72°C formando un gel opaco che asciugando diventa film rigido e semi-trasparente. Rapporto amilosio/amilopectina equilibrato: dà film più rigidi dell'amido di patata. Richiede sempre un plastificante (glicerina o sorbitolo) altrimenti il film è fragile e si crepa. Facile da reperire in qualsiasi supermercato (maizena).",
 "proprieta": {
 "struttura": "Film rigido",
 "trasparenza": "Alta",
 "flessibilita": "Bassa (senza plastificante)",
 "barriera_O2": "Media",
 "barriera_H2O": "Scarsa"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 15,
 "temp_dissoluzione_min": 62,
 "temp_dissoluzione_max": 72,
 "temp_gelificazione": 62,
 "temp_fusione_gel": null,
 "pH_min": 4,
 "pH_max": 9
 },
 "lavorabilita": {
 "forma_tipica": [
 "film",
 "bioplastica",
 "schiuma (con espandente)"
 ],
 "termosaldabile": true,
 "temp_saldatura_min": 70,
 "temp_saldatura_max": 90,
 "incollabile_con": [
 "acqua calda",
 "se stesso a caldo",
 "colla d'amido"
 ],
 "cucibile": false,
 "note_cucibilita": "Fragile senza plastificante abbondante",
 "colorabile": true,
 "metodo_colorazione": "Coloranti alimentari in massa durante gelatinizzazione",
 "reversibile": true,
 "stampabile_3D": true,
 "note_stampabilita": "Estrusione a caldo (termoplastico con glicerina). TPS commerciale"
 },
 "durabilita": {
 "durata_stimata": "Settimane-mesi (se asciutto)",
 "fattori_degradazione": [
 "umidità (rigonfia, ammorbidisce)",
 "muffe",
 "enzimi amilasi"
 ],
 "condizioni_conservazione": "Ambiente secco <60% UR, contenitore ermetico",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Disperdere in acqua fredda",
 "Riscaldare mescolando fino a gelatinizzazione (62-72°C)",
 "Diventa pasta traslucida e viscosa",
 "Aggiungere plastificante (glicerina 20-30%)",
 "Colare e lasciar asciugare"
 ],
 "incompatibilita": [
 "Enzimi amilasi (degradano)"
 ],
 "alternative": "Amido di patata (più trasparente), tapioca (più elastico)",
 "acquisto": "Supermercati (Maizena). Molto economico"
 ,
      "note_IED": ["COMPOSIZIONE: amilosio 20-30% (catene lineari → film) + amilopectina 70-80% (ramificata → viscosità) [CHECKERBOARD]","Granuli irregolari poligonali → migliore struttura vs fecola patata (granuli rotondi lisci) [CHECKERBOARD]","Aceto 15% → contrasta retrogradazione, stabilizza struttura, limita muffe [CHECKERBOARD]","Essiccazione composito con fibre: 48h a 35°C [CHECKERBOARD]","Termosaldabile confermato come film sottile [CHECKERBOARD]","ATTENZIONE: glicerina pura (senza acqua) elimina proprietà strutturali dell'amido [OOBLECK]"],
      "incompatibilita_IED": "Glicerina pura senza acqua (elimina struttura)"
    },
 "amido_patata": {
 "nome": "Amido di Patata",
 "famiglia": "POLISACCARIDE_NEUTRO",
 "categoria": "Matrice polisaccaridica",
 "fonte": "Patata",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Matrice per film più trasparenti e lucidi",
 "descrizione": "Amido ad alto contenuto di amilopectina, produce film più trasparenti e flessibili rispetto all'amido di mais. Gelatinizza a temperature più basse (58-65°C), quindi più facile da lavorare. Asciuga più velocemente e dà superfici più lisce. Buona scelta come matrice base per film sottili e trasparenti. Richiede plastificante per evitare fragilità.",
 "proprieta": {
 "struttura": "Film",
 "trasparenza": "Molto alta",
 "flessibilita": "Bassa-media",
 "barriera_O2": "Media",
 "barriera_H2O": "Scarsa"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 15,
 "temp_dissoluzione_min": 58,
 "temp_dissoluzione_max": 65,
 "temp_gelificazione": 58,
 "temp_fusione_gel": null,
 "pH_min": 4,
 "pH_max": 9
 },
 "lavorabilita": {
 "forma_tipica": [
 "film trasparente",
 "bioplastica"
 ],
 "termosaldabile": true,
 "temp_saldatura_min": 65,
 "temp_saldatura_max": 85,
 "incollabile_con": [
 "acqua calda",
 "se stesso"
 ],
 "cucibile": false,
 "note_cucibilita": "Come mais, fragile",
 "colorabile": true,
 "metodo_colorazione": "Coloranti in massa. Risultato più trasparente del mais",
 "reversibile": true,
 "stampabile_3D": true,
 "note_stampabilita": "Come mais, gelatinizza a temperatura leggermente più bassa"
 },
 "durabilita": {
 "durata_stimata": "Settimane-mesi (se asciutto)",
 "fattori_degradazione": [
 "umidità",
 "muffe",
 "enzimi amilasi"
 ],
 "condizioni_conservazione": "Ambiente secco, contenitore ermetico",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Disperdere in acqua fredda mescolando (come l'amido di mais, mai aggiungere a liquido caldo direttamente)",
 "Scaldare mescolando: gelatinizza prima del mais (58-65\u00b0C), serve meno calore",
 "Il risultato \u00e8 pi\u00f9 trasparente e lucido rispetto al mais \u2014 ideale per film trasparenti",
 "Aggiungere glicerina 20-30% come plastificante per evitare crepe",
 "Tende alla retrogradazione: il film pu\u00f2 opacizzarsi e irrigidirsi nei giorni successivi"
 ],
 "incompatibilita": [
 "Enzimi amilasi"
 ],
 "alternative": "Amido di mais, tapioca",
 "acquisto": "Supermercati (fecola di patate)"
 ,
      "note_IED": ["Granuli molto più grandi di amido mais → meno efficace strutturalmente, più viscoso [CHECKERBOARD]","Sedimenta velocemente (10 min) in sospensione — mescolare continuamente [CHECKERBOARD]"]
    },
 "pectina": {
 "nome": "Pectina",
 "nome_scientifico": "Pectin (polisaccharide)",
 "famiglia": "POLISACCARIDE_ANIONICO",
 "sottofamiglia": "pectina",
 "fonte": "Agrumi, mele (bucce)",
 "reperibilita": "facile",
 "food_safe": true,
 "vegano": true,
 "funzione": "Gelificante, film trasparenti",
 "descrizione": "Polisaccaride estratto da bucce di agrumi e mele. Esistono due tipi: HM (alto metossile) gelifica con zucchero e acido, LM (basso metossile) gelifica con ioni calcio come l'alginato. Film trasparenti e lucidi, più flessibili dell'agar. Buona adesione su carta e tessuto. Molto usata nel packaging alimentare biodegradabile.",
 "proprieta": {
 "struttura": "Gel o film",
 "trasparenza": "ALTA",
 "flessibilita": "Media",
 "barriera_O2": "Buona",
 "barriera_H2O": "Bassa",
 "colore": "Trasparente-giallino"
 },
 "parametri": {
 "concentrazione_tipica": "1-3%",
 "tipi": {
 "HM": "High Methoxyl - zucchero + acido (pH 2.8-3.5)",
 "LM": "Low Methoxyl - Ca2+ (come alginato)"
 },
 "range_percent_min": 1,
 "range_percent_max": 5,
 "temp_dissoluzione_min": 60,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 2.5,
 "pH_max": 6
 },
 "sinergie": [
 "calcio (LM)",
 "zucchero+acido (HM)"
 ],
 "note": "Spesso sottovalutata - ottima per film chiari",
 "fonti": [
 "Food Hydrocolloids",
 "Carbohydrate Polymers"
 ],
 "lavorabilita": {
 "forma_tipica": [
 "gel",
 "film",
 "coating"
 ],
 "note_forma": "Gelifica con zucchero+acido (HM) o con Ca²⁺ (LM). Film fragili senza plastificante",
 "termosaldabile": false,
 "incollabile_con": [
 "acqua calda"
 ],
 "cucibile": false,
 "colorabile": true,
 "metodo_colorazione": "Coloranti alimentari, trasparente-giallina",
 "reversibile": false,
 "stampabile_3D": false,
 "effetto_su_matrice": "Gelificazione, addensamento, stabilizzazione emulsioni"
 },
 "durabilita": {
 "durata_stimata": "Giorni-settimane (gel). Mesi (film essiccato)",
 "fattori_degradazione": [
 "Umidità (rigonfia)",
 "pH >6 (perde forza gel)",
 "Enzimi pectolitici"
 ],
 "condizioni_conservazione": "Polvere: ermetico asciutto. Gel: refrigerato",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Disperdere polvere in acqua calda (60-100°C) mescolando",
 "Per HM: aggiungere zucchero (>55%) e acidificare (pH 2.8-3.5)",
 "Per LM: aggiungere soluzione di CaCl₂",
 "Versare in stampo, lasciar gelificare"
 ],
 "incompatibilita": [
 "pH neutro/basico (non gelifica HM)",
 "Eccesso di calcio rende gel fragile"
 ],
 "alternative": "Agar (più forte), carragenina, alginato",
 "acquisto": "Supermercato (pectina per marmellate), Amazon, fornitori alimentari"
 },
 "gomma_guar": {
 "nome": "Gomma di Guar",
 "famiglia": "POLISACCARIDE_NEUTRO",
 "categoria": "Matrice polisaccaridica / Legante",
 "fonte": "Semi di Cyamopsis tetragonoloba (leguminosa indiana)",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Filmogeno, legante per compositi, modificatore reologico, addensante",
 "descrizione": "Galattomannano con capacità filmogena: forma pellicole flessibili biodegradabili con plastificante. Eccellente legante (binder) per compositi con scarti (caffè, segatura, fibre). Controlla viscosità per stampa 3D e colata. SINERGIA IMPORTANTE: con xantana forma gel anche senza calore. Igroscopica ' considerare reticolazione o acidi deboli per maggiore durabilità. Aspetto leggermente torbido rispetto a xantana.",
 "proprieta": {
 "struttura": "Film flessibile, soluzione viscosa, legante",
 "trasparenza": "Media-bassa (leggermente torbida)",
 "flessibilita": "Media (con plastificante)",
 "barriera_O2": "Scarsa (migliora con xantana)",
 "barriera_H2O": "Scarsa (igroscopica)"
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 3,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 40,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 4,
 "pH_max": 10
 },
 "lavorabilita": {
 "forma_tipica": [
 "film",
 "legante",
 "addensante",
 "modificatore reologico"
 ],
 "termosaldabile": null,
 "temp_saldatura_min": null,
 "temp_saldatura_max": null,
 "incollabile_con": [],
 "cucibile": null,
 "colorabile": true,
 "metodo_colorazione": "In massa, coloranti idrosolubili",
 "reversibile": true,
 "stampabile_3D": true,
 "note_stampabilita": "Buon controllo reologico per bioprinting e colata"
 },
 "durabilita": {
 "durata_stimata": "Settimane-mesi (se asciutto)",
 "fattori_degradazione": [
 "umidità (molto igroscopica)",
 "muffe"
 ],
 "condizioni_conservazione": "Ambiente secco, contenitore ermetico",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Disperdere LENTAMENTE in acqua fredda mescolando",
 "Evitare grumi: setacciare polvere o disperdere in olio prima",
 "Si idrata in pochi minuti",
 "Per film: aggiungere glicerina 20-30%, colare e asciugare",
 "Per compositi: usare come legante 5-15% su peso secco",
 "SINERGIA: mescolare 50:50 con xantana per gel più resistente"
 ],
 "incompatibilita": [
 "pH estremi degradano viscosità",
 "Molto sensibile all'umidità ambientale"
 ],
 "alternative": "Gomma xantana (più stabile), gomma arabica, CMC",
 "acquisto": "Supermercati bio (NaturaSì), Amazon, negozi etnici indiani, pasticceria. E412"
 },
 "xantana": {
 "nome": "Gomma Xantana",
 "famiglia": "POLISACCARIDE_NEUTRO",
 "categoria": "Matrice polisaccaridica / Stabilizzante",
 "fonte": "Fermentazione batterica (Xanthomonas campestris) di zuccheri (mais, glucosio)",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Stabilizzante sospensioni, filmogeno, gelificante (con guar), miglioratore elasticità",
 "descrizione": "Polisaccaride ad altissimo peso molecolare (2-50 milioni Da) prodotto per fermentazione batterica. Molto più stabile del guar a temperatura e pH. Crea gel trasparenti e lisci. Comportamento pseudoplastico: viscosa a riposo (tiene particelle in sospensione), fluida sotto stress (facile da mescolare/versare). SINERGIA FONDAMENTALE: con gomma guar forma gel sinergici molto più forti. Migliora elasticità dei bio-film riducendo fragilità.",
 "proprieta": {
 "struttura": "Soluzione viscosa, film, gel (con guar)",
 "trasparenza": "Alta (più trasparente del guar)",
 "flessibilita": "Media",
 "barriera_O2": "Media (migliora con guar)",
 "barriera_H2O": "Scarsa (igroscopica, serve impermeabilizzazione)"
 },
 "parametri": {
 "range_percent_min": 0.1,
 "range_percent_max": 2,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 80,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "temp_degradazione": 120,
 "pH_min": 1,
 "pH_max": 13
 },
 "lavorabilita": {
 "forma_tipica": [
 "film",
 "stabilizzante",
 "gel (con guar)",
 "modificatore reologico"
 ],
 "termosaldabile": null,
 "temp_saldatura_min": null,
 "temp_saldatura_max": null,
 "incollabile_con": [],
 "cucibile": null,
 "colorabile": true,
 "metodo_colorazione": "In massa, coloranti idrosolubili",
 "reversibile": true,
 "stampabile_3D": true,
 "note_stampabilita": "Eccellente controllo reologico. NON ideale per estrusione >100°C (degrada)"
 },
 "durabilita": {
 "durata_stimata": "Settimane-mesi (se asciutto e protetto)",
 "fattori_degradazione": [
 "umidità (molto igroscopica)",
 "muffe e batteri (è 'cibo' per microrganismi)",
 "temperature >100-120°C prolungate"
 ],
 "condizioni_conservazione": "Ambiente secco. OBBLIGATORIO conservante (acido citrico, aceto, oli essenziali) per evitare muffe durante asciugatura",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Disperdere in acqua fredda o calda mescolando vigorosamente",
 "Usare frullatore per evitare grumi (più difficile del guar)",
 "Trucco: mescolare prima con zucchero o olio per disperdere",
 "Stabile fino a ~100°C, degrada sopra 120°C",
 "SINERGIA: mescolare 50:50 con guar per gel sinergico",
 "Per stabilizzare sospensioni: 0.1-0.5% basta",
 "IMPORTANTE: aggiungere conservante (acido citrico 1-2% o oli essenziali) per prevenire muffe",
 "Per impermeabilizzare: coating finale con cera o aggiungere carica minerale"
 ],
 "incompatibilita": [
 "Forma grumi se dispersa male",
 "Temperature >120°C prolungate (degrada)",
 "Ambienti umidi senza protezione (ammuffisce)"
 ],
 "alternative": "Gomma guar (meno stabile), CMC, gomma arabica",
 "acquisto": "Supermercati (reparto senza glutine), Amazon, negozi bio. E415. Molto usata in cucina gluten-free"
 },
 "scoby": {
 "nome": "SCOBY (Kombucha)",
 "famiglia": "COLTURA",
 "categoria": "Matrice biologica",
 "fonte": "Coltura simbiotica batteri/lieviti",
 "reperibilita": "media",
 "vegano": true,
 "food_safe": true,
 "funzione": "Produce cellulosa batterica pura",
 "descrizione": "Coltura che produce nanocellulosa batterica. Forma pellicole resistenti che essiccate diventano simili a pelle o carta pergamena.",
 "proprieta": {
 "struttura": "Pellicola di cellulosa",
 "trasparenza": "Media (essiccato)",
 "flessibilita": "Alta",
 "barriera_O2": "Buona",
 "barriera_H2O": "Media"
 },
 "parametri": {
 "range_percent_min": null,
 "range_percent_max": null,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 2.5,
 "pH_max": 4.5
 },
 "lavorabilita": {
 "forma_tipica": [
 "pellicola/pelle",
 "tessuto",
 "packaging"
 ],
 "termosaldabile": false,
 "temp_saldatura_min": null,
 "temp_saldatura_max": null,
 "incollabile_con": [
 "se stesso (umido)",
 "colla naturale"
 ],
 "cucibile": true,
 "note_cucibilita": "Ottimo! Pellicola essiccata molto simile a pelle, cucibile",
 "colorabile": true,
 "metodo_colorazione": "Coloranti naturali nel tè di crescita, o tintura post-raccolta",
 "reversibile": false,
 "stampabile_3D": false,
 "note_stampabilita": "Non applicabile - cresce, non si estrude"
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni (se essiccato e trattato)",
 "fattori_degradazione": [
 "umidità (reidrata, ammuffisce)",
 "muffe",
 "luce UV"
 ],
 "condizioni_conservazione": "Essiccare completamente. Trattare con olio o cera per durabilità",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Preparare tè zuccherato (50-100g zucchero/L)",
 "Inoculare con SCOBY e liquido starter (100 ml di kombucha precedente). Primo batch? Usa kombucha cruda commerciale (non pastorizzata) oppure 1-2 cucchiai di aceto di mele non pastorizzato per litro come acidificante di emergenza",
 "Fermentare 2-4 settimane a 20-28°C",
 "Raccogliere pellicola e lasciar asciugare"
 ],
 "incompatibilita": [
 "Temperature < 15°C (fermentazione lenta)",
 "Contaminazione da muffe"
 ],
 "alternative": "Nata de coco (cellulosa pronta)",
 "acquisto": "Community kombucha, mercatini bio, Amazon",
 "fase_utilizzo": {
 "durante_crescita": "Substrato, nutrienti, pH",
 "post_processing": "Coating, tintura, reticolazione"
 },
 "interazioni_specifiche": {
 "con_guar_xantana": {
 "compatibilita": "eccellente",
 "meccanismo": "SCOBY frullato + gomme = rinforzo strutturale estremo. Nanofibre cellulosa si intrecciano con catene polisaccaridiche",
 "risultato": "Materiale simile a cuoio, alta resistenza trazione"
 },
 "con_aceto": {
 "compatibilita": "eccellente",
 "meccanismo": "Ambiente naturale del SCOBY (pH 2.5-4.5). Acido acetico previene muffe durante asciugatura",
 "uso": "Mantenimento, pulizia fibre"
 },
 "con_lignina": {
 "compatibilita": "neutra",
 "meccanismo": "Inerte - funge solo da carica fisica",
 "uso": "Non consigliato"
 },
 "con_alte_temperature": {
 "compatibilita": "buona",
 "meccanismo": "Post-asciugatura: calore può aiutare reticolazione",
 "limite": "Solo dopo completa asciugatura"
 },
 "compositi_ibridi": {
 "scoby_su_micelio": "SCOBY come 'pelle' liscia e impermeabile su struttura micelio"
 }
 },
 "trasparenza": "Traslucido naturale. Con Xantana: biomateriali molto chiari"
 ,
      "note_IED": ["CRESCITA progressiva: 3gg +5-10%, 7gg +15-25%, 14gg +30-50%, 21gg +50-80% di spessore [SCHIN]","COMPOSIZIONE umido: 90-95% H₂O, 3-5% cellulosa, 0.5-1% proteine [SCHIN]","ASSORBIMENTO: 1-3ml/6h, 3-7ml/12h. Rilascio controllato fino 80%/8h — possibile drug delivery [SCHIN]","Tè verde funziona come medium, non solo tè nero [SCHIN]","Lavabile e riutilizzabile con lavaggio in soluzione acida [SCHIN]","Essiccato 60gg a T ambiente → utilizzabile come coprilama/fodera [SCHIN]"],
      "parametri_IED": {"crescita_spessore":"3gg +5-10%, 7gg +15-25%, 14gg +30-50%","composizione_umido":"90-95% H₂O, 3-5% cellulosa"}
    },
 "micelio": {
 "nome": "Micelio Fungino",
 "famiglia": "COLTURA",
 "categoria": "Matrice biologica",
 "fonte": "Funghi (Pleurotus, Ganoderma, Trametes)",
 "reperibilita": "media",
 "vegano": true,
 "food_safe": true,
 "funzione": "Lega substrati organici, forma compositi",
 "descrizione": "Rete di filamenti fungini che cresce attraverso substrati organici legandoli. Materiale leggero, isolante, ignifugo.",
 "proprieta": {
 "struttura": "Composito poroso",
 "trasparenza": "Nulla",
 "flessibilita": "Variabile",
 "barriera_O2": "Media",
 "barriera_H2O": "Media"
 },
 "parametri": {
 "range_percent_min": null,
 "range_percent_max": null,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 5,
 "pH_max": 7
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "pannello",
 "packaging",
 "pelle fungina"
 ],
 "termosaldabile": false,
 "temp_saldatura_min": null,
 "temp_saldatura_max": null,
 "incollabile_con": [
 "se stesso (durante crescita)",
 "colle naturali"
 ],
 "cucibile": true,
 "note_cucibilita": "Pelle di micelio puro cucibile. Compositi più rigidi: forare",
 "colorabile": true,
 "metodo_colorazione": "Coloranti nel substrato, o tintura post-crescita. Colore naturale varia per specie",
 "reversibile": false,
 "stampabile_3D": false,
 "note_stampabilita": "Non estrudibile. Si può stampare lo stampo e far crescere dentro"
 },
 "durabilita": {
 "durata_stimata": "Anni (se essiccato/cotto correttamente)",
 "fattori_degradazione": [
 "umidità (ricresce o ammuffisce)",
 "non completamente essiccato"
 ],
 "condizioni_conservazione": "Essiccare a 60-80°C o cuocere per arrestare crescita. Ambiente secco",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Preparare substrato: segatura di latifoglie (il piu comune, alta resa), fondi di caffe (pre-pastorizzati, usare entro 24h), paglia tagliata 5-10cm (economica, buona aerazione), canapa hurd (standard industriale Ecovative), cartone triturato (facile, bassa resa). Mix consigliato: 50% segatura + 50% crusca di soia o segatura + caffe. Umidita target 60-70%",
 "Pastorizzare substrato (60-80°C)",
 "Inoculare con spawn (5-10%)",
 "Incubare 5-14 giorni a 20-28°C, buio, umidità 80-90%",
 "Essiccare o cuocere per arrestare crescita"
 ],
 "incompatibilita": [
 "Contaminazione",
 "Temperatura sbagliata",
 "Umidità insufficiente"
 ],
 "alternative": "Nessuna vera alternativa per compositi",
 "acquisto": "Fornitori micologici, kit coltivazione funghi, Amazon (spawn)",
 "fase_utilizzo": {
 "durante_crescita": "Substrato, nutrienti, pH",
 "post_processing": "Coating, tintura, reticolazione"
 },
 "interazioni_specifiche": {
 "con_lignina": {
 "compatibilita": "eccellente",
 "meccanismo": "Funghi (Pleurotus, Trametes) secernono enzimi ligninolitici. Micelio DIGERISCE e INCORPORA la lignina",
 "risultato": "Blocchi solidi e impermeabili con segatura/scarti legnosi"
 },
 "con_guar": {
 "compatibilita": "eccellente",
 "meccanismo": "Guar addensa substrato liquido in 'fango' modellabile",
 "risultato": "Colonizzazione più facile e controllata"
 },
 "con_aceto_limone": {
 "compatibilita": "PERICOLOSO",
 "meccanismo": "Micelio tollera solo pH 5-6. Troppo acido UCCIDE il fungo",
 "regola": "MAI aceto/limone durante fase crescita"
 },
 "con_alte_temperature": {
 "compatibilita": "FATALE_durante_crescita",
 "meccanismo": ">60°C uccide il fungo, interrompe tessitura rete ifale",
 "uso_corretto": "Calore SOLO a fine crescita per 'cuocere' e stabilizzare"
 },
 "compositi_ibridi": {
 "micelio_con_pelle_scoby": "Crescere micelio in forma, poi rivestire con film SCOBY+Guar per finitura liscia impermeabile"
 }
 }
 },
 "glicerina": {
 "nome": "Glicerina (Glicerolo)",
 "famiglia": "PLASTIFICANTE",
 "ruolo_coltura": "post_crescita",
 "categoria": "Plastificante",
 "fonte": "Sottoprodotto saponificazione o biodiesel",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Plastificante principale, aumenta flessibilità",
 "descrizione": "Plastificante più usato nei biomateriali. Aumenta flessibilità, riduce fragilità. Igroscopico: assorbe umidità dall'ambiente.",
 "proprieta": {
 "struttura": null,
 "trasparenza": "Migliora trasparenza dei film",
 "flessibilita": "AUMENTA",
 "barriera_O2": "Riduce leggermente",
 "barriera_H2O": "PEGGIORA (igroscopico)"
 },
 "parametri": {
 "range_percent_min": 10,
 "range_percent_max": 40,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 2,
 "pH_max": 12
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Non forma materiali da sola - è additivo",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": true,
 "stampabile_3D": null,
 "effetto_su_matrice": "Aumenta flessibilità, riduce fragilità, abbassa Tg"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "fattori_degradazione": [
 "Igroscopica: assorbe umidità ambientale"
 ],
 "condizioni_conservazione": "Conservare in contenitore chiuso",
 "effetto_su_durabilita": "Eccesso rende materiale appiccicoso nel tempo",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Aggiungere alla soluzione prima o dopo dissoluzione matrice",
 "Dosaggio tipico 15-30% rispetto alla matrice",
 "Meno = più rigido, più = più flessibile/appiccicoso"
 ],
 "incompatibilita": [
 "Nessuna significativa"
 ],
 "alternative": "Sorbitolo (meno igroscopico)",
 "acquisto": "Farmacia (glicerina vegetale), Amazon, negozi saponi. Purezza ≥99%"
 ,
      "note_IED": ["Funziona anche in sistemi NON acquosi: es. resina pino + cera d'api [BEE STICKY]","ATTENZIONE: pura senza acqua → elimina shear-thickening dell'amido [OOBLECK]","Formula ottimale con agar: 4% glicerina + 6% agar = buon film elastico trasparente [SCHIN]"]
    },
 "sorbitolo": {
 "nome": "Sorbitolo",
 "famiglia": "PLASTIFICANTE",
 "categoria": "Plastificante",
 "fonte": "Idrogenazione del glucosio",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Plastificante meno igroscopico della glicerina",
 "descrizione": "Alternativa alla glicerina. Meno igroscopico = materiali più stabili nel tempo ma leggermente più rigidi.",
 "proprieta": {
 "struttura": "Polvere o liquido viscoso",
 "trasparenza": "Trasparente",
 "flessibilita": "AUMENTA",
 "barriera_O2": null,
 "barriera_H2O": "migliore della glicerina"
 },
 "parametri": {
 "range_percent_min": 10,
 "range_percent_max": 30,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 2,
 "pH_max": 12
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Non forma materiali da solo - è additivo",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": true,
 "stampabile_3D": null,
 "effetto_su_matrice": "Come glicerina ma meno igroscopico. Film più stabili nel tempo"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "fattori_degradazione": [
 "Meno igroscopico della glicerina"
 ],
 "condizioni_conservazione": "Conservare asciutto",
 "effetto_su_durabilita": "Migliore stabilità a lungo termine rispetto a glicerina",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Come glicerina",
 "Spesso usato in combinazione 50/50 con glicerina"
 ],
 "incompatibilita": [
 "Nessuna significativa"
 ],
 "alternative": "Glicerina",
 "acquisto": "Farmacie, pasticceria, Amazon. Polvere o sciroppo"
 },
 "olio_lino": {
 "nome": "Olio di Lino",
 "famiglia": "PLASTIFICANTE",
 "categoria": "Plastificante/Siccativo",
 "fonte": "Semi di lino",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Plastificante siccativo, polimerizza all'aria",
 "descrizione": "Unico tra i plastificanti: polimerizza all'aria (siccativo). Forma film protettivi che induriscono nel tempo.",
 "proprieta": {
 "struttura": "Liquido → film solido (dopo essiccazione)",
 "trasparenza": "Giallo (imbrunisce invecchiando)",
 "flessibilita": "AUMENTA inizialmente, poi indurisce",
 "barriera_O2": "Buona (dopo polimerizzazione)",
 "barriera_H2O": "MIGLIORA (dopo polimerizzazione)"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 20,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "film (polimerizzato)",
 "coating"
 ],
 "note_forma": "Unico plastificante che forma film da solo (siccativo)",
 "termosaldabile": false,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": true,
 "metodo_colorazione": "Pigmenti oleosi, terre",
 "reversibile": false,
 "note_reversibilita": "Polimerizza irreversibilmente all'aria",
 "stampabile_3D": false,
 "effetto_su_matrice": "Plastificante iniziale, poi indurisce. Migliora idrorepellenza"
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni (dopo polimerizzazione)",
 "fattori_degradazione": [
 "Ingiallisce nel tempo",
 "Ossidazione continua"
 ],
 "condizioni_conservazione": "Olio fresco: contenitore chiuso, buio. Film: stabile",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Aggiungere alla miscela",
 "Lasciare asciugare - polimerizza in giorni/settimane",
 "Può essere cotto per accelerare"
 ],
 "incompatibilita": [
 "Nessuna significativa"
 ],
 "alternative": "Olio di tung (più veloce)",
 "acquisto": "Ferramenta, negozi belle arti, Amazon. Preferire olio di lino cotto per asciugatura più veloce"
 },
 "cacl2": {
 "nome": "Cloruro di Calcio (CaCl2)",
 "famiglia": "SALE_RETICOLANTE",
 "categoria": "Reticolante ionico",
 "fonte": "Minerale/sintetico",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Reticolante per alginato, gelificazione istantanea",
 "descrizione": "Sale di calcio che induce gelificazione istantanea dell'alginato per ponti ionici Ca2+. Produce gel irreversibili e termostabili. Concentrazioni alte = gel rigidi, basse = gel morbidi. Igroscopico.",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 5,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Non forma materiali - è reticolante per alginato/pectina LM",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": false,
 "stampabile_3D": null,
 "effetto_su_matrice": "Gelifica istantaneamente alginato e pectina LM"
 },
 "durabilita": {
 "durata_stimata": "N/A - reticolante",
 "fattori_degradazione": [
 "Molto igroscopico (assorbe umidità)"
 ],
 "condizioni_conservazione": "Contenitore ermetico, assorbe umidità rapidamente",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Preparare bagno gelificante: sciogliere CaCl\u2082 allo 0.5-2% in acqua (pi\u00f9 concentrato = reazione pi\u00f9 veloce e gel pi\u00f9 rigido)",
            "Per sferificazione: gocciolare soluzione di alginato nel bagno di CaCl\u2082 con pipetta o siringa",
            "Per film/membrane: immergere il film di alginato nel bagno; il tempo controlla lo spessore del gel (30s = sottile, 5min = spesso)",
            "Risciacquare SEMPRE in acqua pulita dopo il bagno per fermare la reazione e rimuovere il sapore amaro",
            "IMPORTANTE: funziona SOLO con polisaccaridi anionici (alginato, pectina LM). Non reticola proteine n\u00e9 polisaccaridi neutri"
        ],
 "incompatibilita": [
            "Carbonati e bicarbonati (precipita)",
            "Fosfati (precipita)",
            "Carragenina kappa (usa KCl)"
        ],
 "alternative": "Lattato di calcio (rilascio lento), gluconato di calcio (più delicato)",
 "acquisto": "Amazon, negozi cucina molecolare, ferramenta (antighiaccio - verificare purezza)"
 },
 "tannini": {
 "nome": "Tannini (Acido Tannico)",
 "famiglia": "SALE_RETICOLANTE",
 "categoria": "Reticolante naturale",
 "fonte": "Quercia, castagno, tè, melograno",
 "reperibilita": "media",
 "vegano": true,
 "food_safe": true,
 "funzione": "Reticolante naturale per proteine, concia",
 "descrizione": "Cross-linka proteine aumentando resistenza all'acqua. Alternativa naturale alla formaldeide. Colore marrone.",
 "proprieta": {
 "struttura": "Polvere o estratto",
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": "Può migliorare (antiossidante)",
 "barriera_H2O": "MIGLIORA su proteine"
 },
 "parametri": {
 "range_percent_min": 2,
 "range_percent_max": 10,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 80,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 3,
 "pH_max": 8
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Non forma materiali - reticola proteine",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "note_colore": "Scurisce sempre il materiale (marrone)",
 "reversibile": false,
 "stampabile_3D": null,
 "effetto_su_matrice": "Reticola proteine (gelatina, caseina), migliora resistenza acqua"
 },
 "durabilita": {
 "durata_stimata": "N/A - reticolante",
 "fattori_degradazione": [],
 "condizioni_conservazione": "Polvere: asciutto. Soluzione: refrigerare",
 "effetto_su_durabilita": "Aumenta drasticamente durabilità delle proteine",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Immergere materiale proteico in soluzione tannica",
 "Oppure aggiungere alla miscela",
 "Scurisce il materiale (marrone)"
 ],
 "incompatibilita": [
 "Colorano sempre"
 ],
 "alternative": "Tè nero concentrato (fonte di tannini)",
 "acquisto": "Enologia (tannino enologico), Amazon, erboristerie"
 ,
      "note_IED": ["Trade-off su caseina: bagno 48h → antimicrobico efficace MA materiale più friabile [CASEO²]"]
    },
 "allume": {
 "nome": "Allume di Potassio",
 "famiglia": "SALE_RETICOLANTE",
 "categoria": "Mordente/indurente",
 "fonte": "Minerale",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Mordente per coloranti, indurente per proteine",
 "descrizione": "Solfato doppio di alluminio e potassio. Reticolante storico per caseina (Galalite), mordente per tintura, indurente per gelatina. Gli ioni Al3+ creano ponti tra catene proteiche. Indurimento irreversibile.",
 "proprieta": {
 "struttura": "Cristalli incolori o polvere bianca",
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": "leggero miglioramento"
 },
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 5,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 80,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Non forma materiali - mordente e indurente",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Fissa coloranti naturali, indurisce parzialmente proteine"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "fattori_degradazione": [],
 "condizioni_conservazione": "Stabile, conservare asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Soluzione: 5-10% in acqua tiepida",
            "Immergere manufatto proteico per 24-48 ore",
            "L'indurimento procede dall'esterno verso l'interno",
            "Risciacquare dopo il trattamento"
        ],
 "incompatibilita": [
            "Ambienti molto basici (precipita)",
            "Fosfati (precipita)",
            "Proteine già denaturate/cotte"
        ],
 "alternative": "Tannini (effetto simile, colora marrone)",
 "acquisto": "Farmacie (pietra di allume), Amazon, negozi tintura naturale"
 ,
      "note_IED": ["DOSAGGIO CRITICO: 7g/50g caseina = ECCESSO → vetroso con crepe. Ridurre drasticamente [CASEO²]"],
      "parametri_IED": {"dosaggio_max_caseina":"< 7g/50g (oltre → vetroso)"}
    },
 "cera_carnauba": {
 "nome": "Cera di Carnauba",
 "famiglia": "RESINA_LIPIDE",
 "ruolo_coltura": "post_crescita_coating",
 "categoria": "Cera/Coating",
 "fonte": "Foglie di palma Copernicia prunifera",
 "reperibilita": "media",
 "vegano": true,
 "food_safe": true,
 "funzione": "Coating idrofobo, cera vegetale più dura",
 "descrizione": "La cera vegetale più dura (punto fusione 82-86°C). Eccellente barriera all'acqua. Lucidabile.",
 "proprieta": {
 "struttura": "Coating",
 "trasparenza": "Media",
 "flessibilita": "Bassa (dura)",
 "barriera_O2": "Buona",
 "barriera_H2O": "Ottima"
 },
 "parametri": {
 "range_percent_min": 2,
 "range_percent_max": 10,
 "temp_dissoluzione_min": 82,
 "temp_dissoluzione_max": 86,
 "temp_gelificazione": null,
 "temp_fusione_gel": 82,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "coating",
 "finitura lucida"
 ],
 "termosaldabile": true,
 "temp_saldatura_min": 82,
 "temp_saldatura_max": 90,
 "incollabile_con": [
 "se stessa a caldo"
 ],
 "cucibile": false,
 "note_cucibilita": "Troppo dura e fragile",
 "colorabile": true,
 "metodo_colorazione": "Pigmenti liposolubili, ossidi",
 "reversibile": true,
 "stampabile_3D": false,
 "note_stampabilita": "Troppo fragile, usare come coating post-stampa"
 },
 "durabilita": {
 "durata_stimata": "Anni (molto stabile)",
 "fattori_degradazione": [
 "Abrasione meccanica",
 "Solventi organici"
 ],
 "condizioni_conservazione": "Stabile a temperatura ambiente",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Fondere a 85-90°C",
 "Applicare a pennello o immersione su materiale già asciutto",
 "Lucidare a freddo"
 ],
 "incompatibilita": [
 "Non si mescola con acqua (applicare su film asciutto)"
 ],
 "alternative": "Cera d'api (più morbida), candelilla",
 "acquisto": "Amazon, negozi cosmetici, fornitori candele. In scaglie o blocchi"
 },
 "cera_api": {
 "nome": "Cera d'Api",
 "famiglia": "RESINA_LIPIDE",
 "ruolo_coltura": "post_crescita_coating",
 "categoria": "Cera/Coating",
 "fonte": "Api (Apis mellifera)",
 "reperibilita": "facile",
 "vegano": false,
 "food_safe": true,
 "funzione": "Coating idrofobo, più morbida e lavorabile della carnauba",
 "descrizione": "Cera naturale classica. Punto fusione 62-65°C, più morbida della carnauba. Buon profumo.",
 "proprieta": {
 "struttura": "Coating",
 "trasparenza": "Media",
 "flessibilita": "Media",
 "barriera_O2": "Buona",
 "barriera_H2O": "Buona"
 },
 "parametri": {
 "range_percent_min": 2,
 "range_percent_max": 15,
 "temp_dissoluzione_min": 62,
 "temp_dissoluzione_max": 65,
 "temp_gelificazione": null,
 "temp_fusione_gel": 62,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "coating",
 "finitura",
 "candele",
 "wrap alimentari"
 ],
 "termosaldabile": true,
 "temp_saldatura_min": 62,
 "temp_saldatura_max": 70,
 "incollabile_con": [
 "se stessa a caldo",
 "altre cere"
 ],
 "cucibile": false,
 "note_cucibilita": "Morbida ma non cucibile",
 "colorabile": true,
 "metodo_colorazione": "Pigmenti liposolubili, cere colorate",
 "reversibile": true,
 "stampabile_3D": true,
 "note_stampabilita": "Estrusione possibile a bassa T, usata per candele"
 },
 "durabilita": {
 "durata_stimata": "Anni",
 "fattori_degradazione": [
 "Calore >60°C (fonde)",
 "Solventi organici"
 ],
 "condizioni_conservazione": "Temperatura ambiente, lontano da fonti di calore",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Fondere a bagnomaria (65-70°C)",
 "Applicare su materiale asciutto",
 "Può essere miscelata con oli per maggiore morbidezza"
 ],
 "incompatibilita": [
 "Calore eccessivo (diventa fragile)"
 ],
 "alternative": "Cera carnauba (vegana), candelilla (vegana)",
 "acquisto": "Apicoltori, erboristerie, Amazon. In blocchi o pastilles"
 ,
      "note_IED": ["Densità: 960 kg/m³ [BEE STICKY]","Sinergia con resina pino (colofonia): sistema collante efficace — 2 gruppi confermano [BEE STICKY, CORK J.]"],
      "parametri_IED": {"densita":"960 kg/m³"}
    },
 "gommalacca": {
 "nome": "Gommalacca (Shellac)",
 "famiglia": "RESINA_LIPIDE",
 "categoria": "Resina/Vernice",
 "fonte": "Secrezione insetto Kerria lacca",
 "reperibilita": "facile",
 "vegano": false,
 "food_safe": true,
 "funzione": "Vernice naturale, barriera eccellente, lucidante",
 "descrizione": "Resina naturale che forma film duri, lucidi, resistenti. Si scioglie in alcol. Usata su mobili, alimenti, farmaci.",
 "proprieta": {
 "struttura": "Film duro",
 "trasparenza": "Alta (varietà chiare)",
 "flessibilita": "Bassa",
 "barriera_O2": "Ottima",
 "barriera_H2O": "Buona"
 },
 "parametri": {
 "range_percent_min": 10,
 "range_percent_max": 30,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 50,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "vernice",
 "coating lucido",
 "finitura legno"
 ],
 "termosaldabile": false,
 "incollabile_con": [
 "alcol (riscioglie)"
 ],
 "cucibile": false,
 "colorabile": true,
 "metodo_colorazione": "Coloranti solubili in alcol, varietà naturali (arancio, bionda, bianca)",
 "reversibile": true,
 "note_reversibilita": "Si riscioglie in alcol",
 "stampabile_3D": false
 },
 "durabilita": {
 "durata_stimata": "Anni (ottima durabilità)",
 "fattori_degradazione": [
 "Alcol (riscioglie)",
 "Alcali (degrada)",
 "Acqua prolungata (sbianca)"
 ],
 "condizioni_conservazione": "Scaglie: indefinita. Soluzione: usare entro 6 mesi",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere fiocchi di gommalacca in alcol etilico (rapporto 20-30% peso/volume) mescolando: pu\u00f2 richiedere 24-48 ore",
 "Filtrare la soluzione per rimuovere impurit\u00e0 e residui non disciolti",
 "Applicare a pennello in strati sottili e uniformi: pi\u00f9 strati sottili sono meglio di uno spesso",
 "Ogni strato asciuga in 15-30 minuti; carteggiare leggermente tra uno strato e l'altro per migliore adesione",
 "Il film finale \u00e8 lucido, impermeabile e food-safe (usata storicamente per confetti e compresse farmaceutiche)"
 ],
 "incompatibilita": [
 "Acqua (non si scioglie)",
 "Alcali (si degrada)"
 ],
 "alternative": "Dammar, colofonia",
 "acquisto": "Ferramenta, negozi belle arti, Amazon. In scaglie da sciogliere"
 },
 "colofonia": {
 "nome": "Colofonia (Pece Greca)",
 "famiglia": "RESINA_LIPIDE",
 "categoria": "Resina",
 "fonte": "Distillazione resina di pino",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": false,
 "funzione": "Resina per vernici, adesivo, aumenta attrito",
 "descrizione": "Resina naturale trasparente dal pino. Si scioglie in alcol/trementina. Fragile, odore di pino.",
 "proprieta": {
 "struttura": "Film fragile",
 "trasparenza": "Alta",
 "flessibilita": "Molto bassa",
 "barriera_O2": "Media",
 "barriera_H2O": "Media"
 },
 "parametri": {
 "range_percent_min": 10,
 "range_percent_max": 40,
 "temp_dissoluzione_min": 70,
 "temp_dissoluzione_max": 80,
 "temp_gelificazione": null,
 "temp_fusione_gel": 70,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "vernice",
 "adesivo termofusibile"
 ],
 "termosaldabile": true,
 "temp_saldatura_min": 70,
 "temp_saldatura_max": 80,
 "incollabile_con": [
 "se stessa a caldo",
 "alcol"
 ],
 "cucibile": false,
 "colorabile": true,
 "metodo_colorazione": "Pigmenti",
 "reversibile": true,
 "stampabile_3D": false,
 "note_stampabilita": "Troppo fragile e appiccicosa"
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni",
 "fattori_degradazione": [
 "Ossidazione (ingiallisce)",
 "Fragile agli urti"
 ],
 "condizioni_conservazione": "Contenitore chiuso, evitare umidità",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere in etanolo o trementina",
 "Applicare come vernice",
 "Oppure fondere e usare come adesivo termofusibile"
 ],
 "incompatibilita": [
 "Può causare allergie da contatto"
 ],
 "alternative": "Gommalacca, dammar",
 "acquisto": "Negozi musica (per archetti), ferramenta, Amazon"
 ,
      "note_IED": ["⚠ CRITICO: funziona come MATRICE strutturale, NON come lipide passivo. 2 gruppi IED confermano [BEE STICKY, CORK J.]","Classificazione LIPIDE nel DB è sottostimante — la colofonia è termoplastica, reversibile, strutturale","Termoplastico: fragile a freddo, elastico/adesivo a caldo. Completamente reversibile (rifondibile) [BEE STICKY]"]
    },
 "fondi_caffe": {
 "nome": "Fondi di Caffè",
 "famiglia": "CARICA",
 "ruolo_coltura": "substrato",
 "categoria": "Carica organica",
 "fonte": "Scarto domestico/bar",
 "reperibilita": "gratuita",
 "vegano": true,
 "food_safe": true,
 "funzione": "Carica colorata, texture, leggero effetto antiossidante",
 "descrizione": "Residuo dell'estrazione del caffè, ricco di fibre, lipidi residui e composti fenolici antiossidanti. Colorante naturale marrone. Conferisce odore caratteristico. Antimicrobico leggero. Essiccare prima dell'uso.",
 "proprieta": {
 "struttura": "Carica particolata",
 "trasparenza": "Riduce",
 "flessibilita": "Riduce (irrigidisce)",
 "barriera_O2": "Può migliorare leggermente",
 "barriera_H2O": "Neutra/leggermente migliora"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 40,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "rigido",
 "pannello"
 ],
 "note_forma": "Carica - non forma materiali da sola",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "note_colore": "Conferisce colore marrone naturale",
 "reversibile": null,
 "stampabile_3D": "Possibile con matrici adatte",
 "effetto_su_matrice": "Texture granulosa, colore marrone, leggero profumo, antiossidante"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica",
 "fattori_degradazione": [
 "Umidità residua causa muffe",
 "Oli residui possono irrancidire"
 ],
 "condizioni_conservazione": "ESSICCARE COMPLETAMENTE prima dell'uso. Conservare asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Dosaggio: 5-30% sul peso secco",
            "ESSICCARE BENE prima dell'uso (evita muffe)",
            "Setacciare per granulometria uniforme",
            "Conferisce colore marrone naturale"
        ],
 "incompatibilita": [
            "Matrici che richiedono colore chiaro",
            "Applicazioni sensibili agli odori",
            "Uso umido (ammuffisce)"
        ],
 "alternative": "Cacao in polvere (colore simile), cannella, fondi di tè",
 "acquisto": "Gratuiti - bar, casa"
 ,
      "note_IED": ["Come CARICA in caseina → migliora compattezza del materiale [BONELITH]"]
    },
 "cellulosa_carta": {
 "nome": "Cellulosa (Carta Riciclata)",
 "famiglia": "CARICA",
 "categoria": "Carica fibrosa",
 "fonte": "Carta da riciclare",
 "reperibilita": "gratuita",
 "vegano": true,
 "food_safe": true,
 "funzione": "Rinforzo fibroso, riduce ritiro, aumenta resistenza",
 "descrizione": "Fibre di cellulosa da carta riciclata. Aumentano resistenza meccanica, riducono ritiro in asciugatura, stabilizzano dimensioni.",
 "proprieta": {
 "struttura": "Rinforzo fibroso",
 "trasparenza": "Riduce",
 "flessibilita": "Media (dipende da quantità)",
 "barriera_O2": "Discreta",
 "barriera_H2O": "Scarsa (idrofila)"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 30,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "cartapesta",
 "pannello",
 "substrato micelio"
 ],
 "note_forma": "Carica fibrosa - rinforza matrici",
 "termosaldabile": false,
 "incollabile_con": [
 "amido",
 "CMC",
 "colle viniliche",
 "gelatina"
 ],
 "cucibile": "nel composito finale, sì",
 "colorabile": true,
 "reversibile": false,
 "stampabile_3D": "Possibile come pasta densa",
 "effetto_su_matrice": "Rinforzo fibroso, riduce ritiro, aumenta resistenza a trazione"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica",
 "fattori_degradazione": [],
 "condizioni_conservazione": "Asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Strappare la carta in pezzi piccoli (2-3 cm): usare carta non patinata, non plastificata, senza stampe colorate",
 "Ammollare in acqua calda per almeno 2-4 ore (meglio una notte) fino a completa imbibizione",
 "Frullare con frullatore a immersione fino a ottenere una polpa omogenea senza pezzi visibili",
 "Scolare l'acqua in eccesso attraverso un setaccio fine o un panno",
 "Aggiungere la polpa alla matrice biopolimerica: funge da rinforzo fibroso, aumenta resistenza meccanica e opacit\u00e0"
 ],
 "incompatibilita": [
 "Carta patinata/plastificata (non si sfalda)"
 ],
 "alternative": "Cotone idrofilo, fibre vegetali",
 "acquisto": "Gratuita - carta da riciclare (no patinata)"
 },
 "fibre_cotone": {
 "nome": "Fibre di Cotone",
 "famiglia": "CARICA",
 "categoria": "Carica fibrosa",
 "fonte": "Cotone (Gossypium)",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Rinforzo, alta assorbenza, cellulosa pura",
 "descrizione": "Cellulosa quasi pura. Fibre corte o lunghe. Alta assorbenza, buona adesione alle matrici.",
 "proprieta": {
 "struttura": "Rinforzo fibroso",
 "trasparenza": "Riduce",
 "flessibilita": "Alta (molto morbido)",
 "barriera_O2": "Scarsa",
 "barriera_H2O": "Scarsa (molto assorbente)"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 30,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito morbido",
 "carta",
 "feltro",
 "imbottitura"
 ],
 "note_forma": "Carica fibrosa - rinforza matrici",
 "termosaldabile": false,
 "incollabile_con": [
 "amido",
 "CMC",
 "colle naturali"
 ],
 "cucibile": true,
 "colorabile": true,
 "note_colore": "Tingibile prima dell'incorporazione",
 "reversibile": false,
 "stampabile_3D": null,
 "effetto_su_matrice": "Rinforzo eccellente, alta assorbenza, buona adesione"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica",
 "fattori_degradazione": [
 "Muffe se umido"
 ],
 "condizioni_conservazione": "Asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Tagliare/sfilacciare a lunghezza desiderata",
 "Disperdere nella miscela",
 "Per fibre lunghe: posizionare a mano"
 ],
 "incompatibilita": [
 "Nessuna significativa"
 ],
 "alternative": "Lino, carta riciclata",
 "acquisto": "Farmacia (cotone idrofilo), merceria, Amazon"
 },
 "fibre_lino": {
 "nome": "Fibre di Lino",
 "famiglia": "CARICA",
 "categoria": "Carica fibrosa",
 "fonte": "Linum usitatissimum",
 "reperibilita": "media",
 "vegano": true,
 "food_safe": true,
 "funzione": "Rinforzo resistente, fibre lunghe e forti",
 "descrizione": "Fibre più resistenti del cotone. Tradizionali per tessuti pregiati e carta di qualità.",
 "proprieta": {
 "struttura": "Rinforzo fibroso forte",
 "trasparenza": "Riduce",
 "flessibilita": "Buona (fibra), variabile nel composito",
 "barriera_O2": "Scarsa",
 "barriera_H2O": "Scarsa-Media"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 30,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito tecnico",
 "tessuto",
 "prepreg",
 "laminato"
 ],
 "note_forma": "Carica fibrosa - rinforzo resistente",
 "termosaldabile": false,
 "incollabile_con": [
 "resine epossidiche",
 "resine bio",
 "PLA"
 ],
 "cucibile": true,
 "colorabile": true,
 "note_colore": "Tingibile, colore naturale beige",
 "reversibile": false,
 "stampabile_3D": "Sì, in filamenti compositi",
 "effetto_su_matrice": "Rinforzo più resistente del cotone, fibre più lunghe"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica",
 "fattori_degradazione": [],
 "condizioni_conservazione": "Asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Tagliare a misura",
 "Trattamento alcalino opzionale per migliorare adesione",
 "Incorporare nella matrice"
 ],
 "incompatibilita": [
 "Nessuna significativa"
 ],
 "alternative": "Cotone, canapa, juta",
 "acquisto": "Negozi tessuti, mercerie, Amazon"
 },
 "caolino": {
 "nome": "Caolino (Argilla Bianca)",
 "famiglia": "CARICA",
 "categoria": "Carica minerale",
 "fonte": "Minerale (silicato di alluminio)",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Carica bianca, opacizzante, aumenta rigidità",
 "descrizione": "Argilla bianca purissima (silicato di alluminio idrato), inerte e atossica. Carica minerale che aumenta opacità, rigidità e impermeabilità. Particelle lamellari che creano barriera. Non rigonfia in acqua.",
 "proprieta": {
 "struttura": "Carica particolata",
 "trasparenza": "Riduce (opacizza)",
 "flessibilita": "Riduce",
 "barriera_O2": "Migliora",
 "barriera_H2O": "Può migliorare"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 25,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "coating",
 "ceramica"
 ],
 "note_forma": "Carica minerale - non forma materiali da sola",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "note_colore": "Bianco, opacizza",
 "reversibile": false,
 "stampabile_3D": "Possibile in paste ceramiche",
 "effetto_su_matrice": "Opacizza, aumenta rigidità, migliora barriera gas"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica minerale inerte",
 "fattori_degradazione": [],
 "condizioni_conservazione": "Stabile indefinitamente",
 "biodegradabile": false,
 "compostabile": false
 },
 "processo": [
            "Dosaggio: 5-25% come carica",
            "Disperdere bene in liquido per evitare grumi",
            "Le particelle lamellari migliorano barriera ai gas",
            "Compatibile con quasi tutte le matrici"
        ],
 "incompatibilita": [
            "Acidi fluoridici",
            "Basi molto forti concentrate"
        ],
 "alternative": "Talco (più morbido), bentonite (rigonfia), carbonato calcio",
 "acquisto": "Negozi ceramica, Amazon, fornitori cosmetici"
 },
 "gusci_uovo": {
 "nome": "Gusci d'Uovo Macinati",
 "famiglia": "CARICA",
 "categoria": "Carica minerale",
 "fonte": "Scarto domestico",
 "reperibilita": "gratuita",
 "vegano": false,
 "food_safe": true,
 "funzione": "Carbonato di calcio naturale, carica bianca",
 "descrizione": "Carbonato di calcio biologico (94-97% CaCO3) con tracce di proteine. Carica naturale bianca, atossica, economica. Richiede lavaggio, essiccazione e macinazione. Granulometria influenza proprietà.",
 "proprieta": {
 "struttura": "Carica particolata",
 "trasparenza": "Riduce (opacizza)",
 "flessibilita": "Riduce (irrigidisce)",
 "barriera_O2": null,
 "barriera_H2O": "Neutra"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 30,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "carica",
 "abrasivo"
 ],
 "note_forma": "Carica minerale naturale (CaCO3)",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "note_colore": "Bianco-crema, opacizza",
 "reversibile": false,
 "stampabile_3D": "Possibile come filler",
 "effetto_su_matrice": "Rinforzo, opacità, fonte calcio. Granulometria variabile"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica",
 "fattori_degradazione": [
 "Acidi (reagisce con effervescenza)"
 ],
 "condizioni_conservazione": "Asciutto. Lavare bene e rimuovere membrana prima di macinare",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Dosaggio: 5-25% come carica",
            "Lavare bene, rimuovere membrana, essiccare",
            "Macinare a granulometria desiderata",
            "Sterilizzare con bollitura se per uso alimentare"
        ],
 "incompatibilita": [
            "Acidi (effervescenza - il carbonato reagisce)",
            "Ambienti molto acidi"
        ],
 "alternative": "Carbonato di calcio puro, gusci di molluschi",
 "acquisto": "Gratuiti - scarto domestico"
 ,
      "note_IED": ["Come CARICA in caseina → migliora aggregazione e coesione [BONELITH]"]
    },
 "carbonato_calcio": {
 "nome": "Carbonato di Calcio (CaCO₃)",
 "famiglia": "CARICA",
 "categoria": "Carica minerale",
 "fonte": "Minerale (calcite, marmo)",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Carica bianca economica, aumenta rigidità",
 "descrizione": "Carica minerale più usata nell'industria. Bianco, economico, aumenta rigidità e opacità.",
 "proprieta": {
 "struttura": "Carica particolata",
 "trasparenza": "Riduce (opacizza)",
 "flessibilita": "Riduce",
 "barriera_O2": "Neutra",
 "barriera_H2O": "Neutra"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 40,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "carica",
 "pigmento bianco"
 ],
 "note_forma": "Carica minerale - la più usata industrialmente",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "note_colore": "Bianco brillante, opacizza",
 "reversibile": false,
 "stampabile_3D": "Possibile come filler",
 "effetto_su_matrice": "Opacità, rigidità, economia. Riduce costi"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica minerale inerte",
 "fattori_degradazione": [
 "Acidi (effervescenza)"
 ],
 "condizioni_conservazione": "Stabile indefinitamente",
 "biodegradabile": false,
 "compostabile": false
 },
 "processo": [
 "Dosaggio tipico: 5-20% sul peso secco della matrice, a seconda della rigidit\u00e0 desiderata",
 "Disperdere la polvere in poca acqua mescolando bene per evitare grumi prima di aggiungere alla matrice",
 "Compatibile con quasi tutte le matrici: non altera pH significativamente",
 "ATTENZIONE: reagisce con acidi (aceto, acido citrico) producendo effervescenza \u2014 evitare in matrici acide"
 ],
 "incompatibilita": [
 "Acidi (reagisce con effervescenza)"
 ],
 "alternative": "Gusci uovo, caolino, talco",
 "acquisto": "Ferramenta (bianco di Spagna), colorifici, Amazon"
 },
 "curcuma": {
 "nome": "Curcuma",
 "famiglia": "COLORANTE",
 "ruolo_coltura": "colorante_medium",
 "categoria": "Colorante vegetale",
 "fonte": "Rizoma di Curcuma longa",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Colorante giallo-arancio brillante",
 "descrizione": "Pigmento giallo-arancio estratto dal rizoma di Curcuma longa. Colorante liposolubile e parzialmente idrosolubile, pH-sensibile (giallo in acido, rosso-bruno in basico). La curcumina ha proprietà antiossidanti e antimicrobiche: può rallentare la crescita di muffe nei biomateriali. Sensibile alla luce UV: sbiadisce se esposto. Il colore si intensifica con grassi o oli.",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null,
 "colore": "Giallo-arancio"
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 5,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "polvere",
 "estratto"
 ],
 "note_forma": "Colorante - non forma materiali",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Colore giallo-arancio brillante. pH-sensibile: giallo acido, rosso basico"
 },
 "durabilita": {
 "durata_stimata": "N/A - colorante",
 "fattori_degradazione": [
 "Luce UV (sbiadisce)",
 "pH cambia colore"
 ],
 "condizioni_conservazione": "Al buio per mantenere colore. Evitare luce diretta",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Dosaggio: 0.5-3% sul peso secco",
            "Per colori intensi: disperdere in olio o glicerina prima",
            "Il colore vira al rosso sopra pH 8",
            "Sensibile UV: proteggere dalla luce diretta",
            "Si lega bene a proteine (gelatina, caseina)"
        ],
 "incompatibilita": [
            "Ambienti molto basici (vira al rosso)",
            "Esposizione prolungata UV (sbiadisce)",
            "Ossidanti forti"
        ],
 "alternative": "Zafferano (più costoso, più stabile), cartamo, annatto per tonalità simili",
 "acquisto": "Supermercati, negozi etnici. Polvere"
 ,
      "note_IED": ["Usata come colorante in amido e caseina. Polvere fine, distribuzione omogenea [CASEO², CHECKERBOARD]"]
    },
 "spirulina": {
 "nome": "Spirulina",
 "famiglia": "COLORANTE",
 "ruolo_coltura": "colorante_medium",
 "categoria": "Colorante naturale",
 "fonte": "Cianobatterio Arthrospira",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Colorante verde-blu intenso",
 "descrizione": "Cianobatterio essiccato, fonte di ficocianina (blu) e clorofilla (verde). Produce verdi-blu intensi. pH-sensibile: il blu vira al verde in acido. Sensibile al calore sopra 60°C. Ricca di proteine, può contribuire leggermente alla struttura.",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null,
 "colore": "Verde-blu"
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 5,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 60,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 5,
 "pH_max": 8
 },
 "lavorabilita": {
 "forma_tipica": [
 "polvere",
 "estratto liquido"
 ],
 "note_forma": "Colorante - non forma materiali",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Colore verde-blu intenso. Molto sensibile a calore e pH"
 },
 "durabilita": {
 "durata_stimata": "N/A - colorante",
 "fattori_degradazione": [
 "Calore >60°C (degrada)",
 "pH acido (vira verde)",
 "Luce"
 ],
 "condizioni_conservazione": "Fresco, buio, pH neutro. Non scaldare",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Dosaggio: 0.5-3% per colore verde-blu",
            "Sciogliere in acqua fredda o tiepida (<50°C)",
            "NON scaldare sopra 60°C (perde il blu)",
            "Il colore finale dipende dal pH della matrice"
        ],
 "incompatibilita": [
            "Temperature >60°C (degrada ficocianina)",
            "pH acido <5 (vira al verde/giallo)",
            "Ossidanti (sbianca)"
        ],
 "alternative": "Ficocianina estratta (blu puro), clorofilla, butterfly pea flower",
 "acquisto": "Erboristerie, negozi bio, Amazon. Polvere"
 },
 "paprika": {
 "nome": "Paprika",
 "famiglia": "COLORANTE",
 "categoria": "Colorante vegetale",
 "fonte": "Capsicum annuum",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Colorante rosso-arancio",
 "descrizione": "Pigmento rosso-arancio da peperoni essiccati (Capsicum annuum). Contiene capsantina e capsorubina, carotenoidi liposolubili. Colore stabile al calore ma sensibile alla luce. Disponibile dolce o piccante. Il colore si estrae meglio in oli o grassi.",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null,
 "colore": "Rosso-arancio"
 },
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 10,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "polvere",
 "oleoresina"
 ],
 "note_forma": "Colorante - non forma materiali",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Colore rosso-arancio. Più stabile di curcuma e spirulina"
 },
 "durabilita": {
 "durata_stimata": "N/A - colorante",
 "fattori_degradazione": [
 "Luce prolungata (sbiadisce lentamente)"
 ],
 "condizioni_conservazione": "Al buio, stabile al calore",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Dosaggio: 1-5% sul peso secco",
            "Per dispersione uniforme: mescolare prima con olio o glicerina",
            "Il calore non degrada il colore",
            "Evitare esposizione prolungata alla luce"
        ],
 "incompatibilita": [
            "Luce diretta prolungata (sbiadisce)",
            "Ossidanti forti",
            "Solventi polari puri (scarsa solubilità)"
        ],
 "alternative": "Annatto, pomodoro concentrato, carota per tonalità arancio-rosse",
 "acquisto": "Supermercati. Polvere"
 },
 "carbone_vegetale": {
 "nome": "Carbone Vegetale Attivo",
 "famiglia": "COLORANTE",
 "categoria": "Pigmento",
 "fonte": "Legno carbonizzato",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Pigmento nero intenso, assorbente",
 "descrizione": "Carbone attivo da carbonizzazione vegetale (cocco, legno, bambù). Nero intenso, completamente opaco. Inerte chimicamente, non tossico (E153). Poroso: assorbe odori, umidità e piccole molecole.",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null,
 "colore": "Nero",
 "conducibilita": "Media-alta (carbone attivo)"
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 10,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "polvere finissima",
 "granuli"
 ],
 "note_forma": "Pigmento - non forma materiali",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "reversibile": false,
 "stampabile_3D": "Possibile come filler",
 "effetto_su_matrice": "Nero intenso, molto coprente. Proprietà assorbenti/deodoranti"
 },
 "durabilita": {
 "durata_stimata": "N/A - pigmento stabile",
 "fattori_degradazione": [],
 "condizioni_conservazione": "Stabile indefinitamente",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Dosaggio: 0.1-2% per nero intenso (molto coprente)",
            "Setacciare per evitare grumi",
            "Disperdere in liquido prima di aggiungere alla matrice",
            "Può assorbire altri additivi: aggiungere per ultimo"
        ],
 "incompatibilita": [
            "Può assorbire altri additivi (profumi, conservanti)",
            "Ossidanti molto forti"
        ],
 "alternative": "Inchiostro di seppia (grigio-nero), ossido di ferro nero",
 "acquisto": "Farmacie, erboristerie, Amazon. Polvere fine",
 "applicazioni_avanzate": {
 "elettrodi": "Con agar = elettrodi riciclabili shape-configurable",
 "sensori": "Film conduttivi per umidità/pressione"
 }
 },
 "ossido_ferro": {
 "nome": "Ossidi di Ferro",
 "famiglia": "COLORANTE",
 "categoria": "Pigmento minerale",
 "fonte": "Minerale",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Pigmenti rosso, giallo, marrone, nero - molto stabili",
 "descrizione": "Pigmenti minerali inorganici (Fe2O3, Fe3O4, FeOOH) che producono colori dal giallo ocra al rosso ruggine al nero. Estremamente stabili a luce, calore e pH. Non tossici nelle forme pure (E172). Opacizzanti: riducono trasparenza.",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null,
 "colore": "Rosso, giallo, marrone, nero"
 },
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 15,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "polvere",
 "dispersione"
 ],
 "note_forma": "Pigmento minerale - non forma materiali",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "reversibile": false,
 "stampabile_3D": "Possibile come filler colorato",
 "effetto_su_matrice": "Rosso, giallo, marrone, nero (vari ossidi). Estremamente stabili"
 },
 "durabilita": {
 "durata_stimata": "N/A - pigmento minerale inerte",
 "fattori_degradazione": [],
 "condizioni_conservazione": "Stabile indefinitamente. I più stabili tra i pigmenti naturali",
 "biodegradabile": false,
 "compostabile": false
 },
 "processo": [
            "Dosaggio: 0.5-5% per colorazione, fino a 15% come carica",
            "Disperdere bene per evitare grumi (setacciare)",
            "Non si sciolgono: restano in sospensione",
            "Compatibili con qualsiasi matrice"
        ],
 "incompatibilita": [
            "Acidi forti concentrati (possono solubilizzare)",
            "Riducenti forti"
        ],
 "alternative": "Terre naturali (ocra, siena, umber), biossido di titanio per bianco",
 "acquisto": "Negozi belle arti, colorifici, Amazon. Polvere"
 },
 "lecitina": {
 "nome": "Lecitina",
 "famiglia": "ADDITIVO",
 "categoria": "Emulsionante",
 "fonte": "Soia, girasole, uova",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Emulsionante naturale, stabilizza miscele acqua-olio",
 "descrizione": "Fosfolipide da soia, girasole o tuorlo. Emulsionante naturale che stabilizza miscele acqua-olio. Crea film lipidici, migliora lavorabilità, riduce appiccicosità. Disponibile in granuli o liquida.",
 "proprieta": {
 "struttura": "Granuli, liquido viscoso, o polvere",
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 3,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 60,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Emulsionante - non forma materiali",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Stabilizza emulsioni acqua-olio, migliora incorporazione cere"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "fattori_degradazione": [
 "Ossidazione se esposta all'aria"
 ],
 "condizioni_conservazione": "Contenitore chiuso, fresco",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Dosaggio emulsionante: 0.5-2% sul totale",
            "Sciogliere prima nella fase oleosa o in acqua tiepida",
            "Mescolare energicamente per attivare emulsione",
            "Riduce tensione superficiale"
        ],
 "incompatibilita": [
            "Ossidanti forti",
            "pH estremi (<3 o >10)",
            "Temperature molto alte prolungate"
        ],
 "alternative": "Tuorlo d'uovo, mono/digliceridi, esteri di saccarosio",
 "acquisto": "Negozi bio, farmacie, Amazon. Granuli o liquida (da soia o girasole)"
 },
 "acido_citrico": {
 "nome": "Acido Citrico",
 "famiglia": "ADDITIVO",
 "categoria": "Acidificante",
 "fonte": "Agrumi o fermentazione",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Acidificante, conservante, chelante",
 "descrizione": "Acido organico naturale (da agrumi o fermentazione). Acidificante, chelante del calcio, conservante (E330). In forma cristallina facile da dosare. Precipita caseina come aceto ma senza odore.",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 5,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Acidificante/conservante - non forma materiali",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Abbassa pH, conservante, chelante calcio, previene imbrunimento"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "fattori_degradazione": [
 "Igroscopico"
 ],
 "condizioni_conservazione": "Contenitore ermetico, asciutto",
 "effetto_su_durabilita": "Prolunga durata materiali prevenendo muffe",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Per caseina: 1-2% sul peso del latte",
            "Sciogliere in poca acqua calda prima dell'uso",
            "Per conservazione: 0.1-0.5% nella matrice",
            "Abbassa pH: controllare compatibilità"
        ],
 "incompatibilita": [
            "Carbonati e bicarbonati (effervescenza)",
            "Gelificazioni Ca-dipendenti (chela calcio)",
            "Basi forti"
        ],
 "alternative": "Aceto (liquido, odore), acido tartarico, acido lattico",
 "acquisto": "Supermercati, farmacie, Amazon. Polvere"
 },
 "aceto": {
 "nome": "Aceto (Acido Acetico)",
 "famiglia": "ADDITIVO",
 "categoria": "Acidificante/Solvente",
 "fonte": "Fermentazione alcolica",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Acidificante, precipitante caseina, solvente chitosano, conservante",
 "descrizione": "Soluzione acquosa di acido acetico (4-8% alimentare). Precipita caseina dal latte, scioglie chitosano, conservante antimicrobico. L'odore svanisce completamente dopo essiccazione. Preferire aceto bianco distillato.",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null
 },
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 15,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Acidificante/solvente - non forma materiali",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Precipita caseina, scioglie chitosano, conservante antimicrobico"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "fattori_degradazione": [],
 "condizioni_conservazione": "Stabile. Odore svanisce asciugando",
 "effetto_su_durabilita": "Conservante naturale, previene muffe",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Per caseina: 10-15% su volume latte caldo",
            "Per chitosano: soluzione 1-2% come solvente",
            "Aggiungere gradualmente mescolando",
            "L'odore svanisce completamente asciugando"
        ],
 "incompatibilita": [
            "Carbonati e bicarbonati (effervescenza)",
            "Metalli reattivi (corrosione)",
            "Basi forti"
        ],
 "alternative": "Acido citrico (cristalli, più facile), succo di limone",
 "acquisto": "Supermercati. Preferire aceto bianco distillato"
 ,
      "note_IED": ["RUOLO MULTIPLO: (1) coagulante caseina, (2) stabilizzatore amido/gelatina, (3) antimuffa [CASEO², CHECKERBOARD]","Meglio di limone come coagulante caseina — il limone rende fragile [CASEO²]","Dosaggio: in amido ~15%, in gelatina ~6% [CHECKERBOARD]","Bagno 1h su caseina → rimuove sali minerali, struttura più pulita [CASEO²]"],
      "parametri_IED": {"dosaggio_amido":"~15%","dosaggio_gelatina":"~6%"}
    },
 "oli_essenziali": {
 "nome": "Oli Essenziali",
 "famiglia": "ADDITIVO",
 "categoria": "Antimicrobico/Profumo",
 "fonte": "Piante aromatiche",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Antimicrobico naturale, profumazione, leggero plastificante",
 "descrizione": "Miscele concentrate di composti aromatici volatili da piante. Conferiscono profumo e spesso proprietà antimicrobiche (tea tree, timo, origano). Liposolubili: richiedono emulsionante in matrici acquose.",
 "proprieta": {
 "struttura": "Liquidi volatili",
 "trasparenza": "Incolori-giallastri",
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 3,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 60,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Antimicrobico/profumo - non forma materiali",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Antimicrobico (timo, origano, tea tree), profumazione, leggera plastificazione"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "fattori_degradazione": [
 "Volatili (evaporano)",
 "Luce (ossidazione)"
 ],
 "condizioni_conservazione": "Bottiglie scure, chiuse, fresche. Aggiungere a fine preparazione",
 "effetto_su_durabilita": "Proteggono da muffe e batteri. Effetto diminuisce nel tempo",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Dosaggio profumante: 0.1-1% (concentrati)",
            "Dosaggio antimicrobico: 0.5-2%",
            "Aggiungere a fine processo (volatili)",
            "Disperdere con emulsionante in matrici acquose"
        ],
 "incompatibilita": [
            "Calore prolungato (evaporano)",
            "Alcuni plastici (possono degradare)",
            "Contatto diretto pelle (alcuni irritanti)"
        ],
 "alternative": "Estratti acquosi di piante, spezie in polvere, idrolati",
 "acquisto": "Erboristerie, farmacie, Amazon. Oli puri, non diluiti"
 },
 "bicarbonato": {
 "nome": "Bicarbonato di Sodio",
 "famiglia": "ADDITIVO",
 "categoria": "Espandente",
 "fonte": "Minerale/sintetico",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Espandente (con acidi produce CO2), alcalinizzante",
 "descrizione": "Sodio bicarbonato (NaHCO3), sale basico. Reagisce con acidi producendo CO2 (effervescenza). Agente lievitante, neutralizzante, per creare porosità controllata. Atossico, economico.",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null
 },
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 8,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Espandente/alcalinizzante - non forma materiali",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": false,
 "stampabile_3D": null,
 "effetto_su_matrice": "Con acidi produce CO2 (schiume, materiali porosi). Alcalinizza"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "fattori_degradazione": [],
 "condizioni_conservazione": "Asciutto, contenitore chiuso",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Dosaggio lievitante: 1-3% + acido per attivare",
            "Per porosità: mescolare con acido citrico secco",
            "La reazione avviene con umidità/acido",
            "Agisce rapidamente: lavorare veloce dopo attivazione"
        ],
 "incompatibilita": [
            "Acidi (reagisce subito con effervescenza)",
            "Non usare se serve ambiente acido stabile"
        ],
 "alternative": "Lievito chimico (già bilanciato), carbonato ammonio",
 "acquisto": "Supermercati, farmacie"
 ,
      "note_IED": ["4 RUOLI: (1) espandente con acido, (2) alcalinizzante per estrazione alginato, (3) attivatore colla caseinica, (4) genera porosità su caseina pura [BONELITH, SEED-IN]"]
    },
 "acqua": {
 "nome": "Acqua",
 "famiglia": "ADDITIVO",
 "categoria": "Solvente",
 "fonte": "Rubinetto/distillata",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Solvente universale, plastificante temporaneo",
 "descrizione": "Solvente universale, componente fondamentale di tutti i biomateriali. Qualità influenza risultato: distillata per purezza, demineralizzata per evitare depositi. Alcune matrici richiedono rapporti precisi.",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null
 },
 "parametri": {
 "range_percent_min": 50,
 "range_percent_max": 95,
 "temp_dissoluzione_min": 0,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Solvente base - evapora lasciando il materiale",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Solvente universale, plastificante temporaneo"
 },
 "durabilita": {
 "durata_stimata": "N/A - solvente",
 "fattori_degradazione": [],
 "condizioni_conservazione": "N/A",
 "nota": "Acqua dura (calcarea) può interferire con alginato. Usare filtrata/distillata per formulazioni precise",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Sempre pesare, non misurare a volume",
            "Temperatura critica: calda per sciogliere, fredda per gelificare",
            "Acqua distillata per risultati riproducibili",
            "Per alginato: evitare acqua dura (contiene calcio)"
        ],
 "incompatibilita": [
            "Acqua dura con alginato (gelifica prematuramente)",
            "Acqua clorata con colture vive"
        ],
 "alternative": "Acqua distillata, demineralizzata, filtrata",
 "acquisto": "Rubinetto (filtrata), distillata in farmacia"
 },
 "zeina": {
 "nome": "Zeina",
 "nome_scientifico": "Zein (prolamina del mais)",
 "famiglia": "PROTEINA",
 "sottofamiglia": "proteina_idrofoba",
 "fonte": "Mais (sottoprodotto wet milling)",
 "reperibilita": "media",
 "food_safe": true,
 "vegano": true,
 "funzione": "Film idrofobi, coating, barriera umidità",
 "descrizione": "Unica proteina vegetale IDROFOBA. Si scioglie in etanolo 70-90%, NON in acqua. Film lucidi resistenti a grassi.",
 "proprieta": {
 "struttura": "Film o coating",
 "trasparenza": "Media-alta (ambrato)",
 "flessibilita": "Bassa senza plastificante",
 "barriera_O2": "Buona",
 "barriera_H2O": "ALTA (idrofoba)",
 "colore": "Giallo-ambrato",
 "solubilita": "Etanolo 70-90%, NON acqua"
 },
 "parametri": {
 "concentrazione_tipica": "5-15% in etanolo",
 "temp_Tg": "165-175°C",
 "plastificanti": [
 "glicerolo",
 "acido oleico",
 "PEG"
 ],
 "range_percent_min": 10,
 "range_percent_max": 25,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 50,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "sinergie": [
 "chitosano",
 "acido_oleico",
 "xantana"
 ],
 "incompatibilita": [
 "acqua pura (non si scioglie)"
 ],
 "fonti": [
 "Food Hydrocolloids",
 "BioZein",
 "GRAS FDA 1985"
 ],
 "lavorabilita": {
 "forma_tipica": [
 "film",
 "coating"
 ],
 "note_forma": "Si scioglie in etanolo 70-90%, NON in acqua. Film lucidi e resistenti all'acqua",
 "termosaldabile": true,
 "temp_saldatura_min": 120,
 "temp_saldatura_max": 160,
 "incollabile_con": [
 "etanolo",
 "se stessa"
 ],
 "cucibile": false,
 "colorabile": true,
 "metodo_colorazione": "Coloranti liposolubili in soluzione etanolica",
 "reversibile": true,
 "stampabile_3D": false,
 "effetto_su_matrice": "Film idrofobo, lucido, buona barriera a O₂"
 },
 "durabilita": {
 "durata_stimata": "Mesi (ottima stabilità in ambiente secco)",
 "fattori_degradazione": [
 "Umidità persistente (lentamente)",
 "Alcool (ridiscioglie)"
 ],
 "condizioni_conservazione": "Ambiente secco, temperatura ambiente",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere zeina in etanolo 70-90% (10-25% w/v)",
 "Aggiungere plastificante (glicerolo, acido oleico) se necessario",
 "Versare su superficie piana (casting) o applicare a pennello",
 "Lasciar evaporare solvente in ambiente ventilato"
 ],
 "alternative": "Gommalacca (più dura), caseina (più flessibile)",
 "acquisto": "Amazon, fornitori specializzati, Sigma-Aldrich (grado laboratorio)"
 },
 "olio_tung": {
 "nome": "Olio di Tung",
 "nome_scientifico": "Aleurites fordii oil",
 "famiglia": "RESINA_LIPIDE",
 "sottofamiglia": "olio_essiccante",
 "fonte": "Semi albero Tung",
 "reperibilita": "media",
 "food_safe": false,
 "vegano": true,
 "funzione": "Finitura waterproof, polimerizza all'aria",
 "descrizione": "Olio ESSICCANTE - si indurisce esposto all'aria. Eccellente impermeabilizzante. NON food-safe.",
 "proprieta": {
 "struttura": "Coating indurente",
 "trasparenza": "Alta dopo indurimento",
 "flessibilita": "Media",
 "barriera_O2": "Eccellente",
 "barriera_H2O": "ECCELLENTE",
 "colore": "Giallastro → ambrato",
 "tempo_indurimento": "24-72 ore"
 },
 "parametri": {
 "applicazione": "Pennello o immersione",
 "strati": "2-3 per protezione ottimale",
 "range_percent_min": 2,
 "range_percent_max": 15,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 60,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "avvertenze": [
 "NON food-safe",
 "Usare in ambiente ventilato"
 ],
 "fonti": [
 "Wood finishing literature"
 ],
 "lavorabilita": {
 "forma_tipica": [
 "coating",
 "vernice"
 ],
 "note_forma": "Olio siccativo - polimerizza all'aria formando coating duro e impermeabile",
 "termosaldabile": false,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "note_colore": "Scurisce leggermente il materiale (ambra)",
 "reversibile": false,
 "note_reversibilita": "Polimerizza irreversibilmente all'aria",
 "stampabile_3D": false,
 "effetto_su_matrice": "Coating impermeabilizzante, polimerizza più veloce dell'olio di lino"
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni (coating polimerizzato)",
 "fattori_degradazione": [
 "UV (lentamente)",
 "Abrasione meccanica"
 ],
 "condizioni_conservazione": "Olio liquido: ermetico, al buio. Coating: stabile",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Applicare a pennello in strati sottili e uniformi su materiale gi\u00e0 asciutto \u2014 usare SEMPRE guanti (irritante sulla pelle fresca)",
 "Lasciare asciugare 24-48 ore tra uno strato e l'altro in ambiente ventilato",
 "Applicare 2-3 strati per una protezione ottimale; ogni strato aggiunge resistenza all'acqua",
 "La polimerizzazione completa richiede 1-2 settimane: l'olio reagisce con l'ossigeno dell'aria (non evapora, si trasforma)",
 "Risultato finale pi\u00f9 duro e resistente all'acqua rispetto all'olio di lino, ma pi\u00f9 costoso"
 ],
 "incompatibilita": [
 "Non miscibile con acqua",
 "Non alimentare (tossico se ingerito)"
 ],
 "alternative": "Olio di lino (più lento), cera carnauba (diverso meccanismo)",
 "acquisto": "Ferramenta, Amazon - olio di tung puro senza solventi"
 },
 "lattato_calcio": {
 "nome": "Lattato di Calcio",
 "nome_scientifico": "Calcium lactate pentahydrate",
 "famiglia": "SALE_RETICOLANTE",
 "sottofamiglia": "calcio_alimentare",
 "fonte": "Fermentazione + calcio",
 "reperibilita": "facile",
 "food_safe": true,
 "vegano": true,
 "funzione": "Reticolante dolce per alginato/pectina",
 "descrizione": "Alternativa al CaCl2 con sapore neutro. Reticolazione più lenta e controllata. Ideale per sferificazione inversa.",
 "proprieta": {
 "struttura": "Polvere bianca cristallina",
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null,
 "colore": "Bianco (polvere)",
 "solubilita": "Alta in acqua",
 "pH": "Neutro (6-7)"
 },
 "parametri": {
 "concentrazione_tipica": "0.5-2%",
 "velocita_gel": "Più lenta di CaCl2",
 "range_percent_min": 0.5,
 "range_percent_max": 3,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 80,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "sinergie": [
 "alginato",
 "pectina_LM"
 ],
 "vantaggi_vs_CaCl2": [
 "Sapore neutro",
 "Gel più uniforme",
 "Meno shock termico"
 ],
 "fonti": [
 "Molecular gastronomy",
 "Ferran Adrià"
 ],
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Reticolante per alginato/pectina LM - non forma materiali da solo",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": false,
 "stampabile_3D": null,
 "effetto_su_matrice": "Reticolazione lenta e controllata dell'alginato. Gel più uniforme del CaCl₂"
 },
 "durabilita": {
 "durata_stimata": "N/A - reticolante",
 "fattori_degradazione": [
 "Igroscopico"
 ],
 "condizioni_conservazione": "Contenitore ermetico, asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere in acqua (0.5-3%)",
 "Per gelificazione interna: aggiungere alla soluzione di alginato",
 "Per bagno esterno: immergere alginato nella soluzione",
 "Gelificazione più lenta del CaCl₂ (5-30 min)"
 ],
 "incompatibilita": [
 "Proteine (può aggregare, meno del CaCl₂)"
 ],
 "alternative": "CaCl₂ (più veloce), solfato di calcio (gesso - più lento)",
 "acquisto": "Amazon, fornitori cucina molecolare, farmacie"
 },
 "borace": {
 "nome": "Borace",
 "nome_scientifico": "Sodium tetraborate decahydrate",
 "famiglia": "SALE_RETICOLANTE",
 "sottofamiglia": "reticolante_alcalino",
 "fonte": "Minerale naturale",
 "reperibilita": "facile",
 "food_safe": false,
 "vegano": true,
 "funzione": "Reticolante per PVA/guar, denaturante proteine",
 "descrizione": "☑  NON food-safe. Crea gel elastici 'slime'. Denatura caseina aumentandone trasparenza.",
 "proprieta": {
 "struttura": "Cristalli bianchi o polvere",
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null,
 "colore": "Bianco (polvere)",
 "pH_soluzione": "9.2 (alcalino)"
 },
 "parametri": {
 "concentrazione_tipica": "1-5%",
 "range_percent_min": 1,
 "range_percent_max": 5,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 80,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "sinergie": [
 "guar (slime)",
 "PVA",
 "caseina (denaturazione)"
 ],
 "avvertenze": [
 "TOSSICO se ingerito",
 "NON per progetti food-contact",
 "Tenere lontano da bambini"
 ],
 "fonti": [
 "Polymer chemistry",
 "Educational slime"
 ],
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Reticolante - non forma materiali da solo. Crea gel 'slime' con PVA/guar",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": true,
 "stampabile_3D": null,
 "effetto_su_matrice": "Reticola PVA e guar in gel elastici. Denatura caseina aumentando trasparenza"
 },
 "durabilita": {
 "durata_stimata": "N/A - reticolante",
 "fattori_degradazione": [
 "Igroscopico"
 ],
 "condizioni_conservazione": "Contenitore ermetico, asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere in acqua calda (soluzione 4-5%)",
 "Aggiungere lentamente alla soluzione di PVA o guar",
 "Mescolare: gelificazione istantanea",
 "Per caseina: aggiungere alla soluzione e scaldare"
 ],
 "incompatibilita": [
 "NON food-safe",
 "Eccesso rende gel fragile",
 "Non per fermentazioni"
 ],
 "alternative": "CaCl₂ (per alginato), tannini (per proteine)",
 "acquisto": "Farmacia, Amazon, ferramenta (antiformiche/disinfettante)"
 },
 "grafite": {
 "nome": "Grafite Naturale",
 "nome_scientifico": "Graphite (carbon)",
 "famiglia": "CARICA",
 "sottofamiglia": "carica_conduttiva",
 "fonte": "Minerale o biomassa pirolizzata",
 "reperibilita": "facile",
 "food_safe": false,
 "vegano": true,
 "funzione": "Conferisce conducibilità elettrica",
 "descrizione": "Rende biopolimeri CONDUTTIVI. Per sensori, elettrodi biodegradabili. Opacizza completamente.",
 "proprieta": {
 "struttura": "Polvere o scaglie",
 "trasparenza": "OPACO (nero)",
 "flessibilita": "Non modifica significativamente",
 "barriera_O2": "Migliora",
 "barriera_H2O": "Migliora leggermente",
 "colore": "Nero/grigio metallico",
 "conducibilita": "ALTA (10²-10→µ S/m)"
 },
 "parametri": {
 "concentrazione_tipica": "5-30% per conducibilità",
 "range_percent_min": 5,
 "range_percent_max": 30,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "sinergie": [
 "agar (elettrodi)",
 "chitosano (sensori)"
 ],
 "applicazioni": [
 "Elettrodi biodegradabili",
 "Sensori flessibili",
 "Schermatura EMI"
 ],
 "fonti": [
 "MDPI Polymers 2019",
 "Conducting biopolymers review"
 ],
 "lavorabilita": {
 "forma_tipica": [
 "composito conduttivo",
 "sensore",
 "elettrodo",
 "pigmento"
 ],
 "note_forma": "Carica funzionale - conferisce conducibilità elettrica e colore",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "note_colore": "Colora intensamente nero-grigio",
 "reversibile": false,
 "stampabile_3D": "Possibile in compositi",
 "effetto_su_matrice": "Conducibilità elettrica, colore nero, lubrificazione, barriera"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica (stabile indefinitamente)",
 "fattori_degradazione": [
 "Nessuno significativo (molto stabile)"
 ],
 "condizioni_conservazione": "Nessuna precauzione particolare",
 "biodegradabile": false,
 "compostabile": false
 },
 "processo": [
 "Disperdere in acqua o nella miscela",
 "Mescolare bene per distribuzione omogenea",
 "Percentuali alte (>15%) per conducibilità"
 ],
 "incompatibilita": [
 "Nessuna significativa - chimicamente inerte"
 ],
 "alternative": "Carbone attivo (più poroso), nerofumo",
 "acquisto": "Amazon, ferramenta (polvere di grafite), negozi belle arti"
 },
 "zucchero": {
 "nome": "Zucchero",
 "famiglia": "ADDITIVO",
 "fonte": "Canna/barbabietola - supermercato",
 "vegano": true,
 "food_safe": true,
 "biodegradabile": true,
 "funzione_primaria": "Nutriente per fermentazioni (SCOBY, micelio)",
 "forma_output": [
 "liquido",
 "gel"
 ],
 "note_uso": "Essenziale per crescita SCOBY. 70-100g/L per kombucha.",
 "reperibilita": "Facilissima - supermercato",
 "costo_indicativo": "Molto basso",
 "descrizione": "Saccarosio cristallino. Nutriente essenziale per crescita SCOBY e micelio: fonte primaria di carbonio per fermentazioni. Solubile in acqua, caramellizza a 160°C.",
 "categoria": "Nutriente fermentazione",
 "proprieta": {
 "struttura": "Cristallino (solido) o disciolto",
 "trasparenza": "Trasparente in soluzione",
 "flessibilita": "Plastifica ma può cristallizzare",
 "barriera_O2": null,
 "barriera_H2O": "Riduce (igroscopico)",
 "colore": "Bianco (scurisce caramellizzando)"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 15,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Non forma materiali - è nutriente per fermentazioni",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": true,
 "stampabile_3D": null,
 "effetto_su_matrice": "Nutre SCOBY/micelio. Residuo può rendere materiale appiccicoso"
 },
 "durabilita": {
 "durata_stimata": "N/A - nutriente",
 "fattori_degradazione": [
 "Igroscopico",
 "Favorisce muffe se residuo"
 ],
 "condizioni_conservazione": "Contenitore ermetico, asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere in acqua calda o nel tè (70-100g/L per kombucha)",
 "Mescolare fino a completa dissoluzione",
 "Raffreddare a <30°C prima di aggiungere SCOBY o inoculo"
 ],
 "incompatibilita": [
 "Eccesso (>15%) può inibire fermentazione",
 "Zuccheri artificiali non fermentabili"
 ],
 "alternative": "Miele (più lento), melassa, sciroppo d'acero",
 "acquisto": "Supermercato - zucchero bianco o di canna"
 ,
      "note_IED": ["Funzione secondaria PLASTIFICANTE: ~15% su peso caseina → plastifica, elimina vetrosità [BONELITH]","Stabilizzante in schiuma di aquafaba — impedisce collasso [ALISEA]"]
    },
 "te_nero": {
 "nome": "Tè nero",
 "famiglia": "ADDITIVO",
 "ruolo_coltura": "medium",
 "fonte": "Camellia sinensis - supermercato",
 "vegano": true,
 "food_safe": true,
 "biodegradabile": true,
 "funzione_primaria": "Base tannica per kombucha, nutrienti per SCOBY",
 "forma_output": [
 "liquido"
 ],
 "note_uso": "Fornisce azoto e tannini. 4-6 bustine/L o 8-10g sfuso.",
 "reperibilita": "Facilissima - supermercato",
 "costo_indicativo": "Molto basso",
 "descrizione": "Foglie ossidate di Camellia sinensis. Fornisce tannini, azoto, minerali e caffeina per crescita SCOBY. Base tradizionale per kombucha. Tannini conferiscono colore ambrato.",
 "categoria": "Base tannica / nutriente",
 "proprieta": {
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null,
 "colore": "Ambra-marrone (tannini)"
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 1.5,
 "temp_dissoluzione_min": 80,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Non forma materiali - è base liquida per fermentazione",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Tannini colorano cellulosa batterica ambra-marrone. Caffeina stimola SCOBY"
 },
 "durabilita": {
 "durata_stimata": "N/A - base liquida",
 "fattori_degradazione": [
 "Ammuffisce se infuso conservato troppo a lungo"
 ],
 "condizioni_conservazione": "Foglie secche: ermetico al buio. Infuso: usare entro 24h",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Portare acqua a ebollizione",
 "Infondere 4-6 bustine/L (o 8-10g sfuso) per 5-10 min",
 "Filtrare, aggiungere zucchero, raffreddare a <30°C",
 "Inoculare con SCOBY"
 ],
 "incompatibilita": [
 "Tè Earl Grey (bergamotto tossico per SCOBY)",
 "Tè con oli essenziali",
 "Tisane senza caffeina (nutrono poco)"
 ],
 "alternative": "Tè verde (SCOBY più sottile), tè bianco, tè oolong",
 "acquisto": "Supermercato - preferire tè sfuso senza aromi aggiunti"
 },
 "urea": {
 "nome": "Urea",
 "famiglia": "SALE_RETICOLANTE",
 "fonte": "Sintesi industriale - garden center/agraria",
 "vegano": true,
 "food_safe": false,
 "biodegradabile": true,
 "funzione_primaria": "Fonte azoto per bio-cementi MICP",
 "forma_output": [
 "solido"
 ],
 "note_uso": "Substrato per batteri ureolitici. CO(NH2)2 puro al 46% N.",
 "reperibilita": "Facile - garden center, agraria",
 "costo_indicativo": "Basso",
 "avvertenze": "Non alimentare. Irritante, evitare inalazione.",
 "descrizione": "CO(NH₂)₂ - composto organico ad alto contenuto di azoto (46%). Substrato essenziale per batteri ureolitici nel processo MICP (bio-cemento). Non alimentare.",
 "categoria": "Substrato bio-cemento",
 "proprieta": {
 "struttura": "Cristalli bianchi, molto solubili",
 "trasparenza": "Aumenta trasparenza caseina",
 "flessibilita": "Plastifica amidi",
 "barriera_O2": null,
 "barriera_H2O": "Riduce (molto igroscopica)",
 "colore": "Bianco (cristalli)"
 },
 "parametri": {
 "range_percent_min": 2,
 "range_percent_max": 10,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 60,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Substrato chimico - non forma materiali da sola",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Batteri scindono urea in CO₂ + NH₃, precipitando CaCO₃ (bio-cemento)"
 },
 "durabilita": {
 "durata_stimata": "N/A - reagente",
 "fattori_degradazione": [
 "Igroscopica",
 "Volatilizza NH₃ in condizioni alcaline"
 ],
 "condizioni_conservazione": "Ermetico, asciutto, temperatura ambiente",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere in acqua insieme a CaCl₂",
 "Inoculare con batteri ureolitici (Sporosarcina pasteurii)",
 "Immergere sabbia/aggregato nella soluzione",
 "Incubare per giorni-settimane a 25-30°C"
 ],
 "incompatibilita": [
 "Non per uso alimentare",
 "pH molto acido inibisce batteri"
 ],
 "alternative": "Nessuna diretta per processo MICP",
 "acquisto": "Garden center (fertilizzante), agraria, Amazon"
 },
 "paglia": {
 "nome": "Paglia",
 "famiglia": "CARICA",
 "ruolo_coltura": "substrato",
 "fonte": "Cereali (grano, riso, orzo) - agraria",
 "vegano": true,
 "food_safe": true,
 "biodegradabile": true,
 "funzione_primaria": "Substrato per crescita micelio",
 "forma_output": [
 "composito",
 "solido"
 ],
 "note_uso": "Sterilizzare prima dell'uso. Ottimo rapporto C/N per funghi.",
 "reperibilita": "Facile - agraria, maneggi, contadini",
 "costo_indicativo": "Molto basso",
 "descrizione": "Steli secchi di cereali (grano, riso, orzo). Substrato ideale per crescita micelio grazie all'ottimo rapporto carbonio/azoto. Usata anche come carica fibrosa in compositi.",
 "categoria": "Substrato / carica fibrosa",
 "proprieta": {
 "struttura": "Rinforzo fibroso",
 "trasparenza": "Riduce (opaco)",
 "flessibilita": "Media (steli), alta (tritata)",
 "barriera_O2": "Scarsa",
 "barriera_H2O": "Scarsa (assorbe)",
 "colore": "Giallo-dorato"
 },
 "parametri": {
 "range_percent_min": 20,
 "range_percent_max": 80,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "pannello",
 "mattone"
 ],
 "note_forma": "Substrato micelio o carica per compositi. Usare tagliata/trinciata",
 "termosaldabile": false,
 "incollabile_con": [
 "micelio (biologico)",
 "amido cotto"
 ],
 "cucibile": false,
 "colorabile": false,
 "reversibile": false,
 "stampabile_3D": false,
 "effetto_su_matrice": "Struttura fibrosa, leggerezza. Con micelio: substrato colonizzabile"
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni (se asciutta)",
 "fattori_degradazione": [
 "Umidità (muffe)",
 "Insetti",
 "Fuoco"
 ],
 "condizioni_conservazione": "Asciutta, ventilata. Sterilizzare prima dell'uso con micelio",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Trinciare a lunghezza desiderata (2-5cm per micelio)",
 "Sterilizzare: ammollo in acqua calda 65-80°C per 1-2h",
 "Scolare e raffreddare",
 "Inoculare con micelio o mescolare con matrice"
 ],
 "incompatibilita": [
 "Contaminazione da muffe se non sterilizzata",
 "Legno trattato chimicamente"
 ],
 "alternative": "Segatura, trucioli, fondi di caffè, cartone",
 "acquisto": "Agraria, maneggi, contadini - spesso gratuita o molto economica"
 },
 "segatura": {
 "nome": "Segatura/Farina di legno",
 "famiglia": "CARICA",
 "ruolo_coltura": "substrato",
 "fonte": "Legno - falegnamerie, bricolage",
 "vegano": true,
 "food_safe": false,
 "biodegradabile": true,
 "funzione_primaria": "Filler per compositi legno-plastica (WPC)",
 "forma_output": [
 "composito",
 "solido"
 ],
 "note_uso": "Preferire legno non trattato. Mesh 40-80 per WPC.",
 "reperibilita": "Facile - falegnamerie (spesso gratis), bricolage",
 "costo_indicativo": "Molto basso o gratis",
 "descrizione": "Particelle di legno da lavorazione. Filler per compositi legno-bioplastica (WPC). Substrato per crescita micelio. Conferisce struttura, rigidità e aspetto naturale.",
 "categoria": "Filler / substrato",
 "proprieta": {
 "struttura": "Carica particolata",
 "trasparenza": "Riduce (opaco)",
 "flessibilita": "Riduce (irrigidisce)",
 "barriera_O2": "Neutra",
 "barriera_H2O": "Scarsa (assorbe)",
 "colore": "Variabile (dipende da essenza legno)"
 },
 "parametri": {
 "range_percent_min": 10,
 "range_percent_max": 60,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "pannello",
 "solido stampato"
 ],
 "note_forma": "Carica per compositi. Mesh 40-80 per WPC, più fine per superfici lisce",
 "termosaldabile": false,
 "incollabile_con": [
 "amido cotto",
 "caseina",
 "micelio"
 ],
 "cucibile": false,
 "colorabile": false,
 "note_colore": "Il colore dipende dall'essenza (faggio chiaro, noce scuro)",
 "reversibile": false,
 "stampabile_3D": true,
 "note_stampabilita": "Come filler in paste estrudibili (amido+segatura)",
 "effetto_su_matrice": "Aumenta rigidità, riduce ritiro, aspetto legno naturale"
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni nel composito",
 "fattori_degradazione": [
 "Umidità (rigonfia)",
 "Muffe",
 "Insetti xilofagi"
 ],
 "condizioni_conservazione": "Essiccare bene prima dell'uso. Composito: ambiente secco",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Setacciare per granulometria uniforme (mesh 40-80)",
 "Essiccare completamente",
 "Mescolare con matrice (amido, caseina, PVA)",
 "Pressare in stampo o estrudere"
 ],
 "incompatibilita": [
 "Legno trattato (vernici, CCA, creosoto)",
 "Essenze resinose possono interferire con gelificazione"
 ],
 "alternative": "Farina di legno (più fine), fondi di caffè, fibre di canapa",
 "acquisto": "Falegnamerie (spesso gratis), bricolage. SOLO legno non trattato"
 ,
      "note_IED": ["Tipo di legno conta: abete funziona bene con gomma arabica. Dosaggio: 2g/10g matrice [ARABIC SENSATION]"]
    },
 "sapone": {
 "nome": "Sapone (tensioattivo)",
 "famiglia": "ADDITIVO",
 "ruolo": "Agente schiumogeno, tensioattivo",
 "descrizione": "Sapone liquido o in scaglie usato come agente schiumogeno per creare biofoam. Riduce la tensione superficiale permettendo l'incorporazione di aria nella miscela.",
 "proprieta": {
 "funzione_principale": "Schiumogeno",
 "ph": "8-10 (basico)",
 "solubilita": "Solubile in acqua",
 "struttura": null,
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null
 },
 "dosaggio_tipico": {
 "min": "1%",
 "max": "5%",
 "unita": "% peso su acqua"
 },
 "fonti_comuni": [
 "Sapone di Marsiglia",
 "Sapone per piatti biodegradabile"
 ],
 "note_uso": "Usare saponi senza profumi o additivi sintetici. Sbattere energicamente per incorporare aria.",
 "warnings": [
 "Eccesso rende la schiuma instabile",
 "Non compatibile con acidi"
 ],
 "categoria": "Schiumogeno",
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 5,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 60,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "liquido",
 "scaglie",
 "pasta"
 ],
 "note_forma": "Agente schiumogeno per biofoam - non forma materiali da solo",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Incorpora aria creando schiuma/biofoam. Riduce densità, aumenta volume"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "fattori_degradazione": [
 "Schiuma collassa nel tempo",
 "Umidità accelera degradazione foam"
 ],
 "condizioni_conservazione": "Asciugare rapidamente il biofoam dopo formatura",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Preparare miscela matrice (amido/gelatina/agar)",
 "Aggiungere sapone liquido (1-5%)",
 "Frullare/sbattere energicamente per incorporare aria",
 "Versare in stampo e asciugare rapidamente"
 ],
 "incompatibilita": [
 "Eccesso rende la schiuma instabile",
 "Non compatibile con fermentazioni (antimicrobico)"
 ],
 "alternative": "Lecitina (emulsionante naturale), albume d'uovo",
 "acquisto": "Supermercato - sapone di Marsiglia liquido o sapone piatti biodegradabile"
 },
 "amido_tapioca": {
 "nome": "Amido di Tapioca (Manioca)",
 "famiglia": "POLISACCARIDE_NEUTRO",
 "ruolo": "Matrice, gelificante",
 "descrizione": "Amido estratto dalla radice di manioca (cassava). Produce film più trasparenti e flessibili rispetto all'amido di mais. Molto usato in Asia per bioplastiche.",
 "proprieta": {
 "gelatinizzazione": "65-70°C",
 "trasparenza": "Alta (superiore a mais)",
 "flessibilita": "Media-alta",
 "viscosita": "Alta quando cotto",
 "struttura": "Film o gel trasparente",
 "barriera_O2": "Buona",
 "barriera_H2O": "Scarsa",
 "colore": "Trasparente-bianco"
 },
 "dosaggio_tipico": {
 "min": "5%",
 "max": "15%",
 "unita": "% peso su acqua"
 },
 "fonti_comuni": [
 "Fecola di tapioca alimentare",
 "Perle di tapioca (da macinare)"
 ],
 "note_uso": "Cuocere mescolando continuamente. Si addensa rapidamente.",
 "warnings": [
 "Gelifica rapidamente, lavorare velocemente"
 ],
 "parametri": {
 "range_percent_min": 3,
 "range_percent_max": 10,
 "temp_dissoluzione_min": 60,
 "temp_dissoluzione_max": 95,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 4,
 "pH_max": 9
 },
 "lavorabilita": {
 "forma_tipica": [
 "film",
 "gel",
 "coating",
 "foam"
 ],
 "termosaldabile": true,
 "temp_saldatura_min": 100,
 "temp_saldatura_max": 130,
 "incollabile_con": [
 "acqua calda",
 "se stesso"
 ],
 "cucibile": true,
 "colorabile": true,
 "metodo_colorazione": "Coloranti alimentari in massa",
 "reversibile": true,
 "stampabile_3D": false,
 "effetto_su_matrice": "Film più trasparenti e flessibili dell'amido di mais"
 },
 "durabilita": {
 "durata_stimata": "Settimane-mesi (se asciutto)",
 "fattori_degradazione": [
 "Umidità (rigonfia/ammorbidisce)",
 "Muffe",
 "Retrogradazione (indurisce)"
 ],
 "condizioni_conservazione": "Ambiente secco <60% UR, temperatura <25°C",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Disperdere amido in acqua fredda (3-10%)",
 "Scaldare a 60-95°C mescolando costantemente",
 "Aggiungere plastificante (glicerina 15-30%)",
 "Versare su superficie e asciugare (film) o in stampo (gel)"
 ],
 "incompatibilita": [
 "Retrogradazione con raffreddamento lento",
 "Lipidi (interferiscono con gelificazione)"
 ],
 "alternative": "Amido di mais (più rigido), amido di patata (più viscoso)",
 "acquisto": "Supermercato (fecola di tapioca/manioca), negozi etnici, Amazon"
 },
 "alcool": {
 "nome": "Alcool Etilico (Etanolo)",
 "famiglia": "ADDITIVO",
 "ruolo": "Solvente, veicolo",
 "descrizione": "Solvente per gommalacca e alcune resine. Evapora completamente lasciando un film solido. Usare alcool denaturato o etilico >90%.",
 "proprieta": {
 "punto_ebollizione": "78°C",
 "evaporazione": "Rapida",
 "polarita": "Polare",
 "struttura": "Liquido incolore volatile",
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null,
 "colore": "Incolore"
 },
 "dosaggio_tipico": {
 "min": "50%",
 "max": "80%",
 "unita": "% volume per sciogliere gommalacca"
 },
 "fonti_comuni": [
 "Alcool etilico denaturato",
 "Alcool 95° alimentare"
 ],
 "note_uso": "Lavorare in ambiente ventilato. La gommalacca si scioglie in rapporto 1:4 (gommalacca:alcool).",
 "warnings": [
 "Infiammabile",
 "Vapori irritanti",
 "Lavorare lontano da fiamme"
 ],
 "categoria": "Solvente",
 "parametri": {
 "range_percent_min": 70,
 "range_percent_max": 95,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 70,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "solvente resine",
 "lacca",
 "tintura",
 "conservante"
 ],
 "note_forma": "Solvente - evapora lasciando film. Non forma materiali da solo",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": null,
 "stampabile_3D": null,
 "effetto_su_matrice": "Scioglie zeina, gommalacca, resine. Evapora lasciando coating uniforme"
 },
 "durabilita": {
 "durata_stimata": "N/A - solvente (evapora)",
 "fattori_degradazione": [
 "Evapora rapidamente",
 "Infiammabile"
 ],
 "condizioni_conservazione": "Contenitore chiuso, lontano da fiamme",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere zeina o gommalacca in etanolo 70-95%",
 "Mescolare fino a soluzione omogenea",
 "Applicare per casting o coating",
 "Lasciare evaporare in ambiente ventilato"
 ],
 "incompatibilita": [
 "Proteine acquose (precipitano)",
 "Non miscibile con matrici acquose gelificanti"
 ],
 "alternative": "Acqua (per ingredienti idrosolubili), aceto (solvente debole)",
 "acquisto": "Farmacia (alcool etilico 90-96°), supermercato (alcool alimentare)"
 },
 "fibre_canapa": {
 "nome": "Fibre di Canapa",
 "famiglia": "CARICA",
 "ruolo": "Rinforzo, carica fibrosa",
 "descrizione": "Fibre naturali dalla pianta di canapa (Cannabis sativa). Eccellente rapporto resistenza/peso, biodegradabili. Usate in compositi e come rinforzo strutturale.",
 "proprieta": {
 "resistenza_tensile": "550-900 MPa",
 "modulo_elastico": "70 GPa",
 "densita": "1.48 g/cm³",
 "biodegradabilita": "Alta",
 "struttura": "Rinforzo fibroso forte",
 "trasparenza": "Riduce (opaco)",
 "flessibilita": "Media",
 "barriera_O2": "Scarsa",
 "barriera_H2O": "Scarsa (idrofila)",
 "colore": "Beige-dorato"
 },
 "dosaggio_tipico": {
 "min": "10%",
 "max": "40%",
 "unita": "% peso su matrice"
 },
 "fonti_comuni": [
 "Fibre di canapa grezze",
 "Stoppa di canapa",
 "Tessuto di canapa"
 ],
 "note_uso": "Tagliare a lunghezza desiderata. Pre-bagnare per migliore adesione con matrice.",
 "warnings": [
 "Assorbono umidità",
 "Orientare le fibre per massima resistenza"
 ],
 "categoria": "Carica fibrosa",
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 30,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "pannello",
 "tessuto tecnico",
 "isolante"
 ],
 "note_forma": "Carica fibrosa di rinforzo - non forma materiali da sola",
 "termosaldabile": false,
 "incollabile_con": [
 "resine bio",
 "resine epossidiche",
 "PLA",
 "PP"
 ],
 "cucibile": true,
 "colorabile": true,
 "note_colore": "Tingibile con tannini o coloranti naturali",
 "reversibile": false,
 "stampabile_3D": "Sì, come filler in filamenti compositi (es. PLA+canapa)",
 "effetto_su_matrice": "Rinforzo eccellente, alta resistenza a trazione, bassa densità"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica",
 "fattori_degradazione": [
 "Umidità prolungata",
 "UV (ingiallisce)"
 ],
 "condizioni_conservazione": "Asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Tagliare alla lunghezza desiderata",
 "Ammollo in acqua alcalina opzionale (migliora adesione)",
 "Disperdere nella miscela o posizionare a mano"
 ],
 "incompatibilita": [
 "Nessuna significativa"
 ],
 "alternative": "Fibre di lino, juta, cotone, sisal",
 "acquisto": "Negozi cordami, online, coltivazioni canapa. Anche stoppa di canapa"
 },
 "sale": {
 "nome": "Sale da Cucina (NaCl)",
 "famiglia": "ADDITIVO",
 "ruolo": "Conduttore ionico, conservante",
 "descrizione": "Cloruro di sodio. In biomateriali usato per creare gel conduttivi (agar+sale) o come conservante. Aumenta la conducibilità elettrica dei gel.",
 "proprieta": {
 "conducibilita": "Aumenta conducibilità ionica",
 "solubilita": "36g/100ml acqua a 20°C",
 "effetto_gel": "Può indebolire alcuni gel",
 "struttura": "Cristalli (fino, grosso, fiocchi)",
 "trasparenza": null,
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null,
 "colore": "Bianco"
 },
 "dosaggio_tipico": {
 "min": "1%",
 "max": "10%",
 "unita": "% peso su acqua"
 },
 "fonti_comuni": [
 "Sale fino da cucina",
 "Sale marino"
 ],
 "note_uso": "Per gel conduttivi: 5-10%. Sciogliere completamente prima di aggiungere gelificante.",
 "warnings": [
 "Eccesso indebolisce struttura gel",
 "Attira umidità"
 ],
 "categoria": "Conservante / regolatore ionico",
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 5,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Non forma materiali - è additivo/conservante",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": true,
 "stampabile_3D": null,
 "effetto_su_matrice": "Conservante, modifica forza ionica. Può competere con Ca²⁺ nella gelificazione"
 },
 "durabilita": {
 "durata_stimata": "N/A - conservante",
 "fattori_degradazione": [
 "Molto igroscopico"
 ],
 "condizioni_conservazione": "Contenitore ermetico, asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere in acqua prima dell'uso",
 "Aggiungere alla miscela nella fase acquosa"
 ],
 "incompatibilita": [
 "Può competere con gelificazione ionica (alginato+CaCl₂)",
 "Eccesso altera texture gel proteici"
 ],
 "alternative": "Nessuna diretta per conservazione",
 "acquisto": "Supermercato - sale fino non iodato preferibile per biomateriali"
 },
 "fibre_juta": {
 "nome": "Fibre di Juta",
 "famiglia": "CARICA",
 "ruolo": "Rinforzo, carica fibrosa",
 "descrizione": "Fibre naturali dalla pianta di juta. Economiche, biodegradabili, buona resistenza. Molto usate in compositi e come tessuto di rinforzo.",
 "proprieta": {
 "resistenza_tensile": "393-773 MPa",
 "modulo_elastico": "26 GPa",
 "densita": "1.3 g/cm³",
 "biodegradabilita": "Alta",
 "struttura": "Rinforzo fibroso",
 "trasparenza": "Riduce (opaco)",
 "flessibilita": "Media (fibra), dipende dal composito",
 "barriera_O2": "Scarsa",
 "barriera_H2O": "Scarsa (idrofila, assorbe umidità)",
 "colore": "Marrone-dorato"
 },
 "dosaggio_tipico": {
 "min": "10%",
 "max": "40%",
 "unita": "% peso su matrice"
 },
 "fonti_comuni": [
 "Tessuto di juta (tela)",
 "Spago di juta",
 "Fibre sfuse"
 ],
 "note_uso": "Il tessuto di juta è ideale per laminati. Pre-bagnare per migliore adesione.",
 "warnings": [
 "Assorbe molta acqua",
 "Può marcire se resta umida"
 ],
 "categoria": "Carica fibrosa",
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 30,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "pannello",
 "tessuto rinforzato"
 ],
 "note_forma": "Carica fibrosa di rinforzo - non forma materiali da sola",
 "termosaldabile": false,
 "incollabile_con": [
 "resine",
 "colle naturali",
 "amido cotto"
 ],
 "cucibile": true,
 "colorabile": true,
 "note_colore": "Tingibile, colore naturale caldo",
 "reversibile": false,
 "stampabile_3D": "Possibile con fibre corte in pasta",
 "effetto_su_matrice": "Rinforzo meccanico, texture rustica, buona adesione"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica",
 "fattori_degradazione": [
 "Umidità (marcisce)",
 "UV"
 ],
 "condizioni_conservazione": "Asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Tagliare/sfilacciare alla lunghezza desiderata",
 "Disperdere nella miscela o posizionare a strati"
 ],
 "incompatibilita": [
 "Nessuna significativa"
 ],
 "alternative": "Fibre di canapa, lino, cotone",
 "acquisto": "Tela di juta da vivaio/agraria, sacchi di caffè riciclati"
 },
 "bucce_agrumi": {
 "nome": "Bucce di Agrumi",
 "famiglia": "CARICA",
 "ruolo": "Carica, fonte di pectina",
 "descrizione": "Bucce essiccate e macinate di arancia, limone, pompelmo. Ricche di pectina naturale e oli essenziali. Usate come carica aromatica o fonte di pectina.",
 "proprieta": {
 "contenuto_pectina": "20-30%",
 "profumo": "Agrumato naturale",
 "colore": "Giallo-arancio",
 "struttura": "Carica particolata con pectina",
 "trasparenza": "Riduce",
 "flessibilita": "Riduce leggermente",
 "barriera_O2": null,
 "barriera_H2O": "Scarsa"
 },
 "dosaggio_tipico": {
 "min": "5%",
 "max": "30%",
 "unita": "% peso su matrice"
 },
 "fonti_comuni": [
 "Bucce arancia essiccate",
 "Bucce limone",
 "Scorze agrumi bio"
 ],
 "note_uso": "Essiccare completamente, macinare fine. Gli oli possono plastificare leggermente.",
 "warnings": [
 "Essiccare bene per evitare muffe",
 "Gli oli possono interferire con alcuni gel"
 ],
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 30,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "composito",
 "foglio"
 ],
 "note_forma": "Carica con pectina naturale - può contribuire a gelificazione",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "note_colore": "Conferisce colore naturale arancio/giallo",
 "reversibile": false,
 "stampabile_3D": "Possibile tritata fine",
 "effetto_su_matrice": "Colore, profumo agrumato, pectina naturale (20-30%), texture"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica",
 "fattori_degradazione": [
 "Umidità (muffe)",
 "Oli essenziali residui evaporano"
 ],
 "condizioni_conservazione": "Essiccare completamente, conservare asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Essiccare completamente (forno 60-80°C o essiccatore)",
 "Macinare finemente (mixer/mortaio)",
 "Setacciare per granulometria uniforme",
 "Aggiungere alla miscela (5-30%)"
 ],
 "incompatibilita": [
 "Oli essenziali possono inibire SCOBY/micelio",
 "Acidità naturale: attenzione con gel pH-sensibili"
 ],
 "alternative": "Pectina pura (più controllabile), fondi di caffè",
 "acquisto": "Scarto domestico - gratis. Essiccare prima dell'uso"
 },
 "cenere_legno": {
 "nome": "Cenere di Legno",
 "famiglia": "CARICA",
 "ruolo": "Carica minerite, fonte di potassio",
 "descrizione": "Cenere da combustione di legno non trattato. Contiene potassio, calcio, magnesio. Usata come carica minerale o per modificare pH (basico). In eccesso rende il materiale alcalino e friabile.",
 "proprieta": {
 "ph": "10-12 (molto basico)",
 "composizione": "K2O, CaO, Mite, silicati",
 "colore": "Grigio",
 "struttura": "Carica minerale alcalina",
 "trasparenza": "Riduce (opaco)",
 "flessibilita": null,
 "barriera_O2": null,
 "barriera_H2O": null
 },
 "dosaggio_tipico": {
 "min": "5%",
 "max": "30%",
 "unita": "% peso su matrice"
 },
 "fonti_comuni": [
 "Cenere di camino",
 "Cenere di stufa a legna"
 ],
 "note_uso": "Setacciare per rimuovere parti non combuste. Il pH basico può interferire con alcuni gel.",
 "warnings": [
 "Molto basica, irritante",
 "Usare guanti",
 "Non usare cenere di legno trattato"
 ],
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 15,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "carica compositi",
 "liscivia",
 "mordente tinture"
 ],
 "note_forma": "Carica minerale - non forma materiali da sola. Alza pH",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "note_colore": "Schiarisce la miscela (grigio chiaro)",
 "reversibile": false,
 "stampabile_3D": null,
 "effetto_su_matrice": "Alcalinizza (pH 10-12), apporta calcio e potassio, antibatterica"
 },
 "durabilita": {
 "durata_stimata": "N/A - carica",
 "fattori_degradazione": [
 "Molto igroscopica",
 "Dilavamento in acqua"
 ],
 "condizioni_conservazione": "Ermetico, asciutto",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Setacciare per rimuovere carboni e detriti",
 "Aggiungere alla miscela in piccole dosi",
 "Attenzione: alza molto il pH"
 ],
 "incompatibilita": [
 "Gel acido-dipendenti (pectina HM)",
 "Fermentazioni (pH troppo alto)",
 "Alginato (eccesso calcio)"
 ],
 "alternative": "Bicarbonato di sodio (pH più controllabile), caolino (carica neutra)",
 "acquisto": "Scarto domestico (camino, stufa, barbecue) - gratis. SOLO legno naturale, no pellet con collanti"
 },
 "olio_oliva": {
 "nome": "Olio di Oliva",
 "famiglia": "RESINA_LIPIDE",
 "ruolo": "Plastificante, distaccante, idrofobizzante",
 "descrizione": "Olio vegetale da olive. Usato come plastificante naturale, agente distaccante per stampi, o per aumentare idrofobicità superficiale.",
 "proprieta": {
 "punto_fumo": "190-210°C",
 "viscosita": "Media",
 "essiccazione": "Non siccativo (non polimerizza)",
 "struttura": "Liquido oleoso",
 "trasparenza": "Giallo-verde",
 "flessibilita": "Aumenta leggermente",
 "barriera_O2": null,
 "barriera_H2O": "Migliora leggermente (lipide)",
 "colore": "Giallo-verdognolo"
 },
 "dosaggio_tipico": {
 "min": "1%",
 "max": "10%",
 "unita": "% peso"
 },
 "fonti_comuni": [
 "Olio extravergine",
 "Olio di oliva raffinato"
 ],
 "note_uso": "Non essicca come olio di lino. Usare per plastificazione temporanea o distacco stampi.",
 "warnings": [
 "Non polimerizza",
 "Può irrancidire",
 "Può rendere superficie unta"
 ],
 "categoria": "Plastificante / coating lipidico",
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 10,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": [
 "plastificante",
 "distaccante",
 "sapone"
 ],
 "note_forma": "Additivo lipidico - non forma materiali da solo (non siccativo)",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": null,
 "reversibile": true,
 "stampabile_3D": null,
 "effetto_su_matrice": "Plastificante blando, leggera barriera idrofoba. NON polimerizza (non siccativo)"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "fattori_degradazione": [
 "Irrancidisce (ossidazione)",
 "Luce e calore accelerano degradazione"
 ],
 "condizioni_conservazione": "Al buio, fresco",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Aggiungere alla miscela durante preparazione",
 "Emulsionare con lecitina se necessario (non miscibile in acqua)",
 "Per coating: applicare a pennello sulla superficie"
 ],
 "incompatibilita": [
 "Non miscibile in acqua senza emulsionante",
 "Non siccativo: resta unto se in eccesso"
 ],
 "alternative": "Olio di lino (siccativo, polimerizza), cera carnauba (solida)",
 "acquisto": "Supermercato - qualsiasi olio d'oliva"
 },
 "kcl": {
 "nome": "Cloruro di Potassio (KCl)",
 "famiglia": "SALE_RETICOLANTE",
 "categoria": "Sale gelificante",
 "fonte": "Farmacia (sostituto sale), fornitori chimici",
 "reperibilita": "media",
 "vegano": true,
 "food_safe": true,
 "funzione": "Gelificante specifico per carragenina kappa",
 "descrizione": "Sale di potassio che induce gelificazione della carragenina kappa formando gel elastici e termoreversibili. Gli ioni K+ interagiscono con le catene di carragenina. NON funziona con alginato (usa CaCl2).",
 "proprieta": {
 "struttura": null,
 "trasparenza": "Non influenza",
 "flessibilita": null,
 "barriera_H2O": null
 },
 "parametri": {
 "range_percent_min": 0.5,
 "range_percent_max": 3,
 "temp_dissoluzione_min": 20,
 "temp_dissoluzione_max": 100
 },
 "lavorabilita": {
 "forma_tipica": null,
 "note_forma": "Additivo - non forma materiali da solo",
 "effetto_su_matrice": "Induce gelificazione carragenina kappa"
 },
 "durabilita": {
 "durata_stimata": "N/A - additivo",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Sciogliere KCl in acqua (0.5-2% del peso carragenina)",
 "Aggiungere alla soluzione di carragenina dopo dissoluzione",
 "Il gel si forma raffreddando sotto 40-50C"
 ],
 "incompatibilita": ["alginato (usa CaCl2)", "agar (non serve)"],
 "alternative": "Per carragenina: solo sali di potassio",
 "acquisto": "Farmacia (NoSalt), Amazon, fornitori chimici"
 },
 "pula_riso": {
 "nome": "Pula di Riso",
 "famiglia": "CARICA",
 "categoria": "Carica fibrosa vegetale",
 "fonte": "Sottoprodotto lavorazione riso",
 "reperibilita": "media",
 "vegano": true,
 "food_safe": true,
 "funzione": "Carica fibrosa leggera per compositi",
 "descrizione": "Sottoprodotto della brillatura del riso, costituito da pericarpo e strato aleuronico. Ricca di silice (10-20%), fibre e antiossidanti. Carica leggera che conferisce texture rustica e opacità. Biodegradabile.",
 "proprieta": {
 "struttura": "Rinforzo fibroso",
 "trasparenza": "Opaco",
 "flessibilita": "Riduce",
 "barriera_H2O": "Migliora leggermente"
 },
 "parametri": {
 "range_percent_min": 10,
 "range_percent_max": 50
 },
 "lavorabilita": {
 "forma_tipica": ["composito", "pannello"],
 "note_forma": "Carica per compositi rigidi",
 "effetto_su_matrice": "Riduce densita, aumenta rigidita"
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni se asciutto",
 "fattori_degradazione": ["Umidita", "Muffe"],
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Dosaggio: 10-40% sul peso secco della matrice",
            "Setacciare per granulometria uniforme",
            "Premiscelare con polveri secche prima di idratare",
            "Aumentare leggermente il liquido (assorbe acqua)"
        ],
 "incompatibilita": [
            "Matrici che richiedono trasparenza",
            "Applicazioni alimentari a lungo termine (può irrancidire)"
        ],
 "alternative": "Crusca di grano, farina di bambù, segatura fine",
 "acquisto": "Riserie, mangimifici, cooperative agricole"
 },
 "aquafaba": {
 "nome": "Aquafaba",
 "famiglia": "ADDITIVO",
 "categoria": "Agente schiumogeno",
 "fonte": "Acqua di cottura ceci/legumi",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": true,
 "funzione": "Agente schiumogeno naturale",
 "descrizione": "Liquido di cottura dei legumi (ceci), ricco di saponine e proteine. Sostituto vegano dell'albume: monta a neve, emulsiona, lega. Da ceci in scatola o cottura casalinga. Conservare in frigo max 1 settimana.",
 "proprieta": {
 "struttura": "Schiuma",
 "trasparenza": "Traslucido",
 "flessibilita": "Alta",
 "barriera_H2O": "Scarsa"
 },
 "parametri": {
 "range_percent_min": 20,
 "range_percent_max": 80
 },
 "lavorabilita": {
 "forma_tipica": ["schiuma"],
 "note_forma": "Si monta come albume",
 "colorabile": true,
 "effetto_su_matrice": "Introduce aria, alleggerisce"
 },
 "durabilita": {
 "durata_stimata": "Giorni fresco, settimane essiccato",
 "fattori_degradazione": ["Umidita", "Collasso schiuma"],
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
            "Usare liquido da ceci in scatola (già concentrato)",
            "Per montare: fredda, pulita, senza grassi",
            "Rapporto: 3 cucchiai = 1 albume",
            "Stabilizzare schiuma con cremor tartaro"
        ],
 "incompatibilita": [
            "Grassi (impediscono la montata)",
            "Tuorlo d'uovo (contiene grassi)",
            "Conservazione lunga a T ambiente"
        ],
 "alternative": "Albume d'uovo (non vegano), proteine soia isolate",
 "acquisto": "Scarto cucina, lattine ceci"
 ,
      "note_IED": ["⚠ CRITICO: NON è proteina pura → contiene proteine + saponine + polisaccaridi. Classificazione ADDITIVO è corretta [ALISEA]","Preparazione: 400g ceci idratati 24h (rapporto 1:4 acqua), bollire 1h30, refrigerare 24h per concentrare [ALISEA]"]
    },
 "gesso": {
 "nome": "Gesso (Solfato di Calcio)",
 "famiglia": "CARICA",
 "categoria": "Carica minerale",
 "fonte": "Ferramenta, belle arti",
 "reperibilita": "facile",
 "vegano": true,
 "food_safe": false,
 "funzione": "Carica minerale rigidificante",
 "descrizione": "Solfato di calcio (CaSO4). Il diidrato è inerte, l'emiidrato (gesso di Parigi) fa presa con acqua. Carica minerale bianca, opacizzante, economica. Aumenta rigidità e opacità. pH neutro, atossico.",
 "proprieta": {
 "struttura": "Rigido",
 "trasparenza": "Opaco bianco",
 "flessibilita": "Riduce molto",
 "barriera_H2O": "Riduce"
 },
 "parametri": {
 "range_percent_min": 5,
 "range_percent_max": 40,
 "tempo_presa": "15-30 minuti"
 },
 "lavorabilita": {
 "forma_tipica": ["rigido", "scultura"],
 "note_forma": "Indurisce con acqua. Lavorare velocemente.",
 "colorabile": true,
 "metodo_colorazione": "Pigmenti in polvere nell'impasto",
 "effetto_su_matrice": "Irrigidisce molto, opacizza"
 },
 "durabilita": {
 "durata_stimata": "Anni se asciutto",
 "fattori_degradazione": ["Acqua", "Urti"],
 "biodegradabile": true,
 "compostabile": false
 },
 "processo": [
            "Dosaggio: 5-30% come carica inerte (diidrato)",
            "L'emiidrato fa presa in 15-30 min con acqua",
            "Mescolare velocemente se si usa emiidrato",
            "Il diidrato non reagisce, solo riempitivo"
        ],
 "incompatibilita": [
            "Matrici acide forti (può solubilizzarsi)",
            "Emiidrato se serve tempo lavorazione lungo"
        ],
 "alternative": "Carbonato di calcio, caolino, talco come cariche bianche",
 "acquisto": "Ferramenta, Brico, belle arti"
 },
 "te_nero_forte": {
 "nome": "Tè nero forte (reticolante)",
 "famiglia": "SALE_RETICOLANTE",
 "ruolo_coltura": "medium",
 "fonte": "Camellia sinensis - supermercato",
 "vegano": true,
 "food_safe": true,
 "biodegradabile": true,
 "funzione_primaria": "Reticolante blando naturale per proteine (tannini polifenolici)",
 "forma_output": ["film", "gel"],
 "note_uso": "Infuso molto concentrato: 15-20g/L, infusione 15-20 min. Doppio ruolo: reticolante con proteine, medium per SCOBY.",
 "reperibilita": "Facilissima - supermercato",
 "costo_indicativo": "Molto basso",
 "descrizione": "Infuso molto concentrato di Camellia sinensis usato come reticolante blando naturale. I polifenoli del tè (tannini) formano legami idrogeno bidentati/tridentati con gruppi -OH, -NH2, -COOH delle proteine, creando una reticolazione simile (ma più debole) all'acido tannico puro. Doppio ruolo: con SCOBY funge da medium di crescita, con proteine (gelatina, caseina) da reticolante naturale ed economico. Concentrazione ottimale: ~3% w/w per gelatina, pH 9. Efficacia: circa 60-70% rispetto all'acido tannico puro.",
 "categoria": "Reticolante blando naturale",
 "proprieta": {
 "struttura": "Reticolante blando",
 "trasparenza": "Colora ambra-marrone",
 "flessibilita": "Riduce leggermente (reticolazione)",
 "barriera_O2": "Leggero miglioramento",
 "barriera_H2O": "Migliora (reticolazione aumenta coesione)",
 "colore": "Ambra-marrone scuro"
 },
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 5,
 "temp_dissoluzione_min": 80,
 "temp_dissoluzione_max": 100,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": 4,
 "pH_max": 10
 },
 "lavorabilita": {
 "forma_tipica": ["film", "gel", "composito"],
 "note_forma": "Aggiungere infuso concentrato alla soluzione proteica prima del versamento",
 "termosaldabile": null,
 "incollabile_con": null,
 "cucibile": null,
 "colorabile": false,
 "note_colore": "Colora di per sé ambra-marrone",
 "reversibile": false,
 "stampabile_3D": null,
 "effetto_su_matrice": "Reticola proteine: aumenta rigidità, riduce solubilità acqua, aggiunge attività antiossidante e antimicrobica. Colora ambra."
 },
 "durabilita": {
 "durata_stimata": "Migliora durata matrice proteica",
 "fattori_degradazione": ["UV (degrada polifenoli)"],
 "condizioni_conservazione": "Infuso fresco: usare entro 24h. Foglie secche: ermetico al buio",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Preparare infuso molto concentrato: 15-20g tè / litro",
 "Infondere 15-20 minuti (più lungo = più tannini)",
 "Filtrare bene per rimuovere residui",
 "Aggiungere alla soluzione proteica tiepida (40-50°C)",
 "Per SCOBY: usare come medium di crescita standard"
 ],
 "incompatibilita": [
 "Tè Earl Grey (bergamotto tossico per SCOBY)",
 "Tè con oli essenziali aggiunti",
 "Matrici molto acide (tannini precipitano sotto pH 3)"
 ],
 "alternative": "Acido tannico (più efficace ma più costoso), borace (tossico)",
 "acquisto": "Supermercato - preferire tè nero sfuso senza aromi aggiunti. Tè economico va benissimo.",
 "fonte_scientifica": "Cao & He 2007, Food Hydrocolloids; RSC Advances 2022 (tannic acid crosslinking review)"
 },
 "canapa_hurd": {
 "nome": "Canapa (Hemp Hurd / Canapulo)",
 "famiglia": "CARICA",
 "ruolo_coltura": "substrato",
 "fonte": "Scarti lavorazione canapa industriale",
 "vegano": true,
 "food_safe": false,
 "biodegradabile": true,
 "funzione_primaria": "Substrato per crescita micelio, carica per compositi",
 "forma_output": ["composito", "pannello"],
 "note_uso": "Il canapulo è la parte legnosa interna dello stelo di canapa. Substrato standard per mycocompositi (Ecovative/Grow.bio). Diverso dalle fibre di canapa (che sono la corteccia).",
 "reperibilita": "Media - agrarie, fornitori canapa industriale, online",
 "costo_indicativo": "Basso",
 "descrizione": "Parte legnosa interna dello stelo di Cannabis sativa (diversa dalle fibre di corteccia). Materiale leggero, poroso, assorbente. Substrato ideale per crescita micelio: la porosità favorisce colonizzazione, la lignina fornisce nutrimento. Sterilizzare a 121°C per 1.5-2.5h prima dell'inoculo. Usato da Ecovative/Grow.bio come substrato standard per mycocompositi commerciali. Come carica in biocompositi conferisce leggerezza e isolamento termico.",
 "categoria": "Substrato micelio / carica",
 "proprieta": {
 "struttura": "Particolata porosa",
 "trasparenza": "Opaco",
 "flessibilita": "Riduce (irrigidisce)",
 "barriera_O2": "Neutra",
 "barriera_H2O": "Scarsa (assorbente)",
 "colore": "Giallo-beige chiaro"
 },
 "parametri": {
 "range_percent_min": 20,
 "range_percent_max": 80,
 "temp_dissoluzione_min": null,
 "temp_dissoluzione_max": null,
 "temp_gelificazione": null,
 "temp_fusione_gel": null,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": ["composito", "pannello", "packaging"],
 "note_forma": "Substrato per micelio → mycocomposito. Oppure carica per biocompositi tradizionali.",
 "termosaldabile": false,
 "incollabile_con": ["micelio (colonizzazione)","amido cotto","caseina"],
 "cucibile": false,
 "colorabile": false,
 "reversibile": false,
 "stampabile_3D": false,
 "note_stampabilita": "Non direttamente, ma mycocompositi possono essere stampati in stampo",
 "effetto_su_matrice": "Leggerezza, isolamento termico, struttura porosa"
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni nel composito",
 "fattori_degradazione": ["Umidità", "Muffe (se non colonizzato)", "Insetti"],
 "condizioni_conservazione": "Essiccare bene. Sterilizzare prima dell'uso con micelio.",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Tagliare/triturare in pezzi 1-3cm",
 "Idratare al 60-70% umidità",
 "Sterilizzare: autoclave 121°C per 1.5-2.5h, o pastorizzare 71°C per 2h",
 "Per micelio: inoculare, incubare 7-14 giorni al buio (20-24°C)",
 "Per composito tradizionale: mescolare con matrice (amido, caseina)"
 ],
 "incompatibilita": [
 "Contaminazione fungina (se non sterilizzato)",
 "Umidità eccessiva (marcisce)"
 ],
 "alternative": "Segatura, paglia, fondi caffè come substrati micelio. Fibre canapa per rinforzo fibroso.",
 "acquisto": "Fornitori canapa industriale, online (es. Grow.bio). In Italia: agrarie, cooperative canapa.",
 "fonte_scientifica": "Ecovative Design (Grow.bio); Out-Grow substrate guides"
 },
 "acido_stearico": {
 "nome": "Acido Stearico",
 "famiglia": "RESINA_LIPIDE",
 "ruolo_coltura": "post_crescita_coating",
 "fonte": "Farmacia, fornitori chimici, online",
 "vegano": true,
 "food_safe": true,
 "biodegradabile": true,
 "funzione_primaria": "Coating idrorepellente per biomateriali e cellulosa batterica",
 "forma_output": ["coating"],
 "note_uso": "Acido grasso saturo (C18:0). Fuso a ~70°C, applicare a pennello o immersione su materiale essiccato. Crea film idrorepellente: angolo contatto da 38° a 125°.",
 "reperibilita": "Media - farmacia, fornitori chimici, Amazon",
 "costo_indicativo": "Basso-medio",
 "descrizione": "Acido grasso saturo a catena lunga (C18H36O2, p.f. 69°C). Forma coating idrorepellente sottile (~17µm) su biomateriali. Particolarmente efficace su cellulosa batterica (SCOBY): l'angolo di contatto passa da 38° a 125°, rendendo il materiale impermeabile. Applicare fuso a pennello o per immersione. Sicuro, food-safe, biodegradabile. Alternativa vegetale alla cera d'api per coating idrorepellenti.",
 "categoria": "Coating idrorepellente",
 "proprieta": {
 "struttura": "Coating ceroso",
 "trasparenza": "Leggermente traslucido (film sottile)",
 "flessibilita": "Neutra (film sottile)",
 "barriera_O2": "Buona",
 "barriera_H2O": "Eccellente (angolo contatto 125°)",
 "colore": "Bianco-trasparente"
 },
 "parametri": {
 "range_percent_min": 1,
 "range_percent_max": 10,
 "temp_dissoluzione_min": 69,
 "temp_dissoluzione_max": 75,
 "temp_gelificazione": 50,
 "temp_fusione_gel": 69,
 "pH_min": null,
 "pH_max": null
 },
 "lavorabilita": {
 "forma_tipica": ["coating"],
 "note_forma": "Applicare fuso a pennello su superficie essiccata. Strati sottili multipli.",
 "termosaldabile": true,
 "temp_saldatura_min": 70,
 "temp_saldatura_max": 80,
 "incollabile_con": ["calore"],
 "cucibile": null,
 "colorabile": false,
 "reversibile": true,
 "note_reversibilita": "Si può rifondere e riapplicare",
 "stampabile_3D": false,
 "effetto_su_matrice": "Impermeabilizza superficie. Non penetra nella matrice, resta in superficie."
 },
 "durabilita": {
 "durata_stimata": "Mesi-anni se non esposto a calore",
 "fattori_degradazione": ["Calore >70°C (fonde)", "Abrasione meccanica"],
 "condizioni_conservazione": "Temperatura ambiente, lontano da fonti di calore",
 "biodegradabile": true,
 "compostabile": true
 },
 "processo": [
 "Fondere acido stearico a 70-75°C (bagnomaria)",
 "Applicare a pennello su materiale completamente essiccato",
 "Strati sottili: meglio 2-3 strati sottili che 1 spesso",
 "Lasciare solidificare (pochi minuti a T ambiente)",
 "Per immersione: immergere brevemente, scolare, asciugare"
 ],
 "incompatibilita": [
 "Materiali umidi (non aderisce)",
 "Temperature >70°C in uso (fonde)"
 ],
 "alternative": "Cera d'api (simile ma non vegana), cera carnauba (p.f. più alto), gommalacca",
 "acquisto": "Farmacia, Amazon, fornitori chimici. Anche come 'stearina per candele'.",
 "fonte_scientifica": "MDPI Int. J. Mol. Sci. 2024, 25(24), 13746 — stearic acid coating on bacterial cellulose"
 },
 "sansa_oliva": {
   "nome": "Sansa di oliva (SOP)",
   "famiglia": "CARICA",
   "fonte": "",
   "vegano": true,
   "food_safe": false,
   "biodegradabile": true,
   "funzione_primaria": "",
   "forma_output": [],
   "note_uso": "",
   "reperibilita": "Media",
   "costo_indicativo": "Medio",
   "descrizione": "",
   "categoria": "",
   "proprieta": {
     "struttura": "Vedi descrizione",
     "trasparenza": "Vedi descrizione",
     "flessibilita": "Vedi descrizione",
     "barriera_O2": "Neutra",
     "barriera_H2O": "Neutra"
   },
   "parametri": {
     "range_percent_min": 1,
     "range_percent_max": 20,
     "temp_dissoluzione_min": null,
     "temp_dissoluzione_max": null,
     "temp_gelificazione": null,
     "temp_fusione_gel": null,
     "pH_min": null,
     "pH_max": null
   },
   "lavorabilita": {
     "forma_tipica": [],
     "termosaldabile": false,
     "incollabile_con": [],
     "cucibile": false,
     "colorabile": true,
     "reversibile": false,
     "stampabile_3D": false
   },
   "durabilita": {
     "durata_stimata": "mesi",
     "fattori_degradazione": [
       "umidità"
     ],
     "biodegradabile": true,
     "compostabile": true
   }
 },
 "sughero": {
   "nome": "Sughero macinato",
   "famiglia": "CARICA",
   "fonte": "",
   "vegano": true,
   "food_safe": false,
   "biodegradabile": true,
   "funzione_primaria": "",
   "forma_output": [],
   "note_uso": "",
   "reperibilita": "Media",
   "costo_indicativo": "Medio",
   "descrizione": "",
   "categoria": "",
   "proprieta": {
     "struttura": "Vedi descrizione",
     "trasparenza": "Vedi descrizione",
     "flessibilita": "Vedi descrizione",
     "barriera_O2": "Neutra",
     "barriera_H2O": "Neutra"
   },
   "parametri": {
     "range_percent_min": 1,
     "range_percent_max": 20,
     "temp_dissoluzione_min": null,
     "temp_dissoluzione_max": null,
     "temp_gelificazione": null,
     "temp_fusione_gel": null,
     "pH_min": null,
     "pH_max": null
   },
   "lavorabilita": {
     "forma_tipica": [],
     "termosaldabile": false,
     "incollabile_con": [],
     "cucibile": false,
     "colorabile": true,
     "reversibile": false,
     "stampabile_3D": false
   },
   "durabilita": {
     "durata_stimata": "mesi",
     "fattori_degradazione": [
       "umidità"
     ],
     "biodegradabile": true,
     "compostabile": true
   }
 },
 "gomma_arabica": {
   "nome": "Gomma arabica",
   "famiglia": "POLISACCARIDE_NEUTRO",
   "fonte": "",
   "vegano": true,
   "food_safe": false,
   "biodegradabile": true,
   "funzione_primaria": "",
   "forma_output": [],
   "note_uso": "",
   "reperibilita": "Media",
   "costo_indicativo": "Medio",
   "descrizione": "",
   "categoria": "",
   "proprieta": {
     "struttura": "Vedi descrizione",
     "trasparenza": "Vedi descrizione",
     "flessibilita": "Vedi descrizione",
     "barriera_O2": "Neutra",
     "barriera_H2O": "Neutra"
   },
   "parametri": {
     "range_percent_min": 1,
     "range_percent_max": 20,
     "temp_dissoluzione_min": null,
     "temp_dissoluzione_max": null,
     "temp_gelificazione": null,
     "temp_fusione_gel": null,
     "pH_min": null,
     "pH_max": null
   },
   "lavorabilita": {
     "forma_tipica": [],
     "termosaldabile": false,
     "incollabile_con": [],
     "cucibile": false,
     "colorabile": true,
     "reversibile": false,
     "stampabile_3D": false
   },
   "durabilita": {
     "durata_stimata": "mesi",
     "fattori_degradazione": [
       "umidità"
     ],
     "biodegradabile": true,
     "compostabile": true
   }
 },
 "farina_riso": {
   "nome": "Farina di riso glutinoso",
   "famiglia": "POLISACCARIDE_NEUTRO",
   "fonte": "",
   "vegano": true,
   "food_safe": false,
   "biodegradabile": true,
   "funzione_primaria": "",
   "forma_output": [],
   "note_uso": "",
   "reperibilita": "Media",
   "costo_indicativo": "Medio",
   "descrizione": "",
   "categoria": "",
   "proprieta": {
     "struttura": "Vedi descrizione",
     "trasparenza": "Vedi descrizione",
     "flessibilita": "Vedi descrizione",
     "barriera_O2": "Neutra",
     "barriera_H2O": "Neutra"
   },
   "parametri": {
     "range_percent_min": 1,
     "range_percent_max": 20,
     "temp_dissoluzione_min": null,
     "temp_dissoluzione_max": null,
     "temp_gelificazione": null,
     "temp_fusione_gel": null,
     "pH_min": null,
     "pH_max": null
   },
   "lavorabilita": {
     "forma_tipica": [],
     "termosaldabile": false,
     "incollabile_con": [],
     "cucibile": false,
     "colorabile": true,
     "reversibile": false,
     "stampabile_3D": false
   },
   "durabilita": {
     "durata_stimata": "mesi",
     "fattori_degradazione": [
       "umidità"
     ],
     "biodegradabile": true,
     "compostabile": true
   }
 },
 "cremor_tartaro": {
   "nome": "Cremor tartaro",
   "famiglia": "ADDITIVO",
   "fonte": "",
   "vegano": true,
   "food_safe": false,
   "biodegradabile": true,
   "funzione_primaria": "",
   "forma_output": [],
   "note_uso": "",
   "reperibilita": "Media",
   "costo_indicativo": "Medio",
   "descrizione": "",
   "categoria": "",
   "proprieta": {
     "struttura": "Vedi descrizione",
     "trasparenza": "Vedi descrizione",
     "flessibilita": "Vedi descrizione",
     "barriera_O2": "Neutra",
     "barriera_H2O": "Neutra"
   },
   "parametri": {
     "range_percent_min": 1,
     "range_percent_max": 20,
     "temp_dissoluzione_min": null,
     "temp_dissoluzione_max": null,
     "temp_gelificazione": null,
     "temp_fusione_gel": null,
     "pH_min": null,
     "pH_max": null
   },
   "lavorabilita": {
     "forma_tipica": [],
     "termosaldabile": false,
     "incollabile_con": [],
     "cucibile": false,
     "colorabile": true,
     "reversibile": false,
     "stampabile_3D": false
   },
   "durabilita": {
     "durata_stimata": "mesi",
     "fattori_degradazione": [
       "umidità"
     ],
     "biodegradabile": true,
     "compostabile": true
   }
 },
 "miele": {
   "nome": "Miele",
   "famiglia": "ADDITIVO",
   "fonte": "",
   "vegano": true,
   "food_safe": false,
   "biodegradabile": true,
   "funzione_primaria": "",
   "forma_output": [],
   "note_uso": "",
   "reperibilita": "Media",
   "costo_indicativo": "Medio",
   "descrizione": "",
   "categoria": "",
   "proprieta": {
     "struttura": "Vedi descrizione",
     "trasparenza": "Vedi descrizione",
     "flessibilita": "Vedi descrizione",
     "barriera_O2": "Neutra",
     "barriera_H2O": "Neutra"
   },
   "parametri": {
     "range_percent_min": 1,
     "range_percent_max": 20,
     "temp_dissoluzione_min": null,
     "temp_dissoluzione_max": null,
     "temp_gelificazione": null,
     "temp_fusione_gel": null,
     "pH_min": null,
     "pH_max": null
   },
   "lavorabilita": {
     "forma_tipica": [],
     "termosaldabile": false,
     "incollabile_con": [],
     "cucibile": false,
     "colorabile": true,
     "reversibile": false,
     "stampabile_3D": false
   },
   "durabilita": {
     "durata_stimata": "mesi",
     "fattori_degradazione": [
       "umidità"
     ],
     "biodegradabile": true,
     "compostabile": true
   }
 },
 "talco": {
   "nome": "Talco",
   "famiglia": "CARICA",
   "fonte": "",
   "vegano": true,
   "food_safe": false,
   "biodegradabile": true,
   "funzione_primaria": "",
   "forma_output": [],
   "note_uso": "",
   "reperibilita": "Media",
   "costo_indicativo": "Medio",
   "descrizione": "",
   "categoria": "",
   "proprieta": {
     "struttura": "Vedi descrizione",
     "trasparenza": "Vedi descrizione",
     "flessibilita": "Vedi descrizione",
     "barriera_O2": "Neutra",
     "barriera_H2O": "Neutra"
   },
   "parametri": {
     "range_percent_min": 1,
     "range_percent_max": 20,
     "temp_dissoluzione_min": null,
     "temp_dissoluzione_max": null,
     "temp_gelificazione": null,
     "temp_fusione_gel": null,
     "pH_min": null,
     "pH_max": null
   },
   "lavorabilita": {
     "forma_tipica": [],
     "termosaldabile": false,
     "incollabile_con": [],
     "cucibile": false,
     "colorabile": true,
     "reversibile": false,
     "stampabile_3D": false
   },
   "durabilita": {
     "durata_stimata": "mesi",
     "fattori_degradazione": [
       "umidità"
     ],
     "biodegradabile": true,
     "compostabile": true
   }
 },
 "cannella": {
   "nome": "Cannella (polvere)",
   "famiglia": "COLORANTE",
   "fonte": "",
   "vegano": true,
   "food_safe": false,
   "biodegradabile": true,
   "funzione_primaria": "",
   "forma_output": [],
   "note_uso": "",
   "reperibilita": "Media",
   "costo_indicativo": "Medio",
   "descrizione": "",
   "categoria": "",
   "proprieta": {
     "struttura": "Vedi descrizione",
     "trasparenza": "Vedi descrizione",
     "flessibilita": "Vedi descrizione",
     "barriera_O2": "Neutra",
     "barriera_H2O": "Neutra"
   },
   "parametri": {
     "range_percent_min": 1,
     "range_percent_max": 20,
     "temp_dissoluzione_min": null,
     "temp_dissoluzione_max": null,
     "temp_gelificazione": null,
     "temp_fusione_gel": null,
     "pH_min": null,
     "pH_max": null
   },
   "lavorabilita": {
     "forma_tipica": [],
     "termosaldabile": false,
     "incollabile_con": [],
     "cucibile": false,
     "colorabile": true,
     "reversibile": false,
     "stampabile_3D": false
   },
   "durabilita": {
     "durata_stimata": "mesi",
     "fattori_degradazione": [
       "umidità"
     ],
     "biodegradabile": true,
     "compostabile": true
   }
 },
 "zafferano": {
   "nome": "Zafferano",
   "famiglia": "COLORANTE",
   "fonte": "",
   "vegano": true,
   "food_safe": false,
   "biodegradabile": true,
   "funzione_primaria": "",
   "forma_output": [],
   "note_uso": "",
   "reperibilita": "Media",
   "costo_indicativo": "Medio",
   "descrizione": "",
   "categoria": "",
   "proprieta": {
     "struttura": "Vedi descrizione",
     "trasparenza": "Vedi descrizione",
     "flessibilita": "Vedi descrizione",
     "barriera_O2": "Neutra",
     "barriera_H2O": "Neutra"
   },
   "parametri": {
     "range_percent_min": 1,
     "range_percent_max": 20,
     "temp_dissoluzione_min": null,
     "temp_dissoluzione_max": null,
     "temp_gelificazione": null,
     "temp_fusione_gel": null,
     "pH_min": null,
     "pH_max": null
   },
   "lavorabilita": {
     "forma_tipica": [],
     "termosaldabile": false,
     "incollabile_con": [],
     "cucibile": false,
     "colorabile": true,
     "reversibile": false,
     "stampabile_3D": false
   },
   "durabilita": {
     "durata_stimata": "mesi",
     "fattori_degradazione": [
       "umidità"
     ],
     "biodegradabile": true,
     "compostabile": true
   }
 },
 "ammoniaca_dolci": {
   "nome": "Ammoniaca per dolci",
   "famiglia": "ADDITIVO",
   "fonte": "",
   "vegano": true,
   "food_safe": false,
   "biodegradabile": true,
   "funzione_primaria": "",
   "forma_output": [],
   "note_uso": "",
   "reperibilita": "Media",
   "costo_indicativo": "Medio",
   "descrizione": "",
   "categoria": "",
   "proprieta": {
     "struttura": "Vedi descrizione",
     "trasparenza": "Vedi descrizione",
     "flessibilita": "Vedi descrizione",
     "barriera_O2": "Neutra",
     "barriera_H2O": "Neutra"
   },
   "parametri": {
     "range_percent_min": 1,
     "range_percent_max": 20,
     "temp_dissoluzione_min": null,
     "temp_dissoluzione_max": null,
     "temp_gelificazione": null,
     "temp_fusione_gel": null,
     "pH_min": null,
     "pH_max": null
   },
   "lavorabilita": {
     "forma_tipica": [],
     "termosaldabile": false,
     "incollabile_con": [],
     "cucibile": false,
     "colorabile": true,
     "reversibile": false,
     "stampabile_3D": false
   },
   "durabilita": {
     "durata_stimata": "mesi",
     "fattori_degradazione": [
       "umidità"
     ],
     "biodegradabile": true,
     "compostabile": true
   }
 }
,
    "sansa_oliva": {
          "nome": "Sansa di Oliva (SOP)",
          "famiglia": "CARICA",
          "categoria": "Scarto agroindustriale",
          "fonti": "OLIBRIX, SPROVIERO",
          "reperibilita": "facile (frantoi locali)",
          "vegano": true,
          "food_safe": false,
          "funzione": "Carica rinforzante lignocellulosica da scarto frantoio",
          "descrizione": "Residuo solido della spremitura delle olive, composto da nocciolino frantumato (30%), polpa residua e bucce. Contiene fibre lignocellulosiche, polifenoli residui e 5-10% olio. Usato come carica in compositi con densità ~0.4 g/cm³. Conferisce proprietà isolanti termiche e colore bruno-verdastro. Richiede essiccazione preventiva per ridurre umidità dal 25-30% iniziale.",
          "proprieta": {
                "struttura": "Fibrosa granulare",
                "trasparenza": "Opaca",
                "flessibilita": "Rigida come carica",
                "barriera_O2": "Moderata",
                "barriera_H2O": "Bassa"
          },
          "parametri": {
                "range_percent_min": 10,
                "range_percent_max": 40,
                "temp_dissoluzione_min": null,
                "temp_dissoluzione_max": null,
                "temp_gelificazione": null,
                "temp_fusione_gel": null,
                "pH_min": 4,
                "pH_max": 7
          },
          "lavorabilita": {
                "forma_tipica": [
                      "composito",
                      "pannello"
                ],
                "termosaldabile": false,
                "incollabile_con": [],
                "cucibile": false,
                "colorabile": false,
                "reversibile": false,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "mesi-anni",
                "fattori_degradazione": [
                      "umidità",
                      "muffe"
                ],
                "biodegradabile": true,
                "compostabile": true
          },
          "processo": [
 "Essiccare bene la sansa (60-80\u00b0C in forno) per eliminare l'umidit\u00e0 residua ed evitare muffe",
 "Macinare se necessario per ottenere granulometria uniforme; setacciare per rimuovere noccioli grossi",
 "Dosaggio: 10-30% sul peso secco della matrice, a seconda della rigidit\u00e0 desiderata",
 "Contiene tannini residui: pu\u00f2 avere un leggero effetto reticolante su proteine e scurire il colore",
 "Compatibile con la maggior parte delle matrici; conferisce colore marrone-oliva e texture granulosa"
 ],
          "acquisto": "Frantoi locali (gratis o costo minimo), aziende biomassa."
    },
    "sughero": {
          "nome": "Sughero (granulato/polvere)",
          "famiglia": "CARICA",
          "categoria": "Materiale naturale",
          "fonti": "Industria tappi, Portogallo/Sardegna",
          "reperibilita": "facile",
          "vegano": true,
          "food_safe": true,
          "funzione": "Carica leggera, isolante termico e acustico",
          "descrizione": "Corteccia della quercia da sughero (Quercus suber), disponibile in granuli o polvere. Leggerissimo (densità 0.12-0.24 g/cm³), impermeabile, elastico, isolante termico e acustico. Chimicamente inerte, resistente a muffe e insetti grazie alla suberina. Usato in compositi come carica leggera, in pannelli isolanti, e come alternativa al polistirolo.",
          "proprieta": {
                "struttura": "Cellulare alveolare",
                "trasparenza": "Opaco",
                "flessibilita": "Elastico comprimibile",
                "barriera_O2": "Buona",
                "barriera_H2O": "Eccellente (suberina)"
          },
          "parametri": {
                "range_percent_min": 10,
                "range_percent_max": 50,
                "temp_dissoluzione_min": null,
                "temp_dissoluzione_max": null,
                "temp_gelificazione": null,
                "temp_fusione_gel": null,
                "pH_min": null,
                "pH_max": null
          },
          "lavorabilita": {
                "forma_tipica": [
                      "composito",
                      "pannello",
                      "riempimento"
                ],
                "termosaldabile": false,
                "incollabile_con": [
                      "resine naturali",
                      "colla vinilica"
                ],
                "cucibile": false,
                "colorabile": false,
                "reversibile": false,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "anni",
                "fattori_degradazione": [
                      "fuoco"
                ],
                "biodegradabile": true,
                "compostabile": true
          },
          "acquisto": "Negozi bricolage, fornitori enologici, Amazon."
    },
    "gomma_arabica": {
          "nome": "Gomma Arabica",
          "famiglia": "POLISACCARIDE_NEUTRO",
          "categoria": "Essudato vegetale",
          "fonti": "Acacia senegal/seyal",
          "reperibilita": "facile",
          "vegano": true,
          "food_safe": true,
          "funzione": "Legante, addensante, emulsionante naturale, agente filmogeno",
          "descrizione": "Essudato naturale dell'acacia, polisaccaride ramificato (arabinogalattano) con piccola componente proteica. Solubile in acqua fino al 50%, forma soluzioni di viscosità relativamente bassa. Eccellente emulsionante e stabilizzante. In biomateriali: legante per pigmenti (tempera), agente filmogeno, coadiuvante di gelificazione. Non gelifica da sola ma migliora la coesione delle matrici.",
          "proprieta": {
                "struttura": "Amorfa, filmogena",
                "trasparenza": "Traslucida",
                "flessibilita": "Film fragile da sola",
                "barriera_O2": "Moderata",
                "barriera_H2O": "Bassa (idrofila)"
          },
          "parametri": {
                "range_percent_min": 5,
                "range_percent_max": 40,
                "temp_dissoluzione_min": 20,
                "temp_dissoluzione_max": 50,
                "temp_gelificazione": null,
                "temp_fusione_gel": null,
                "pH_min": 3,
                "pH_max": 7
          },
          "lavorabilita": {
                "forma_tipica": [
                      "film",
                      "coating",
                      "legante"
                ],
                "termosaldabile": false,
                "incollabile_con": [
                      "acqua"
                ],
                "cucibile": false,
                "colorabile": true,
                "metodo_colorazione": "Miscela diretta",
                "reversibile": true,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "mesi",
                "fattori_degradazione": [
                      "umidità",
                      "muffe"
                ],
                "biodegradabile": true,
                "compostabile": true
          },
          "processo": [
 "Sciogliere in acqua a temperatura ambiente o tiepida (non serve calore), mescolando fino a completa dissoluzione",
 "La viscosità aumenta con la concentrazione: al 20-30% forma soluzioni dense, al 40-50% diventa pasta",
 "Funziona come legante, emulsionante e stabilizzante — utile per tenere insieme fasi acquose e oleose",
 "I film essiccati sono solubili in acqua: ottimi per applicazioni temporanee o effimere",
 "Compatibile con quasi tutti gli ingredienti; usata tradizionalmente come legante per pigmenti e doratura"
 ],
          "acquisto": "Negozi pasticceria, Amazon, fornitori alimentari (E414)."
    },
    "farina_riso": {
          "nome": "Farina di Riso",
          "famiglia": "POLISACCARIDE_NEUTRO",
          "categoria": "Amido naturale",
          "fonti": "Riso (Oryza sativa)",
          "reperibilita": "facilissima",
          "vegano": true,
          "food_safe": true,
          "funzione": "Matrice amidacea alternativa, carica fine, agente opacizzante",
          "descrizione": "Farina ottenuta dalla macinazione del riso, composta principalmente da amido (80%) con basso contenuto proteico. Granuli di amido molto piccoli (2-8 µm) rispetto al mais (15-20 µm), il che conferisce texture più fine e liscia. Gelatinizza a 65-80°C. Film più fragili dell'amido di mais ma più lisci e omogenei. Usata come alternativa senza glutine e come carica fine in compositi.",
          "proprieta": {
                "struttura": "Granulare fine",
                "trasparenza": "Traslucida (gelatinizzata)",
                "flessibilita": "Fragile senza plastificante",
                "barriera_O2": "Moderata",
                "barriera_H2O": "Bassa"
          },
          "parametri": {
                "range_percent_min": 5,
                "range_percent_max": 25,
                "temp_dissoluzione_min": 65,
                "temp_dissoluzione_max": 80,
                "temp_gelificazione": 65,
                "temp_fusione_gel": null,
                "pH_min": 5,
                "pH_max": 8
          },
          "lavorabilita": {
                "forma_tipica": [
                      "film",
                      "massa",
                      "composito"
                ],
                "termosaldabile": false,
                "incollabile_con": [
                      "acqua calda"
                ],
                "cucibile": false,
                "colorabile": true,
                "metodo_colorazione": "Miscela diretta",
                "reversibile": false,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "settimane-mesi",
                "fattori_degradazione": [
                      "umidità",
                      "muffe",
                      "insetti"
                ],
                "biodegradabile": true,
                "compostabile": true
          },
          "processo": [
 "Disperdere la farina in acqua fredda mescolando (rapporto 1:5-8 farina:acqua)",
 "Scaldare a 65-8000b0C mescolando costantemente fino a gelatinizzazione (la miscela diventa densa e traslucida)",
 "A differenza dell'amido puro, contiene proteine che rendono il film più opaco ma anche più resistente",
 "Aggiungere glicerina 15-25% come plastificante per evitare crepe nel film essiccato",
 "Alternativa economica e facilmente reperibile all'amido di mais o patata"
 ],
          "acquisto": "Supermercato, negozi alimentari biologici."
    },
    "cremor_tartaro": {
          "nome": "Cremor Tartaro (Bitartrato di Potassio)",
          "famiglia": "ADDITIVO",
          "categoria": "Sale acido organico",
          "fonti": "Sottoprodotto vinificazione",
          "reperibilita": "facile",
          "vegano": true,
          "food_safe": true,
          "funzione": "Agente acido, stabilizzante schiume, regolatore pH",
          "descrizione": "Sale acido del potassio dell'acido tartarico (KC₄H₅O₆). Sottoprodotto della vinificazione. In biomateriali: abbassa il pH (utile per chitosano), stabilizza schiume proteiche (albumina), reagisce con bicarbonato per generare CO₂ (schiume chimiche). Meno aggressivo dell'acido citrico, rilascio acido graduale.",
          "proprieta": {
                "struttura": "Cristallino fine",
                "trasparenza": "Bianco opaco",
                "flessibilita": "N/A (additivo)",
                "barriera_O2": "N/A",
                "barriera_H2O": "N/A"
          },
          "parametri": {
                "range_percent_min": 0.5,
                "range_percent_max": 5,
                "temp_dissoluzione_min": 20,
                "temp_dissoluzione_max": 100,
                "temp_gelificazione": null,
                "temp_fusione_gel": null,
                "pH_min": null,
                "pH_max": null
          },
          "lavorabilita": {
                "forma_tipica": [
                      "additivo"
                ],
                "termosaldabile": false,
                "incollabile_con": [],
                "cucibile": false,
                "colorabile": false,
                "reversibile": false,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "anni (polvere)",
                "fattori_degradazione": [
                      "umidità"
                ],
                "biodegradabile": true,
                "compostabile": true
          },
          "processo": [
 "Aggiungere alla miscela secca o sciogliere in poca acqua prima di unire",
 "Con bicarbonato (rapporto 1:1 circa) genera CO2082: utile per creare schiume e strutture porose",
 "La reazione avviene a temperatura ambiente ma accelera con il calore",
 "Dosaggio tipico per espansione: 2-5% cremor tartaro + 2-5% bicarbonato sul peso della miscela",
 "Acidifica leggermente la miscela (utile per attivare chitosano o stabilizzare colori)"
 ],
          "acquisto": "Supermercato (reparto dolci), farmacia, Amazon."
    },
    "miele": {
          "nome": "Miele",
          "famiglia": "ADDITIVO",
          "categoria": "Prodotto naturale",
          "fonti": "Api (Apis mellifera)",
          "reperibilita": "facilissima",
          "vegano": false,
          "food_safe": true,
          "funzione": "Umettante, plastificante blando, antimicrobico, legante",
          "descrizione": "Soluzione supersatura di zuccheri (fruttosio 38%, glucosio 31%) con enzimi, aminoacidi, vitamine e composti antimicrobici (perossido di idrogeno, metilgliossale). Igroscopico: trattiene umidità nei film (effetto plastificante blando). Proprietà antimicrobiche documentate. In biomateriali: umettante per film proteici, alternativa parziale alla glicerina, conferisce colore ambrato e odore gradevole.",
          "proprieta": {
                "struttura": "Liquido viscoso",
                "trasparenza": "Traslucido ambrato",
                "flessibilita": "Plastificante blando",
                "barriera_O2": "N/A",
                "barriera_H2O": "Igroscopico"
          },
          "parametri": {
                "range_percent_min": 5,
                "range_percent_max": 20,
                "temp_dissoluzione_min": 20,
                "temp_dissoluzione_max": 40,
                "temp_gelificazione": null,
                "temp_fusione_gel": null,
                "pH_min": 3.5,
                "pH_max": 5.5
          },
          "lavorabilita": {
                "forma_tipica": [
                      "additivo",
                      "plastificante"
                ],
                "termosaldabile": false,
                "incollabile_con": [],
                "cucibile": false,
                "colorabile": false,
                "reversibile": false,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "mesi",
                "fattori_degradazione": [
                      "umidità ambientale (appiccicosità)"
                ],
                "biodegradabile": true,
                "compostabile": true
          },
          "processo": [
 "Aggiungere alla miscela a temperatura ambiente o tiepida (il calore eccessivo degrada enzimi e proprietà antimicrobiche)",
 "Dosaggio come plastificante: 10-25% sul peso della matrice, simile alla glicerina ma con effetto antimicrobico",
 "Fortemente igroscopico: il materiale finale attira umidità dall'aria e può risultare appiccicoso in ambienti umidi",
 "Conferisce colore ambrato e profumo naturale; si scurisce con il calore",
 "Alternativa naturale alla glicerina con proprietà aggiuntive, ma meno controllabile in dosaggio"
 ],
          "acquisto": "Supermercato, apicoltori locali."
    },
    "talco": {
          "nome": "Talco (Silicato di Magnesio)",
          "famiglia": "CARICA",
          "categoria": "Minerale inerte",
          "fonti": "Minerale naturale",
          "reperibilita": "facile",
          "vegano": true,
          "food_safe": false,
          "funzione": "Carica minerale fine, anti-aderente, opacizzante",
          "descrizione": "Silicato di magnesio idrato (Mg₃Si₄O₁₀(OH)₂), minerale più morbido (durezza 1 Mohs). Particelle lamellari che scivolano facilmente. In biomateriali: carica fine che migliora la lavorabilità degli impasti, riduce l'appiccicosità superficiale, conferisce opacità e finitura setosa. Usato anche come agente distaccante per stampi.",
          "proprieta": {
                "struttura": "Lamellare fine",
                "trasparenza": "Opaco bianco",
                "flessibilita": "Neutro come carica",
                "barriera_O2": "Moderata (lamelle)",
                "barriera_H2O": "Moderata"
          },
          "parametri": {
                "range_percent_min": 2,
                "range_percent_max": 20,
                "temp_dissoluzione_min": null,
                "temp_dissoluzione_max": null,
                "temp_gelificazione": null,
                "temp_fusione_gel": null,
                "pH_min": null,
                "pH_max": null
          },
          "lavorabilita": {
                "forma_tipica": [
                      "composito",
                      "carica",
                      "distaccante"
                ],
                "termosaldabile": false,
                "incollabile_con": [],
                "cucibile": false,
                "colorabile": false,
                "reversibile": false,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "anni",
                "fattori_degradazione": [],
                "biodegradabile": false,
                "compostabile": false
          },
          "processo": [
 "Aggiungere la polvere alla miscela secca e mescolare bene per distribuzione omogenea",
 "Dosaggio: 5-20% sul peso secco; aumenta opacit00e0, rigidit00e0 e migliora la finitura superficiale",
 "Le particelle lamellari (piatte) creano una barriera ai gas e migliorano l'effetto barriera del film",
 "Minerale pi00f9 morbido che esista (durezza 1 Mohs): funge da lubrificante e antiaderente",
 "Food-safe nella versione farmaceutica; verificare la purezza per uso a contatto con alimenti"
 ],
          "acquisto": "Farmacia, colorificio, Amazon."
    },
    "cannella": {
          "nome": "Cannella (polvere)",
          "famiglia": "COLORANTE",
          "categoria": "Spezia/Colorante naturale",
          "fonti": "Cinnamomum verum/cassia",
          "reperibilita": "facilissima",
          "vegano": true,
          "food_safe": true,
          "funzione": "Colorante bruno, antimicrobico, profumante",
          "descrizione": "Spezia ricca di cinnamaldeide (65-80%) con proprietà antimicrobiche e antifungine documentate. Conferisce colore bruno caldo e odore caratteristico. In biomateriali: colorante naturale per film e gel, agente antimicrobico attivo (packaging attivo), profumante. La cinnamaldeide ha attività contro E. coli, S. aureus e muffe comuni.",
          "proprieta": {
                "struttura": "Polvere fine fibrosa",
                "trasparenza": "Opacizzante",
                "flessibilita": "N/A (colorante)",
                "barriera_O2": "N/A",
                "barriera_H2O": "N/A"
          },
          "parametri": {
                "range_percent_min": 0.5,
                "range_percent_max": 5,
                "temp_dissoluzione_min": null,
                "temp_dissoluzione_max": null,
                "temp_gelificazione": null,
                "temp_fusione_gel": null,
                "pH_min": null,
                "pH_max": null
          },
          "lavorabilita": {
                "forma_tipica": [
                      "colorante",
                      "antimicrobico"
                ],
                "termosaldabile": false,
                "incollabile_con": [],
                "cucibile": false,
                "colorabile": false,
                "reversibile": false,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "mesi",
                "fattori_degradazione": [
                      "luce (sbiadisce)",
                      "volatilità aroma"
                ],
                "biodegradabile": true,
                "compostabile": true
          },
          "processo": [
 "Aggiungere la polvere alla miscela e mescolare per distribuzione omogenea",
 "Dosaggio colorante: 1-5% per colore marrone caldo; dosaggio antimicrobico: 3-8%",
 "Contiene cinnamaldeide con proprietà antimicrobiche documentate: rallenta crescita muffe e batteri",
 "Doppio ruolo: colorante naturale + conservante funzionale in un unico ingrediente",
 "Il profumo persiste nel materiale finale; pu00f2 interferire con altri aromi se usata in eccesso"
 ],
          "acquisto": "Supermercato, negozi spezie."
    },
    "zafferano": {
          "nome": "Zafferano",
          "famiglia": "COLORANTE",
          "categoria": "Spezia/Colorante pregiato",
          "fonti": "Crocus sativus",
          "reperibilita": "facile (costoso)",
          "vegano": true,
          "food_safe": true,
          "funzione": "Colorante giallo-arancio intenso, indicatore pH",
          "descrizione": "Spezia più costosa al mondo, contiene crocina (colore giallo-arancio), picrocrocina (sapore) e safranale (aroma). Potere colorante eccezionale: bastano tracce per colorare intensamente. In biomateriali: colorante naturale premium per piccole produzioni. La crocina è idrosolubile, viraggio cromatico con pH (giallo in acido, arancio in neutro). Usato anche come indicatore pH naturale in film smart.",
          "proprieta": {
                "struttura": "Stimmi essiccati/polvere",
                "trasparenza": "Colora senza opacizzare (idrosolubile)",
                "flessibilita": "N/A (colorante)",
                "barriera_O2": "N/A",
                "barriera_H2O": "N/A"
          },
          "parametri": {
                "range_percent_min": 0.01,
                "range_percent_max": 0.5,
                "temp_dissoluzione_min": 20,
                "temp_dissoluzione_max": 60,
                "temp_gelificazione": null,
                "temp_fusione_gel": null,
                "pH_min": null,
                "pH_max": null
          },
          "lavorabilita": {
                "forma_tipica": [
                      "colorante"
                ],
                "termosaldabile": false,
                "incollabile_con": [],
                "cucibile": false,
                "colorabile": false,
                "reversibile": false,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "mesi",
                "fattori_degradazione": [
                      "luce (fotosensibile)"
                ],
                "biodegradabile": true,
                "compostabile": true
          },
          "processo": [
 "Sciogliere stimmi o polvere in poca acqua calda (50-6000b0C, NON bollente) per estrarre la crocina (pigmento giallo)",
 "Lasciare in infusione 15-30 minuti per massima estrazione del colore prima di aggiungere alla miscela",
 "Dosaggio: pochissimo basta (0.1-0.5%) — è il colorante naturale più potente e più costoso",
 "Colore giallo oro brillante, idrosolubile; vira verso arancione in ambiente acido",
 "ATTENZIONE al costo: valutare curcuma come alternativa molto pi00f9 economica per il giallo"
 ],
          "acquisto": "Supermercato, produttori locali (Sardegna, Abruzzo, Toscana)."
    },
    "alcool_isopropilico": {
          "nome": "Alcool Isopropilico (Isopropanolo)",
          "famiglia": "ADDITIVO",
          "categoria": "Solvente organico",
          "fonti": "Sintesi chimica",
          "reperibilita": "facile",
          "vegano": true,
          "food_safe": false,
          "funzione": "Solvente per resine e coating, sgrassante, asciugatura rapida",
          "descrizione": "Alcool secondario (CH₃CHOHCH₃), solvente versatile che evapora rapidamente senza residui. Meno tossico del metanolo. In biomateriali: solvente per gommalacca e resine naturali, sgrassante per superfici prima del coating, accelerante di essiccazione. Miscibile con acqua ed etanolo. Punto ebollizione 82°C.",
          "proprieta": {
                "struttura": "Liquido volatile",
                "trasparenza": "Trasparente",
                "flessibilita": "N/A (solvente)",
                "barriera_O2": "N/A",
                "barriera_H2O": "N/A"
          },
          "parametri": {
                "range_percent_min": 10,
                "range_percent_max": 90,
                "temp_dissoluzione_min": null,
                "temp_dissoluzione_max": null,
                "temp_gelificazione": null,
                "temp_fusione_gel": null,
                "pH_min": null,
                "pH_max": null
          },
          "lavorabilita": {
                "forma_tipica": [
                      "solvente"
                ],
                "termosaldabile": false,
                "incollabile_con": [],
                "cucibile": false,
                "colorabile": false,
                "reversibile": false,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "Evapora",
                "fattori_degradazione": [],
                "biodegradabile": true,
                "compostabile": false
          },
          "processo": [
 "Usare SEMPRE in ambiente ben ventilato e lontano da fiamme libere (punto di infiammabilit00e0 1200b0C)",
 "Indossare guanti: sgrassante potente, secca e irrita la pelle con esposizione prolungata",
 "Come solvente per gommalacca: sciogliere fiocchi al 20-30% in alcool isopropilico (alternativa all'etanolo)",
 "Come sgrassante: pulire superfici prima di applicare coating per migliorare l'adesione",
 "Evapora rapidamente senza lasciare residui; conservare il contenitore ben chiuso"
 ],
          "incompatibilita": "Infiammabile. Non usare vicino a fonti di calore.",
          "acquisto": "Farmacia, ferramenta, Amazon."
    },
    "ammoniaca_dolci": {
          "nome": "Ammoniaca per Dolci (Bicarbonato d'Ammonio)",
          "famiglia": "ADDITIVO",
          "categoria": "Agente lievitante",
          "fonti": "Sintesi chimica (NH₄HCO₃)",
          "reperibilita": "facile",
          "vegano": true,
          "food_safe": true,
          "funzione": "Agente espandente, genera CO₂ + NH₃ + H₂O a caldo",
          "descrizione": "Bicarbonato d'ammonio (NH₄HCO₃), si decompone completamente a 58°C in CO₂, ammoniaca e acqua. In biomateriali: agente espandente per schiume e materiali porosi. Vantaggio rispetto al bicarbonato di sodio: decomposizione completa senza residui solidi (il bicarbonato di sodio lascia Na₂CO₃). L'ammoniaca gassosa evapora completamente durante l'essiccazione.",
          "proprieta": {
                "struttura": "Cristallino (decompone a 58°C)",
                "trasparenza": "N/A (espandente)",
                "flessibilita": "N/A",
                "barriera_O2": "N/A",
                "barriera_H2O": "N/A"
          },
          "parametri": {
                "range_percent_min": 1,
                "range_percent_max": 8,
                "temp_dissoluzione_min": 20,
                "temp_dissoluzione_max": 58,
                "temp_gelificazione": null,
                "temp_fusione_gel": null,
                "pH_min": null,
                "pH_max": null
          },
          "lavorabilita": {
                "forma_tipica": [
                      "espandente",
                      "schiuma"
                ],
                "termosaldabile": false,
                "incollabile_con": [],
                "cucibile": false,
                "colorabile": false,
                "reversibile": false,
                "stampabile_3D": false
          },
          "durabilita": {
                "durata_stimata": "mesi (in polvere, sigillato)",
                "fattori_degradazione": [
                      "umidità",
                      "calore (decompone)"
                ],
                "biodegradabile": true,
                "compostabile": true
          },
          "processo": [
 "Aggiungere alla miscela FREDDA e mescolare: la decomposizione inizia sopra 5800b0C",
 "Scaldando, si decompone in CO2082 (espande) + NH2083 (evapora) + H2082O: non lascia residui nel materiale",
 "Ideale per schiume: crea porosit00e0 uniforme durante la cottura/essiccazione",
 "VENTILARE BENE durante il riscaldamento: l'odore di ammoniaca è forte e irritante",
 "Dosaggio: 2-5% sul peso della miscela; pi00f9 ne metti, pi00f9 la struttura sar00e0 porosa e leggera"
 ],
          "acquisto": "Supermercato (reparto dolci), farmacia."
    }
 },
 "regole_famiglia": {
 "PROTEINA+PROTEINA": {
 "codice": "[giallo]",
 "livello": "possibile",
 "testo_breve": "Blend possibile",
 "descrizione": "Le proteine possono essere miscelate, ma hanno temperature e pH diversi.",
 "processo": "Verificare compatibilità di temperatura e pH."
 },
 "PROTEINA+POLISACCARIDE_NEUTRO": {
 "codice": "[emoji]",
 "livello": "compatibile",
 "testo_breve": "Combinazione classica",
 "descrizione": "Proteine e polisaccaridi neutri si combinano bene.",
 "processo": "Preparare separatamente, unire a temperatura media (50-60°C)."
 },
 "PROTEINA+POLISACCARIDE_ANIONICO": {
 "codice": "[giallo]",
 "livello": "dipende",
 "testo_breve": "Dipende dal pH",
 "descrizione": "Interazione elettrostatica possibile a certi pH.",
 "processo": "Controllare pH. A pH acido possibili complessi."
 },
 "PROTEINA+POLICATIONE": {
 "codice": "[giallo]",
 "livello": "dipende",
 "testo_breve": "Dipende dal pH",
 "descrizione": "Chitosano richiede pH acido. Verificare compatibilità.",
 "processo": "Chitosano richiede pH < 6."
 },
 "PROTEINA+PLASTIFICANTE": {
 "codice": "[emoji]",
 "livello": "compatibile",
 "testo_breve": "Standard",
 "descrizione": "Plastificanti funzionano bene con proteine.",
 "processo": "Aggiungere plastificante 15-30%."
 },
 "PROTEINA+SALE_RETICOLANTE": {
 "codice": "☑ ",
 "livello": "attenzione",
 "testo_breve": "Può aggregare",
 "descrizione": "Calcio può aggregare proteine (soprattutto caseina).",
 "processo": "Usare concentrazioni basse se necessario."
 },
 "PROTEINA+RESINA_LIPIDE": {
 "codice": "[giallo]",
 "livello": "possibile",
 "testo_breve": "Solo come coating",
 "descrizione": "Cere non si mescolano. Applicare come strato separato.",
 "processo": "Prima film proteico asciutto, poi cera."
 },
 "POLISACCARIDE_NEUTRO+POLISACCARIDE_NEUTRO": {
 "codice": "[emoji]",
 "livello": "compatibile",
 "testo_breve": "Spesso sinergici",
 "descrizione": "Molti polisaccaridi hanno sinergie positive.",
 "processo": "Verificare temperature di lavorazione."
 },
 "POLISACCARIDE_NEUTRO+POLISACCARIDE_ANIONICO": {
 "codice": "[emoji]",
 "livello": "compatibile",
 "testo_breve": "Generalmente ok",
 "descrizione": "Compatibili nella maggior parte dei casi.",
 "processo": "Attenzione a non aggiungere calcio accidentalmente."
 },
 "POLISACCARIDE_NEUTRO+PLASTIFICANTE": {
 "codice": "[emoji]",
 "livello": "compatibile",
 "testo_breve": "Essenziale",
 "descrizione": "Plastificante necessario per flessibilità.",
 "processo": "Aggiungere 20-40% per polisaccaridi."
 },
 "POLISACCARIDE_ANIONICO+SALE_RETICOLANTE": {
 "codice": "[emoji]",
 "livello": "reazione",
 "testo_breve": "Gelificazione!",
 "descrizione": "Alginato + CaCl2 = gel istantaneo.",
 "processo": "Preparare separatamente, unire per gelificare."
 },
 "POLISACCARIDE_ANIONICO+POLICATIONE": {
 "codice": "[emoji]",
 "livello": "reazione",
 "testo_breve": "Complesso polielettrolita!",
 "descrizione": "Alginato + chitosano formano complessi/membrane.",
 "processo": "Miscelare per membrane, gocciolare per capsule."
 },
 "POLICATIONE+PLASTIFICANTE": {
 "codice": "[emoji]",
 "livello": "compatibile",
 "testo_breve": "Standard",
 "descrizione": "Plastificanti compatibili con chitosano.",
 "processo": "Aggiungere dopo dissoluzione in acido."
 },
 "RESINA_LIPIDE+RESINA_LIPIDE": {
 "codice": "[emoji]",
 "livello": "compatibile",
 "testo_breve": "Miscibili",
 "descrizione": "Cere e resine si mescolano tra loro.",
 "processo": "Fondere insieme, miscelare a caldo."
 },
 "CARICA+qualsiasi": {
 "codice": "[emoji]",
 "livello": "compatibile",
 "testo_breve": "Generalmente ok",
 "descrizione": "Le cariche si disperdono nella maggior parte delle matrici.",
 "processo": "Disperdere bene, evitare grumi."
 },
 "COLORANTE+qualsiasi": {
 "codice": "[emoji]",
 "livello": "compatibile",
 "testo_breve": "Generalmente ok",
 "descrizione": "Coloranti compatibili con la maggior parte delle matrici.",
 "processo": "Alcuni sensibili a pH e calore."
 },
 "ADDITIVO+qualsiasi": {
 "codice": "[emoji]",
 "livello": "compatibile",
 "testo_breve": "Dipende dalla funzione",
 "descrizione": "Verificare funzione specifica dell'additivo.",
 "processo": "Seguire indicazioni specifiche."
 }
 },
 "eccezioni_specifiche": [
 {
 "coppia": [
 "agar",
 "cacl2"
 ],
 "tipo": "ERRORE_COMUNE",
 "descrizione": "CaCl2 NON reticola agar. È per ALGINATO.",
 "risultato": "Agar con bolle, nessuna reticolazione",
 "fonte": "Fabricademy student experiments"
 },
 {
 "coppia": [
 "agar",
 "alginato"
 ],
 "tipo": "ATTENZIONE_PROCESSO",
 "descrizione": "Temperature dissoluzione diverse",
 "soluzione": "Bollire AGAR prima (95°C), abbassare a 60°C, poi aggiungere alginato",
 "fonte": "Fabricademy"
 },
 {
 "coppia": [
 "gelatina",
 "acqua_bollente"
 ],
 "tipo": "ERRORE_COMUNE",
 "descrizione": "Versare gelatina in acqua bollente forma grumi",
 "soluzione": "Sciogliere in acqua FREDDA, poi scaldare gradualmente",
 "fonte": "Multiple maker sources"
 },
 {
 "coppia": [
 "micelio",
 "aceto"
 ],
 "tipo": "INCOMPATIBILITA",
 "descrizione": "Aceto UCCIDE il micelio durante crescita (pH troppo basso)",
 "pH_richiesto": "5-6",
 "quando_sicuro": "MAI durante crescita, solo post-processing se necessario"
 },
 {
 "coppia": [
 "micelio",
 "calore_60C"
 ],
 "tipo": "INCOMPATIBILITA_FASE",
 "descrizione": "Temperature >60°C uccidono il fungo",
 "uso_corretto": "Calore SOLO a fine crescita per stabilizzare/sterilizzare",
 "hot_press": "132°C per 220s DOPO crescita completa aumenta resistenza"
 },
 {
 "coppia": [
 "scoby",
 "aceto"
 ],
 "tipo": "SINERGIA",
 "descrizione": "Aceto è l'ambiente NATURALE dello SCOBY",
 "uso": "Mantenere pH acido previene muffe, pulisce fibre"
 },
 {
 "coppia": [
 "scoby_frullato",
 "guar"
 ],
 "tipo": "SINERGIA_AVANZATA",
 "descrizione": "Nanofibre cellulosa SCOBY si intrecciano con catene Guar",
 "risultato": "Materiale simile a cuoio, alta resistenza trazione"
 },
 {
 "coppia": [
 "scoby_frullato",
 "xantana"
 ],
 "tipo": "SINERGIA_AVANZATA",
 "descrizione": "Combinazione per biomateriali traslucidi e resistenti",
 "risultato": "Film molto chiari con buona resistenza"
 },
 {
 "coppia": [
 "micelio",
 "lignina"
 ],
 "tipo": "SINERGIA_UNICA",
 "descrizione": "Funghi ligninolitici (Pleurotus, Trametes) DIGERISCONO la lignina",
 "risultato": "Blocchi solidi e impermeabili con scarti legnosi"
 },
 {
 "coppia": [
 "micelio",
 "guar"
 ],
 "tipo": "SINERGIA",
 "descrizione": "Guar addensa substrato liquido in fango modellabile",
 "risultato": "Colonizzazione più facile e controllata"
 },
 {
 "coppia": [
 "micelio",
 "scoby"
 ],
 "tipo": "COMPOSITO_IBRIDO",
 "descrizione": "Far crescere micelio in forma, poi rivestire con film SCOBY+Guar",
 "risultato": "Struttura micelio + finitura liscia impermeabile SCOBY"
 },
 {
 "coppia": [
 "acido_citrico",
 "alginato"
 ],
 "tipo": "ATTENZIONE",
 "descrizione": "Acido citrico è chelante - può SCIOGLIERE gel alginato",
 "soluzione": "Evitare contatto, o usare per rimuovere intenzionalmente gel"
 },
 {
 "coppia": [
 "chitosano",
 "gelatina"
 ],
 "tipo": "SINERGIA",
 "descrizione": "10% gelatina + 25% glicerolo rende chitosano termosaldabile",
 "fonte": "Carbohydrate Polymers"
 },
 {
 "coppia": [
 "sorbitolo",
 "glicerolo"
 ],
 "tipo": "SINERGIA",
 "descrizione": "Ratio 3:1 sorbitolo:glicerolo = seal strength ottimale",
 "fonte": "Food Packaging literature"
 },
 {
 "coppia": [
 "caseina",
 "alginato",
 "calcio"
 ],
 "tipo": "SINERGIA_IBRIDA",
 "descrizione": "Matrice interpenetrante proteina-polisaccaride",
 "risultato": "Gel durezza 800→1400g, migliore ritenzione acqua",
 "fonte": "Wang et al. 2023, Food Hydrocolloids"
 },
 {
 "coppia": [
 "zeina",
 "acido_oleico"
 ],
 "tipo": "SINERGIA",
 "descrizione": "Acido oleico plastifica zeina",
 "risultato": "Film flessibile idrofobo, ottima barriera vapore",
 "fonte": "Food Chemistry"
 },
 {
 "coppia": [
 "agar",
 "carbone_vegetale"
 ],
 "tipo": "SINERGIA_CONDUTTIVA",
 "descrizione": "Carbone attivo sferico in matrice agar",
 "risultato": "Elettrodi biodegradabili, riciclabili per rifusione",
 "fonte": "MDPI Polymers 2019"
 },
 {
 "coppia": [
 "tannini",
 "chitosano",
 "guar"
 ],
 "tipo": "SINERGIA_TRIPLA",
 "descrizione": "Tannino crosslinka chitosano+guar insieme",
 "risultato": "64 MPa tensile, UV-resistente, antiossidante",
 "fonte": "ScienceDirect 2024"
 },
 {
 "coppia": [
 "xantana",
 "amido"
 ],
 "tipo": "SINERGIA_PARZIALE",
 "descrizione": "Xantana rallenta retrogradazione",
 "limite": "Solo breve termine (<30 giorni)",
 "fonte": "MDPI Polymers 2022, brevetti Merck"
 },
 {
 "coppia": [
 "pectina",
 "calcio"
 ],
 "tipo": "SINERGIA",
 "descrizione": "Pectina LM + Ca2+ = gel trasparente",
 "risultato": "Alternativa alginato con maggiore trasparenza",
 "fonte": "Carbohydrate Polymers"
 },
 {
 "coppia": [
 "borace",
 "guar"
 ],
 "tipo": "SINERGIA_ISTANTANEA",
 "descrizione": "Gel elastico immediato",
 "risultato": "Slime self-healing, iniettabile",
 "attenzione": "NON food-safe"
 },
 {
 "coppia": [
 "borace",
 "caseina"
 ],
 "tipo": "DENATURAZIONE",
 "descrizione": "Borace srotola micelle caseina",
 "risultato": "Da opaco a traslucido ambrato",
 "attenzione": "NON food-safe"
 },
 {
 "coppia": [
 "zeina",
 "chitosano"
 ],
 "tipo": "SINERGIA_BLEND",
 "descrizione": "Idrofobo + antibatterico",
 "risultato": "Film barriera umidità + antimicrobico"
 },
 {
 "coppia": [
 "amido_mais",
 "amido_patata"
 ],
 "tipo": "BLEND",
 "descrizione": "Mix amidi complementari",
 "risultato": "Mais=rigidità, Patata=trasparenza"
 },
 {
 "coppia": ["te_nero_forte", "gelatina"],
 "tipo": "SINERGIA",
 "descrizione": "Tè nero concentrato reticola gelatina tramite polifenoli (tannini). Efficacia ~60-70% dell'acido tannico puro.",
 "risultato": "Film più rigido, meno solubile in acqua, colorazione ambra. Reticolazione blanda ma sufficiente.",
 "fonte": "Cao & He 2007, Food Hydrocolloids"
 },
 {
 "coppia": ["te_nero_forte", "scoby"],
 "tipo": "SINERGIA_UNICA",
 "descrizione": "Il tè nero è il medium di crescita standard per SCOBY. In questo contesto NON agisce come reticolante ma come nutrimento.",
 "risultato": "Crescita cellulosa batterica. Il ruolo cambia completamente: da reticolante a medium.",
 "fonte": "PMC 2023 (kombucha fermentation)"
 }
 ,
    {"coppia":["sansa_oliva","gelatina"],"tipo":"SINERGIA","descrizione":"I polifenoli della sansa interagiscono con la gelatina creando legami simili alla concia, aumentando resistenza meccanica e all'acqua.","risultato":"Composito più resistente del previsto","fonte":"Analogia con tannini, osservato IED 2025"},
    {"coppia":["gomma_arabica","gelatina"],"tipo":"SINERGIA","descrizione":"Gomma arabica e gelatina formano coacervati complessi per interazione elettrostatica a pH 3.5-4.5, usati per microincapsulamento.","risultato":"Coacervazione: microsparticelle o film densi","fonte":"Letteratura scientifica — coacervazione complessa"},
    {"coppia":["cannella","gelatina"],"tipo":"SINERGIA","descrizione":"La cinnamaldeide della cannella ha effetto reticolante blando sulle proteine (reazione con gruppi amminici), oltre a conferire proprietà antimicrobiche al film.","risultato":"Film antimicrobico con leggero effetto reticolante","fonte":"Food Hydrocolloids, packaging attivo"},
    {"coppia":["cremor_tartaro","bicarbonato"],"tipo":"SINERGIA_UNICA","descrizione":"Reazione acido-base che genera CO₂: usata per creare schiume e materiali espansi. Il cremor tartaro fornisce l'acido, il bicarbonato la base.","risultato":"Generazione controllata di CO₂ per espansione","fonte":"Chimica di base — reazione lievitante"},
    {"coppia":["miele","gelatina"],"tipo":"SINERGIA","descrizione":"Il miele agisce come plastificante blando e umettante nei film di gelatina, con il vantaggio aggiuntivo di proprietà antimicrobiche. Film ambrati e profumati.","risultato":"Film flessibile, antimicrobico, ambrato","fonte":"Journal of Food Science — edible films"},
    {"coppia":["alcool_isopropilico","gelatina"],"tipo":"INCOMPATIBILITA","descrizione":"L'isopropanolo denatura e precipita le proteine. Non usare come solvente per matrici proteiche.","risultato":"Precipitazione della proteina","fonte":"Chimica delle proteine"},
    {"coppia":["alcool_isopropilico","gommalacca"],"tipo":"SINERGIA","descrizione":"L'alcool isopropilico è solvente alternativo all'etanolo per la gommalacca, con evaporazione più rapida. Risultato simile ma asciugatura più veloce.","risultato":"Coating gommalacca ad asciugatura rapida","fonte":"Pratica artigianale — finitura legno"},
    {"coppia":["ammoniaca_dolci","chitosano"],"tipo":"ATTENZIONE","descrizione":"L'ammoniaca rilasciata dal bicarbonato d'ammonio alza il pH, rischiando di far precipitare il chitosano (insolubile sopra pH 6.5).","risultato":"Possibile precipitazione del chitosano","fonte":"Chimica del chitosano — solubilità pH-dipendente"}
  ],
 "regole_compatibilita_famiglie": {
 "_descrizione": "Matrice compatibilità tra le 11 famiglie. Valori: eccellente/buona/neutra/attenzione/incompatibile",
 "PROTEINA": {
 "PROTEINA": {
 "liv": "eccellente",
 "note": "Blend comuni"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "eccellente",
 "note": "Gelatina+agar classico"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "buona",
 "note": "Alginato+gelatina per bioprinting (7.5%+0.75%)"
 },
 "POLICATIONE": {
 "liv": "eccellente",
 "note": "Chitosano+gelatina → termosaldabile"
 },
 "PLASTIFICANTE": {
 "liv": "eccellente",
 "note": "Essenziale per flessibilità"
 },
 "SALE_RETICOLANTE": {
 "liv": "buona",
 "note": "Tannini reticolano caseina, genipin 10000x meno tossico"
 },
 "RESINA_LIPIDE": {
 "liv": "buona",
 "note": "Coating post-processo, cera+olio per waterproofing"
 },
 "COLORANTE": {
 "liv": "eccellente",
 "note": "Aggiungere PRIMA cottura per colore omogeneo"
 },
 "CARICA": {
 "liv": "eccellente",
 "note": "Fibre/polveri come rinforzo meccanico"
 },
 "ADDITIVO": {
 "liv": "eccellente",
 "note": "Aceto per caseina, oli essenziali antimuffa"
 },
 "COLTURA": {
 "liv": "buona",
 "note": "Soy protein aumenta tensile SCOBY"
 }
 },
 "POLISACCARIDE_NEUTRO": {
 "PROTEINA": {
 "liv": "eccellente",
 "note": "Vedi PROTEINA"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "eccellente",
 "note": "Amido+agar comune, Guar+Xantana sinergici"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "attenzione",
 "note": "☑  AGAR+ALGINATO: bollire agar 95°C PRIMA, poi abbassare T e aggiungere alginato"
 },
 "POLICATIONE": {
 "liv": "attenzione",
 "note": "Cariche opposte possono precipitare - testare"
 },
 "PLASTIFICANTE": {
 "liv": "eccellente",
 "note": "Sorbitolo>Glicerolo per seal (3:1)"
 },
 "SALE_RETICOLANTE": {
 "liv": "attenzione",
 "note": "☑  CaCl2 NON funziona con agar (errore comune!)"
 },
 "RESINA_LIPIDE": {
 "liv": "buona",
 "note": "Coating per waterproofing"
 },
 "COLORANTE": {
 "liv": "eccellente",
 "note": "Standard"
 },
 "CARICA": {
 "liv": "eccellente",
 "note": "Rinforzo strutturale"
 },
 "ADDITIVO": {
 "liv": "eccellente",
 "note": "Aceto migliora flessibilità amido"
 },
 "COLTURA": {
 "liv": "eccellente",
 "note": "SCOBY frullato + Guar/Xantana = rinforzo estremo simile cuoio"
 }
 },
 "POLISACCARIDE_ANIONICO": {
 "PROTEINA": {
 "liv": "buona",
 "note": "Vedi PROTEINA"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "attenzione",
 "note": "Vedi POLISACCARIDE_NEUTRO"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "buona",
 "note": "Alginato+carragenina possibile"
 },
 "POLICATIONE": {
 "liv": "eccellente",
 "note": "Interazione elettrostatica → complessi polielettroliti forti"
 },
 "PLASTIFICANTE": {
 "liv": "eccellente",
 "note": "Standard"
 },
 "SALE_RETICOLANTE": {
 "liv": "eccellente",
 "note": "CaCl2 per alginato (0.3-0.5M), K+ per κ-carragenina"
 },
 "RESINA_LIPIDE": {
 "liv": "buona",
 "note": "Olio girasole riduce shrinkage alginato"
 },
 "COLORANTE": {
 "liv": "eccellente",
 "note": "Antocianine per smart packaging pH"
 },
 "CARICA": {
 "liv": "eccellente",
 "note": "Gusci conchiglia+alginato classico (1:0.4)"
 },
 "ADDITIVO": {
 "liv": "attenzione",
 "note": "☑  Acido citrico chelante - può SCIOGLIERE gel alginato"
 },
 "COLTURA": {
 "liv": "limitata",
 "note": "Non interazione diretta significativa"
 }
 },
 "POLICATIONE": {
 "PROTEINA": {
 "liv": "eccellente",
 "note": "Vedi PROTEINA"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "attenzione",
 "note": "Vedi POLISACCARIDE_NEUTRO"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "eccellente",
 "note": "Chitosano+alginato = complessi forti"
 },
 "POLICATIONE": {
 "liv": "buona",
 "note": "Solo chitosano nel database"
 },
 "PLASTIFICANTE": {
 "liv": "eccellente",
 "note": "25% glicerolo consigliato per film stabile"
 },
 "SALE_RETICOLANTE": {
 "liv": "buona",
 "note": "Variabile per reticolante"
 },
 "RESINA_LIPIDE": {
 "liv": "buona",
 "note": "Coating possibile"
 },
 "COLORANTE": {
 "liv": "eccellente",
 "note": "Antocianine → proprietà antiossidanti"
 },
 "CARICA": {
 "liv": "buona",
 "note": "Rinforzo"
 },
 "ADDITIVO": {
 "liv": "eccellente",
 "note": "Acido acetico 1% NECESSARIO per sciogliere chitosano"
 },
 "COLTURA": {
 "liv": "buona",
 "note": "Chitosano come coating antimicrobico"
 }
 },
 "PLASTIFICANTE": {
 "PROTEINA": {
 "liv": "eccellente",
 "note": "Ratio 4:1 polimero:plastificante standard"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "eccellente",
 "note": "Essenziale per tutti"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "eccellente",
 "note": "Standard"
 },
 "POLICATIONE": {
 "liv": "eccellente",
 "note": "25% glicerolo"
 },
 "PLASTIFICANTE": {
 "liv": "eccellente",
 "note": "Sorbitolo+Glicerolo 3:1 = seal ottimale"
 },
 "SALE_RETICOLANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "RESINA_LIPIDE": {
 "liv": "buona",
 "note": "Possono combinarsi"
 },
 "COLORANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "CARICA": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "ADDITIVO": {
 "liv": "eccellente",
 "note": "Standard"
 },
 "COLTURA": {
 "liv": "buona",
 "note": "Olio/glicerolo post-asciugatura SCOBY, PEG per micelio"
 }
 },
 "SALE_RETICOLANTE": {
 "PROTEINA": {
 "liv": "buona",
 "note": "Tannini/genipin per caseina"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "attenzione",
 "note": "☑  CaCl2 NON funziona con agar"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "eccellente",
 "note": "CaCl2 per alginato - reazione istantanea"
 },
 "POLICATIONE": {
 "liv": "buona",
 "note": "Variabile"
 },
 "PLASTIFICANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "SALE_RETICOLANTE": {
 "liv": "attenzione",
 "note": "Non mescolare reticolanti diversi"
 },
 "RESINA_LIPIDE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "COLORANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "CARICA": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "ADDITIVO": {
 "liv": "attenzione",
 "note": "Acido citrico può interferire con CaCl2"
 },
 "COLTURA": {
 "liv": "eccellente",
 "note": "Tannini per SCOBY/micelio, genipin 10x resistenza micelio"
 }
 },
 "RESINA_LIPIDE": {
 "PROTEINA": {
 "liv": "buona",
 "note": "Coating, cera d'api waterproofing"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "buona",
 "note": "Coating"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "buona",
 "note": "Olio riduce shrinkage"
 },
 "POLICATIONE": {
 "liv": "buona",
 "note": "Coating"
 },
 "PLASTIFICANTE": {
 "liv": "buona",
 "note": "Combinabili"
 },
 "SALE_RETICOLANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "RESINA_LIPIDE": {
 "liv": "eccellente",
 "note": "Cera+olio classico"
 },
 "COLORANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "CARICA": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "ADDITIVO": {
 "liv": "neutra",
 "note": "Standard"
 },
 "COLTURA": {
 "liv": "eccellente",
 "note": "ESSENZIALE per SCOBY: olio cocco+cera d'api = waterproofing e flessibilità"
 }
 },
 "COLORANTE": {
 "PROTEINA": {
 "liv": "eccellente",
 "note": "Prima cottura"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "eccellente",
 "note": "Standard"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "eccellente",
 "note": "Antocianine per smart pH"
 },
 "POLICATIONE": {
 "liv": "eccellente",
 "note": "Antiossidante"
 },
 "PLASTIFICANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "SALE_RETICOLANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "RESINA_LIPIDE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "COLORANTE": {
 "liv": "eccellente",
 "note": "Miscele colori"
 },
 "CARICA": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "ADDITIVO": {
 "liv": "neutra",
 "note": "Standard"
 },
 "COLTURA": {
 "liv": "eccellente",
 "note": "Tinture naturali nel tè SCOBY o post, pigmenti/spirulina per micelio"
 }
 },
 "CARICA": {
 "PROTEINA": {
 "liv": "eccellente",
 "note": "Rinforzo meccanico"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "eccellente",
 "note": "Rinforzo"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "eccellente",
 "note": "Gusci+alginato classico"
 },
 "POLICATIONE": {
 "liv": "buona",
 "note": "Rinforzo"
 },
 "PLASTIFICANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "SALE_RETICOLANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "RESINA_LIPIDE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "COLORANTE": {
 "liv": "neutra",
 "note": "Non interagiscono"
 },
 "CARICA": {
 "liv": "eccellente",
 "note": "Mix cariche possibile"
 },
 "ADDITIVO": {
 "liv": "neutra",
 "note": "Standard"
 },
 "COLTURA": {
 "liv": "eccellente",
 "note": "Segatura/paglia/caffè = SUBSTRATO per micelio, micelio digerisce lignina"
 }
 },
 "ADDITIVO": {
 "PROTEINA": {
 "liv": "eccellente",
 "note": "Aceto per caseina, oli essenziali antimuffa"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "eccellente",
 "note": "Aceto migliora flessibilità amido"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "attenzione",
 "note": "☑  Acido citrico scioglie gel alginato"
 },
 "POLICATIONE": {
 "liv": "eccellente",
 "note": "Acido acetico 1% scioglie chitosano"
 },
 "PLASTIFICANTE": {
 "liv": "eccellente",
 "note": "Standard"
 },
 "SALE_RETICOLANTE": {
 "liv": "attenzione",
 "note": "Chelanti interferiscono"
 },
 "RESINA_LIPIDE": {
 "liv": "neutra",
 "note": "Standard"
 },
 "COLORANTE": {
 "liv": "neutra",
 "note": "Standard"
 },
 "CARICA": {
 "liv": "neutra",
 "note": "Standard"
 },
 "ADDITIVO": {
 "liv": "eccellente",
 "note": "Standard"
 },
 "COLTURA": {
 "liv": "attenzione",
 "note": "☑  SCOBY ama aceto | → MICELIO: aceto PERICOLOSO durante crescita (pH 5-6 richiesto)"
 }
 },
 "COLTURA": {
 "PROTEINA": {
 "liv": "buona",
 "note": "Soy protein aumenta tensile SCOBY"
 },
 "POLISACCARIDE_NEUTRO": {
 "liv": "eccellente",
 "note": "SCOBY frullato + Guar/Xantana = rinforzo cuoio-simile"
 },
 "POLISACCARIDE_ANIONICO": {
 "liv": "limitata",
 "note": "Non interazione significativa"
 },
 "POLICATIONE": {
 "liv": "buona",
 "note": "Chitosano come coating"
 },
 "PLASTIFICANTE": {
 "liv": "buona",
 "note": "Post-processing"
 },
 "SALE_RETICOLANTE": {
 "liv": "eccellente",
 "note": "Tannini, genipin (10x resistenza micelio)"
 },
 "RESINA_LIPIDE": {
 "liv": "eccellente",
 "note": "ESSENZIALE: olio+cera per SCOBY waterproofing"
 },
 "COLORANTE": {
 "liv": "eccellente",
 "note": "Tinture durante o dopo crescita"
 },
 "CARICA": {
 "liv": "eccellente",
 "note": "Substrato micelio: segatura, paglia, caffè, LIGNINA"
 },
 "ADDITIVO": {
 "liv": "attenzione",
 "note": "SCOBY: aceto OK | MICELIO: aceto PERICOLOSO"
 },
 "COLTURA": {
 "liv": "eccellente",
 "note": "COMPOSITO IBRIDO: micelio interno + pelle SCOBY esterna"
 }
 }
 },
 "regole_proprieta_risultanti": {
 "vegano": {
 "regola": "AND",
 "descrizione": "Tutti ingredienti devono essere vegani",
 "esempio": "Gelatina (no) + Agar (sì) = NO vegano"
 },
 "food_safe": {
 "regola": "AND",
 "descrizione": "Tutti devono essere food-safe",
 "eccezione": "Alcuni reticolanti (formaldeide) escludono food-safe"
 },
 "antibatterico": {
 "regola": "OR",
 "descrizione": "Basta un ingrediente antibatterico (chitosano)",
 "esempio": "Qualsiasi + Chitosano = antibatterico"
 },
 "reversibile": {
 "regola": "AND_NEGATIVO",
 "descrizione": "Basta UN ingrediente irreversibile per bloccare",
 "esempio": "Gelatina (rev) + Alginato+CaCl2 (irrev) = NON reversibile"
 },
 "trasparenza": {
 "regola": "MIN",
 "descrizione": "L'ingrediente meno trasparente domina",
 "esempio": "Gelatina (alta) + Carbone (opaco) = opaco"
 },
 "barriera_H2O": {
 "regola": "MIN",
 "descrizione": "Il peggiore determina il risultato",
 "migliorabile": "Coating lipidico post-processo"
 },
 "flessibilita": {
 "regola": "MODIFICA",
 "descrizione": "Plastificante aumenta flessibilità base",
 "parametro": "Più plastificante = più flessibile (max 1:1)"
 },
 "resistenza_calore": {
 "regola": "MIN",
 "descrizione": "Il più sensibile al calore domina",
 "esempio": "Agar (85°C) + Gelatina (35°C) = max 35°C"
 }
 },
 "proprieta_sistema": {
 "barriera_ossigeno": {
 "descrizione": "Blocco passaggio O2 (critico per packaging)",
 "eccellenti": [
 "chitosano",
 "zeina",
 "alginato"
 ],
 "scarsi": [
 "amidi non modificati"
 ],
 "come_calcolare": "Dipende principalmente dall'ingrediente migliore"
 },
 "conducibilita_elettrica": {
 "descrizione": "Per sensori, elettrodi biodegradabili",
 "come_ottenere": "Aggiungere grafite o carbone attivo >5%",
 "combinazioni_testate": [
 "agar+carbone",
 "chitosano+grafite"
 ]
 },
 "termoplasticita": {
 "descrizione": "Rifondibile e rimodellabile",
 "termoplastici": [
 "amido+glicerina (TPS)",
 "zeina+plastificante"
 ],
 "termoindurenti": [
 "alginato+Ca",
 "chitosano reticolato"
 ]
 },
 "idrofobicita_intrinseca": {
 "ingredienti_idrofobi": [
 "zeina",
 "cere",
 "gommalacca"
 ],
 "ingredienti_idrofili": [
 "amido",
 "gelatina",
 "agar"
 ],
 "come_migliorare": "Coating lipidico, tannini, olio tung"
 }
 },
 "note_speciali": {
 "zeina": "È PROTEINA ma IDROFOBA - si comporta diversamente dalle altre. NON si scioglie in acqua.",
 "pectina": "È POLISACCARIDE_ANIONICO come alginato. Tipo HM vs LM hanno comportamenti opposti.",
 "borace": "☑  TOSSICO - mai per progetti food-contact. Solo per slime educativi o oggetti non alimentari.",
 "olio_tung": "☑  NON food-safe. Eccellente per finitura oggetti, non per packaging alimentare."
 }
};

// --- ESEMPI_REALI ---
// Progetti reali per pagina Applicazioni
// v11.1 — migrato da applicazioni.html inline, arricchito con dettaglio/ingredienti/img/note
const ESEMPI_REALI = {
  categorie: {
    packaging:       { label: 'Packaging',                  color: '#1565C0', bg: '#E3F2FD' },
    gioiello:        { label: 'Gioiello / Oggetto decorativo', color: '#6A1B9A', bg: '#F3E5F5' },
    tessuto:         { label: 'Tessuto / Pelle vegetale',   color: '#C62828', bg: '#FCE4EC' },
    pannello:        { label: 'Pannello / Composito',       color: '#E65100', bg: '#FFF3E0' },
    design_scultura: { label: 'Design / Scultura / Installazione', color: '#2E7D32', bg: '#E8F5E9' },
    didattica:       { label: 'Didattica / Kit',            color: '#00695C', bg: '#E0F2F1' }
  },
  progetti: [

    // === PACKAGING ===
    {
      cat: 'packaging', nome: 'Notpla (Ooho)',
      desc: 'Capsule commestibili e film solubili da alghe',
      base: 'Alginato di sodio',
      link: 'https://notpla.com',
      img: 'notpla.jpg',
      ingredienti: ['Alginato', 'Cloruro di calcio'],
      dettaglio: 'Notpla (contrazione di "Not Plastic") \u00e8 stata fondata a Londra nel 2014 da Pierre Paslier e Rodrigo Garcia Gonzalez. Il loro prodotto iconico, Ooho, \u00e8 una capsula commestibile per liquidi realizzata con alginato estratto da alghe marine. Il materiale si forma per gelificazione ionica: una soluzione di alginato viene immersa in un bagno di cloruro di calcio, creando una membrana trasparente e resistente che si biodegrada in 4-6 settimane. Notpla ha ricevuto finanziamenti per oltre 20 milioni di sterline e collabora con eventi sportivi globali (Maratona di Londra) e catene di ristorazione. Oltre alle capsule, producono packaging rigido per takeaway e rivestimenti per scatole di cartone che sostituiscono il film plastico. Il processo \u00e8 replicabile in laboratorio con attrezzatura minima: basta alginato alimentare, CaCl\u2082 e stampi.',
      note: ''
    },
    {
      cat: 'packaging', nome: 'Shellworks',
      desc: 'Packaging compostabile da scarti di crostacei',
      base: 'Chitosano / Chitina',
      link: 'https://www.theshellworks.com',
      img: 'shellworks.jpg',
      ingredienti: ['Chitosano', 'Acido acetico'],
      dettaglio: 'The Shellworks \u00e8 uno studio londinese fondato nel 2018 da un team di designer del Royal College of Art. Trasformano i gusci di gamberi e granchi, normalmente destinati alla discarica, in bioplastica compostabile a base di chitina e chitosano. Il processo prevede la demineralizzazione con acido e la deproteinizzazione, ottenendo chitosano puro che viene sciolto in soluzione acida e colato in stampi. Il materiale risultante \u00e8 traslucido, resistente e si biodegrada in pochi mesi nel compost domestico. Shellworks ha sviluppato una macchina desktop chiamata "Shelly" che automatizza il processo di formatura per piccoli lotti, pensata per designer e maker. I loro prodotti includono vasetti per cosmetici, capsule e film. La chitina \u00e8 il secondo biopolimero pi\u00f9 abbondante sulla Terra dopo la cellulosa.',
      note: ''
    },
    {
      cat: 'packaging', nome: 'Ecovative Mushroom Packaging',
      desc: 'Packaging protettivo per Dell, Puma, IKEA',
      base: 'Micelio + substrato agricolo',
      link: 'https://mushroompackaging.com',
      img: 'ecovative-packaging.jpg',
      ingredienti: ['Micelio fungino', 'Scarti agricoli (canapa, steli di mais)'],
      dettaglio: 'Ecovative Design, fondata nel 2007 da Eben Bayer e Gavin McIntyre al Rensselaer Polytechnic Institute, \u00e8 pioniera dei materiali a base di micelio. Il loro packaging funziona in modo radicalmente diverso dalla plastica: scarti agricoli (steli di mais, lolla di riso, canapa) vengono sterilizzati, inoculati con micelio fungino e lasciati crescere in stampi per 5-7 giorni. Il micelio funge da collante biologico, creando un materiale leggero, resistente agli urti e completamente compostabile. Dell, IKEA e Puma lo hanno adottato come alternativa al polistirolo espanso. Il processo richiede sterilit\u00e0, temperatura controllata (24-28\u00b0C) e un forno per disattivare la crescita. Ecovative ha anche lanciato Grow.bio, una piattaforma che vende kit per far crescere materiali in micelio a casa o in laboratorio.',
      note: ''
    },

    // === GIOIELLO ===
    {
      cat: 'gioiello', nome: 'Galalite (storica)',
      desc: 'Plastica da caseina, bottoni e gioielli dal 1900',
      base: 'Caseina',
      link: 'https://it.wikipedia.org/wiki/Galalite',
      img: 'galalite2.jpg',
      ingredienti: ['Caseina (da latte)', 'Formaldeide (storica) o borace'],
      dettaglio: 'La Galalite ("pietra di latte") \u00e8 stata inventata nel 1897 e brevettata nel 1899 dal chimico tedesco Adolf Spitteler. Per quasi un secolo \u00e8 stata una delle plastiche pi\u00f9 diffuse al mondo, usata per bottoni, pettini, gioielli, manici di ombrelli e penne stilografiche. Il processo originale prevede la precipitazione della caseina dal latte con acido (aceto o acido lattico), seguita da essiccazione e indurimento in formaldeide. Il materiale risultante \u00e8 duro, lucidabile, colorabile e sorprendentemente simile all\'avorio, alla tartaruga o al corno. Ancora oggi artigiani in Italia e Francia producono bottoni in Galalite. In laboratorio si pu\u00f2 replicare il processo usando borace al posto della formaldeide come reticolante, ottenendo un materiale simile ma pi\u00f9 sicuro. La caseina plastica \u00e8 un eccellente esercizio didattico: economico, veloce e con risultati tangibili in poche ore.',
      note: ''
    },
    {
      cat: 'gioiello', nome: 'Shell Homage (Billie van Katwijk)',
      desc: 'Oggetti decorativi da conchiglie macinate + bioresina',
      base: 'Scarti di conchiglie',
      link: 'https://www.billievankatwijk.com',
      img: 'shell-homage.jpg',
      ingredienti: ['Polvere di conchiglie', 'Bioresina'],
      dettaglio: 'Billie van Katwijk \u00e8 una designer olandese che trasforma scarti dell\'industria ittica in materiali preziosi. Il suo progetto "Shell Homage" utilizza conchiglie di cozze e ostriche macinate finemente, mescolate con bioresine per creare un materiale composito che ricorda il marmo o la pietra naturale. Le conchiglie sono composte principalmente da carbonato di calcio (la stessa sostanza del gesso e del marmo), il che conferisce al materiale durezza e una finitura naturalmente setosa. Van Katwijk realizza vasi, piatti decorativi e oggetti per la casa, ciascuno con pattern unici determinati dalla granulometria e dal tipo di conchiglia. Il progetto affronta un problema reale: tonnellate di gusci vengono scartate ogni anno. In laboratorio, si pu\u00f2 sperimentare con gusci d\'uovo o conchiglie polverizzati mescolati a biopolimeri come la gelatina o l\'amido.',
      note: ''
    },
    {
      cat: 'gioiello', nome: 'Margarita Talep',
      desc: 'Bioplastiche da estratti di alghe',
      base: 'Agar / Alginato',
      link: 'https://www.margaritatalep.com',
      img: 'margarita-talep.jpg',
      ingredienti: ['Agar', 'Alginato', 'Coloranti naturali'],
      dettaglio: 'Margarita Talep \u00e8 una designer cilena che esplora le alghe come materia prima per bioplastiche esteticamente sorprendenti. I suoi materiali sono realizzati con agar e alginato estratti da alghe marine, combinati con coloranti naturali e plastificanti come la glicerina. Il risultato sono fogli traslucidi, colorati, che ricordano il vetro soffiato o le pietre preziose. Talep lavora con processi semplici e replicabili: sciogliere, colare, essiccare. I suoi oggetti includono packaging decorativo, contenitori e sculture che si biodegradano completamente. Il lavoro di Talep \u00e8 particolarmente interessante per la didattica perch\u00e9 dimostra come ingredienti da laboratorio base (agar, glicerina, coloranti alimentari) possano produrre oggetti di grande impatto visivo senza attrezzature costose.',
      note: ''
    },

    // === TESSUTO / PELLE ===
    {
      cat: 'tessuto', nome: 'VEGEA',
      desc: 'Pelle vegetale da vinaccia (scarti vinicoli)',
      base: 'Scarti uva (vinaccia)',
      link: 'https://www.vegeacompany.com',
      img: 'vegea.jpg',
      ingredienti: ['Fibre da vinaccia', 'Oli da semi d\'uva'],
      dettaglio: 'VEGEA \u00e8 un\'azienda italiana fondata nel 2016 a Milano da Gianpiero Tessitore. Il nome combina VEG (vegano) e GEA (Madre Terra). Il materiale \u00e8 prodotto dalla vinaccia, lo scarto della vinificazione composto da bucce, semi e raspi. Da 100 kg di uva si ottengono 9-10 kg di bucce e 3-4 kg di semi, ricchi di cellulosa e oli vegetali. Le fibre estratte vengono combinate con un supporto tessile per creare un materiale simile alla pelle, morbido e resistente. VEGEA contiene circa il 90% di materiale organico e il 10% di poliuretano per le finiture. Marchi come H&M, Le Coq Sportif, Diadora e persino Bentley per gli interni auto hanno adottato il materiale. Il progetto \u00e8 un esempio perfetto di economia circolare applicata alla filiera vinicola italiana, particolarmente rilevante per il Piemonte.',
      note: ''
    },
    {
      cat: 'tessuto', nome: 'Pinatex (Ananas Anam)',
      desc: 'Pelle da foglie di ananas',
      base: 'Fibra di foglie di ananas',
      link: 'https://www.ananas-anam.com',
      img: 'pinatex.jpg',
      ingredienti: ['Fibre di foglie di ananas', 'PLA (acido polilattico)'],
      dettaglio: 'Pinatex \u00e8 stato sviluppato dalla designer spagnola Carmen Hijosa, che ha trascorso anni nelle Filippine studiando la tradizione tessile locale basata sulle foglie di ananas. Dopo la raccolta del frutto, le foglie vengono normalmente scartate o bruciate. Pinatex estrae le fibre lunghe dalle foglie tramite un processo chiamato decorticazione, le trasforma in un tessuto non tessuto (feltro) e le rifinisce con una resina a base di PLA. Il materiale risultante \u00e8 resistente, flessibile e pu\u00f2 essere stampato, cucito e colorato. Nike, Hugo Boss, H&M e molti brand di accessori lo utilizzano per scarpe, borse e portafogli. La produzione genera un sottoprodotto (biomassa) utilizzabile come fertilizzante, chiudendo il ciclo. Pinatex dimostra come uno scarto agricolo tropicale possa diventare un tessuto tecnico di alta gamma.',
      note: ''
    },
    {
      cat: 'tessuto', nome: 'Desserto',
      desc: 'Pelle da cactus nopal messicano',
      base: 'Fibra di cactus (Opuntia)',
      link: 'https://desserto.com.mx',
      img: 'desserto.jpg',
      ingredienti: ['Polvere di cactus nopal', 'Supporto tessile'],
      dettaglio: 'Desserto \u00e8 un\'azienda messicana fondata nel 2019 da Adrian Lopez Velarde e Marte Cazarez. Producono una pelle vegetale dal cactus nopal (Opuntia ficus-indica), pianta che cresce abbondantemente in Messico senza irrigazione, pesticidi o deforestazione. Le pale mature del cactus vengono raccolte (senza uccidere la pianta, che ricresce), essiccate al sole per tre giorni, macinate in polvere fine e combinate con un supporto tessile. Il materiale \u00e8 morbido, resistente, parzialmente biodegradabile e disponibile in vari colori e texture. Desserto ha vinto numerosi premi per l\'innovazione sostenibile e collabora con brand di moda e automotive. Il cactus nopal richiede pochissima acqua (solo pioggia) e assorbe CO\u2082, rendendo il processo a bassissimo impatto ambientale.',
      note: ''
    },
    {
      cat: 'tessuto', nome: 'TomTex',
      desc: 'Materiale da scarti di conchiglie + fondi di caff\u00e8',
      base: 'Chitina + caff\u00e8',
      link: 'https://tomtex.co',
      img: 'tomtex.jpg',
      ingredienti: ['Chitina (da gusci di crostacei)', 'Fondi di caff\u00e8'],
      dettaglio: 'TomTex \u00e8 una startup fondata nel 2020 dalla designer vietnamita-americana Uyen Tran. Il materiale combina due flussi di rifiuti abbondanti: i gusci dei crostacei (ricchi di chitina) e i fondi di caff\u00e8. La chitina viene estratta chimicamente dai gusci, sciolta e combinata con fibre di caff\u00e8 per creare un tessuto non tessuto che replica l\'aspetto e la sensazione della pelle. Il processo non richiede prodotti chimici tossici ed \u00e8 a basse emissioni. Il materiale \u00e8 traspirante, resistente e si biodegrada naturalmente. TomTex ha ricevuto il supporto di acceleratori come Fashion for Good e ha presentato il materiale a brand di lusso. Il progetto \u00e8 interessante perch\u00e9 dimostra come la chitina (disponibile dai mercati ittici) possa essere combinata con un ingrediente quotidiano come il caff\u00e8.',
      note: ''
    },
    {
      cat: 'tessuto', nome: 'Mylo (Bolt Threads)',
      desc: 'Pelle di micelio per Stella McCartney, Adidas',
      base: 'Micelio fungino',
      link: 'https://boltthreads.com/technology/mylo',
      img: 'mylo.jpg',
      ingredienti: ['Micelio (radici fungine)', 'Substrato agricolo'],
      dettaglio: 'Mylo \u00e8 un materiale simile alla pelle sviluppato da Bolt Threads, startup californiana fondata nel 2009 da Dan Widmaier. Il micelio viene fatto crescere in camere climatizzate su substrato agricolo per meno di due settimane, poi raccolto, pressato e rifinito con tecniche simili alla concia tradizionale. Il risultato \u00e8 un materiale morbido, resistente e con la texture della pelle animale. Stella McCartney, Adidas, Kering e Lululemon hanno formato il "Mylo Consortium" per portare il materiale su scala commerciale. Tuttavia, nel 2023 Bolt Threads ha annunciato la sospensione della produzione di Mylo a causa di difficolt\u00e0 nel reperire finanziamenti, un caso emblematico delle sfide economiche che i biomateriali innovativi affrontano nel passaggio dal laboratorio alla produzione industriale. Il materiale conteneva circa il 60-85% di materiale bio-based.',
      note: 'Produzione sospesa dal 2023 per difficolt\u00e0 di finanziamento'
    },
    {
      cat: 'tessuto', nome: 'Reishi (MycoWorks)',
      desc: 'Fine Mycelium per Herm\u00e8s (Victoria bag)',
      base: 'Micelio ingegnerizzato',
      link: 'https://www.mycoworks.com',
      img: 'reishi.jpg',
      ingredienti: ['Micelio (Ganoderma)', 'Substrato controllato'],
      dettaglio: 'MycoWorks, fondata nel 2013 dall\'artista Philip Ross a San Francisco, ha sviluppato Reishi, un materiale di lusso basato sul micelio del fungo Ganoderma (il "reishi" della medicina tradizionale). A differenza di altri materiali a base di micelio, la tecnologia Fine Mycelium di MycoWorks guida la crescita delle cellule fungine per creare strutture intrecciate dense e resistenti, simili alla pelle conciata. La collaborazione con Herm\u00e8s ha portato alla creazione della borsa Victoria in Sylvania (il nome commerciale del materiale), presentata nel 2021. MycoWorks ha raccolto oltre 180 milioni di dollari e costruito uno stabilimento produttivo in South Carolina. Il materiale \u00e8 personalizzabile in spessore, texture e colore durante la fase di crescita, offrendo possibilit\u00e0 impossibili con la pelle tradizionale.',
      note: ''
    },
    {
      cat: 'tessuto', nome: 'Celium (Polybion)',
      desc: 'Pelle da cellulosa batterica industriale',
      base: 'Cellulosa batterica',
      link: 'https://polybion.bio',
      img: 'celium2.jpg',
      ingredienti: ['Cellulosa batterica', 'Scarti di frutta (mango, agave)'],
      dettaglio: 'Polybion \u00e8 un\'azienda messicana fondata nel 2015 che produce Celium, un materiale simile alla pelle ottenuto dalla cellulosa batterica. A differenza della cellulosa da SCOBY fatta in casa (piccola scala, lenta), Polybion utilizza bioreattori industriali dove batteri Acetobacter vengono nutriti con scarti dell\'industria agro-alimentare (polpa di mango, residui di agave). I batteri producono nanofibbre di cellulosa pura che formano un foglio denso e uniforme in 10-14 giorni. Il materiale viene poi essiccato, trattato e rifinito per ottenere le propriet\u00e0 desiderate. Celium \u00e8 stato adottato da brand di moda e accessori per la sua texture naturale e la possibilit\u00e0 di personalizzazione. Il processo scala molto meglio della fermentazione SCOBY casalinga e rappresenta il futuro industriale della cellulosa batterica.',
      note: ''
    },
    {
      cat: 'tessuto', nome: 'BioCouture / Biofabricate (Suzanne Lee)',
      desc: 'Pioniera tessuto da SCOBY kombucha',
      base: 'SCOBY (cellulosa batterica)',
      link: 'https://www.biofabricate.co',
      img: 'biocouture.jpg',
      ingredienti: ['SCOBY', 'T\u00e8 zuccherato'],
      dettaglio: 'Suzanne Lee \u00e8 la pioniera assoluta del tessuto da cellulosa batterica. Nel 2003, come ricercatrice al Central Saint Martins di Londra, ha iniziato a far crescere "tessuto" dalla coltura di kombucha (SCOBY) in vasche di t\u00e8 zuccherato. Il progetto BioCouture ha dimostrato che i batteri possono "tessere" fogli di cellulosa pura che, una volta essiccati e trattati, somigliano alla pelle vegetale. Il materiale grezzo \u00e8 fragile e idrofilo, ma con plastificanti (glicerina) e coating (cera, acido stearico) diventa flessibile e parzialmente impermeabile. Lee ha successivamente fondato Biofabricate, la piattaforma di riferimento globale per i biomateriali nella moda, organizzando conferenze annuali che riuniscono scienziati, designer e investitori. Il suo lavoro originale resta il punto di partenza per qualsiasi esperimento con la cellulosa batterica in laboratorio.',
      note: 'Il sito originale biocouture.co.uk non \u00e8 pi\u00f9 attivo. Lee dirige ora Biofabricate.'
    },

    // === PANNELLO ===
    {
      cat: 'pannello', nome: 'Chip[s] Board',
      desc: 'Pannelli e oggetti da scarti di patate',
      base: 'Amido + fibra di patata',
      link: '',
      img: 'chips-board.jpg',
      ingredienti: ['Amido di patata', 'Fibra di patata', 'Bucce'],
      dettaglio: 'Chip[s] Board \u00e8 un progetto fondato nel 2017 da Rowan Minkley e Robert Nicoll nel Regno Unito. L\'idea \u00e8 semplice ma potente: trasformare gli scarti dell\'industria delle patatine fritte in pannelli e oggetti rigidi. Le bucce e la polpa scartata, ricche di amido e fibre, vengono essiccate, macinate e pressate a caldo per creare un materiale composito simile all\'MDF ma completamente compostabile. Chip[s] Board ha realizzato occhiali, posate monouso, contenitori e pannelli decorativi. Il progetto \u00e8 nato come tesi di laurea in design ed \u00e8 diventato una piccola azienda che lavora con catene di fast food per il recupero degli scarti. Per il laboratorio didattico \u00e8 particolarmente interessante: dimostra che amido e fibre vegetali, pressati con calore, creano un materiale strutturale senza bisogno di leganti chimici.',
      note: 'Il sito web originale chipsboard.com non \u00e8 pi\u00f9 attivo. Il progetto resta un riferimento importante nella letteratura sui biomateriali.'
    },
    {
      cat: 'pannello', nome: 'Natural Fiber Welding',
      desc: 'Compositi da fibre naturali saldate',
      base: 'Fibre naturali (cotone, lino, canapa)',
      link: 'https://www.naturalfiberwelding.com',
      img: 'nfw.jpg',
      ingredienti: ['Fibre di cotone riciclato', 'Gomma naturale'],
      dettaglio: 'Natural Fiber Welding (NFW), fondata nel 2015 da Luke Haverhals nell\'Illinois, ha sviluppato una tecnologia brevettata per "saldare" fibre naturali tra loro senza adesivi sintetici. Il processo utilizza liquidi ionici per ammorbidire temporaneamente la superficie delle fibre vegetali, che vengono poi pressate insieme. Quando il liquido evapora, le fibre si legano permanentemente. NFW produce due linee principali: MIRUM, una pelle vegetale 100% naturale (senza plastica) da gomma naturale e fibre, e CLARUS, un filato di cotone riciclato ad alte prestazioni. Ralph Lauren, BMW, Allbirds e New Balance utilizzano i loro materiali. NFW ha raccolto oltre 100 milioni di dollari. Il principio di saldatura delle fibre \u00e8 applicabile anche in laboratorio didattico con processi semplificati di pressatura a caldo.',
      note: ''
    },

    // === DESIGN / SCULTURA ===
    {
      cat: 'design_scultura', nome: 'Neri Oxman \u2014 Vespers',
      desc: 'Maschere mortuarie stampate 3D con biomateriali',
      base: 'Chitosano, pectina, cellulosa',
      link: 'https://oxman.com/projects/vespers',
      img: 'oxman-vespers3.jpg',
      ingredienti: ['Chitosano', 'Pectina', 'Cellulosa', 'Pigmenti biologici'],
      dettaglio: 'Vespers \u00e8 una serie di maschere mortuarie progettate da Neri Oxman e il Mediated Matter Group al MIT Media Lab nel 2016. Le maschere esplorano il confine tra vita e morte attraverso tre serie: le prime ispirate alle maschere funebri storiche, le seconde contenenti microorganismi vivi intrappolati in canali interni, le terze completamente "biologiche" e capaci di decomporsi. Il materiale base combina chitosano, pectina e cellulosa in formulazioni variabili, stampate con una piattaforma multi-materiale sviluppata dal team. I pigmenti biologici (melanina, carotene) creano gradienti di colore. Il progetto dimostra come i biomateriali possano essere usati per creare oggetti di grande complessit\u00e0 formale e concettuale, ben oltre le semplici bioplastiche piatte.',
      note: ''
    },
    {
      cat: 'design_scultura', nome: 'Neri Oxman \u2014 Aguahoja',
      desc: 'Padiglione biodegradabile MIT Media Lab',
      base: 'Chitosano, cellulosa, pectina',
      link: 'https://oxman.com/projects/aguahoja',
      img: 'oxman-aguahoja.jpg',
      ingredienti: ['Chitosano', 'Cellulosa', 'Pectina', 'Carbonato di calcio'],
      dettaglio: 'Aguahoja (2018) \u00e8 un padiglione architettonico alto 5 metri, interamente costruito con biomateriali e progettato per decomporsi nell\'acqua piovana alla fine della sua vita. Neri Oxman e il Mediated Matter Group hanno sviluppato un processo robotico per depositare strati di chitosano, cellulosa e pectina con composizioni variabili, creando zone rigide e flessibili nello stesso oggetto. Le parti strutturali contengono pi\u00f9 chitosano e carbonato di calcio, quelle trasparenti pi\u00f9 cellulosa pura. Quando esposto alla pioggia, il padiglione si dissolve gradualmente, restituendo nutrienti al suolo. Aguahoja \u00e8 un manifesto per l\'architettura del futuro: strutture che nascono dalla natura e ritornano alla natura. Per la didattica, dimostra il principio della composizione a gradiente in un unico oggetto.',
      note: ''
    },
    {
      cat: 'design_scultura', nome: 'Ponto Biodesign',
      desc: 'Lampade e oggetti da cellulosa batterica',
      base: 'SCOBY (cellulosa batterica)',
      link: 'https://www.pontobiodesign.com',
      img: 'Ponto-Biodesign.jpg',
      ingredienti: ['SCOBY', 'T\u00e8 zuccherato', 'Stampi in legno/ceramica'],
      dettaglio: 'Ponto Biodesign \u00e8 uno studio brasiliano fondato da Anielle Hernandez che crea lampade, paralumi e oggetti decorativi interamente in cellulosa batterica. Il processo prevede la crescita di pellicole SCOBY in vasche di t\u00e8 zuccherato, seguite da essiccazione su stampi tridimensionali in legno o ceramica. Il materiale essiccato \u00e8 traslucido con una texture simile alla pergamena, che filtra la luce in modo caldo e organico. Le lampade di Ponto sono un esempio eccellente di come la cellulosa batterica possa trovare applicazioni reali nel design di prodotto. Il processo \u00e8 lento (2-3 settimane di crescita) ma non richiede attrezzature costose, ed \u00e8 perfettamente replicabile in un laboratorio didattico con pazienza e controllo della temperatura.',
      note: ''
    },
    {
      cat: 'design_scultura', nome: 'Hy-Fi Tower (The Living)',
      desc: 'Struttura 40 piedi, 10.000 mattoni in micelio, MoMA PS1',
      base: 'Micelio + steli di mais',
      link: 'https://www.dezeen.com/2014/07/01/tower-of-grown-bio-bricks-by-the-living-opens-at-moma-ps1/',
      img: 'hyfi.jpg',
      ingredienti: ['Micelio fungino', 'Steli di mais'],
      dettaglio: 'Hy-Fi \u00e8 una torre temporanea alta circa 12 metri costruita nel 2014 nel cortile del MoMA PS1 a New York dallo studio di architettura The Living (David Benjamin). La struttura era composta da circa 10.000 mattoni di micelio prodotti da Ecovative, coltivati in stampi usando steli di mais come substrato. I mattoni, una volta cresciuti ed essiccati, erano leggeri, isolanti e strutturalmente sufficienti per una costruzione temporanea. La torre combinava mattoni di micelio con mattoni riflettenti che creavano effetti di luce durante il giorno. Alla fine dell\'estate, l\'intera struttura \u00e8 stata smontata e compostata. Hy-Fi ha dimostrato per la prima volta che i materiali viventi possono essere usati su scala architettonica, aprendo un campo di ricerca oggi in piena espansione.',
      note: ''
    },
    {
      cat: 'design_scultura', nome: 'Myco-Type (RISD)',
      desc: 'Blocchi da segatura, fogli da caff\u00e8, pasta stampabile 3D',
      base: 'Micelio + scarti diversi',
      link: 'https://www.designboom.com/design/myco-type-mycelium-blocks-sheets-sawdust-coffee-grounds-local-waste-08-01-2025/',
      img: 'myco-type.jpg',
      ingredienti: ['Micelio', 'Segatura', 'Fondi di caff\u00e8'],
      dettaglio: 'Myco-Type \u00e8 un progetto di ricerca sviluppato alla Rhode Island School of Design (RISD) che esplora il micelio come materiale per il design in tre forme distinte: blocchi strutturali da segatura colonizzata, fogli sottili da fondi di caff\u00e8, e una pasta stampabile in 3D. L\'aspetto pi\u00f9 innovativo \u00e8 la versatilit\u00e0: lo stesso organismo (il micelio) produce materiali completamente diversi a seconda del substrato e del processo. I blocchi sono rigidi e isolanti, i fogli sono flessibili e simili al cuoio, la pasta permette forme complesse. Il progetto dimostra che il micelio non \u00e8 un materiale unico ma una piattaforma tecnologica. Per la didattica, \u00e8 un esempio eccellente di come variare substrato e processo possa cambiare radicalmente le propriet\u00e0 del materiale finale.',
      note: ''
    },

    // === DIDATTICA ===
    {
      cat: 'didattica', nome: 'Fabricademy',
      desc: 'Programma educativo tessuti e materiali bio-based (Fab Lab Network)',
      base: 'Vari biomateriali',
      link: 'https://textile-academy.org',
      img: 'fabricademy.jpg',
      ingredienti: ['Vari: agar, gelatina, alginato, micelio, SCOBY'],
      dettaglio: 'Fabricademy \u00e8 un programma educativo internazionale di 6 mesi, parte del Fab Lab Network, che insegna la produzione tessile avanzata includendo biomateriali, e-textiles, stampa 3D su tessuto e biofabbricazione. Gli studenti lavorano in Fab Lab locali seguendo lezioni settimanali dal vivo e documentando ogni esperimento. Il modulo sui biomateriali \u00e8 particolarmente ricco: si producono bioplastiche da agar e gelatina, film da alginato, tessuti da SCOBY e compositi da micelio. Tutta la documentazione degli studenti \u00e8 pubblica e consultabile online, costituendo una risorsa preziosa di ricette testate e risultati reali. Fabricademy ha sedi in oltre 20 paesi e rappresenta la pi\u00f9 importante rete educativa globale sui biomateriali tessili.',
      note: ''
    },
    {
      cat: 'didattica', nome: 'Grow.bio (Ecovative)',
      desc: 'Kit GIY micelio, ~$10-15, USA',
      base: 'Micelio + canapa',
      link: 'https://grow.bio',
      img: 'grow-bio(ecovative).jpg',
      ingredienti: ['Micelio pre-inoculato', 'Substrato di canapa'],
      dettaglio: 'Grow.bio \u00e8 la piattaforma consumer di Ecovative Design, pensata per rendere il micelio accessibile a designer, maker, educatori e curiosi. I kit "Grow It Yourself" (GIY) contengono substrato di canapa gi\u00e0 inoculato con micelio: basta romperlo, metterlo in uno stampo, spruzzare acqua e aspettare 5-7 giorni. Il micelio cresce e lega il substrato nella forma desiderata. Dopo la crescita si cuoce in forno per fermare il processo. I kit costano circa 10-15 dollari e permettono di creare oggetti fino a circa 20x20x10 cm. Grow.bio fornisce anche stampi, istruzioni dettagliate e una community online. \u00c8 il modo pi\u00f9 semplice e veloce per sperimentare con il micelio senza dover gestire sterilizzazione e inoculazione. Ideale per workshop di poche ore in classe.',
      note: ''
    },
    {
      cat: 'didattica', nome: 'Grown.bio',
      desc: 'Kit GIY micelio, Europa (Paesi Bassi)',
      base: 'Micelio',
      link: 'https://www.grown.bio/grow-it-yourself/',
      img: 'grow-bio.jpg',
      ingredienti: ['Micelio pre-inoculato', 'Substrato'],
      dettaglio: 'Grown.bio \u00e8 l\'equivalente europeo di Grow.bio, con sede nei Paesi Bassi. Offre kit GIY (Grow It Yourself) per far crescere materiali in micelio a casa o in laboratorio, con spedizione in tutta Europa e quindi senza i costi doganali dei kit americani. I kit includono substrato pre-inoculato, sacchetti di crescita e istruzioni passo-passo. Grown.bio offre anche stampi personalizzabili e kit pi\u00f9 grandi per progetti architettonici o di design. Il processo \u00e8 simile a Grow.bio: si idrata il substrato, si inserisce nello stampo, si lascia crescere al buio per 5-7 giorni e si cuoce per disattivare. L\'azienda collabora con universit\u00e0 e scuole di design europee per workshop didattici. Per un laboratorio in Italia, ordinare da Grown.bio \u00e8 l\'opzione pi\u00f9 pratica e conveniente per sperimentare con il micelio.',
      note: ''
    }
  ]
};


// --- OUTPUT_INFO ---
const OUTPUT_INFO = {
 film: {
 display: 'Film',
 desc: 'Struttura sottile e continua, flessibile o semi-rigida. Ideale per imballaggi, pellicole protettive, membrane.'
 },
 gel: {
 display: 'Gel',
 desc: 'Struttura idratata e morbida, elastica. Per applicazioni cosmetiche, medicali, alimentari.'
 },
 rigido: {
 display: 'Massa',
 desc: 'Struttura solida e compatta, stabile dimensionalmente. Ottenuto per essiccazione lenta o pressatura.'
 },
 coating: {
 display: 'Coating',
 desc: 'Rivestimento sottile applicato su substrato. Per protezione, impermeabilizzazione, finitura estetica.'
 },
 schiuma: {
 display: 'Schiuma',
 desc: 'Struttura porosa e leggera con aria intrappolata. Per isolamento, imballaggio, applicazioni fonoassorbenti.'
 },
 pelle: {
 display: 'Pelle',
 desc: 'Materiale simile al cuoio, flessibile e resistente. Per moda, arredamento, accessori.'
 },
 composito: {
 display: 'Composito',
 desc: 'Combinazione di matrice e rinforzo (fibre, scarti). Per applicazioni strutturali e decorative.'
 }
 };

// --- IN_PROGRESS_MAPPING ---
const IN_PROGRESS_MAPPING = {
 "R36": ["caseina", "borace", "aceto"],
 "R11": ["carragenina", "glicerina", "cacl2"],
 "R21B": ["gelatina", "glicerina"],
 "R50": ["alginato", "agar", "amido_mais"],
 "R37": ["agar", "glicerina", "cellulosa_carta"],
 "R42": ["caseina", "borace", "fibre_cotone", "aceto"],
 "R24": ["caseina", "borace", "fibre_lino", "aceto"],
 "R14": ["gelatina", "glicerina", "tannini"],
 "R40": ["gelatina", "amido_mais", "glicerina"],
 "R2": ["agar", "glicerina"],
 "R46": ["gelatina", "glicerina", "aceto"],
 "R7": ["gelatina", "glicerina", "curcuma"],
 "R17": ["caseina", "borace", "aceto"],
 "R34B": ["pectina", "glicerina"],
 "R19": ["albumina", "agar", "glicerina"],
 "R45": ["cellulosa_carta", "amido_mais"],
 "R48": ["gelatina", "glicerina", "carbone_vegetale"],
 "R20V": ["agar", "curcuma", "glicerina"],
 "R29": ["agar", "glicerina", "fibre_lino", "cellulosa_carta"],
 "R8": ["chitosano", "glicerina", "aceto"],
 "R26": ["colofonia", "cera_api", "cellulosa_carta"],
 "R12": ["gelatina", "glicerina", "bicarbonato"],
 "R23B": ["amido_mais", "glicerina", "pectina"],
 "R25": ["agar", "glicerina", "spirulina"],
 "R35": ["agar", "glicerina", "fondi_caffe"],
 "R30": ["gelatina", "glicerina", "gusci_uovo"],
 "R38": ["alginato", "cacl2"],
 "R43": ["albumina", "glicerina", "aceto"],
 "R10": ["caseina", "borace", "aceto"],
 "R6": ["pectina", "glicerina"],
 "R28B": ["caseina", "borace"],
 "R4": ["amido_mais", "glicerina", "aceto"],
 "R5": ["amido_patata", "glicerina"],
 "R13": ["amido_patata", "glicerina"],
 "R47": ["amido_mais", "glicerina", "aceto"],
  "IED_Olibrix": [],
  "IED_Oryza_Pack": [],
  "IED_Bee_Sticky": [],
  "IED_Cork_Jacket": [],
  "IED_Schin": [],
  "IED_Bonelith": [],
  "IED_Alisea": [],
  "IED_Caseo2": [],
  "IED_Checkerboard_Amido": [],
  "IED_Checkerboard_Gelatina": [],
  "IED_Arabic_Sensation": [],
  "IED_Seed_in": [],
  "IED_Oobleck_D": [],
};

const IMPLICAZIONI_MATRICE = {
  "gelatina": {
    "sblocca": [
      "PLASTIFICANTE",
      "COLORANTE",
      "CARICA",
      "SALE_RETICOLANTE"
    ],
    "suggerisce": "Film flessibile trasparente. Termolabile (fonde 25-30°C). Ideale per packaging, capsule, tessuto bio.",
    "forma": "film, gel",
    "reticolanti_compatibili": [
      "borace",
      "tannini",
      "te_nero_forte",
      "allume"
    ]
  },
  "caseina": {
    "sblocca": [
      "SALE_RETICOLANTE",
      "CARICA",
      "COLORANTE"
    ],
    "suggerisce": "Plastica rigida tipo Galalite (1897). Serve reticolante. Gioielli, bottoni, oggetti decorativi.",
    "forma": "massa, oggetto 3D",
    "reticolanti_compatibili": [
      "borace",
      "tannini",
      "allume"
    ]
  },
  "albumina": {
    "sblocca": [
      "PLASTIFICANTE",
      "COLORANTE"
    ],
    "suggerisce": "Film proteico da albume. Monta a neve per schiume. Denatura irreversibilmente a 70°C.",
    "forma": "film, schiuma",
    "reticolanti_compatibili": [
      "tannini"
    ]
  },
  "cheratina": {
    "sblocca": [
      "PLASTIFICANTE",
      "CARICA"
    ],
    "suggerisce": "Proteina strutturale da capelli/piume/lana. Richiede solubilizzazione alcalina.",
    "forma": "film, fibra",
    "reticolanti_compatibili": []
  },
  "zeina": {
    "sblocca": [
      "PLASTIFICANTE"
    ],
    "suggerisce": "Film idrofobo giallastro. Richiede solvente alcolico (non acqua). Coating naturale.",
    "forma": "film, coating",
    "reticolanti_compatibili": []
  },
  "agar": {
    "sblocca": [
      "COLORANTE",
      "CARICA",
      "PLASTIFICANTE"
    ],
    "suggerisce": "Gel rigido trasparente. Fragile senza plastificante. Richiede ebollizione. Isteresi termica (gelifica 35°C, fonde 85°C).",
    "forma": "gel, stampo, film rigido",
    "reticolanti_compatibili": []
  },
  "amido_mais": {
    "sblocca": [
      "PLASTIFICANTE",
      "CARICA",
      "COLORANTE"
    ],
    "suggerisce": "Film opaco economico. Retrogradazione. Gelatinizza a 62-72°C.",
    "forma": "film, massa",
    "reticolanti_compatibili": []
  },
  "amido_patata": {
    "sblocca": [
      "PLASTIFICANTE",
      "COLORANTE"
    ],
    "suggerisce": "Film più trasparente dell'amido mais. Gelatinizza a 56-66°C.",
    "forma": "film",
    "reticolanti_compatibili": []
  },
  "amido_tapioca": {
    "sblocca": [
      "PLASTIFICANTE",
      "COLORANTE"
    ],
    "suggerisce": "Film elastico, alta trasparenza tra gli amidi. Gelatinizza a 52-64°C.",
    "forma": "film",
    "reticolanti_compatibili": []
  },
  "alginato": {
    "sblocca": [
      "SALE_RETICOLANTE"
    ],
    "obbliga": [
      "cacl2"
    ],
    "suggerisce": "Gel ionico istantaneo con Ca²⁺. Sferificazione, forme 3D, incapsulamento. NON gelifica da solo.",
    "forma": "gel, sfere, forme 3D",
    "reticolanti_compatibili": [
      "cacl2",
      "lattato_calcio"
    ]
  },
  "carragenina": {
    "sblocca": [
      "PLASTIFICANTE",
      "COLORANTE",
      "SALE_RETICOLANTE"
    ],
    "suggerisce": "Gel elastico trasparente. Simile a gelatina ma vegano. Gelifica con K⁺ (KCl).",
    "forma": "gel, film",
    "reticolanti_compatibili": [
      "kcl"
    ]
  },
  "pectina": {
    "sblocca": [
      "PLASTIFICANTE",
      "SALE_RETICOLANTE",
      "COLORANTE"
    ],
    "suggerisce": "Gel con acido+zucchero (HM) o con Ca²⁺ (LM). Da scarti agrumi.",
    "forma": "gel, film",
    "reticolanti_compatibili": [
      "cacl2",
      "lattato_calcio"
    ]
  },
  "chitosano": {
    "sblocca": [
      "PLASTIFICANTE",
      "COLORANTE"
    ],
    "suggerisce": "Film antimicrobico. Richiede acido per sciogliere (pH<6.5). Carica positiva unica.",
    "forma": "film, coating",
    "reticolanti_compatibili": [
      "tannini"
    ]
  },
  "scoby": {
    "sblocca": [
      "PLASTIFICANTE",
      "COLORANTE",
      "RESINA_LIPIDE"
    ],
    "suggerisce": "Cellulosa batterica da kombucha. 7-21 giorni crescita. Post-processing essenziale.",
    "forma": "pellicola, pelle",
    "reticolanti_compatibili": []
  },
  "micelio": {
    "sblocca": [
      "CARICA"
    ],
    "suggerisce": "Micelio fungino su substrato. 7-14 giorni colonizzazione. Composito leggero isolante.",
    "forma": "composito, pannello",
    "reticolanti_compatibili": []
  },
  "gomma_arabica": {
    "sblocca": [
      "COLORANTE",
      "PLASTIFICANTE"
    ],
    "suggerisce": "Legante naturale, film fragile da sola. Ottima come coadiuvante o per tempera. Non gelifica.",
    "forma": "film, coating, legante",
    "reticolanti_compatibili": []
  }
};




// --- FAMIGLIA_INFO ---
const FAMIGLIA_INFO = {
 "PROTEINA": {
 "nome_display": "Proteine",
 "descrizione": "Polimeri di amminoacidi che formano gel termoreversibili (gelatina) o irreversibili (caseina, albumina). Ottime proprietà filmogene, barriera all'ossigeno, biodegradabili. Sensibili a pH e temperatura.",
 "sottocategorie": {
 "termoreversibili": "Gelatina ' fonde e ri-gelifica ciclicamente",
 "termoindurenti": "Albumina ' una volta cotta non torna liquida",
 "acido-sensibili": "Caseina ' precipita a pH acido (aceto, limone)",
 "strutturali": "Cheratina, chitosano ' fibre proteiche resistenti"
 },
 "confronto_rapido": {
 "gelatina": "Termoreversibile, trasparente, flessibile. Fonde a 30°C → instabile al caldo",
 "caseina": "Rigida, opaca, resistente. Richiede acido per precipitare, irreversibile",
 "albumina": "Termoindurente, schiuma stabile. Cuoce a 60-80°C, non si rifonde",
 "cheratina": "Fibra resistentissima, da piume/capelli. Difficile da sciogliere",
 "chitosano": "Da crostacei, antibatterico. Serve acido per sciogliere"
 },
 "quando_usare": {
 "film_flessibile": "Gelatina + glicerina (attenzione: fonde al caldo)",
 "oggetto_rigido": "Caseina (tipo galalite storica)",
 "schiuma_stabile": "Albumina montata + stabilizzante",
 "antibatterico": "Chitosano (packaging alimentare attivo)",
 "vegano": "NESSUNA proteina animale ' usare polisaccaridi"
 },
 "note_processo": "Le proteine sono sensibili al calore: gelatina non oltre 60°C, albumina cuoce a 70°C. Il pH modifica drasticamente il comportamento (caseina precipita sotto pH 5).",
 "avvisi": [
 "Gelatina NON è vegana (da ossa/pelle animali)",
 "Caseina NON è vegana (da latte)",
 "Chitosano NON è vegano (da crostacei) ma esistono fonti fungine"
 ]
 },
 "POLISACCARIDE_NEUTRO": {
 "nome_display": "Polisaccaridi Neutri (Amidi e Agar)",
 "descrizione": "Catene di zuccheri senza carica elettrica. Gelificano per raffreddamento (agar) o per cottura+raffreddamento (amidi). Economici, abbondanti, completamente vegani.",
 "sottocategorie": {
 "agar": "Polisaccaride da alghe rosse, gel rigido termoreversibile",
 "amidi": "Da cereali/tuberi, gel morbido, economicissimi"
 },
 "confronto_rapido": {
 "agar": "Gel RIGIDO, trasparente, termoreversibile. Gelifica a 35°C, fonde a 85°C. Il più forte",
 "amido_mais": "Gel MORBIDO, opaco, economico. Il più comune, meno flessibile",
 "amido_tapioca": "Gel più TRASPARENTE e flessibile del mais. Film migliori",
 "amido_patata": "Gel più VISCOSO, buona trasparenza. Via di mezzo"
 ,
 "gomma_guar": "ADDENSANTE potente, no gel. Sinergico con xantana",
 "xantana": "ADDENSANTE + STABILIZZANTE, no gel da solo. Da fermentazione",
 "gomma_arabica": "Legante, emulsionante, film solubile. Da acacia",
 "farina_riso": "Amido + proteine, opaco. Alternativa economica all'amido puro"
 },
 "quando_usare": {
 "gel_rigido_trasparente": "Agar (1-2%)",
 "film_economico": "Amido di mais + glicerina",
 "film_trasparente": "Amido di tapioca + glicerina",
 "gel_viscoso": "Amido di patata",
 "uso_alimentare": "Tutti sono food-safe e vegani"
 },
 "note_processo": "Agar: sciogliere a ebollizione, colare a 60-70°C prima che gelifica. Amidi: cuocere a 70-85°C mescolando continuamente per evitare grumi, la gelatinizzazione è visibile (diventa traslucido).",
 "avvisi": [
 "Agar gelifica VELOCEMENTE raffreddando ' lavorare rapidi",
 "Amidi DEVONO cuocere ' crudi non gelificano",
 "Tutti i polisaccaridi neutri sono VEGANI"
 ]
 },
 "POLISACCARIDE_ANIONICO": {
 "nome_display": "Polisaccaridi Anionici (Alginato, Pectina, Carragenina)",
 "descrizione": "Polisaccaridi con CARICA NEGATIVA che interagiscono con cationi (Ca²⁺, K→º). Permettono gelificazione controllata, sferificazione, gel con texture specifiche. Tutti da alghe o frutta.",
 "sottocategorie": {
 "alginato": "Da alghe brune, gelifica con Ca²⁺ (sferificazione)",
 "pectina": "Da frutta, gelifica con zucchero+acido (marmellate) o Ca²⁺ (LM)",
 "carragenina": "Da alghe rosse, tre tipi con proprietà diverse (kappa, iota, lambda)"
 },
 "confronto_rapido": {
 "alginato": "Gel con Ca²⁺ ISTANTANEO e IRREVERSIBILE. Sferificazione, film, coating",
 "pectina_HM": "Gel con ZUCCHERO+ACIDO (marmellate). Richiede >55% zucchero",
 "pectina_LM": "Gel con Ca²⁺ come alginato ma più MORBIDO. Senza zucchero",
 "carragenina_kappa": "Gel RIGIDO con K→º, fragile. Da alghe rosse",
 "carragenina_iota": "Gel ELASTICO con Ca²⁺. Più morbido del kappa",
 "carragenina_lambda": "NON gelifica, solo ADDENSANTE"
 },
 "quando_usare": {
 "sferificazione": "Alginato + CaClâ'Å¡'Å¡ (tecnica El Bulli)",
 "film_per_packaging": "Alginato (ottima barriera Oâ'Å¡'Å¡)",
 "gel_morbido_senza_zucchero": "Pectina LM + Ca²⁺",
 "gel_elastico": "Carragenina iota",
 "addensante": "Carragenina lambda"
 },
 "note_processo": "Alginato: MAI mescolare con Ca²⁺ direttamente (grumi istantanei). Tenere separati fino al momento della gelificazione. Pectina HM richiede cottura con zucchero. Carragenina: sciogliere a caldo (80°C+).",
 "avvisi": [
 "Alginato + CaClâ'Å¡'Å¡ in miscela diretta = DISASTRO (grumi)",
 "Acido citrico SEQUESTRA Ca²⁺ ' può bloccare gelificazione alginato",
 "Tutti sono VEGANI (da alghe o frutta)"
 ]
 },
 "PLASTIFICANTE": {
 "nome_display": "Plastificanti",
 "descrizione": "Molecole piccole che si inseriscono tra le catene polimeriche, aumentando FLESSIBILITÀ e riducendo FRAGILITÀ. Essenziali per film che devono piegarsi senza rompersi.",
 "sottocategorie": {
 "polioli": "Glicerina, sorbitolo ' igroscopici, food-safe",
 "oli_siccativi": "Olio di lino ' polimerizza, diventa parte della matrice"
 },
 "confronto_rapido": {
 "glicerina": "Il più usato. IGROSCOPICO (assorbe umidità) → materiale può diventare appiccicoso",
 "sorbitolo": "Meno igroscopico della glicerina. Dose: 70% della glicerina equivalente",
 "olio_lino": "SICCATIVO ' polimerizza all'aria. Non igroscopico ma lento (giorni-settimane)"
 },
 "quando_usare": {
 "ambiente_secco": "Glicerina (il più efficace)",
 "ambiente_umido": "Sorbitolo o olio di lino (meno igroscopici)",
 "massima_flessibilita": "Glicerina 20-30%",
 "flessibilita_moderata": "Glicerina 10-15% o sorbitolo 15-20%"
 },
 "note_processo": "Calcolare % sul peso SECCO, non sul totale. Aggiungere DOPO aver sciolto la matrice. Troppo plastificante = appiccicoso; troppo poco = fragile. Test: piegare a 180° senza rompere.",
 "avvisi": [
 "Glicerina in ambiente umido → materiale appiccicoso",
 "Olio di lino: ATTENZIONE stracci possono auto-incendiarsi!",
 "Plastificanti riducono barriera all'acqua"
 ]
 },
 "SALE_RETICOLANTE": {
 "nome_display": "Sali e Agenti Reticolanti",
 "descrizione": "Sostanze che creano PONTI tra le catene polimeriche, rendendo il materiale più rigido, resistente all'acqua e stabile. La reticolazione può essere reversibile o permanente.",
 "sottocategorie": {
 "ioni_calcio": "CaClâ'Å¡'Å¡, lattato di calcio ' per alginato e pectina LM",
 "sali_alluminio": "Allume ' reticola proteine, mordente",
 "borati": "Borace ' reticola PVA (slime), ignifugo",
 "tannini": "Acido tannico ' reticola proteine (concia)"
 },
 "confronto_rapido": {
 "cacl2": "Reticola ALGINATO istantaneamente. Sapore amaro, risciacquare",
 "lattato_calcio": "Come CaClâ'Å¡'Å¡ ma RILASCIO LENTO e sapore neutro. Per sferificazione inversa",
 "allume": "Reticola PROTEINE, mordente per tinture. Astringente",
 "borace": "Reticola PVA (slime), IGNIFUGO per cellulosa. NON food-safe",
 "tannini": "Reticolano PROTEINE (concia pelli). Da tè, quercia, castagno"
 ,
 "urea": "Plastificante per amido, denaturante proteine. Doppio ruolo",
 "kcl": "Reticola CARRAGENINA kappa (K⁺). Non funziona con alginato",
 "te_nero_forte": "Reticolante BLANDO naturale — tannini del tè. Economico, food-safe"
 },
 "quando_usare": {
 "gelificare_alginato": "CaClâ'Å¡'Å¡ 0.5-2% in bagno separato",
 "sferificazione_inversa": "Lattato di calcio dentro, alginato fuori",
 "indurire_gelatina": "Tannini o allume (parziale)",
 "slime_PVA": "Borace 4% (ma non food-safe)",
 "ignifugare_carta": "Borace 5-10%"
 },
 "note_processo": "CaClâ'Å¡'Å¡ + alginato: MAI in miscela diretta. Sempre bagno separato o rilascio controllato. Tannini scuriscono le proteine. Borace è basico (pH 9-10).",
 "avvisi": [
 "CaClâ'Å¡'Å¡ in alginato = grumi istantanei se mescolati",
 "Borace NON è food-safe (tossico se ingerito)",
 "Reticolazione con Ca²⁺ è spesso IRREVERSIBILE"
 ]
 },
 "CARICA": {
 "nome_display": "Cariche, Fibre e Filler",
 "descrizione": "Materiali solidi che si aggiungono alla matrice per modificare proprietà meccaniche, ridurre costi, aggiungere texture o funzionalità specifiche (colore, conduttività).",
 "sottocategorie": {
 "fibre_vegetali": "Juta, canapa, lino, cotone ' rinforzo meccanico",
 "scarti_organici": "Fondi caffè, bucce, paglia ' economia circolare",
 "minerali": "Carbonato calcio, caolino, gusci uovo ' rigidità, opacità",
 "funzionali": "Grafite (conduttiva), carbone (assorbente)"
 },
 "confronto_rapido": {
 "lino": "PREMIUM ' resistenza massima (800-1500 MPa), costoso",
 "canapa": "OTTIMO ' quasi come lino, più economico",
 "juta": "ECONOMICA ' buone prestazioni, molto disponibile",
 "cotone": "MORBIDO ' meno resistente ma flessibile",
 "cellulosa_carta": "GRATIS ' fibre corte, da riciclo",
 "fondi_caffe": "GRATIS ' colore, texture, odore gradevole",
 "carbonato_calcio": "RIGIDITÀ ' opacità, economico, da gusci o minerale"
 ,
 "segatura": "Da legno, economica. Buon filler strutturale, odore gradevole",
 "paglia": "Fibra agricola lunga, substrato micelio. Richiede pastorizzazione",
 "canapa_hurd": "Canapulo — standard Ecovative per micelio, leggero",
 "caolino": "Argilla bianca, opacizzante, rinforza. Da ceramica",
 "gusci_uovo": "Carbonato di calcio naturale, gratis. Macinare fino",
 "grafite": "Conduttiva, nera, lubrificante. Per materiali funzionali",
 "fibre_canapa": "Lunghe e resistenti, alternative al lino. Meno costose",
 "fibre_juta": "Economiche, buone prestazioni, molto disponibili",
 "bucce_agrumi": "Profumate, contengono pectina. Essiccare e triturare",
 "cenere_legno": "Alcalina (KOH), ignifuga. Attenzione pH",
 "pula_riso": "Silice naturale, isolante, economica",
 "gesso": "Solfato di calcio, rigidità, opacità. Da cartongesso",
 "sansa_oliva": "Scarti oleificio, tannini residui. Carica + reticolante blando",
 "sughero": "Leggero, isolante, elastico. Granulato o polvere",
 "talco": "Minerale morbidissimo, lubrificante, opacizzante"
 },
 "quando_usare": {
 "massima_resistenza": "Lino o canapa (30-40%)",
 "rinforzo_economico": "Juta o cellulosa carta",
 "compositi_leggeri": "Paglia, segatura",
 "colore_naturale": "Fondi caffè (marrone), bucce agrumi (texture)",
 "rigidita_opacita": "Carbonato calcio, caolino, gusci uovo",
 "conduttivita": "Grafite 20-30%"
 },
 "note_processo": "Fibre: pre-bagnare per migliore adesione. Cariche fini: disperdere gradualmente per evitare grumi. Rapporto tipico: 20-40% carica. Oltre 50% servono più legante.",
 "avvisi": [
 "Fibre naturali MARCISCONO se umide ' essiccare bene, proteggere",
 "Segatura da legni TRATTATI è TOSSICA ' solo legno naturale",
 "Più carica = più rigido ma anche più fragile"
 ]
 },
 "RESINA_LIPIDE": {
 "nome_display": "Resine e Lipidi",
 "descrizione": "Sostanze idrofobe usate per IMPERMEABILIZZARE, PROTEGGERE e RIFINIRE i biomateriali. Non si sciolgono in acqua ' si applicano fusi (cere), in soluzione alcolica (gommalacca, colofonia) o puri (oli).",
 "sottocategorie": {
 "cere": "Solide a temperatura ambiente, fondono a caldo, barriera eccellente (carnauba, api)",
 "oli_siccativi": "Liquidi che POLIMERIZZANO all'aria formando film solido (lino, tung)",
 "resine": "Solide, si sciolgono in solventi (alcol), formano film duro e lucido (gommalacca, colofonia)"
 },
 "confronto_rapido": {
 "carnauba": "Cera più DURA (86°C), lucidissima, vegana, costosa",
 "api": "Cera classica, profumata, MORBIDA (65°C), non vegana",
 "olio_lino": "Siccativo LENTO (giorni-settimane), penetra, economico",
 "olio_tung": "Siccativo VELOCE (ore), più resistente, costoso, irritante fresco",
 "gommalacca": "Resina insetto, alcol, film DURISSIMO lucido, food-safe",
 "colofonia": "Resina pino, economica, FRAGILE da sola, base per vernici"
 ,
 "acido_stearico": "Acido grasso SOLIDO, coating idrorepellente semplice",
 "olio_oliva": "NON siccativo — plastificante, non polimerizza. Solo coating temporaneo"
 },
 "quando_usare": {
 "barriera_massima": "Cera carnauba (+ dura) o cera api (+ accessibile)",
 "penetrazione_legno": "Olio lino o tung (entrano nelle fibre)",
 "finitura_lucida_dura": "Gommalacca (classica dei mobili antichi)",
 "coating_economico": "Colofonia in alcol o olio lino",
 "food_safe": "Cera carnauba, cera api, gommalacca (tutti E-number)"
 },
 "note_processo": "I lipidi si applicano DOPO l'essiccazione del biomateriale di base. Strati sottili multipli > strato unico spesso. Cere: bagnomaria, MAI fiamma diretta.",
 "avvisi": [
 "Olio lino: stracci possono AUTO-INCENDIARSI ' stendere ad asciugare!",
 "Olio tung FRESCO è irritante ' guanti obbligatori",
 "Cera api non è vegana"
 ]
 },
 "COLORANTE": {
 "nome_display": "Coloranti Naturali",
 "descrizione": "Pigmenti e coloranti da fonti naturali per tingere biomateriali. Alcuni sono anche funzionali (antiossidanti, antimicrobici). La stabilità alla luce varia molto.",
 "sottocategorie": {
 "pigmenti_vegetali": "Curcuma, paprika, spirulina ' colori vivaci ma fotosensibili",
 "pigmenti_minerali": "Ossidi di ferro, carbone ' stabili, opachi",
 "pigmenti_organici": "Carbone vegetale ' nero intenso, assorbente"
 },
 "confronto_rapido": {
 "curcuma": "GIALLO intenso, antiossidante. SBIADISCE con luce UV",
 "spirulina": "VERDE-BLU, da alga. MOLTO sensibile a pH e luce",
 "paprika": "ROSSO-ARANCIO, da peperoni. Abbastanza stabile",
 "carbone_vegetale": "NERO, assorbente, stabilissimo. Funzionale (assorbe odori)",
 "ossido_ferro": "ROSSO/GIALLO/NERO secondo tipo. STABILISSIMO, opaco"
 ,
 "cannella": "MARRONE caldo, antimicrobico. Doppio ruolo: colore + funzionale",
 "zafferano": "GIALLO oro, pregiatissimo. Idrosolubile, costosissimo"
 },
 "quando_usare": {
 "giallo_caldo": "Curcuma (1-3%) ' proteggere da luce",
 "verde_naturale": "Spirulina ' solo per usi temporanei/indoor",
 "rosso_arancio": "Paprika o ossido ferro (più stabile)",
 "nero_intenso": "Carbone vegetale (anche funzionale)",
 "colori_permanenti": "Ossidi di ferro (terre naturali)"
 },
 "note_processo": "Aggiungere coloranti alla matrice liquida PRIMA di versare. Mescolare bene per distribuzione uniforme. Per spirulina: pH neutro, no calore eccessivo.",
 "avvisi": [
 "Curcuma e spirulina SBIADISCONO alla luce ' solo indoor",
 "Spirulina è SENSIBILE al pH ' diventa verde-marrone in acido",
 "Ossidi di ferro non sono food-safe in alte concentrazioni"
 ]
 },
 "ADDITIVO": {
 "nome_display": "Additivi Funzionali",
 "descrizione": "Sostanze aggiunte in piccole quantità per funzioni specifiche: conservazione, pH, schiumogeno, emulsionante. Non formano la struttura ma ne modificano proprietà.",
 "sottocategorie": {
 "acidi": "Aceto, acido citrico ' pH, conservazione, precipitazione",
 "basi": "Bicarbonato ' schiumogeno, alcalinizzante",
 "conservanti": "Oli essenziali ' antimicrobici naturali",
 "emulsionanti": "Lecitina ' stabilizza miscele acqua-olio",
 "tensioattivi": "Sapone ' schiume, riduce tensione superficiale"
 },
 "confronto_rapido": {
 "aceto": "Acido FORTE, volatile (odore svanisce). Per chitosano, caseina",
 "acido_citrico": "Acido DEBOLE, inodore, chelante. Per conservazione",
 "bicarbonato": "BASE debole, produce COâ'Å¡'Å¡ con acidi → SCHIUME",
 "sapone": "Tensioattivo, STABILIZZA bolle, schiumogeno",
 "lecitina": "Emulsionante naturale, da soia/uovo",
 "oli_essenziali": "Antimicrobici (timo, tea tree), profumanti"
 ,
 "acqua": "SOLVENTE primario — mezzo di dissoluzione per tutti i biopolimeri",
 "alcool": "Solvente volatile — diluente, disinfettante, per gommalacca",
 "alcool_isopropilico": "Solvente — sgrassante, diluente gommalacca, evapora veloce",
 "zucchero": "Nutriente per colture, plastificante per caseina (~15%)",
 "te_nero": "Base tannica, nutriente SCOBY. Reticolante blando",
 "sale": "Conservante, regolatore ionico. Modifica gelificazione",
 "aquafaba": "Schiumogeno naturale — proteine + saponine da ceci",
 "cremor_tartaro": "Sale acido, genera CO₂ con bicarbonato. Per schiume",
 "miele": "Plastificante naturale, antimicrobico, igroscopico",
 "ammoniaca_dolci": "Lievitante — CO₂ + NH₃ a caldo. Evapora completamente"
 },
 "quando_usare": {
 "sciogliere_chitosano": "Aceto diluito 1-2%",
 "precipitare_caseina": "Aceto 10-15% del latte",
 "conservare": "Acido citrico 1-2% o oli essenziali 0.5-1%",
 "fare_schiume": "Bicarbonato + acido + sapone",
 "emulsionare": "Lecitina 1-2%"
 },
 "note_processo": "Aceto: l'odore svanisce essiccando. Bicarbonato + acido: timing critico per intrappolare bolle. Oli essenziali: aggiungere a freddo (volatili).",
 "avvisi": [
 "Acido citrico SEQUESTRA calcio ' problematico con alginato",
 "Bicarbonato lascia residuo basico nel materiale",
 "Oli essenziali possono irritare ' usare con moderazione"
 ]
 },
 "COLTURA": {
 "nome_display": "Colture Viventi",
 "descrizione": "Organismi viventi che PRODUCONO materiali attraverso processi biologici. Richiedono tempo, nutrienti e condizioni controllate ma creano materiali unici e autorigeneranti.",
 "sottocategorie": {
 "simbiosi": "SCOBY ' comunità batteri+lieviti che produce cellulosa",
 "funghi": "Micelio ' rete fungina che lega substrati",
 },
 "confronto_rapido": {
 "scoby": "Comunità ROBUSTA, produce CELLULOSA batterica (pellicola). 1-4 settimane",
 "micelio": "Rete fungina, LEGA substrati (paglia, segatura). 1-3 settimane",
 },
 "quando_usare": {
 "pellicola_simil_pelle": "SCOBY ' cellulosa batterica (bio-leather)",
 "compositi_rigidi": "Micelio + substrato (alternative al polistirolo)",
 "forme_complesse": "Micelio in stampi (cresce nella forma)",
 "processi_avanzati": "Batteri specifici (bio-cemento, etc.)"
 },
 "note_processo": "SCOBY: tè zuccherato, temperatura 20-30°C, coprire con tessuto (respira), 1-4 settimane. Micelio: substrato pastorizzato, inoculo, buio, umidità 80%+, 1-3 settimane, poi essiccare/cuocere per fermare.",
 "avvisi": [
 "Contaminazioni = progetto fallito ' igiene importante",
 "Micelio VA FERMATO (calore) altrimenti continua a crescere",
 "SCOBY è acidofilo ' il pH scende durante fermentazione",
 "Tempi LUNGHI rispetto a materiali chimici (settimane vs ore)"
 ]
 }
};

// --- PROBLEMI_DATA ---
// 20 problemi + soluzioni + costanti per pagina Problemi
// v11.1 — migrato da problemi.html inline
// ── DATA: 20 PROBLEMI ──
const PROBLEMI_DATA = [
// -- GRUPPO 1: ESSICCAZIONE --
{
    id: 'crepe', gruppo: 'essiccazione', iconLabel: 'P01',
    titolo: 'Crepe durante l\'essiccazione',
    sottotitolo: 'Fessure che partono dai bordi o dal centro',
    gravita: 4, risolvibilita: 4,
    sintomo: 'Fessure che compaiono durante l\'asciugatura, partendo dai bordi o propagandosi dal centro verso l\'esterno.',
    causa: 'L\'acqua evapora pi\u00f9 velocemente dalla superficie che dall\'interno. La "pelle" esterna si irrigidisce e contrae mentre il nucleo \u00e8 ancora umido, generando tensioni interne che superano la resistenza del materiale \u2192 frattura. In letteratura: "drying stress cracking".',
    famiglie_rischio: ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO'],
    ingredienti_rischio: ['gelatina','agar','amido_mais','amido_patata','caseina'],
    condizioni: ['spessore >3mm','ventilazione diretta','bassa umidit\u00e0 ambientale','assenza plastificante'],
    soluzioni: [
        { nome: 'Essiccazione lenta', desc: 'Coprire con carta (non plastica), ambiente non ventilato direttamente', pro: 'Semplice, zero costi', con: 'Tempi lunghi, rischio muffe', efficacia: 3, diff: 'Facile', link: 'muffe' },
        { nome: 'Pi\u00f9 plastificante', desc: 'Aggiungere 10-15% glicerina sul peso della matrice', pro: 'Molto efficace, standard', con: 'Troppa \u2192 appiccicoso', efficacia: 3, diff: 'Facile', link: 'appiccicoso' },
        { nome: 'Spessore ridotto', desc: 'Versare film da 1-2mm massimo', pro: 'Elimina il problema alla radice', con: 'Limita le forme possibili', efficacia: 3, diff: 'Facile' },
        { nome: 'Essiccazione a fasi', desc: '24h coperto \u2192 24h scoperto \u2192 24h in ambiente secco', pro: 'Risultati professionali', con: 'Richiede pianificazione', efficacia: 3, diff: 'Medio' },
        { nome: 'Umidificazione ambiente', desc: 'Ciotola d\'acqua vicino al campione, o essiccare in bagno', pro: 'Improvvisabile', con: 'Tempi molto lunghi', efficacia: 2, diff: 'Facile' },
    ],
    studenti: [
        { testo: 'Un\'asciugatura non uniforme causa screpolature', materiale: 'CASEINA ESPANSA' },
        { testo: 'Molto fragile quando viene staccato dalla superficie', materiale: 'Pectina Elastica' },
        { testo: 'Dopo la formatura si verificano ritiro e deformazione', materiale: 'Amido Mais Bioplastica' },
    ],
    nota_sci: 'Alcune crepe sottili possono diventare texture interessante \u2014 nella ceramica giapponese il kintsugi trasforma le crepe in decorazione. Valutarle esteticamente prima di scartare il campione.',
},
{
    id: 'ritiro', gruppo: 'essiccazione', iconLabel: 'P02',
    titolo: 'Ritiro eccessivo e deformazione',
    sottotitolo: 'Restringimento, bordi sollevati, curling',
    gravita: 3, risolvibilita: 3,
    sintomo: 'Il campione si \u00e8 ristretto molto (30-50%), bordi sollevati, forma distorta, bordi che si arricciano verso l\'alto (curling).',
    causa: 'L\'acqua costituisce 70-95% del volume iniziale \u2014 il ritiro \u00e8 inevitabile. Diventa problematico quando \u00e8 asimmetrico: la superficie a contatto con l\'aria asciuga prima di quella sullo stampo \u2192 il campione si incurva verso il lato che asciuga per primo. In letteratura: "differential shrinkage".',
    famiglie_rischio: ['POLISACCARIDE_NEUTRO','PROTEINA','POLISACCARIDE_ANIONICO'],
    ingredienti_rischio: ['agar','amido_mais','amido_patata','amido_tapioca','gelatina'],
    condizioni: ['film sottili','miscele molto diluite','assenza cariche'],
    soluzioni: [
        { nome: 'Sovradimensionare', desc: 'Fare campioni 30-50% pi\u00f9 grandi del target finale', pro: 'Semplice, prevedibile', con: 'Serve esperienza per stimare', efficacia: 2, diff: 'Facile' },
        { nome: 'Fissare i bordi', desc: 'Nastro adesivo, pesi, o cornice durante essiccazione', pro: 'Previene curling', con: 'Possibili segni sui bordi', efficacia: 3, diff: 'Facile' },
        { nome: 'Aggiungere cariche', desc: 'Fondi caff\u00e8, farine, fibre (10-20% del totale)', pro: 'Riduce ritiro 30-40% + rinforza', con: 'Opacizza il materiale', efficacia: 3, diff: 'Facile' },
        { nome: 'Essiccare tra piani', desc: 'Campione tra due superfici piane con peso sopra', pro: 'Previene warping', con: 'Solo per lastre, rallenta', efficacia: 3, diff: 'Medio' },
        { nome: 'Girare il campione', desc: 'Capovolgere ogni 12h durante essiccazione', pro: 'Equalizza ritiro tra le facce', con: 'Campione delicato da maneggiare', efficacia: 2, diff: 'Facile' },
        { nome: 'Essiccazione su rete', desc: 'Griglia o rete che permette aria da entrambi i lati', pro: 'Ritiro uniforme, professionale', con: 'Serve supporto permeabile', efficacia: 3, diff: 'Medio' },
    ],
    studenti: [
        { testo: 'Forma cambia notevolmente dopo l\'essiccazione', materiale: 'Agar trasparente rigido' },
        { testo: 'Necessario appesantirlo per evitare deformazioni', materiale: 'Caseina+Fibra Lino' },
        { testo: 'Si \u00e8 ridotto molto e asciugato velocemente', materiale: 'Agar+Fondi caff\u00e8 composito' },
    ],
    nota_sci: 'Il ritiro degli amidi \u00e8 proporzionale al contenuto di amilosio: mais > patata > tapioca. Le fibre di cellulosa riducono il ritiro del 30-40% (Rhim et al., 2013). L\'aggiunta di nanoargilla (1-5%) riduce ritiro e migliora la barriera ai gas.',
},
{
    id: 'appiccicoso', gruppo: 'essiccazione', iconLabel: 'P03',
    titolo: 'Materiale appiccicoso / non asciuga',
    sottotitolo: 'Resta umido, attira polvere, non si stacca',
    gravita: 3, risolvibilita: 4,
    sintomo: 'Dopo giorni il materiale resta appiccicoso al tatto, non si stacca, attira polvere e lascia impronte.',
    causa: 'La glicerina \u00e8 igroscopica \u2014 assorbe acqua dall\'aria. Pi\u00f9 glicerina c\'\u00e8, pi\u00f9 il materiale resta umido indefinitamente. In ambienti umidi (>60% RH) il problema peggiora. Il rapporto critico glicerina/matrice \u00e8 circa 40%: oltre, la Tg scende sotto la temperatura ambiente e il materiale non raggiunge mai uno stato stabile.',
    famiglie_rischio: ['PLASTIFICANTE'],
    ingredienti_rischio: ['glicerina','sorbitolo'],
    condizioni: ['plastificante >35% del totale','umidit\u00e0 ambientale >60%'],
    soluzioni: [
        { nome: 'Ridurre plastificante', desc: 'Rapporto plastificante/matrice massimo 30-40%', pro: 'Elimina la causa', con: 'Rischio fragilit\u00e0', efficacia: 3, diff: 'Facile', link: 'fragile' },
        { nome: 'Sostituire con sorbitolo', desc: 'Stessa funzione della glicerina, meno igroscopico', pro: 'Pi\u00f9 stabile nel tempo', con: 'Leggermente meno flessibile', efficacia: 3, diff: 'Facile' },
        { nome: 'Ambiente secco', desc: 'Essiccare con riscaldamento acceso, bustine di silica gel', pro: 'Semplice', con: 'Stagionale, non sempre possibile', efficacia: 2, diff: 'Facile' },
        { nome: 'Amido di superficie', desc: 'Spolverare con amido di mais o talco alimentare', pro: 'Elimina appiccicosit\u00e0 tattile', con: 'Cambia aspetto (opacizza)', efficacia: 2, diff: 'Facile' },
        { nome: 'Reticolazione', desc: 'Bagno in CaCl2 (alginato/pectina LM) o tannini (proteine)', pro: 'Stabilizza permanentemente', con: 'Irreversibile, cambia propriet\u00e0', efficacia: 3, diff: 'Avanzato' },
    ],
    studenti: [
        { testo: 'Proporzioni da rivedere', materiale: 'Amido tapioca flessibile' },
    ],
    nota_sci: 'Il sorbitolo ha temperatura di transizione vetrosa (Tg) pi\u00f9 alta della glicerina \u2192 film meno appiccicosi a parit\u00e0 di flessibilit\u00e0 (Caz\u00f3n et al., 2017). Per applicazioni che devono resistere all\'umidit\u00e0, valutare la reticolazione chimica come alternativa all\'eccesso di plastificante.',
},
// -- GRUPPO 2: MECCANICA --
{
    id: 'fragile', gruppo: 'meccanica', iconLabel: 'P04',
    titolo: 'Materiale troppo fragile',
    sottotitolo: 'Si rompe, si sbriciola, non si piega',
    gravita: 4, risolvibilita: 4,
    sintomo: 'Si rompe maneggiandolo, si sbriciola, non si piega. Si frattura lungo linee nette o si polverizza.',
    causa: 'Manca plastificante, oppure matrice troppo concentrata, oppure essiccazione troppo aggressiva che ha rimosso tutta l\'acqua residua (che fungeva da plastificante naturale). Le catene polimeriche sono troppo rigide e ordinate \u2192 zero capacit\u00e0 di deformazione prima della frattura.',
    famiglie_rischio: ['PROTEINA','POLISACCARIDE_NEUTRO'],
    ingredienti_rischio: ['caseina','agar','amido_mais'],
    condizioni: ['assenza plastificante','matrice >70% senza modificatori','essiccazione aggressiva'],
    soluzioni: [
        { nome: 'Aggiungere plastificante', desc: '10-20% glicerina o sorbitolo sul peso della matrice', pro: 'Standard, molto efficace', con: 'Pu\u00f2 rendere appiccicoso', efficacia: 3, diff: 'Facile', link: 'appiccicoso' },
        { nome: 'Ridurre concentrazione', desc: 'Pi\u00f9 acqua nella miscela iniziale \u2192 film pi\u00f9 sottile', pro: 'Film naturalmente pi\u00f9 flessibile', con: 'Pi\u00f9 ritiro, tempi pi\u00f9 lunghi', efficacia: 2, diff: 'Facile' },
        { nome: 'Aggiungere fibre', desc: '5-10% fibre di lino, cotone, cellulosa', pro: 'Rinforza senza irrigidire eccessivamente', con: 'Opacizza', efficacia: 3, diff: 'Facile' },
        { nome: 'Reidratare', desc: 'Nebulizzare acqua o tenere in ambiente umido', pro: 'Pu\u00f2 recuperare parzialmente', con: 'Temporaneo, torna fragile', efficacia: 1, diff: 'Facile' },
        { nome: 'Cambiare matrice', desc: 'Gelatina pi\u00f9 flessibile di agar; patata pi\u00f9 di mais', pro: 'Soluzione strutturale', con: 'Cambia tutto il materiale', efficacia: 3, diff: 'Facile' },
        { nome: 'Laminare su tessuto', desc: 'Applicare su garza, TNT o tessuto sottile', pro: 'Struttura composita flessibile', con: 'Pi\u00f9 complesso, cambia estetica', efficacia: 3, diff: 'Medio' },
    ],
    studenti: [
        { testo: 'Molto difficile, troppo fragile', materiale: 'Caseina plastica dura' },
        { testo: 'Se non compattato bene si sbriciola', materiale: 'Biocomposito caseina+feltro' },
        { testo: 'Simile a un biscotto, si frattura e sbriciola', materiale: 'Gelatina+Tannini Cuoio' },
        { testo: 'Tende a creparsi e perdere polvere', materiale: 'Gusci d\'uovo+gelatina' },
        { testo: 'Bioplastica troppo fragile, resistenza meccanica bassa', materiale: 'Amido Mais Bioplastica' },
    ],
    nota_sci: 'La fragilit\u00e0 degli amidi peggiora nel tempo per retrogradazione: le catene di amilosio ri-cristallizzano progressivamente, rendendo il materiale sempre pi\u00f9 rigido. \u00c8 lo stesso processo che rende il pane raffermo. I plastificanti rallentano ma non eliminano questo fenomeno.',
},
{
    id: 'schiuma_collassa', gruppo: 'meccanica', iconLabel: 'P05',
    titolo: 'Schiuma che collassa',
    sottotitolo: 'Perde volume, si appiattisce, diventa densa',
    gravita: 4, risolvibilita: 2,
    sintomo: 'La schiuma inizialmente soffice e voluminosa perde volume nelle ore/giorni successivi, si appiattisce e diventa densa e compatta.',
    causa: 'Le bolle d\'aria nella matrice sono instabili. La gravit\u00e0 spinge il liquido verso il basso (drenaggio), le pareti tra bolle si assottigliano e cedono (coalescenza), il gas diffonde dalle bolle piccole a quelle grandi (maturazione di Ostwald). Se la matrice non gelifica abbastanza velocemente da "congelare" la struttura porosa, la schiuma collassa inevitabilmente.',
    famiglie_rischio: ['PROTEINA','ADDITIVO'],
    ingredienti_rischio: ['albumina','gelatina','bicarbonato','aquafaba'],
    condizioni: ['areazione meccanica','gelificazione lenta','temperatura ambiente troppo alta'],
    soluzioni: [
        { nome: 'Gelificazione rapida', desc: 'Versare in stampo freddo, o aggiungere gelificante rapido', pro: 'Congela la struttura prima del collasso', con: 'Meno tempo per lavorare', efficacia: 3, diff: 'Medio' },
        { nome: 'Stabilizzante schiuma', desc: '0.5-1% xantano o metilcellulosa nella miscela', pro: 'Aumenta viscosit\u00e0, rallenta drenaggio', con: 'Ingrediente aggiuntivo', efficacia: 2, diff: 'Medio' },
        { nome: 'Areazione a freddo', desc: 'Montare gelatina a 40-50\u00b0C poi versare subito in stampo freddo', pro: 'Gelifica in minuti', con: 'Solo per matrici termoreversibili', efficacia: 3, diff: 'Medio' },
        { nome: 'Reticolazione immediata', desc: 'Spray di CaCl2 su schiuma di alginato', pro: 'Fissa istantaneamente la struttura', con: 'Solo per polisaccaridi anionici', efficacia: 3, diff: 'Avanzato' },
        { nome: 'Liofilizzazione', desc: 'Congelare il gel poi sublimare l\'acqua sotto vuoto', pro: 'Struttura porosa perfetta, permanente', con: 'Richiede attrezzatura specifica', efficacia: 3, diff: 'Avanzato' },
    ],
    studenti: [
        { testo: 'Ricetta non totalmente valida', materiale: 'Gelatina spugnosa areata' },
        { testo: 'Difficile che si solidifichi quando si forma la pellicola finale', materiale: 'Albumina Antibatterica' },
    ],
    nota_sci: 'La stabilit\u00e0 delle schiume proteiche dipende dalla capacit\u00e0 della proteina di formare film interfacciali robusti alle pareti delle bolle. L\'albumina d\'uovo forma i film migliori (denaturazione >60\u00b0C), la gelatina \u00e8 instabile a caldo ma si stabilizza raffreddando. Il metodo pi\u00f9 affidabile per schiume biomateriali permanenti \u00e8 la liofilizzazione di idrogeli congelati.',
},
{
    id: 'delaminazione', gruppo: 'meccanica', iconLabel: 'P06',
    titolo: 'Delaminazione e sfaldamento',
    sottotitolo: 'Si separa in strati, si sfoglia, perde polvere',
    gravita: 3, risolvibilita: 3,
    sintomo: 'Il materiale si separa in strati, le superfici si sfogliano, i compositi perdono polvere o particelle dalla superficie.',
    causa: 'Scarsa adesione tra fasi diverse. Nei compositi: la carica non \u00e8 compatibile chimicamente con la matrice, o le particelle sono troppo grandi. Nei multilayer: le interfacce non hanno aderito (tempi di gelificazione diversi). Anche l\'essiccazione non uniforme crea gradienti di densit\u00e0 che favoriscono la separazione.',
    famiglie_rischio: ['CARICA'],
    ingredienti_rischio: ['gusci_uovo','caolino','gesso','segatura','pula_riso'],
    condizioni: ['carica >30% del totale','particelle grossolane','fibre non trattate'],
    soluzioni: [
        { nome: 'Macinare pi\u00f9 fine', desc: 'Cariche sotto 100\u03bcm (polvere impalpabile)', pro: 'Migliora adesione matrice-carica', con: 'Richiede macinazione', efficacia: 3, diff: 'Medio' },
        { nome: 'Bagnare le fibre prima', desc: 'Immergere fibre nella soluzione di matrice prima dell\'assemblaggio', pro: 'Migliora l\'interfaccia', con: 'Passo aggiuntivo', efficacia: 3, diff: 'Facile' },
        { nome: 'Pressatura con peso', desc: 'Comprimere durante essiccazione con peso e calore moderato', pro: 'Elimina vuoti, consolida', con: 'Solo per lastre e pannelli', efficacia: 3, diff: 'Medio' },
        { nome: 'Ridurre % carica', desc: 'Restare sotto il 25-30% del totale', pro: 'Meno rischio sfaldamento', con: 'Meno rinforzo, meno effetto estetico', efficacia: 2, diff: 'Facile' },
        { nome: 'Emulsionante', desc: 'Lecitina 1-2% per sistemi con fasi grasse e acquose', pro: 'Ponte chimico olio-acqua', con: 'Cambia leggermente le propriet\u00e0', efficacia: 2, diff: 'Medio' },
    ],
    studenti: [
        { testo: 'Tende a perdere polvere', materiale: 'Gusci d\'uovo+gelatina' },
        { testo: 'Suono crepitante prima di frantumarsi', materiale: 'Resina pino+Segatura' },
    ],
    nota_sci: 'L\'adesione nei biocompositi migliora con il trattamento superficiale delle cariche. Un semplice lavaggio alcalino (NaOH 5%) delle fibre naturali rimuove cere e pectine superficiali, migliorando l\'adesione matrice-fibra del 30-50%.',
},
// -- GRUPPO 3: BIOLOGICI --
{
    id: 'muffe', gruppo: 'biologici', iconLabel: 'P07',
    titolo: 'Muffe',
    sottotitolo: 'Macchie verdi, nere, bianche. Odore di cantina',
    gravita: 4, risolvibilita: 3,
    sintomo: 'Macchie verdi, nere o bianche pelose sulla superficie. Odore di cantina o di marcio.',
    causa: 'I biomateriali sono cibo per i funghi. Servono quattro condizioni: umidit\u00e0 (>65% RH), temperatura (18-28\u00b0C), nutrimento (zuccheri, proteine) e tempo. Tutte presenti in laboratorio. I materiali con scarti organici freschi (fondi caff\u00e8, bucce, pula) sono i pi\u00f9 vulnerabili: aggiungono nutrienti fermentescibili.',
    famiglie_rischio: ['PROTEINA','POLISACCARIDE_NEUTRO','CARICA'],
    ingredienti_rischio: ['fondi_caffe','pula_riso','bucce_agrumi','segatura','gelatina','amido_mais','amido_patata'],
    condizioni: ['essiccazione lenta','scarti organici freschi','ambiente caldo-umido','assenza antimicrobico'],
    soluzioni: [
        { nome: 'Essiccazione rapida', desc: 'Portare sotto il 15% di umidit\u00e0 residua, ambiente ventilato', pro: 'Elimina condizione necessaria', con: 'Rischio crepe se troppo veloce', efficacia: 3, diff: 'Facile', link: 'crepe' },
        { nome: 'Acido citrico/aceto', desc: '2-5% nella miscela, abbassa pH sotto 4.5', pro: 'Antimicrobico naturale, economico', con: 'Odore (aceto), pu\u00f2 cambiare pH-sensibili', efficacia: 3, diff: 'Facile' },
        { nome: 'Oli essenziali', desc: 'Tea tree, chiodi di garofano, timo: 0.5-1%', pro: 'Antimicotici potenti, profumati', con: 'Costosi, possono macchiare', efficacia: 3, diff: 'Facile' },
        { nome: 'Curcuma', desc: '1-3% nella miscela', pro: 'Antimicotico + colorante naturale', con: 'Colora di giallo, fotosensibile', efficacia: 2, diff: 'Facile' },
        { nome: 'Chitosano', desc: 'Come matrice o aggiunto al 5-10%', pro: 'Antimicrobico naturale e duraturo', con: 'Costoso, leggermente giallastro', efficacia: 3, diff: 'Medio' },
        { nome: 'Pre-essiccare gli scarti', desc: 'Forno 80\u00b0C per 30min prima di incorporare nella miscela', pro: 'Elimina umidit\u00e0 e spore residue', con: 'Passo aggiuntivo, cambia propriet\u00e0', efficacia: 2, diff: 'Facile' },
    ],
    studenti: [
        { testo: 'Dopo 3 giorni ha iniziato ad ammuffire, dopo 7 forte odore', materiale: 'Agar+Pula Riso Pannello' },
        { testo: 'Soggetto a muffe, forma cambia notevolmente', materiale: 'Agar trasparente rigido' },
        { testo: 'Muffa dopo qualche giorno in acqua', materiale: 'Amido+Bucce Agrumi' },
        { testo: 'Muffa nelle zone pi\u00f9 spesse (fatica ad asciugare)', materiale: 'Amido tapioca flessibile' },
        { testo: 'Nessun cattivo odore dopo 2 settimane \u2192 il chitosano protegge', materiale: 'Chitosano film rigido' },
    ],
    nota_sci: 'La muffa \u00e8 la prova che il materiale \u00e8 biodegradabile. Non \u00e8 un fallimento della formulazione, \u00e8 una conferma delle sue qualit\u00e0 ecologiche. Il problema \u00e8 di conservazione, non di composizione.',
},
{
    id: 'odore', gruppo: 'biologici', iconLabel: 'P08',
    titolo: 'Odore sgradevole',
    sottotitolo: 'Odore acido, animale, di marcio, di fermentazione',
    gravita: 2, risolvibilita: 3,
    sintomo: 'Odore persistente: acido (caseina+aceto), animale (gelatina), di marcio (decomposizione), di fermentazione (scarti).',
    causa: 'Ogni matrice ha un odore intrinseco. La gelatina \u00e8 letteralmente colla animale. La caseina con aceto odora di formaggio acido. Gli scarti organici possono fermentare. Se l\'odore \u00e8 di marcio \u2192 decomposizione batterica in corso, non solo odore.',
    famiglie_rischio: ['PROTEINA','CARICA'],
    ingredienti_rischio: ['gelatina','caseina','aceto','fondi_caffe','pula_riso','bucce_agrumi'],
    condizioni: ['matrice proteica','scarti organici','essiccazione incompleta'],
    soluzioni: [
        { nome: 'Essiccazione completa', desc: 'L\'odore si attenua molto quando il materiale \u00e8 completamente asciutto', pro: 'Naturale, nessun intervento', con: 'Serve tempo', efficacia: 2, diff: 'Facile' },
        { nome: 'Oli essenziali', desc: 'Lavanda, limone, menta: 0.5-1% nella miscela', pro: 'Copre/sostituisce l\'odore', con: 'Non elimina la causa', efficacia: 2, diff: 'Facile' },
        { nome: 'Acido citrico al posto dell\'aceto', desc: 'Stessa funzione acidificante, molto meno odore', pro: 'Elimina odore acido alla fonte', con: 'Leggermente diverso chimicamente', efficacia: 3, diff: 'Facile' },
        { nome: 'Tannini', desc: '3-5% nella miscela proteica', pro: 'Fissano le proteine, riducono odore', con: 'Scuriscono il materiale', efficacia: 2, diff: 'Medio' },
    ],
    studenti: [
        { testo: 'Dopo 7 giorni forte odore', materiale: 'Agar+Pula Riso Pannello' },
    ],
},
// -- GRUPPO 4: PROCESSO --
{
    id: 'non_gelifica', gruppo: 'processo', iconLabel: 'P09',
    titolo: 'Non gelifica / resta liquido',
    sottotitolo: 'Miscela ancora liquida dopo ore nello stampo',
    gravita: 5, risolvibilita: 4,
    sintomo: 'La miscela resta liquida nello stampo dopo il tempo previsto per la gelificazione.',
    causa: 'Ogni matrice ha una condizione specifica per gelificare. Se non viene rispettata, resta liquida.',
    famiglie_rischio: ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO'],
    ingredienti_rischio: ['gelatina','agar','alginato','amido_mais','amido_patata','carragenina','pectina'],
    condizioni: [],
    is_matrix_guide: true,
    matrix_guide: [
        { matrice: 'Gelatina', problema: 'Troppo caldo (>25-30\u00b0C)', soluzione: 'Mettere in frigo. Se non gelifica in 2-3h \u2192 troppo diluita' },
        { matrice: 'Agar', problema: 'Non ha raggiunto ebollizione', soluzione: 'DEVE bollire 2-3 min. Riscaldare. Gelifica sotto 35\u00b0C' },
        { matrice: 'Alginato', problema: 'Manca calcio, o CaCl2 miscelato insieme', soluzione: 'CaCl2 va aggiunto DOPO: spray, bagno, strato. Se miscelato \u2192 grumi' },
        { matrice: 'Amido', problema: 'Non cotto abbastanza', soluzione: 'Deve diventare traslucido e denso. Se bianco \u2192 continuare a cuocere' },
        { matrice: 'Pectina HM', problema: 'Manca zucchero o acido', soluzione: 'Serve >55% zucchero + pH <3.5' },
        { matrice: 'Pectina LM', problema: 'Manca calcio', soluzione: 'Come alginato: serve CaCl2 per reticolare' },
        { matrice: 'Carragenina', problema: 'Tipo sbagliato o troppo diluita', soluzione: 'Lambda non gelifica mai. Kappa serve >0.5%' },
    ],
    soluzioni: [],
    studenti: [
        { testo: 'Temperatura deve essere attentamente controllata, altrimenti non solidifica', materiale: 'Carragenina gel elastico' },
        { testo: 'Difficile da controllare la temperatura, difficile che si solidifichi', materiale: 'Albumina Antibatterica' },
    ],
},
{
    id: 'bolle', gruppo: 'processo', iconLabel: 'P10',
    titolo: 'Bolle d\'aria intrappolate',
    sottotitolo: 'Bolle, buchi, superficie a "cratere lunare"',
    gravita: 2, risolvibilita: 4,
    sintomo: 'Bolle visibili nel materiale, buchi in superficie, texture irregolare tipo "cratere lunare".',
    causa: 'Aria incorporata durante miscelazione vigorosa e non eliminata prima del versamento nello stampo. Le miscele dense (alginato viscoso) e le polveri fini (spirulina, curcuma) intrappolano microbolle particolarmente tenaci.',
    famiglie_rischio: ['POLISACCARIDE_ANIONICO','COLORANTE','ADDITIVO'],
    ingredienti_rischio: ['alginato','spirulina','albumina','bicarbonato','curcuma'],
    condizioni: ['miscelazione vigorosa','polveri non pre-disperse','miscele dense'],
    soluzioni: [
        { nome: 'Mescolare lentamente', desc: 'Movimenti circolari con cucchiaio, non frusta', pro: 'Previene il problema alla fonte', con: 'Pi\u00f9 tempo, possibile meno omogeneo', efficacia: 3, diff: 'Facile' },
        { nome: 'Riposo pre-versamento', desc: '5-15 minuti dopo miscelazione: le bolle salgono', pro: 'Le bolle escono da sole', con: 'Serve tempo, miscela pu\u00f2 iniziare a gelificare', efficacia: 3, diff: 'Facile' },
        { nome: 'Versare da basso', desc: 'Tenere contenitore vicino allo stampo, versare lentamente', pro: 'Meno turbolenza', con: 'Serve pratica', efficacia: 2, diff: 'Facile' },
        { nome: 'Picchiettare lo stampo', desc: 'Battere delicatamente sul tavolo dopo il versamento', pro: 'Fa salire le bolle superficiali', con: 'Solo bolle vicine alla superficie', efficacia: 2, diff: 'Facile' },
        { nome: 'Pre-dispersione polveri', desc: 'Sciogliere spirulina/curcuma in poca acqua calda (fare una "pasta") prima', pro: 'Elimina microbolle intrappolate nelle polveri', con: 'Passo aggiuntivo', efficacia: 3, diff: 'Facile' },
    ],
    studenti: [
        { testo: 'L\'aggiunta di spirulina ha prodotto un gran numero di bolle', materiale: 'Gelatina colorata naturale' },
        { testo: 'Tende a formare grumi', materiale: 'Agar+Spirulina Bioattivo' },
    ],
},
{
    id: 'stampo', gruppo: 'processo', iconLabel: 'P11',
    titolo: 'Si attacca allo stampo',
    sottotitolo: 'Non si stacca, si rompe provando a estrarlo',
    gravita: 3, risolvibilita: 5,
    sintomo: 'Il materiale non si stacca dallo stampo, si rompe o si deforma nel tentativo di estrarlo.',
    causa: 'I biopolimeri sono adesivi naturali (la colla di pesce \u00e8 gelatina!). L\'adesione chimica e meccanica tra materiale e superficie dello stampo \u00e8 forte, soprattutto con stampi porosi o rugosi.',
    famiglie_rischio: ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO'],
    ingredienti_rischio: [],
    condizioni: ['stampi non trattati','superfici porose','materiali molto adesivi'],
    soluzioni: [
        { nome: 'Stampi in silicone', desc: 'Naturalmente antiaderenti, migliore soluzione', pro: 'Risultati eccellenti, riusabili', con: 'Costosi, forme limitate', efficacia: 3, diff: 'Facile' },
        { nome: 'Olio vegetale', desc: 'Strato sottile sullo stampo prima del versamento', pro: 'Economico, molto efficace', con: 'Pu\u00f2 macchiare leggermente il campione', efficacia: 3, diff: 'Facile' },
        { nome: 'Carta forno / acetato', desc: 'Foderare lo stampo con carta da forno', pro: 'Superficie liscia, facile rimozione', con: 'Possibili pieghe sulla superficie', efficacia: 3, diff: 'Facile' },
        { nome: 'Raffreddamento', desc: 'Mettere in frigo/freezer 30 minuti', pro: 'Il materiale si contrae dallo stampo', con: 'Condensa al ritorno a temperatura', efficacia: 2, diff: 'Facile' },
        { nome: 'Coltello sottile', desc: 'Fare leva delicatamente dai bordi', pro: 'Salva il campione', con: 'Pu\u00f2 danneggiare', efficacia: 1, diff: 'Facile' },
    ],
    studenti: [
        { testo: 'Molto fragile quando viene staccato dalla superficie del contenitore', materiale: 'Pectina Elastica' },
    ],
},
{
    id: 'grumi', gruppo: 'processo', iconLabel: 'P12',
    titolo: 'Miscela non omogenea / grumi',
    sottotitolo: 'Grumi, particelle non sciolte, fasi separate',
    gravita: 3, risolvibilita: 4,
    sintomo: 'Grumi visibili, particelle non sciolte, sedimentazione, fasi separate (olio-acqua).',
    causa: 'Le polveri si aggregano in acqua formando grumi con l\'esterno idratato e l\'interno ancora secco. Coloranti in polvere e cariche minerali sono i peggiori. Le fasi grasse e acquose si separano spontaneamente senza emulsionante.',
    famiglie_rischio: ['COLORANTE','CARICA','RESINA_LIPIDE'],
    ingredienti_rischio: ['spirulina','curcuma','caolino','gesso','fondi_caffe','bucce_agrumi'],
    condizioni: ['polveri aggiunte tutte insieme','miscelazione insufficiente','fasi olio-acqua senza emulsionante'],
    soluzioni: [
        { nome: 'Pre-dispersione', desc: 'Sciogliere la polvere in poca acqua calda (fare una "pasta") prima di aggiungere', pro: 'Elimina grumi alla fonte', con: 'Passo aggiuntivo', efficacia: 3, diff: 'Facile' },
        { nome: 'Aggiunta graduale', desc: 'Spolverare polvere lentamente nella miscela mescolando', pro: 'Previene agglomerazione', con: 'Pi\u00f9 tempo', efficacia: 3, diff: 'Facile' },
        { nome: 'Frullatore / mixer', desc: 'Omogeneizzare meccanicamente', pro: 'Rapido, efficace per scarti', con: 'Incorpora aria \u2192 bolle', efficacia: 3, diff: 'Facile', link: 'bolle' },
        { nome: 'Setacciare prima', desc: 'Passare polveri e cariche al setaccio prima dell\'uso', pro: 'Elimina grumi preesistenti', con: 'Serve setaccio fine', efficacia: 2, diff: 'Facile' },
        { nome: 'Emulsionante', desc: 'Lecitina 1-2% per sistemi con fasi grasse e acquose', pro: 'Stabilizza emulsione permanentemente', con: 'Ingrediente aggiuntivo', efficacia: 3, diff: 'Medio' },
    ],
    studenti: [
        { testo: 'Curcuma in polvere conteneva grumi, non mescolata accuratamente', materiale: 'Agar+curcuma antimicrobico' },
        { testo: 'Difficile da mescolare in modo uniforme, forma grumi, tende a curvarsi', materiale: 'Agar+Spirulina Bioattivo' },
        { testo: 'Il materiale non riesce a diventare omogeneo', materiale: 'Caseina flessibile' },
        { testo: 'L\'aggiunta di coloranti naturali ha causato sedimentazione', materiale: 'Gelatina colorata naturale' },
        { testo: 'Necessario frullatore, altrimenti difficile ottenere consistenza liscia', materiale: 'Bucce Banana Bioplastica' },
    ],
    nota_sci: 'La spirulina in polvere \u00e8 particolarmente problematica: le particelle fini intrappolano microbolle d\'aria resistenti. Pre-dispersione in acqua calda risolve entrambi i problemi (grumi e bolle) simultaneamente.',
},
// -- GRUPPO 5: STABILITA --
{
    id: 'colore', gruppo: 'stabilita', iconLabel: 'P13',
    titolo: 'Colore inaspettato o instabile',
    sottotitolo: 'Viraggio, scolorimento, ingiallimento',
    gravita: 2, risolvibilita: 2,
    sintomo: 'Colore diverso dal previsto, scolorimento con la luce, ingiallimento, viraggio nel tempo.',
    causa: 'I coloranti naturali sono intrinsecamente instabili. Curcuma: fotosensibile, sbiadisce con UV. Spirulina: vira dal verde al bruno. Amidi: scuriscono se surriscaldati (Maillard). Gelatina: ingiallisce con il calore.',
    famiglie_rischio: ['COLORANTE','PROTEINA'],
    ingredienti_rischio: ['curcuma','spirulina','paprika','gelatina'],
    condizioni: ['esposizione a luce diretta','surriscaldamento','pH variabile'],
    is_color_guide: true,
    color_guide: [
        { col: 'Curcuma', stab: 'Bassa', problema: 'Sbiadisce con luce UV', nota: 'Conservare al buio; accettare come evoluzione' },
        { col: 'Spirulina', stab: 'Media', problema: 'Vira al bruno col tempo', nota: 'Aggiungere antiossidante (vitamina C)' },
        { col: 'Carbone vegetale', stab: 'Alta', problema: 'Nessuno \u2014 stabilissimo', nota: 'Scelta migliore per nero permanente' },
        { col: 'Ossidi/ocre', stab: 'Alta', problema: 'Nessuno', nota: 'Scelta migliore per colori stabili' },
        { col: 'T\u00e8/caff\u00e8', stab: 'Media', problema: 'Scurisce nel tempo', nota: 'Accettabile, evoluzione naturale' },
        { col: 'Barbabietola', stab: 'Bassa', problema: 'pH-sensibile, sbiadisce', nota: 'Solo per effetti temporanei' },
    ],
    soluzioni: [],
    studenti: [
        { testo: 'Coloranti naturali hanno causato sedimentazione oltre che viraggio', materiale: 'Gelatina colorata naturale' },
    ],
    nota_sci: 'Per colori permanenti nei biomateriali: ossidi minerali (ocre, terre) e carbone vegetale. Per colori che evolvono nel tempo (progetto con "aging" intenzionale): curcuma, spirulina, pigmenti botanici.',
},
{
    id: 'retrogradazione', gruppo: 'stabilita', iconLabel: 'P14',
    titolo: 'Retrogradazione degli amidi',
    sottotitolo: 'Indurimento e opacizzazione progressiva',
    gravita: 3, risolvibilita: 2,
    sintomo: 'Il materiale a base di amido diventa progressivamente pi\u00f9 rigido, opaco e fragile nelle settimane successive alla produzione.',
    causa: 'Le catene di amilosio, disperse nella matrice dopo la gelatinizzazione, tendono a ri-cristallizzarsi lentamente (retrogradazione). Questo espelle acqua dal gel (sin\u00e9resi), aumenta opacit\u00e0 e rigidit\u00e0. \u00c8 lo stesso processo che rende il pane raffermo.',
    famiglie_rischio: ['POLISACCARIDE_NEUTRO'],
    ingredienti_rischio: ['amido_mais','amido_patata','amido_tapioca'],
    condizioni: ['base amido con alto amilosio (mais)','conservazione a bassa umidit\u00e0'],
    soluzioni: [
        { nome: 'Pi\u00f9 plastificante', desc: 'Glicerina 20-30% rallenta la cristallizzazione', pro: 'Efficace, standard', con: 'Pu\u00f2 diventare appiccicoso', efficacia: 2, diff: 'Facile', link: 'appiccicoso' },
        { nome: 'Amido waxy (ceroso)', desc: 'Usare amidi ad alta amilopectina se disponibili', pro: 'Quasi zero retrogradazione', con: 'Meno reperibile, film pi\u00f9 deboli', efficacia: 3, diff: 'Medio' },
        { nome: 'Ambiente umido controllato', desc: 'Conservare a 50-60% RH, non troppo secco', pro: 'Rallenta il processo', con: 'Non elimina, solo rallenta', efficacia: 1, diff: 'Facile' },
        { nome: 'Documentare l\'evoluzione', desc: 'Testare flessibilit\u00e0 e trasparenza a 1, 7, 14, 28 giorni', pro: 'Valore didattico, nessun intervento', con: 'Il materiale cambia comunque', efficacia: 0, diff: 'Facile' },
    ],
    studenti: [],
    nota_sci: 'Sequenza retrogradazione: mais (alto amilosio, pi\u00f9 rapida) > patata (intermedia) > tapioca (basso amilosio, pi\u00f9 lenta). Esperimento didattico: far misurare agli studenti la flessibilit\u00e0 dello stesso campione a 1, 7, 14, 28 giorni \u2014 visualizzano il fenomeno direttamente.',
},
{
    id: 'sineresi', gruppo: 'stabilita', iconLabel: 'P15',
    titolo: 'Sin\u00e9resi (il gel "piange")',
    sottotitolo: 'Liquido trasparente che essuda dalla superficie',
    gravita: 2, risolvibilita: 2,
    sintomo: 'Liquido trasparente che essuda dalla superficie del gel, il campione \u00e8 circondato da una pozza d\'acqua.',
    causa: 'La rete del gel si contrae espellendo acqua intrappolata. Comune in gel di agar e amido. Innescata da retrogradazione, sbalzi di temperatura o invecchiamento.',
    famiglie_rischio: ['POLISACCARIDE_NEUTRO'],
    ingredienti_rischio: ['agar','amido_mais','amido_patata'],
    condizioni: ['gel conservati a lungo','cicli caldo/freddo','alta concentrazione di matrice'],
    soluzioni: [
        { nome: 'Temperatura costante', desc: 'Evitare cicli caldo/freddo durante conservazione', pro: 'Previene contrazioni della rete', con: 'Non sempre possibile', efficacia: 2, diff: 'Facile' },
        { nome: 'Ridurre concentrazione', desc: 'Gel meno concentrato = meno acqua espellibile', pro: 'Meno sin\u00e9resi', con: 'Gel pi\u00f9 debole', efficacia: 2, diff: 'Facile' },
        { nome: 'Cariche assorbenti', desc: 'Amido o farine assorbono l\'acqua liberata', pro: 'Mascherano il fenomeno', con: 'Opacizzano il gel', efficacia: 2, diff: 'Facile' },
        { nome: 'Essiccare', desc: 'Se il prodotto finale \u00e8 un film secco, la sin\u00e9resi avviene durante essiccazione', pro: 'Il fenomeno \u00e8 parte del processo', con: 'Non applicabile a gel finali', efficacia: 3, diff: 'Facile' },
    ],
    studenti: [],
},
// -- GRUPPO 6: COLTURE --
{
    id: 'micelio_no_crescita', gruppo: 'colture', iconLabel: 'P16',
    titolo: 'Micelio non cresce',
    sottotitolo: 'Substrato invariato dopo giorni',
    gravita: 5, risolvibilita: 3,
    sintomo: 'Nessuna muffa bianca visibile sul substrato dopo 5-7 giorni. Substrato invariato o con colori sospetti.',
    causa: 'Condizioni ambientali inadatte, contaminazione da competitori, o spawn (inoculo) non vitale.',
    famiglie_rischio: ['COLTURA'],
    ingredienti_rischio: ['micelio'],
    condizioni: ['coltura biologica'],
    is_checklist: true,
    checklist: [
        'Substrato sterile? (pastorizzato 80-100\u00b0C per 1h)',
        'Temperatura 20-25\u00b0C? (sotto 18\u00b0C quasi fermo, sopra 28\u00b0C stress)',
        'Spawn fresco e vitale? (bianco e attivo, non secco o giallo)',
        'Umidit\u00e0 corretta? (umido ma non fradicio \u2014 test: stringere, poche gocce)',
        'Contaminanti visibili? (verde/nero/arancione \u2192 buttare e ricominciare)',
    ],
    soluzioni: [],
    studenti: [],
},
{
    id: 'scoby_no_forma', gruppo: 'colture', iconLabel: 'P17',
    titolo: 'SCOBY non si forma',
    sottotitolo: 'Nessuna pellicola dopo 1-2 settimane',
    gravita: 4, risolvibilita: 3,
    sintomo: 'Nessuna pellicola visibile in superficie dopo 1-2 settimane di fermentazione.',
    causa: 'Batteri uccisi dal calore, mancanza di nutrienti, condizioni ambientali inadatte.',
    famiglie_rischio: ['COLTURA'],
    ingredienti_rischio: ['scoby'],
    condizioni: ['coltura biologica'],
    is_checklist: true,
    checklist: [
        'T\u00e8 a temperatura ambiente quando aggiunto lo SCOBY? (>40\u00b0C uccide i batteri)',
        'Zucchero sufficiente? (50-100g per litro)',
        'Contenitore largo? (serve SUPERFICIE, non profondit\u00e0)',
        'Temperatura 22-28\u00b0C?',
        'Coperto con tessuto traspirante? (serve ossigeno, no insetti)',
    ],
    soluzioni: [],
    studenti: [],
},
{
    id: 'contaminazione', gruppo: 'colture', iconLabel: 'P18',
    titolo: 'Contaminazione colture',
    sottotitolo: 'Colori diversi da bianco (micelio) o beige (SCOBY)',
    gravita: 5, risolvibilita: 1,
    sintomo: 'Macchie di colore diverso dal previsto: verdi, nere, arancioni, rosa sulla coltura.',
    causa: 'Sterilizzazione insufficiente del substrato o contaminazione ambientale (spore nell\'aria).',
    famiglie_rischio: ['COLTURA'],
    ingredienti_rischio: ['micelio','scoby'],
    condizioni: ['coltura biologica'],
    is_color_guide: true,
    color_guide: [
        { col: 'Verde/blu', stab: 'STOP', problema: 'Trichoderma o Penicillium', nota: 'Comune, aggressivo \u2192 buttare' },
        { col: 'Nero', stab: 'STOP!', problema: 'Aspergillus \u2014 pericoloso', nota: 'Buttare con precauzione, guanti' },
        { col: 'Arancione/rosa', stab: 'STOP', problema: 'Neurospora \u2014 molto contagioso', nota: 'Isolare immediatamente e buttare' },
        { col: 'Giallo su micelio', stab: '?', problema: 'Possibile metabolita del micelio', nota: 'Non sempre patogeno, monitorare' },
        { col: 'Bianco cotonoso', stab: '?', problema: 'Potrebbe essere il vostro micelio... o no', nota: 'Confrontare con foto di riferimento' },
    ],
    soluzioni: [
        { nome: 'Prevenzione: sterilizzazione', desc: 'Pastorizzare substrato a 80-100\u00b0C per almeno 1h', pro: 'Elimina competitori', con: 'Serve attrezzatura', efficacia: 3, diff: 'Medio' },
        { nome: 'Lavorare in ambiente pulito', desc: 'Pulire superfici con alcool 70%, chiudere finestre', pro: 'Riduce contaminazione aerea', con: 'Non garantisce sterilit\u00e0', efficacia: 2, diff: 'Facile' },
        { nome: 'Se contaminato: buttare', desc: 'Non tentare di salvare una coltura contaminata', pro: 'Evita propagazione', con: 'Ricominciare da capo', efficacia: 3, diff: 'Facile' },
    ],
    studenti: [],
    nota_sci: 'La contaminazione nelle colture biologiche \u00e8 la norma, non l\'eccezione. I laboratori professionali lavorano sotto cappa a flusso laminare. In un laboratorio didattico, prevedere un tasso di successo del 50-60% e preparare sempre colture di backup.',
},
// -- GRUPPO 7: AMBIENTE --
{
    id: 'calore', gruppo: 'ambiente', iconLabel: 'P19',
    titolo: 'Sensibilit\u00e0 al calore',
    sottotitolo: 'Si ammorbidisce, deforma o fonde al caldo',
    gravita: 3, risolvibilita: 3,
    sintomo: 'Il materiale si ammorbidisce, deforma o fonde quando esposto al sole diretto o in ambienti caldi d\'estate.',
    causa: 'La gelatina fonde a 25-30\u00b0C: i materiali a base di gelatina sono instabili in ambienti caldi. Anche i film con molta glicerina possono ammorbidirsi (Tg bassa).',
    famiglie_rischio: ['PROTEINA','PLASTIFICANTE'],
    ingredienti_rischio: ['gelatina','glicerina'],
    condizioni: ['base gelatina','plastificante >30%','esposizione al sole'],
    soluzioni: [
        { nome: 'Reticolazione con tannini', desc: 'Bagno o aggiunta di tannini 3-5% nella miscela', pro: 'Alza la T di fusione di 20-30\u00b0C', con: 'Scurisce il materiale, irreversibile', efficacia: 3, diff: 'Medio' },
        { nome: 'Cambiare matrice', desc: 'Agar fonde a 85\u00b0C vs 30\u00b0C della gelatina', pro: 'Soluzione radicale al problema', con: 'Propriet\u00e0 completamente diverse', efficacia: 3, diff: 'Facile' },
        { nome: 'Conservazione controllata', desc: 'Frigo o ambiente climatizzato', pro: 'Semplice', con: 'Non sempre possibile per oggetti esposti', efficacia: 2, diff: 'Facile' },
        { nome: 'Disidratazione completa', desc: 'Film molto secco \u00e8 pi\u00f9 stabile al calore', pro: 'Alza la Tg', con: 'Pi\u00f9 fragile', efficacia: 2, diff: 'Facile', link: 'fragile' },
    ],
    studenti: [],
    nota_sci: 'La reticolazione con tannini vegetali \u00e8 il metodo pi\u00f9 accessibile per stabilizzare la gelatina. \u00c8 lo stesso principio della concia del cuoio. La genipin (estratta dalla gardenia) \u00e8 un\'alternativa non tossica che produce un bel colore blu, ma \u00e8 costosa.',
},
{
    id: 'troppo_rigido', gruppo: 'ambiente', iconLabel: 'P20',
    titolo: 'Troppo rigido (volevo flessibile)',
    sottotitolo: 'Duro, non si piega, non era il risultato voluto',
    gravita: 2, risolvibilita: 4,
    sintomo: 'Il materiale \u00e8 pi\u00f9 rigido del desiderato, non si piega come previsto nel progetto.',
    causa: 'Matrice intrinsecamente rigida (agar, caseina), plastificante insufficiente, o essiccazione eccessiva che ha rimosso l\'umidit\u00e0 residua.',
    famiglie_rischio: ['POLISACCARIDE_NEUTRO','PROTEINA'],
    ingredienti_rischio: ['agar','caseina','amido_mais'],
    condizioni: ['plastificante <10%','essiccazione troppo spinta','matrice rigida pura'],
    soluzioni: [
        { nome: 'Pi\u00f9 glicerina', desc: 'Aumentare plastificante al 20-30% sul peso matrice', pro: 'Standard, prevedibile', con: 'Pu\u00f2 diventare appiccicoso', efficacia: 3, diff: 'Facile', link: 'appiccicoso' },
        { nome: 'Cambiare matrice', desc: 'Gelatina \u00e8 pi\u00f9 flessibile di agar/caseina', pro: 'Flessibilit\u00e0 intrinseca', con: 'Cambia tutto il materiale', efficacia: 3, diff: 'Facile' },
        { nome: 'Film pi\u00f9 sottile', desc: 'Sotto 0.5mm anche materiali rigidi si piegano', pro: 'Flessibilit\u00e0 geometrica, non chimica', con: 'Meno resistente', efficacia: 2, diff: 'Facile' },
        { nome: 'Blend di matrici', desc: 'Gelatina + amido: combina flessibilit\u00e0 proteica + struttura', pro: 'Propriet\u00e0 intermedie regolabili', con: 'Pi\u00f9 complesso da bilanciare', efficacia: 3, diff: 'Medio' },
    ],
    studenti: [],
},
];

// ── CONSTANTS ──
const TABD_FAMILY_COLORS = {
    'PROTEINA': '#e74c3c', 'POLISACCARIDE_NEUTRO': '#3498db',
    'POLISACCARIDE_ANIONICO': '#9b59b6', 'POLICATIONE': '#1abc9c',
    'PLASTIFICANTE': '#f39c12', 'SALE_RETICOLANTE': '#e67e22',
    'RESINA_LIPIDE': '#27ae60', 'COLORANTE': '#e91e63',
    'CARICA': '#795548', 'ADDITIVO': '#607d8b',
    'COLTURA': '#00bcd4', 'EMULSIONANTE': '#ff7043', 'ACIDO': '#607d8b',
};
const TABD_FAMILY_LABELS = {
    'PROTEINA': 'Proteina', 'POLISACCARIDE_NEUTRO': 'Polisacc. Neutro',
    'POLISACCARIDE_ANIONICO': 'Polisacc. Anionico', 'POLICATIONE': 'Polisaccaride cationico',
    'PLASTIFICANTE': 'Plastificante', 'SALE_RETICOLANTE': 'Sale Reticolante',
    'RESINA_LIPIDE': 'Resine / Lipidi', 'COLORANTE': 'Colorante',
    'CARICA': 'Carica', 'ADDITIVO': 'Additivo',
    'COLTURA': 'Coltura', 'EMULSIONANTE': 'Emulsionante', 'ACIDO': 'Acido',
};
const GROUP_NAMES = {
    essiccazione: 'Essiccazione', meccanica: 'Meccanica', biologici: 'Biologici',
    processo: 'Processo', stabilita: 'Stabilit\u00e0 nel tempo',
    colture: 'Colture', ambiente: 'Sensibilit\u00e0 ambientale',
};
const GROUP_ICONS = {
    essiccazione: { cls: 'g-ess', label: 'Es' }, meccanica: { cls: 'g-mec', label: 'Mc' },
    biologici: { cls: 'g-bio', label: 'Bi' }, processo: { cls: 'g-pro', label: 'Pr' },
    stabilita: { cls: 'g-sta', label: 'St' }, colture: { cls: 'g-col', label: 'Co' },
    ambiente: { cls: 'g-amb', label: 'Am' },
};
const GROUP_COLORS = {
    essiccazione: '#e65100', meccanica: '#c62828', biologici: '#2e7d32',
    processo: '#1565c0', stabilita: '#6a1b9a', colture: '#00695c', ambiente: '#f57f17',
};
const SOLUTION_INGREDIENTS = {
    crepe: [{ match: 'plastificante', ingredienti: ['glicerina','sorbitolo'] }],
    appiccicoso: [
        { match: 'sorbitolo', ingredienti: ['sorbitolo'] },
        { match: 'Reticolazione', ingredienti: ['cacl2','tannini'] },
    ],
    fragile: [
        { match: 'plastificante', ingredienti: ['glicerina','sorbitolo'] },
        { match: 'fibre', ingredienti: ['fibre_lino','fibre_cotone'] },
    ],
    schiuma_collassa: [{ match: 'Reticolazione immediata', ingredienti: ['cacl2'] }],
    delaminazione: [{ match: 'Emulsionante', ingredienti: ['lecitina'] }],
    muffe: [
        { match: 'citrico', ingredienti: ['acido_citrico'] },
        { match: 'Curcuma', ingredienti: ['curcuma'] },
        { match: 'Chitosano', ingredienti: ['chitosano'] },
    ],
    grumi: [{ match: 'Emulsionante', ingredienti: ['lecitina'] }],
    retrogradazione: [{ match: 'plastificante', ingredienti: ['glicerina'] }],
    calore: [{ match: 'tannini', ingredienti: ['tannini'] }],
    troppo_rigido: [{ match: 'glicerina', ingredienti: ['glicerina'] }],
};
const MITIGATIONS = {
    calore: [
        { ingredienti: ['tannini'], score: -6, reason: 'Tannini reticolano la gelatina, +20-30C' },
        { ingredienti: ['allume','borace'], score: -3, reason: 'Reticolazione parziale' },
    ],
    appiccicoso: [
        { ingredienti: ['sorbitolo'], score: -3, reason: 'Sorbitolo meno igroscopico della glicerina' },
        { ingredienti: ['cacl2','tannini','allume','borace'], score: -4, reason: 'Reticolazione stabilizza la superficie' },
    ],
    fragile: [
        { famiglie: ['PLASTIFICANTE'], score: -6, reason: 'Plastificante presente' },
        { ingredienti: ['fibre_lino','fibre_cotone','cellulosa_carta'], score: -3, reason: 'Fibre rinforzano senza irrigidire' },
    ],
    crepe: [
        { famiglie: ['PLASTIFICANTE'], score: -5, reason: 'Plastificante riduce tensioni interne' },
        { ingredienti: ['fibre_lino','fibre_cotone','cellulosa_carta'], score: -2, reason: 'Fibre distribuiscono le tensioni' },
    ],
    muffe: [
        { ingredienti: ['chitosano'], score: -5, reason: 'Chitosano \u00e8 antimicrobico naturale' },
        { ingredienti: ['acido_citrico'], score: -3, reason: 'Abbassa pH sotto 4.5' },
        { ingredienti: ['curcuma'], score: -2, reason: 'Antimicotico naturale' },
    ],
    delaminazione: [{ ingredienti: ['lecitina'], score: -3, reason: 'Emulsionante migliora adesione' }],
    troppo_rigido: [{ famiglie: ['PLASTIFICANTE'], score: -6, reason: 'Plastificante presente' }],
    ritiro: [
        { famiglie: ['CARICA'], score: -3, reason: 'Cariche riducono ritiro 30-40%' },
        { famiglie: ['PLASTIFICANTE'], score: -2, reason: 'Plastificante riduce tensioni' },
    ],
    schiuma_collassa: [{ ingredienti: ['cacl2'], score: -3, reason: 'Reticolazione fissa la struttura' }],
    grumi: [{ ingredienti: ['lecitina'], score: -3, reason: 'Emulsionante stabilizza la miscela' }],
    retrogradazione: [{ famiglie: ['PLASTIFICANTE'], score: -2, reason: 'Plastificante rallenta ri-cristallizzazione' }],
    odore: [
        { ingredienti: ['acido_citrico'], score: -3, reason: 'Acido citrico al posto dell\'aceto' },
        { ingredienti: ['tannini'], score: -2, reason: 'Tannini fissano le proteine' },
    ],
};

// --- LAB_CONSTANTS ---
// Coefficienti calibrati, interazioni, tecniche per pagina Laboratorio
// v11.1 — migrato da lab.html inline
// COSTANTI CALIBRATE (feb 2026, 34 materiali reali)
// =============================================
const FAMILY_PROP_RATES = {
    PROTEINA:               { trasp: 0.743, flex: 0.443, h2o: 0.272, mecc: 0.529 },
    POLISACCARIDE_NEUTRO:   { trasp: 0.871, flex: 0.243, h2o: 0.372, mecc: 0.600 },
    POLISACCARIDE_ANIONICO: { trasp: 1.100, flex: 0.428, h2o: 0.385, mecc: 0.685 },
    POLICATIONE:            { trasp: 0.715, flex: 0.357, h2o: 0.458, mecc: 0.886 },
    COLTURA:                { trasp: 0.429, flex: 0.714, h2o: 0.357, mecc: 0.786 },
    PLASTIFICANTE:          { trasp:-0.050, flex: 2.100, h2o: 0.400, mecc:-0.300 },
    RESINA_LIPIDE:                 { trasp: 1.000, flex: 1.300, h2o: 2.300, mecc: 3.000 },
    CARICA:                 { trasp:-1.867, flex:-0.334, h2o: 0.200, mecc: 1.933 },
    SALE_RETICOLANTE:       { trasp:-3.000, flex:-5.000, h2o: 7.333, mecc: 5.334 },
    COLORANTE:              { trasp:-17.00, flex: 0.500, h2o: 5.000, mecc: 3.500 },
    ACIDO:                  { trasp: 0.000, flex: 0.000, h2o: 0.000, mecc: 2.500 },
    ADDITIVO:               { trasp:-0.200, flex: 0.200, h2o: 3.800, mecc: 1.400 },
    EMULSIONANTE:           { trasp: 1.000, flex: 2.000, h2o: 0.000, mecc: 0.000 }
};

const FAMILY_INTERACTIONS = {
    'POLISACCARIDE_ANIONICO+SALE_RETICOLANTE': { trasp: -5, flex: -10, h2o: +25, mecc: +20, note: 'Gel ionico: resistenza H2O e meccanica aumentate' },
    'PROTEINA+SALE_RETICOLANTE': { trasp: -5, flex: -5, h2o: +20, mecc: +15, note: 'Reticolazione proteica: migliora resistenze' },
    'PROTEINA+POLISACCARIDE_NEUTRO': { trasp: 0, flex: +5, h2o: +5, mecc: +10, note: 'Ibrido proteina-polisaccaride: struttura rinforzata' },
    'PROTEINA+POLISACCARIDE_ANIONICO': { trasp: 0, flex: +5, h2o: +5, mecc: +10, note: 'Ibrido proteina-polisaccaride: struttura rinforzata' },
    'CARICA+CARICA': { trasp: -10, flex: -15, h2o: 0, mecc: +5, note: 'Troppe cariche: materiale friabile' },
    'POLISACCARIDE_NEUTRO+PLASTIFICANTE': { trasp: 0, flex: +10, h2o: 0, mecc: 0, note: 'Plastificante bilancia rigidita polisaccaride' },
    'COLORANTE+PROTEINA': { trasp: 0, flex: 0, h2o: +5, mecc: +5, note: 'Coloranti naturali interagiscono con proteine' },
    'POLICATIONE+POLISACCARIDE_ANIONICO': { trasp: -10, flex: -5, h2o: +15, mecc: +15, note: 'Complesso polielettrolitico: molto resistente' }
};

const TAVOLO_LIMITS = {
    MATRICI: { max: 2, warn: 'Max 2 matrici consigliate per miscele stabili' },
    PLASTIFICANTE: { max: 1, warn: 'Un solo plastificante e sufficiente' },
    SALE_RETICOLANTE: { max: 1, warn: 'Un solo reticolante per volta (meccanismi diversi)' },
    CARICA: { max: 2, warn: 'Max 2 cariche per evitare miscele friabili' },
    COLORANTE: { max: 1, warn: 'Un solo colorante per risultati prevedibili' },
    RESINA_LIPIDE: { max: 1, warn: 'Un solo lipide per coating uniforme' }
};

const FAMILY_DOSE_RULES = {
    PROTEINA: { min:5, max:80, step:1 }, POLISACCARIDE_NEUTRO: { min:5, max:80, step:1 },
    POLISACCARIDE_ANIONICO: { min:5, max:80, step:1 }, POLICATIONE: { min:5, max:80, step:1 },
    COLTURA: { min:5, max:80, step:1 }, PLASTIFICANTE: { min:1, max:50, step:1 },
    RESINA_LIPIDE: { min:1, max:30, step:1 }, CARICA: { min:1, max:40, step:1 },
    SALE_RETICOLANTE: { min:1, max:10, step:1 }, COLORANTE: { min:1, max:10, step:1 },
    ACIDO: { min:1, max:10, step:1 }, ADDITIVO: { min:1, max:15, step:1 },
    EMULSIONANTE: { min:1, max:15, step:1 }
};

const TECNICA_MODIFIERS = {
    colata:          { trasp:0,   flex:0,   h2o:0,   mecc:0,   label:'Colata e asciugatura', descTipo:'',
        hint:'Tecnica base: versa la miscela in uno stampo e lascia asciugare.',
        descNota:'Colata in stampo piano, asciugatura 24-72h a temperatura ambiente. Spessore: 2-5mm film, 5-15mm lastre.' },
    reticolazione:   { trasp:-5,  flex:-10, h2o:25,  mecc:15,  label:'Reticolazione ionica', descTipo:' reticolato',
        hint:'Bagno in soluzione salina (CaCl2, borace). Piu resistente ad acqua e meccanicamente, meno flessibile.',
        descNota:'Immersione in bagno CaCl2 2-5% o borace 4%. Tempo: 1-5min gusci, 15-30min gel solidi. Risciacquare dopo.' },
    compressione:    { trasp:-5,  flex:-15, h2o:10,  mecc:30,  label:'Compressione a caldo', descTipo:' pressato',
        hint:'Pressatura con calore (50-120C). Ideale per caseina, amidi. Materiali densi e rigidi.',
        descNota:'Compressione in pressa o morsa a 50-120C per 15-60 min. Espelle acqua, compatta struttura.' },
    aerazione:       { trasp:-40, flex:15,  h2o:-10, mecc:-25, label:'Aerazione / Schiuma', descTipo:' aerato',
        hint:'Montatura a frusta o sifone. Poroso, leggero, opaco. Fragile ma flessibile e isolante.',
        descNota:'Montatura meccanica (frusta, planetaria) o chimica (sifone, bicarbonato). Stabilizzare rapidamente.' },
    fermentazione:   { trasp:-20, flex:20,  h2o:15,  mecc:10,  label:'Fermentazione / Coltura', descTipo:' fermentato',
        hint:'Crescita biologica (SCOBY, micelio). Tempi lunghi, proprieta emergenti.',
        descNota:'Coltura biologica 20-30C. SCOBY: 1-3 settimane. Micelio: 1-4 settimane su substrato lignocellulosico.' },
    stratificazione: { trasp:-5,  flex:-5,  h2o:10,  mecc:5,   label:'Stratificazione / Laminazione', descTipo:' stratificato',
        hint:'Strati sovrapposti di materiali diversi. Ogni strato contribuisce proprieta specifiche.',
        descNota:'Sovrapporre strati alternati. Asciugare ogni strato prima del successivo.' }
};

const TECNICA_REQUIRES = {
    colata: { always: true },
    reticolazione: { famiglie:['SALE_RETICOLANTE','POLISACCARIDE_ANIONICO','PROTEINA'], reason:'Serve matrice reticolabile o sale reticolante' },
    compressione: { famiglie:['PROTEINA','POLISACCARIDE_NEUTRO','CARICA'], reason:'Ideale per caseina, amidi o compositi con cariche' },
    aerazione: { ingredienti:['albumina','aquafaba','gelatina'], famiglie:['EMULSIONANTE'], reason:'Serve agente schiumogeno' },
    fermentazione: { famiglie:['COLTURA'], reason:'Serve una coltura biologica (SCOBY, micelio)' },
    stratificazione: { minIngredienti:2, reason:'Servono almeno 2 ingredienti per creare strati' }
};

// =============================================
// REGOLE_CHIMICHE — Messaggi chimici per Laboratorio
// Migrati da lab.html hardcoded → DB v11.1, 14 feb 2026
// Il motore in lab.html legge queste regole, non contiene conoscenza chimica.
// =============================================

const REGOLE_CHIMICHE = {
    _meta: {
        versione: '1.0',
        data: '2026-02-14',
        totale_regole: 45,
        categorie: 'limits, smart, descrizione, dosaggio, avvertenze'
    },

    // ===== A. LIMITS — composizione (calculateProperties) =====
    limits: [
        {
            id: 'L1',
            condizione: { prop_sotto: { resistH2O: 30 }, famiglie_assenti: ['RESINA_LIPIDE'] },
            msg: { problem: 'Resistenza acqua scarsa', solution: 'Aggiungi lipide (cera, gommalacca) o reticolante per stabilizzare', type: 'warn' }
        },
        {
            id: 'L2',
            condizione: { prop_sotto: { flessibilita: 40 }, famiglie_assenti: ['PLASTIFICANTE'], famiglie_presenti_any: ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'] },
            msg: { problem: 'Materiale fragile', solution: 'Aggiungi plastificante', type: 'warn' }
        },
        {
            id: 'L3',
            condizione: { conteggio_matrici_sopra: 2 },
            msg: { problem: '{n} matrici sul tavolo', solution: 'Max 2 consigliate per stabilita', type: 'alert' }
        },
        {
            id: 'L4',
            condizione: { famiglia_conteggio_sopra: { PLASTIFICANTE: 1 } },
            msg: { problem: 'Piu plastificanti', solution: 'Uno e sufficiente. Glicerina + sorbitolo insieme e raro ma non impossibile (profili igroscopici diversi)', type: 'info' }
        },
        {
            id: 'L5',
            condizione: { famiglia_conteggio_sopra: { SALE_RETICOLANTE: 1 } },
            msg: { problem: 'Piu reticolanti', solution: 'Meccanismi diversi possono confliggere. Eccezione: tannini + CaCl\u2082 funzionano su blend polimero/proteina', type: 'alert' }
        },
        {
            id: 'L6',
            condizione: { famiglia_conteggio_sopra: { CARICA: 2 } },
            msg: { problem: '{n} cariche', solution: 'Max 2 per evitare friabilita', type: 'warn' }
        },
        {
            id: 'L7',
            condizione: { famiglia_conteggio_sopra: { COLORANTE: 1 } },
            msg: { problem: 'Piu coloranti', solution: 'Risultato cromatico imprevedibile', type: 'info' }
        },
        {
            id: 'L8',
            condizione: { famiglia_conteggio_sopra: { RESINA_LIPIDE: 1 } },
            msg: { problem: 'Piu lipidi', solution: 'Coating disomogeneo possibile', type: 'info' }
        },
        {
            id: 'L9',
            condizione: { famiglie_presenti: ['SALE_RETICOLANTE'], famiglie_assenti_all: ['POLISACCARIDE_ANIONICO','PROTEINA','POLICATIONE','COLTURA'] },
            msg: { problem: 'Reticolante senza matrice compatibile', solution: 'I reticolanti funzionano con proteine (tannini, borace), polisaccaridi anionici (CaCl\u2082), chitosano (tannini) o colture (tannini conciano la cellulosa)', type: 'warn' }
        }
    ],

    // ===== B. SMART MESSAGES — vincoli chimici strutturali (getSmartMessages) =====
    smart: [
        {
            id: 'S1',
            condizione: { famiglie_presenti_any: ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE'], famiglie_presenti: ['PLASTIFICANTE'], famiglie_assenti: ['RESINA_LIPIDE','SALE_RETICOLANTE','COLTURA'] },
            type: 'structural',
            testo: 'Sensibilit\u00e0 all\'acqua intrinseca. Matrice idrofila + plastificante: solubile in acqua per natura chimica. I biopolimeri formano legami H con l\'acqua, i plastificanti (glicerina, sorbitolo) sono igroscopici. Non \u00e8 un problema di dosaggio. Per migliorare: aggiungere lipide come coating esterno, o reticolante per stabilizzare la rete.'
        },
        {
            id: 'S2',
            condizione: { famiglie_presenti_any: ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE'], famiglie_assenti: ['PLASTIFICANTE','RESINA_LIPIDE','SALE_RETICOLANTE','COLTURA'] },
            type: 'structural',
            testo: 'Sensibilit\u00e0 all\'acqua. Le matrici biopolimeriche sono intrinsecamente idrofile \u2014 si gonfiano o dissolvono a contatto con acqua. Per impermeabilizzare servono lipidi (coating) o reticolazione (CaCl\u2082 per alginato, tannini per proteine).'
        },
        {
            id: 'S3',
            condizione: { ingredienti_presenti_nome: ['gelatina'], famiglie_presenti: ['PLASTIFICANTE'], famiglie_assenti: ['SALE_RETICOLANTE'] },
            type: 'structural',
            testo: 'Termolabilit\u00e0 della gelatina. Fonde a 25-30\u00b0C, e il plastificante abbassa ulteriormente la Tg. Questo materiale si ammorbidisce al sole o in estate. Limite chimico: per stabilizzare servono tannini o altri reticolanti (che per\u00f2 scuriscono il materiale).'
        },
        {
            id: 'S4',
            condizione: { ingredienti_presenti_nome: ['caseina'], famiglie_presenti: ['PLASTIFICANTE'], famiglie_assenti: ['SALE_RETICOLANTE'] },
            type: 'structural',
            testo: 'Caseina senza reticolante. La caseina plastificata resta fragile e sensibile all\'umidit\u00e0. Storicamente (Galalite, 1897) diventa "plastica" solo con reticolazione (formalina, borace, allume) che blocca le catene e rende il materiale rigido e idrorepellente.'
        },
        {
            id: 'S5',
            condizione: { famiglie_presenti: ['CARICA'] },
            type: 'structural',
            testo: 'Opacit\u00e0 da cariche. Le particelle solide (fibre, gusci, polveri) diffondono la luce \u2014 il materiale sar\u00e0 opaco indipendentemente dal dosaggio. Fenomeno fisico (scattering). Trasparenza e cariche sono incompatibili.'
        },
        {
            id: 'S6',
            condizione: { famiglie_presenti: ['RESINA_LIPIDE'], famiglie_presenti_any: ['PROTEINA','POLISACCARIDE_NEUTRO','POLISACCARIDE_ANIONICO','POLICATIONE','COLTURA'], famiglie_assenti: ['EMULSIONANTE'] },
            type: 'structural',
            testo: 'Lipide in matrice acquosa senza emulsionante. Acqua e grassi/cere sono immiscibili: il lipide former\u00e0 gocce o strati separati, producendo torbidit\u00e0. Per un coating funzionale: applicare il lipide come strato esterno. Per una miscela: aggiungere un emulsionante (lecitina).'
        },
        {
            id: 'S7',
            condizione: { ingredienti_presenti_nome: ['alginato'], famiglie_assenti: ['SALE_RETICOLANTE'] },
            type: 'structural',
            testo: 'Alginato senza reticolante. L\'alginato in acqua d\u00e0 una soluzione viscosa, non un gel. Per gelificare serve un bagno in CaCl\u2082 (ioni Ca\u00b2\u207a creano legami ionici tra le catene). Senza CaCl\u2082 non si ottiene un materiale solido.'
        },
        {
            id: 'S8',
            condizione: { ingredienti_presenti_nome: ['agar'], famiglie_presenti: ['PLASTIFICANTE'] },
            type: 'info',
            testo: 'Agar + plastificante: l\'agar forma gel rigidi e fragili per natura (isteresi termica: gelifica a ~35\u00b0C, fonde a ~85\u00b0C). Il plastificante riduce la fragilit\u00e0 ma non raggiunge la flessibilit\u00e0 della gelatina. Per flessibilit\u00e0 maggiore, considerare blend agar+gelatina.'
        },
        {
            id: 'S9',
            condizione: { ingredienti_presenti_nome: ['chitosano'], famiglie_assenti: ['PLASTIFICANTE'] },
            type: 'info',
            testo: 'Chitosano puro. Forma film rigidi, parzialmente idrofobi e antimicrobici. Non richiede plastificante per essere funzionale ma sar\u00e0 poco flessibile. Per flessibilit\u00e0 aggiungere glicerina 15-25%.'
        }
    ],

    // ===== C. DOSAGGIO — regole su percentuali (getSmartMessages) =====
    dosaggio: {
        totale: [
            { id: 'D1', soglia_min: 130, soglia_max: 9999, type: 'warn',
              testo: 'Stai usando {total}g di ingredienti secchi su una base pensata per 100g. Le proporzioni sono cambiate molto. In laboratorio: parti da piccole quantita (10-20g totali) mantenendo i rapporti della colonna %.' },
            { id: 'D2', soglia_min: 105, soglia_max: 130, type: 'info',
              testo: 'Totale {total}g invece di 100g. La colonna % mostra le proporzioni reali. Ricorda di scalare anche l\'acqua: gelatina 1:5\u201310, agar 1:50\u2013100, amido 1:5\u20138 sul peso secco.' },
            { id: 'D3', soglia_min: 0, soglia_max: 70, type: 'warn',
              testo: 'Solo {total}g di ingredienti secchi. La matrice potrebbe non bastare a dare struttura. Considera di aumentare l\'ingrediente base.' },
            { id: 'D4', soglia_min: 70, soglia_max: 95, type: 'info',
              testo: 'Totale {total}g. La miscela risultera piu diluita. La colonna % mostra le proporzioni effettive.' }
        ],
        percentuali: [
            { id: 'D5', famiglia: 'PLASTIFICANTE', soglia: 45, type: 'warn',
              testo: 'Plastificante al {pct}% del totale. Troppo: il materiale potrebbe non asciugare, restare appiccicoso o non mantenere la forma.' },
            { id: 'D6', famiglia: 'PLASTIFICANTE', soglia: 35, soglia_max: 45, type: 'info',
              testo: 'Plastificante al {pct}% del totale. Il materiale sara molto morbido, quasi gommoso. Ottimo per film flessibili, rischioso per oggetti rigidi.' },
            { id: 'D7', famiglia: 'MATRICE', soglia_max: 30, min_ingredienti: 2, type: 'warn',
              testo: 'La matrice e solo il {pct}% del totale. Rischia di non formarsi una struttura solida \u2013 meglio almeno il 40-50%.' },
            { id: 'D8', famiglia: 'SALE_RETICOLANTE', soglia: 7, type: 'warn',
              testo: 'Reticolante al {pct}% del totale. L\'eccesso puo rendere il materiale fragile, opaco e difficile da lavorare.' },
            { id: 'D9', famiglia: 'CARICA', soglia: 35, type: 'info',
              testo: 'Cariche al {pct}% del totale. Il materiale sara opaco e rigido. Oltre il 40% rischia di sgretolarsi.' },
            { id: 'D10', famiglia: 'RESINA_LIPIDE', soglia: 25, type: 'info',
              testo: 'Lipidi al {pct}% del totale. Buona barriera all\'acqua, ma la superficie potrebbe risultare unta o cerosa.' },
            { id: 'D11', tipo: 'rapporto_plast_matrice', soglia: 0.6, type: 'info',
              testo: 'Il plastificante e il {pct}% rispetto alla matrice. Di solito non supera il 30-50%. Troppo rende il materiale debole.' }
        ]
    },

    // ===== D. DESCRIZIONE MATERIALE — forma e consistenza (generateMaterialDescription) =====
    descrizione: {
        // Per matrice: array di regole, valutate in ordine. Prima match con ingrediente specifico, poi fallback famiglia.
        per_matrice: {
            PROTEINA: {
                gelatina: {
                    base: 'La gelatina forma un <span class="desc-highlight">gel termoreversibile</span>: si scioglie a caldo (~40C) e solidifica raffreddando. Il risultato e un film elastico e trasparente.',
                    con_plastificante: {
                        glicerina: ' Con glicerina otterrai un film molto morbido, quasi gommoso, che rimane flessibile anche dopo settimane.',
                        _default: ' Il plastificante aumentera la flessibilita del film finale.'
                    },
                    con_reticolante: {
                        tannini: ' I tannini reagiranno con la gelatina creando un effetto "concia" simile al cuoio: piu rigido, piu resistente all\'acqua, colore brunito.',
                        borace: ' Il borace creera legami crociati tra le catene proteiche, rendendo il gel insolubile in acqua e piu rigido. Attenzione: il borace non e food-safe.',
                        allume: ' L\'allume reticolera le proteine migliorando stabilita e resistenza all\'acqua, come nella concia tradizionale.',
                        _ionico: ' <span class="desc-warning">I sali ionici (CaCl\u2082, KCl) non reticolano le proteine</span> \u2014 funzionano con polisaccaridi anionici (alginato, pectina). Considera tannini o borace.',
                        _default: ' Il reticolante rendera il gel meno solubile e piu stabile.'
                    }
                },
                caseina: {
                    base: 'La caseina forma <span class="desc-highlight">plastiche rigide</span> quando acidificata e pressata. Storicamente usata per bottoni, pettini, gioielli. Richiede stagionatura di giorni/settimane per indurire completamente.',
                    con_plastificante: { _default: ' Il plastificante ridurra la fragilita ma anche la durezza finale.' },
                    con_carica: ' Le cariche minerali aumenteranno rigidita e resistenza al graffio.'
                },
                _default: {
                    base: 'Questo materiale sara probabilmente un <span class="desc-highlight">film o gel proteico</span>, con una struttura a rete formata dalle catene proteiche.',
                    con_plastificante: { _default: ' Il plastificante rendera il film piu morbido e pieghevole.' }
                }
            },
            POLISACCARIDE_NEUTRO: {
                agar: {
                    base: 'L\'agar forma <span class="desc-highlight">gel rigidi e fragili</span> con elevata trasparenza. Gelifica a ~35C ma fonde solo a ~85C (isteresi termica). Ottimo per stampi e forme precise.',
                    con_plastificante: { _default: ' Il plastificante e ESSENZIALE per evitare crepe durante l\'essiccazione - senza glicerina l\'agar si frattura facilmente.' },
                    con_fibra: ' Le fibre daranno rinforzo strutturale creando un composito piu resistente agli urti.'
                },
                amido: {
                    base: 'L\'amido gelatinizzato forma <span class="desc-highlight">film opachi e rigidi</span>. La consistenza dipende molto dalla fonte: mais da film piu rigidi, tapioca piu flessibili e trasparenti.',
                    con_plastificante: { _default: ' Senza plastificante sufficiente (almeno 20-30% sul peso dell\'amido) il film sara fragile e si crepa.' },
                    con_carica: ' Le cariche possono creare compositi interessanti tipo "carta minerale".'
                },
                _default: {
                    base: 'La base polisaccaridica neutra formera un <span class="desc-highlight">materiale rigido</span> una volta essiccato, con buona trasparenza ma tendenza alla fragilita.',
                    con_plastificante: { _default: ' Il plastificante e fondamentale per evitare crepe.' }
                }
            },
            POLISACCARIDE_ANIONICO: {
                alginato: {
                    base: 'L\'alginato forma <span class="desc-highlight">gel ionici istantanei</span> a contatto con ioni calcio. Puoi creare sfere, fili, membrane con gelificazione controllata. Ideale per forme 3D complesse.',
                    con_reticolante: {
                        _calcio: ' Con il sale di calcio avrai la classica "sferificazione": il gel si forma dalla superficie verso l\'interno (egg-box model).',
                        _non_calcio: ' <span class="desc-warning">Il reticolante nel carrello non gelifica l\'alginato</span> \u2014 servono ioni Ca\u00b2\u207a (CaCl\u2082 o lattato di calcio) per la reticolazione ionica.',
                        _assente: ' <span class="desc-warning">Senza sale di calcio</span> l\'alginato resta liquido viscoso - serve un reticolante!'
                    }
                },
                pectina: {
                    base: 'La pectina forma <span class="desc-highlight">gel acido-zuccherini</span>. Per gelificare correttamente serve pH basso (acido) e/o zuccheri. Il risultato e un gel morbido ed elastico.',
                    con_acido: ' L\'acido favorira la gelificazione abbassando il pH.',
                    con_plastificante: { _default: ' I plastificanti aumentano flessibilita e riducono fragilita.' },
                    con_reticolante: {
                        _calcio: ' Con il sale di calcio si forma un gel stabile a "scatola di uova" (egg-box): ioni Ca\u00b2\u207a legano le catene di acido galatturonico.',
                        _non_calcio: ' <span class="desc-warning">Questo reticolante non gelifica la pectina</span> \u2014 servono ioni Ca\u00b2\u207a (CaCl\u2082, lattato di calcio).'
                    }
                },
                carragenina: {
                    base: 'La carragenina forma <span class="desc-highlight">gel elastici e trasparenti</span>. Tipo kappa gelifica con K\u207a (KCl), tipo iota con Ca\u00b2\u207a. Il meccanismo e a doppia elica, diverso dall\'egg-box dell\'alginato.',
                    con_reticolante: {
                        kcl: ' Il KCl favorisce la gelificazione della kappa-carragenina tramite formazione di doppia elica stabilizzata dagli ioni K\u207a.',
                        _calcio: ' Il CaCl\u2082 funziona con la iota-carragenina. Con kappa-carragenina e meglio usare KCl.',
                        _non_ionico: ' <span class="desc-warning">Tannini e borace non reticolano la carragenina</span> \u2014 serve KCl (per kappa) o CaCl\u2082 (per iota).'
                    }
                },
                _default: {
                    base: 'I polisaccaridi anionici formano <span class="desc-highlight">gel ionici</span> reagendo con cationi bivalenti (Ca\u00b2\u207a, Mg\u00b2\u207a).',
                    con_reticolante: {
                        _calcio: ' Il sale di calcio creera una struttura stabile a "scatola di uova".',
                        _default: ' Verifica che il reticolante sia compatibile con questo polisaccaride.'
                    }
                }
            },
            POLICATIONE: {
                chitosano: {
                    base: 'Il chitosano forma <span class="desc-highlight">film antimicrobici</span> con proprieta uniche: la carica positiva lo rende naturalmente antibatterico e capace di legarsi a superfici cariche negativamente.',
                    dissoluzione: ' Richiede dissoluzione in acido diluito (aceto, acido citrico) prima dell\'uso.',
                    con_plastificante: { _default: ' Il plastificante migliora notevolmente la flessibilita del film finale.' }
                },
                _default: {
                    base: 'I policationi producono <span class="desc-highlight">film con proprieta antimicrobiche</span> grazie alla carica positiva superficiale.'
                }
            },
            COLTURA: {
                _any: {
                    base: 'Le colture microbiche producono <span class="desc-highlight">materiali "cresciuti" biologicamente</span>. SCOBY: pellicola di cellulosa batterica, simile a pelle/cuoio, richiede 1-3 settimane di coltura. Micelio: struttura spugnosa o compatta a seconda del substrato e compressione. Questi materiali hanno texture organiche uniche impossibili da replicare sinteticamente.',
                    con_tannini: ' <span class="desc-positive">I tannini conciano la cellulosa batterica</span> esattamente come nel cuoio: i polifenoli formano legami H con i gruppi -OH della cellulosa, migliorando resistenza meccanica (+40%), stabilit\u00e0 all\u2019acqua e resistenza UV.'
                }
            }
        },

        // Combinazioni generiche (applicate dopo la matrice)
        combinazioni: [
            {
                id: 'C1',
                condizione: { matrice_presente: true, flag: 'hasFibra' },
                testo: '<p><span class="desc-highlight">Composito fibrorinforzato</span>: le fibre aumenteranno drasticamente la resistenza a trazione e agli strappi, ma potrebbero ridurre trasparenza e uniformita.</p>'
            }
        ]
    },

    // ===== E. AVVERTENZE — punti di attenzione (generateMaterialDescription) =====
    avvertenze: [
        {
            id: 'A1',
            condizione: { matrice_assente: true },
            testo: 'CRITICO: Manca una matrice strutturante. Aggiungi una proteina (gelatina, caseina) o un polisaccaride (agar, amido, alginato) per ottenere un materiale solido.'
        },
        {
            id: 'A2',
            condizione: { famiglie_assenti: ['PLASTIFICANTE'], matrice_presente: true, prop_sotto: { flessibilita: 40 } },
            testo: 'Il materiale sara molto fragile. Considera di aggiungere un plastificante (glicerina, sorbitolo) per evitare crepe.'
        },
        {
            id: 'A3',
            condizione: { famiglie_presenti: ['EMULSIONANTE'], famiglie_assenti: ['RESINA_LIPIDE'] },
            testo: 'Hai un emulsionante ma nessun lipide da emulsionare - potrebbe essere inutile in questa formula.'
        },
        {
            id: 'A4',
            condizione: { ingredienti_presenti_nome: ['alginato'], famiglie_assenti: ['SALE_RETICOLANTE'] },
            testo: 'L\'alginato richiede un sale di calcio (CaCl\u2082, lattato di calcio) per gelificare. Senza reticolante restera liquido.'
        },
        {
            id: 'A5',
            condizione: { ingredienti_presenti_nome: ['agar','gelatina'] },
            testo: 'Agar e gelatina insieme: l\'agar deve BOLLIRE mentre la gelatina NON deve bollire. Sciogli prima l\'agar, lascia raffreddare a 60C, poi aggiungi la gelatina.'
        },
        {
            id: 'A6',
            condizione: { min_ingredienti: 7 },
            testo: 'Formula complessa con molti ingredienti. Consiglio: testa prima le combinazioni base (matrice + plastificante), poi aggiungi gli altri gradualmente.'
        },
        {
            id: 'A7a',
            condizione: { famiglie_presenti: ['SALE_RETICOLANTE'], ingredienti_assenti_nome: ['alginato'], matrice_famiglia_non: 'POLISACCARIDE_ANIONICO', reticolante_tipo: 'ionico', matrice_famiglia_non_in: ['PROTEINA','POLICATIONE','COLTURA'] },
            testo: 'I sali ionici (CaCl\u2082, KCl, lattato di calcio) funzionano con alginati e pectine (reticolazione a \u201cscatola di uova\u201d). Con questa matrice l\u2019effetto sar\u00e0 limitato.'
        },
        {
            id: 'A7b',
            condizione: { ingredienti_presenti_nome: ['tannin'], ingredienti_assenti_nome: ['alginato'], matrice_famiglia_non_in: ['PROTEINA','POLICATIONE','COLTURA','POLISACCARIDE_ANIONICO'] },
            testo: 'I tannini reticolano proteine, chitosano e cellulosa batterica tramite legami idrogeno e Schiff base. Con polisaccaridi neutri l\u2019effetto \u00e8 debole.'
        },
        {
            id: 'A8',
            condizione: { min_matrici: 2 },
            testo: 'Hai due matrici diverse: questo crea un materiale IBRIDO con propriet\u00e0 intermedie tra le due. Attenzione al processo: le matrici hanno temperature di dissoluzione diverse, serve un ordine preciso di preparazione. Vedi la nota di ibridazione qui sotto.'
        }
    ],

    // ===== F. CLASSIFICAZIONE RETICOLANTI — per risolvere BUG-F3/F6/F7 =====
    classificazione_reticolanti: {
        ionici: ['cacl2', 'lattato_calcio', 'kcl'],
        ionici_nome: ['cloruro', 'cacl', 'lattato', 'kcl'],
        polifenolici: ['tannini', 'te_nero_forte'],
        polifenolici_nome: ['tannin', 'te nero forte'],
        proteine: ['borace', 'allume'],
        proteine_nome: ['borace', 'allume'],
        calcio: ['cacl2', 'lattato_calcio'],
        calcio_nome: ['cloruro di calc', 'cacl', 'lattato']
    },

    // ===== G. IBRIDAZIONI MATRICE — note processo e risultato per coppie di matrici =====
    // sintesi: testo breve per cella griglia cliccabile
    // vantaggi/rischio: tag compatti per la cella
    // risultato/processo/rapporto: dettaglio espanso sotto la griglia dopo il click
    ibridazioni_matrice: [
        {
            coppia: ['PROTEINA', 'POLISACCARIDE_NEUTRO'],
            ingredienti_tipici: 'gelatina + agar, gelatina + amido',
            sintesi: 'Film ibrido intermedio',
            vantaggi: '+rigido, +termostabile',
            rischio: 'Temperature diverse',
            risultato: 'Film ibrido con propriet\u00e0 intermedie. La proteina porta flessibilit\u00e0 e trasparenza, il polisaccaride porta rigidit\u00e0 e resistenza termica. Pi\u00f9 robusto di entrambi da soli.',
            processo: 'Sciogliere agar/amido ad alta temperatura PRIMA (>85\u00b0C per agar, >70\u00b0C per amido), poi abbassare a 55-60\u00b0C e aggiungere gelatina. NON bollire la gelatina.',
            rapporto: 'Tipico 50:50 o 70:30 (matrice dominante:secondaria)',
            esempio_db: 'Gelatina + Amido ibrido rigido, Biofilm agar+gelatina'
        },
        {
            coppia: ['PROTEINA', 'POLISACCARIDE_ANIONICO'],
            ingredienti_tipici: 'gelatina + alginato, caseina + alginato',
            sintesi: 'Rete interpenetrante',
            vantaggi: '+meccanica, forme 3D',
            rischio: 'Serve CaCl\u2082',
            risultato: 'Rete interpenetrante proteina-polisaccaride. Meccanicamente pi\u00f9 forte di entrambi: il gel alginato+CaCl\u2082 intrappola la rete proteica. Ottimo per forme 3D resistenti.',
            processo: 'Sciogliere separatamente, mescolare a 40-50\u00b0C, poi immergere in bagno CaCl\u2082. Il calcio gelifica l\u2019alginato che blocca la proteina in posizione.',
            rapporto: 'Alginato 1-3% + proteina 5-10% in soluzione',
            esempio_db: 'caseina + alginato + calcio (eccezione SINERGIA_IBRIDA nel DB)'
        },
        {
            coppia: ['PROTEINA', 'POLICATIONE'],
            ingredienti_tipici: 'gelatina + chitosano',
            sintesi: 'Film antimicrobico saldabile',
            vantaggi: '+antibatterico, +waterproof',
            rischio: 'Serve acido per chitosano',
            risultato: 'Film termosaldabile e antimicrobico. Il chitosano porta resistenza acqua e attivit\u00e0 antibatterica; la gelatina porta flessibilit\u00e0 e termosaldabilit\u00e0. Combinazione ideale per packaging attivo.',
            processo: 'Sciogliere chitosano in soluzione acida (1-2% acido acetico), aggiungere gelatina a 50\u00b0C. La gelatina si scioglie nel sistema acido del chitosano.',
            rapporto: '10% gelatina + 2% chitosano + 25% glicerolo (su peso secco)',
            esempio_db: 'chitosano + gelatina (eccezione SINERGIA nel DB)'
        },
        {
            coppia: ['POLISACCARIDE_NEUTRO', 'POLISACCARIDE_NEUTRO'],
            ingredienti_tipici: 'amido mais + amido patata',
            sintesi: 'Blend complementare',
            vantaggi: 'Bilancia rigido/trasparente',
            rischio: 'Nessuno, facile',
            risultato: 'Blend di amidi complementari. Mais porta rigidit\u00e0 e opacit\u00e0, patata porta trasparenza e flessibilit\u00e0. Il mix bilancia le debolezze di ciascuno.',
            processo: 'Cuocere insieme nello stesso pentolino, stesse temperature. Compatibilit\u00e0 perfetta perch\u00e9 sono chimicamente simili.',
            rapporto: 'Qualsiasi proporzione funziona. 50:50 per bilanciare, 70:30 per privilegiare una caratteristica.',
            esempio_db: 'amido_mais + amido_patata (eccezione BLEND nel DB)'
        },
        {
            coppia: ['POLISACCARIDE_NEUTRO', 'POLISACCARIDE_ANIONICO'],
            ingredienti_tipici: 'agar + alginato',
            sintesi: 'Gel doppio meccanismo',
            vantaggi: '+stabile, doppia reticolazione',
            rischio: 'Ordine T\u00b0 critico',
            risultato: 'Gel a doppio meccanismo: l\u2019agar gelifica per raffreddamento, l\u2019alginato per ioni calcio. Pi\u00f9 resistente e stabile di ciascuno singolarmente.',
            processo: 'CRITICO: bollire agar a 95\u00b0C PRIMA. Abbassare a 50-60\u00b0C, poi aggiungere alginato (che non richiede ebollizione). Se si aggiunge CaCl\u2082 si ottiene doppia reticolazione.',
            rapporto: 'Agar 1-2% + alginato 1-2% in soluzione',
            esempio_db: 'Bioplastica Alginato agar + amido'
        },
        {
            coppia: ['POLICATIONE', 'POLISACCARIDE_ANIONICO'],
            ingredienti_tipici: 'chitosano + alginato, chitosano + carragenina',
            sintesi: 'Complesso polielettrolitico',
            vantaggi: 'Max waterproof senza lipidi',
            rischio: 'Grumi se mescolato male',
            risultato: 'Complesso polielettrolitico: le cariche opposte si attraggono formando una rete molto densa e resistente all\u2019acqua. Il materiale pi\u00f9 waterproof ottenibile senza lipidi.',
            processo: 'ATTENZIONE: mescolare lentamente le soluzioni. Se versate insieme di colpo si formano grumi insolubili. Meglio stratificare (film chitosano immerso in soluzione alginato) o mescolare goccia a goccia.',
            rapporto: 'Rapporto molare ~1:1. In pratica: chitosano 2% + alginato 2% in soluzioni separate.',
            esempio_db: 'zeina + chitosano (eccezione SINERGIA_BLEND nel DB)'
        }
    ],

    // ===== H. IBRIDAZIONI INGREDIENTE — override specifici per coppie con processo diverso dalla famiglia =====
    // tipo: 'ibridazione' (possibile) | 'incompatibile' (solventi/processi incompatibili) | 'raro' (possibile ma poco documentato)
    // Se una coppia non è qui, il tutor usa il fallback ibridazioni_matrice[famiglia1, famiglia2]
    ibridazioni_ingrediente: [
        // --- GELATINA + vari (la più versatile, 8 coppie) ---
        { coppia: ['gelatina','carragenina'], tipo: 'ibridazione',
          sintesi: 'Blend termoreversibile',
          vantaggi: 'Gel elastico, entrambi in acqua calda',
          rischio: 'Entrambi fondono a caldo',
          processo: 'Portare a ebollizione con carragenina, abbassare a 55\u00b0C, aggiungere gelatina. Raffredda a ~38\u00b0C. NO CaCl\u2082 \u2014 la carragenina gelifica per raffreddamento, non per ioni calcio.',
          rapporto: '50:50 o 70:30',
          nota_chimica: 'Carragenina forma doppia elica per raffreddamento. Non usa il meccanismo egg-box dell\u2019alginato.' },

        { coppia: ['gelatina','pectina'], tipo: 'ibridazione',
          sintesi: 'Film con gelificazione acida o ionica',
          vantaggi: 'Due meccanismi di gel, food-safe',
          rischio: 'Serve acido+zucchero o CaCl\u2082',
          processo: 'Sciogliere pectina con zucchero in acqua calda, abbassare a 55\u00b0C, aggiungere gelatina. Per gel ionico: aggiungere CaCl\u2082. Per gel classico: acido citrico.',
          rapporto: 'Pectina 2-3% + gelatina 5-8%' },

        // --- ZEINA + qualsiasi acquoso = INCOMPATIBILE ---
        { coppia: ['zeina','agar'], tipo: 'incompatibile',
          motivo: 'Zeina si scioglie solo in alcool 70-80%. L\u2019agar richiede acqua bollente. Solventi immiscibili, non si possono mescolare.',
          alternativa: 'Zeina come coating su agar gi\u00e0 gelificato (stratificazione, non ibridazione).' },
        { coppia: ['zeina','alginato'], tipo: 'incompatibile',
          motivo: 'Solventi incompatibili: alcool vs acqua.',
          alternativa: 'Coating zeina su gel alginato reticolato.' },
        { coppia: ['zeina','carragenina'], tipo: 'incompatibile',
          motivo: 'Solventi incompatibili: alcool vs acqua.',
          alternativa: 'Coating zeina su gel carragenina.' },
        { coppia: ['zeina','pectina'], tipo: 'incompatibile',
          motivo: 'Solventi incompatibili: alcool vs acqua.',
          alternativa: 'Coating zeina su gel pectina.' },
        { coppia: ['zeina','amido_mais'], tipo: 'incompatibile',
          motivo: 'Solventi incompatibili.',
          alternativa: 'Stratificazione: film amido + coating zeina.' },
        { coppia: ['zeina','amido_patata'], tipo: 'incompatibile',
          motivo: 'Solventi incompatibili.',
          alternativa: 'Stratificazione.' },
        { coppia: ['zeina','amido_tapioca'], tipo: 'incompatibile',
          motivo: 'Solventi incompatibili.',
          alternativa: 'Stratificazione.' },
        { coppia: ['zeina','chitosano'], tipo: 'ibridazione',
          sintesi: 'Film idrofobo antimicrobico',
          vantaggi: 'Entrambi solubili in solvente acido/alcolico',
          rischio: 'Processo complesso, zeina precipita a pH neutro',
          processo: 'Chitosano in acido acetico 1%, zeina in alcool 70%. Mescolare lentamente. Il film si forma per evaporazione del solvente misto.',
          rapporto: 'Chitosano 2% + zeina 5-10%',
          nota_chimica: 'Eccezione: l\u2019acido acetico del chitosano \u00e8 parzialmente miscibile con l\u2019alcool della zeina.' },

        // --- CASEINA + vari (processo diverso dalle altre proteine) ---
        { coppia: ['caseina','alginato'], tipo: 'ibridazione',
          sintesi: 'Incapsulamento sfere proteiche',
          vantaggi: 'Sfere di caseina in gel ionico',
          rischio: 'Caseina precipitata, non disciolta',
          processo: 'Disperdere caseina in soluzione di alginato, gocciolare in bagno CaCl\u2082. Il gel alginato incapsula la caseina. Diverso dall\u2019ibridazione gelatina+alginato perch\u00e9 la caseina \u00e8 una sospensione, non una soluzione.',
          rapporto: 'Alginato 2% + caseina 5% sospesa' },
        { coppia: ['caseina','agar'], tipo: 'raro',
          sintesi: 'Composito opaco',
          vantaggi: 'Caseina aggiunge struttura',
          rischio: 'Caseina non si scioglie in acqua neutra',
          processo: 'Agar a ebollizione, caseina dispersa come polvere. Il risultato \u00e8 un composito agar con particelle di caseina, non un vero ibrido molecolare.',
          rapporto: 'Agar 1-2% + caseina 3-5% dispersa' },
        { coppia: ['caseina','chitosano'], tipo: 'raro',
          sintesi: 'Film proteina-policatione',
          vantaggi: 'Potenziale antimicrobico',
          rischio: 'pH incompatibili, processo complesso',
          processo: 'Caseina precipita in acido, chitosano si scioglie in acido. Possibile ma il pH ottimale \u00e8 diverso per entrambi. Poco documentato nel contesto DIY.',
          rapporto: 'Non standardizzato' },

        // --- ALBUMINA + vari ---
        { coppia: ['albumina','alginato'], tipo: 'ibridazione',
          sintesi: 'Incapsulamento + coagulazione',
          vantaggi: 'Doppia fissazione: CaCl\u2082 + calore',
          rischio: 'Processo in 2 fasi',
          processo: 'Albumina in soluzione di alginato, gocciolare in CaCl\u2082 (fase 1: gel ionico), poi riscaldare a 65\u00b0C (fase 2: coagulazione albumina). Doppia stabilizzazione.',
          rapporto: 'Alginato 1-2% + albumina 5-10%' },
        { coppia: ['albumina','agar'], tipo: 'ibridazione',
          sintesi: 'Schiuma stabilizzata in gel',
          vantaggi: 'Struttura porosa stabile',
          rischio: 'T\u00b0 agar vs coagulazione albumina',
          processo: 'Sbattere albumina a neve. Agar fuso a 50-55\u00b0C (sotto T\u00b0 coagulazione). Incorporare la schiuma, versare in stampo, raffreddare. L\u2019agar fissa la schiuma prima che collassi.',
          rapporto: 'Agar 1% + albumina 10-15% montata' },

        // --- CHERATINA (rara, processi estremi) ---
        { coppia: ['cheratina','agar'], tipo: 'raro',
          sintesi: 'Film cheratina in gel agar',
          vantaggi: 'Resistenza meccanica elevata',
          rischio: 'Cheratina richiede base forte per sciogliersi',
          processo: 'Sciogliere cheratina in NaOH o urea, neutralizzare, mescolare con agar fuso a 55\u00b0C. Il film risultante \u00e8 rigido e resistente ma il processo richiede esperienza con pH estremi.',
          rapporto: 'Non standardizzato' },

        // --- AGAR + CARRAGENINA ---
        { coppia: ['agar','carragenina'], tipo: 'ibridazione',
          sintesi: 'Blend rigido-elastico',
          vantaggi: 'Agar rigido + carragenina elastica, entrambi vegani',
          rischio: 'Entrambi richiedono ebollizione',
          processo: 'Portare a ebollizione insieme. L\u2019agar gelifica a 38\u00b0C (rigido), la carragenina a 40-60\u00b0C (elastico). Il gel risultante ha propriet\u00e0 intermedie, meno fragile dell\u2019agar puro.',
          rapporto: '50:50 o a dominanza: pi\u00f9 agar = pi\u00f9 rigido, pi\u00f9 carragenina = pi\u00f9 elastico' },

        // --- CHITOSANO + CARRAGENINA/PECTINA ---
        { coppia: ['chitosano','carragenina'], tipo: 'ibridazione',
          sintesi: 'Complesso polielettrolitico',
          vantaggi: 'Carica +/\u2212 = rete densa, waterproof',
          rischio: 'Grumi se mescolato velocemente',
          processo: 'Come chitosano+alginato: soluzioni separate, mescolare goccia a goccia o stratificare. Il meccanismo \u00e8 lo stesso (attrazione elettrostatica) ma la carragenina aggiunge anche gelificazione termica.',
          rapporto: 'Chitosano 2% + carragenina 2% in soluzioni separate' },
        { coppia: ['chitosano','pectina'], tipo: 'ibridazione',
          sintesi: 'Complesso polielettrolitico parziale',
          vantaggi: 'Food-safe, antimicrobico',
          rischio: 'Meno forte che con alginato',
          processo: 'Chitosano in acido, pectina in acqua. Mescolare lentamente. L\u2019interazione elettrostatica \u00e8 pi\u00f9 debole che con alginato (pectina ha meno gruppi anionici). Con Fe\u00b3\u207a aggiunto: rete metallo-polifenolica extra.',
          rapporto: 'Chitosano 1-2% + pectina 2-3%',
          nota_chimica: 'La pectina LM (low-methoxyl) interagisce meglio del tipo HM con il chitosano.' }
    ],

    // ===== I. AFFINITÀ PER RUOLO — note specifiche ingrediente × matrice =====
    // tag: 'consigliato' | 'funziona' | 'debole' | 'non_funziona' | 'errore_comune' | 'attenzione'
    // Se coppia non presente qui → il tutor usa regole_compatibilita_famiglie come fallback
    // sintesi: testo breve per la cella della griglia
    // nota: dettaglio mostrato al click
    affinita_ruolo: [
        // ===== SALE_RETICOLANTE × MATRICI =====
        // --- CaCl2 ---
        { coppia: ['cacl2','alginato'], tag: 'consigliato',
          sintesi: 'Gel ionico egg-box',
          nota: 'Il meccanismo fondamentale: Ca\u00b2\u207a ponte tra catene alginato. Sferificazione diretta: gocce alginato in bagno CaCl\u2082 0.5-2%. Gel istantaneo dalla superficie.',
          processo: 'Bagno CaCl\u2082 DOPO preparazione soluzione alginato.' },
        { coppia: ['cacl2','pectina'], tag: 'consigliato',
          sintesi: 'Gel ionico (pectina LM)',
          nota: 'Funziona solo con pectina low-methoxyl (LM). La pectina HM gelifica con acido+zucchero, non con calcio. Meccanismo simile all\u2019alginato (egg-box).',
          processo: 'Come alginato. Verificare tipo di pectina.' },
        { coppia: ['cacl2','carragenina'], tag: 'debole',
          sintesi: 'Effetto limitato',
          nota: 'La carragenina risponde meglio al K\u207a (KCl) che al Ca\u00b2\u207a. CaCl\u2082 ha effetto ma non \u00e8 il reticolante ideale. Usa KCl per kappa-carragenina.' },
        { coppia: ['cacl2','agar'], tag: 'errore_comune',
          sintesi: 'NON funziona!',
          nota: 'Errore frequente: CaCl\u2082 NON reticola agar. L\u2019agar gelifica per raffreddamento (isteresi termica), non per ioni. Il CaCl\u2082 \u00e8 per ALGINATO.',
          processo: 'Non aggiungere. L\u2019agar non ne ha bisogno.' },
        { coppia: ['cacl2','gelatina'], tag: 'debole',
          sintesi: 'Effetto minimo',
          nota: 'Ca\u00b2\u207a non reticola significativamente le proteine. Per reticolare gelatina servono tannini, borace o allume.' },
        { coppia: ['cacl2','chitosano'], tag: 'non_funziona',
          sintesi: 'Nessun effetto',
          nota: 'Chitosano \u00e8 policatione (carica +), non interagisce con Ca\u00b2\u207a (anche lui +). Per chitosano usa tannini.' },

        // --- Lattato di calcio ---
        { coppia: ['lattato_calcio','alginato'], tag: 'consigliato',
          sintesi: 'Sferificazione inversa',
          nota: 'Il lattato rilascia Ca\u00b2\u207a lentamente \u2192 gelificazione dall\u2019interno verso l\u2019esterno (inversa). Sfere con centro liquido. Food-safe, sapore neutro.',
          processo: 'Lattato nella soluzione interna, alginato nel bagno esterno.' },
        { coppia: ['lattato_calcio','pectina'], tag: 'consigliato',
          sintesi: 'Gelificazione interna food-safe',
          nota: 'Come con alginato. Rilascio lento Ca\u00b2\u207a per gel pi\u00f9 omogeneo. Ideale per applicazioni food-safe.' },

        // --- KCl ---
        { coppia: ['kcl','carragenina'], tag: 'consigliato',
          sintesi: 'Gel doppia elica',
          nota: 'K\u207a \u00e8 il reticolante specifico per kappa-carragenina: stabilizza la struttura a doppia elica. Gel pi\u00f9 forte e termostabile. Non confondere con CaCl\u2082.',
          processo: 'Sciogliere KCl nel gel caldo, gelifica raffreddando.' },
        { coppia: ['kcl','alginato'], tag: 'non_funziona',
          sintesi: 'K\u207a non funziona',
          nota: 'L\u2019alginato richiede ioni bivalenti (Ca\u00b2\u207a). K\u207a \u00e8 monovalente, non crea ponti tra catene. Usa CaCl\u2082 o lattato di calcio.' },

        // --- Borace ---
        { coppia: ['borace','gelatina'], tag: 'consigliato',
          sintesi: 'Reticola proteine, +rigido +H\u2082O',
          nota: 'Il borace forma legami borato-diolo con i gruppi -OH della gelatina. Aumenta rigidit\u00e0 e resistenza all\u2019acqua. Il film non \u00e8 pi\u00f9 rifondibile.',
          processo: 'Aggiungere alla soluzione prima del versamento. 2-5% su peso secco.' },
        { coppia: ['borace','caseina'], tag: 'consigliato',
          sintesi: 'Plastica tipo Galalite',
          nota: 'Il borace srotola le micelle di caseina e reticola le catene proteiche esposte. Risultato: plastica dura, lucidabile, colorabile. Processo storico dal 1897 (con formalina, ora borace).',
          processo: 'Impastare caseina precipitata con soluzione borace 5-10%. Pressare, stagionare.' },
        { coppia: ['borace','albumina'], tag: 'funziona',
          sintesi: 'Stabilizza schiuma/film',
          nota: 'Reticola albumina prima della coagulazione termica. Utile per stabilizzare schiume montate.' },
        { coppia: ['borace','agar'], tag: 'non_funziona',
          sintesi: 'Nessun effetto',
          nota: 'Il borace reticola proteine e polioli (PVA), non polisaccaridi neutri. L\u2019agar non ha i gruppi chimici necessari.' },
        { coppia: ['borace','alginato'], tag: 'non_funziona',
          sintesi: 'Non reticola alginato',
          nota: 'L\u2019alginato richiede Ca\u00b2\u207a, non borato. Meccanismi completamente diversi.' },

        // --- Tannini ---
        { coppia: ['tannini','gelatina'], tag: 'consigliato',
          sintesi: 'Concia naturale, +rigido +H\u2082O +UV',
          nota: 'Polifenoli formano legami H bidentati + Schiff base con ammine della gelatina. Stessa chimica della concia del cuoio. Il film diventa brunito, rigido, stabile in acqua. Antimicrobico e antiossidante.',
          processo: 'Aggiungere tannini 3-5% alla soluzione. Oppure bagno post-essiccazione.' },
        { coppia: ['tannini','caseina'], tag: 'funziona',
          sintesi: 'Concia proteica',
          nota: 'Come con gelatina. Migliora rigidit\u00e0 e resistenza acqua. Inscurisce il materiale.' },
        { coppia: ['tannini','chitosano'], tag: 'consigliato',
          sintesi: 'Reticolazione + antimicrobico\u00b2',
          nota: 'Tannini reticolano i gruppi amminici del chitosano (Schiff base). Doppio effetto antimicrobico (chitosano + tannini). Resistenza meccanica +40%, riduzione swelling.',
          processo: 'Immersione film chitosano in soluzione tannica 3-5%.' },
        { coppia: ['tannini','pectina'], tag: 'funziona',
          sintesi: 'Rete con Fe\u00b3\u207a, +42% tensile',
          nota: 'Tannini + Fe\u00b3\u207a formano rete metallo-polifenolica con la pectina. Resistenza a trazione +42%. Senza ferro: interazione debole.',
          processo: 'Aggiungere tannini + FeCl\u2083 alla soluzione di pectina.' },
        { coppia: ['tannini','agar'], tag: 'debole',
          sintesi: 'Solo superficiale',
          nota: 'I tannini non penetrano bene nel gel di agar. Effetto limitato alla superficie: leggera colorazione, minima protezione UV.' },
        { coppia: ['tannini','alginato'], tag: 'debole',
          sintesi: 'Solo superficiale',
          nota: 'Come con agar: i polisaccaridi anionici non offrono gruppi amminici per la Schiff base. Effetto solo superficiale/estetico.' },

        // --- T\u00e8 nero forte ---
        { coppia: ['te_nero_forte','gelatina'], tag: 'funziona',
          sintesi: 'Reticolante blando naturale',
          nota: 'Stessi polifenoli dei tannini puri ma concentrazione inferiore (\u223c10\u00d7 meno). Effetto reale ma pi\u00f9 morbido: leggero irrigidimento, colorazione ambrata, parziale resistenza acqua. Economico e accessibile.',
          processo: 'Preparare t\u00e8 molto concentrato (10 bustine/500ml), usare come solvente al posto dell\u2019acqua.' },
        { coppia: ['te_nero_forte','chitosano'], tag: 'funziona',
          sintesi: 'Reticolante blando + antimicrobico',
          nota: 'Come con gelatina: polifenoli del t\u00e8 reticolano i gruppi amminici. Pi\u00f9 blando dei tannini puri.' },
        { coppia: ['te_nero_forte','scoby'], tag: 'consigliato',
          sintesi: 'Medium di crescita (doppio ruolo)',
          nota: 'Con lo SCOBY il t\u00e8 nero \u00e8 il MEDIUM di crescita, non un reticolante. I batteri Acetobacter metabolizzano caffeina e polifenoli. Doppio ruolo unico nel DB.' },

        // --- Allume ---
        { coppia: ['allume','gelatina'], tag: 'funziona',
          sintesi: 'Concia tradizionale',
          nota: 'Reticolante classico per proteine nella concia delle pelli (allume di cromo nella concia industriale, allume di potassio in quella vegetale). Meno tossico del borace ma meno efficace.' },
        { coppia: ['allume','caseina'], tag: 'consigliato',
          sintesi: 'Indurimento classico',
          nota: 'Alternativa al borace per caseina. Meno efficace ma pi\u00f9 sicuro. Usato storicamente nella produzione di Galalite.' },

        // --- Urea ---
        { coppia: ['urea','cheratina'], tag: 'consigliato',
          sintesi: 'Scioglie cheratina (denaturante)',
          nota: 'L\u2019urea denatura e scioglie la cheratina rompendo i legami idrogeno. Non \u00e8 un reticolante classico ma un agente solubilizzante necessario per processare la cheratina. Concentrazione: 4-8M.',
          processo: 'Immergere cheratina (lana/piume) in soluzione urea concentrata per ore.' },

        // ===== COLORANTE × MATRICI (note specifiche) =====
        { coppia: ['spirulina','agar'], tag: 'attenzione',
          sintesi: 'Degrada a T\u00b0 alta',
          nota: 'La ficocianina della spirulina degrada sopra 60\u00b0C. L\u2019agar richiede ebollizione (95\u00b0C). Aggiungere spirulina DOPO che l\u2019agar \u00e8 sceso sotto 55\u00b0C, mai durante l\u2019ebollizione.' },
        { coppia: ['spirulina','amido_mais'], tag: 'attenzione',
          sintesi: 'Aggiungere a fine cottura',
          nota: 'L\u2019amido cuoce a 70-80\u00b0C. La spirulina degrada sopra 60\u00b0C. Aggiungere dopo la gelificazione, mescolando nel gel ancora caldo ma sotto 55\u00b0C.' },
        { coppia: ['curcuma','gelatina'], tag: 'consigliato',
          sintesi: 'Giallo + antimicrobico',
          nota: 'La curcumina si lega bene alle proteine. Colore giallo intenso stabile. Propriet\u00e0 antimicrobiche bonus. Fotosensibile: il colore sbiadisce alla luce UV in settimane.' },
        { coppia: ['carbone_vegetale','alginato'], tag: 'consigliato',
          sintesi: 'Nero + adsorbente, PRIMA del bagno',
          nota: 'Aggiungere il carbone alla soluzione di alginato PRIMA del bagno CaCl\u2082. Dopo la reticolazione il colorante non penetra. Opacizza completamente.' },
        { coppia: ['curcuma','scoby'], tag: 'funziona',
          sintesi: 'Colorante durante crescita',
          nota: 'Aggiungere curcuma al medium di crescita SCOBY. Il pigmento si integra nelle fibre di cellulosa durante la biosintesi. Colore pi\u00f9 stabile della tintura post-raccolta.' },
        { coppia: ['spirulina','scoby'], tag: 'funziona',
          sintesi: 'Colorante durante crescita',
          nota: 'Come curcuma: aggiungere al medium. Colore verde-blu nelle fibre. Pu\u00f2 influenzare leggermente il pH del medium.' },
        { coppia: ['carbone_vegetale','scoby'], tag: 'debole',
          sintesi: 'Meglio post-raccolta',
          nota: 'Il carbone nel medium pu\u00f2 interferire con la crescita batterica (effetto adsorbente). Meglio applicare come tintura superficiale dopo raccolta e essiccazione.' },

        // ===== CARICA × MATRICI (note specifiche) =====
        { coppia: ['fondi_caffe','gelatina'], tag: 'funziona',
          sintesi: 'Composito scuro, rischio muffe',
          nota: 'I fondi conferiscono texture e colore marrone. I tannini residui del caff\u00e8 hanno un leggero effetto reticolante sulla gelatina. Rischio muffe se umidit\u00e0 residua: essiccare bene.' },
        { coppia: ['fondi_caffe','micelio'], tag: 'consigliato',
          sintesi: 'Substrato ideale, pre-pastorizzato',
          nota: 'I fondi di caff\u00e8 sono il substrato micelio pi\u00f9 accessibile: gi\u00e0 pastorizzati dalla preparazione del caff\u00e8. Usare entro 24h. Mix 50% caff\u00e8 + 50% segatura.' },
        { coppia: ['segatura','micelio'], tag: 'consigliato',
          sintesi: 'Substrato standard, alta resa',
          nota: 'Substrato pi\u00f9 comune per micelio. Legno duro preferibile. Sterilizzare in autoclave 121\u00b0C per 1.5-2.5h. Il micelio digerisce la lignina e ricostruisce la struttura.' },
        { coppia: ['gesso','caseina'], tag: 'consigliato',
          sintesi: 'Carica classica, bianca',
          nota: 'Il gesso (solfato di calcio) \u00e8 la carica tradizionale per la caseina plastica. Aumenta rigidit\u00e0 e opacit\u00e0. Il Ca\u00b2\u207a del gesso ha anche un lieve effetto stabilizzante.' },
        { coppia: ['caolino','alginato'], tag: 'funziona',
          sintesi: 'Composito ceramico-gel',
          nota: 'Il caolino (argilla bianca) d\u00e0 opacit\u00e0 e rigidit\u00e0 al gel di alginato. Aggiungere alla soluzione PRIMA del bagno CaCl\u2082. Risultato: composito semi-rigido tipo ceramica leggera.' },

        // ===== PLASTIFICANTE × MATRICI (note specifiche) =====
        { coppia: ['glicerina','gelatina'], tag: 'consigliato',
          sintesi: 'Coppia classica, film flessibile',
          nota: 'La combinazione fondamentale: glicerina 20-30% su peso secco di gelatina. Sotto 20% fragile, sopra 30% appiccicoso. La glicerina \u00e8 igroscopica: il film assorbe umidit\u00e0 dall\u2019ambiente.' },
        { coppia: ['glicerina','scoby'], tag: 'consigliato',
          sintesi: 'ESSENZIALE post-raccolta',
          nota: 'Senza glicerina la cellulosa batterica essiccata \u00e8 rigida come carta vetrata. Bagno 2.5-3% glicerina in acqua per 24h. Poi essiccare su superficie liscia.' },
        { coppia: ['glicerina','agar'], tag: 'funziona',
          sintesi: 'Riduce frattura, non rende flessibile',
          nota: 'La glicerina riduce la fraglit\u00e0 dell\u2019agar ma non lo rende flessibile come la gelatina. L\u2019agar resta semi-rigido. Usare 20-40% per effetto apprezzabile.' },
        { coppia: ['sorbitolo','gelatina'], tag: 'funziona',
          sintesi: 'Meno igroscopico della glicerina',
          nota: 'Alternativa alla glicerina: meno igroscopico (il film non si ammorbidisce con l\u2019umidit\u00e0). Ma cristallizza nel tempo, rendendo il film opaco e meno flessibile.' },
        { coppia: ['olio_lino','gelatina'], tag: 'attenzione',
          sintesi: 'Immiscibile, serve lecitina',
          nota: 'L\u2019olio di lino non si mescola con la gelatina acquosa. Serve un emulsionante (lecitina). L\u2019olio essiccativo polimerizza: il film diventa semi-rigido nel tempo.' },

        // ===== RESINA_LIPIDE × MATRICI (note specifiche) =====
        { coppia: ['cera_carnauba','scoby'], tag: 'consigliato',
          sintesi: 'Coating post-essiccazione',
          nota: 'La cellulosa batterica \u00e8 naturalmente idrofila. Coating di cera carnauba (o api) a caldo sigilla la superficie. Applicare dopo essiccazione completa.' },
        { coppia: ['cera_carnauba','micelio'], tag: 'consigliato',
          sintesi: 'Impermeabilizza superficie',
          nota: 'Il micelio essiccato \u00e8 poroso. Cera a caldo penetra e sigilla. Applicare dopo killing (60-80\u00b0C).' },
        { coppia: ['gommalacca','gelatina'], tag: 'funziona',
          sintesi: 'Coating lucido protettivo',
          nota: 'La gommalacca in soluzione alcolica applicata sul film di gelatina essiccato crea una barriera lucida e parzialmente impermeabile. Non miscibile nella fase acquosa.' },
        { coppia: ['olio_tung','gelatina'], tag: 'attenzione',
          sintesi: 'Serve emulsionante',
          nota: 'Olio essiccativo, polimerizza all\u2019aria. Come olio di lino: immiscibile senza lecitina. Crea barriera rigida permanente dopo polimerizzazione.' }
    ]
};


const BAR_QUAL_LABELS = {
    barTrasp: [[0,'Opaco'],[16,'Traslucido basso'],[36,'Traslucido'],[56,'Semi-trasparente'],[76,'Trasparente']],
    barFlex:  [[0,'Rigido'],[16,'Semi-rigido'],[36,'Moderato'],[56,'Flessibile'],[76,'Molto flessibile']],
    barH2O:   [[0,'Nulla'],[16,'Scarsa'],[36,'Moderata'],[56,'Buona'],[76,'Alta']],
    barMecc:  [[0,'Molto fragile'],[16,'Fragile'],[36,'Moderata'],[56,'Resistente'],[76,'Molto resistente']]
};

// =============================================
// UTILITY CONDIVISE
// =============================================
const FAMILY_COLORS = {
    PROTEINA:'#e57373', POLISACCARIDE_NEUTRO:'#81c784', POLISACCARIDE_ANIONICO:'#4db6ac',
    POLICATIONE:'#7986cb', COLTURA:'#a1887f', PLASTIFICANTE:'#aed581', RESINA_LIPIDE:'#ffb74d',
    CARICA:'#8d6e63', SALE_RETICOLANTE:'#ff8a65', COLORANTE:'#ba68c8', ACIDO:'#ef5350',
    ADDITIVO:'#90a4ae', EMULSIONANTE:'#4dd0e1'
};



// --- UTILITY ALIASES (per retrocompatibilità lab.html / problemi.html) ---
function getCategoryColor(famiglia) { return FAMILY_COLORS[famiglia] || '#999'; }
function getCategoryClass(famiglia) {
    var map = { PROTEINA:'cat-proteina', POLISACCARIDE_NEUTRO:'cat-polisaccaride', POLISACCARIDE_ANIONICO:'cat-polisaccaride-an',
        POLICATIONE:'cat-policatione', COLTURA:'cat-coltura', PLASTIFICANTE:'cat-plastificante', RESINA_LIPIDE:'cat-lipide',
        CARICA:'cat-carica', SALE_RETICOLANTE:'cat-reticolante', COLORANTE:'cat-colorante', ACIDO:'cat-acido',
        ADDITIVO:'cat-additivo', EMULSIONANTE:'cat-emulsionante' };
    return map[famiglia] || 'cat-default';
}
