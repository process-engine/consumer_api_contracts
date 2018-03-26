// tslint:disable:max-line-length
export class NotificationChannels {
  public static processModelKeyConstant: string = ':process_model_key';
  public static correlationIdConstant: string = ':correlation_id';
  public static elementKeyConstant: string = ':element_key';
  public static processNotificationsChannel: string = '/process_notifications';
  public static processNotificationsByProcessModelChannel: string = `/process_models/${NotificationChannels.processModelKeyConstant}${NotificationChannels.processNotificationsChannel}`;
  public static processNotificationsByCorrelationChannel: string = `/correlation/${NotificationChannels.correlationIdConstant}${NotificationChannels.processNotificationsChannel}`;
  public static processNotificationByElementChannel: string = `/correlation/${NotificationChannels.correlationIdConstant}/elements/${NotificationChannels.elementKeyConstant}${NotificationChannels.processNotificationsChannel}`;
}
