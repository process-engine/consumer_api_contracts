import {IEventConsumerApi, IManualTaskConsumerApi, INotificationConsumerApi, IProcessModelConsumerApi, IUserTaskConsumerApi} from './apis/index';

/**
 * The primary access point for the ConsumerAPI.
 * This service contains all functions that the ConsumerAPI employs to
 * communicate with the ProcessEngine.
 */
export interface IConsumerApi
  extends IEventConsumerApi, IManualTaskConsumerApi, INotificationConsumerApi, IProcessModelConsumerApi, IUserTaskConsumerApi {}
