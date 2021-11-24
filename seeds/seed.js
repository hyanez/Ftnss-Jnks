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

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   // const recipes = await Recipe.bulkCreate(recipeSeedData);
//   //create mealplans at random
//   // const mealPlans = [];
//   // for (const recipe of recipeSeedData) {
//   //   const newRecipe = await recipe.create({
//   //     ...recipe,
//   //     mealPlan_id: recipes[Math.floor(Math.random() * recipes.length)],
//   //   });
//   //   mealPlans.push(newMealPlan);
//   // }

//   // for (const user of userSeedData) {
//   //   let i = 0;
//   //   const newUser = await User.create({
//   //     ...user,
//   //     mealPlan_id: i,
//   //   });
//   //   i++;
//   // }

//   process.exit(0);
// };

seedDatabase();
