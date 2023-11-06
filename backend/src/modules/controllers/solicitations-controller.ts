import { Request, Response } from "express";
import { SolicitationsService } from "../services/solicitations-service";

const solicitationsService = new SolicitationsService();

export const findAll = (req: Request, res: Response) => {
  const response = solicitationsService.findAll();
  res.json(response);
};

export const create = (req: Request, res: Response) => {
  const response = solicitationsService.create(req.body);
  res.json(response);
};

export const cardProblems = (req: Request, res: Response) => {
  const response = solicitationsService.cardProblems();
  res.json(response);
};

export const loans = (req: Request, res: Response) => {
  const response = solicitationsService.loans();
  res.json(response);
};

export const others = (req: Request, res: Response) => {
  const response = solicitationsService.others();
  res.json(response);
};

export const finish = (req: Request, res: Response) => {
  const response = solicitationsService.finish(Number(req.params.id));

  if (response instanceof Error) {
    res.json({ message: response.message, status: 404 });
  }

  res.json(response);
};
