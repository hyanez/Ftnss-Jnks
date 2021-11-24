// user routes
const router = require("express").Router();
const fitnessPlanRoutes = require("./fitness-plan-routes");
const mealPlanRoutes = require("./meal-plan-routes.js");

router.use("/fitnessplan", fitnessPlanRoutes);
router.use("/mealplan", mealPlanRoutes);

module.exports = router;
