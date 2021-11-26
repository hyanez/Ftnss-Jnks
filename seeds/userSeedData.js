const { User } = require("../models");

const userData = [
  {
    username: "Sal",
    email: "sal@hotmail.com",
    password: "safepass12",
    height: 70,
    weight: 155,
    age: 25,
  },
  {
    username: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password10",
    height: 77,
    weight: 210,
    age: 30,
  },
  {
    username: "Amiko",
    email: "amiko2k20@aol.com",
    password: "thispass34",
    height: 65,
    weight: 120,
    age: 16,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
