//Index for all models
const FitnessPlan = require("./FitnessPlan");
const Workout = require("./Workout");
const Exercise = require("./Exercise");
const MealPlan = require("./MealPlan");
const Recipe = require("./Recipe");
const User = require("./User");

//user has one fitness plan
User.hasOne(FitnessPlan, {
  foreignKey: "driver_id",
  onDelete: "CASCADE",
});
//user has one meal plan

//fitnessplan has many workouts

//fitnessplan has one meal plan
//I think these should be separate

//workout has many exercises

//exercises belong to workout

//meal plan has many recipes

//recipes has many ingridients (might not need an ingridient model depeding on how we set up an api that gives us recipes)

module.exports = { FitnessPlan, Workout, Exercise, MealPlan, Recipe, User };
