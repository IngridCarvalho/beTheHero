const express = require('express');

const OrgController = require('./controllers/OrgController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OrgController.index);
routes.post('/ongs', OrgController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;