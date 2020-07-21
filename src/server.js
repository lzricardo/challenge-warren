require('./config/constants');
require('./config/error');
require('./config/environment');
require('./config/console');
require('./config/mongoose');
require('./config/globals');

const app = require('./app');
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Warren API listening on port ${PORT}!`);
});