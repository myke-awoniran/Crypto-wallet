const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./src/errors/Global');
const HomeRouter = require('./src/routes/home');
const AuthRouter = require('./src/routes/auth');
const { undefinedRoutes } = require('./src/controllers/homes');

//SECURITY MIDDLEWARE
app.use(cors());
//PARSING REQ OBJECTS
app.use(express.json());

//ROUTES HANDLER
app.use(HomeRouter);

app.use(AuthRouter);

app.use('*', undefinedRoutes);

app.use(errorHandler);

module.exports = app;
