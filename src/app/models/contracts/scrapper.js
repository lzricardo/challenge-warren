class Scrapper {
    constructor(plan, engine, persister, options) {
        this.plan = plan;
        this.engine = engine;
        this.persister = persister;
        this.options = options;
    }

    execute() {
        this.persister.save(this.engine.execute(this.plan, this.options));
    }
}

module.exports = Scrapper;