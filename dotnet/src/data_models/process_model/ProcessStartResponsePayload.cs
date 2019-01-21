namespace ProcessEngine.ConsumerAPI.Contracts
{
    /// <summary>
    /// Contains a response from the process engine, which will be send after a
    /// process model was started. Depending on the type of start callback used,
    /// this will also contain information about the correlation result.
    /// </summary>
    public class ProcessStartResponsePayload
    {
        /// <summary>
        /// The ID of the process instance.
        /// </summary>
        public string processInstanceId { get; set; }

        /// <summary>
        /// The ID of the correlation in which the started process model runs.
        /// </summary>
        public string correlationId { get; set; }

        /// <summary>
        /// Optional: If the process engine is set to wait for the process
        /// instance to finish, this will contain the ID of the end event with
        /// which process execution was finished.
        /// </summary>
        public string endEventId { get; set; }

        /// <summary>
        /// Optional: If the process engine is set to wait for the process
        /// instance to finish, this will contain the final result with which
        /// process execution was finished.
        /// </summary>
        public object tokenPayload { get; set; }
    }
}