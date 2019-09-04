namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Contains the result set for an ExternalTask that failed with a BpmnError.
    /// </summary>
    public class ExternalTaskBpmnError : ExternalTaskResultBase
    {
        /// <summary></summary>
        /// <param name="externalTaskId"></param>
        /// <param name="errorCode"></param>
        public ExternalTaskBpmnError(string externalTaskId, string errorCode)
            : base(externalTaskId)
        {
            this.errorCode = errorCode;
        }

        /// <summary>
        /// The code of the BPMN error that occured.
        /// </summary>
        /// <value></value>
        public string errorCode { get; private set; }
    }
}
