import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "@core/service";
import { tap } from "rxjs/operators";

/**
 * Router guard vetting access to routes based on authentication status
 */
@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  /**
   * @ignore
   * @param {AuthService} authService
   * @param {Router} router
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Determines whether a route can be activated based on
   * [access token]{@link TokenWrapper#accessToken} validity
   * @param {ActivatedRouteSnapshot} next The route attempting to be navigated to
   * @param {RouterStateSnapshot} state Current Router state
   * @returns {Observable<boolean>} Observable containing the token validity status
   */
  public canActivate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: ActivatedRouteSnapshot,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isValidToken$().pipe(
      tap((value: boolean) => {
        if (!value) {
          void this.router.navigate(["login"]);
        }
      })
    );
  }
}
