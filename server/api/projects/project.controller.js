const projectService = require('./project.service');

exports.createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }

    const project = await projectService.createProject({ name, description });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await projectService.deleteProject(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};