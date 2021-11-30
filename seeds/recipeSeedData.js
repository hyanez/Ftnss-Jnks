const { Recipe } = require("../models");
const recipeData = [
  {
    recipe_name: "high protein bread",
    recipe_url: "https://www.allrecipes.com/recipe/22963/high-protein-bread/",
    mealplan_id: 1,
    calories: 400,
    diet: "low-fat",
    image_url:
      "https://www.edamam.com/web-img/c37/c37f06f44d8d716667a11e1b179faa42-s",
  },
  {
    recipe_name: "low-fat ground turkey pasta",
    recipe_url:
      "https://www.allrecipes.com/recipe/261960/low-fat-ground-turkey-pasta/",
    mealplan_id: 2,
    calories: 400,
    diet: "low-fat",
    image_url:
      "https://www.edamam.com/web-img/c37/c37f06f44d8d716667a11e1b179faa42-s",
  },
  {
    recipe_name: "vegetarian chile",
    recipe_url: "https://www.allrecipes.com/recipe/15084/vegetarian-chili/",
    mealplan_id: 3,
    calories: 400,
    diet: "low-fat",
    image_url:
      "https://www.edamam.com/web-img/c37/c37f06f44d8d716667a11e1b179faa42-s",
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
