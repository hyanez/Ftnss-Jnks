const { MealPlan } = require("../models");
const mealData = [
  {
    plan_name: "muscle-building-meals",
    recipe_count: 1,
    user_id: 1,
  },
  {
    plan_name: "cardio-focused-meals",
    recipe_count: 2,
    user_id: 2,
  },
  {
    plan_name: "mixed-workouts-meals",
    recipe_count: 1,
    user_id: 3,
  },
];

const seedMealPlans = () => MealPlan.bulkCreate(mealData);

module.exports = seedMealPlans;
