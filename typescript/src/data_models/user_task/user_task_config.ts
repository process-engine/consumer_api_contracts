import {UserTaskFormField} from './user_task_form_field';

/**
 * Contains information about a user tasks configuration.
 */
export class UserTaskConfig {
  /**
   * A list of accessible form fields for the user task.
   */
  public formFields: Array<UserTaskFormField> = [];
  /**
   * The perferred type of control for the form field.
   */
  public preferredControl?: string;
  /**
   * A description of this UserTask.
   */
  public description?: string;
  /**
   * A message to show if UserTask is finshed.
   */
  public finishedMessage?: string;
}
