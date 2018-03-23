export interface IEvent {
  key: string;
  id: string;
  process_instance_id: string;
  data: any; // TODO: Define event-payload
}
