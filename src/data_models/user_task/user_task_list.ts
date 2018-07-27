import {UserTask} from './user_task';

/**
 * Describes a list of consumer-api formatted user tasks.
 */
export class UserTaskList {
  /**
   * The user task list.
   */
  public userTasks: Array<UserTask> = [];
}
