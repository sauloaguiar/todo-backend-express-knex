exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
    table.string('email').unique().notNullable();
    table.boolean('deleted').defaultTo(false);
    table.integer('role_id').unsigned().references('id').inTable('roles');

    table.timestamps(true, true)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};