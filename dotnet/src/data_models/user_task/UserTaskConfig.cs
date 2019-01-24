namespace ProcessEngine.ConsumerAPI.Contracts
{
  public class UserTaskConfig
    {
        public UserTaskFormField[] FormFields { get; set; }
        public string PreferredControl { get; set; }
        public string Description { get; set; }
        public string FinishedMessage { get; set; }
    }
}
