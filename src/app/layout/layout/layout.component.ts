import { Component, OnInit } from "@angular/core";
import { User } from "@core/model/user.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ActivatedRoute, Data } from "@angular/router";

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
  public get user(): Observable<User> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.route.data.pipe(map((data: Data) => data.user));
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
