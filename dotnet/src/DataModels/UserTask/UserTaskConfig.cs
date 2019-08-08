namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Contains information about a UserTasks configuration.
    /// </summary>
    public class UserTaskConfig
    {
        /// <summary>
        /// A list of accessible FormFields for the UserTask.
        /// </summary>
        public IEnumerable<UserTaskFormField> FormFields { get; set; }

        /// <summary>
        /// The perferred type of control for the FormField.
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
