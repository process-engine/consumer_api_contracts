namespace ProcessEngine.ConsumerAPI.Contracts
{
    /// <summary>
    /// Interface for an factory for creating ConsumerAPI services.
    /// </summary>
    public interface IConsumerAPIFactory
    {
        /// <summary>
        /// Factory method for creating a ConsumerAPIService.
        /// </summary>
        /// <returns>The ConsumerAPIService.</returns>
        /// <param name="processEngineAPIBaseUrl">The base URL of the process engine.</param>
        /// <param name="userAgent">The user agent to put in the HTTP header.</param>
        IConsumerAPIService CreateConsumerAPIService(string processEngineAPIBaseUrl, string userAgent);
    }
}