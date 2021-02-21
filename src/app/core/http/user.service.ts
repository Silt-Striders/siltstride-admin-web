import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { User } from "@core/model";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env";
import { catchError, map, take } from "rxjs/operators";
import { plainToClass } from "class-transformer";

@Injectable({
  providedIn: "root"
})
export class UserService {
  /**
   * @ignore
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {}

  /**
   * Retrieve the current {@link User}'s information from Discord
   * @returns {Observable<User>} Observable containing the current user
   * @private
   */
  public getCurrentUser(): Observable<User> {
    return this.http
      .get<User>(`${environment.discordApiRootUrl}/users/@me`)
      .pipe(
        take(1),
        map((user: User) => plainToClass(User, user)),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        catchError((error) => EMPTY)
      );
  }
}
