/**
 * Describes the payload that a ProcessModel can be started with.
 */
export class ProcessStartRequestPayload {
  /**
   * Optional: If set, the ProcessEngine will use this as the id for the correlation in which the ProcessModel will be executed.
   * If not provided, the ProcessEngine will generate a CorrelationId by itself.
   */
  public correlationId?: string;
   /**
    * Optional: Contains a ProcessInstanceId and must only ever be set, when a subprocess is to be started.
    */
  public callerId?: string;
  /**
   * Contains the arguments with which to start the ProcessModel.
   */
  public inputValues: any;
}
