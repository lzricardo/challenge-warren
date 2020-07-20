const ScrapperPlan = require('../../src/app/models/contracts/scrapper_plan');

describe('Scrapper Plan\'s operations', () => {
    it('should must have an handler function', () => {
        const mockExecute = jest.fn(() => {});
        const testScrapperPlan = new ScrapperPlan(mockExecute);

        expect(testScrapperPlan).toHaveProperty('handler');
        expect(testScrapperPlan.handler).not.toBeNull();
        expect(typeof testScrapperPlan.handler).toBe('function');

        testScrapperPlan.handler();

        expect(mockExecute.mock.calls.length).toBe(1);
    });
});