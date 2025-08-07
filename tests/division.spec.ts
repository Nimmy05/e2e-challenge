import { test } from 'fixtures/fixtures';
import { byDataTestId } from 'utils/locatorUtils';
import { constants } from 'globalConfig/constants';
import thisTestConfig from 'configs/division.config';
import { Locator } from '@playwright/test';

test.describe(`Automate the 'division' operation of 'Vite App'`, () => {

    test(`Should perform 'division' of numbers successfully`, async ({ page, calculatorPage }) => {
        const digitDataTestId: Record<string, string> = constants.data_test_ids.digits;
        const divisionOperator: Locator = byDataTestId(page, constants.data_test_ids.operators.division);
        const equalsOperator: Locator = byDataTestId(page, constants.data_test_ids.operators.equals);
        const plusMinusLocator: Locator = byDataTestId(page, constants.data_test_ids.functions.plus_or_minus);

        await test.step(`Navigate to the 'Calculator' page`, async () => {
            await calculatorPage.navigateToCalculator();
        });

        await test.step(`Verify division operation with integer numbers`, async () => {
            for (const { num1, num2, expected } of thisTestConfig.div_integer_sets) {
                await calculatorPage.clearInput();
                await calculatorPage.performOperation(
                    byDataTestId(page, digitDataTestId[num1]),
                    byDataTestId(page, digitDataTestId[num2]),
                    divisionOperator,
                    equalsOperator
                );
                await calculatorPage.verifyResult(expected);
            }
        });

        await test.step(`Verify division operation with maximum digit sequence`, async () => {
            await calculatorPage.clearInput();
            for (const digitKey of Object.keys(digitDataTestId)) {
                await byDataTestId(page, digitDataTestId[digitKey]).click();
            }
            await divisionOperator.click();
            await byDataTestId(page, digitDataTestId.one).click();
            await equalsOperator.click();
            await calculatorPage.verifyResult(thisTestConfig.max_numbers_sum);
        });

        await test.step(`Verify division operation with decimal numbers`, async () => {
            for (const { num1, num2, expected } of thisTestConfig.div_decimal_sets) {
                await calculatorPage.clearInput();
                await calculatorPage.clickDecimalNumber(num1, digitDataTestId);
                await divisionOperator.click();
                await calculatorPage.clickDecimalNumber(num2, digitDataTestId);
                await equalsOperator.click();
                await calculatorPage.verifyResult(expected);
            }
        });

        await test.step(`Verify division involving negative integers`, async () => {
            for (const { num1, isNum1Negative, num2, isNum2Negative, expected } of thisTestConfig.div_negative_or_positive_integer_sets) {
                await calculatorPage.clearInput();
                await calculatorPage.clickNumber(num1, digitDataTestId, isNum1Negative);
                await divisionOperator.click();
                await calculatorPage.clickNumber(num2, digitDataTestId, isNum2Negative);
                await equalsOperator.click();
                await calculatorPage.verifyResult(expected);
            }
        });

        await test.step(`Verify division with positive/negative decimal values (±)`, async () => {
            for (const { num1, isNum1Negative, num2, isNum2Negative, expected } of thisTestConfig.div_negative_or_positive_decimal_sets) {
                await calculatorPage.clearInput();
                await calculatorPage.clickDecimalNumber(num1, digitDataTestId);
                if (isNum1Negative) await plusMinusLocator.click();
                await divisionOperator.click();
                await calculatorPage.clickDecimalNumber(num2, digitDataTestId);
                if (isNum2Negative) await plusMinusLocator.click();
                await equalsOperator.click();
                await calculatorPage.verifyResult(expected);
            }
        });

    });
});
