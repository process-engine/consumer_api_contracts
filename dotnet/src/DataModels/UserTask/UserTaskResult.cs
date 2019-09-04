namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Describes the Payload with which a UserTask can be finished.
    /// </summary>
    public class UserTaskResult
    {
        /// <summary>
        /// Contains a list of results for the UserTask's FormFields.
        /// </summary>
        public IDictionary<string, object> FormFields { get; set; }

        public UserTaskResult()
        {
            this.FormFields = new Dictionary<string, object>();
        }
    }
}
