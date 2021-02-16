import { Transform, TransformFnParams, Type } from "class-transformer";

export class TokenWrapper {
  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match
  private access_token: string;

  /**
   * @description The access token
   * @returns {string}
   */
  public get accessToken(): string {
    return this.access_token;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match
  private token_type: string;

  /**
   * @description The token type
   * @example "Bearer"
   * @returns {string}
   */
  public get tokenType(): string {
    return this.token_type;
  }

  @Type(() => Number)
  @Transform((params: TransformFnParams) => {
    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + params.value);
    return expiration;
  })
  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match
  private expires_in: Date;

  /**
   * @description The expiration date for the token
   * @returns {Date}
   */
  public get expiresIn(): Date {
    return this.expires_in;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
  private _scope: Array<string>;
  /**
   * @description The scopes associated to the token
   * @returns {Array<string>}
   */
  public get scope(): Array<string> {
    return this._scope;
  }
  @Type(() => String)
  @Transform((params: TransformFnParams) => params.value.split("+"))
  public set scope(value: Array<string>) {
    this._scope = value;
  }
}
