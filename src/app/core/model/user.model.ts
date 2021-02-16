import { environment } from "@env";

export class User {
  private _id: string;
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  private _username: string;
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  private _discriminator: string;
  public get discriminator(): string {
    return this._discriminator;
  }
  public set discriminator(value: string) {
    this._discriminator = value;
  }

  private _avatar: string;
  public get avatar(): string {
    return this._avatar;
  }
  public set avatar(value: string) {
    this._avatar = value;
  }

  private _bot?: boolean;
  public get bot(): boolean {
    return this._bot;
  }
  public set bot(value: boolean) {
    this._bot = value;
  }

  private _system?: boolean;
  public get system(): boolean {
    return this._system;
  }
  public set system(value: boolean) {
    this._system = value;
  }

  private mfa_enabled?: boolean;
  public get mfaEnabled(): boolean {
    return this.mfa_enabled;
  }

  private _locale?: string;
  public get locale(): string {
    return this._locale;
  }
  public set locale(value: string) {
    this._locale = value;
  }

  private _verified?: boolean;
  public get verified(): boolean {
    return this._verified;
  }
  public set verified(value: boolean) {
    this._verified = value;
  }

  private _email?: string;
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  private _flags?: number;
  public get flags(): number {
    return this._flags;
  }
  public set flags(value: number) {
    this._flags = value;
  }

  private premium_type?: number;
  public get premiumType(): number {
    return this.premium_type;
  }

  private public_flags?: number;
  public get publicFlags(): number {
    return this.public_flags;
  }

  public get avatarUrl(): string {
    return `${environment.discordCdnRootUrl}avatars/${this.id}/${this.avatar}.png`;
  }
}
