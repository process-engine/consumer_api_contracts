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
 * The primary access point for the ConsumerAPI.
 * This service contains all functions that the ConsumerAPI employs to
 * communicate with the ProcessEngine.
 */
export interface IConsumerApiService {
  /**
   * Retrieves a list of all ProcessModels that the requesting user is
   * authorized to see.
   *
   * @async
   * @param context The ConsumerAPI specific execution context of the
   *                requesting user.
   * @returns       A Promise, which resolves with the ProcessModel list,
   *                or rejects an error, in case the request failed.
   */
  getProcessModels(context: ConsumerContext): Promise<ProcessModelList>;

  /**
   * Retrieves a ProcessModel by its ID.
   *
   * @async
   * @param context        The ConsumerAPI specific execution context of the
   *                       requesting user.
   * @param processModelId The ID of the ProcessModel to retrieve.
   * @returns              A Promise, which resolves with the ProcessModel,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see it.
   */
  getProcessModelById(context: ConsumerContext, processModelId: string): Promise<ProcessModel>;

  /**
   * Starts a new instance of a ProcessModel with a specific ID.
   * Depending on the type of callback used, this function will resolve either
   * immediately after the ProcessInstance was started, or after it has reached
   * an end event.
   * This can either be a specific end event, or the first end event encountered
   * during execution.
   *
   * @async
   * @param context           The ConsumerAPI specific execution context of
   *                          the requesting user.
   * @param processModelId    The ID of the ProcessModel to retrieve.
   * @param startEventId      The ID of the start event through which to start
   *                          the ProcessInstance.
   * @param payload           Contains parameters to pass to the ProcessInstance.
   *                          Can optionally define a correlation id to use.
   * @param startCallbackType The type of start callback use. Depending on the
   *                          value used, the function will either resolve right
   *                          after starting the ProcessInstance,
   *                          or after reaching an end event.
   * @param endEventId        Contains the ID of the end event that the
   *                          ProcessEngine should wait for, before resolving.
   *                          Works only in conjunction with the startCallbackType
   *                          "CallbackOnEndEventReached".
   * @returns                 A Promise, which resolves with the execution result,
   *                          or rejects an error, in case the request failed.
   *                          This can happen, if the ProcessModel was not found,
   *                          or the user is not authorized to see it, or if
   *                          the ProcessInstance was interrupted prematurely because of an error.
   */
  startProcessInstance(context: ConsumerContext,
                       processModelId: string,
                       startEventId: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventId?: string): Promise<ProcessStartResponsePayload>;

  /**
   * Retrieves the result of a specifc ProcessModel within a Correlation.
   * This only works for ProcessInstances that have finished execution.
   *
   * @async
   * @param context        The ConsumerAPI specific execution context of the
   *                       requesting user.
   * @param correlationId  The ID of the correlation for which to retrieve
   *                       the result.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the result.
   * @returns              A Promise, which resolves with the correlation result,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel or correlation
   *                       were not found, or the user is not authorized to see
   *                       the result.
   */
  getProcessResultForCorrelation(context: ConsumerContext, correlationId: string, processModelId: string): Promise<Array<CorrelationResult>>;

  /**
   * Retrieves a list of all triggerable events belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param context        The ConsumerAPI specific execution context of the
   *                       requesting user.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the events.
   * @returns              A Promise, which resolves with the retrieved events,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see the it.
   */
  getEventsForProcessModel(context: ConsumerContext, processModelId: string): Promise<EventList>;

  /**
   * Retrieves a list of all triggerable events belonging to a correlation.
   *
   * @async
   * @param context       The ConsumerAPI specific execution context of the
   *                      requesting user.
   * @param correlationId The ID of the Correlation for which to retrieve
   *                      the events.
   * @returns             A Promise, which resolves with the retrieved events,
   *                      or rejects an error, in case the request failed.
   *                      This can happen, if the ProcessModel was not found,
   *                      or the user is not authorized to see the it.
   */
  getEventsForCorrelation(context: ConsumerContext, correlationId: string): Promise<EventList>;

  /**
   * Retrieves a list of all triggerable events belonging to an instance of a
   * specific ProcessModel within a Correlation.
   *
   * @async
   * @param context        The ConsumerAPI specific execution context of the
   *                       requesting user.
   * @param correlationId  The ID of the Correlation for which to retrieve
   *                       the events.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the events.
   * @returns              A Promise, which resolves with the retrieved events,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel or Correlation
   *                       was not found, or the user is not authorized to see
   *                       the it.
   */
  getEventsForProcessModelInCorrelation(context: ConsumerContext, processModelId: string, correlationId: string): Promise<EventList>;

  /**
   * Triggers an event belonging to an instance of a specific ProcessModel
   * within a Correlation.
   *
   * @async
   * @param context             The ConsumerAPI specific execution context of
   *                            the requesting user.
   * @param processModelId      The ID of the ProcessModel for which to trigger
   *                            the event.
   * @param correlationId       The ID of the correlation for which to trigger
   *                            the event.
   * @param eventId             The ID of the event to trigger.
   * @param eventTriggerPayload The payload with which to trigger the event.
   * @returns                   A Promise, which resolves without content,
   *                            or rejects an error, in case the request failed.
   *                            This can happen, if the event, ProcessModel or
   *                            correlation were not found,
   *                            or the user is not authorized to see either.
   */
  triggerEvent(context: ConsumerContext,
               processModelId: string,
               correlationId: string,
               eventId: string,
               eventTriggerPayload?: EventTriggerPayload): Promise<void>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param context        The ConsumerAPI specific execution context of the
   *                       requesting user.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       UserTasks.
   * @returns              A Promise, which resolves with the retrieved UserTasks,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see the it.
   */
  getUserTasksForProcessModel(context: ConsumerContext, processModelId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to a specific
   * Correlation.
   *
   * @async
   * @param context       The ConsumerAPI specific execution context of the
   *                      requesting user.
   * @param correlationId The ID of the Correlation for which to retrieve the
   *                      UserTasks.
   * @returns             A Promise, which resolves with the retrieved UserTasks,
   *                      or rejects an error, in case the request failed.
   *                      This can happen, if the Correlation was not found,
   *                      or the user is not authorized to see the it.
   */
  getUserTasksForCorrelation(context: ConsumerContext, correlationId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a
   * specific ProcessModel within a Correlation.
   *
   * @async
   * @param context        The ConsumerAPI specific execution context of the
   *                       requesting user.
   * @param correlationId  The ID of the Correlation for which to retrieve the
   *                       UserTasks.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       UserTasks.
   * @returns              A Promise, which resolves without content,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the event, ProcessModel or
   *                       correlation were not found,
   *                       or the user is not authorized to see either.
   */
  getUserTasksForProcessModelInCorrelation(context: ConsumerContext, processModelId: string, correlationId: string): Promise<UserTaskList>;

  /**
   * Finishes a UserTask belonging to an instance of a specific ProcessModel
   * within a Correlation.
   *
   * @async
   * @param context        The ConsumerAPI specific execution context of the
   *                       requesting user.
   * @param processModelId The ID of the ProcessModel for which to finish a
   *                       UserTask.
   * @param correlationId  The ID of the correlation for which to finish a UserTask.
   * @param userTaskId     The ID of UserTask to finish.
   * @param userTaskResult Optional: Contains a set of results with which to
   *                       finish the UserTask.
   * @returns              A Promise, which resolves without content, or rejects an error, in case the request failed.
   *                       This can happen, if the UserTask, ProcessModel or correlation were not found,
   *                       or the user is not authorized to see either.
   */
  finishUserTask(context: ConsumerContext,
                 processModelId: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult?: UserTaskResult): Promise<void>;
}
