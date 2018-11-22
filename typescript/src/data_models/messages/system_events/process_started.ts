import {BaseSystemEventMessage} from './base_system_event_message';

/**
 * The message sent when a process ends.
 */
export class ProcessStartedMessage extends BaseSystemEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              startEventId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, startEventId, undefined, currentToken);
  }
}
