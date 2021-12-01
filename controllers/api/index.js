// user routes
const router = require("express").Router();
const fitnessPlanRoutes = require("./fitness-plan-routes");
const mealPlanRoutes = require("./meal-plan-routes.js");
const userRoutes = require("./user-routes.js");
const exerciseRoutes = require("./exercise-routes");
const recipeRoutes = require("./recipe-routes");

router.use("/fitnessplan", fitnessPlanRoutes);
router.use("/mealplan", mealPlanRoutes);
router.use("/users", userRoutes);
router.use("/exercises", exerciseRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;
