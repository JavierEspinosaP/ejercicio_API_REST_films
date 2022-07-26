const express = require('express');
const filmsApiController = require ('../controllers/filmsApiControllers');
const filmsApiRouter = express.Router();


filmsApiRouter.get('/', filmsApiController.getHome)
filmsApiRouter.get('/api/film/:title?', filmsApiController.getFilm)
filmsApiRouter.post('/api/film', filmsApiController.sendFilm)



module.exports = filmsApiRouter;