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

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Determines whether a route can be activated based on user authentication status
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
