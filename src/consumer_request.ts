import {Request} from 'express';
import {ConsumerContext} from './consumer_context';

export interface ConsumerRequest extends Request {
  consumerContext: ConsumerContext;
}
