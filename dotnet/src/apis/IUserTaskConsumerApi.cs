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
        /// <returns>The fetched user tasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processModelId">The key of the process definition the fetched user tasks should belong to.</param>
        Task<UserTaskList> GetUserTasksForProcessModel(IIdentity identity, string processModelId);

        /// <summary>
        /// Retrieves a list of all suspended UserTasks belonging to a specific Correlation.
        /// </summary>
        /// <returns>The fetched user tasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="correlationId">The id of the correlation the fetched user tasks should belong to.</param>
        Task<UserTaskList> GetUserTasksForCorrelation(IIdentity identity, string correlationId);

        /// <summary>
        /// Retrieves a list of all suspended UserTasks belonging to an instance of a specific ProcessModel within a Correlation.
        /// </summary>
        /// <returns>The fetched user tasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processModelId">The key of the process definition the fetched user tasks belong to.</param>
        /// <param name="correlationId">The id of the correlation the fetched user tasks should belong to.</param>
        Task<UserTaskList> GetUserTasksForProcessModelInCorrelation(IIdentity identity, string processModelId, string correlationId);

        /// <summary>
        /// Gets all waiting UserTasks belonging to the given identity.
        /// </summary>
        /// <returns>The fetched user tasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        Task<UserTaskList> getWaitingUserTasksByIdentity(IIdentity identity);

        /// <summary>
        /// Finishes a UserTask belonging to an instance of a specific ProcessModel within a correlation.
        /// </summary>
        /// <returns>The fetched user tasks.</returns>
        /// <param name="identity">The requesting users <see cref="EssentialProjects.IAM.Contracts.IIdentity">identity</see>. Should usually contain an auth token.</param>
        /// <param name="processInstanceId">The key of the process instance the finished user task belongs to.</param>
        /// <param name="correlationId">The id of the correlation the finished user task belongs to.</param>
        /// <param name="userTaskInstanceId">The id of the user task instance to be finished.</param>
        /// <param name="userTaskResult">The result data the user task is finished with.</param>
        void FinishUserTask(IIdentity identity, string processInstanceId, string correlationId, string userTaskInstanceId, UserTaskResult userTaskResult);
    }
}
