
// tslint:disable:variable-name
// tslint:disable:max-classes-per-file
// tslint:disable:max-line-length
export class UrlParameters {
  public static processModelKey: string = ':process_model_key';
  public static correlationId: string = ':correlation_id';
  public static startEventKey: string = ':start_event_key';
  public static endEventKey: string = ':end_event_key';
  public static eventId: string = ':event_id';
  public static userTaskId: string = ':user_task_id';
}

export class UrlPaths {
  // Process models
  public static processModels: string = `/process_models`;
  public static processModelByKey: string = `/process_models/${UrlParameters.processModelKey}`;
  public static startProcess: string = `/process_models/${UrlParameters.processModelKey}/start_events/${UrlParameters.startEventKey}/start`;
  public static startProcessAndAwaitEndEvent: string = `/process_models/${UrlParameters.processModelKey}/start_events/${UrlParameters.startEventKey}/end_event/${UrlParameters.endEventKey}/start_and_resolve_by_end_event`;
  // Events
  public static processModelEvents: string = `/process_models/${UrlParameters.processModelKey}/events`;
  public static correlationEvents: string = `/correlations/${UrlParameters.correlationId}/events`;
  public static processModelCorrelationEvents: string = `/process_models/${UrlParameters.processModelKey}/correlations/${UrlParameters.correlationId}/events`;
  public static triggerEvent: string = `/process_models/${UrlParameters.processModelKey}/correlations/${UrlParameters.correlationId}/events/${UrlParameters.eventId}/trigger`;
  // UserTasks
  public static processModelUserTasks: string = `/process_models/${UrlParameters.processModelKey}/user_tasks`;
  public static correlationUserTasks: string = `/correlations/${UrlParameters.correlationId}/user_tasks`;
  public static processModelCorrelationUserTasks: string = `/process_models/${UrlParameters.processModelKey}/correlations/${UrlParameters.correlationId}/user_tasks`;
  public static finishUserTask: string = `/process_models/${UrlParameters.processModelKey}/correlations/${UrlParameters.correlationId}/user_tasks/${UrlParameters.userTaskId}/finish`;
}

export class RestSettings {
  public static params: UrlParameters = UrlParameters;
  public static paths: UrlPaths = UrlPaths;
}
