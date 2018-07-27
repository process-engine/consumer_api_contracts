/**
 * Determines when the process engine will resolve after a new process instance/correlation was started.
 */
export enum StartCallbackType {
    /**
     * The process engine will resolve immediately after the process instance was started.
     */
    CallbackOnProcessInstanceCreated = 1,
    /**
     * The process engine will resolve immediately after the first end event was reached.
     */
    CallbackOnProcessInstanceFinished = 2,
    /**
     * The process engine will resolve immediately after a specific end event was reached.
     */
    CallbackOnEndEventReached = 3,
}
