const request = require('supertest'),
    BankSiteMock = require('../__mocks__/server_bank_site'),
    BotTester = require('../__mocks__/bot_tester'),
    Puppeteer = require('../../src/app/models/puppeteer'),
    TesterPlan = require('../__mocks__/tester_plan')
;

let bankSiteMock;

beforeAll(async () => {
    bankSiteMock = new BankSiteMock;

    await bankSiteMock.initialize();
})

afterAll(async () => {
    await bankSiteMock.destroy();
})

describe('Scrapper\'s operations', () => {
    it('should to scrape internally the site mock successfully', async () => {
        const puppeteerEngine = new Puppeteer('http://localhost:5555', {headless: false});
        //     // bucketsScrappedProduced = new BucketsScrappedProduced(),
        //
        const btester = new BotTester(puppeteerEngine, TesterPlan(), null, {});

        const {name, balance} = await btester.execute();

        expect(name).toBe('Luiz Ricardo');
        expect(balance).toBe('R$ 40.000,00');
    }, 60000);

    it('should to scrape externally through of /scrape endpoint the site mock successfully', () => {

    });
});