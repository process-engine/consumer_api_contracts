// TODO - Question: Use different types for ProcessInstance and ProcessModel?
export interface IUserTask {
  key: string;
  id: string;
  process_instance_id: string;
  data: any; // TODO: Define payload
}
