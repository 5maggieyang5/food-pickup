exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('client', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('phone');
      })
    ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client');
};
