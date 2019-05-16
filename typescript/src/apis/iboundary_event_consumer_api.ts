import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

import {Messages} from '../messages/index';

/**
 * The IBoundaryEventConsumerApi is used to retreive and manage BoundaryEvents.
 */
export interface IBoundaryEventConsumerApi {
  /**
   * Executes the provided callback when a BoundaryEvent is reached.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             new BoundaryEvent is waiting.
   *                             The message passed to the callback contains
   *                             further information about the BoundaryEvent.
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
  onBoundaryEventWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnBoundaryEventWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a BoundaryEvent is finished.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when an
   *                             BoundaryEvent is finished.
   *                             The message passed to the callback contains
   *                             further information about the BoundaryEvent.
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
  onBoundaryEventFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnBoundaryEventFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
}
