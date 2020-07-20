const BotTester = require('../../../__tests__/__mocks__/bot_tester'),
    TesterEngine = require('../../../__tests__/__mocks__/tester_engine'),
    TesterPlan = require('../../../__tests__/__mocks__/tester_plan')
;

class ScrapperController {
    async execute(req, res) {
        try {
            const testerEngine = new TesterEngine(
                process.env.SCRAPPER_BANK_URI,
                {
                    headless: process.env.SCRAPPER_HEADLESS
                }
            );

            const botTester = new BotTester(testerEngine, TesterPlan(), null, {});

            res.status(200).json(await botTester.execute());
        } catch (e) {
            return res.status(500).json(
                {
                    error: {
                        message: 'Server internal error. Contact the administrator.'
                    }
                }
            );
        }
    }
}

module.exports = new ScrapperController;