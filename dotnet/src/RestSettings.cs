namespace ProcessEngine.ConsumerAPI.Contracts.RestSettings
{

    public static class Endpoints
    {
        public static string ConsumerAPI { get { return "/api/consumer/v1"; } }
    }

    public static class Params
    {
        public static string CorrelationId { get { return ":correlation_id"; } }
        public static string EmptyActivityInstanceId { get { return ":empty_activity_instance_id"; } }
        public static string EndEventId { get { return ":end_event_id"; } }
        public static string EventId { get { return ":event_id"; } }
        public static string EventName { get { return ":event_name"; } }
        public static string ExternalTaskId { get { return ":external_task_id"; } }
        public static string ManualTaskInstanceId { get { return ":manual_task_instance_id"; } }
        public static string ProcessInstanceId { get { return ":process_instance_id"; } }
        public static string ProcessModelId { get { return ":process_model_id"; } }
        public static string StartEventId { get { return ":start_event_id"; } }
        public static string UserTaskInstanceId { get { return ":user_task_instance_id"; } }
    }

    public static class Paths
    {
        // EmptyActivities
        public static string ProcessModelEmptyActivities { get { return $"/process_models/{Params.ProcessModelId}/empty_activities"; } }
        public static string ProcessInstanceEmptyActivities { get { return $"/process_instances/{Params.ProcessInstanceId}/empty_activities"; } }
        public static string CorrelationEmptyActivities { get { return $"/correlations/{Params.CorrelationId}/empty_activities"; } }
        public static string ProcessModelCorrelationEmptyActivities { get { return $"/process_models/{Params.ProcessModelId}/correlations/{Params.CorrelationId}/empty_activities"; } }
        public static string GetOwnEmptyActivities { get { return "/empty_activities/own"; } }
        public static string FinishEmptyActivity { get { return $"/processes/{Params.ProcessInstanceId}/correlations/{Params.CorrelationId}/empty_activities/{Params.EmptyActivityInstanceId}/finish"; } }
        // Events
        public static string ProcessModelEvents { get { return $"/process_models/{Params.ProcessModelId}/events"; } }
        public static string CorrelationEvents { get { return $"/correlations/{Params.CorrelationId}/events"; } }
        public static string ProcessModelCorrelationEvents { get { return $"/process_models/{Params.ProcessModelId}/correlations/{Params.CorrelationId}/events"; } }
        public static string TriggerMessageEvent { get { return $"/message/{Params.EventName}/trigger"; } }
        public static string TriggerSignalEvent { get { return $"/signal/{Params.EventName}/trigger"; } }
        // ExternalTasks
        public static string FetchAndLockExternalTasks { get { return $"/external_tasks/fetch_and_lock"; } }
        public static string ExtendExternalTaskLock { get { return $"/external_tasks/{Params.ExternalTaskId}/extend_lock"; } }
        public static string FinishExternalTask { get { return $"/external_tasks/{Params.ExternalTaskId}/finish"; } }
        public static string FinishExternalTaskWithBpmnError { get { return $"/external_tasks/{Params.ExternalTaskId}/handle_bpmn_error"; } }
        public static string FinishExternalTaskWithServiceError { get { return $"/external_tasks/{Params.ExternalTaskId}/handle_service_error"; } }
        // ManualTask
        public static string ProcessModelManualTasks { get { return $"/process_models/{Params.ProcessModelId}/manual_tasks"; } }
        public static string ProcessInstanceManualTasks { get { return $"/process_instances/{Params.ProcessInstanceId}/manual_tasks"; } }
        public static string CorrelationManualTasks { get { return $"/correlations/{Params.CorrelationId}/manual_tasks"; } }
        public static string ProcessModelCorrelationManualTasks { get { return $"/process_models/{Params.ProcessModelId}/correlations/{Params.CorrelationId}/manual_tasks"; } }
        public static string GetOwnManualTasks { get { return $"/manual_tasks/own"; } }
        public static string FinishManualTask { get { return $"/processes/{Params.ProcessInstanceId}/correlations/{Params.CorrelationId}/manual_tasks/{Params.ManualTaskInstanceId}/finish"; } }
        // ProcessModels
        public static string ProcessModels { get { return "/process_models"; } }
        public static string ProcessModelById { get { return $"/process_models/{Params.ProcessModelId}"; } }
        public static string ProcessModelByProcessInstanceId { get { return $"/process_instance/{Params.ProcessInstanceId}/process_model/"; } }
        public static string StartProcessInstance { get { return $"/process_models/{Params.ProcessModelId}/start"; } }
        public static string GetOwnProcessInstances { get { return "/process_instances/own"; } }
        public static string GetProcessResultForCorrelation { get { return $"/correlations/{Params.CorrelationId}/process_models/{Params.ProcessModelId}/results"; } }
        // UserTasks
        public static string ProcessModelUserTasks { get { return $"/process_models/{Params.ProcessModelId}/user_tasks"; } }
        public static string ProcessInstanceUserTasks { get { return $"/process_instances/{Params.ProcessInstanceId}/user_tasks"; } }
        public static string CorrelationUserTasks { get { return $"/correlations/{Params.CorrelationId}/user_tasks"; } }
        public static string ProcessModelCorrelationUserTasks { get { return $"/process_models/{Params.ProcessModelId}/correlations/{Params.CorrelationId}/user_tasks"; } }
        public static string GetOwnUserTasks { get { return "/user_tasks/own"; } }
        public static string FinishUserTask { get { return $"/processes/{Params.ProcessInstanceId}/correlations/{Params.CorrelationId}/usertasks/{Params.UserTaskInstanceId}/finish"; } }

    }
}
