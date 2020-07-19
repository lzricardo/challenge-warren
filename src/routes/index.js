const index = require('express').Router();

//Routes
index.get('/health', (req, res) => {
  res.status(200).send();
});

index.get('/', (req, res) => {
  //@todo render login page
});

module.exports = index;