const ScrapperPlan = require('../../src/app/models/contracts/scrapper_plan');

module.exports = () => {
    return new ScrapperPlan(() => {
        return {
            name: document.getElementById('name').innerHTML,
            balance: document.getElementById('balance').innerHTML
        }
    });
};