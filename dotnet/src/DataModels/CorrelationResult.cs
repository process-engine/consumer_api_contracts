
namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Contains information about the result with which a Correlation has finished execution.
    /// </summary>
    public class CorrelationResult<TPayload>
    {
        /// <summary>
        /// The Id of the Correlation that was finished.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// The Id of the end event with which the Correlation was finished.
        /// </summary>
        public string EndEventId { get; set; }

        /// <summary>
        /// Contains the final result with which a Correlation was finished.
        /// </summary>
        /// <value>The type of the token payload.</value>
        public TPayload TokenPayload { get; set; }
    }
}
