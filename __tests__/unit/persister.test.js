const Persister = require('../../src/app/models/contracts/persister'),
    BucketsScrappedProduced = require('../../src/app/models/dao/buckets_scrapped_produced')
;

describe('Validate inheritance and properties', () => {
    it('should to ensure that mongo inherits persister and has every require properties', () => {
        const bucketsScrappedProduced = new BucketsScrappedProduced;

        expect(bucketsScrappedProduced).toBeInstanceOf(Persister);
        expect(bucketsScrappedProduced).toHaveProperty('save');
    });
});