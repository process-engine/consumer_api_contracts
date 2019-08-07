import {ExternalTaskResultBase} from './external_task_result_base';

/**
 * Contains the result set for an ExternalTask that finished successfully.
 */
export class ExternalTaskSuccessResult<TResult> extends ExternalTaskResultBase {

  public readonly result: TResult;

  constructor(externalTaskId: string, result: TResult) {
    super(externalTaskId);
    this.result = result;
  }

}
