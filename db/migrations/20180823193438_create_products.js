exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('products', (table) => {
        table.increments('id');
        table.string('name');
        table.string('description');
        table.decimal('price');
        table.integer('quantity');
        table.string('picture');
        table.integer('cat_id');
      })
    ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
