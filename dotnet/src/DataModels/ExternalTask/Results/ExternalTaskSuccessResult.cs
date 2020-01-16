namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Contains the result set for an ExternalTask that finished successfully.
    /// </summary>
    public class ExternalTaskSuccessResult<TResult> : ExternalTaskResultBase
    {
        /// <summary></summary>
        /// <param name="externalTaskId"></param>
        /// <param name="result"></param>
        public ExternalTaskSuccessResult(string externalTaskId, TResult result)
            :base(externalTaskId)
        {
            this.Result = result;
        }

        /// <summary>
        /// The result with which the ExternalTask has finished.
        /// </summary>
        /// <value></value>
        public TResult Result { get; private set; }
    }
}
