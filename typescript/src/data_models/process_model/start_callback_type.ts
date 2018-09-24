/**
 * Determines when the ProcessEngine will resolve after a new ProcessInstance was started.
 */
export enum StartCallbackType {
    /**
     * The ProcessEngine will resolve immediately after the ProcessInstance was started.
     */
    CallbackOnProcessInstanceCreated = 1,
    /**
     * The ProcessEngine will resolve after the first end event was reached.
     */
    CallbackOnProcessInstanceFinished = 2,
    /**
     * The ProcessEngine will resolve after a specific end event was reached.
     */
    CallbackOnEndEventReached = 3,
}
