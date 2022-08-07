import { DonateButtonPage } from "../../pages/iframe/DonateButtonPage";
import { DonationWidgetPage } from "../../pages/iframe/DonationWidgetPage";
import { expect, test } from '@playwright/test';

test(`Verify Donation Widget - Visual Regression`, async ({ page }) => {
  const donateButtonPage = new DonateButtonPage(page);
  const donationWidgetPage = new DonationWidgetPage(page);


  await donateButtonPage.navigate();
  await donateButtonPage.clickMeNow();


  expect.soft(await donationWidgetPage.getDonateForm().screenshot()).toMatchSnapshot('DonationWidget_DonateForm.png');
});

