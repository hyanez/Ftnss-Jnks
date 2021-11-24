//Seeds for database
const sequelize = require("../config/connection");
const { User } = require("../models");

const userSeedData = require("./userSeedData.json");
const fitnessPlanSeedData = require("./fitnessPlanSeedData.json");
const mealPlanSeedData = require("./mealPlanSeedData.json");

const seedDatabase = async () => {};

seedDatabase();
