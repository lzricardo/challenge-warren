const Engine = require('../../src/app/models/contracts/engine'),
    Puppeteer = require('../../src/app/models/puppeteer')
;

describe('Validate inheritance and properties', () => {
    it('should to ensure that puppeteer inherits engine and has every require properties', () => {
        const puppeteer = new Puppeteer;

        expect(puppeteer).toBeInstanceOf(Engine);
        expect(puppeteer).toHaveProperty('scrape');
    });
});