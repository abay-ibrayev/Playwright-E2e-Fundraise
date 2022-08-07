import { DonateButtonPage } from "../../pages/iframe/DonateButtonPage";
import { expect, test } from '@playwright/test';

test(`Verify Donate Button - Visual Regression`, async ({ page }) => {
  const donateButtonPage = new DonateButtonPage(page);

  await donateButtonPage.navigate();

  expect(await donateButtonPage.getDonateButton().screenshot()).toMatchSnapshot('DonateButton.png');

});
