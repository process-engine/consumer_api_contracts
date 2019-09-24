namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Describes a list of ProcessInstances.
    /// </summary>
    public class ProcessInstanceList
    {
        /// <summary>
        /// The ProcessInstance list.
        /// </summary>
        public IEnumerable<ProcessInstance> ProcessInstances { get; set; }

        /// <summary>
        /// The total amount of records, before pagination was applied.
        /// </summary>
        /// <value></value>
        public int TotalCount { get; set; }
    }
}
