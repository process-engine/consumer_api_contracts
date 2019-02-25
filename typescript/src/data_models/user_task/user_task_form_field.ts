import {UserTaskEnumValue} from './user_task_enum_value';
import {UserTaskFormFieldType} from './user_task_form_field_type';

/**
 * Contains information about a UserTasks form field.
 */
export class UserTaskFormField {
  /**
   * The id of the form field.
   */
  public id: string;
  /**
   * The type of the form field.
   */
  public type: UserTaskFormFieldType;
  /**
   * Optional: If the form field is an enumeration, this will contain the values for that enumeration.
   */
  public enumValues?: Array<UserTaskEnumValue>;
  /**
   * The label of the form field.
   */
  public label: string;
  /**
   * The default value of the form field.
   */
  public defaultValue?: any;
  /**
   * The perferred type of control for the form field.
   */
  public preferredControl?: string;
}
