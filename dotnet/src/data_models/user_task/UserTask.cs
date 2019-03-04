namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Describes a UserTask that belongs to an active Correlation.
    /// </summary>
    public class UserTask
    {
        /// <summary>
        /// The ID of the UserTask.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// The FlowNodeInstance ID of the UserTask.
        /// </summary>
        public string FlowNodeInstanceId { get; set; }

        /// <summary>
        /// The name of the UserTask.
        /// </summary>
        public string Name { get; set; }

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
        /// Contains information about the UserTask configuration, such as the form fields that can be addressed.
        /// </summary>
        public UserTaskConfig Data { get; set; }

        /// <summary>
        /// The token payload the UserTask got suspended with.
        /// </summary>
        public object TokenPayload { get; set; }
    }
}
