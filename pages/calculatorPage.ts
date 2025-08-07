import { Locator, Page, expect } from '@playwright/test';
import { timeout, constants } from 'globalConfig/constants'

export class CalculatorPage {
  constructor(private page: Page) { }

  async navigateToCalculator() {
    await this.page.goto(`/`);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async performOperation(numOneLocator: Locator, numTwoLocator: Locator, operatorLocator: Locator, equalToLocator: Locator) {
    await numOneLocator.click();
    await operatorLocator.click();
    await numTwoLocator.click();
    await equalToLocator.click();
  }

  async verifyResult(expectedResult: string) {
    const resultLocator: Locator = this.page.getByTestId(constants.data_test_ids.functions.result);

    await resultLocator.waitFor({ state: "visible", timeout: timeout });
    await expect(resultLocator).toHaveText(expectedResult);
  }

  async clearInput() {
    const clearButtonLocator: Locator = this.page.getByTestId(constants.data_test_ids.functions.clear);
     const resultLocator: Locator = this.page.getByTestId(constants.data_test_ids.functions.result);

    await clearButtonLocator.click();
    await expect(resultLocator).toHaveText('0');
  }

  // ✅ Clicks each digit including the decimal point at the correct place
  async clickDecimalNumber(digits: string[], digitDataTestId: Record<string, string>) {
    const decimalPointLocator = this.page.getByTestId(constants.data_test_ids.functions.decimal);
    for (let i = 0; i < digits.length; i++) {
      if (i === 1) await decimalPointLocator.click();
      await this.page.getByTestId(digitDataTestId[digits[i]]).click();
    }
  }

  // ✅ Clicks a number, and optionally makes it negative using ±
  async clickNumber(digit: string, digitDataTestId: Record<string, string>, isNegative?: boolean) {
    await this.page.getByTestId(digitDataTestId[digit]).click();
    if (isNegative) {
      await this.page.getByTestId(constants.data_test_ids.functions.plus_or_minus).click();
    }
  }
}
