const router = require("express").Router();
const FitnessPlan = require("../../models/FitnessPlan");

// GET /api/fitnessplan
// GET all fitness plans
router.get("/", async (req, res) => {
  try {
    const fitnessData = await FitnessPlan.findAll();
    res.status(200).json(fitnessData);
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

// GET /api/fitnessplan/id
// GET a fitness plan
router.get("/:id", async (req, res) => {
  try {
    const fitnessData = await FitnessPlan.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (fitnessData) res.status(200).json(fitnessData);
    else res.status(404).json({ message: "Fitness Plan does not exist" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST /api/fitnessplan
// CREATE a new fitness plan
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
