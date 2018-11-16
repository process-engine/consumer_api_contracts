// tslint:disable:typedef
const params = {
  processInstanceId: ':process_instance_id',
  processModelId: ':process_model_id',
  correlationId: ':correlation_id',
  startEventId: ':start_event_id',
  endEventId: ':end_event_id',
  eventId: ':event_id',
  eventName: ':event_name',
  userTaskInstanceId: ':user_task_instance_id',
  manualTaskInstanceId: ':manual_task_instance_id',
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
  triggerMessageEvent: `/message/${params.eventName}/trigger`,
  triggerSignalEvent: `/signal/${params.eventName}/trigger`,
  // UserTasks
  processModelUserTasks: `/process_models/${params.processModelId}/user_tasks`,
  correlationUserTasks: `/correlations/${params.correlationId}/user_tasks`,
  processModelCorrelationUserTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/user_tasks`,
  finishUserTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/usertasks/${params.userTaskInstanceId}/finish`,
  // ManualTask
  processModelManualTasks: `/process_models/${params.processModelId}/manual_tasks`,
  correlationManualTasks: `/correlations/${params.correlationId}/manual_tasks`,
  processModelCorrelationManualTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/manual_tasks`,
  finishManualTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/` +
    `manual_tasks/${params.manualTaskInstanceId}/finish`,
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
