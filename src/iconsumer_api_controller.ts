import {Request, Response} from 'express';

export interface IConsumerApiController {
  // Process models
  getProcessModels(request: Request, response: Response): Promise<void>;
  getProcessModelByKey(request: Request, response: Response): Promise<void>;
  startProcess(request: Request, response: Response): Promise<void>;
  startProcessAndAwaitEndEvent(request: Request, response: Response): Promise<void>;
  // Events
  getProcessModelEvents(request: Request, response: Response): Promise<void>;
  getCorrelationEvents(request: Request, response: Response): Promise<void>;
  getProcessModelCorrelationEvents(request: Request, response: Response): Promise<void>;
  triggerEvent(request: Request, response: Response): Promise<void>;
  triggerProcessModelCorrelationEvent(request: Request, response: Response): Promise<void>;
  // UserTasks
  getProcessModelUserTasks(request: Request, response: Response): Promise<void>;
  getCorrelationUserTasks(request: Request, response: Response): Promise<void>;
  getProcessModelCorrelationUserTasks(request: Request, response: Response): Promise<void>;
  finishUserTask(request: Request, response: Response): Promise<void>;
  finishProcessModelCorrelationUserTask(request: Request, response: Response): Promise<void>;
}
