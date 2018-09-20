import {IIdentity} from '@essential-projects/iam_contracts';

import {
  ProcessEndedMessage,
  UserTaskFinishedMessage,
  UserTaskWaitingMessage,
} from '@process-engine/process_engine_contracts';
import {ConsumerContext} from './consumer_context';
import {CorrelationResult} from './correlation_result';
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

/**
 * The primary access point for the ConsumerAPI.
 * This service contains all functions that the ConsumerAPI employs to
 * communicate with the ProcessEngine.
 */
export interface IConsumerApi {
  /**
   * Retrieves a list of all ProcessModels that the requesting user is
   * authorized to see.
   *
   * @async
   * @param identity The requesting users identity.
   * @returns        A Promise, which resolves with the ProcessModel list,
   *                 or rejects an error, in case the request failed.
   */
  getProcessModels(identity: IIdentity): Promise<ProcessModelList>;

  /**
   * Retrieves a ProcessModel by its ID.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel to retrieve.
   * @returns              A Promise, which resolves with the ProcessModel,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see it.
   */
  getProcessModelById(identity: IIdentity, processModelId: string): Promise<ProcessModel>;

  /**
   * Starts a new instance of a ProcessModel with a specific ID.
   * Depending on the type of callback used, this function will resolve either
   * immediately after the ProcessInstance was started, or after it has reached
   * an end event.
   * This can either be a specific end event, or the first end event encountered
   * during execution.
   *
   * @async
   * @param identity          The requesting users identity.
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
  startProcessInstance(identity: IIdentity,
                       processModelId: string,
                       startEventId: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventId?: string,
                       processEndedCallback?: (processEnded: ProcessEndedMessage) => void|Promise<void>): Promise<ProcessStartResponsePayload>;

  /**
   * Retrieves the result of a specifc ProcessModel within a Correlation.
   * This only works for ProcessInstances that have finished execution.
   *
   * @async
   * @param identity       The requesting users identity.
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
  getProcessResultForCorrelation(identity: IIdentity, correlationId: string, processModelId: string): Promise<Array<CorrelationResult>>;

  /**
   * Retrieves a list of all triggerable events belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the events.
   * @returns              A Promise, which resolves with the retrieved events,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see the it.
   */
  getEventsForProcessModel(identity: IIdentity, processModelId: string): Promise<EventList>;

  /**
   * Retrieves a list of all triggerable events belonging to a correlation.
   *
   * @async
   * @param identity      The requesting users identity.
   * @param correlationId The ID of the Correlation for which to retrieve
   *                      the events.
   * @returns             A Promise, which resolves with the retrieved events,
   *                      or rejects an error, in case the request failed.
   *                      This can happen, if the ProcessModel was not found,
   *                      or the user is not authorized to see the it.
   */
  getEventsForCorrelation(identity: IIdentity, correlationId: string): Promise<EventList>;

  /**
   * Retrieves a list of all triggerable events belonging to an instance of a
   * specific ProcessModel within a Correlation.
   *
   * @async
   * @param identity       The requesting users identity.
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
  getEventsForProcessModelInCorrelation(identity: IIdentity, processModelId: string, correlationId: string): Promise<EventList>;

  /**
   * Triggers an event belonging to an instance of a specific ProcessModel
   * within a Correlation.
   *
   * @async
   * @param identity            The requesting users identity.
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
  triggerEvent(identity: IIdentity,
               processModelId: string,
               correlationId: string,
               eventId: string,
               eventTriggerPayload?: EventTriggerPayload): Promise<void>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       UserTasks.
   * @returns              A Promise, which resolves with the retrieved UserTasks,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see the it.
   */
  getUserTasksForProcessModel(identity: IIdentity, processModelId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to a specific
   * Correlation.
   *
   * @async
   * @param identity      The requesting users identity.
   * @param correlationId The ID of the Correlation for which to retrieve the
   *                      UserTasks.
   * @returns             A Promise, which resolves with the retrieved UserTasks,
   *                      or rejects an error, in case the request failed.
   *                      This can happen, if the Correlation was not found,
   *                      or the user is not authorized to see the it.
   */
  getUserTasksForCorrelation(identity: IIdentity, correlationId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a
   * specific ProcessModel within a Correlation.
   *
   * @async
   * @param identity       The requesting users identity.
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
  getUserTasksForProcessModelInCorrelation(identity: IIdentity, processModelId: string, correlationId: string): Promise<UserTaskList>;

  /**
   * Finishes a UserTask belonging to an instance of a specific ProcessModel
   * within a Correlation.
   *
   * @async
   * @param identity       The requesting users identity.
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
  finishUserTask(identity: IIdentity,
                 processModelId: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult?: UserTaskResult): Promise<void>;

  /**
   * Executes a callback when a user task is reached.
   *
   * @async
   * @param callback       The callback that will be executed when a user task
   *                       is reached. The message passed to the callback
   *                       contains further information about the user task.
   */
  onUserTaskWaiting(callback: (userTaskWaiting: UserTaskWaitingMessage) => void|Promise<void>): void;

  /**
   * Executes a callback when a user task is finished.
   *
   * @async
   * @param callback       The callback that will be executed when a user task
   *                       is finished. The message passed to the callback
   *                       contains further information about the user task.
   */
  onUserTaskFinished(callback: (userTaskFinished: UserTaskFinishedMessage) => void|Promise<void>): void;

  /**
   * Executes a callback when a process is terminated.
   *
   * @async
   * @param callback       The callback that will be executed when a user task
   *                       is reached. The message passed to the callback
   *                       contains further information about the process
   *                       terminated.
   */
  onProcessTerminated(callback: (processEnded: ProcessEndedMessage) => void|Promise<void>): void;

  /**
   * Executes a callback when a process ends.
   *
   * @async
   * @param callback       The callback that will be executed when a user task
   *                       is reached. The message passed to the callback
   *                       contains further information about the ended process.
   */
  onProcessEnded(callback: (processEnded: ProcessEndedMessage) => void|Promise<void>): void;
}
