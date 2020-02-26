import {APIs} from './apis/index';
import {ApplicationInfo} from './data_models/application_info';

/**
 * The client provides endpoints for all UseCases the ConsumerAPI employs.
 */
export interface IConsumerApiClient
  extends APIs.IEmptyActivityConsumerApi,
  APIs.IEventConsumerApi,
  APIs.IExternalTaskConsumerApi,
  APIs.IManualTaskConsumerApi,
  APIs.INotificationConsumerApi,
  APIs.IProcessModelConsumerApi,
  APIs.IUserTaskConsumerApi,
  APIs.IFlowNodeInstanceConsumerApi {}

/**
 * The client interface for getting information about the ProcessEngineRuntime.
 */
export interface IDomainInfoclient {
  getApplicationInfo(): Promise<ApplicationInfo>;
}
