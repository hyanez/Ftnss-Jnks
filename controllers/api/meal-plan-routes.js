const router = require("express").Router();
const MealPlan = require("../../models/MealPlan");

// GET /api/mealplan
// GET all meal plans
router.get("/", async (req, res) => {
  try {
    const mealData = await MealPlan.findAll();
    res.status(200).json(mealData);
    // const fitplans = dbFitnessPlanData.map((fitplan) =>
    //   fitplan.get({ plain: true })
    // );

    // req.session.save(() => {
    //   if (req.session.countVisit) {
    //     req.session.countVisit++;
    //   } else {
    //     req.session.countVisit = 1;
    //   }
    //   res.render("insert handlebars here", {
    //     fitplans,
    //     countVisit: req.session.countVisit,
    //   });
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/mealplan/:id
// GET a meal plan by id
router.get("/:id", async (req, res) => {
  try {
    const mealData = await MealPlan.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (mealData) res.status(200).json(mealData);
    else res.status(404).json({ message: "Meal Plan does not exist" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
