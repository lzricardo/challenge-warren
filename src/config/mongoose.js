const config = require('../config/database'),
    mongoose = require('mongoose')
;

(async () => {
    const uri = (config.username && config.password) ?
        `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}` :
        `mongodb://${config.host}:${config.port}/${config.database}`
    ;

    await mongoose.connect(
        uri,
        config.options
    );
})();