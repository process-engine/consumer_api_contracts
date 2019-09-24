namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Describes a list of CorrelationResults.
    /// </summary>
    public class CorrelationResultList<TPayload>
    {
        /// <summary>
        /// The CorrelationResult list.
        /// </summary>
        public IEnumerable<CorrelationResult<TPayload>> CorrelationResults { get; set; }

        /// <summary>
        /// The total amount of records, before pagination was applied.
        /// </summary>
        /// <value></value>
        public int TotalCount { get; set; }
    }
}
