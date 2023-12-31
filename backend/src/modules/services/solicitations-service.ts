import { Solicitation } from "../../models/solicitation";
import { examples } from "../../example-solicitations";

export class SolicitationsService {
  private solicitations: Solicitation[] = examples;

  public findAll(): Solicitation[] {
    return this.solicitations;
  }

  public create(data: Solicitation): Solicitation {
    const { subject, description } = data;

    const newSolicitation: Solicitation = {
      id: this.solicitations.length + 1,
      client_id: Math.floor(Math.random() * 9999) + 1,
      subject,
      description,
      solved: false,
    };

    this.solicitations.push(newSolicitation);
    return newSolicitation;
  }

  public cardProblems(): { serving: Solicitation[]; inRow: number } {
    const cardProblems = this.solicitations.filter(
      (solicitation) =>
        solicitation.subject === "Problemas com cartão" && !solicitation.solved
    );

    const serving = cardProblems.slice(0, 3);
    const inRow = cardProblems.slice(3);

    return { serving, inRow: inRow.length };
  }

  public loans(): { serving: Solicitation[]; inRow: number } {
    const loans = this.solicitations.filter(
      (solicitation) =>
        solicitation.subject === "Contratação de empréstimo" &&
        !solicitation.solved
    );

    const serving = loans.slice(0, 3);
    const inRow = loans.slice(3);

    return { serving, inRow: inRow.length };
  }

  public others(): { serving: Solicitation[]; inRow: number } {
    const loans = this.solicitations.filter(
      (solicitation) =>
        solicitation.subject !== "Problemas com cartão" &&
        solicitation.subject !== "Contratação de empréstimo" &&
        !solicitation.solved
    );

    const serving = loans.slice(0, 3);
    const inRow = loans.slice(3);

    return { serving, inRow: inRow.length };
  }

  public finish(id: number): Solicitation | Error {
    const finished = this.solicitations.find(
      (solicitation) => solicitation.id == id
    );

    if (!finished) return new Error("Solicitation not found.");

    finished.solved = true;

    return finished;
  }
}
