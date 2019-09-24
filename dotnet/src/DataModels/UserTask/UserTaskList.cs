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
        public IEnumerable<UserTask> UserTasks { get; set; }

        /// <summary>
        /// The total amount of records, before pagination was applied.
        /// </summary>
        /// <value></value>
        public int TotalCount { get; set; }
    }
}
