// tslint:disable:typedef
const pathParams = {
  processModelId: 'process_model_id',
};

const paths = {
  userTaskWaiting: 'user_task_waiting',
  userTaskFinished: 'user_task_finished',
  manualTaskWaiting: 'manual_task_waiting',
  manualTaskFinished: 'manual_task_finished',
  processEnded: 'process_ended',
  processStarted: `process_started`,
  processTerminated: 'process_terminated',
  processInstanceStarted: `/processengine/process_started/${pathParams.processModelId}`,
};

const namespace: string = 'consumer_api';

export const socketSettings = {
  namespace: namespace,
  paths: paths,
};
