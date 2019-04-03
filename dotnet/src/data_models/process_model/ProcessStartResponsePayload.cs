namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Contains a response from the process engine, which will be sent after a
    /// ProcessModel was started. Depending on the type of start callback used,
    /// this will also contain information about the Correlation result.
    /// </summary>
    public class ProcessStartResponsePayload
    {
        /// <summary>
        /// The ID of the ProcessInstance.
        /// </summary>
        public string ProcessInstanceId { get; set; }

        /// <summary>
        /// The ID of the Correlation in which the started ProcessModel runs.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// Optional: If the process engine is set to wait for the
        /// ProcessInstance to finish, this will contain the ID of the EndEvent
        /// with which the ProcessInstance was finished.
        /// </summary>
        public string EndEventId { get; set; }

        /// <summary>
        /// Optional: If the ProcessEngine is set to wait for the
        /// ProcessInstance to finish, this will contain the final result with
        /// which ProcessInstance was finished.
        /// </summary>
        public object TokenPayload { get; set; }
    }
}
