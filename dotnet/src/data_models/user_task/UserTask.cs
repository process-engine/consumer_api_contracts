namespace ProcessEngine.ConsumerAPI.Contracts
{
  public class UserTask<TTokenPayload>
    {
        public string Id { get; set; }
        public string FlowNodeInstanceId { get; set; }
        public string Name { get; set; }
        public string CorrelationId { get; set; }
        public string ProcessModelId { get; set; }
        public string ProcessInstanceId { get; set; }
        public UserTaskConfig data { get; set; }
        public TTokenPayload TokenPayload { get; set; }
    }
}
