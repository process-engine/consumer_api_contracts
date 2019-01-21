import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * The INotificationConsumerApi is to manage subscriptions for async notifications.
 */
export interface INotificationConsumerApi {

  /**
   * Removes the given notification subscription.
   *
   * @async
   * @param subscription The subscription to remove.
   */
  unsubscribe(subscription: Subscription): Promise<void>;

  /**
   * Removes all notification subscriptions for the given identity.
   *
   * @async
   * @param identity The identity for which to remove all subscriptions.
   */
  unsubscribeAllForIdentity(identity: IIdentity): Promise<void>;
}
