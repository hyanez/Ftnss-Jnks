//Seeds for database
const sequelize = require("../config/connection");
const { User } = require("../models");

const userSeedData = require("./userSeedData.json");
const fitnessPlanSeedData = require("./fitnessPlanSeedData.json");
const mealPlanSeedData = require("./mealPlanSeedData.json");
const workoutSeedData = require("./workoutSeedData.json");
const recipeSeedData = require("./recipeSeedData.json");

const seedDatabase = async () => {};

seedDatabase();
