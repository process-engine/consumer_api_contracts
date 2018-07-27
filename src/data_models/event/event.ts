import { EventTriggerPayload } from './event_trigger_payload';

/**
 * Describes a consumer api event.
 */
export class Event {
  /**
   * The id of the event
   */
  public id: string;
  /**
   * Optional: The id of the process instance that the event belongs to
   */
  public processInstanceId?: string;
  /**
   * Optional: The payload with which the event can be triggered.
   */
  public data?: EventTriggerPayload;
}
