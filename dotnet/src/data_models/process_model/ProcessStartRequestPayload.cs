namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System;

    /// <summary>
    /// Describes the payload that a process model can be started with.
    /// </summary>
    public class ProcessStartRequestPayload<TInputValues>
    {
        /// <summary>
        /// Optional: If set, the process engine will use this as the id for the
        /// correlation in which the process model will be executed. If not
        /// provided, the process engine will generate a correlation id by
        /// itself.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// Optional: Contains a process instance id and must only ever be set,
        /// when a subprocess is to be started.
        /// </summary>
        public string CallerId { get; set; }

        /// <summary>
        /// Contains the arguments with which to start the process model.
        /// </summary>
        public TInputValues InputValues { get; set; }
    }
}
