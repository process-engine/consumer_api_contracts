namespace ProcessEngine.ConsumerAPI.Contracts
{
  public class UserTaskFormField
    {
        public string Id { get; set; }
        public string Type { get; set; }
        public UserTaskEnumValue[] EnumValues { get; set; }
        public string Label { get; set; }
        public object DefaultValue { get; set; }
        public string PreferredControl { get; set; }
    }
}
