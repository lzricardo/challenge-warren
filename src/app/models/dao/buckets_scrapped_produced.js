const Persister = require('../contracts/persister'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema
;

class BucketsScrappedProduced extends Persister {
    constructor() {
        super();
        this.name = 'buckets_scrapped_produced';
        this.schema = new Schema(
            {
                login: 'string',
                produced: {}
            }
        );
        this.model = mongoose.model(this.name, this.schema);
    }

    async save(data) {
        let object = new this.model(data);

        return await object.save();
    }
}

module.exports = BucketsScrappedProduced;