const knex = require("../../database/connection.js");

exports.createProject = async ({ name, description, userId }) => {
  return knex.transaction(async trx => {
    try {
      const [project] = await trx('projects')
        .insert({ name, description })
        .returning(['id', 'name', 'description', 'deleted', 'created_at', 'updated_at']);
      
      const user = await trx('users').where({ id: userId }).first();
      
      await trx('user_projects')
        .insert({ user_id: userId, project_id: project.id, role_id: user.role_id });
      
      await trx.commit();
      return project;
    } catch (error) {
      await trx.rollback();
      throw error;
    }
  });
};

exports.deleteProject = async (id) => {
  // it'soft deleting things in the database
  await knex('projects').where({ id }).update({ deleted: true });
};