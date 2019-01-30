import {IIdentity} from '@essential-projects/iam_contracts';

import {BaseInternalEventMessage} from '../base_internal_event_message';

/**
 * The message used to finish a waiting UserTask.
 */
export class FinishUserTaskMessage extends BaseInternalEventMessage {

  /**
   * The flow node id of the UserTask being finished.
   */
  public userTaskId: string;
  /**
   * The result the UserTask should be finished with.
   */
  public result: any;

  constructor(result: any,
              correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              processInstanceOwner: IIdentity,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, processInstanceOwner, currentToken);

    this.result = result;
  }
}
