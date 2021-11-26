const { Exercise } = require("../models");

const exerciseData = [
  {
    exercise_name: "squats",
    workout_id: 1,
  },
  {
    exercise_name: "mile run",
    workout_id: 1,
  },
  {
    exercise_name: "crunches",
    workout_id: 2,
  },
  {
    exercise_name: "chest fly",
    workout_id: 2,
  },
  {
    exercise_name: "bench press",
    workout_id: 3,
  },
  {
    exercise_name: "dead lifts",
    workout_id: 3,
  },
  {
    exercise_name: "shoulder press",
    workout_id: 3,
  },
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;
