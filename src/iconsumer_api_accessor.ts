import {IConsumerApiService} from './iconsumer_api_service';

// This interface wrappes the accessor that the ConsumerApiClientService will use to connect to an internal or external process engine.
// The signatures will be the same as with the IConsumerApiService, because the accessor will have to perform the same type of requests,
// regardless of which type of process engine is used.
export interface IConsumerApiAccessor extends IConsumerApiService {}
