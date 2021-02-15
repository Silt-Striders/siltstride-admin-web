import { Component, OnInit } from "@angular/core";
import { environment } from "@env";
import { mouseParallaxHelper } from "@core/helpers/mouse-parallax.helper";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public get discordOAuthImplicitFlowUrl(): string {
    return environment.discordOAuthImplicitFlowUrl;
  }

  constructor() {}

  public get onMouseMove(): (element: HTMLElement, event: MouseEvent) => void {
    return mouseParallaxHelper;
  }

  public ngOnInit(): void {}
}
