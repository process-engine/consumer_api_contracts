// This describes the message that is received through the messagebus.
export class ProcessEventMessagePayload {
  public processModelKey: string;
  public eventKey: string;
  public correlationId: string;
  public payload: any; // TODO: Define ProcessEventMessagePayload-body
}
