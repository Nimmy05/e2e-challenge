import { Locator, Page, expect } from '@playwright/test';
import { timeout } from 'globalConfig/constants'

export class CalculatorPage {
  constructor(private page: Page) { }

  async navigateToCalculator() {
    await this.page.goto(`/`);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async addNumbers(numOneLocator: Locator, numTwoLocator: Locator, addButtonLocator: Locator, equalToLocator: Locator) {
    await numOneLocator.click();
    await addButtonLocator.click();
    await numTwoLocator.click();
    await equalToLocator.click();
  }

  async verifyResult(resultLocator: Locator, expectedResult: string) {
    await resultLocator.waitFor({state: "visible", timeout: timeout});
    await expect(resultLocator).toHaveText(expectedResult);
  }
}
