namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Base class for implementing an ExternalTaskApiResult.
    /// </summary>
    public abstract class ExternalTaskResultBase
    {
        /// <summary>
        /// </summary>
        /// <param name="externalTaskId"></param>
        public ExternalTaskResultBase(string externalTaskId) {
            this.externalTaskId = externalTaskId;
        }

        /// <summary>
        /// The ID of the ExternalTask to which this result belogns.
        /// </summary>
        /// <value></value>
        public string externalTaskId { get; private set; }
    }
}
