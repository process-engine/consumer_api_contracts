// This describes the message that is received through the messagebus.
export interface IProcessEventMessagePayload {
  process_model_key: string;
  event_key: string;
  correlation_id: string;
  payload: any;
}
