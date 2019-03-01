namespace ProcessEngine.ConsumerAPI.Contracts.APIs
{
    using System;
    using System.Threading.Tasks;

    using EssentialProjects.IAM.Contracts;
    using ProcessEngine.ConsumerAPI.Contracts.DataModel;

    /// <summary>
    /// The IEventConsumerApi is used to retrieve waiting events and to trigger
    /// them.
    /// </summary>
    public interface IEventConsumerApi
    {
        /// <summary>
        /// Retrieves a list of all triggerable events belonging to an instance
        /// of a specific ProcessModel.
        /// </summary>
        /// <param name="identity">The requesting users identity.</param>
        /// <param name="processModelId">
        /// The ID of the ProcessModel for which to retrieve the events.
        /// </param>
        /// <returns>
        /// A task that is finished once the events are retrieved. If any
        /// errors occur the task fails (e.g. the ProcessModel was not found or
        /// the user is not authorized).
        /// </returns>
        Task<EventList> GetEventsForProcessModel(IIdentity identity, string processModelId);

        /// <summary>
        /// Retrieves a list of all triggerable events belonging to an instance
        /// of a specific ProcessModel.
        /// </summary>
        /// <param name="identity">The requesting users identity.</param>
        /// <param name="correlationId">
        /// The ID of the Correlation for which to retrieve the events.
        /// </param>
        /// <returns>
        /// A task that is finished once the events are retrieved. If any
        /// errors occur the task fails (e.g. the ProcessModel was not found or
        /// the user is not authorized).
        /// </returns>
        Task<EventList> GetEventsForCorrelation(IIdentity identity, string correlationId);

        /// <summary>
        /// Retrieves a list of all triggerable events belonging to an instance
        /// of a specific ProcessModel within a Correlation.
        /// </summary>
        /// <param name="identity">The requesting users identity.</param>
        /// <param name="processModelId">
        /// The ID of the ProcessModel for which to retrieve the events.
        /// </param>
        /// <param name="correlationId">
        /// The ID of the Correlation for which to retrieve the events.
        /// </param>
        /// <returns>
        /// A task that is finished once the events are retrieved. If any
        /// errors occur the task fails (e.g. the ProcessModel was not found or
        /// the user is not authorized).
        /// </returns>

        Task<EventList> GetEventsForProcessModelInCorrelation(IIdentity identity, string processModelId, string correlationId);
        /// <summary>
        /// Triggers a message event.
        /// </summary>
        /// <param name="identity">The requesting users identity.</param>
        /// <param name="messageName">The name of the message to trigger.</param>
        /// <returns>
        /// A task that is finished once the event has been triggered.
        /// </returns>
        Task TriggerMessageEvent(IIdentity identity, string messageName);

        /// <summary>
        /// Triggers a message event.
        /// </summary>
        /// <param name="identity">The requesting users identity.</param>
        /// <param name="messageName">The name of the message to trigger.</param>
        /// <param name="payload">The payload with which to trigger the message.</param>
        /// <returns>
        /// A task that is finished once the event has been triggered.
        /// </returns>
        Task TriggerMessageEvent(IIdentity identity, string messageName, object payload);

        /// <summary>
        /// Triggers a signal event.
        /// </summary>
        /// <param name="identity">The requesting users identity.</param>
        /// <param name="signalName">The name of the signal to trigger.</param>
        /// <returns>
        /// A task that is finished once the event has been triggered.
        /// </returns>
        Task TriggerSignalEvent(IIdentity identity, string signalName);

        /// <summary>
        /// Triggers a signal event.
        /// </summary>
        /// <param name="identity">The requesting users identity.</param>
        /// <param name="signalName">The name of the signal to trigger.</param>
        /// <param name="payload">The payload with which to trigger the signal.</param>
        /// <returns>
        /// A task that is finished once the event has been triggered.
        /// </returns>
        Task TriggerSignalEvent(IIdentity identity, string signalName, object payload);
    }

}
