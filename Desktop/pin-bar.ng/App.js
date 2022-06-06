const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./src/errors/Global');
const router = require('./src/routes/home');

//SECURITY MIDDLEWARE
app.use(cors());
//PARSING REQ OBJECTS
app.use(express.json());

//ROUTES HANDLER
app.use(router);

app.use(errorHandler);
module.exports = app;
