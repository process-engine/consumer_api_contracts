import {EventType} from './event_type';

/**
 * Describes a triggerable event.
 */

export class Event {
  /**
   * The Model ID of the Event as it is declared in the ProcessModel.
   */
  public id: string;
  /**
   * The name of the Event as it is declared in the ProcessModel.
   */
  public eventName: string;
  /**
   * The BPMN type of the event (StartEvent, EndEvent, etc).
   */
  public bpmnType: string;
  /**
   * The type of the event (Message, Signal, etc).
   */
  public eventType: EventType;
  /**
   * The Instance ID of the Event.
   */
  public flowNodeInstanceId?: string;
  /**
   * The ID of the correlation that the Event belongs to.
   */
  public correlationId: string;
  /**
   * The ID of the ProcessModel that the Event belongs to.
   */
  public processModelId: string;
  /**
   * The ID of the ProcessInstance that the Event belongs to.
   */
  public processInstanceId?: string;
}
