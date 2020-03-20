const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { data } = require('./data.json');

const { projects } = data;

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

// routes

const mainRoutes = require('./routes');
// main routes
app.use(mainRoutes);

app.use((_req, _res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  console.log(err);
  next(err);
});

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  res.locals.projects = projects;
  res.locals.error = err;
  if (err.status >= 100 && err.status < 600) res.status(err.status);
  else res.status(500);
  console.log(err);
  res.render('error', projects);
});

// App listen on Port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('The app has started!');
});
