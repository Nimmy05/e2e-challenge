import { test, expect } from '@playwright/test';
import { baseUrl } from '../globalConfig/constants';
test.describe(`Automate the 'Addition' operation of 'Vite App'`, () => {

    test(`Should perform 'Addition' of numbers successfully`, async ({ page }) => {
        
        await test.step(`Redirect to the Home`, async () => {
            await page.goto(`${baseUrl}/`);
            await page.waitForLoadState('domcontentloaded');
        });

    });
});
