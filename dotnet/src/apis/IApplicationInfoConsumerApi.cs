namespace ProcessEngine.ConsumerAPI.Contracts.APIs
{
    using System.Threading.Tasks;

    using EssentialProjects.IAM.Contracts;
    using ProcessEngine.ConsumerAPI.Contracts.DataModel;

    /// <summary>
    /// The IApplicationInfoConsumerApi is used to retrieve basic information about the running application.
    /// </summary>
    public interface IApplicationInfoConsumerApi
    {
        /// <summary>
        /// Gets the package name and version of the running application.
        /// </summary>
        /// <returns>Some Basic information about the running application..</returns>
        Task<ApplicationInfo> GetApplicationInfo(IIdentity identity);

    }

}
