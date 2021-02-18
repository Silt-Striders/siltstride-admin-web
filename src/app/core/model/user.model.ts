import { environment } from "@env";

/**
 * User object as defined by [Discord's user structure specification]{@link https://discord.com/developers/docs/resources/user#user-object-user-structure}
 */
export class User {
  /**
   * @ignore
   * @type {string}
   * @private
   */
  private _id: string;

  /**
   * The {@link User}'s id
   * @returns {string}
   */
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  /**
   * @ignore
   * @type {string}
   * @private
   */
  private _username: string;

  /**
   * The {@link User}'s username, not unique across the platform
   * @returns {string}
   */
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  /**
   * @ignore
   * @type {string}
   * @private
   */
  private _discriminator: string;

  /**
   * The {@link User}'s 4-digit Discord tag
   * @returns {string}
   */
  public get discriminator(): string {
    return this._discriminator;
  }
  public set discriminator(value: string) {
    this._discriminator = value;
  }

  /**
   * @ignore
   * @type {string}
   * @private
   */
  private _avatar: string;

  /**
   * The {@link User}'s [avatar hash]{@link https://discord.com/developers/docs/reference#image-formatting}
   * @returns {string}
   */
  public get avatar(): string {
    return this._avatar;
  }
  public set avatar(value: string) {
    this._avatar = value;
  }

  /**
   * @ignore
   * @type {boolean}
   * @private
   */
  private _bot?: boolean;

  /**
   * Whether the {@link User} belongs to an OAuth2 application
   * @returns {boolean}
   */
  public get bot(): boolean {
    return this._bot;
  }
  public set bot(value: boolean) {
    this._bot = value;
  }

  /**
   * @ignore
   * @type {boolean}
   * @private
   */
  private _system?: boolean;

  /**
   * Whether the user is an Official Discord System user (part of the urgent message system)
   * @returns {boolean}
   */
  public get system(): boolean {
    return this._system;
  }
  public set system(value: boolean) {
    this._system = value;
  }

  /**
   * @ignore
   * @type {boolean}
   * @private
   */
  private mfa_enabled?: boolean;

  /**
   * Whether the user has two factor enabled on their account
   * @returns {boolean}
   */
  public get mfaEnabled(): boolean {
    return this.mfa_enabled;
  }

  /**
   * @ignore
   * @type {string}
   * @private
   */
  private _locale?: string;

  /**
   * The {@link User}'s chosen language option
   * @returns {string}
   */
  public get locale(): string {
    return this._locale;
  }
  public set locale(value: string) {
    this._locale = value;
  }

  /**
   * @ignore
   * @type {boolean}
   * @private
   */
  private _verified?: boolean;

  /**
   * Whether the email on this account has been verified
   * @returns {boolean}
   */
  public get verified(): boolean {
    return this._verified;
  }
  public set verified(value: boolean) {
    this._verified = value;
  }

  /**
   * @ignore
   * @type {string}
   * @private
   */
  private _email?: string;

  /**
   * The {@link User}'s email
   * @returns {string}
   */
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  /**
   * @ignore
   * @type {number}
   * @private
   */
  private _flags?: number;

  /**
   * The [flags]{@link https://discord.com/developers/docs/resources/user#user-object-user-flags} on a {@link User}'s account
   * @returns {number}
   */
  public get flags(): number {
    return this._flags;
  }
  public set flags(value: number) {
    this._flags = value;
  }

  /**
   * @ignore
   * @type {number}
   * @private
   */
  private premium_type?: number;

  /**
   * The [type of Nitro subscription]{@link https://discord.com/developers/docs/resources/user#user-object-premium-types} on a {@link User}'s account
   * @returns {number}
   */
  public get premiumType(): number {
    return this.premium_type;
  }

  /**
   * @ignore
   * @type {number}
   * @private
   */
  private public_flags?: number;

  /**
   * The public [flags]{@link https://discord.com/developers/docs/resources/user#user-object-user-flags} on a {@link User}'s account
   * @returns {number}
   */
  public get publicFlags(): number {
    return this.public_flags;
  }

  /**
   * Helper accessor to retrieve the unique avatar URL for [this]{@link User}
   * @returns {string} The unique avatar URL
   */
  public get avatarUrl(): string {
    return `${environment.discordCdnRootUrl}avatars/${this.id}/${this.avatar}.png`;
  }
}
