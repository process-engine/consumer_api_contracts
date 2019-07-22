namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Describes a EmptyActivity that belongs to an active correlation.
    /// </summary>
    public class EmptyActivity
    {
        /// <summary>
        /// The model ID of the EmptyActivity, as it is declared in the ProcessModel.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// The name of the EmptyActivity, as it is declared in the ProcessModel.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The instance ID of the EmptyActivity.
        /// </summary>
        public string FlowNodeInstanceId { get; set; }

        /// <summary>
        /// The ID of the Correlation that the EmptyActivity belongs to.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// The ID of the ProcessModel that the EmptyActivity belongs to.
        /// </summary>
        public string ProcessModelId { get; set; }

        /// <summary>
        /// The ID of the ProcessInstance that the EmptyActivity belongs to.
        /// </summary>
        public string ProcessInstanceId { get; set; }

        /// <summary>
        /// The token payload the EmptyActivity got suspended with.
        /// </summary>
        public object TokenPayload { get; set; }
    }
}
