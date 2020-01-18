const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchControllrer = require('./controllers/SourceController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchControllrer.index);

module.exports = routes;