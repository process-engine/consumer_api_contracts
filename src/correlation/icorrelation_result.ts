export interface ICorrelationResult {
  correlationId: string;
  processInstanceResults: Array<IProcessInstanceResult>;
}

export interface IProcessInstanceResult {
  processInstanceId: string;
  processModelKey: string;
  result: any;
}
