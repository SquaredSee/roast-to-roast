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

const isValidUser = (user) => {
  const email = typeof user.email === 'string' && user.email.trim() !== '';
  const first_name = typeof user.first_name === 'string' && user.first_name.trim() !== '';
  const last_name = typeof user.last_name === 'string' && user.last_name.trim() !== '';
  const location = typeof user.location === 'string' && user.location.trim() !== '';
  const username = typeof user.username === 'string' && user.username.trim() !== '';
  return email && first_name && last_name && location && username;
};

router.get('/', (_req, res, _next) => {
  users.all().then((u) => {
    res.json(u);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  users.whereId(req.params.id).then((id) => {
    if (id) {
      res.json(id);
    }
    else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if (isValidUser(req.body)) {
    users.create(req.body).then((u) => {
      res.json(u[0]);
    });
  }
  else {
    next(new Error('Invalid user'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if (isValidUser(req.body)) {
    users.update(req.params.id, req.body).then((u) => {
      res.json(u);
    });
  }
  else {
    next(new Error('Invalid user'));
  }
});

router.delete('/:id', isValidId, (req, res, _next) => {
  users.delete(req.params.id).then(() => {
    res.json({'deleted': true});
  });
});

module.exports = router;
