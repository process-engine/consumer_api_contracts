// Routes
const processModelsRoute: string = '/process_models';
const processModelRoute: string = '/process_models/:process_model_key';
const correlationRoute: string = `/correlations/:correlation_id`;
const eventsRoute: string = `/events`;
const eventRoute: string = `/events/:event_id`;
const userTasksRoute: string = `/user_tasks`;
const userTaskRoute: string = `/user_tasks/:user_task_id`;

export const routes: { [routeName: string]: string; } = {
  // process-model-routes
  processModelsRoute: processModelsRoute,
  processModelRoute: processModelRoute,
  startProcessRoute: `${processModelRoute}/start_events/:start_event_key/trigger`,
  // event-routes
  eventsByProcessModelRoute: `${processModelRoute}${eventsRoute}`,
  eventsByCorrelationRoute: `${correlationRoute}${eventsRoute}`,
  eventsByVerifiedCorrelationRoute: `${processModelRoute}${correlationRoute}${eventsRoute}`,
  triggerEventRoute: `${processModelRoute}${correlationRoute}${eventRoute}/trigger`,
  // user-task-routes
  userTasksByProcessModelRoute: `${processModelRoute}${userTasksRoute}`,
  userTasksByCorrelationRoute: `${correlationRoute}${userTasksRoute}`,
  userTasksByVerifiedCorrelationRoute: `${processModelRoute}${correlationRoute}${userTasksRoute}`,
  finishUserTaskRoute: `${processModelRoute}${correlationRoute}${userTaskRoute}/finish`,
};

// Notification-channels
const processModelKeyConstant: string = ':process_model_key';
const correlationIdConstant: string = ':correlation_id';
const elementKeyConstant: string = ':element_key';
const processNotificationsChannel: string = '/process_notifications';

export const notificationChannels: { [channelName: string]: string } = {
  processModelKeyConstant: processModelKeyConstant,
  correlationIdConstant: correlationIdConstant,
  elementKeyConstant: elementKeyConstant,
  processNotificationsChannel: processNotificationsChannel,
  processNotificationsByProcessModelChannel: `/process_models/${processModelKeyConstant}${processNotificationsChannel}`,
  processNotificationsByCorrelationChannel: `/correlation/${correlationIdConstant}${processNotificationsChannel}`,
  processNotificationByElementChannel: `/correlation/${correlationIdConstant}/elements/${elementKeyConstant}${processNotificationsChannel}`,
};
