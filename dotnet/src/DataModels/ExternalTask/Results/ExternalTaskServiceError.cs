namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Contains the result set for an ExternalTask that failed with a service error.
    /// </summary>
    public class ExternalTaskServiceError<TDetails> : ExternalTaskResultBase
    {
        /// <summary></summary>
        /// <param name="externalTaskId"></param>
        /// <param name="errorMessage"></param>
        /// <param name="errorDetails"></param>
        public ExternalTaskServiceError(string externalTaskId, string errorMessage, TDetails errorDetails)
            : base(externalTaskId)
        {
            this.errorMessage = errorMessage;
            this.errorDetails = errorDetails;
        }

        /// <summary></summary>
        /// <param name="externalTaskId"></param>
        /// <param name="errorMessage"></param>
        /// <param name="errorCode"></param>
        /// <param name="errorDetails"></param>
        public ExternalTaskServiceError(string externalTaskId, string errorMessage, string errorCode, TDetails errorDetails)
            : base(externalTaskId)
        {
            this.errorCode = errorCode;
            this.errorMessage = errorMessage;
            this.errorDetails = errorDetails;
        }

        /// <summary>
        /// The mesage of the error that occured.
        /// </summary>
        /// <value></value>
        public string errorMessage { get; private set; }

        /// <summary>
        /// The code of the error that occured.
        /// </summary>
        /// <value></value>
        public string errorCode { get; private set; }

        /// <summary>
        /// The details provided for this error.
        /// </summary>
        /// <value></value>
        public TDetails errorDetails { get; private set; }
    }
}
