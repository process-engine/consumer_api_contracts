// tslint:disable:typedef
const pathParams = {
  processModelId: 'process_model_id',
  userId: 'user_id',
};

const paths = {
  userTaskWaiting: 'user_task_waiting',
  userTaskForIdentityWaiting: `user_task_waiting/user_id/${pathParams.userId}`,
  userTaskFinished: 'user_task_finished',
  userTaskForIdentityFinished: `user_task_finished/user_id/${pathParams.userId}`,
  manualTaskWaiting: 'manual_task_waiting',
  manualTaskFinished: 'manual_task_finished',
  processEnded: 'process_ended',
  processStarted: `process_started`,
  processTerminated: 'process_terminated',
  processInstanceStarted: `/process_instance_started/${pathParams.processModelId}`,
};

const namespace: string = 'consumer_api';

export const socketSettings = {
  namespace: namespace,
  paths: paths,
  pathParams: pathParams,
};
