exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {return knex.raw('ALTER SEQUENCE products_id_seq RESTART WITH 1')})
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('products').insert({ name: 'Big Mister',         description: 'The signature burger of MrDonald',                                    price: 6.99, quantity: 0, cat_id: 1}),
        knex('products').insert({ name: 'Double Mister',      description: 'Double pattied Big Mister',                                           price: 7.99, quantity: 0, cat_id: 1}),
        knex('products').insert({ name: 'Triple Mister',      description: 'Triple pattied Big Mister',                                           price: 8.99, quantity: 0, cat_id: 1}),
        knex('products').insert({ name: 'MrMister',           description: 'Quadriple pattied Big Mister',                                        price: 9.99, quantity: 0, cat_id: 1}),
        knex('products').insert({ name: 'MrFish',             description: 'Mister-O-Fish',                                                       price: 7.99, quantity: 0, cat_id: 1}),
        knex('products').insert({ name: 'MrAngus',            description: 'A Big Mister, with an angus patty',                                   price: 9.99, quantity: 0, cat_id: 1}),
        knex('products').insert({ name: 'MrDouble',           description: 'The struggle version of Big Mister',                                  price: 1.99, quantity: 0, cat_id: 1}),
        knex('products').insert({ name: 'MrChicken',          description: 'A chicken burger with too much mayo',                                 price: 6.99, quantity: 0, cat_id: 1}),
        knex('products').insert({ name: 'Sausage MrMuffin',   description: 'A breakfast sandwich with too much calories',                         price: 3.99, quantity: 0, cat_id: 1}),
        knex('products').insert({ name: 'Boring Fries',       description: 'Crispy, fried potato strips',                                         price: 2.99, quantity: 0, cat_id: 2}),
        knex('products').insert({ name: 'Fancy Fries',        description: 'Crispy, fried potato strips, but fancy',                              price: 5.99, quantity: 0, cat_id: 2}),
        knex('products').insert({ name: 'Boring Poutine',     description: 'Crispy, fried potato strips with gravy and cheese curds',             price: 5.99, quantity: 0, cat_id: 2}),
        knex('products').insert({ name: 'Fancy Poutine',      description: 'Crispy, fried potato strips with gravy and cheese curds, but fancy',  price: 8.99, quantity: 0, cat_id: 2}),
        knex('products').insert({ name: 'Boring Onion Rings', description: 'Crispy, fried onion rings',                                           price: 3.99, quantity: 0, cat_id: 2}),
        knex('products').insert({ name: 'Fancy Onion Rings',  description: 'Crispy, fried onion rings, but fancy',                                price: 6.99, quantity: 0, cat_id: 2}),
        knex('products').insert({ name: 'Coke',               description: 'Refreshingly cold!',                                                  price: 1.99, quantity: 0, cat_id: 3}),
        knex('products').insert({ name: 'Diet Coke',          description: 'Refreshingly cold, but with artifical sweetener!',                    price: 1.99, quantity: 0, cat_id: 3}),
        knex('products').insert({ name: 'Sprite',             description: 'Refreshingly tastes like lemon!',                                     price: 1.99, quantity: 0, cat_id: 3}),
        knex('products').insert({ name: 'Diet Sprite',        description: 'Refreshingly tastes like lemon, but with artificial sweetener!',      price: 1.99, quantity: 0, cat_id: 3}),
        knex('products').insert({ name: 'Root Beer',          description: 'Refreshingly non-alcoholic!',                                         price: 1.99, quantity: 0, cat_id: 3}),
        knex('products').insert({ name: 'Diet Root Beer',     description: 'Refreshingly non-alcoholic, but with artificial sweetener!',          price: 6.99, quantity: 0, cat_id: 3})
      ]);
    });
  }
