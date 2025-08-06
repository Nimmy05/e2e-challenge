import { Page, Locator } from '@playwright/test';

export const byDataTestId = (page: Page, dataTestId: string): Locator =>
  page.getByTestId(dataTestId);

