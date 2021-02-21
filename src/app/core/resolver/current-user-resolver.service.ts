import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "@core/model";
import { UserService } from "@core/http";

@Injectable({
  providedIn: "root"
})
export class CurrentUserResolver implements Resolve<User> {
  /**
   * @ignore
   * @param {UserService} userService
   */
  constructor(private userService: UserService) {}

  /**
   * Resolve the intended route with the current {@link User}
   * @param {ActivatedRouteSnapshot} route In transit to this route
   * @param {RouterStateSnapshot} state Snapshot of the current router state
   * @returns {Observable<User>} Observable containing the current user
   */
  public resolve(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    route: ActivatedRouteSnapshot,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.userService.getCurrentUser();
  }
}
