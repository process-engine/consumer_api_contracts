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
