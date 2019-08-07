import {ExternalTaskResultBase} from './external_task_result_base';

/**
 * Contains the result set for an ExternalTask that failed with a System error.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ExternalTaskSystemError<TDetails = any> extends ExternalTaskResultBase {

  public readonly errorMessage: string;
  public readonly errorDetails: TDetails;

  constructor(externalTaskId: string, errorMessage: string, errorDetails: TDetails) {
    super(externalTaskId);
    this.errorMessage = errorMessage;
    this.errorDetails = errorDetails;
  }

}
