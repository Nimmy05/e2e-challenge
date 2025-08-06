import { test } from '@playwright/test';
// import dotenv from 'dotenv';
// dotenv.config()
import { baseUrl } from 'globalConfig/constants.js';

test.describe(`Automate the 'Addition' operation of 'Vite App'`, () => {

    test(`Should perform 'Addition' of numbers successfully`, async ({ page }) => {
        
        await test.step(`Redirect to the 'Vite App'`, async () => {
             await page.waitForLoadState('load');
            await page.goto(`${baseUrl}/`);
            await page.waitForLoadState('domcontentloaded');
        });

    });
});
