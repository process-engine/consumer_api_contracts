namespace ProcessEngine.ConsumerAPI.Contracts
{
    using EssentialProjects.IAM.Contracts;

    /// <summary>
    /// Describes a single ProcessInstance.
    /// </summary>
    public class ProcessInstance
    {

        /// <summary>
        /// The Id of the process instance.
        /// </summary>
        public string id { get; set; }

        /// <summary>
        /// The identity of the process instance owner.
        /// </summary>
        public IIdentity owner { get; set; }

        /// <summary>
        /// The Id of the correlation the process instance belongs to.
        /// </summary>
        public string correlationId { get; set; }

        /// <summary>
        /// The Id of the process model the process instance was created from.
        /// </summary>
        public object processModelId { get; set; }

        /// <summary>
        /// The Id of the process instance that started this process instance.
        /// </summary>
        public object parentProcessInstanceId { get; set; }
    }
}

