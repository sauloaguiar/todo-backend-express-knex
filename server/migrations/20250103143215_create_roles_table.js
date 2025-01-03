exports.up = function(knex) {
  return knex.schema.createTable('roles', function(table) {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
  }).then(() => {
    return knex('roles').insert([
      { name: 'ADMIN' },
      { name: 'EDITOR' },
      { name: 'VIEWER' }
    ]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles');
};