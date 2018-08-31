// tslint:disable:typedef
const params = {
  processModelId: ':process_model_id',
  correlationId: ':correlation_id',
  startEventId: ':start_event_id',
  endEventId: ':end_event_id',
  eventId: ':event_id',
  userTaskId: ':user_task_id',
};

const paths = {
  // Process models
  processModels: `/process_models`,
  processModelById: `/process_models/${params.processModelId}`,
  startProcessInstance: `/process_models/${params.processModelId}/start_events/${params.startEventId}/start`,
  getProcessResultForCorrelation: `/correlations/${params.correlationId}/process_models/${params.processModelId}/results`,
  // Events
  processModelEvents: `/process_models/${params.processModelId}/events`,
  correlationEvents: `/correlations/${params.correlationId}/events`,
  processModelCorrelationEvents: `/process_models/${params.processModelId}/correlations/${params.correlationId}/events`,
  triggerEvent: `/process_models/${params.processModelId}/correlations/${params.correlationId}/events/${params.eventId}/trigger`,
  // UserTasks
  processModelUserTasks: `/process_models/${params.processModelId}/user_tasks`,
  correlationUserTasks: `/correlations/${params.correlationId}/user_tasks`,
  processModelCorrelationUserTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/user_tasks`,
  finishUserTask: `/process_models/${params.processModelId}/correlations/${params.correlationId}/user_tasks/${params.userTaskId}/finish`,
};

/**
 * Contains the endpoints and various rest parameters used by the consumer api.
 */
export const restSettings = {
  /**
   * A collection of all url parameters employed by the consumer api.
   */
  params: params,
  /**
   * A collection of all urls employed by the consumer api.
   */
  paths: paths,
};
