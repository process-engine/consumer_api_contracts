// tslint:disable:variable-name
export class ProcessStartRequestPayload {
  public correlation_id: string;
   // Note: The CallerId contains a process instance ID and must only ever be set, when a subprocess is to be started.
  public callerId?: string;
  public input_values: any;
}
