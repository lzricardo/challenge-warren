class Scrapper {
    constructor(engine, plan, persister, options) {
        this.engine = engine;
        this.plan = plan;
        this.persister = persister;
        this.options = options;
    }

    async execute() {
        await this.engine.initialize();

        // return await this.persister.save(await this.engine.scrape(this.plan));

        return await this.engine.scrape(this.plan);
    }
}

module.exports = Scrapper;