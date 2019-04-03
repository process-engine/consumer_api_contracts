namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Determines the type of a UserTask's FormField.
    /// </summary>
    public enum UserTaskFormFieldType
    {
        /// <summary>
        /// The FormField is a boolean.
        /// </summary>
        Boolean,

        /// <summary>
        /// The FormField is a date.
        /// </summary>
        Date,

        /// <summary>
        /// The FormField is an enumeration.
        /// </summary>
        Enum,

        /// <summary>
        /// The FormField is long-type numerical.
        /// </summary>
        Long,

        /// <summary>
        /// The FormField is a number.
        /// </summary>
        Number,

        /// <summary>
        /// The FormField is a string.
        /// </summary>
        String
    }
}
