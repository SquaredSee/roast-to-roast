const express = require('express');

const logs = require('../db/logs-queries');

const router = express.Router();

const isValidId = (req, res, next) => {
  // Middleware to validate IDs
  if (!isNaN(req.params.id)) {
    return next();
  }
  next(new Error('Invalid ID'));
};

const isValidLog = (log) => {
  const shop_id = typeof log.shop_id === 'number' && log.shop_id >= 0;
  const user_id = typeof log.user_id === 'number' && log.user_id >= 0;
  const rating = typeof log.rating === 'number' && log.rating > 0 && log.rating < 6;
  const coffee = typeof log.coffee === 'string' && log.coffee.trim() !== '';
  const description = typeof log.description === 'string' && log.description.trim() !== '';
  return shop_id && user_id && rating && coffee && description;
};

router.get('/', (_req, res, _next) => {
  logs.all().then((l) => {
    res.json(l);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  logs.whereId(req.params.id).then((id) => {
    if (id) {
      res.json(id);
    }
    else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if (isValidLog(req.body)) {
    logs.create(req.body).then((l) => {
      res.json(l[0]);
    });
  }
  else {
    next(new Error('Invalid log'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if (isValidLog(req.body)) {
    logs.update(req.params.id, req.body).then((l) => {
      res.json(l);
    });
  }
  else {
    next(new Error('Invalid log'));
  }
});

router.delete('/:id', isValidId, (req, res, next) => {
  logs.delete(req.params.id).then(() => {
    res.json({'deleted': true});
  });
});

module.exports = router;
