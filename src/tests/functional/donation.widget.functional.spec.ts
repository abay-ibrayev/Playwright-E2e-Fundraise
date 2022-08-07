import { DonateButtonPage } from "../../pages/iframe/DonateButtonPage";
import { DonationWidgetPage } from "../../pages/iframe/DonationWidgetPage";
import { expect, test as base } from '@playwright/test';


// Extend basic test by providing a "todoPage" fixture.
const test = base.extend<{ donationButtonPage: DonateButtonPage }>({
  donationButtonPage: async ({ page }, use) => {
    const donateButtonPage = new DonateButtonPage(page);
    await donateButtonPage.navigate();
    await donateButtonPage.clickMeNow();
    await use(donateButtonPage);
  },
});

test(`Verify Donation Widget - Negative Test 1`, async ({ page, donationButtonPage }) => {
  const donationWidgetPage = new DonationWidgetPage(page);

  // TODO: continue 

});

