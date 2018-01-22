import {IEvent, IPaginationInfo} from './index';

export interface IEventList extends IPaginationInfo {
  events: Array<IEvent>;
}
