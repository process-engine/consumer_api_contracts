namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
     /// <summary>
    /// Describes an event that can be triggered through the ConsumerAPI.
    /// </summary>
    public class Event
    {
        /// <summary>
        /// The model ID of the event, as it is declared in the ProcessModel.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// The name of the event, as it is declared in the ProcessModel.
        /// </summary>
        public string EventName { get; set; }

        /// <summary>
        /// The BPMN type of the event (StartEvent, EndEvent, etc).
        /// </summary>
        public string BpmnType { get; set; }

        /// <summary>
        /// The type of the event (Message, Signal, etc).
        /// </summary>
        public string EventType { get; set; }

        /// <summary>
        /// The instance ID of the event.
        /// </summary>
        public string FlowNodeInstanceId { get; set; }

        /// <summary>
        /// The corresponding id of the Correlation holding the event.
        /// </summary>
        public string CorrelationId { get; set; }

        /// <summary>
        /// The corresponding id of the ProcessModel.
        /// </summary>
        public string ProcessModelId { get; set; }

        /// <summary>
        /// The id of the ProcessInstance.
        /// </summary>
        public string ProcessInstanceId { get; set; }
    }
}
