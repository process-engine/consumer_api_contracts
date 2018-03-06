// Routes
export interface IRoutes {
  // Process models
  processModels: string;
  processModel: string;
  startProcess: string;
  startProcessAndAwaitEndEvent: string;
  // Events
  processModelEvents: string;
  correlationEvents: string;
  processModelCorrelationEvents: string;
  triggerEvent: string;
  triggerProcessModelCorrelationEvent: string;
  // UserTasks
  processModelUserTasks: string;
  correlationUserTasks: string;
  processModelCorrelationUserTasks: string;
  finishUserTask: string;
  finishProcessModelCorrelationUserTask: string;
}

export const routes: IRoutes = {
  // Process models
  processModels: 'process_models',
  processModel: 'process_models/:process_model_key',
  startProcess: '/process_models/:process_model_key/start_events/:start_event_key/start',
  startProcessAndAwaitEndEvent: '/process_models/:process_model_key/start_events/:start_event_key/end_event/:end_event_key/start_and_resolve_by_end_event',
  // Events
  processModelEvents: 'process_models/:process_model_key/events',
  correlationEvents: 'correlations/:correlation_id/events',
  processModelCorrelationEvents: 'process_models/:process_model_key/correlations/:correlation_id/events',
  triggerEvent: '/events/:event_id/trigger',
  triggerProcessModelCorrelationEvent: '/process_models/:process_model_key/correlations/:correlation_id/events/:event_id/trigger',
  // UserTasks
  processModelUserTasks: 'process_models/:process_model_key/user_tasks',
  correlationUserTasks: 'correlations/:correlation_id/user_tasks',
  processModelCorrelationUserTasks: 'process_models/:process_model_key/correlations/:correlation_id/user_tasks',
  finishUserTask: '/user_tasks/:user_task_id/finish',
  finishProcessModelCorrelationUserTask: '/process_models/:process_model_key/correlations/:correlation_id/user_tasks/:user_task_id/finish',
};

// Notification-channels - TODO: Update to consumer api concept
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
