using System.Threading.Tasks;
using EssentialProjects.IAM.Contracts;

namespace ProcessEngine.ConsumerAPI.Contracts.APIs
{
    /// <summary>
    /// The IUserTaskConsumerApi is used to retreive and manage UserTasks.
    /// </summary>
    public interface IUserTaskConsumerApi
    {
        Task<UserTaskList> GetUserTasksForProcessModel(IIdentity identity, string processModelId);

    }
}
