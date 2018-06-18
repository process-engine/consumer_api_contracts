import {UserTaskConfig} from './user_task_config';

export class UserTask {
  public key: string;
  public id: string;
  public processInstanceId: string;
  public data: UserTaskConfig;
  public payload: any; // TODO (SM): fill this with token payload from suspension
}
