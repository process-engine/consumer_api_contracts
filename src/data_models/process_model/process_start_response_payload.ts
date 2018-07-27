/**
 * Contains a response from the process engine, which will be send after a process model was started.
 * Depending on the type of start callback used, this will also contain information about the correlation result.
 */
export class ProcessStartResponsePayload {
  /**
   * The id of the correlation in which the started process model runs.
   */
  public correlationId: string;
  /**
   * Optional: If the process engine is to wait for the process instance to finish,
   * this will contain the id of the end event with which process execution was finished.
   */
  public endEventId?: string;
  /**
   * Optional: If the process engine is to wait for the process instance to finish,
   * this will contain the final result with which process execution was finished.
   */
  public tokenPayload?: string;
}
