import { Component, OnInit } from "@angular/core";
import { User } from "@core/model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ActivatedRoute, Data, UrlSegment } from "@angular/router";

/**
 * Layout Container Component defining the structure of the application
 *
 * This Component bears no Presentation responsibilities, so it is used as a
 * Container component for {@link HeaderComponent} which bears Presentation
 * responsibility
 */
@Component({
  selector: "siltstride-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  /**
   * Helper accessor retrieving the current {@link User}
   * @returns {Observable<User>} Observable containing the logged in user
   */
  public get user$(): Observable<User> {
    return this.route.data.pipe(map((data: Data) => data["user"] as User));
  }

  /**
   * Helper accessor retrieving the current URL for use in displaying ephemeral
   * [Header]{@link HeaderComponent} links
   * @returns {Observable<Array<UrlSegment>>} Observable containing the current
   * URL
   */
  public get url$(): Observable<string> {
    return this.route.url.pipe(
      map((segments: Array<UrlSegment>) => segments.join(""))
    );
  }

  /**
   * @ignore
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private route: ActivatedRoute) {}

  /**
   * @ignore
   */
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method,@typescript-eslint/no-empty-function
  public ngOnInit(): void {}
}
