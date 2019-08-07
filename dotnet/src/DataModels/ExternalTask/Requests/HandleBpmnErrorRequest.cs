namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    public class HandleBpmnErrorRequest
    {
        public HandleBpmnErrorRequest(string workerId, string errorCode)
        {
            this.WorkerId = workerId;
            this.ErrorCode = errorCode;
        }

        public string WorkerId { get; }
        public string ErrorCode { get; }
    }
}
