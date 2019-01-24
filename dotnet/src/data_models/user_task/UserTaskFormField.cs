namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Contains information about a user tasks form field.
    /// </summary>
    public class UserTaskFormField
    {
        /// <summary>
        /// The id of the form field.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// The type of the form field.
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// Optional: If the form field is an enumeration, this will contain the values for that enumeration.
        /// </summary>
        public UserTaskEnumValue[] EnumValues { get; set; }

        /// <summary>
        /// The label of the form field.
        /// </summary>
        public string Label { get; set; }

        /// <summary>
        /// The default value of the form field.
        /// </summary>
        public object DefaultValue { get; set; }

        /// <summary>
        /// The perferred type of control for the form field.
        /// </summary>
        public string PreferredControl { get; set; }
    }
}
