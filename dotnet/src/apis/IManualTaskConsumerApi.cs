namespace ProcessEngine.ConsumerAPI.Contracts.APIs
{
    using System.Threading.Tasks;
    using EssentialProjects.IAM.Contracts;
    using ProcessEngine.ConsumerAPI.Contracts.DataModel;

    /// <summary>
    /// The IManualTaskConsumerApi is used to retreive and manage ManualTasks.
    /// </summary>
    public interface IManualTaskConsumerApi
    {
        /// <summary>
        /// Retrieves a list of all suspended ManualTasks belonging to an instance of a specific ProcessModel.
        /// </summary>
        /// <returns>The fetched ManualTasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processModelId">The ID of the ProcessDefinition for which to retrieve the ManualTasks.</param>
        /// <param name="offset">Optional: The number of records to skip.</param>
        /// <param name="limit">Optional: The max. number of records to get.</param>
        Task<ManualTaskList> GetManualTasksForProcessModel(IIdentity identity, string processModelId, int offset = 0, int limit = 0);

        /// <summary>
        /// Retrieves a list of all suspended ManualTasks belonging to an instance of a specific ProcessModel within a Correlation.
        /// </summary>
        /// <returns>The fetched ManualTasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processInstanceId">The ID of the ProcessInstance for which to retrieve the ManualTasks.</param>
        /// <param name="offset">Optional: The number of records to skip.</param>
        /// <param name="limit">Optional: The max. number of records to get.</param>
        Task<ManualTaskList> GetManualTasksForProcessInstance(IIdentity identity, string processInstanceId, int offset = 0, int limit = 0);

        /// <summary>
        /// Retrieves a list of all suspended ManualTasks belonging to a specific Correlation.
        /// </summary>
        /// <returns>The fetched ManualTasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="correlationId">The ID of the Correlation for which to retrieve the ManualTasks.</param>
        /// <param name="offset">Optional: The number of records to skip.</param>
        /// <param name="limit">Optional: The max. number of records to get.</param>
        Task<ManualTaskList> GetManualTasksForCorrelation(IIdentity identity, string correlationId, int offset = 0, int limit = 0);

        /// <summary>
        /// Retrieves a list of all suspended ManualTasks belonging to an instance of a specific ProcessModel within a Correlation.
        /// </summary>
        /// <returns>The fetched ManualTasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processModelId">The ID of the ProcessDefinition for which to retrieve the ManualTasks.</param>
        /// <param name="correlationId">The ID of the Correlation for which to retrieve the ManualTasks.</param>
        /// <param name="offset">Optional: The number of records to skip.</param>
        /// <param name="limit">Optional: The max. number of records to get.</param>
        Task<ManualTaskList> GetManualTasksForProcessModelInCorrelation(IIdentity identity, string processModelId, string correlationId, int offset = 0, int limit = 0);

        /// <summary>
        /// Gets all waiting ManualTasks belonging to the given identity.
        /// </summary>
        /// <returns>The fetched ManualTasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="offset">Optional: The number of records to skip.</param>
        /// <param name="limit">Optional: The max. number of records to get.</param>
        Task<ManualTaskList> GetWaitingManualTasksByIdentity(IIdentity identity, int offset = 0, int limit = 0);

        /// <summary>
        /// Finishes a ManualTask belonging to an instance of a specific ProcessModel within a correlation.
        /// </summary>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processInstanceId">The ID of the ProcessInstance that the ManualTask belongs to.</param>
        /// <param name="correlationId">The ID of the Correlation that the ManualTask belongs to.</param>
        /// <param name="manualTaskInstanceId">The instance ID of the ManualTask to finish.</param>
        Task FinishManualTask(IIdentity identity, string processInstanceId, string correlationId, string manualTaskInstanceId);
    }
}
