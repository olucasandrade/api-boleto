const express = require('express');
const { getData } = require('./controllers');
const { validateData } = require('./middlewares');
const route = express.Router();
route.get('/:line', validateData, getData);

module.exports = route;