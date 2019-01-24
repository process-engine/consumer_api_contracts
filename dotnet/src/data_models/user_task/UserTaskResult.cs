namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Describes the payload that can be given to a UserTask upon finishing it.
    /// </summary>
    public class UserTaskResult
    {
        /// <summary>
        /// Contains a list of results for the user tasks form fields.
        /// </summary>
        public IEnumerable<KeyValuePair<string, object>> FormFields { get; set; }
    }
}
