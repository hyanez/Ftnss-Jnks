const router = require("express").Router();
const health = require("../public/js/health-calc");

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/fitnessplan", async (req, res) => {
  res.render("fitnessplan");
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
