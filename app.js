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

const { data } = require('./data.json');

const { projects } = data;

// Routes

app.get('/', (req, res) => {
  res.render('index', { projects });
  // console.dir(projects);
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/project/:id', (req, res) => {
  const { id } = req.params;
  const project = projects[id];
  res.render('project', { project });
});

// 404 Page
// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.locals.error = err;
//   if (err.status >= 100 && err.status < 600) res.status(err.status);
//   else res.status(500);
//   res.render("error");
// });

// App listen on Port 3000
app.listen(3000, () => {
  console.log('The app has started!');
});
