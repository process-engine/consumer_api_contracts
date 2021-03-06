﻿namespace ProcessEngine.ConsumerAPI.Contracts
{
    using ProcessEngine.ConsumerAPI.Contracts.APIs;

    /// <summary>
    /// API for starting and managing BMPN processes.
    /// </summary>
    public interface IConsumerApiClient :
        IApplicationInfoConsumerApi,
        IEmptyActivityConsumerApi,
        IEventConsumerApi,
        IExternalTaskConsumerApi,
        IManualTaskConsumerApi,
        IProcessModelConsumerApi,
        IUserTaskConsumerApi
    { }
}
