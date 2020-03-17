const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

// routes

const mainRoutes = require('./routes');
const errorRoute = require('./routes/error');
// main routes
app.use(mainRoutes);
// error route
app.use(errorRoute);

// App listen on Port 3000
app.listen(3000, () => {
  console.log('The app has started!');
});
