import { test } from 'fixtures/fixtures';
import { byDataTestId } from 'utils/locatorUtils';
import { constants } from 'globalConfig/constants';
import thisTestConfig from 'configs/addition.config';
import { Locator } from '@playwright/test';

test.describe(`Automate the 'Addition' operation of 'Vite App'`, () => {

    test(`Should perform 'Addition' of numbers successfully`, async ({ page, calculatorPage }) => {
        const digitDataTestId: Record<string, string> = constants.data_test_ids.digits;
        const additionOperator: Locator = byDataTestId(page, constants.data_test_ids.operators.addition);
        const equalsOperator: Locator = byDataTestId(page, constants.data_test_ids.operators.equals);

        await test.step(`Navigate to the 'Calculator' page`, async ({ }) => {
            await calculatorPage.navigateToCalculator();
        });

        for (const additionSet of thisTestConfig.addition_integer_sets) {
            const numOneLocator: Locator = byDataTestId(page, digitDataTestId[additionSet.num1]);
            const numTwoLocator: Locator = byDataTestId(page, digitDataTestId[additionSet.num2]);

            await test.step(`Verify the 'Addition' of '${additionSet.num1} + ${additionSet.num2}'`, async ({ }) => {
                await calculatorPage.clearInput();
                await calculatorPage.performOperation(
                    numOneLocator,
                    numTwoLocator,
                    additionOperator,
                    equalsOperator
                );

                await calculatorPage.verifyResult(additionSet.expected);

            });
        }

        await test.step(`Verify the 'Addition' operation of 'Maximum numbers'`, async ({ }) => {
            await calculatorPage.clearInput();

            // Click digits 0 through 9 to input '0123456789'
            for (const digitKey of Object.keys(digitDataTestId)) {
                await byDataTestId(page, digitDataTestId[digitKey]).click();
            }

            await additionOperator.click();
            await byDataTestId(page, digitDataTestId.one).click();
            await equalsOperator.click();

            await calculatorPage.verifyResult(thisTestConfig.max_numbers_sum);
        });


        await test.step(`Verify 'Addition' of Decimal numbers`, async () => {
            for (const additionDecimalSet of thisTestConfig.addition_decimal_sets) {
                await test.step(`Verify '${additionDecimalSet.num1.join('')} + ${additionDecimalSet.num2.join('')}'`, async () => {
                    await calculatorPage.clearInput();

                    for (let i = 0; i < additionDecimalSet.num1.length; i++) {
                        const digit = additionDecimalSet.num1[i];
                        if (i === 1) {
                            await byDataTestId(page, constants.data_test_ids.functions.decimal).click();
                        }
                        await byDataTestId(page, digitDataTestId[digit]).click();
                    }

                    await byDataTestId(page, constants.data_test_ids.operators.addition).click();

                    for (let i = 0; i < additionDecimalSet.num2.length; i++) {
                        const digit = additionDecimalSet.num2[i];
                        if (i === 1) {
                            await byDataTestId(page, constants.data_test_ids.functions.decimal).click();
                        }
                        await byDataTestId(page, digitDataTestId[digit]).click();
                    }

                    await byDataTestId(page, constants.data_test_ids.operators.equals).click();
                    await calculatorPage.verifyResult(additionDecimalSet.expected);
                });
            }
        });

        await test.step(`Verify the 'Subtraction' of 'Negative or Positive' numbers`, async ({ }) => {
            for (const integerSet of thisTestConfig.subtraction_neg_or_pos_integer_sets) {
                await calculatorPage.clearInput();

                await byDataTestId(page, digitDataTestId[integerSet.num1]).click();

                if (integerSet.isNum1Negative) {
                    await byDataTestId(page, constants.data_test_ids.functions.plus_or_minus).click();
                }

                await additionOperator.click();

                await byDataTestId(page, digitDataTestId[integerSet.num2]).click();
                if (integerSet.isNum2Negative) {
                    await byDataTestId(page, constants.data_test_ids.functions.plus_or_minus).click();
                }

                if (integerSet.bothNegative) {
                    await byDataTestId(page, digitDataTestId[integerSet.num1]).click();
                    await byDataTestId(page, constants.data_test_ids.functions.plus_or_minus).click();
                    await byDataTestId(page, digitDataTestId[integerSet.num2]).click();
                    await byDataTestId(page, constants.data_test_ids.functions.plus_or_minus).click();
                }

                await equalsOperator.click();
                await calculatorPage.verifyResult(integerSet.expected);
            }
        });



    });
});
