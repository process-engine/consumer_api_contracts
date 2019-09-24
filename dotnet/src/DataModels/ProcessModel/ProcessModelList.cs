namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Describes a list of ProcessModels.
    /// </summary>
    public class ProcessModelList
    {
        /// <summary>
        /// The ProcessModelList.
        /// </summary>
        public IEnumerable<ProcessModel> ProcessModels { get; set; }

        /// <summary>
        /// The total amount of records, before pagination was applied.
        /// </summary>
        /// <value></value>
        public int TotalCount { get; set; }
    }
}
