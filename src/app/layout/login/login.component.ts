import { Component } from "@angular/core";
import { environment } from "@env";
import { mouseParallaxHelper } from "@core/helper";

/**
 * Presentational Component used as the landing page for unauthenticated users
 * of the application and where they will initiate the OAuth2 login handshake
 * with Discord
 */
@Component({
  selector: "siltstride-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  /**
   * Helper accessor retrieving the Discord OAuth2 implicit grant URL configured
   * for our application
   * @returns {string} Discord OAuth2 implicit grant URL
   */
  public get discordOAuthImplicitFlowUrl(): string {
    return environment.discordOAuthImplicitFlowUrl;
  }

  /**
   * Helper accessor returning the {@link mouseParallaxHelper} function for use
   * in the HTML template
   * @returns {(element: HTMLElement, event: MouseEvent) => void} Mouse parallax
   * helper function
   */
  public get onMouseMove(): (element: HTMLElement, event: MouseEvent) => void {
    return mouseParallaxHelper;
  }

  /**
   * @ignore
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
