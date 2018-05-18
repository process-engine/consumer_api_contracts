export interface ICorrelationStore {
  addProcessInstanceToCorrelation(correlationId: string, processInstanceId: string): void;
  getProcessInstancesInCorrelation(correlationId: string): Array<string>;
}
