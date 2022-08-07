import { config } from "../../config";
import type { Page } from "playwright";

export class DonationWidgetPage {
    private page: Page;


    private askCampaignBanner = '[qa="ask-page"]'


    private donateForm = '[data-qa="active-screen-donate-form"]';

    private giveOnceButton = '[data-qa="give-once"]'
    private monthlyButton = '[data-qa="give-monthly"]'


    private iFrameWrapper = '[title="Donation Widget"]'


    url = config.HOST + "qa-test-7R58U3/?form=FUNCDKBDSGW";

    constructor(page: Page) {
        this.page = page;
    }

    public getPageUrl() {
        return this.url;
    }

    public getDonateForm() {
        return this.page.frameLocator(this.iFrameWrapper).locator(this.donateForm);
    }

    public getAskCampaignBanner() {
        return this.page.frameLocator(this.iFrameWrapper).locator(this.askCampaignBanner);
    }

    navigate() {
        return this.page.goto(this.url);
    }

    async fillForm() {

    }
}