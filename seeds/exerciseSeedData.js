const { Exercise } = require("../models");

const exerciseData = [
  {
    exercise_name: "squats",
    reps: 5,
    workout_id: 1,
  },
  {
    exercise_name: "mile run",
    reps: 10,
    workout_id: 1,
  },
  {
    exercise_name: "crunches",
    reps: 8,
    workout_id: 2,
  },
  {
    exercise_name: "chest fly",
    reps: 7,
    workout_id: 2,
  },
  {
    exercise_name: "bench press",
    reps: 10,
    workout_id: 3,
  },
  {
    exercise_name: "dead lifts",
    reps: 10,
    workout_id: 3,
  },
  {
    exercise_name: "shoulder press",
    reps: 8,
    workout_id: 3,
  },
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;
