import {IEventList,
  IEventTriggerPayload,
  IProcessModel,
  IProcessModelList,
  IProcessStartRequestPayload,
  IProcessStartResponsePayload,
  IUserTaskList,
  IUserTaskResult,
  ProcessStartReturnOnOptions,
} from './data_models/index';

import {ExecutionContext} from '@essential-projects/core_contracts';

export interface IConsumerApiService {
  // Process models
  getProcessModels(): Promise<IProcessModelList>;
  getProcessModelByKey(processModelKey: string): Promise<IProcessModel>;
  startProcess(context: ExecutionContext,
               processModelKey: string,
               startEventKey: string,
               payload: IProcessStartRequestPayload,
               returnOn: ProcessStartReturnOnOptions): Promise<IProcessStartResponsePayload>;
  startProcessAndAwaitEndEvent(processModelKey: string,
                               startEventKey: string,
                               endEventKey: string,
                               payload: IProcessStartRequestPayload): Promise<IProcessStartResponsePayload>;
  // Events
  getEventsForProcessModel(processModelKey: string): Promise<IEventList>;
  getEventsForCorrelation(correlationId: string): Promise<IEventList>;
  getEventsForProcessModelInCorrelation(processModelKey: string, correlationId: string): Promise<IEventList>;
  triggerEvent(processModelKey: string,
               correlationId: string,
               eventId: string,
               eventTriggerPayload?: IEventTriggerPayload): Promise<void>;
  // UserTasks
  getUserTasksForProcessModel(processModelKey: string): Promise<IUserTaskList>;
  getUserTasksForCorrelation(correlationId: string): Promise<IUserTaskList>;
  getUserTasksForProcessModelInCorrelation(processModelKey: string, correlationId: string): Promise<IUserTaskList>;
  finishUserTask(processModelKey: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult: IUserTaskResult): Promise<void>;
}
