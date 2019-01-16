import {IIdentity} from '@essential-projects/iam_contracts';

import {BaseInternalEventMessage} from '../base_internal_event_message';

/**
 * The message used to finish a waiting manual task.
 */
export class FinishManualTaskMessage extends BaseInternalEventMessage {

  /**
   * The flow node id of the manual task being finished.
   */
  public manualTaskId: string;

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              processInstanceOwner: IIdentity,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, processInstanceOwner, currentToken);
  }
}