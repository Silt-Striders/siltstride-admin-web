import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { CoreModule } from "@core/core.module";
import { AuthService } from "@core/http/auth.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: CoreModule
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Determines whether a route can be activated based on user authentication status
   * @param {ActivatedRouteSnapshot} next The route attempting to be navigated to
   * @param {RouterStateSnapshot} state Current Router state
   * @returns {Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree}
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isLoggedIn().pipe(
      tap((value) => {
        if (!value) {
          void this.router.navigate(["login"]);
        }
      })
    );
  }
}
