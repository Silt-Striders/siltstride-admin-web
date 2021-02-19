import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "@core/model/user.model";
import { UserService } from "@core/http/user.service";

@Injectable({
  providedIn: "root"
})
export class AuthRedirectResolver implements Resolve<User> {
  /**
   * @ignore
   * @param {UserService} userService
   */
  constructor(private userService: UserService) {}

  /**
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<User>}
   */
  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.userService.getCurrentUser();
  }
}
