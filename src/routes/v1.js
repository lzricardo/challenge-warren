const v1 = require('express').Router();

//Middlewares

//Scrapper

//Controllers
const ScrapperController = require('../app/controllers/ScrapperController');

//Routes

//Tournament resource
v1.route('/scrapper/:type:/execute')
  .post(ScrapperController.execute)
;

//Others resources here...

module.exports = v1;