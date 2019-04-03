namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System;

    /// <summary>
    /// Describes the payload that a process model can be started with.
    /// </summary>
    public class ProcessStartRequestPayload<TInputValues>
    {
        /// <summary>
        /// Optional: If set, the ProcessEngine will use this as the ID for the
        /// Correlation in which the ProcessModel will be executed. If not
        /// provided, the ProcessEngine will generate a CorrelationId
        /// automatically.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// Optional: If a Subprocess is to be started, this will contain the ID
        /// of the ProcessInstance that started it.
        /// </summary>
        public string CallerId { get; set; }

        /// <summary>
        /// Contains the arguments with which to start the ProcessInstance.
        /// </summary>
        public TInputValues InputValues { get; set; }
    }
}
