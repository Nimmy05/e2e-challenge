import { test } from '@playwright/test';

test.describe(`Automate the 'Addition' operation of 'Vite App'`, () => {

    test(`Should perform 'Addition' of numbers successfully`, async ({ page }) => {
        
        await test.step(`Redirect to the 'Vite App'`, async () => {
            await page.goto(`/`);
            await page.waitForLoadState('domcontentloaded');
        });

    });
});
