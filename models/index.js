//Index for all models
const User = require("./User");
const FitnessPlan = require("./FitnessPlan");
const Workout = require("./Workout");
const Exercise = require("./Exercise");
const MealPlan = require("./MealPlan");
const Recipe = require("./Recipe");

//user has one meal plan
User.hasOne(MealPlan, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

MealPlan.belongsTo(User, {
  foreignKey: "user_id",
});

//meal plan has many recipes
MealPlan.hasMany(Recipe, {
  foreignKey: "mealplan_id",
  onDelete: "CASCADE",
});

Recipe.belongsTo(MealPlan, {
  foreignKey: "mealplan_id",
});

//user has one fitness plan
// User.hasOne(FitnessPlan, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// FitnessPlan.belongsTo(User, {
//   foreignKey: "mealplan_id",
// });

// //fitnessplan has many workouts
// FitnessPlan.hasMany(Workout, {
//   foreignKey: "fitnessplan_id",
//   onDelete: "CASCADE",
// });

// Workout.belongsTo(FitnessPlan, {
//   foreignKey: "fitnessplan_id",
// });

//workout has many exercises
// Workout.hasMany(Exercise, {
//   foreignKey: "workout_id",
//   onDelete: "CASCADE",
// });

// Exercise.belongsTo(Workout, {
//   foreignKey: "workout_id",
// });

// recipe has many ingredients, not sure if will do this yet

module.exports = { FitnessPlan, Workout, Exercise, MealPlan, Recipe, User };
