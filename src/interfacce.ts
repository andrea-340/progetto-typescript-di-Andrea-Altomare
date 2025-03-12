// interfacce.ts

export interface IPartecipante {
  nome: string;
  cognome: string;
  paeseDiOrigine: string;
  livelloDiIstruzione: string;
  competenzeLinguistiche: string[];
  ambitoDiFormazioneInteresse: string;

  iscrivitiCorso(corso: ICorso): void;
}

export interface ICorso {
  titolo: string;
  descrizione: string;
  settoreProfessionale: string;
  durata: number;
  iscritti: IPartecipante[];

  aggiungiPartecipante(partecipante: IPartecipante): void;
}

export interface IAzienda {
  nomeAzienda: string;
  settoreDiAttivita: string;
  descrizione: string;
  posizioniAperte: string[];

  offriPosizione(partecipante: IPartecipante, posizione: string): void;
}
