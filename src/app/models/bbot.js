const Scrapper = require('./contracts/scrapper');

class Bbot extends Scrapper {
    constructor(engine, plan, persister, options) {
        super(engine, plan, persister, options);
    }
}

module.exports = Bbot;