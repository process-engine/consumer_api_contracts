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

/**
 * The primary access point for the consumer api.
 * This service contains all functions that the consumer api employs to communicate with the process engine.
 */
export interface IConsumerApiService {
  /**
   * Retrieves a list of all process models that the requesting user is authorized to see.
   *
   * @async
   * @param context The consumer-api specific execution context of the requesting user.
   * @returns       A Promise, which resolves with the process model list, or rejects an error, in case the request failed.
   */
  getProcessModels(context: ConsumerContext): Promise<ProcessModelList>;
  /**
   * Retrieves a process model by its id.
   *
   * @async
   * @param context        The consumer-api specific execution context of the requesting user.
   * @param processModelId The id of the process model to retrieve.
   * @returns              A Promise, which resolves with the process model, or rejects an error, in case the request failed.
   *                       This can happen, if the process model was not found, or the user is not authorized to see it.
   */
  getProcessModelById(context: ConsumerContext, processModelId: string): Promise<ProcessModel>;
  /**
   * Starts a new instance of a process model with a specific id.
   * Depending on the type of callback used, this function will resolve either immediately after the process instance was started,
   * or after it has reached an end event.
   * This can either be a specific end event, or the first end event encountered during execution.
   *
   * @async
   * @param context           The consumer-api specific execution context of the requesting user.
   * @param processModelId    The id of the process model to retrieve.
   * @param startEventId      The id of the start event through which to start the process instance.
   * @param payload           Contains parameters to pass to the process instance. Can optionally define a correlation id to use.
   * @param startCallbackType The type of start callback use. Depending on the value used, the function will either resolve right
   *                          after starting the process instance, or after reaching an end event.
   * @param endEventId        Contains the id of the end event that the process engine should wait for, before resolving.
   *                          Works only in conjunction with the startCallbackType "CallbackOnEndEventReached".
   * @returns                 A Promise, which resolves with the execution result, or rejects an error, in case the request failed.
   *                          This can happen, if the process model was not found, or the user is not authorized to see it, or if
   *                          the process instance was interrupted prematurely because of an error.
   */
  startProcessInstance(context: ConsumerContext,
                       processModelId: string,
                       startEventId: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventId?: string): Promise<ProcessStartResponsePayload>;
 /**
  * Retrieves the result of a specifc process model within a correlation.
  * This only works for process instances that have finished execution.
  *
  * @async
  * @param context        The consumer-api specific execution context of the requesting user.
  * @param correlationId  The id of the correlation for which to retrieve the result.
  * @param processModelId The id of the process model for which to retrieve the result.
  * @returns              A Promise, which resolves with the retrieved correlation result, or rejects an error, in case the request failed.
  *                       This can happen, if the process model or correlation were not found, or the user is not authorized to see the result.
  */
  getProcessResultForCorrelation(context: ConsumerContext, correlationId: string, processModelId: string): Promise<Array<CorrelationResult>>;
  /**
   * Retrieves a list of all triggerable events belonging to an instance of a specific process model.
   *
   * @async
   * @param context        The consumer-api specific execution context of the requesting user.
   * @param processModelId The id of the process model for which to retrieve the events.
   * @returns              A Promise, which resolves with the retrieved events or rejects an error, in case the request failed.
   *                       This can happen, if the process model was not found, or the user is not authorized to see the it.
   */
  getEventsForProcessModel(context: ConsumerContext, processModelId: string): Promise<EventList>;
  /**
   * Retrieves a list of all triggerable events belonging to a specific correlation.
   *
   * @async
   * @param context        The consumer-api specific execution context of the requesting user.
   * @param correlationId  The id of the correlation for which to retrieve the events.
   * @returns              A Promise, which resolves with the retrieved events, or rejects an error, in case the request failed.
   *                       This can happen, if the correlation was not found, or the user is not authorized to see the it.
   */
  getEventsForCorrelation(context: ConsumerContext, correlationId: string): Promise<EventList>;
  /**
   * Retrieves a list of all triggerable events belonging to an instance of a specific process model within a correlation.
   *
   * @async
   * @param context        The consumer-api specific execution context of the requesting user.
   * @param correlationId  The id of the correlation for which to retrieve the events.
   * @param processModelId The id of the process model for which to retrieve the events.
   * @returns              A Promise, which resolves with the retrieved events, or rejects an error, in case the request failed.
   *                       This can happen, if the process model or correlation were not found, or the user is not authorized to see either.
   */
  getEventsForProcessModelInCorrelation(context: ConsumerContext, processModelId: string, correlationId: string): Promise<EventList>;
  /**
   * Triggers an event belonging to an instance of a specific process model within a correlation.
   *
   * @async
   * @param context             The consumer-api specific execution context of the requesting user.
   * @param processModelId      The id of the process model for which to finish a user task.
   * @param correlationId       The id of the correlation for which to finish a user task.
   * @param eventId             The id of the event to trigger.
   * @param eventTriggerPayload The payload with which to trigger the event.
   * @returns                   A Promise, which resolves without content, or rejects an error, in case the request failed.
   *                            This can happen, if the event, process model or correlation were not found,
   *                            or the user is not authorized to see either.
   */
  triggerEvent(context: ConsumerContext,
               processModelId: string,
               correlationId: string,
               eventId: string,
               eventTriggerPayload?: EventTriggerPayload): Promise<void>;
 /**
  * Retrieves a list of all suspended user tasks belonging to an instance of a specific process model.
  *
  * @async
  * @param context        The consumer-api specific execution context of the requesting user.
  * @param processModelId The id of the process model for which to retrieve the user tasks.
  * @returns              A Promise, which resolves with the retrieved user tasks or rejects an error, in case the request failed.
  *                       This can happen, if the process model was not found, or the user is not authorized to see the it.
  */
  getUserTasksForProcessModel(context: ConsumerContext, processModelId: string): Promise<UserTaskList>;
  /**
   * Retrieves a list of all suspended user tasks belonging to a specific correlation.
   *
   * @async
   * @param context        The consumer-api specific execution context of the requesting user.
   * @param correlationId  The id of the correlation for which to retrieve the user tasks.
   * @returns              A Promise, which resolves with the retrieved user tasks, or rejects an error, in case the request failed.
   *                       This can happen, if the correlation was not found, or the user is not authorized to see the it.
   */
  getUserTasksForCorrelation(context: ConsumerContext, correlationId: string): Promise<UserTaskList>;
  /**
   * Retrieves a list of all suspended user tasks belonging to an instance of a specific process model within a correlation.
   *
   * @async
   * @param context        The consumer-api specific execution context of the requesting user.
   * @param correlationId  The id of the correlation for which to retrieve the user tasks.
   * @param processModelId The id of the process model for which to retrieve the user tasks.
   * @returns              A Promise, which resolves with the retrieved user tasks, or rejects an error, in case the request failed.
   *                       This can happen, if the process model or correlation were not found, or the user is not authorized to see either.
   */
  getUserTasksForProcessModelInCorrelation(context: ConsumerContext, processModelId: string, correlationId: string): Promise<UserTaskList>;
  /**
   * Finishes a user task belonging to an instance of a specific process model within a correlation.
   *
   * @async
   * @param context        The consumer-api specific execution context of the requesting user.
   * @param processModelId The id of the process model for which to finish a user task.
   * @param correlationId  The id of the correlation for which to finish a user task.
   * @param userTaskId     The id of user task to finish.
   * @param userTaskResult Contains a set of results with which to finish the user task.
   * @returns              A Promise, which resolves without content, or rejects an error, in case the request failed.
   *                       This can happen, if the user task, process model or correlation were not found,
   *                       or the user is not authorized to see either.
   */
  finishUserTask(context: ConsumerContext,
                 processModelId: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult: UserTaskResult): Promise<void>;
}
