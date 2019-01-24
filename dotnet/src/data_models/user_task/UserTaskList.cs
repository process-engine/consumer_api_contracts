namespace ProcessEngine.ConsumerAPI.Contracts
{
    public class UserTaskList<TUserTaskPayload>
    {
        UserTask<TUserTaskPayload>[] UserTasks { get; set; }
    }
}
