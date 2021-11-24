//Seeds for database
const sequelize = require("../config/connection");
const { Traveller, Location, Trip } = require("../models");

const travellerSeedData = require("./travellerSeedData.json");
const locationSeedData = require("./locationSeedData.json");

const seedDatabase = async () => {};

seedDatabase();
