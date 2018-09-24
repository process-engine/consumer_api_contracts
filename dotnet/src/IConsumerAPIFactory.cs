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
        /// <param name="processEngineAddress">The address of the process engine. This address is specific to the used process engine.</param>
        IConsumerAPI CreateConsumerAPIService(string processEngineAddress);
    }
}
