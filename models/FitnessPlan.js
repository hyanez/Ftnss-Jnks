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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    workouts: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
