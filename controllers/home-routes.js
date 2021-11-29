const router = require("express").Router();
const { Exercise } = require("../models");
const health = require("../public/js/health-calc");

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/fitnessplan", async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll();
    console.log(exerciseData);

    const exercises = exerciseData.map((exercise) =>
      exercise.get({ plain: true })
    );

    console.log(exercises);

    res.render("fitnessplan", { exercises });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/mealplan", async (req, res) => {
  res.render("mealplan");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/health", async (req, res) => {
  res.render("health", health);
});

module.exports = router;
