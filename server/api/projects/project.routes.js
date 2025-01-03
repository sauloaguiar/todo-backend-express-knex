const express = require('express');
const projectController = require('./project.controller');

const router = express.Router();

router.post('/projects', projectController.createProject);
router.delete('/projects/:id', projectController.deleteProject);

module.exports = router;