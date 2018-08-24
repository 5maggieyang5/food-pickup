exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('order_list', (table) => {
        table.increments('id').primary();
        table.integer('main_id');
        table.integer('side_id');
        table.integer('drinks_id');
        table.integer('users_id');
      })
    ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order_list');
};
