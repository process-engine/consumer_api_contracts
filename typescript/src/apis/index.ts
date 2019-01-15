import * as eventApi from './ievent_consumer_api';
import * as manualTaskApi from './imanual_task_consumer_api';
import * as notificationApi from './inotification_consumer_api';
import * as processModelApi from './iprocess_model_consumer_api';
import * as userTaskApi from './iuser_task_consumer_api';

// tslint:disable-next-line:no-namespace
export namespace APIs {
  export import IEventConsumerApi = eventApi.IEventConsumerApi;
  export import IManualTaskConsumerApi = manualTaskApi.IManualTaskConsumerApi;
  export import INotificationConsumerApi = notificationApi.INotificationConsumerApi;
  export import IProcessModelConsumerApi = processModelApi.IProcessModelConsumerApi;
  export import IUserTaskConsumerApi = userTaskApi.IUserTaskConsumerApi;
}
