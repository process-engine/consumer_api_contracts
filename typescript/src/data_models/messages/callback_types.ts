import {EndEventReachedMessage, TerminateEndEventReachedMessage} from './public/bpmn_events';
import {
  ManualTaskFinishedMessage,
  ManualTaskReachedMessage,
  ProcessStartedMessage,
  UserTaskFinishedMessage,
  UserTaskReachedMessage,
} from './public/system_events';

export type OnUserTaskWaitingCallback = (userTaskWaiting: UserTaskReachedMessage) => void | Promise<void>;
export type OnUserTaskFinishedCallback = (userTaskFinished: UserTaskFinishedMessage) => void | Promise<void>;

export type OnManualTaskWaitingCallback = (manualTaskWaiting: ManualTaskReachedMessage) => void | Promise<void>;
export type OnManualTaskFinishedCallback = (manualTaskFinished: ManualTaskFinishedMessage) => void | Promise<void>;

export type OnProcessStartedCallback = (processStarted: ProcessStartedMessage) => void | Promise<void>;

export type OnProcessEndedCallback = (processEnded: EndEventReachedMessage) => void | Promise<void>;
export type OnProcessTerminatedCallback = (processTerminated: TerminateEndEventReachedMessage) => void | Promise<void>;
