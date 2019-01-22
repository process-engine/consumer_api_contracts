namespace ProcessEngine.ConsumerAPI.Contracts
{
    /// <summary>
    /// Contains information about the result with which a correlation has finished execution.
    /// </summary>
    public class CorrelationResult<TPayload>
    {
        /// <summary>
        /// Contains the final result with which a correlation was finished.
        /// </summary>
        /// <value>The token payload.</value>
        public TPayload TokenPayload { get; set; }

        /// <summary>
        /// The Id of the correlation that was finished.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// The Id of the end event with which the correlation was finished.
        /// </summary>
        public string EndEventId { get; set; }
    }
}
