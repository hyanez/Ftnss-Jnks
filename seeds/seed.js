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

  const recipes = await Recipe.bulkCreate(recipeSeedData);
  //create mealplans at random

  for (const { id } of readers) {
    const newCard = await LibraryCard.create({
      reader_id: id,
    });
  }

  // Get a random recipe's `id`
  const { id: randomRecipeId } =
    recipes[Math.floor(Math.random() * recipes.length)];

  // await MealPlan.create({
  //   plan_name: "healthy recipes",
  //   recipe_count: 1,
  //   recipe_id: randomRecipeId,
  // }).catch((err) => {
  //   // If there's an error, such as the same random pairing of `traveller.id` and `location.id` occurring and we get a constraint error, don't quit the Node process
  //   console.log(err);
  // });

  process.exit(0);
};

seedDatabase();
