namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    public class HandleBpmnErrorRequest
    {
        public HandleBpmnErrorRequest(string workerId, string errorCode)
        {
            this.WorkerId = workerId;
            this.ErrorCode = errorCode;
            this.ErrorMessage = "";
        }
        public HandleBpmnErrorRequest(string workerId, string errorCode, string errorMessage)
        {
            this.WorkerId = workerId;
            this.ErrorCode = errorCode;
            this.ErrorMessage = errorMessage;
        }

        public string WorkerId { get; }
        public string ErrorCode { get; }
        public string ErrorMessage { get; }
    }
}
