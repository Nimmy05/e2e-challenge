import { test as baseTest } from '@playwright/test';
import { CalculatorPage } from 'pages/calculatorPage';

type MyFixtures = {
  calculatorPage: CalculatorPage;
};

export const test = baseTest.extend<MyFixtures>({
  calculatorPage: async ({ page }, use) => {
    const calculatorPage = new CalculatorPage(page);
    await use(calculatorPage);
  },
});
