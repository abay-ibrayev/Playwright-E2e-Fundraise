import { DonateButtonPage } from "../../pages/iframe/DonateButtonPage";
import { DonationWidgetPage } from "../../pages/iframe/DonationWidgetPage";
import { expect, test } from '@playwright/test';

test(`Verify Donate Button - Functional`, async ({ page }) => {
  const donateButtonPage = new DonateButtonPage(page);
  const donationWidgetPage = new DonationWidgetPage(page);


  await donateButtonPage.navigate();
  await donateButtonPage.clickMeNow();


  await expect.soft(page).toHaveURL(donationWidgetPage.getPageUrl());
  await expect.soft(donationWidgetPage.getDonateForm()).toBeVisible();
});
