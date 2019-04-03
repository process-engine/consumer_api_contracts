namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Determines the type of a UserTask's form field.
    /// </summary>
    public enum UserTaskFormFieldType
    {
        /// <summary>
        /// The form field is a boolean.
        /// </summary>
        Boolean,

        /// <summary>
        /// The form field is a date.
        /// </summary>
        Date,

        /// <summary>
        /// The form field is an enumeration.
        /// </summary>
        Enum,

        /// <summary>
        /// The form field is long-type numerical.
        /// </summary>
        Long,

        /// <summary>
        /// The form field is a number.
        /// </summary>
        Number,

        /// <summary>
        /// The form field is a string.
        /// </summary>
        String
    }
}
