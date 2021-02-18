import { Injectable } from "@angular/core";
import { CoreModule } from "@core/core.module";
import { BehaviorSubject, Observable } from "rxjs";
import { TokenWrapper } from "@core/model/token.model";
import { Router } from "@angular/router";
import { plainToClass } from "class-transformer";
import { map } from "rxjs/operators";
import { User } from "@core/model/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "@env";

/**
 * Service handling authentication logic
 */
@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  /**
   * The [token]{@link TokenWrapper} for the logged in {@link User}
   * @type {BehaviorSubject<TokenWrapper>} BehaviorSubject containing the token
   * @private
   */
  private tokenSubject: BehaviorSubject<TokenWrapper> = new BehaviorSubject<TokenWrapper>(
    new TokenWrapper()
  );

  /**
   * Get the [token]{@link TokenWrapper} associated with the logged in {@link User}
   * @returns {Observable<TokenWrapper>} Observable containing the token
   */
  public get token(): Observable<TokenWrapper> {
    return this.tokenSubject.asObservable();
  }

  /**
   * The logged in {@link User}
   * @type {BehaviorSubject<User>} BehaviorSubject containing the logged in user
   * @private
   */
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(
    new User()
  );

  /**
   * Get the logged in {@link User}
   * @returns {Observable<User>} Observable containing the logged in user
   */
  public get user(): Observable<User> {
    return this.userSubject.asObservable();
  }

  /**
   * @ignore
   * @param {Router} router
   * @param {HttpClient} http
   */
  constructor(private router: Router, private http: HttpClient) {}

  /**
   * Retrieves the current {@link User}'s info from Discord
   * @param {TokenWrapper} tokenWrapper Object containing the access token
   * @returns {Observable<void>} Used for validation of successful retrieval of the current user
   */
  public login(tokenWrapper: TokenWrapper): Observable<void> {
    this.tokenSubject.next(tokenWrapper);
    return this.getUserInfo(tokenWrapper).pipe(
      map((user: User) => this.userSubject.next(user))
    );
  }

  /**
   * Helper for requesting the logged in {@link User}'s information from Discord
   * @param {TokenWrapper} tokenWrapper Object containing the access token to authenticate the request to Discord
   * @returns {Observable<User>} Observable containing the logged in user
   * @private
   */
  private getUserInfo(tokenWrapper: TokenWrapper): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `${tokenWrapper?.tokenType} ${tokenWrapper?.accessToken}`
    });
    return this.http
      .get<User>(`${environment.discordApiRootUrl}/users/@me`, {
        headers
      })
      .pipe(map((user: User) => plainToClass(User, user)));
    // .pipe(catchError((error) => this.router.navigate(["/login"])));
  }

  /**
   * Helper method to validate the current {@link User} is logged in
   * @returns {Observable<boolean>} Observable containing the current user's authentication status
   */
  public isLoggedIn(): Observable<boolean> {
    return this.user.pipe(
      map((user: User) => user.id != null && user.username != null)
    );
  }
}
