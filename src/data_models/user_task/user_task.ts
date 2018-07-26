import {UserTaskConfig} from './user_task_config';

export class UserTask {
  public id: string;
  public correlationId: string;
  public processModelId: string;
  public data: UserTaskConfig;
  public tokenPayload: any; // token payload the UserTask got suspended with
}
