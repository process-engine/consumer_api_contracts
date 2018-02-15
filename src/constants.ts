// Routes
export interface IRoutes {
  processModels: string;
  processModel: string;
  startProcess: string;
  eventsByProcessModel: string;
  eventsByCorrelation: string;
  eventsByVerifiedCorrelation: string;
  triggerEvent: string;
  userTasksByProcessModel: string;
  userTasksByCorrelation: string;
  userTasksByVerifiedCorrelation: string;
  finishUserTask: string;
}

const processModelsRoute: string = '/process_models';
const processModelRoute: string = '/process_models/:process_model_key';
const correlationRoute: string = `/correlations/:correlation_id`;
const eventsRoute: string = `/events`;
const eventRoute: string = `/events/:event_id`;
const userTasksRoute: string = `/user_tasks`;
const userTaskRoute: string = `/user_tasks/:user_task_id`;

export const routes: IRoutes = {
  // process-model-routes
  processModels: processModelsRoute,
  processModel: processModelRoute,
  startProcess: `${processModelRoute}/start_events/:start_event_key/trigger`,
  // event-routes
  eventsByProcessModel: `${processModelRoute}${eventsRoute}`,
  eventsByCorrelation: `${correlationRoute}${eventsRoute}`,
  eventsByVerifiedCorrelation: `${processModelRoute}${correlationRoute}${eventsRoute}`,
  triggerEvent: `${processModelRoute}${correlationRoute}${eventRoute}/trigger`,
  // user-task-routes
  userTasksByProcessModel: `${processModelRoute}${userTasksRoute}`,
  userTasksByCorrelation: `${correlationRoute}${userTasksRoute}`,
  userTasksByVerifiedCorrelation: `${processModelRoute}${correlationRoute}${userTasksRoute}`,
  finishUserTask: `${processModelRoute}${correlationRoute}${userTaskRoute}/finish`,
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
