const router = require("express").Router();
const health = require("../public/js/health-calc");
const { User } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

// router.get("/", async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));
//     console.log(users);
//     res.render("homepage", {
//       users,
//       // Pass the logged in flag to the template
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/fitnessplan", withAuth, async (req, res) => {
  res.render("fitnessplan", { loggedIn: req.session.loggedIn });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

// router.get("/mealplan", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("mealplan", {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/mealplan", withAuth, async (req, res) => {
  res.render("mealplan", { loggedIn: req.session.loggedIn });
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/health", withAuth, async (req, res) => {
  res.render("health", health);
});

module.exports = router;
