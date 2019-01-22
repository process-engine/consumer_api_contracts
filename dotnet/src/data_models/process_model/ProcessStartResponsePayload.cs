namespace ProcessEngine.ConsumerAPI.Contracts
{
    /// <summary>
    /// Contains a response from the process engine, which will be sent after a
    /// process model was started.
    /// </summary>
    public class ProcessStartResponsePayload
    {
        /// <summary>
        /// The ID of the process instance.
        /// </summary>
        public string ProcessInstanceId { get; set; }

        /// <summary>
        /// The ID of the correlation in which the started process model runs.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// Optional: If the process engine is set to wait for the process
        /// instance to finish, this will contain the ID of the end event with
        /// which process execution was finished.
        /// </summary>
        public string EndEventId { get; set; }

        /// <summary>
        /// Optional: If the process engine is set to wait for the process
        /// instance to finish, this will contain the final result with which
        /// process execution was finished.
        /// </summary>
        public object TokenPayload { get; set; }
    }
}
