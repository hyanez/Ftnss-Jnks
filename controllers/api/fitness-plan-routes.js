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

// GET /api/fitnessplan/:id
// GET a fitness plan by id
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
    const fitnessData = await FitnessPlan.create(req.body);
    res.status(200).json(fitnessData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT /api/fitnessplan/:id
// UPDATE a fitness plan by id
router.put("/:id", async (req, res) => {
  try {
    const fitnessData = await FitnessPlan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!fitnessData) {
      res.status(404).json({ message: "No Fitness Plan found with this id!" });
      return;
    }

    res.status(200).json(fitnessData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE /api/fitnessplan/:id
// DELETE a fitness plan by id
router.delete("/:id", async (req, res) => {
  try {
    const fitnessData = await FitnessPlan.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!fitnessData) {
      res.status(404).json({ message: "No Fitness Plan found with this id!" });
      return;
    }

    res.status(200).json(fitnessData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
