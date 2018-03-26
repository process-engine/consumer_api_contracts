
// tslint:disable:variable-name
// tslint:disable:max-classes-per-file
export class UrlParameters {
  public processModelKey: string;
  public correlationId: string;
  public startEventKey: string;
  public endEventKey: string;
  public eventId: string;
  public userTaskId: string;
}

export class UrlPaths {
  // Process models
  public processModels: string;
  public processModelByKey: string;
  public startProcess: string;
  public startProcessAndAwaitEndEvent: string;
  // Events
  public processModelEvents: string;
  public correlationEvents: string;
  public processModelCorrelationEvents: string;
  public triggerEvent: string;
  // UserTasks
  public processModelUserTasks: string;
  public correlationUserTasks: string;
  public processModelCorrelationUserTasks: string;
  public finishUserTask: string;
}

export class RestSettings {
  public params: UrlParameters;
  public paths: UrlPaths;
}

const params: UrlParameters = {
  processModelKey: ':process_model_key',
  correlationId: ':correlation_id',
  startEventKey: ':start_event_key',
  endEventKey: ':end_event_key',
  eventId: ':event_id',
  userTaskId: ':user_task_id',
};

const paths: UrlPaths = {
  // Process models
  processModels: `/process_models`,
  processModelByKey: `/process_models/${params.processModelKey}`,
  startProcess: `/process_models/${params.processModelKey}/start_events/${params.startEventKey}/start`,
  startProcessAndAwaitEndEvent: `/process_models/${params.processModelKey}/start_events/${params.startEventKey}/end_event/${params.endEventKey}/start_and_resolve_by_end_event`,
  // Events
  processModelEvents: `/process_models/${params.processModelKey}/events`,
  correlationEvents: `/correlations/${params.correlationId}/events`,
  processModelCorrelationEvents: `/process_models/${params.processModelKey}/correlations/${params.correlationId}/events`,
  triggerEvent: `/process_models/${params.processModelKey}/correlations/${params.correlationId}/events/${params.eventId}/trigger`,
  // UserTasks
  processModelUserTasks: `/process_models/${params.processModelKey}/user_tasks`,
  correlationUserTasks: `/correlations/${params.correlationId}/user_tasks`,
  processModelCorrelationUserTasks: `/process_models/${params.processModelKey}/correlations/${params.correlationId}/user_tasks`,
  finishUserTask: `/process_models/${params.processModelKey}/correlations/${params.correlationId}/user_tasks/${params.userTaskId}/finish`,
};

export const restSettings: RestSettings = {
  params: params,
  paths: paths,
};
