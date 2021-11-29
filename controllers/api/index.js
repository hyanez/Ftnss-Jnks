// user routes
const router = require("express").Router();
const fitnessPlanRoutes = require("./fitness-plan-routes");
<<<<<<< HEAD
const mealPlanRoutes = require("./meal-plan-routes.js");
const userRoutes = require("./user-routes.js");
const exerciseRoutes = require("./exercise-routes");
=======
const mealPlanRoutes = require("./meal-plan-routes");
const userRoutes = require("./user-routes");
>>>>>>> main

router.use("/fitnessplan", fitnessPlanRoutes);
router.use("/mealplan", mealPlanRoutes);
router.use("/users", userRoutes);
router.use("/exercises", exerciseRoutes);

module.exports = router;
