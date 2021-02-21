import { Component } from "@angular/core";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent
} from "@angular/router";
import { ThemeService } from "@core/service/theme.service";

/**
 * Main Component for the application
 */
@Component({
  selector: "siltstride-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  /**
   * @ignore
   * @type {string}
   */
  public title = "siltstride-admin-web";

  /**
   * @ignore
   * @type {boolean}
   * @private
   */
  private _loading: boolean;

  /**
   * Accessor retrieving the loading status of the router
   * @returns {boolean}
   */
  public get loading(): boolean {
    return this._loading;
  }

  /**
   * @ignore
   *
   * Include {@link ThemeService} in the constructor to force it to be created
   * and run its constructor logic on app startup
   *
   * May convert this over to using
   * [APP_INITIALIZER]{@link https://angular.io/api/core/APP_INITIALIZER} DI token
   * to be more semantically correct instead of the current hack solution
   * @param {Router} router
   * @param themeService
   */
  constructor(private router: Router, private themeService: ThemeService) {
    this.router.events.subscribe((event: RouterEvent) =>
      this.checkRouterEvent(event)
    );
  }

  /**
   * Helper method determining when the router is in transit in order to display
   * a loading spinner for a better user experience
   * @param {RouterEvent} event The router event to check against
   * @private
   */
  private checkRouterEvent(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this._loading = true;
    }

    if (
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) {
      this._loading = false;
    }
  }
}
