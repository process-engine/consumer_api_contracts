// tslint:disable:typedef
export const messagePaths = {
  userTaskReached: 'user_task_reached',
  userTaskFinished: 'user_task_finished',
  processTerminated: 'process_terminated',
  processEnded: 'process_ended',
};

export const routePaths = {
  finishUserTask: '/processengine/correlation/:correlation_id/processinstance/:process_instance_id/node/:user_task_id/finish',
  userTaskFinished: '/processengine/correlation/:correlation_id/processinstance/:process_instance_id/node/:user_task_id/finished',
  processTerminated: '/processengine/process/:process_instance_id/terminated',
  processEnded: '/processengine/process/:process_instance_id/ended',
  messageEventReached: '/processengine/process/message/:message_ref',
  signalEventReached: '/processengine/process/signal/:signal_ref',
};

export const routeParams = {
  processInstanceId: ':process_instance_id',
  correlationId: ':correlation_id',
  userTaskId: ':user_task_id',
  messageReference: ':message_ref',
  signalReference: ':signal_ref',
};
