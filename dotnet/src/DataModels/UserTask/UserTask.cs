namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Describes a suspended UserTask that is waiting to be finished.
    /// </summary>
    public class UserTask
    {
        /// <summary>
        /// The model ID of the UserTask, as it is declared in the ProcessModel.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// The name of the UserTask, as it is declared in the ProcessModel.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The instance ID of the UserTask.
        /// </summary>
        public string FlowNodeInstanceId { get; set; }

        /// <summary>
        /// The ID of the Correlation that the UserTask belongs to.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// The ID of the ProcessModel that the UserTask belongs to.
        /// </summary>
        public string ProcessModelId { get; set; }

        /// <summary>
        /// The ID of the ProcessInstance that the UserTask belongs to.
        /// </summary>
        public string ProcessInstanceId { get; set; }

        /// <summary>
        /// Contains information about the UserTask configuration, such as the
        /// FormFields that can be addressed.
        /// </summary>
        public UserTaskConfig Data { get; set; }

        /// <summary>
        /// The token payload the UserTask got suspended with.
        /// </summary>
        public object TokenPayload { get; set; }
    }
}
