import {UserTaskFormField} from './user_task_form_field';

/**
 * Contains information about a UserTasks configuration.
 */
export class UserTaskConfig {
  /**
   * A list of accessible form fields for the UserTask.
   */
  public formFields: Array<UserTaskFormField> = [];
  /**
   * The perferred type of control for the form field.
   */
  public preferredControl?: string;
  /**
   * Optional: A description of this UserTask.
   */
  public description?: string;
  /**
   * Optional: A message to show when the UserTask has been finished.
   */
  public finishedMessage?: string;
}
