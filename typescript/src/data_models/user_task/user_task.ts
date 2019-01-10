import {IIdentity} from '@essential-projects/iam_contracts';

import {UserTaskConfig} from './user_task_config';

/**
 * Describes a user task that belongs to an active correlation.
 */
export class UserTask {
  /**
   * The id of the UserTask.
   */
  public id: string;
  /**
   * The instance id of the UserTask.
   */
  public flowNodeInstanceId?: string;
  /**
   * The name of the UserTask.
   */
  public name: string;
  /**
   * The id of the correlation that the UserTask belongs to.
   */
  public correlationId: string;
  /**
   * The id of the process model that the UserTask belongs to.
   */
  public processModelId: string;
  /**
   * The id of the process instance that the UserTask belongs to.
   */
  public processInstanceId?: string;
  /**
   * Contains information about the UserTask configuration, such as the form fields that can be addressed.
   */
  public data: UserTaskConfig;
  /**
   * The token payload the UserTask got suspended with.
   */
  public tokenPayload: any;
  /**
   * Contains the identity the UserTask belongs to.
   */
  public owner: IIdentity;
}
