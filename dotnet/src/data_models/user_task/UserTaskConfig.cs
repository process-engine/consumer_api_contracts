namespace ProcessEngine.ConsumerAPI.Contracts
{
  public class UserTaskConfig
    {
        public Array<UserTaskFormField> FormFields { get; set; }
        public string PreferredControl { get; set; }
        public string Description { get; set; }
        public string FinishedMessage { get; set; }
    }
}
