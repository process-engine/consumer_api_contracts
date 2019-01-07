import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * Describes a single ProcessInstance.
 */
export class ProcessInstance {
  public id: string;
  public correlationId: string;
  public processModelId: string;
  public parentProcessInstanceId?: string;
  public owner: IIdentity;
}
