const express = require('express');

const users = require('../db/users-queries');

const router = express.Router();

router.get('/', (_req, res, _next) => {
  users.all().then((users) => {
    res.json(users);
  });
});

router.get('/a', (_req, res, _next) => {
  users.whereUsername('jdoe123').then((users) => {
    res.json(users);
  });
});

router.get('/b', (_req, res, _next) => {
  users.whereName('Doe').then((users) => {
    res.json(users);
  });
});

module.exports = router;
