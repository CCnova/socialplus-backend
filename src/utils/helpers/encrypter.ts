import { compare, hash } from "bcrypt";

export class Encrypter {
  public static async hash(plainPassword: string): Promise<string> {
    return await hash(plainPassword, 10);
  }

  public static async compare(plainValue: string, hashedValue: string): Promise<boolean> {
    return await compare(plainValue, hashedValue);
  }
}