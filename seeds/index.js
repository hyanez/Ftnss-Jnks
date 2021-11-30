const seedUsers = require("./userSeedData");
const seedMealPlans = require("./mealPlanSeedData");
const seedRecipes = require("./recipeSeedData");
const seedFitnessPlans = require("./fitnessPlanSeedData");
const seedWorkouts = require("./workoutSeedData");
const seedExercises = require("./exerciseSeedData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  try {
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
  } catch (err) {
    console.log(err);
  }

  process.exit(0);
};

seedAll();
