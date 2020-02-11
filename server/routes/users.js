var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (_req, res, _next) => {
  res.send('respond with a resource');
});

module.exports = router;
