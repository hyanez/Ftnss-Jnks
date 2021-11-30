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

const getRecipe = async () => {
  var keyword = getRandomIngridient();
  var dietSelector = "high-protein";
  var edRequestURL =
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
    keyword +
    "&app_id=" +
    edAppId +
    "&app_key=" +
    edApiKey +
    "&diet=" +
    dietSelector;
  //   var exampleURL =
  //     "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=6514ecc7&app_key=%20acbc552b3d19b454a25e304e3010ca7e&diet=high-protein";
  var newRecipe = getRec(edRequestURL);
  return newRecipe;
};

const getRec = async (url) => {
  axios
    .get(url)
    .then(function (response) {
      // handle success
      const data = response.data.hits[0].recipe;
      console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

router.post("/", async (req, res) => {
  try {
    const recipeAPIData = await getRecipe();
    console.log(recipeAPIData);
    // console.log(req.body);
    // var str = req.body.email;
    // str = str.substring(0, str.indexOf("@"));
    // const dbUserData = await User.create({
    //   username: str,
    //   email: req.body.email,
    //   password: req.body.password,
    //   height: req.body.height,
    //   weight: req.body.weight,
    //   age: req.body.age,
    //   gender: req.body.gender,
    // });
    res.status(200).json(recipeAPIData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
