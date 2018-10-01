import {IConsumerApi} from './iconsumer_api';

/**
 * This interface wraps the accessor that the ConsumerApiClient will use
 * to connect to an internal or external ProcessEngine.
 * It is derived from IConsumerApi, because the accessor will have to
 * perform the same type of requests, regardless of which type of ProcessEngine
 * is used.
 */
export interface IConsumerApiAccessor extends IConsumerApi {}