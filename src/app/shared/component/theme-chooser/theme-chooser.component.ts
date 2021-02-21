import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { Theme } from "@core/model";

/**
 * Presentation component allowing the user to choose between visual themes
 */
@Component({
  selector: "siltstride-theme-chooser",
  templateUrl: "./theme-chooser.component.html",
  styleUrls: ["./theme-chooser.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeChooserComponent {
  /**
   * Helper accessor making the {@link Theme} type available in the HTML
   * template
   * @returns {typeof Theme} The Theme type to be accessible
   * @constructor
   */
  public get LocalTheme(): typeof Theme {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Theme;
  }

  /**
   * @ignore
   * @type {Theme}
   * @private
   */
  private _theme: Theme;

  /**
   * Accessor returning the [theme]{@link Theme} passed in via the container
   * housing [this]{@link ThemeChooserComponent} component
   * @returns {Theme} The theme
   */
  public get theme(): Theme {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this._theme;
  }

  /**
   * Mutator setting the internal [theme]{@link Theme} member variable of
   * [this]{@link ThemeChooserComponent} component
   * @param {Theme} value The theme to update with
   */
  @Input()
  public set theme(value: Theme) {
    if (value == null) {
      throw new Error("Must provide a valid Theme!");
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this._theme = value;
  }

  /**
   * Emitter providing the newly selected {@link Theme} to the container
   * component
   * @type {EventEmitter<Theme>} Event containing the newly selected theme
   * @private
   */
  @Output()
  private themeChange: EventEmitter<Theme> = new EventEmitter<Theme>();

  /**
   * Mutator emitting the {@link themeChange} event when the user selects a
   * {@link Theme}
   * @param {Theme} value Theme to change to
   */
  public set newTheme(value: Theme) {
    this.themeChange.emit(value);
  }

  /**
   * @ignore
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
