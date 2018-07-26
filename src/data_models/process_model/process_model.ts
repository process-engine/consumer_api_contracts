import {Event} from '../index';

export class ProcessModel {
  public id: string;
  public startEvents: Array<Event> = [];
  public endEvents: Array<Event> = [];
}
