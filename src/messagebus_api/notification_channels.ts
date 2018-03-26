export class NotificationChannels {
  public processModelKeyConstant: string;
  public correlationIdConstant: string;
  public elementKeyConstant: string;
  public processNotificationsChannel: string;
  public processNotificationsByProcessModelChannel: string;
  public processNotificationsByCorrelationChannel: string;
  public processNotificationByElementChannel: string;
}

const processModelKeyConstant: string = ':process_model_key';
const correlationIdConstant: string = ':correlation_id';
const elementKeyConstant: string = ':element_key';
const processNotificationsChannel: string = '/process_notifications';

export const notificationChannels: NotificationChannels = {
  processModelKeyConstant: processModelKeyConstant,
  correlationIdConstant: correlationIdConstant,
  elementKeyConstant: elementKeyConstant,
  processNotificationsChannel: processNotificationsChannel,
  processNotificationsByProcessModelChannel: `/process_models/${processModelKeyConstant}${processNotificationsChannel}`,
  processNotificationsByCorrelationChannel: `/correlation/${correlationIdConstant}${processNotificationsChannel}`,
  processNotificationByElementChannel: `/correlation/${correlationIdConstant}/elements/${elementKeyConstant}${processNotificationsChannel}`,
};
