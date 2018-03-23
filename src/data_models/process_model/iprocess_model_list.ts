import {IPaginationInfo, IProcessModel} from '../index';

export interface IProcessModelList extends IPaginationInfo {
  process_models: Array<IProcessModel>;
}
