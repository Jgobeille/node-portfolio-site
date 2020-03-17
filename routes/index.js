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
  res.render('about');
});

// Each Project Page
router.get('/project/:id', (req, res) => {
  const { id } = req.params;
  const project = projects[id];
  res.render('project', { project });
});

// export router
module.exports = router;
