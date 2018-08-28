import {IConsumerApiService} from './iconsumer_api_service';

/**
 * This interface wraps the accessor that the ConsumerApiClientService will use
 * to connect to an internal or external process engine.
 * It is derived from IConsumerApiService, because the accessor will have to
 * perform the same type of requests as the service,
 * regardless of which type of process engine is used.
 */
export interface IConsumerApiAccessor extends IConsumerApiService {}
