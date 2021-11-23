//Index for all models
const FitnessPlan = require("./FitnessPlan");
const Workout = require("./Workout");
const Exercise = require("./Exercise");
const MealPlan = require("./MealPlan");
const Recipe = require("./Recipe");

//fitnessplan has many workouts

//fitnessplan has one meal plan

//workout has many exercises

//exercises belong to workout

//meal plan has many recipes

//recipes has many ingridients (might not need an ingridient model depeding on how we set up an api that gives us recipes)
