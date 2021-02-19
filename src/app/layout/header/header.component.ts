import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "@core/model/user.model";

/**
 * Header Presentation Component used in the application layout
 */
@Component({
  selector: "siltstride-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
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

  /**
   * Helper accessor retrieving the CSS url() function call with the
   * {@link User}'s avatar URL inserted as a parameter
   * @returns {string} The CSS url() function call
   */
  public get backgroundImageUrl(): string {
    return `url(${this.user.avatarUrl})`;
  }

  /**
   * @ignore
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
