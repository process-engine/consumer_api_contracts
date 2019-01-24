namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Describes a list of user tasks.
    /// </summary>
    public class UserTaskList
    {
        /// <summary>
        /// The user task list.
        /// </summary>
        UserTask[] UserTasks { get; set; }
    }
}
