export interface ICorrelation {
  [correlationId: string]: Array<ICorrelationItem>;
}

export interface ICorrelationItem {
  processInstanceId: string;
  processModelKey: string;
}
