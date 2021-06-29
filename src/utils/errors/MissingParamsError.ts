export class MissinParamError extends Error {
  constructor(missingParam: string) {
    super(`Missing parameter: ${missingParam}`);
    this.name = 'Missing Param Error';
  }
}