namespace ProcessEngine.ConsumerAPI.Contracts.APIs
{
    using System.Threading.Tasks;
    using EssentialProjects.IAM.Contracts;
    using ProcessEngine.ConsumerAPI.Contracts.DataModel;

    /// <summary>
    /// The IUserTaskConsumerApi is used to retreive and manage UserTasks.
    /// </summary>
    public interface IUserTaskConsumerApi
    {
        /// <summary>
        /// Retrieves a list of all suspended UserTasks belonging to an instance of a specific ProcessModel.
        /// </summary>
        /// <returns>The fetched UserTasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processModelId">The ID of the ProcessDefinition for which to find UserTasks.</param>
        /// <param name="offset">Optional: The number of records to skip.</param>
        /// <param name="limit">Optional: The max. number of records to get.</param>
        Task<UserTaskList> GetUserTasksForProcessModel(IIdentity identity, string processModelId, int offset = 0, int limit = 0);

        /// <summary>
        /// Retrieves a list of all suspended UserTasks belonging to the given ProcessInstance.
        /// </summary>
        /// <returns>The fetched UserTasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processInstanceId">The ID of the ProcessInstance for which to get the UserTasks.</param>
        /// <param name="offset">Optional: The number of records to skip.</param>
        /// <param name="limit">Optional: The max. number of records to get.</param>
        Task<UserTaskList> GetUserTasksForProcessInstance(IIdentity identity, string processInstanceId, int offset = 0, int limit = 0);

        /// <summary>
        /// Retrieves a list of all suspended UserTasks belonging to a specific Correlation.
        /// </summary>
        /// <returns>The fetched UserTasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="correlationId">The ID of the Correlation for which to find UserTasks.</param>
        /// <param name="offset">Optional: The number of records to skip.</param>
        /// <param name="limit">Optional: The max. number of records to get.</param>
        Task<UserTaskList> GetUserTasksForCorrelation(IIdentity identity, string correlationId, int offset = 0, int limit = 0);

        /// <summary>
        /// Retrieves a list of all suspended UserTasks belonging to an instance of a specific ProcessModel within a Correlation.
        /// </summary>
        /// <returns>The fetched UserTasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processModelId">The ID of the ProcessDefinition for which to find UserTasks.</param>
        /// <param name="correlationId">The ID of the Correlation for which to find UserTasks.</param>
        /// <param name="offset">Optional: The number of records to skip.</param>
        /// <param name="limit">Optional: The max. number of records to get.</param>
        Task<UserTaskList> GetUserTasksForProcessModelInCorrelation(IIdentity identity, string processModelId, string correlationId, int offset = 0, int limit = 0);

        /// <summary>
        /// Gets all waiting UserTasks belonging to the given identity.
        /// </summary>
        /// <returns>The fetched UserTasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="offset">Optional: The number of records to skip.</param>
        /// <param name="limit">Optional: The max. number of records to get.</param>
        Task<UserTaskList> GetWaitingUserTasksByIdentity(IIdentity identity, int offset = 0, int limit = 0);

        /// <summary>
        /// Finishes a UserTask belonging to an instance of a specific ProcessModel within a correlation.
        /// </summary>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processInstanceId">The ID of the ProcessInstance that the UserTask belongs to.</param>
        /// <param name="correlationId">The ID of the Correlation that the UserTask belongs to.</param>
        /// <param name="userTaskInstanceId">The instance ID of the UserTask to finish.</param>
        /// <param name="userTaskResult">The result that the UserTask is to be finished with.</param>
        Task FinishUserTask(IIdentity identity, string processInstanceId, string correlationId, string userTaskInstanceId, UserTaskResult userTaskResult);
    }
}
