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

import {ConsumerContext} from './consumer_context';
import {CorrelationResult} from './correlation_result';

export interface IConsumerApiService {
  // Process models
  getProcessModels(context: ConsumerContext): Promise<ProcessModelList>;
  getProcessModelByKey(context: ConsumerContext, processModelKey: string): Promise<ProcessModel>;
  startProcessInstance(context: ConsumerContext,
                       processModelKey: string,
                       startEventKey: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventKey?: string): Promise<ProcessStartResponsePayload>;
  getProcessResultForCorrelation(context: ConsumerContext, correlationId: string, processModelKey: string): Promise<Array<CorrelationResult>>;
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
