const router = require("express").Router();
const FitnessPlan = require("../../models/FitnessPlan");

// GET /api/fitnessplan
// GET all fitness plans
router.get("/", async (req, res) => {
  try {
    const dbFitnessData = await FitnessPlan.findAll();
    if (dbFitnessData) res.status(200).json(dbFitnessData);
    else res.status(404).json({ message: "Fitness Plans don't exist" });
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

//GET /api/fitnessplan/id
router.get("/:id", async (req, res) => {
  try {
    const dbFitnessData = await FitnessPlan.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (dbFitnessData) res.status(200).json(dbFitnessData);
    else res.status(404).json({ message: "Fitness Plan does not exist" });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/", (req, res) => res.json(`POST route`));
app.put("/:id", (req, res) => res.json(`PUT route`));
app.delete("/:id", (req, res) => res.json(`DELETE route`));

module.exports = router;
