namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// If a user tasks form field is an enumeration, this will contain information about the values contained within that enumeration.
    /// </summary>
    public class UserTaskEnumValue
    {
        /// <summary>
        /// The unique identifier of the value.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// The name of the value.
        /// </summary>
        public string Name { get; set; }
    }
}
