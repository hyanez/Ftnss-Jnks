//Seeds for database
const sequelize = require("../config/connection");
const { User, Exercise, Recipe } = require("../models");

const userSeedData = require("./userSeedData.json");
const fitnessPlanSeedData = require("./fitnessPlanSeedData.json");
const mealPlanSeedData = require("./mealPlanSeedData.json");
const workoutSeedData = require("./workoutSeedData.json");
const exerciseSeedData = require("./exerciseSeedData.json");
const recipeSeedData = require("./recipeSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const exercises = await Exercise.bulkCreate(exerciseSeedData);

  const recipes = await Recipe.bulkCreate(recipeSeedData);
};

seedDatabase();
