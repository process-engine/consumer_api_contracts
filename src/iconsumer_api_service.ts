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
  getProcessModelById(context: ConsumerContext, processModelId: string): Promise<ProcessModel>;
  startProcessInstance(context: ConsumerContext,
                       processModelId: string,
                       startEventId: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventId?: string): Promise<ProcessStartResponsePayload>;
  getProcessResultForCorrelation(context: ConsumerContext, correlationId: string, processModelId: string): Promise<Array<CorrelationResult>>;
  // Events
  getEventsForProcessModel(context: ConsumerContext, processModelId: string): Promise<EventList>;
  getEventsForCorrelation(context: ConsumerContext, correlationId: string): Promise<EventList>;
  getEventsForProcessModelInCorrelation(context: ConsumerContext, processModelId: string, correlationId: string): Promise<EventList>;
  triggerEvent(context: ConsumerContext,
               processModelId: string,
               correlationId: string,
               eventId: string,
               eventTriggerPayload?: EventTriggerPayload): Promise<void>;
  // UserTasks
  getUserTasksForProcessModel(context: ConsumerContext, processModelId: string): Promise<UserTaskList>;
  getUserTasksForCorrelation(context: ConsumerContext, correlationId: string): Promise<UserTaskList>;
  getUserTasksForProcessModelInCorrelation(context: ConsumerContext, processModelId: string, correlationId: string): Promise<UserTaskList>;
  finishUserTask(context: ConsumerContext,
                 processModelId: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult: UserTaskResult): Promise<void>;
}
