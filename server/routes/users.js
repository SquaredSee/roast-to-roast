const express = require('express');

const queries = require('../db/users-queries');

const router = express.Router();

router.get('/', (_req, res, _next) => {
  queries.getAll().then((users) => {
    res.json(users);
  });
});

module.exports = router;
