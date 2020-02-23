const express = require('express');

const users = require('../db/users-queries');

const router = express.Router();

const isValidId = (req, res, next) => {
  // Middleware to validate IDs
  if (!isNaN(req.params.id)) {
    return next();
  }
  next(new Error('Invalid ID'));
};

router.get('/', (_req, res, _next) => {
  users.all().then((users) => {
    res.json(users);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  users.whereId(req.params.id).first().then((id) => {
    if (id) {
      res.json(id);
    }
    else {
      next();
    }
  });
});

router.get('/b', (_req, res, _next) => {
  users.whereFullName('John', 'Doe').then((users) => {
    res.json(users);
  });
});

module.exports = router;
