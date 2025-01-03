const bcrypt = require('bcrypt');
const knex = require("../../database/connection.js");

exports.authenticateUser = async (email, password) => {
  const user = await knex('users').where({ email }).first();
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  throw new Error('Invalid email or password');
};