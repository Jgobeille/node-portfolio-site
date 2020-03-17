const express = require('express');

const router = express.Router();

// 404 Page
router.use((_req, _res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// eslint-disable-next-line no-unused-vars
router.use((err, _req, res, _next) => {
  res.locals.error = err;
  if (err.status >= 100 && err.status < 600) res.status(err.status);
  else res.status(500);
  res.render('error');
});

// export router
module.exports = router;
