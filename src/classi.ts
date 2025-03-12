// classi.ts

import { IPartecipante, ICorso, IAzienda } from "./interfacce";

export class Partecipante implements IPartecipante {
  constructor(
    public nome: string,
    public cognome: string,
    public paeseDiOrigine: string,
    public livelloDiIstruzione: string,
    public competenzeLinguistiche: string[],
    public ambitoDiFormazioneInteresse: string
  ) {}

  iscrivitiCorso(corso: ICorso): void {
    corso.aggiungiPartecipante(this);
    console.log(
      `${this.nome} ${this.cognome} si è iscritto al corso "${corso.titolo}"`
    );
  }
}

export class Corso implements ICorso {
  public iscritti: IPartecipante[] = [];

  constructor(
    public titolo: string,
    public descrizione: string,
    public settoreProfessionale: string,
    public durata: number
  ) {}

  aggiungiPartecipante(partecipante: IPartecipante): void {
    this.iscritti.push(partecipante);
    console.log(`${partecipante.nome} si è iscritto al corso "${this.titolo}"`);
  }
}

export class Azienda implements IAzienda {
  constructor(
    public nomeAzienda: string,
    public settoreDiAttivita: string,
    public descrizione: string,
    public posizioniAperte: string[]
  ) {}

  offriPosizione(partecipante: IPartecipante, posizione: string): void {
    if (this.posizioniAperte.includes(posizione)) {
      console.log(
        `${this.nomeAzienda} ha offerto la posizione "${posizione}" a ${partecipante.nome} ${partecipante.cognome}`
      );
    } else {
      console.log(`La posizione "${posizione}" non è disponibile.`);
    }
  }
}

export class IncluDO {
  private corsi: ICorso[] = [];
  private aziende: IAzienda[] = [];

  // Aggiungi un corso
  aggiungiCorso(corso: ICorso): void {
    this.corsi.push(corso);
    console.log(`Corso "${corso.titolo}" aggiunto con successo!`);
  }

  // Aggiungi un'azienda
  aggiungiAzienda(azienda: IAzienda): void {
    this.aziende.push(azienda);
    console.log(`Azienda "${azienda.nomeAzienda}" aggiunta con successo!`);
  }

  // Iscrivi un partecipante a un corso
  iscriviPartecipanteACorso(partecipante: IPartecipante, corso: ICorso): void {
    corso.aggiungiPartecipante(partecipante);
    console.log(
      `${partecipante.nome} ${partecipante.cognome} si è iscritto al corso "${corso.titolo}"`
    );
  }

  // Collega un partecipante a un'azienda con una posizione disponibile
  collegaPartecipanteAzienda(
    partecipante: IPartecipante,
    azienda: IAzienda,
    posizione: string
  ): void {
    if (azienda.posizioniAperte.includes(posizione)) {
      azienda.offriPosizione(partecipante, posizione);
      console.log(
        `Posizione "${posizione}" offerta a ${partecipante.nome} ${partecipante.cognome} presso "${azienda.nomeAzienda}"`
      );
    } else {
      console.log(
        `La posizione "${posizione}" non è disponibile presso "${azienda.nomeAzienda}"`
      );
    }
  }
}
