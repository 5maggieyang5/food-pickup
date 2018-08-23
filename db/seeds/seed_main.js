
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('main').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('main').insert({id: 1, name: 'Big Mister', description: 'The signature burger of MrDonald'}),
        knex('main').insert({id: 2, name: 'Double Mister', description: 'Double pattied Big Mister'}),
        knex('main').insert({id: 3, name: 'Triple Mister', description: 'Triple pattied Big Mister'}),
        knex('main').insert({id: 4, name: 'MrMister', description: 'Quadriple pattied Big Mister'}),
        knex('main').insert({id: 5, name: 'MrFish', description: 'Mister-O-Fish'}),
        knex('main').insert({id: 6, name: 'MrAngus', description: 'A Big Mister, with an angus patty'}),
        knex('main').insert({id: 7, name: 'MrDouble', description: 'The struggle version of Big Mister'}),
        knex('main').insert({id: 8, name: 'MrChicken', description: 'A chicken burger with too much mayo'}),
        knex('main').insert({id: 9, name: 'Sausage MrMuffin', description: 'Breakfast sandwich'})

      ]);
    });
  }
