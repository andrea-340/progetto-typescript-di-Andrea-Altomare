# progetto-typescript-di-Andrea-Altomare

IncluDO - Sistema di Formazione per Migranti

Descrizione del Progetto

Questo progetto implementa un sistema in TypeScript per modellare la struttura operativa di una scuola di formazione professionale per migranti. Il sistema facilita le interazioni tra migranti, corsi di formazione e aziende partner, supportando l’integrazione sociale e lavorativa delle persone svantaggiate.

Obiettivi
	•	Creare un punto di riferimento per la formazione di mestieri in via di estinzione.
	•	Facilitare l’inclusione sociale e professionale dei migranti.
	•	Collegare i migranti con corsi di formazione e opportunità lavorative.

Componenti Principali

Il sistema si basa su tre interfacce fondamentali:
	1.	IPartecipante: rappresenta i migranti iscritti ai programmi formativi.
	•	Proprietà: nome, cognome, paese di origine, livello di istruzione, competenze linguistiche, ambito di formazione.
	•	Metodo: iscrivitiCorso(corso: ICorso): void → permette l’iscrizione a un corso.
	2.	ICorso: rappresenta i corsi di formazione offerti dalla scuola.
	•	Proprietà: titolo, descrizione, settore professionale, durata, elenco iscritti.
	3.	IAzienda: rappresenta le aziende partner che offrono opportunità di lavoro.
	•	Proprietà: nome, settore di attività, descrizione, posizioni aperte.
	•	Metodo: offriPosizione(partecipante: IPartecipante, posizione: string): void → assegna una posizione lavorativa.

Classi Implementate

Sono state implementate le seguenti classi:
	•	Partecipante → gestisce i dati e l’iscrizione ai corsi.
	•	Corso → registra le informazioni sui corsi e gli iscritti.
	•	Azienda → memorizza le aziende partner e le offerte di lavoro.

Logica del Sistema
	•	I partecipanti possono iscriversi ai corsi tramite il metodo iscrivitiCorso.
	•	I corsi registrano i partecipanti con aggiungiPartecipante.
	•	Le aziende offrono opportunità di lavoro tramite offriPosizione.

Test e Istanze
	•	Creazione di diversi Partecipanti per simulare l’iscrizione ai corsi.
	•	Creazione di più Corsi per rappresentare i percorsi formativi disponibili.
	•	Creazione di una o più Aziende per collegare i partecipanti con opportunità lavorative.
	•	Verifica della logica di iscrizione ai corsi e assegnazione delle posizioni lavorative.

Tecnologie Utilizzate
	•	Linguaggio: TypeScript
	•	Paradigma: Programmazione a Oggetti (OOP)

Come Eseguire il Progetto
	1.	Clona il repository

git clone <https://github.com/andrea-340/progetto-typescript-di-Andrea-Altomare.git>



	2.	Installa le dipendenze (se necessario)

npm install


	3.	Esegui il codice TypeScript 

-npm run build
-npm start



Conclusione

Il progetto dimostra come la tecnologia possa supportare l’integrazione lavorativa e sociale dei migranti, offrendo una struttura digitale per la formazione professionale e l’inserimento nel mondo del lavoro.
