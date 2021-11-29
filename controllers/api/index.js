// user routes
const router = require("express").Router();
const fitnessPlanRoutes = require("./fitness-plan-routes");
const mealPlanRoutes = require("./meal-plan-routes");
const userRoutes = require("./user-routes");

router.use("/fitnessplan", fitnessPlanRoutes);
router.use("/mealplan", mealPlanRoutes);
router.use("/users", userRoutes);

module.exports = router;
