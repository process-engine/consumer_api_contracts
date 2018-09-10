/**
 * Determines the type of a user tasks form field.
 */
export enum UserTaskFormFieldType {
  /**
   * The form field is a boolean.
   */
  boolean = 'boolean',
  /**
   * The form field is a boolean.
   */
  date = 'date',
  /**
   * The form field is an enumeration.
   */
  enum = 'enum',
  /**
   * The form field is long-type numerical.
   */
  long = 'long',
  /**
   * The form field is a number.
   */
  number = 'number',
  /**
   * The form field is a string.
   */
  string = 'string',
}
