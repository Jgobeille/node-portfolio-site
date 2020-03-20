const express = require('express');

const { data } = require('../data.json');

const { projects } = data;

// A router is like a mini app in express, you can add routes and middleware to it
const router = express.Router();

// Routes

// Home Page
router.get('/', (_req, res) => {
  res.locals.projects = projects;

  res.render('index', projects);
  // console.dir(projects);
});

// About Page
router.get('/about', (_req, res) => {
  res.locals.projects = projects;
  res.render('about', projects);
});

// Each Project Page
router.get('/project/:id', (req, res, next) => {
  const { id } = req.params;
  res.locals.projects = projects;
  const project = projects[id];
  if (project) {
    res.render('project', { projects, project });
  } else {
    const err = new Error('Page Not Found');
    err.statusCode = 404;
    next(err);
  }
});

// export router
module.exports = router;
