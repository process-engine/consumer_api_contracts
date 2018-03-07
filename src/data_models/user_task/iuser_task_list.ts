import {IPaginationInfo, IUserTask} from '../index';

export interface IUserTaskList extends IPaginationInfo {
  user_tasks: Array<IUserTask>;
}
