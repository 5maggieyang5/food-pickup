exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('main', (table) => {
        table.increments('id');
        table.string('name');
        table.string('description');
        table.decimal('item_price');
        table.string('picture');
      })
    ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('main');
};
