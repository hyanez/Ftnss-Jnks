const { Recipe } = require("../models");
const recipeData = [
  {
    recipe_name: "high protein bread",
    recipe_url: "https://www.allrecipes.com/recipe/22963/high-protein-bread/",
    mealplan_id: 1,
  },
  {
    recipe_name: "low-fat ground turkey pasta",
    recipe_url:
      "https://www.allrecipes.com/recipe/261960/low-fat-ground-turkey-pasta/",
    mealplan_id: 2,
  },
  {
    recipe_name: "vegetarian chile",
    recipe_url: "https://www.allrecipes.com/recipe/15084/vegetarian-chili/",
    mealplan_id: 3,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
