import { Component, OnInit } from "@angular/core";
import { environment } from "@env";

/**
 * Component used as the landing page for authenticated users of the application where they will see innocuous overview information related to the TES3MP server
 */
@Component({
  selector: "siltstride-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  /**
   * Helper accessor retrieving the Discord server widget URL configured for our application
   * @returns {string} Discord server widget URL
   */
  public get discordServerWidgetUrl(): string {
    return environment.discordServerWidgetUrl;
  }

  /**
   * @ignore
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  /**
   * @ignore
   */
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method,@typescript-eslint/no-empty-function
  public ngOnInit(): void {}
}
