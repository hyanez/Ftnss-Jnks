const { FitnessPlan } = require("../models");

const fitnessData = [
  {
    plan_name: "muscle-building",
    workout_count: 3,
    user_id: 1,
  },
  {
    plan_name: "cardio-focused",
    workout_count: 5,
    user_id: 2,
  },
  {
    plan_name: "mixed-workouts",
    "workout-count": 4,
    user_id: 3,
  },
];

const seedFitnessPlans = () => FitnessPlan.bulkCreate(fitnessData);

module.exports = seedFitnessPlans;
