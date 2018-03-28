import {Response} from 'express';
import {ConsumerRequest} from './consumer_request';

export interface IConsumerApiController {
  // Process models
  getProcessModels(request: ConsumerRequest, response: Response): Promise<void>;
  getProcessModelByKey(request: ConsumerRequest, response: Response): Promise<void>;
  startProcess(request: ConsumerRequest, response: Response): Promise<void>;
  startProcessAndAwaitEndEvent(request: ConsumerRequest, response: Response): Promise<void>;
  // Events
  getEventsForProcessModel(request: ConsumerRequest, response: Response): Promise<void>;
  getEventsForCorrelation(request: ConsumerRequest, response: Response): Promise<void>;
  getEventsForProcessModelInCorrelation(request: ConsumerRequest, response: Response): Promise<void>;
  triggerEvent(request: ConsumerRequest, response: Response): Promise<void>;
  // UserTasks
  getUserTasksForProcessModel(request: ConsumerRequest, response: Response): Promise<void>;
  getUserTasksForCorrelation(request: ConsumerRequest, response: Response): Promise<void>;
  getUserTasksForProcessModelInCorrelation(request: ConsumerRequest, response: Response): Promise<void>;
  finishUserTask(request: ConsumerRequest, response: Response): Promise<void>;
}
