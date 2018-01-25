import {Request, Response} from 'express';
import {IEventList, IProcessModel, IProcessModelList, IUserTaskList} from './index';

export interface IConsumerApiController {
  getProcessModels(request: Request, response: Response): Promise<void>;
  getProcessModelByKey(request: Request, response: Response): Promise<void>;
  startProcess(request: Request, response: Response): Promise<void>;

  getEventsByProcessModel(request: Request, response: Response): Promise<void>;
  getEventsByCorrelation(request: Request, response: Response): Promise<void>;
  getEventsByVerifiedCorrelation(request: Request, response: Response): Promise<void>;
  triggerEvent(request: Request, response: Response): Promise<void>;

  getUserTasksByProcessModel(request: Request, response: Response): Promise<void>;
  getUserTasksByCorrelation(request: Request, response: Response): Promise<void>;
  getUserTasksByVerifiedCorrelation(request: Request, response: Response): Promise<void>;
  finishUserTask(request: Request, response: Response): Promise<void>;
}
