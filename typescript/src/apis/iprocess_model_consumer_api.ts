import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

import {DataModels} from '../data_models/index';
import {Messages} from '../messages/index';

/**
 * The IProcessModelConsumerApi is used to retreive ProcessModels and start ProcessInstances.
 */
export interface IProcessModelConsumerApi {
  /**
   * Retrieves a list of all ProcessModels that the requesting user is
   * authorized to see.
   *
   * @async
   * @param identity The requesting users identity.
   * @returns        A Promise, which resolves with the ProcessModel list,
   *                 or rejects an error, in case the request failed.
   */
  getProcessModels(identity: IIdentity): Promise<DataModels.ProcessModels.ProcessModelList>;

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
  getProcessModelById(identity: IIdentity, processModelId: string): Promise<DataModels.ProcessModels.ProcessModel>;

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
                       payload: DataModels.ProcessModels.ProcessStartRequestPayload,
                       startCallbackType: DataModels.ProcessModels.StartCallbackType,
                       endEventId?: string,
                       processEndedCallback?: Messages.CallbackTypes.OnProcessEndedCallback,
                      ): Promise<DataModels.ProcessModels.ProcessStartResponsePayload>;

  /**
   * Retrieves the result of a specific ProcessModel within a Correlation.
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
  getProcessResultForCorrelation(identity: IIdentity, correlationId: string, processModelId: string): Promise<Array<DataModels.CorrelationResult>>;

  /**
   * Gets all active ProcessInstances belonging to the given identity.
   *
   * @async
   * @param   identity The identity for which to get the ProcessInstances.
   * @returns          The list of ProcessInstances.
   */
  getProcessInstancesByIdentity(identity: IIdentity): Promise<Array<DataModels.ProcessInstance>>;

  /**
   * Executes a callback when a process started.
   *
   * @async
   * @param   identity The requesting users identity.
   * @param   callback The callback that will be executed when a new
   *                   ProcessInstance was started.
   *                   The message passed to the callback contains further
   *                   information about the started process.
   * @returns          The Subscription created by the EventAggregator.
   */
  onProcessStarted(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessStartedCallback): Subscription | Promise<Subscription>;

  /**
   * Executes a callback when a new ProcessInstance for a given ProcessModelId
   * was started.
   *
   * @async
   * @param   identity       The requesting users identity.
   * @param   callback       The callback that will be executed when a new
   *                         ProcessInstance was started.
   *                         The message passed to the callback contains further
   *                         information about the started ProcessInstance.
   * @param   processModelId The ID of the ProcessModel for which to receive
   *                         notifications.
   * @returns                The Subscription created by the EventAggregator.
   */
  onProcessWithProcessModelIdStarted(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnProcessStartedCallback,
    processModelId: string,
  ): Subscription | Promise<Subscription>;

  /**
   * Executes a callback when a ProcessInstance is terminated.
   *
   * @async
   * @param   identity The requesting users identity.
   * @param   callback The callback that will be executed when a
   *                   ProcessInstance is terminated.
   *                   The message passed to the callback contains further
   *                   information about the ProcessInstance terminated.
   * @returns          The Subscription created by the EventAggregator.
   */
  onProcessTerminated(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessTerminatedCallback): Subscription | Promise<Subscription>;

  /**
   * Executes a callback when a ProcessInstance ends.
   *
   * @async
   * @param identity The requesting users identity.
   * @param callback The callback that will be executed when a
   *                 ProcessInstance is finished.
   *                 The message passed to the callback contains further
   *                 information about the finished ProcessInstance.
   * @returns        The Subscription created by the EventAggregator.
   */
  onProcessEnded(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessEndedCallback): Subscription | Promise<Subscription>;
}
