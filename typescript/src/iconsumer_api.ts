import {APIs} from './apis/index';

/**
 * The primary access point for the ConsumerAPI.
 * This service contains all functions that the ConsumerAPI employs to
 * communicate with the ProcessEngine.
 */
export interface IConsumerApi
  extends APIs.IBoundaryEventConsumerApi,
  APIs.ICallActivityConsumerApi,
  APIs.IEmptyActivityConsumerApi,
  APIs.IEventConsumerApi,
  APIs.IIntermediateEventConsumerApi,
  APIs.IManualTaskConsumerApi,
  APIs.INotificationConsumerApi,
  APIs.IProcessModelConsumerApi,
  APIs.IUserTaskConsumerApi {}
