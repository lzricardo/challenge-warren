const v1 = require('express').Router();

//Middlewares

//Scrapper

//Controllers
const ScrapperController = require('../app/controllers/scrapper_controller');

//Routes

//Tournament resource
v1.route('/scrapper/execute')
  .post(ScrapperController.execute)
;

//Others resources here...

module.exports = v1;