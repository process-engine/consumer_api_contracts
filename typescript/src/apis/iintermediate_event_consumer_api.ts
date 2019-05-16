import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

import {Messages} from '../messages/index';

/**
 * The IIntermediateEventConsumerApi is used to retreive and manage IntermediateEvents.
 */
export interface IIntermediateEventConsumerApi {
  /**
   * Executes the provided callback when a IntermediateEvent is reached.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             new IntermediateEvent is waiting.
   *                             The message passed to the callback contains
   *                             further information about the IntermediateEvent.
   * @param   subscribeOnce      Optional: If set to true, the subscription will
   *                             be automatically disposed, after the notification
   *                             was received once.
   * @returns                    The subscription created by the EventAggregator.
   *
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to create
   *                             event subscriptions.
   */
  onIntermediateEventWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnIntermediateEventWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a IntermediateEvent is finished.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when an
   *                             IntermediateEvent is finished.
   *                             The message passed to the callback contains
   *                             further information about the IntermediateEvent.
   * @param   subscribeOnce      Optional: If set to true, the subscription will
   *                             be automatically disposed, after the notification
   *                             was received once.
   * @returns                    The subscription created by the EventAggregator.
   *
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to create
   *                             event subscriptions.
   */
  onIntermediateEventFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnIntermediateEventFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
}
