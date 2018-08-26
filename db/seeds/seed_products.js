exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {return knex.raw('ALTER SEQUENCE products_id_seq RESTART WITH 1')})
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('products').insert({ name: 'Big Mister',         description: 'The signature burger of MrDonald',                                    price: 6.99, quantity: 0, picture: 'https://i.imgur.com/h2bhP4H.png',cat_id: 1}),
        knex('products').insert({ name: 'Double Mister',      description: 'Double pattied Big Mister',                                           price: 7.99, quantity: 0, picture: 'https://i.imgur.com/qZG9Rb7.jpg',cat_id: 1}),
        knex('products').insert({ name: 'Triple Mister',      description: 'Triple pattied Big Mister',                                           price: 8.99, quantity: 0, picture: 'https://i.imgur.com/zL7IHrU.jpg',cat_id: 1}),
        knex('products').insert({ name: 'MrMister',           description: 'Quadriple pattied Big Mister',                                        price: 9.99, quantity: 0, picture: 'https://i.imgur.com/Q3KL2lw.jpg',cat_id: 1}),
        knex('products').insert({ name: 'MrFish',             description: 'Mister-O-Fish',                                                       price: 7.99, quantity: 0, picture: 'https://i.imgur.com/nGGueDR.jpg',cat_id: 1}),
        knex('products').insert({ name: 'MrAngus',            description: 'A Big Mister, with an angus patty',                                   price: 9.99, quantity: 0, picture: 'https://i.imgur.com/RgvF9P4.jpg',cat_id: 1}),
        knex('products').insert({ name: 'MrDouble',           description: 'The struggle version of Big Mister',                                  price: 1.99, quantity: 0, picture: 'https://i.imgur.com/86S5QOn.png',cat_id: 1}),
        knex('products').insert({ name: 'MrChicken',          description: 'A chicken burger with too much mayo',                                 price: 6.99, quantity: 0, picture: 'https://i.imgur.com/EnQuR27.png',cat_id: 1}),
        knex('products').insert({ name: 'Sausage MrMuffin',   description: 'A breakfast sandwich with too much calories',                         price: 3.99, quantity: 0, picture: 'https://imgur.com/dQC48bG.png',cat_id: 1}),
        knex('products').insert({ name: 'Boring Fries',       description: 'Crispy, fried potato strips',                                         price: 2.99, quantity: 0, picture: 'https://i.imgur.com/MUsNTlK.jpg',cat_id: 2}),
        knex('products').insert({ name: 'Fancy Fries',        description: 'Crispy, fried potato strips, but fancy',                              price: 5.99, quantity: 0, picture: 'https://i.imgur.com/4YAvCdX.jpg',cat_id: 2}),
        knex('products').insert({ name: 'Boring Poutine',     description: 'Crispy, fried potato strips with gravy and cheese curds',             price: 5.99, quantity: 0, picture: 'https://i.imgur.com/bxp7vc8.jpg',cat_id: 2}),
        knex('products').insert({ name: 'Fancy Poutine',      description: 'Crispy, fried potato strips with gravy and cheese curds, but fancy',  price: 8.99, quantity: 0, picture: 'https://i.imgur.com/7gMF1GS.jpg',cat_id: 2}),
        knex('products').insert({ name: 'Boring Onion Rings', description: 'Crispy, fried onion rings',                                           price: 3.99, quantity: 0, picture: 'https://i.imgur.com/CUc6VaJ.jpg',cat_id: 2}),
        knex('products').insert({ name: 'Fancy Onion Rings',  description: 'Crispy, fried onion rings, but fancy',                                price: 6.99, quantity: 0, picture: 'https://i.imgur.com/dKvJqo9.jpg',cat_id: 2}),
        knex('products').insert({ name: 'Coke',               description: 'Refreshingly cold!',                                                  price: 1.99, quantity: 0, picture: 'https://i.imgur.com/J3agC4x.jpg',cat_id: 3}),
        knex('products').insert({ name: 'Diet Coke',          description: 'Refreshingly cold, but with artifical sweetener!',                    price: 1.99, quantity: 0, picture: 'https://i.imgur.com/brNQ5zk.jpg',cat_id: 3}),
        knex('products').insert({ name: 'Sprite',             description: 'Refreshingly tastes like lemon!',                                     price: 1.99, quantity: 0, picture: 'https://i.imgur.com/gL6G3AS.jpg',cat_id: 3}),
        knex('products').insert({ name: 'Diet Sprite',        description: 'Refreshingly tastes like lemon, but with artificial sweetener!',      price: 1.99, quantity: 0, picture: 'https://i.imgur.com/UbC51hl.jpg',cat_id: 3}),
        knex('products').insert({ name: 'Root Beer',          description: 'Refreshingly non-alcoholic!',                                         price: 1.99, quantity: 0, picture: 'https://i.imgur.com/WucNODp.jpg',cat_id: 3}),
        knex('products').insert({ name: 'Diet Root Beer',     description: 'Refreshingly non-alcoholic, but with artificial sweetener!',          price: 6.99, quantity: 0, picture: 'https://i.imgur.com/3Wl3PaG.jpg',cat_id: 3})
      ]);
    });
  }
