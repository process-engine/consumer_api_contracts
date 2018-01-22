import {Request, Response} from 'express';
import {IEventList, IProcessModel, IProcessModelList, IUserTaskList} from './index';

export interface IConsumerApiController {
  getProcessModels(request: Request, response: Response): Promise<IProcessModelList>;
  getProcessModelByKey(request: Request, response: Response): Promise<IProcessModel>;
  startProcess(request: Request, response: Response): Promise<void>;

  getEventsByProcessModel(request: Request, response: Response): Promise<IEventList>;
  getEventsByCorrelation(request: Request, response: Response): Promise<IEventList>;
  getEventsByVerifiedCorrelation(request: Request, response: Response): Promise<IEventList>;
  triggerEvent(request: Request, response: Response): Promise<void>;

  getUserTasksByProcessModel(request: Request, response: Response): Promise<IUserTaskList>;
  getUserTasksByCorrelation(request: Request, response: Response): Promise<IUserTaskList>;
  getUserTasksByVerifiedCorrelation(request: Request, response: Response): Promise<IUserTaskList>;
  finishUserTask(request: Request, response: Response): Promise<void>;
}
