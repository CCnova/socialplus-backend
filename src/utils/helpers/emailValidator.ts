import validator from 'validator';

export class EmailValidator {
  public static isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}