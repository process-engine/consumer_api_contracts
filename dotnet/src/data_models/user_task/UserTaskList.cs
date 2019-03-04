namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Describes a list of UserTasks.
    /// </summary>
    public class UserTaskList
    {
        /// <summary>
        /// The UserTask list.
        /// </summary>
        IEnumerable<UserTask> UserTasks { get; set; }
    }
}
