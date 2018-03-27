// tslint:disable:variable-name
// This describes the message that is received through the messagebus.
export class ProcessEventMessagePayload {
  public process_model_key: string;
  public event_key: string;
  public correlation_id: string;
  public payload: any; // TODO: Define ProcessEventMessagePayload-body
}
