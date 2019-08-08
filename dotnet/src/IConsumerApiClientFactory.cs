namespace ProcessEngine.ConsumerAPI.Contracts
{
    /// <summary>
    /// Interface for a ConsumerApiClient factory.
    /// </summary>
    public interface IConsumerApiClientFactory
    {

        /// <summary>
        /// Factory method for creating a ConsumerApiClient.
        /// </summary>
        /// <returns>The ConsumerApiClient.</returns>
        /// <param name="processEngineAddress">The address of the ProcessEngine the client should connect to.</param>
        IConsumerApiClient CreateConsumerApiClient(string processEngineAddress);
    }
}
