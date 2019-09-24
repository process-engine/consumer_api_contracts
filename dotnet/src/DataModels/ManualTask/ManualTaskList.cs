namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Describes a list of ManualTasks.
    /// </summary>
    public class ManualTaskList
    {
        /// <summary>
        /// The ManualTask list.
        /// </summary>
        public IEnumerable<ManualTask> ManualTasks { get; set; }

        /// <summary>
        /// The total amount of records, before pagination was applied.
        /// </summary>
        /// <value></value>
        public int TotalCount { get; set; }
    }
}
