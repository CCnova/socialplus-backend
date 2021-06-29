export class InvalidParamError extends Error {
  constructor(invalidParam: string) {
    super(`Invalid parameter: ${invalidParam}`);
    this.name = 'Invalid Param Error';
  }
}