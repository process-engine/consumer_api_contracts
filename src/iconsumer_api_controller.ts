import {Request, Response} from 'express';

export interface IConsumerApiController {
  // Process models
  getProcessModels(request: Request, response: Response): Promise<void>;
  getProcessModelByKey(request: Request, response: Response): Promise<void>;
  startProcess(request: Request, response: Response): Promise<void>;
  startProcessAndAwaitEndEvent(request: Request, response: Response): Promise<void>;
  // Events
  getEventsForProcessModel(request: Request, response: Response): Promise<void>;
  getEventsForCorrelation(request: Request, response: Response): Promise<void>;
  getEventsForProcessModelInCorrelation(request: Request, response: Response): Promise<void>;
  triggerEvent(request: Request, response: Response): Promise<void>;
  triggerEventInCorrelation(request: Request, response: Response): Promise<void>;
  // UserTasks
  getUserTasksForProcessModel(request: Request, response: Response): Promise<void>;
  getUserTasksForCorrelation(request: Request, response: Response): Promise<void>;
  getUserTasksForProcessModelInCorrelation(request: Request, response: Response): Promise<void>;
  finishUserTask(request: Request, response: Response): Promise<void>;
  finishUserTaskInCorrelation(request: Request, response: Response): Promise<void>;
}
