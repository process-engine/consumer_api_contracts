namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Contains the result set for an ExternalTask that failed with a System error.
    /// </summary>
    public class ExternalTaskSystemError<TDetails> : ExternalTaskResultBase
    {
        /// <summary></summary>
        /// <param name="externalTaskId"></param>
        /// <param name="errorMessage"></param>
        /// <param name="errorDetails"></param>
        public ExternalTaskSystemError(string externalTaskId, string errorMessage, TDetails errorDetails)
            : base(externalTaskId)
        {
            this.errorMessage = errorMessage;
            this.errorDetails = errorDetails;
        }

        /// <summary>
        /// The mesage of the error that occured.
        /// </summary>
        /// <value></value>
        public string errorMessage { get; private set; }

        /// <summary>
        /// The details provided for this error.
        /// </summary>
        /// <value></value>
        public TDetails errorDetails { get; private set; }
    }
}
