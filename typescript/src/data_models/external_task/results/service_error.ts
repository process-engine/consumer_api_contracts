/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This type can be used to throw a Service error from an ExternalServiceTaskHandler.
 */
export class ServiceError extends Error {

  public readonly code: number | string;
  public readonly additionalInformation: any;

  constructor(name: string, code?: number | string, message?: string, details?: any) {
    super(message ?? name);
    this.name = name;
    this.code = code ?? '';
    this.message = message ?? '';
    this.additionalInformation = details;
  }

}
