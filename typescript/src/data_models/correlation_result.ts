/**
 * Contains information about the result with which a correlation has finished execution.
 */
export class CorrelationResult {
  /**
   * The id of the correlation that was finished.
   */
  public correlationId: string;
  /**
   * The id of the EndEvent with which the correlation was finished.
   */
  public endEventId: string;
  /**
   * Contains the final result with which a correlation was finished.
   */
  public tokenPayload: string;
}
