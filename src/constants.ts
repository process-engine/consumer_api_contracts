// process-model-routes
export const processModelsRoute: string = '/process_models';
export const processModelRoute: string = `/process_models/:process_model_key`;
export const startProcessRoute: string = `${processModelRoute}/start_events/:start_event_key/trigger`;

export const Routes: { [routeName: string]: string; } = {
  processModelRoute: '`/process_models/:process_model_key`',
};

const correlationRoute: string = `/correlations/:correlation_id`;

// event-routes
const eventsRoute: string = `/events`;
export const eventsByProcessModelRoute: string = `${processModelRoute}${eventsRoute}`;
export const eventsByCorrelationRoute: string = `${correlationRoute}${eventsRoute}`;
export const eventsByVerifiedCorrelationRoute: string = `${processModelRoute}${correlationRoute}${eventsRoute}`;

const eventRoute: string = `/events/:event_id`;
export const triggerEventRoute: string = `${processModelRoute}${correlationRoute}${eventRoute}/trigger`;

// user-task-routes
const userTasksRoute: string = `/user_tasks`;
export const userTasksByProcessModelRoute: string = `${processModelRoute}${userTasksRoute}`;
export const userTasksByCorrelationRoute: string = `${correlationRoute}${userTasksRoute}`;
export const userTasksByVerifiedCorrelationRoute: string = `${processModelRoute}${correlationRoute}${userTasksRoute}`;

const userTaskRoute: string = `/user_tasks/:user_task_id`;
export const finishUserTaskRoute: string = `${processModelRoute}${correlationRoute}${userTaskRoute}/finish`;

// notification-channels
export const processModelKeyConstant: string = ':process_model_key';
export const correlationIdConstant: string = ':correlation_id';
export const elementKeyConstant: string = ':element_key';

export const processNotificationsChannel: string = '/process_notifications';
export const processNotificationsByProcessModelChannel: string = `/process_models/${processModelKeyConstant}${processNotificationsChannel}`;
export const processNotificationsByCorrelationChannel: string = `/correlation/${correlationIdConstant}${processNotificationsChannel}`;
export const processNotificationByElementChannel: string = `/correlation/${correlationIdConstant}/elements/${elementKeyConstant}${processNotificationsChannel}`;
