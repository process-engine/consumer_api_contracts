import {IIdentity} from '@essential-projects/iam_contracts';

import {ManualTaskList} from '../data_models/manual_task/index';
import {Messages} from '../messages/index';

/**
 * The IManualTaskConsumerApi is used to retreive and manage ManualTasks.
 */
export interface IManualTaskConsumerApi {

  /**
   * Retrieves a list of all suspended ManualTasks belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       ManualTasks.
   * @returns              A Promise, which resolves with the retrieved ManualTasks,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see it.
   */
  getManualTasksForProcessModel(identity: IIdentity, processModelId: string): Promise<ManualTaskList>;

  /**
   * Retrieves a list of all suspended ManualTasks belonging to a specific
   * Correlation.
   *
   * @async
   * @param identity      The requesting users identity.
   * @param correlationId The ID of the Correlation for which to retrieve the
   *                      ManualTasks.
   * @returns             A Promise, which resolves with the retrieved ManualTasks,
   *                      or rejects an error, in case the request failed.
   *                      This can happen, if the Correlation was not found,
   *                      or the user is not authorized to see it.
   */
  getManualTasksForCorrelation(identity: IIdentity, correlationId: string): Promise<ManualTaskList>;

  /**
   * Retrieves a list of all suspended ManualTasks belonging to an instance of a
   * specific ProcessModel within a Correlation.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the Correlation for which to retrieve the
   *                       ManualTasks.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       ManualTasks.
   * @returns              A Promise, which resolves without content,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the event, ProcessModel or
   *                       correlation were not found,
   *                       or the user is not authorized to see either.
   */
  getManualTasksForProcessModelInCorrelation(identity: IIdentity, processModelId: string, correlationId: string): Promise<ManualTaskList>;

  /**
   * Gets all waiting ManualTasks belonging to the given identity.
   *
   * @async
   * @param   identity The identity for which to get the ManualTasks.
   * @returns          The list of ManualTasks.
   */
  getWaitingManualTasksByIdentity(identity: IIdentity): Promise<ManualTaskList>;

  /**
   * Finishes a ManualTask belonging to an instance of a specific ProcessModel
   * within a Correlation.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processInstanceId The ID of the ProcessInstance for which to finish a
   *                       ManualTask.
   * @param correlationId  The ID of the correlation for which to finish a ManualTask.
   * @param manualTaskInstanceId The instance ID of a ManualTask to finish.
   * @param manualTaskResult Optional: Contains a set of results with which to
   *                       finish the ManualTask.
   * @returns              A Promise, which resolves without content, or rejects an error, in case the request failed.
   *                       This can happen, if the ManualTask, ProcessModel or correlation were not found,
   *                       or the user is not authorized to see either.
   */
  finishManualTask(identity: IIdentity,
                   processInstanceId: string,
                   correlationId: string,
                   manualTaskInstanceId: string): Promise<void>;

  /**
   * Executes a callback when a manual task is reached.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a manual task
   *                       is reached. The message passed to the callback
   *                       contains further information about the manual task.
   */
  onManualTaskWaiting(identity: IIdentity, callback: Messages.CallbackTypes.OnManualTaskWaitingCallback): void;

  /**
   * Executes a callback when a manual task is finished.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a manual task
   *                       is finished. The message passed to the callback
   *                       contains further information about the manual task.
   */
  onManualTaskFinished(identity: IIdentity, callback: Messages.CallbackTypes.OnManualTaskFinishedCallback): void;

  /**
   * Executes a callback when a ManualTask for the given identity is reached.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a ManualTask
   *                       is reached. The message passed to the callback
   *                       contains further information about the ManualTask.
   */
  onManualTaskForIdentityWaiting(identity: IIdentity, callback: Messages.CallbackTypes.OnManualTaskWaitingCallback): void;

  /**
   * Executes a callback when a ManualTask for the given identity is finished.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a ManualTask
   *                       is finished. The message passed to the callback
   *                       contains further information about the ManualTask.
   */
  onManualTaskForIdentityFinished(identity: IIdentity, callback: Messages.CallbackTypes.OnManualTaskFinishedCallback): void;
}
