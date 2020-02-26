
namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Contains basic information about the running application.
    /// </summary>
    public class ApplicationInfo
    {
        /// <summary>
        /// The name of the application.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The version of the application.
        /// </summary>
        public string Version { get; set; }
    }
}
