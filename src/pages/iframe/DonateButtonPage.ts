import { config } from "../../config";
import type { Page } from "playwright";

export class DonateButtonPage {
    private page: Page;

    private donateButton = '[qa="fun-element"]';
    private iFrameWrapper = '[title="Donate Button"]'


    url = config.HOST + "/qa-test-7R58U3";

    constructor(page: Page) {
        this.page = page;
    }

    private getIframe() {
        return this.page.frameLocator(this.iFrameWrapper);
    }

    public getDonateButton() {
        return this.getIframe().locator(this.donateButton);
    }

    public navigate() {
        return this.page.goto(this.url);
    }


    public clickMeNow() {
        return this.getDonateButton().click()
    }
}