import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';
import {Messages} from '../messages/index';

/**
 * The INotificationConsumerApi is used to manage subscriptions for async notifications.
 */
export interface INotificationConsumerApi {

  /**
   * Removes the given notification subscription.
   *
   * @async
   * @param identity     The requesting users identity.
   * @param subscription The subscription to remove.
   */
  removeSubscription(identity: IIdentity, subscription: Subscription): Promise<void>;

  /**
   * Executes the provided callback when a IntermediateThrowEvent is triggered.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             new IntermediateEvent is triggered.
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
  onIntermediateThrowEventTriggered(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnIntermediateThrowEventTriggeredCallback,
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
  onIntermediateCatchEventFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnIntermediateCatchEventFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
}
