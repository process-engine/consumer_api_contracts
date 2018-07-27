import {Request} from 'express';
import {ConsumerContext} from './consumer_context';

/**
 * Extends the base HttpRequest object to include content exlusive to the consumer api.
 */
export interface ConsumerRequest extends Request {
  /**
   * Contains the user specific context with which a user is performing requests against the api.
   */
  consumerContext: ConsumerContext;
}
