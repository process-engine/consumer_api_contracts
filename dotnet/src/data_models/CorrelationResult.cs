namespace ProcessEngine.ConsumerAPI.Contracts
{
    /// <summary>
    /// Contains information about the result with which a correlation has finished execution.
    /// </summary>
    public class CorrelationResult<TPayload>
    {

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="payload">The token payload</param>
        public CorrelationResult(TPayload payload)
        {
            TokenPayload = payload;
        }

        /// <summary>
        /// Contains the final result with which a correlation was finished.
        /// </summary>
        /// <value>The token payload.</value>
        public TPayload TokenPayload { get; }

        /// <summary>
        /// The Id of the correlation that was finished.
        /// </summary>
        public string CorrelationId;

        /// <summary>
        /// The process model Id, if the caller wants to filter the result by a specific process model.
        /// </summary>
        public string ProcessModelId;

        /// <summary>
        /// The Id of the end event with which the correlation was finished.
        /// </summary>
        public string EndEventId;
    }
}
