const express = require('express');
const router = express.Router();

const queries = require('../db/query_users');

// GET users listing.
router.get('/', (_req, res, _next) => {
  queries.getAll().then((users) => {
    res.json(users);
  });
});

module.exports = router;
