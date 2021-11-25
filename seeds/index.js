const seedUsers = require("./userSeedData");
const seedMealPlans = require("./mealPlanSeedData");
const seedRecipes = require("./recipeSeedData");
const seedFitnessPlans = require("./product-seeds");
const seedWorkouts = require("./product-tag-seeds");
const seedExercises = require("./tag-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedMealPlans();
  console.log("\n----- MEAL PLANS SEEDED -----\n");

  await seedRecipes();
  console.log("\n----- RECIPES SEEDED -----\n");

  await seedFitnessPlans();
  console.log("\n----- FITNESS PLANS SEEDED -----\n");

  await seedWorkouts();
  console.log("\n----- WORKOUTS SEEDED -----\n");
  await seedExercises();
  console.log("\n----- EXERCISES SEEDED -----\n");

  process.exit(0);
};

seedAll();
