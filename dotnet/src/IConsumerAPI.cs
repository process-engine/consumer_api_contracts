namespace ProcessEngine.ConsumerAPI.Contracts {
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using System;

    using EssentialProjects.IAM.Contracts;

    /// <summary>
    /// API for starting and managing BMPN processes.
    /// </summary>
    public interface IConsumerAPI {
        /// <summary>
        /// Starts an instance a given process definition. Process variables and correlation id may be supplied in the request payload.
        /// </summary>
        /// <returns>The process instance.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processModelId">The key of the process definition (the latest version thereof) to be retrieved.</param>
        /// <param name="startEventKey">The key of a specific start event to start the process with.</param>
        /// <param name="processStartRequestPayload">The payload to supply process variables and an optional correlation id.</param>
        /// <param name="callbackType"><see cref="StartCallbackType">Callback type</see></param>
        /// <param name="endEventKey">The key of the end event when startCallbackType == StartCallbackType.CallbackOnEndEventReached.</param>
        Task<ProcessStartResponsePayload> StartProcessInstance<TInputValues> (
            IIdentity identity,
            string processModelId,
            string startEventKey,
            ProcessStartRequestPayload<TInputValues> processStartRequestPayload,
            StartCallbackType callbackType = StartCallbackType.CallbackOnProcessInstanceCreated,
            string endEventKey = "")
        where TInputValues : new ();

        /// <summary>
        /// Gets the process result for a given correlation.
        /// </summary>
        /// <returns>The process result for the correlation.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="correlationId">The correlation id generated at the start of the process instance.</param>
        /// <param name="processModelId">The key of the process definition (the latest version thereof) to be retrieved.</param>
        /// <typeparam name="TPayload">Parameter holding the result data for a correlation.</typeparam>
        Task<IEnumerable<CorrelationResult<TPayload>>> GetProcessResultForCorrelation<TPayload> (
            IIdentity identity,
            string correlationId,
            string processModelId)
        where TPayload : new ();

    }
}