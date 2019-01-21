namespace ProcessEngine.ConsumerAPI.Contracts
{
    using System;
    
    public class ProcessStartRequestPayload
    {
        public string correlationId { get; set; }
        public string callerId { get; set; }
        public object inputValues { get; set; }
    }
}