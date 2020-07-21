const config = require('../config/database'),
    mongoose = require('mongoose')
;

module.exports = async () => {
    return await mongoose.connect(
        `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`,
        config.options
    );
};