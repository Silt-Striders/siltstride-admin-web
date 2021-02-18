import { Component, OnInit } from "@angular/core";
import { AuthService } from "@core/http/auth.service";
import { User } from "@core/model/user.model";
import { Observable } from "rxjs";

/**
 * Layout Container Component defining the structure of the application
 *
 * This Component bears no Presentational responsibilities, so it is used as a
 * Container component for {@link HeaderComponent} which bears Presentational
 * responsibility
 */
@Component({
  selector: "siltstride-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  /**
   * Helper accessor retrieving the logged in {@link User}
   * @returns {Observable<User>} Observable containing the logged in user
   */
  public get user(): Observable<User> {
    return this.authService.user;
  }

  /**
   * @ignore
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private authService: AuthService) {}

  /**
   * @ignore
   */
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method,@typescript-eslint/no-empty-function
  public ngOnInit(): void {}
}
