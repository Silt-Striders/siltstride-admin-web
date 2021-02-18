import { browser, by, element } from "protractor";

/**
 * e2e class for the {@link AppComponent}
 */
export class AppPage {
  /**
   * @ignore
   * @returns {Promise<unknown>}
   */
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  /**
   * @ignore
   * @returns {Promise<string>}
   */
  getTitleText(): Promise<string> {
    return element(
      by.css("siltstride-root .content span")
    ).getText() as Promise<string>;
  }
}
