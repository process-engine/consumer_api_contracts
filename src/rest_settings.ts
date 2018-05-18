// tslint:disable:typedef
const params = {
  processModelKey: ':process_model_key',
  correlationId: ':correlation_id',
  startEventKey: ':start_event_key',
  endEventKey: ':end_event_key',
  eventId: ':event_id',
  userTaskId: ':user_task_id',
};

const paths = {
  // Process models
  processModels: `/process_models`,
  processModelByKey: `/process_models/${params.processModelKey}`,
  startProcess: `/process_models/${params.processModelKey}/start_events/${params.startEventKey}/start`,
  startProcessAndAwaitEndEvent: `/process_models/${params.processModelKey}/start_events/${params.startEventKey}/end_event/${params.endEventKey}/start_and_resolve_by_end_event`,
  getCorrelationResultByProcessModelKey: `/correlations/${params.correlationId}/process_models/${params.processModelKey}/results`,
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

export const restSettings = {
  params: params,
  paths: paths,
};
