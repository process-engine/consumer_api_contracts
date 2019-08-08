namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    using System.Collections.Generic;

    /// <summary>
    /// Contains information about a UserTasks FormField.
    /// </summary>
    public class UserTaskFormField
    {
        /// <summary>
        /// The ID of the FormField
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// The <see cref="UserTaskFormFieldType">type</see> of the FormField.
        /// </summary>
        public UserTaskFormFieldType Type { get; set; }

        /// <summary>
        /// Optional: If the FormField is an enumeration, this will contain the
        /// values for that enumeration.
        /// </summary>
        public IEnumerable<UserTaskEnumValue> EnumValues { get; set; }

        /// <summary>
        /// The label of the FormField.
        /// </summary>
        public string Label { get; set; }

        /// <summary>
        /// The default value of the FormField.
        /// </summary>
        public object DefaultValue { get; set; }

        /// <summary>
        /// The perferred type of control for the FormField.
        /// </summary>
        public string PreferredControl { get; set; }
}
}
