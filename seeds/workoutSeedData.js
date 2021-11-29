const { Workout } = require("../models");

const workoutData = [
  {
    workout_name: "legs",
    exercise_count: 1,
    fitnessplan_id: 1,
  },
  {
    workout_name: "chest-day",
    exercise_count: 2,
    fitnessplan_id: 2,
  },
  {
    workout_name: "shoulders-and-traps",
    exercise_count: 1,
    fitnessplan_id: 3,
  },
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;
