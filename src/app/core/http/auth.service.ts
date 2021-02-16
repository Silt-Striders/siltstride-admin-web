import { Injectable } from "@angular/core";
import { CoreModule } from "@core/core.module";
import { BehaviorSubject, Observable } from "rxjs";
import { TokenWrapper } from "@core/model/token.model";
import { Router } from "@angular/router";
import { plainToClass } from "class-transformer";
import { map, tap } from "rxjs/operators";
import { User } from "@core/model/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "@env";

@Injectable({
  providedIn: CoreModule,
})
export class AuthService {
  private tokenSubject: BehaviorSubject<TokenWrapper> = new BehaviorSubject<TokenWrapper>(
    new TokenWrapper()
  );
  public get token(): Observable<TokenWrapper> {
    return this.tokenSubject.asObservable();
  }

  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(
    new User()
  );
  public get user(): Observable<User> {
    return this.userSubject.asObservable();
  }

  constructor(private router: Router, private http: HttpClient) {}

  public login(tokenWrapper: TokenWrapper): Observable<void> {
    this.tokenSubject.next(tokenWrapper);
    return this.getUserInfo(tokenWrapper).pipe(
      map((user: User) => this.userSubject.next(user))
    );
  }

  private getUserInfo(tokenWrapper: TokenWrapper): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `${tokenWrapper?.tokenType} ${tokenWrapper?.accessToken}`,
    });
    return this.http
      .get<User>(`${environment.discordApiRootUrl}/users/@me`, {
        headers,
      })
      .pipe(map((user: User) => plainToClass(User, user)));
    // .pipe(catchError((error) => this.router.navigate(["/login"])));
  }

  public isLoggedIn(): Observable<boolean> {
    return this.user.pipe(
      map((user: User) => user.id != null && user.username != null)
    );
  }
}
