import { Component, OnInit } from "@angular/core";
import { AuthService } from "@core/http/auth.service";
import { Observable } from "rxjs";
import { User } from "@core/model/user.model";
import { map } from "rxjs/operators";

/**
 * Header Component used in the application layout
 */
@Component({
  selector: "siltstride-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  /**
   * Helper accessor retrieving the logged in {@link User}
   * @returns {Observable<User>} Observable containing the logged in user
   */
  public get user(): Observable<User> {
    return this.authService.user;
  }

  /**
   * Helper accessor retrieving the [id]{@link User#id} of the logged in {@link User}
   * @returns {Observable<string>} Observable containing the logged in user's id
   */
  public get id(): Observable<string> {
    return this.authService.user.pipe(map((user: User) => user.id));
  }

  /**
   * Helper accessor retrieving the [username]{@link User#username} of the logged in {@link User}
   * @returns {Observable<string>} Observable containing the logged in user's username
   */
  public get username(): Observable<string> {
    return this.authService.user.pipe(map((user: User) => user.username));
  }

  /**
   * Helper accessor retrieving the [discriminator]{@link User#discriminator} of the logged in {@link User}
   * @returns {Observable<string>} Observable containing the logged in user's discriminator
   */
  public get discriminator(): Observable<string> {
    return this.authService.user.pipe(map((user: User) => user.discriminator));
  }

  /**
   * Helper accessor retrieving the [avatar URL]{@link User#avatarUrl} of the logged in {@link User}
   * @returns {Observable<string>} Observable containing the logged in user's avatar URL
   */
  public get avatarUrl(): Observable<string> {
    return this.authService.user.pipe(map((user: User) => user.avatarUrl));
  }

  /**
   * @ignore
   * @param {AuthService} authService
   */
  constructor(private authService: AuthService) {}

  /**
   * @ignore
   */
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method,@typescript-eslint/no-empty-function
  public ngOnInit(): void {}
}
