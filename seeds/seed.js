//Seeds for database
const sequelize = require("../config/connection");
const {
  User,
  Exercise,
  Recipe,
  MealPlan,
  Workout,
  FitnessPlan,
} = require("../models");

const userSeedData = require("./userSeedData.json");
const fitnessPlanSeedData = require("./fitnessPlanSeedData.json");
const mealPlanSeedData = require("./mealPlanSeedData.json");
const workoutSeedData = require("./workoutSeedData.json");
const exerciseSeedData = require("./exerciseSeedData.json");
const recipeSeedData = require("./recipeSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  const fitnessPlans = await FitnessPlan.bulkCreate(fitnessPlanSeedData);

  const mealPlans = await MealPlan.bulkCreate(mealPlanSeedData);

  const workouts = await Workout.bulkCreate(workoutSeedData);

  const exercises = await Exercise.bulkCreate(exerciseSeedData);

  const recipes = await Recipe.bulkCreate(recipeSeedData);

  process.exit(0);
};

seedDatabase();
