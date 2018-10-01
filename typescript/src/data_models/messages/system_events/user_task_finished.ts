import {UserTaskResult} from '../../user_task/user_task_result';
import {BaseSystemEventMessage} from './base_system_event_message';

/**
 * The message sent when a user task has been finished.
 */
export class UserTaskFinishedMessage extends BaseSystemEventMessage {

  /**
   * The result the user task was finished with.
   */
  public userTaskResult: UserTaskResult;

  constructor(userTaskResult: UserTaskResult,
              correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, currentToken);

    this.userTaskResult = userTaskResult;
  }
}