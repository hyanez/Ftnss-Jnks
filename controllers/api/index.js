// user routes
const router = require("express").Router();
const fitnessPlanRoutes = require("./fitness-plan-routes");
const mealPlanRoutes = require("./meal-plan-routes.js");
const userRoutes = require("./user-routes.js");

router.use("/fitnessplan", fitnessPlanRoutes);
router.use("/mealplan", mealPlanRoutes);
router.use("/users", userRoutes);

module.exports = router;
