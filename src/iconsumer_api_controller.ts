import {Request, Response} from 'express';

export interface IConsumerApiController {
  getProcessModels(request: Request, response: Response): void;
  getProcessModelByKey(request: Request, response: Response): void;
  startProcess(request: Request, response: Response): void;

  getEventsByProcessModel(request: Request, response: Response): void;
  getEventsByCorrelation(request: Request, response: Response): void;
  getEventsByVerifiedCorrelation(request: Request, response: Response): void;
  triggerEvent(request: Request, response: Response): void;

  getUserTasksByProcessModel(request: Request, response: Response): void;
  getUserTasksByCorrelation(request: Request, response: Response): void;
  getUserTasksByVerifiedCorrelation(request: Request, response: Response): void;
  finishUserTask(request: Request, response: Response): void;
}
