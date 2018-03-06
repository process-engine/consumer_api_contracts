// Routes
export interface IRoutes {
  processModels: string;
  processModel: string;
  startProcess: string;
  startProcessAndAwaitEndEvent: string;
  processModelEvents: string;
  processModelCorrelationEvents: string;
  triggerProcessModelCorrelationEvent: string;
  processModelUserTasks: string;
  processModelCorrelationUserTasks: string;
  finishProcessModelCorrelationUserTask: string;
  correlationEvents: string;
  correlationUserTasks: string;
  triggerEvent: string;
  finishUserTask: string;
}

export const routes: IRoutes = {
  processModels: 'process_models',
  processModel: 'process_models/:process_model_key',
  startProcess: '/process_models/:process_model_key/start_events/:start_event_key/start',
  startProcessAndAwaitEndEvent: '/process_models/:process_model_key/start_events/:start_event_key/end_event/:end_event_key/start_and_resolve_by_end_event',
  processModelEvents: 'process_models/:process_model_key/events',
  processModelCorrelationEvents: 'process_models/:process_model_key/correlations/:correlation_id/events',
  triggerProcessModelCorrelationEvent: '/process_models/:process_model_key/correlations/:correlation_id/events/:event_id/trigger',
  processModelUserTasks: 'process_models/:process_model_key/user_tasks',
  processModelCorrelationUserTasks: 'process_models/:process_model_key/correlations/:correlation_id/user_tasks',
  finishProcessModelCorrelationUserTask: '/process_models/:process_model_key/correlations/:correlation_id/user_tasks/:user_task_id/finish',
  correlationEvents: 'correlations/:correlation_id/events',
  correlationUserTasks: 'correlations/:correlation_id/user_tasks',
  triggerEvent: '/events/:event_id/trigger',
  finishUserTask: '/user_tasks/:user_task_id/finish',
};

// Notification-channels
export interface INotificationChannels {
  processModelKeyConstant: string;
  correlationIdConstant: string;
  elementKeyConstant: string;
  processNotificationsChannel: string;
  processNotificationsByProcessModelChannel: string;
  processNotificationsByCorrelationChannel: string;
  processNotificationByElementChannel: string;
}

const processModelKeyConstant: string = ':process_model_key';
const correlationIdConstant: string = ':correlation_id';
const elementKeyConstant: string = ':element_key';
const processNotificationsChannel: string = '/process_notifications';

export const notificationChannels: INotificationChannels = {
  processModelKeyConstant: processModelKeyConstant,
  correlationIdConstant: correlationIdConstant,
  elementKeyConstant: elementKeyConstant,
  processNotificationsChannel: processNotificationsChannel,
  processNotificationsByProcessModelChannel: `/process_models/${processModelKeyConstant}${processNotificationsChannel}`,
  processNotificationsByCorrelationChannel: `/correlation/${correlationIdConstant}${processNotificationsChannel}`,
  processNotificationByElementChannel: `/correlation/${correlationIdConstant}/elements/${elementKeyConstant}${processNotificationsChannel}`,
};
