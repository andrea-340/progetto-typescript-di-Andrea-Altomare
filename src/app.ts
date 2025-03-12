// app.ts

import { Partecipante } from "./classi";
import { Corso } from "./classi";
import { Azienda } from "./classi";
import { IncluDO } from "./classi";

// Creiamo i partecipanti
const partecipante1 = new Partecipante(
  "Hammed",
  "Hassan",
  "Egitto",
  "Diploma",
  ["Arabo", "Italiano"],
  "Falegnameria"
);
const partecipante2 = new Partecipante(
  "Lina",
  "Khan",
  "Pakistan",
  "diploma",
  ["Urdu", "Italiano"],
  "calzolaio"
);
const partecipante3 = new Partecipante(
  "Giovanni",
  "Rossi",
  "Italia",
  "maturità",
  ["Italiano"],
  "Cucito"
);

// Creiamo i corsi
const corsoFalegnameria = new Corso(
  "Falegnameria Tradizionale",
  "Corso pratico per imparare l'arte della falegnameria artigianale.",
  "Artigianato",
  12
);
const corsoCalzolaio = new Corso(
  "Corso di Calzolaio",
  "Corso base di informatica per migranti",
  "calzolaio",
  6
);
const corsoCucito = new Corso(
  "Corso di Cucito",
  "Corso pratico di cucito per principianti",
  "Artigianato",
  8
);

// Creiamo le aziende
const aziendaMobili = new Azienda(
  "Mobili Artigianali Rossi",
  "Produzione Mobili",
  "Azienda specializzata nella creazione di mobili su misura.",
  ["Apprendista falegname", "Falegname qualificato"]
);
const aziendaScarpe = new Azienda(
  "calzolandia",
  "calzolaio",
  "Azienda che fornisce riparazione di scarpe ecc",
  ["e fare delle ottime scarpe", "nel saper lavorare i diversi materiali"]
);
const aziendaCucito = new Azienda(
  "Cucito Creativo",
  "Artigianato",
  "Azienda che crea abiti su misura",
  ["Sarta", "Aiuto sarto"]
);

// Creiamo l'istanza di IncluDO
const incluDO = new IncluDO();

// Aggiungiamo i corsi e le aziende al sistema IncluDO
incluDO.aggiungiCorso(corsoFalegnameria);
incluDO.aggiungiCorso(corsoCalzolaio);
incluDO.aggiungiCorso(corsoCucito);

incluDO.aggiungiAzienda(aziendaMobili);
incluDO.aggiungiAzienda(aziendaScarpe);
incluDO.aggiungiAzienda(aziendaCucito);

// Iscriviamo i partecipanti ai corsi
incluDO.iscriviPartecipanteACorso(partecipante1, corsoFalegnameria);
incluDO.iscriviPartecipanteACorso(partecipante2, corsoCalzolaio);
incluDO.iscriviPartecipanteACorso(partecipante3, corsoCucito);

// Offriamo posizioni
incluDO.collegaPartecipanteAzienda(
  partecipante1,
  aziendaMobili,
  "Apprendista falegname"
);
incluDO.collegaPartecipanteAzienda(partecipante2, aziendaScarpe, "calzolaio");
incluDO.collegaPartecipanteAzienda(partecipante3, aziendaCucito, "Sarta");
