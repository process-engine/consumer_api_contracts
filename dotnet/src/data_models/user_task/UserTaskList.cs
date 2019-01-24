namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Describes a list of UserTasks.
    /// </summary>
    public class UserTaskList
    {
        /// <summary>
        /// The user task list.
        /// </summary>
        UserTask[] UserTasks { get; set; }
    }
}
