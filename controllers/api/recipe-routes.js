const axios = require("axios");
const router = require("express").Router();
const { Recipe } = require("../../models");
const edApiKey = process.env.Ed_APIKey;
const edAppId = process.env.Ed_AppID;

router.get("/", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll();
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (recipeData) res.status(200).json(recipeData);
    else res.status(404).json({ message: "Recipe does not exist" });
  } catch (err) {
    res.status(500).json(err);
  }
});

function getRandomIngridient() {
  var ingridientList = [
    "chicken",
    "pork",
    "beef",
    "eggs",
    "salmon",
    "tilapia",
    "fish",
    "tomatoes",
    "potatoes",
    "ginger",
    "peppers",
    "rice",
    "avocado",
    "beans",
    "corn",
    "spinach",
    "pasta",
    "onions",
    "garlic",
    "scallops",
  ];
  var i = Math.floor(Math.random() * (ingridientList.length - 1));
  var ingridient = ingridientList[i];
  return ingridient;
}

function getRandomDiet() {
  var dietList = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium",
  ];
  var i = Math.floor(Math.random() * (dietList.length - 1));
  var diet = dietList[i];
  return diet;
}

router.post("/", async (req, res) => {
  try {
    var keyword = getRandomIngridient();
    var dietSelector = getRandomDiet();
    var edRequestURL =
      "https://api.edamam.com/api/recipes/v2?type=public&q=" +
      keyword +
      "&app_id=" +
      edAppId +
      "&app_key=" +
      edApiKey +
      "&diet=" +
      dietSelector;

    axios
      .get(edRequestURL)
      .then(function (response) {
        // handle success
        let i = Math.floor(Math.random() * 17);
        const name = response.data.hits[i].recipe.label;
        const url = response.data.hits[i].recipe.url;
        const calories = response.data.hits[i].recipe.calories.toFixed(1);
        const thumbnail = response.data.hits[i].recipe.images.REGULAR.url;
        console.log(thumbnail);
        const data = {
          name: name,
          url: url,
          calories: calories,
          diet: dietSelector,
          image_url: thumbnail,
        };
        console.log(data);
        const newRecipeData = Recipe.create({
          recipe_name: data.name,
          recipe_url: data.url,
          calories: data.calories,
          diet: data.diet,
          image_url: data.image_url,
        });

        res.status(200).json(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: "No Recipe found with this id!" });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
