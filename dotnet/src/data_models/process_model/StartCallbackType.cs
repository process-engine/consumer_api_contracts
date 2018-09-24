namespace ProcessEngine.ConsumerAPI.Contracts
{
    /// <summary>
    /// Determines when the ProcessEngine will resolve, after a new ProcessInstance was started.
    /// </summary>
    public enum StartCallbackType : byte
    {
        CallbackOnProcessInstanceCreated = 1,

        // TODO: cb - Sollte erst vorhanden sein, wenn die Implementierung auch vorhanden ist.
        // CallbackOnProcessInstanceFinished = 2,
        CallbackOnEndEventReached = 3,
    }
}
