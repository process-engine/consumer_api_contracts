namespace ProcessEngine.ConsumerAPI.Contracts
{
    /// <summary>
    /// Contains information about the requesting user.
    /// </summary>
    public class ConsumerContext
    {

        /// <summary>
        /// Contains the users identity. This is usually an auth token, created by an external authority.
        /// </summary>
        /// <value>The user identity token.</value>
        public string Identity { get; set; }
    }
}
