import {IEventList, IEventTriggerPayload, IProcessModel, IProcessModelList, IUserTaskList, IUserTaskResult} from './index';

export interface IConsumerApiService {
  getProcessModels(): Promise<IProcessModelList>;
  getProcessModelByKey(processModelKey: string): Promise<IProcessModel>;
  startProcess(processModelKey: string, startEventKey: string): Promise<void>;

  getEventsByProcessModel(processModelKey: string): Promise<IEventList>;
  getEventsByCorrelation(correlationId: string): Promise<IEventList>;
  getEventsByProcessModelAndCorrelation(processModelKey: string, correlationId: string): Promise<IEventList>;
  triggerEvent(processModelKey: string, correlationId: string, eventId: string, eventTriggerPayload?: IEventTriggerPayload): Promise<void>;

  getUserTasksByProcessModel(processModelKey: string): Promise<IUserTaskList>;
  getUserTasksByCorrelation(correlationId: string): Promise<IUserTaskList>;
  getUserTasksByProcessModelAndCorrelation(processModelKey: string, correlationId: string): Promise<IUserTaskList>;
  finishUserTask(processModelKey: string, correlationId: string, userTaskId: string, userTaskResult: IUserTaskResult): Promise<void>;
}
