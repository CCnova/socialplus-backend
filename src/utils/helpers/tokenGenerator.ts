import { readFileSync } from 'fs';
import { sign, SignOptions, verify, VerifyOptions } from 'jsonwebtoken';

export class TokenGenerator {
  private privateKey: string;
  private publicKey: string;
  private signOptions: SignOptions;
  private verifyOptions: VerifyOptions;

  constructor() {
    this.privateKey = readFileSync('./private.key', 'utf8') || process.env.JWT_PRIVATE_KEY;
    this.publicKey = readFileSync('./public.key', 'utf8') || process.env.JWT_PUBLIC_KEY;
    this.signOptions = {
      expiresIn: '12h',
      algorithm: 'RS256'
    };
    this.verifyOptions = {
      algorithms: ['RS256']
    };
  }

  public async generate(userId: string) { 

    return sign({ id: userId }, this.privateKey, this.signOptions);
  }

  public async verify(token: string) {

    return verify(token, this.publicKey, this.verifyOptions);
  }
}