const router = require("express").Router();

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
  res.render("health", Sal);
});

const Sal = {
  id: 1,
  username: "Sal",
  email: "sal@hotmail.com",
  password: "safepass12",
  height: 70,
  weight: 155,
  age: 25,
};

module.exports = router;
