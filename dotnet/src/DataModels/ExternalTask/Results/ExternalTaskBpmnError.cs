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
        /// <summary></summary>
        /// <param name="externalTaskId"></param>
        /// <param name="errorCode"></param>
        /// <param name="errorMessage"></param>
        public ExternalTaskBpmnError(string externalTaskId, string errorCode, string errorMessage)
            : base(externalTaskId)
        {
            this.errorCode = errorCode;
            this.errorMessage = errorMessage;
        }

        /// <summary>
        /// The code of the BPMN error that occured.
        /// </summary>
        /// <value></value>
        public string errorCode { get; private set; }

        /// <summary>
        /// The message of the BPMN error that occured.
        /// </summary>
        /// <value></value>
        public string errorMessage { get; private set; }
    }
}
