import {
  EventList,
  EventTriggerPayload,
  ProcessModel,
  ProcessModelList,
  ProcessStartRequestPayload,
  ProcessStartResponsePayload,
  StartCallbackType,
  UserTaskList,
  UserTaskResult,
} from './data_models/index';
import {ICorrelationResult} from './icorrelation_result';

import {ConsumerContext} from './index';

export interface IConsumerApiService {
  // Process models
  getProcessModels(context: ConsumerContext): Promise<ProcessModelList>;
  getProcessModelByKey(context: ConsumerContext, processModelKey: string): Promise<ProcessModel>;
  startProcessInstance(context: ConsumerContext,
                       processModelKey: string,
                       startEventKey: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType): Promise<ProcessStartResponsePayload>;
  startProcessInstanceAndAwaitEndEvent(context: ConsumerContext,
                                       processModelKey: string,
                                       startEventKey: string,
                                       endEventKey: string,
                                       payload: ProcessStartRequestPayload): Promise<ProcessStartResponsePayload>;
  getCorrelationResults(context: ConsumerContext, correlationId: string): Promise<ICorrelationResult>;
  // Events
  getEventsForProcessModel(context: ConsumerContext, processModelKey: string): Promise<EventList>;
  getEventsForCorrelation(context: ConsumerContext, correlationId: string): Promise<EventList>;
  getEventsForProcessModelInCorrelation(context: ConsumerContext, processModelKey: string, correlationId: string): Promise<EventList>;
  triggerEvent(context: ConsumerContext,
               processModelKey: string,
               correlationId: string,
               eventId: string,
               eventTriggerPayload?: EventTriggerPayload): Promise<void>;
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
