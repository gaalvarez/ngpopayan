import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToHome() {
    return browser.get(browser.baseUrl + '/home') as Promise<any>;
  }

  getTitleText() {
    return element(
      by.css(
        'app-root app-navbar mat-sidenav-container mat-sidenav-content app-home div div a mat-card mat-card-header div mat-card-title',
      ),
    ).getText() as Promise<string>;
  }
}
