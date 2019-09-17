import {ExternalTask} from './external_task';

export class ExternalTaskList<TPayload> {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public externalTasks: Array<ExternalTask<TPayload>>;
  public totalCount: number;

}
