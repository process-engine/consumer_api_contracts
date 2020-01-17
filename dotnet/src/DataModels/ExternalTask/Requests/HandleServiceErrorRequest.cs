namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    public class HandleServiceErrorRequest
    {
        public HandleServiceErrorRequest(string workerId, string errorMessage, string errorDetails)
        {
            this.WorkerId = workerId;
            this.ErrorMessage = errorMessage;
            this.ErrorDetails = errorDetails;
        }
        public HandleServiceErrorRequest(string workerId, string errorMessage, string errorDetails, string errorCode)
        {
            this.WorkerId = workerId;
            this.ErrorCode = errorCode;
            this.ErrorMessage = errorMessage;
            this.ErrorDetails = errorDetails;
        }

        public string WorkerId { get; }
        public string ErrorCode { get; }
        public string ErrorMessage { get; }
        public string ErrorDetails { get; }
    }
}
