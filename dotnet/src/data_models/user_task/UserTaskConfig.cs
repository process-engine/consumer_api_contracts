namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Contains information about a user tasks configuration.
    /// </summary>
    public class UserTaskConfig
    {
        /// <summary>
        /// A list of accessible form fields for the user task.
        /// </summary>
        public UserTaskFormField[] FormFields { get; set; }

        /// <summary>
        /// The perferred type of control for the form field.
        /// </summary>
        public string PreferredControl { get; set; }

        /// <summary>
        /// Optional: A description of this UserTask.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Optional: A message to show when the UserTask has been finished.
        /// </summary>
        public string FinishedMessage { get; set; }
    }
}
