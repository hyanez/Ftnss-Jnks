const router = require("express").Router();
const { User } = require("../../models");

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
    const userData = await User.findOne({
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
  try {
    console.log(req.body);
    var str = req.body.email;
    str = str.substring(0, str.indexOf("@"));
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
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;
      console.log(req.session.user_id);
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

router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.validatePassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;
      console.log("this" + req.session.loggedIn);
      console.log("you are logged in");
      res.status(200).send("You are now logged in");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  router.post("/logout", (req, res) => {
    console.log("this is within the user routes");
    if (req.session.loggedIn) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
        console.log("this is after the destroy");
      });
    } else {
      res.status(404).end();
    }
  });
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
