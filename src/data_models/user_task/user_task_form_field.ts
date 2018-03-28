import {UserTaskFormFieldType} from './user_task_form_field_type';

// tslint:disable:variable-name
export class UserTaskFormField {
  public id: string;
  public type: UserTaskFormFieldType;
  public label: string;
  public default_value?: any;
  public preferred_control?: string;
}
