namespace ProcessEngine.ConsumerAPI.Contracts
{
    using System;

    /// <summary>
    /// Process instance.
    /// </summary>
    public interface IProcessInstance
    {
        /// <summary>
        /// Gets or sets the process instance identifier. This identifier is in GUID format.
        /// </summary>
        /// <value>The process instance identifier.</value>
        string ProcessInstanceId { get; set; }

        /// <summary>
        /// Gets or sets the process definition identifier.
        /// </summary>
        /// <value>The process definition identifier.</value>
        string ProcessModelId { get; set; }

        /// <summary>
        /// Gets or sets the correlation identifier. If there is no correlation Id specified, the system has to create one.
        /// </summary>
        /// <value>The correlation identifier.</value>
        string CorrelationId { get; set; }

        /// <summary>
        /// The time when the process instance started.
        /// </summary>
        /// <value>The start time.</value>
        DateTime? StartTime { get; set; }

        /// <summary>
        /// The time when the process instance ended.
        /// </summary>
        /// <value>The end time.</value>
        DateTime? EndTime { get; set; }

        /// <summary>
        /// Gets or sets the state of the process.
        /// </summary>
        /// <value>The state of the process.</value>
        string ProcessState { get; set; }
    }
}
