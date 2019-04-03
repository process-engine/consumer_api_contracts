namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Describes a MaualTask that belongs to an active correlation.
    /// </summary>
    public class ManualTask
    {
        /// <summary>
        /// The model ID of the ManualTask, as it is declared in the ProcessModel.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// The name of the ManualTask, as it is declared in the ProcessModel.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The instance ID of the ManualTask.
        /// </summary>
        public string FlowNodeInstanceId { get; set; }

        /// <summary>
        /// The ID of the Correlation that the ManualTask belongs to.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// The ID of the ProcessModel that the ManualTask belongs to.
        /// </summary>
        public string ProcessModelId { get; set; }

        /// <summary>
        /// The ID of the ProcessInstance that the ManualTask belongs to.
        /// </summary>
        public string ProcessInstanceId { get; set; }

        /// <summary>
        /// The token payload the ManualTask got suspended with.
        /// </summary>
        public object TokenPayload { get; set; }
    }
}
