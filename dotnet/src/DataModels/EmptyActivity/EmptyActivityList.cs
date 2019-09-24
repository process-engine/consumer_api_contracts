namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Describes a list of EmptyActivities.
    /// </summary>
    public class EmptyActivityList
    {
        /// <summary>
        /// The EmptyActivity list.
        /// </summary>
        public IEnumerable<EmptyActivity> EmptyActivities { get; set; }

        /// <summary>
        /// The total amount of records, before pagination was applied.
        /// </summary>
        /// <value></value>
        public int TotalCount { get; set; }
    }
}
