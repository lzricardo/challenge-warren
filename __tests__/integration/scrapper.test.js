require('../../src/config/constants');
require('../../src/config/environment');
require('../../src/config/globals');

const request = require('supertest'),
    app = require('../../src/app'),
    BankSiteMock = require('../__mocks__/server_bank_site'),
    BotTester = require('../__mocks__/bot_tester'),
    TesterPlan = require('../__mocks__/tester_plan'),
    TesterEngine = require('../__mocks__/tester_engine'),
    BucketsScrappedProduced = require('../../src/app/models/dao/buckets_scrapped_produced')
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
        const testerEngine = new TesterEngine('http://localhost:5555', {headless: true}),
            bucketsScrappedProduced = new BucketsScrappedProduced
        ;

        const btester = new BotTester(testerEngine, TesterPlan(), bucketsScrappedProduced, {});

        const {name, balance} = await btester.execute();

        expect(name).toBe('Luiz Ricardo');
        expect(balance).toBe('R$ 40.000,00');
    }, 60000);

    it('should to scrape externally through of /scrape endpoint the site mock successfully', async () => {
        const scrapperProducedResponse = await request(app)
            .post('/v1/scrapper/execute')
            .send({
                login: '1234-1',
                password: 'teste'
            });

        expect(scrapperProducedResponse.status).toBe(200);
        expect(JSON.stringify(scrapperProducedResponse.body)).toBe(JSON.stringify({
            name: 'Luiz Ricardo',
            balance: 'R$ 40.000,00',
        }));
    });
});