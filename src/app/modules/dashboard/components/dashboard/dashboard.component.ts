import { Component, OnInit } from "@angular/core";
import { environment } from "@env";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public get discordServerWidgetUrl(): string {
    return environment.discordServerWidgetUrl;
  }

  constructor() {}

  public ngOnInit(): void {}
}
