namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Describes a list of UserTasks.
    /// </summary>
    public class UserTaskList
    {
        /// <summary>
        /// The UserTask list.
        /// </summary>
        UserTask[] UserTasks { get; set; }
    }
}
