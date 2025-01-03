exports.up = function(knex) {
  return knex.schema.createTable('projects', function(table) {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('description').notNullable();
    table.boolean('deleted').defaultTo(false);

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};