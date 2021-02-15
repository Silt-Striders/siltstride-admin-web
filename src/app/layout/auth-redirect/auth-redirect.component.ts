import { Component, OnInit } from "@angular/core";
import { mouseParallaxHelper } from "@core/helpers/mouse-parallax.helper";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "@core/http/auth.service";
import { TokenWrapper } from "@core/models/token.model";
import { plainToClass } from "class-transformer";

@Component({
  selector: "app-auth-redirect",
  template: `
    <div
      #foregroundSpinner
      (mousemove)="onMouseMove(foregroundSpinner, $event)"
      class="foreground-spinner"
    >
      <clr-spinner></clr-spinner>
    </div>
  `,
  styleUrls: ["./auth-redirect.component.scss"],
})
export class AuthRedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  public get onMouseMove(): (element: HTMLElement, event: MouseEvent) => void {
    return mouseParallaxHelper;
  }

  public ngOnInit(): void {
    const tokenWrapper: TokenWrapper = this.transformFragmentToTokenWrapper(
      this.route.snapshot.fragment
    );
    this.authService.login(tokenWrapper).subscribe(() => {
      this.router.navigate(["/dashboard"]);
    });
  }

  private transformFragmentToTokenWrapper(fragment: string): TokenWrapper {
    const properties = fragment?.split("&");
    const obj: any = {};
    properties?.forEach((value, index) => {
      const property = properties[index]?.split("=");
      obj[property[0]] = property[1];
    });
    return plainToClass(TokenWrapper, obj);
  }
}
