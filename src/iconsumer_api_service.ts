import {
  IEventList,
  IEventTriggerPayload,
  IProcessModel,
  IProcessModelList,
  IProcessStartRequestPayload,
  IProcessStartResponsePayload,
  ProcessStartReturnOnOptions,
  UserTaskList,
  UserTaskResult,
} from './data_models/index';

import {IConsumerContext} from './index';

export interface IConsumerApiService {
  // Process models
  getProcessModels(context: IConsumerContext): Promise<IProcessModelList>;
  getProcessModelByKey(context: IConsumerContext, processModelKey: string): Promise<IProcessModel>;
  startProcess(context: IConsumerContext,
               processModelKey: string,
               startEventKey: string,
               payload: IProcessStartRequestPayload,
               returnOn: ProcessStartReturnOnOptions): Promise<IProcessStartResponsePayload>;
  startProcessAndAwaitEndEvent(context: IConsumerContext,
                               processModelKey: string,
                               startEventKey: string,
                               endEventKey: string,
                               payload: IProcessStartRequestPayload): Promise<IProcessStartResponsePayload>;
  // Events
  getEventsForProcessModel(context: IConsumerContext, processModelKey: string): Promise<IEventList>;
  getEventsForCorrelation(context: IConsumerContext, correlationId: string): Promise<IEventList>;
  getEventsForProcessModelInCorrelation(context: IConsumerContext, processModelKey: string, correlationId: string): Promise<IEventList>;
  triggerEvent(context: IConsumerContext,
               processModelKey: string,
               correlationId: string,
               eventId: string,
               eventTriggerPayload?: IEventTriggerPayload): Promise<void>;
  // UserTasks
  getUserTasksForProcessModel(context: IConsumerContext, processModelKey: string): Promise<UserTaskList>;
  getUserTasksForCorrelation(context: IConsumerContext, correlationId: string): Promise<UserTaskList>;
  getUserTasksForProcessModelInCorrelation(context: IConsumerContext, processModelKey: string, correlationId: string): Promise<UserTaskList>;
  finishUserTask(context: IConsumerContext,
                 processModelKey: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult: UserTaskResult): Promise<void>;
}
