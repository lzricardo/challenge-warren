const Scrapper = require('./contracts/scrapper');

class Bbot extends Scrapper {
    constructor(plan, persister, options) {
        super(plan, persister,options);
    }
}

module.exports = Bbot;