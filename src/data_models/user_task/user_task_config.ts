import {UserTaskFormField} from './user_task_form_field';

/**
 * Contains information about a user tasks configuration.
 */
export class UserTaskConfig {
  /**
   * A list of accessible form fields for the user task.
   */
  public formFields: Array<UserTaskFormField> = [];
}
