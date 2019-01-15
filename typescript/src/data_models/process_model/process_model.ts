import {Event} from '../event/index';

/**
 * Describes a process model.
 * The content is always user-specific and will not contain any information that a requesting user is not authorized to see.
 */
export class ProcessModel {
  /**
   * The id of the process model.
   */
  public id: string;
  /**
   * Contains a list of start events that the requesting user has access to.
   */
  public startEvents: Array<Event> = [];
  /**
   * Contains a list of end events that the requesting user has access to.
   */
  public endEvents: Array<Event> = [];
}
