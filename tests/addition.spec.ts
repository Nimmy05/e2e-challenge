import { test } from 'fixtures/fixtures';
import { byDataTestId } from 'utils/locatorUtils';
import { constants } from 'globalConfig/constants';
import  thisTestConfig  from 'configs/addition.config';
import { Locator } from '@playwright/test';

test.describe(`Automate the 'Addition' operation of 'Vite App'`, () => {

    test(`Should perform 'Addition' of numbers successfully`, async ({ page, calculatorPage }) => {
        const dataTestId: typeof constants.data_test_ids = constants.data_test_ids;

        await test.step(`Navigate to 'Caluclator' page`, async ({ }) => {
            await calculatorPage.navigateToCalculator();
        });

        await test.step(`Verify the 'Addition of two numbers'`, async ({ }) => {
            await calculatorPage.addNumbers(
                byDataTestId(page, dataTestId.five),
                byDataTestId(page, dataTestId.three),
                byDataTestId(page, dataTestId.addition),
                byDataTestId(page, dataTestId.equals)
            );
        });

        await test.step(`Verify the 'Addition' result`, async ({}) => {
            const resultLocator: Locator = await page.getByTestId(dataTestId.result);
            
            await calculatorPage.verifyResult(resultLocator, thisTestConfig.addition_two_numbers_sum);
        });
    });
});
