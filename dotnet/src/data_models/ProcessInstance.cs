namespace ProcessEngine.ConsumerAPI.Contracts {
    using EssentialProjects.IAM.Contracts;

    /// <summary>
    /// Describes a single ProcessInstance.
    /// </summary>
    public class ProcessInstance {
        /// <summary>
        /// The Id of the ProcessInstance.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// The identity of the ProcessInstance owner.
        /// </summary>
        public IIdentity Owner { get; set; }

        /// <summary>
        /// The Id of the correlation the ProcessInstance belongs to.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// The Id of the process model the ProcessInstance was created from.
        /// </summary>
        public string ProcessModelId { get; set; }

        /// <summary>
        /// The Id of the ProcessInstance that started this ProcessInstance.
        /// </summary>
        public string ParentProcessInstanceId { get; set; }
    }
}
