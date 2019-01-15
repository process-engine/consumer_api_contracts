import {IIdentity} from '@essential-projects/iam_contracts';

import {Messages} from '../messages/index';

/**
 * The INotificationConsumerApi is used to manage Subscriptions for async
 * notifications.
 */
export interface INotificationConsumerApi {

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

  /**
   * Executes a callback when a process started.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a new ProcessInstance
   *                       was started. The message passed to the callback
   *                       contains further information about the started process.
   */
  onProcessStarted(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessStartedCallback): void;

  /**
   * Executes a callback when a process with a given ProcessModelId was started.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a new ProcessInstance
   *                       was started. The message passed to the callback
   *                       contains further information about the started process.
   * @param processModelId Id of the ProcessModel for which created instance a
  *                        notification should be send.
   */
  onProcessWithProcessModelIdStarted(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessStartedCallback, processModelId: string): void;

  /**
   * Executes a callback when a process is terminated.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a Process
   *                       is terminated. The message passed to the callback
   *                       contains further information about the process
   *                       terminated.
   */
  onProcessTerminated(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessTerminatedCallback): void;

  /**
   * Executes a callback when a process ends.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a Process
   *                       is finished. The message passed to the callback
   *                       contains further information about the finished process.
   */
  onProcessEnded(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessEndedCallback): void;

  /**
   * Executes a callback when a UserTask is reached.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a UserTask
   *                       is reached. The message passed to the callback
   *                       contains further information about the UserTask.
   */
  onUserTaskWaiting(identity: IIdentity, callback: Messages.CallbackTypes.OnUserTaskWaitingCallback): void;

  /**
   * Executes a callback when a UserTask is finished.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a UserTask
   *                       is finished. The message passed to the callback
   *                       contains further information about the UserTask.
   */
  onUserTaskFinished(identity: IIdentity, callback: Messages.CallbackTypes.OnUserTaskFinishedCallback): void;

  /**
   * Executes a callback when a UserTask for the given identity is reached.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a UserTask
   *                       is reached. The message passed to the callback
   *                       contains further information about the UserTask.
   */
  onUserTaskForIdentityWaiting(identity: IIdentity, callback: Messages.CallbackTypes.OnUserTaskWaitingCallback): void;

  /**
   * Executes a callback when a UserTask for the given identity is finished.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a UserTask
   *                       is finished. The message passed to the callback
   *                       contains further information about the UserTask.
   */
  onUserTaskForIdentityFinished(identity: IIdentity, callback: Messages.CallbackTypes.OnUserTaskFinishedCallback): void;
}
