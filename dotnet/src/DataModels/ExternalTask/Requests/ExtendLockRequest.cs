namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    public class ExtendLockRequest
    {
        public ExtendLockRequest(string workerId, int additionalDuration)
        {
            this.WorkerId = workerId;
            this.AdditionalDuration = additionalDuration;
        }

        public string WorkerId { get; }
        public int AdditionalDuration { get; }
    }
}
