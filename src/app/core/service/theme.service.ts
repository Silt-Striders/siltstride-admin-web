import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Theme } from "@core/model";

/**
 * Adapted code from:
 *
 * [Clarity Theming Starter]{@link https://github.com/mathisscott/clarity-theming-starter/blob/clarity-css-dark-theme-switcher/src/app/app.component.ts} &
 * [Angular Folder Structure]{@link https://github.com/mathisGarberg/angular-folder-structure/blob/master/src/app/layout/nav/nav.component.ts}
 *
 * Service used to pick from {@link Theme.Dark} and {@link Theme.Light}
 */
@Injectable({
  providedIn: "root"
})
export class ThemeService {
  /**
   * dark-theme.css stylesheet
   * @type {StyleSheet} StyleSheet object referencing the Dark theme
   * @private
   */
  private readonly darkThemeStyleSheet: StyleSheet = document.styleSheets[4];

  /**
   * Stores the currently selected {@link Theme}
   * @type {BehaviorSubject<Theme>} Subject containing the last chosen theme
   * @private
   */
  private readonly themeSubject: BehaviorSubject<Theme>;

  /**
   * Sets the application visual theme to what is saved in the user's browser
   */
  constructor() {
    this.themeSubject = new BehaviorSubject<Theme>(
      (localStorage.getItem("siltstrideVisualTheme") || "light") as Theme
    );
    this.toggleDarkThemeStyleSheet(this.themeSubject.value === Theme.Dark);
  }

  /**
   * Setter method changing the currently selected {@link Theme}
   * @param {Theme} theme Theme to change to
   */
  public setTheme(theme: Theme): void {
    this.themeSubject.next(theme);
    localStorage.setItem(
      "siltstrideVisualTheme",
      this.themeSubject.value.toString()
    );
    this.toggleDarkThemeStyleSheet(theme === Theme.Dark);
  }

  /**
   * Accessor returning the currently selected {@link Theme}
   * @returns {Observable<Theme>} Observable containing the currently selected
   * theme
   */
  public get theme$(): Observable<Theme> {
    return this.themeSubject.asObservable();
  }

  /**
   * Helper method enabling/disabling the dark-theme.css
   * [StyleSheet]{@link https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet}
   * @param {boolean} enable
   */
  private toggleDarkThemeStyleSheet(enable: boolean): void {
    this.darkThemeStyleSheet.disabled = !enable;
  }
}
