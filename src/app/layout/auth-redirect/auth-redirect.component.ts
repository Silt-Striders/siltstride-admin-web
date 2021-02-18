import { Component, OnInit } from "@angular/core";
import { mouseParallaxHelper } from "@core/helper/mouse-parallax.helper";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "@core/http/auth.service";
import { TokenWrapper } from "@core/model/token.model";
import { plainToClass } from "class-transformer";

/**
 * Component handling the redirect from [Discord's OAuth2 implicit grant]{@link https://discord.com/developers/docs/topics/oauth2#implicit-grant}
 */
@Component({
  selector: "siltstride-auth-redirect",
  templateUrl: "./auth-redirect.component.html",
  styleUrls: ["./auth-redirect.component.scss"]
})
export class AuthRedirectComponent implements OnInit {
  /**
   * @ignore
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {AuthService} authService
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  /**
   * Helper accessor returning the {@link mouseParallaxHelper} function for use in the HTML template
   * @returns {(element: HTMLElement, event: MouseEvent) => void} Mouse parallax helper function
   */
  public get onMouseMove(): (element: HTMLElement, event: MouseEvent) => void {
    return mouseParallaxHelper;
  }

  /**
   * Retrieve the URL fragment and login
   */
  public ngOnInit(): void {
    const tokenWrapper: TokenWrapper = this.transformFragmentToTokenWrapper(
      this.route.snapshot.fragment
    );
    this.authService.login(tokenWrapper).subscribe(() => {
      void this.router.navigate(["app", "dashboard"]);
    });
  }

  /**
   * Helper transforming the provided URL fragment string into the equivalent {@link TokenWrapper} object
   * @param {string} fragment URL fragment to transform
   * @returns {TokenWrapper} Transformed object containing the access token response attributes
   * @private
   */
  private transformFragmentToTokenWrapper(fragment: string): TokenWrapper {
    const properties = fragment?.split("&");
    const obj: {
      access_token: string;
      token_type: string;
      expires_in: string;
      scope: string;
    } = {
      access_token: "",
      token_type: "",
      expires_in: "",
      scope: ""
    };
    properties?.forEach((value: string, index: number) => {
      const property = properties[index]?.split("=");
      obj[property[0]] = property[1];
    });
    return plainToClass(TokenWrapper, obj);
  }
}
