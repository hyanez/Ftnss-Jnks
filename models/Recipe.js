const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  recipe_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recipe_url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  mealplan_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "mealplan",
      key: "id",
    },
  },
});

module.exports = Recipe;