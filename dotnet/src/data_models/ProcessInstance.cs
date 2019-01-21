namespace ProcessEngine.ConsumerAPI.Contracts
{
    using EssentialProjects.IAM.Contracts;

    /// <summary>
    /// Describes a single ProcessInstance.
    /// </summary>
    public class ProcessInstance
    {

        /// <summary>
        /// The Id of the ProcessInstance.
        /// </summary>
        public string id { get; set; }

        /// <summary>
        /// The identity of the ProcessInstance owner.
        /// </summary>
        public IIdentity owner { get; set; }

        /// <summary>
        /// The Id of the correlation the ProcessInstance belongs to.
        /// </summary>
        public string correlationId { get; set; }

        /// <summary>
        /// The Id of the process model the ProcessInstance was created from.
        /// </summary>
        public object processModelId { get; set; }

        /// <summary>
        /// The Id of the ProcessInstance that started this ProcessInstance.
        /// </summary>
        public object parentProcessInstanceId { get; set; }
    }
}

