import {IEventList, IEventTriggerPayload, IProcessModel, IProcessModelList, IUserTaskList, IUserTaskResult} from './index';

export interface IConsumerApiService {
  // Process models
  getProcessModels(): Promise<IProcessModelList>;
  getProcessModelByKey(processModelKey: string): Promise<IProcessModel>;
  startProcess(processModelKey: string, startEventKey: string): Promise<void>;
  startProcessAndAwaitEndEvent(processModelKey: string, startEventKey: string, endEventKey: string): Promise<void>;
  // Events
  getProcessModelEvents(processModelKey: string): Promise<IEventList>;
  getCorrelationEvents(correlationId: string): Promise<IEventList>;
  getProcessModelCorrelationEvents(processModelKey: string, correlationId: string): Promise<IEventList>;
  triggerEvent(processModelKey: string, eventId: string, eventTriggerPayload?: IEventTriggerPayload): Promise<void>;
  triggerProcessModelCorrelationEvent(processModelKey: string,
                                      correlationId: string,
                                      eventId: string,
                                      eventTriggerPayload?: IEventTriggerPayload): Promise<void>;
  // UserTasks
  getProcessModelUserTasks(processModelKey: string): Promise<IUserTaskList>;
  getCorrelationUserTasks(correlationId: string): Promise<IUserTaskList>;
  getProcessModelCorrelationUserTasks(processModelKey: string, correlationId: string): Promise<IUserTaskList>;
  finishUserTask(processModelKey: string, userTaskId: string, userTaskResult: IUserTaskResult): Promise<void>;
  finishProcessModelCorrelationUserTask(processModelKey: string,
                                        correlationId: string,
                                        userTaskId: string,
                                        userTaskResult: IUserTaskResult): Promise<void>;
}
