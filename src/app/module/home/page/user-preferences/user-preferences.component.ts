import { Component, OnInit } from "@angular/core";
import { ThemeService } from "@core/service/theme.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Data } from "@angular/router";
import { map } from "rxjs/operators";
import { Theme } from "@core/model/theme.model";

@Component({
  selector: "siltstride-user-preferences",
  templateUrl: "./user-preferences.component.html",
  styleUrls: ["./user-preferences.component.scss"]
})
export class UserPreferencesComponent implements OnInit {
  public get theme$(): Observable<Theme> {
    return this.themeService.theme$;
  }

  public set theme(value: Theme) {
    this.themeService.setTheme(value);
  }

  /**
   * Accessor retrieving the page title from {@link HomeRoutingModule}
   * @returns {Observable<string>} Observable containing the page title
   */
  public get title$(): Observable<string> {
    return this.route.data.pipe(map((data: Data) => data["title"] as string));
  }

  /**
   * @ignore
   * @param {ActivatedRoute} route
   * @param {ThemeService} themeService
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private route: ActivatedRoute,
    private themeService: ThemeService
  ) {}

  /**
   * @ignore
   */
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method,@typescript-eslint/no-empty-function
  public ngOnInit(): void {}
}
