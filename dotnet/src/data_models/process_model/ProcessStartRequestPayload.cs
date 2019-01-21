namespace ProcessEngine.ConsumerAPI.Contracts
{
    using System;

    /// <summary>
    /// Describes the payload that a process model can be started with.
    /// </summary>
    public class ProcessStartRequestPayload
    {
        /// <summary>
        /// Optional: If set, the process engine will use this as the id for the
        /// correlation in which the process model will be executed. If not
        /// provided, the process engine will generated a correlation id by
        /// itself.
        /// </summary>
        public string correlationId { get; set; }

        /// <summary>
        /// Optional: Contains a process instance id and must only ever be set,
        /// when a subprocess is to be started.
        /// </summary>
        public string callerId { get; set; }

        /// <summary>
        /// Contains the arguments with which to start the process model.
        /// </summary>
        public object inputValues { get; set; }
    }
}