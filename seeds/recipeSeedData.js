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
  {
    recipe_name: "Avocado Crema recipes",
    recipe_url: "http://www.chowhound.com/recipes/avocado-crema-30316",
    calories: 442,
    diet: "low-carb",
    image_url:
      "https://www.edamam.com/web-img/abe/abee21509a48fc119f5b690286747695",
  },
  {
    recipe_name: "Fish Niçoise",
    recipe_url: "http://www.cookstr.com/recipes/fish-niccediloise",
    calories: 740,
    diet: "high-fiber",
    image_url:
      "https://www.edamam.com/web-img/dfd/dfddcd1155ac0c63a36e4c30d913dc22.jpg",
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
