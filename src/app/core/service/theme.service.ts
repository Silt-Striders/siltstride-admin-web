import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Theme } from "@core/model";

const darkThemeStyleSheet: StyleSheet = document.styleSheets[4];

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
    toggleDarkThemeStyleSheet(
      darkThemeStyleSheet,
      this.themeSubject.value === Theme.Dark
    );
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
    toggleDarkThemeStyleSheet(darkThemeStyleSheet, theme === Theme.Dark);
  }

  /**
   * Accessor returning the currently selected {@link Theme}
   * @returns {Observable<Theme>} Observable containing the currently selected
   * theme
   */
  public get theme$(): Observable<Theme> {
    return this.themeSubject.asObservable();
  }
}

/**
 * Helper function enabling/disabling the dark-theme.css
 * [StyleSheet]{@link https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet}
 * @param {StyleSheet} styleSheet
 * @param {boolean} enable
 */
const toggleDarkThemeStyleSheet = (
  styleSheet: StyleSheet,
  enable: boolean
): void => {
  darkThemeStyleSheet.disabled = !enable;
};
