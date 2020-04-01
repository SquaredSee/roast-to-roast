const express = require('express');

const shops = require('../db/shops-queries');

const router = express.Router();

const isValidId = (req, res, next) => {
  // Middleware to validate IDs
  if (!isNaN(req.params.id)) {
    return next();
  }
  next(new Error('Invalid ID'));
};

const isValidShop = (user) => {
  const location = typeof user.location === 'string' && user.location.trim() !== '';
  return location && true;
};

router.get('/', (_req, res, _next) => {
  shops.all().then((s) => {
    res.json(s);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  shops.whereId(req.params.id).then((id) => {
    if (id) {
      res.json(id);
    }
    else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if (isValidShop(req.body)) {
    shops.create(req.body).then((s) => {
      res.json(s[0]);
    });
  }
  else {
    next(new Error('Invalid shop'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if (isValidShop(req.body)) {
    shops.update(req.params.id, req.body).then((s) => {
      res.json(s);
    });
  }
  else {
    next(new Error('Invalid shop'));
  }
});

router.delete('/:id', isValidId, (req, res, next) => {
  shops.delete(req.params.id).then(() => {
    res.json({'deleted': true});
  });
});

module.exports = router;
