const params = {
  correlationId: ':correlation_id',
  emptyActivityInstanceId: ':empty_activity_instance_id',
  endEventId: ':end_event_id',
  eventId: ':event_id',
  eventName: ':event_name',
  externalTaskId: ':external_task_id',
  manualTaskInstanceId: ':manual_task_instance_id',
  processInstanceId: ':process_instance_id',
  processModelId: ':process_model_id',
  startEventId: ':start_event_id',
  userTaskInstanceId: ':user_task_instance_id',
};

const paths = {
  // EmptyActivities
  processModelEmptyActivities: `/process_models/${params.processModelId}/empty_activities`,
  processInstanceEmptyActivities: `/process_instances/${params.processInstanceId}/empty_activities`,
  correlationEmptyActivities: `/correlations/${params.correlationId}/empty_activities`,
  processModelCorrelationEmptyActivities: `/process_models/${params.processModelId}/correlations/${params.correlationId}/empty_activities`,
  getOwnEmptyActivities: '/empty_activities/own',
  finishEmptyActivity:
    `/processes/${params.processInstanceId}/correlations/${params.correlationId}/empty_activities/${params.emptyActivityInstanceId}/finish`,
  // Events
  processModelEvents: `/process_models/${params.processModelId}/events`,
  correlationEvents: `/correlations/${params.correlationId}/events`,
  processModelCorrelationEvents: `/process_models/${params.processModelId}/correlations/${params.correlationId}/events`,
  triggerMessageEvent: `/message/${params.eventName}/trigger`,
  triggerSignalEvent: `/signal/${params.eventName}/trigger`,
  // ExternalTasks
  fetchAndLockExternalTasks: '/fetch_and_lock',
  extendExternalTaskLock: `/task/${params.externalTaskId}/extend_lock`,
  finishExternalTaskWithBpmnError: `/task/${params.externalTaskId}/handle_bpmn_error`,
  finishExternalTaskWithServiceError: `/task/${params.externalTaskId}/handle_service_error`,
  finishExternalTask: `/task/${params.externalTaskId}/finish`,
  // ManualTask
  processModelManualTasks: `/process_models/${params.processModelId}/manual_tasks`,
  processInstanceManualTasks: `/process_instances/${params.processInstanceId}/manual_tasks`,
  correlationManualTasks: `/correlations/${params.correlationId}/manual_tasks`,
  processModelCorrelationManualTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/manual_tasks`,
  getOwnManualTasks: '/manual_tasks/own',
  finishManualTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/` +
    `manual_tasks/${params.manualTaskInstanceId}/finish`,
  // ProcessModels
  processModels: '/process_models',
  processModelById: `/process_models/${params.processModelId}`,
  processModelByProcessInstanceId: `/process_instance/${params.processInstanceId}/process_model/`,
  startProcessInstance: `/process_models/${params.processModelId}/start`,
  getOwnProcessInstances: '/process_instances/own',
  getProcessResultForCorrelation: `/correlations/${params.correlationId}/process_models/${params.processModelId}/results`,
  // UserTasks
  processModelUserTasks: `/process_models/${params.processModelId}/user_tasks`,
  processInstanceUserTasks: `/process_instances/${params.processInstanceId}/user_tasks`,
  correlationUserTasks: `/correlations/${params.correlationId}/user_tasks`,
  processModelCorrelationUserTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/user_tasks`,
  getOwnUserTasks: '/user_tasks/own',
  finishUserTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/usertasks/${params.userTaskInstanceId}/finish`,
  // Task
  allSuspendedTasks: '/suspended_tasks',
  suspendedProcessModelTasks: `/process_models/${params.processModelId}/tasks`,
  suspendedProcessInstanceTasks: `/process_instances/${params.processInstanceId}/tasks`,
  suspendedCorrelationTasks: `/correlations/${params.correlationId}/tasks`,
  suspendedProcessModelCorrelationTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/tasks`,
};

export const restSettings = {
  params: params,
  paths: paths,
};
