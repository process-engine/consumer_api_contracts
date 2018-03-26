import {
  IEventList,
  IEventTriggerPayload,
  ProcessModel,
  ProcessModelList,
  ProcessStartRequestPayload,
  ProcessStartResponsePayload,
  ProcessStartReturnOnOptions,
  UserTaskList,
  UserTaskResult,
} from './data_models/index';

import {ConsumerContext} from './index';

export interface IConsumerApiService {
  // Process models
  getProcessModels(context: ConsumerContext): Promise<ProcessModelList>;
  getProcessModelByKey(context: ConsumerContext, processModelKey: string): Promise<ProcessModel>;
  startProcess(context: ConsumerContext,
               processModelKey: string,
               startEventKey: string,
               payload: ProcessStartRequestPayload,
               returnOn: ProcessStartReturnOnOptions): Promise<ProcessStartResponsePayload>;
  startProcessAndAwaitEndEvent(context: ConsumerContext,
                               processModelKey: string,
                               startEventKey: string,
                               endEventKey: string,
                               payload: ProcessStartRequestPayload): Promise<ProcessStartResponsePayload>;
  // Events
  getEventsForProcessModel(context: ConsumerContext, processModelKey: string): Promise<IEventList>;
  getEventsForCorrelation(context: ConsumerContext, correlationId: string): Promise<IEventList>;
  getEventsForProcessModelInCorrelation(context: ConsumerContext, processModelKey: string, correlationId: string): Promise<IEventList>;
  triggerEvent(context: ConsumerContext,
               processModelKey: string,
               correlationId: string,
               eventId: string,
               eventTriggerPayload?: IEventTriggerPayload): Promise<void>;
  // UserTasks
  getUserTasksForProcessModel(context: ConsumerContext, processModelKey: string): Promise<UserTaskList>;
  getUserTasksForCorrelation(context: ConsumerContext, correlationId: string): Promise<UserTaskList>;
  getUserTasksForProcessModelInCorrelation(context: ConsumerContext, processModelKey: string, correlationId: string): Promise<UserTaskList>;
  finishUserTask(context: ConsumerContext,
                 processModelKey: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult: UserTaskResult): Promise<void>;
}
