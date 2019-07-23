namespace ProcessEngine.ConsumerAPI.Contracts.APIs
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using EssentialProjects.IAM.Contracts;
    using ProcessEngine.ConsumerAPI.Contracts.DataModel;
    using ProcessEngine.ConsumerAPI.Contracts.Exceptions;

    /// <summary>
    /// The IProcessModelConsumerApi is used to retreive ProcessModels and start ProcessInstances.
    /// </summary>
    public interface IProcessModelConsumerApi
    {
        /// <summary>
        /// Retrieves a list of all ProcessModels that the requesting user is authorized to see.
        /// </summary>
        /// <param name="identity">The requesting users identity.</param>
        /// <returns>A list of accessible ProcessModels.</returns>
        /// <exception cref="System.UnauthorizedAccessException">Thrown when the identity has insufficient rights to perform the operation.</exception>
        /// <exception cref="ProcessNotFoundException"> Thrown when the ProcessModel could not be found.</exception>
        Task<ProcessModelList> GetProcessModels(IIdentity identity);

        /// <summary>
        /// Retrieves a ProcessModel by its ID.
        /// </summary>
        /// <param name="identity">The requesting users identity.</param>
        /// <param name="processModelId">The ID of the ProcessModel to retrieve.</param>
        /// <returns>The retrieved ProcessModel.</returns>
        /// <exception cref="System.UnauthorizedAccessException">Thrown when the identity has insufficient rights to perform the operation.</exception>
        /// <exception cref="ProcessNotFoundException"> Thrown when the ProcessModel could not be found.</exception>
        Task<ProcessModel> GetProcessModelById(IIdentity identity, string processModelId);

        /// <summary>
        /// Retrieves a ProcessModel by a ProcessInstanceID.
        /// </summary>
        /// <param name="identity">The requesting users identity.</param>
        /// <param name="processInstanceId">The ID of the ProcessInstance for which to retrieve the ProcessModel.</param>
        /// <returns>The retrieved ProcessModel.</returns>
        /// <exception cref="System.UnauthorizedAccessException">Thrown when the identity has insufficient rights to perform the operation.</exception>
        /// <exception cref="ProcessNotFoundException"> Thrown when the ProcessModel could not be found.</exception>
        Task<ProcessModel> GetProcessModelByProcessInstanceId(IIdentity identity, string processInstanceId);

        /// <summary>
        /// Gets all active ProcessInstances belonging to the given identity.
        /// </summary>
        /// <param name="identity">The identity for which to get the ProcessInstances.</param>
        /// <returns>The list of ProcessInstances.</returns>
        /// <exception cref="System.UnauthorizedAccessException">Thrown when the identity has insufficient rights to perform the operation.</exception>
        /// <exception cref="ProcessNotFoundException"> Thrown when the ProcessModel could not be found.</exception>
        Task<IEnumerable<ProcessInstance>> GetProcessInstancesByIdentity(IIdentity identity);


        /// <summary>
        /// Starts an instance for a given ProcessDefinition. Process variables and correlation id may be supplied in the request payload.
        /// </summary>
        /// <returns>A set of informations about the started ProcessInstance; such as the used ProcessInstance ID or the assigned Correlation ID.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processModelId">The ID of the ProcessDefinition to be retrieved.</param>
        /// <param name="startEventId">The ID of a specific StartEvent to start the process with.</param>
        /// <param name="processStartRequestPayload">The payload for the Start request. Contains variables for the ProcessInstance and optionally a CorrelationId.</param>
        /// <param name="callbackType"><see cref="StartCallbackType">Callback type</see></param>
        /// <param name="endEventId">The ID of the end event to wait for, when callbackType == StartCallbackType.CallbackOnEndEventReached.</param>
        Task<ProcessStartResponsePayload> StartProcessInstance<TInputValues>(
            IIdentity identity,
            string processModelId,
            string startEventId,
            ProcessStartRequestPayload<TInputValues> processStartRequestPayload,
            StartCallbackType callbackType = StartCallbackType.CallbackOnProcessInstanceCreated,
            string endEventId = "")
        where TInputValues : new();

        /// <summary>
        /// Gets the ProcessInstance results of a given correlation.
        /// </summary>
        /// <returns>The Correlation's results.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="correlationId">The ID of the Correlation for which to get the results.</param>
        /// <param name="processModelId">The ID of the ProcessDefinition for which to get the results.</param>
        /// <typeparam name="TPayload">The type that holds the definition for the Correlation result's payload.</typeparam>
        Task<IEnumerable<CorrelationResult<TPayload>>> GetProcessResultForCorrelation<TPayload>(
            IIdentity identity,
            string correlationId,
            string processModelId)
        where TPayload : new();
    }
}
