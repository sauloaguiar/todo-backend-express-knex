const knex = require("../../database/connection.js");

exports.createProject = async ({ name, description }) => {
  const [project] = await knex('projects')
    .insert({ name, description })
    .returning(['id', 'name', 'description', 'deleted', 'created_at', 'updated_at']);
  return project;
};

exports.deleteProject = async (id) => {
  // it'soft deleting things in the database
  await knex('projects').where({ id }).update({ deleted: true });
};