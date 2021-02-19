import {
  plainToClass,
  Transform,
  TransformFnParams,
  Type
} from "class-transformer";

/**
 * Model wrapping Discord's [Access Token response]{@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-response} attributes
 */
export class TokenWrapper {
  /**
   * @ignore
   * @type {string}
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match
  private access_token: string;

  /**
   * The access token
   * @returns {string}
   */
  public get accessToken(): string {
    return this.access_token;
  }

  /**
   * @ignore
   * @type {string}
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match
  private token_type: string;

  /**
   * The token type
   * @returns {string}
   */
  public get tokenType(): string {
    return this.token_type;
  }

  /**
   * @ignore
   * @type {Date}
   * @private
   */
  @Type(() => Number)
  @Transform((params: TransformFnParams) => {
    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + <number>params.value);
    return expiration;
  })
  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle,id-blacklist,id-match
  private expires_in: Date;

  /**
   * The expiration date for the token
   * @returns {Date}
   */
  public get expiresIn(): Date {
    return this.expires_in;
  }

  /**
   * @ignore
   * @type {Array<string>}
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
  private _scope: Array<string>;
  /**
   * The scopes associated to the token
   * @returns {Array<string>}
   */
  public get scope(): Array<string> {
    return this._scope;
  }
  @Type(() => String)
  @Transform((params: TransformFnParams) => (<string>params.value).split("+"))
  public set scope(value: Array<string>) {
    this._scope = value;
  }

  /**
   * Helper transforming the provided URL fragment string into the equivalent
   * {@link TokenWrapper} object
   * @param {string} fragment URL fragment to transform
   * @returns {TokenWrapper} Transformed object containing the access token
   * response attributes
   */
  public static getTokenWrapperFromUrlFragment(fragment: string): TokenWrapper {
    const properties = fragment?.split("&");
    const obj: {
      access_token: string;
      token_type: string;
      expires_in: string;
      scope: string;
    } = {
      access_token: "",
      token_type: "",
      expires_in: "",
      scope: ""
    };
    properties?.forEach((value: string, index: number) => {
      const property = properties[index]?.split("=");
      obj[property[0]] = property[1];
    });
    return plainToClass(TokenWrapper, obj);
  }

  /**
   * Helper method determining the validity of the {@link TokenWrapper#accessToken}
   * @returns {boolean} Token's validity status
   */
  public isValid(): boolean {
    const now = new Date();
    return (
      this.accessToken != null &&
      this.tokenType != null &&
      this.expiresIn != null &&
      this.scope != null &&
      now < this.expiresIn
    );
  }
}
