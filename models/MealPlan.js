const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MealPlan extends Model {}

MealPlan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    plan_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "mealplan",
  }
);
module.exports = MealPlan;
