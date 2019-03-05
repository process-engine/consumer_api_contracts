namespace ProcessEngine.ConsumerAPI.Contracts {
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using System;

    using EssentialProjects.IAM.Contracts;
    using ProcessEngine.ConsumerAPI.Contracts.APIs;

    /// <summary>
    /// API for starting and managing BMPN processes.
    /// </summary>
    public interface IConsumerAPI :
        IProcessModelConsumerApi,
        IUserTaskConsumerApi,
        IEventConsumerApi
        IManualTaskConsumerApi
    { }
}
