const router = require("express").Router();
const MealPlan = require("../../models/MealPlan");

// GET /api/mealplan
// GET all meal plans
router.get("/", async (req, res) => {
  try {
    const dbMealData = await MealPlan.findAll();
    if (dbMealData) res.status(200).json(dbMealData);
    else res.status(404).json({ message: "Couldn't find user" });
    // const fitplans = dbFitnessPlanData.map((fitplan) =>
    //   fitplan.get({ plain: true })
    // );

    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }
      res.render("insert handlebars here", {
        fitplans,
        countVisit: req.session.countVisit,
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
