CREATE DATABASE pickup;
\c pickup;

CREATE TABLE main (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(50),
  description VARCHAR(200)
);

CREATE TABLE side (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(50),
  description VARCHAR(200)
);

CREATE TABLE drinks (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(50),
  description VARCHAR(200)
);

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(50),
  phone BIGSERIAL
);

CREATE TABLE order_list (
  id BIGSERIAL PRIMARY KEY,
  main_id BIGSERIAL,
  side_id BIGSERIAL,
  drinks_id BIGSERIAL,
  users_id BIGSERIAL
);

SELECT * FROM main;
SELECT * FROM side;
SELECT * FROM drinks;
SELECT * FROM users;
SELECT * FROM order_list;

INSERT INTO main (id, name, description)
VALUES (1, 'Big Mister', 'The signature burger of MrDonald');
INSERT INTO main (id, name, description)
VALUES (2, 'Double Mister', 'Double pattied Big Mister');
INSERT INTO main (id, name, description)
VALUES (3, 'Triple Mister', 'Triple pattied Big Mister');
INSERT INTO main (id, name, description)
VALUES (4, 'MrMister', 'Quadriple pattied Big Mister');
INSERT INTO main (id, name, description)
VALUES (5, 'MrFish', 'Mister-O-Fish');
INSERT INTO main (id, name, description)
VALUES (6, 'MrAngus', 'A Big Mister, with an angus patty');
INSERT INTO main (id, name, description)
VALUES (7, 'MrDouble', 'The struggle version of Big Mister');
INSERT INTO main (id, name, description)
VALUES (8, 'MrChicken', 'A chicken burger with too much mayo');
INSERT INTO main (id, name, description)
VALUES (9, 'Sausage MrMuffin', 'Breakfast sandwich');

INSERT INTO side (id, name, description)
VALUES (1, 'Fries', 'Crispy fries');
INSERT INTO side (id, name, description)
VALUES (2, 'Mini Fries', 'Smaller fries, not smaller-portioned fries');
INSERT INTO side (id, name, description)
VALUES (3, 'Poutine', 'Fries with cheese curds and gravy');

INSERT INTO drinks (id, name, description)
VALUES (1, 'Coke', 'Refreshingly cold!');
INSERT INTO drinks (id, name, description)
VALUES (2, 'Diet-Coke', 'Refreshingly cold, but with artifical sweetener!');
INSERT INTO drinks (id, name, description)
VALUES (3, 'Sprite', 'Refreshingly lemon!');
INSERT INTO drinks (id, name, description)
VALUES (4, 'Root Beer', 'Refreshingly non-alcoholic!');

INSERT INTO users (id, name, phone)
VALUES (1, 'Thomas', '6470000000');
INSERT INTO users (id, name, phone)
VALUES (2, 'Maggie', '6471111111');
INSERT INTO users (id, name, phone)
VALUES (3, 'Chris', '6472222222');
