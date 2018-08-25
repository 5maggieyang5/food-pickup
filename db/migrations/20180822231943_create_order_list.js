exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('order_list', (table) => {
        table.increments().primary();
        table.string('name');
        table.decimal('price');
        table.integer('quantity');
        table.integer('client_id');
      })
    ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order_list');
};
