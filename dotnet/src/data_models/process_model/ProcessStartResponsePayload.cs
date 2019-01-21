namespace ProcessEngine.ConsumerAPI.Contracts
{
    public class ProcessStartResponsePayload
    {
        public string processInstanceId { get; set; }
        public string correlationId { get; set; }
        public string endEventId { get; set; }
        public object tokenPayload { get; set; }
    }
}