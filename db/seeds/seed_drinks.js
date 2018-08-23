
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drinks').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('drinks').insert({id: 1, name: 'Coke', description: 'Refreshingly cold!'}),
        knex('drinks').insert({id: 2, name: 'Diet Coke', description: 'Refreshingly cold, but with artifical sweetener!'}),
        knex('drinks').insert({id: 3, name: 'Sprite', description: 'Refreshingly tastes like lemon!'}),
        knex('drinks').insert({id: 4, name: 'Diet Sprite', description: 'Refreshingly tastes like lemon, but with artificial sweetener!'}),
        knex('drinks').insert({id: 5, name: 'Root Beer', description: 'Refreshingly non-alcoholic!'}),
        knex('drinks').insert({id: 6, name: 'Diet Root Beer', description: 'Refreshingly non-alcoholic, but with artificial sweetener!'})

      ]);
    });
  }

