const router = require("express").Router();
const Exercise = require("../../models/Exercise");

router.post("/", async (req, res) => {
  try {
    const exerciseData = await Exercise.create({
      exercise_name: req.body.exercise_name,
      reps: req.body.reps,
    });
    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
