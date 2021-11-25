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

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const meal of mealPlanSeedData) {
    await MealPlan.create({
      ...meal,
      user_id: users[Math.floor(Math.random() * users.length)].isSoftDeleted,
    });
  }

  //   // const recipes = await Recipe.bulkCreate(recipeSeedData);
  //   // const users = await User.bulkCreate(userData, {
  //   //   individualHooks: true,
  //   //   returning: true,
  //   // });

  //   // //create mealplans at random
  //   // // const mealPlans = [];
  //   // for (const mealPlan of mealPlanSeedData) {
  //   //   const newMealPlan = await MealPlan.create({
  //   //     ...mealPlan,
  //   //     recipe_id: recipes[Math.floor(Math.random() * recipes.length)],
  //   //   });
  //   //   // mealPlans.push(newMealPlan);
  //   // }

  //   // for (const user of userSeedData) {
  //   //   let i = 0;
  //   //   const newUser = await User.create({
  //   //     ...user,
  //   //     mealPlan_id: i,
  //   //   });
  //   //   i++;
  //   // }

  process.exit(0);
};

seedDatabase();
