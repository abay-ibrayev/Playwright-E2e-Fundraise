import { chromium } from 'playwright';
import type { Browser } from 'playwright';
import { playAudit } from 'playwright-lighthouse';
import { test as base } from '@playwright/test';
import { DonateButtonPage } from "../../pages/iframe/DonateButtonPage";

export const lighthouseTest = base.extend<{}, { browser: Browser }>({
  browser: [
    async ({ }, use) => {
      const browser = await chromium.launch({
        args: [`--remote-debugging-port=${9222}`],
      });
      await use(browser);
    },
    { scope: 'worker' },
  ],
});

lighthouseTest('Verify Donation Button Page - Performance', async ({ page }) => {
  const donateButtonPage = new DonateButtonPage(page);
  await donateButtonPage.navigate();
  await playAudit({
    page,
    thresholds: {
      performance: 50,
      accessibility: 50,
      'best-practices': 50,
      seo: 50
    },
    port: 9222
  });
});

