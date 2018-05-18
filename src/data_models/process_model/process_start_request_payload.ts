// tslint:disable:variable-name
export class ProcessStartRequestPayload {
  public correlation_id: string;
  public callerId?: string; // Usually a process instance ID
  public input_values: any;
}
