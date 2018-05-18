export interface ICorrelationStore {
  addProcessInstanceToCorrelation(correlationId: string, processInstanceId: string, processModelKey?: string): void;
  getProcessInstancesInCorrelation(correlationId: string): Array<string>;
}
