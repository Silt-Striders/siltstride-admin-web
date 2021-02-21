import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "@core/model";

@Component({
  selector: "siltstride-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {
  /**
   * @ignore
   * @type {User}
   * @private
   */
  private _user: User;

  /**
   * Accessor retrieving the {@link User} object used for this component
   * @returns {User} The user in this component
   */
  public get user(): User {
    return this._user;
  }

  /**
   * Mutator setting the [user]{@link User} instance member for this component
   * @param {User} value The incoming user value
   */
  @Input()
  public set user(value: User) {
    if (value == null) {
      throw new Error("Must provide a valid User object!");
    }
    this._user = value;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
