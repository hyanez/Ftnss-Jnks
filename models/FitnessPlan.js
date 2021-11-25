const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FitnessPlan extends Model {}

FitnessPlan.init(
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
    workout_count: {
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
    modelName: "fitnessplan",
  }
);

module.exports = FitnessPlan;
