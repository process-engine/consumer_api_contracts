namespace ProcessEngine.ConsumerAPI.Contracts.DataModel
{
    /// <summary>
    /// Determines when the ProcessEngine will finish the returned Task after a
    /// new ProcessInstance was started.
    /// </summary>
    public enum StartCallbackType : byte
    {
        /// <summary>
        /// The ProcessEngine will finish the Task immediately after the
        /// ProcessInstance was started.
        /// </summary>
        CallbackOnProcessInstanceCreated = 1,

        /// <summary>
        /// The ProcessEngine will finish the Task after the first EndEvent was
        /// reached.
        /// </summary>
        CallbackOnProcessInstanceFinished = 2,

        /// <summary>
        /// The ProcessEngine will finish the Task after a specific EndEvent was
        /// reached.
        /// </summary>
        CallbackOnEndEventReached = 3,
    }
}
