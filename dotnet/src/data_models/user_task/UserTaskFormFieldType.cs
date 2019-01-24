namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Determines the type of a user tasks form field.
    /// </summary>
    public static class UserTaskFormFieldType
    {
        /// <summary>
        /// The form field is a boolean.
        /// </summary>
        public static readonly string Boolean = "boolean";

        /// <summary>
        /// The form field is a date.
        /// </summary>
        public static readonly string Date = "date";

        /// <summary>
        /// The form field is an enumeration.
        /// </summary>
        public static readonly string Enum = "enum";

        /// <summary>
        /// The form field is long-type numerical.
        /// </summary>
        public static readonly string Long = "long";

        /// <summary>
        /// The form field is a number.
        /// </summary>
        public static readonly string Number = "number";

        /// <summary>
        /// The form field is a string.
        /// </summary>
        public static readonly string String = "string";
    }
}
