import {ICorrelationItem} from './icorrelation';

export interface ICorrelationStore {
  addProcessInstanceToCorrelation(correlationId: string, processInstanceId: string, processModelKey?: string): void;
  getProcessInstancesInCorrelation(correlationId: string): Array<ICorrelationItem>;
}
