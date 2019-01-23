namespace ProcessEngine.ConsumerAPI.Contracts {
    /// <summary>
    /// Determines when the ProcessEngine will resolve, after a new ProcessInstance was started.
    /// </summary>
    public enum StartCallbackType : byte {
        /// <summary>
        /// The ProcessEngine will resolve immediately after the ProcessInstance was started.
        /// </summary>
        CallbackOnProcessInstanceCreated = 1,

        // TODO: cb - Sollte erst vorhanden sein, wenn die Implementierung auch vorhanden ist.
        // CallbackOnProcessInstanceFinished = 2,

        /// <summary>
        /// The ProcessEngine will resolve after a specific end event was reached.
        /// </summary>
        CallbackOnEndEventReached = 3,
    }
}
