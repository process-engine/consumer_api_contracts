/* eslint-disable @typescript-eslint/no-unused-vars */
import * as boundaryEventApi from './iboundary_event_consumer_api';
import * as callActivityApi from './icall_activity_consumer_api';
import * as emptyActivityApi from './iempty_activity_consumer_api';
import * as eventApi from './ievent_consumer_api';
import * as intermediateEventApi from './iintermediate_event_consumer_api';
import * as manualTaskApi from './imanual_task_consumer_api';
import * as notificationApi from './inotification_consumer_api';
import * as processModelApi from './iprocess_model_consumer_api';
import * as userTaskApi from './iuser_task_consumer_api';

export namespace APIs {
  export import IBoundaryEventConsumerApi = boundaryEventApi.IBoundaryEventConsumerApi;
  export import ICallActivityConsumerApi = callActivityApi.ICallActivityConsumerApi;
  export import IEmptyActivityConsumerApi = emptyActivityApi.IEmptyActivityConsumerApi;
  export import IEventConsumerApi = eventApi.IEventConsumerApi;
  export import IIntermediateEventConsumerApi = intermediateEventApi.IIntermediateEventConsumerApi;
  export import IManualTaskConsumerApi = manualTaskApi.IManualTaskConsumerApi;
  export import INotificationConsumerApi = notificationApi.INotificationConsumerApi;
  export import IProcessModelConsumerApi = processModelApi.IProcessModelConsumerApi;
  export import IUserTaskConsumerApi = userTaskApi.IUserTaskConsumerApi;
}
