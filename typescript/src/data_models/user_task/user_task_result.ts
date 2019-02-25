/**
 * Describes the payload that can be given to a UserTask upon finishing it.
 */
export class UserTaskResult {
  /**
   * Contains a list of results for the UserTasks form fields.
   */
  public formFields: {
    [fieldId: string]: any,
  };
}
