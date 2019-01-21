import {Subscription} from '@essential-projects/event_aggregator_contracts';

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
}
