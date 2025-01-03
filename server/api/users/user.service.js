const knex = require("../../database/connection.js");

const selectClause = ['id', 'username', 'email'];
exports.createUserAdmin = async ({email, password, username}) => {
  const admin = await knex('roles').where({ name: 'ADMIN' }).first();
  const [user] = await knex('users')
    .insert({ email, password, role_id: admin.id, username })
    .returning(selectClause);
  return user;
};

exports.deleteUser = async (id) => {
  await knex('users').where({ id }).update({ deleted: true });
};

exports.getUsers = async () => {
  const users = await knex('users').select(selectClause);
  return users;
};