import {IEvent} from '../index';

export interface IProcessModel {
  key: string;
  startEvents: Array<IEvent>;
}
