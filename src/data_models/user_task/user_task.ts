import {UserTaskConfig} from './user_task_config';

/**
 * Describes a user task that belongs to an active correlation.
 */
export class UserTask {
  /**
   * The id of the user task.
   */
  public id: string;
  /**
   * The id of the correlation that the user task belongs to.
   */
  public correlationId: string;
  /**
   * The id of the process model that the user task belongs to.
   */
  public processModelId: string;
  /**
   * Contains information about the user tasks configuration, such as the form fields that can be addressed.
   */
  public data: UserTaskConfig;
  /**
   * The token payload the UserTask got suspended with.
   */
  public tokenPayload: any;
}
