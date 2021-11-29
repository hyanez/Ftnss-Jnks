const router = require("express").Router();
const User = require("../../models/User");

// GET /api/users
// GET all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/users/:id
// GET one user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findOnel({
      where: {
        id: req.params.id,
      },
    });
    if (userData) res.status(200).json(userData);
    else res.status(404).json({ message: "User does not exist" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST /api/users
// CREATE a new user
router.post("/", async (req, res) => {
  console.log("this is the rec" + req);
  try {
    var str = req.body.email;
    str = str.substring(str.indexOf("@") + 1);
    const dbUserData = await User.create({
      username: str,
      email: req.body.email,
      password: req.body.password,
      height: req.body.height,
      weight: req.body.weight,
      age: req.body.age,
      gender: req.body.gender,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT /api/users/:id
// UPDATE a user
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: "No User found with this id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE /api/users/:id
// DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: "No User found with this id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
