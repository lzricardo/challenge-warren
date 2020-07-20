const Engine = require('../../src/app/models/contracts/engine'),
    puppeteer = require('puppeteer')
;

class TesterEngine extends Engine {
    constructor(url, options) {
        super();
        this.url = url;
        this.options = options;
    }

    async initialize() {
        this.browser = await puppeteer.launch(this.options);
        this.page = await this.browser.newPage();
        await this.page.goto(this.url);
    }

    async scrape(testerPlan) {
        /* istanbul ignore next */
        const produced = await this.page.evaluate(testerPlan.handler);

        await this.browser.close();

        return produced;
    }
}

module.exports = TesterEngine;