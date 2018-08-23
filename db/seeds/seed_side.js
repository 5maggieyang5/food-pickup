
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('side').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('side').insert({id: 1, name: 'Boring Fries', description: 'Crispy, fried potato strips'}),
        knex('side').insert({id: 2, name: 'Fancy Fries', description: 'Crispy, fried potato strips, but fancy'}),
        knex('side').insert({id: 3, name: 'Boring Poutine', description: 'Crispy, fried potato strips with gravy and cheese curds'}),
        knex('side').insert({id: 4, name: 'Fancy Poutine', description: 'Crispy, fried potato strips with gravy and cheese curds, but fancy'}),
        knex('side').insert({id: 5, name: 'Boring Onion Rings', description: 'Crispy, fried onion rings'}),
        knex('side').insert({id: 6, name: 'Fancy Onion Rings', description: 'Crispy, fried onion rings, but fancy'})

      ]);
    });
  }
