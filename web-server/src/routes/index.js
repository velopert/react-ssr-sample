const express = require('express');
const api = require('./api');

const routes = express.Router();

routes.use('/api', api);

module.exports = routes;
