import { Injectable } from "@angular/core";
import { CoreModule } from "@core/core.module";
import { BehaviorSubject, Observable } from "rxjs";
import { TokenWrapper } from "@core/model/token.model";
import { map } from "rxjs/operators";
import { User } from "@core/model/user.model";

/**
 * Service handling authentication logic
 */
@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  /**
   * The [token]{@link TokenWrapper} for the current {@link User}
   * @type {BehaviorSubject<TokenWrapper>} BehaviorSubject containing the token
   * @private
   */
  private tokenSubject: BehaviorSubject<TokenWrapper> = new BehaviorSubject<TokenWrapper>(
    new TokenWrapper()
  );

  /**
   * Get the [token]{@link TokenWrapper} associated with the current {@link User}
   * @returns {Observable<TokenWrapper>} Observable containing the token
   */
  public get token(): Observable<TokenWrapper> {
    return this.tokenSubject.asObservable();
  }

  /**
   * @ignore
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  /**
   * Stores the {@link TokenWrapper} received from Discord OAuth2 implicit grant
   * @param {TokenWrapper} tokenWrapper Object containing the access token
   * @returns {Observable<TokenWrapper>} Used for validation of successful token storage
   */
  public storeToken(tokenWrapper: TokenWrapper): void {
    this.tokenSubject.next(tokenWrapper);
  }

  /**
   * Helper method determining the validity of the stored {@link TokenWrapper}
   * @returns {Observable<boolean>} Observable containing the token's validity status
   */
  public isValidToken(): Observable<boolean> {
    return this.token.pipe(map((token: TokenWrapper) => token.isValid()));
  }
}
