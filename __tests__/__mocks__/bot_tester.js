const Scrapper = require('../../src/app/models/contracts/scrapper');

class BotTester extends Scrapper {
    constructor(engine, plan, persister, options) {
        super(engine, plan, persister, options);
    }
}

module.exports = BotTester;