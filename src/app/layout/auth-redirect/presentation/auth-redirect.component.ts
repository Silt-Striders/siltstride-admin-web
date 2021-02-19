import { Component, OnInit } from "@angular/core";
import { mouseParallaxHelper } from "@core/helper/mouse-parallax.helper";
import { ActivatedRoute, Router } from "@angular/router";
import { TokenWrapper } from "@core/model/token.model";
import { AuthService } from "@core/http/auth.service";

/**
 * Component handling the redirect from
 * [Discord's OAuth2 implicit grant]{@link https://discord.com/developers/docs/topics/oauth2#implicit-grant}
 */
@Component({
  selector: "siltstride-auth-redirect",
  templateUrl: "./auth-redirect.component.html",
  styleUrls: ["./auth-redirect.component.scss"]
})
export class AuthRedirectComponent implements OnInit {
  /**
   * @ignore
   */
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Retrieve the [token]{@link TokenWrapper} from the URL fragment and store it
   */
  public ngOnInit() {
    const tokenWrapper = TokenWrapper.getTokenWrapperFromUrlFragment(
      this.route.snapshot.fragment
    );
    this.authService.storeToken(tokenWrapper);
    void this.router.navigate(["app", "dashboard"]);
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
}
