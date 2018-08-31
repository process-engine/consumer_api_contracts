namespace ProcessEngine.ConsumerAPI.Contracts
{
    public enum StartCallbackType : byte
    {
        CallbackOnProcessInstanceCreated = 1,

        // TODO: cb - Sollte erst vorhanden sein, wenn die Implementierung auch vorhanden ist.
        // CallbackOnProcessInstanceFinished = 2,
        CallbackOnEndEventReached = 3,
    }
}