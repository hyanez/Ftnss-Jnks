const router = require("express").Router();
const { User, Exercise } = require("../models");
const withAuth = require("../utils/auth");
const calculate = require("fitness-health-calculations");
const helper = require("../utils/helpers");

router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
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

router.get("/mealplan", withAuth, async (req, res) => {
  res.render("mealplan", { loggedIn: req.session.loggedIn });
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/health", withAuth, async (req, res) => {
  console.log(req.session.user_id);
  const health = {
    username: "",
    height: 0,
    formatHeight: "",
    weight: 0,
    age: 0,
    bmr: 0,
    tdee: 0,
    calNeedReduc: 0,
    calNeedGain: 0,
    loggedIn: true,
  };

  const exampleUser = await User.findOne({
    where: {
      id: req.session.user_id,
    },
  });

  console.log("this user" + exampleUser);

  health.username = exampleUser.username;
  health.height = exampleUser.height;
  health.weight = exampleUser.weight;
  health.age = exampleUser.age;

  exampleUser.height = exampleUser.height * 0.8333333333;

  //calculates basal metoabolic rate

  //bmr(gender, age, height, weight)
  let myBmr = calculate.bmr(
    exampleUser.gender,
    exampleUser.age,
    exampleUser.height,
    exampleUser.weight
  );

  health.bmr = myBmr.toFixed(1);

  //calculates total daily energyh expenditure
  let tdee = calculate.tdee(
    exampleUser.gender,
    exampleUser.age,
    exampleUser.height,
    exampleUser.weight,
    "moderate"
  );

  health.tdee = tdee;

  //caloricNeeds(gender, age, height, weight, activity_level, goal, approach)
  let calNeedReduc = calculate.caloricNeeds(
    exampleUser.gender,
    exampleUser.age,
    exampleUser.height,
    exampleUser.weight,
    "moderate",
    "reduction"
  );
  health.calNeedReduc = calNeedReduc;

  let calNeedGain = calculate.caloricNeeds(
    exampleUser.gender,
    exampleUser.age,
    exampleUser.height,
    exampleUser.weight,
    "moderate",
    "gain"
  );
  health.calNeedGain = calNeedGain;

  health.formatHeight = helper.format_height(health.height);
  res.render("health", health);
});

module.exports = router;
