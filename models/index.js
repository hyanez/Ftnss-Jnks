//Index for all models
const User = require("./User");
const FitnessPlan = require("./FitnessPlan");
const Workout = require("./Workout");
const Exercise = require("./Exercise");
const MealPlan = require("./MealPlan");
const Recipe = require("./Recipe");

//user has one fitness plan
// User.hasOne(FitnessPlan, {
//   foreignKey: "fitnessPlan_id",
//   onDelete: "CASCADE",
// });

//user has one meal plan
MealPlan.belongsTo(User, {
  foreignKey: "mealPlan_id",
  onDelete: "CASCADE",
});

//fitnessplan has many workouts

//workout has many exercises

//exercises belong to workout

//meal plan has many recipes
MealPlan.hasMany(Recipe, {
  foreignKey: "mealPlan_id",
  onDelete: "CASCADE",
});

module.exports = { FitnessPlan, Workout, Exercise, MealPlan, Recipe, User };
