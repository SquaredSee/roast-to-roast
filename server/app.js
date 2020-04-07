const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const shopsRouter = require('./routes/shops');
const logsRouter = require('./routes/logs');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/shops', shopsRouter);
app.use('/logs', logsRouter);

app.use((_req, res, _next) => {
  res.status(404)
    .set('Content-Type', 'text/plain')
    .send('Not found');
});

module.exports = app;
