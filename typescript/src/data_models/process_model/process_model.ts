import {Event} from '../event/index';

/**
 * Describes a ProcessModel.
 * The content is always user-specific and will not contain any information that a requesting user is not authorized to see.
 */
export class ProcessModel {
  /**
   * The id of the ProcessModel.
   */
  public id: string;
  /**
   * Contains a list of StartEvents that the requesting user has access to.
   */
  public startEvents: Array<Event> = [];
  /**
   * Contains a list of EndEvents that the requesting user has access to.
   */
  public endEvents: Array<Event> = [];
}
