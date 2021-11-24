const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workout_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercise_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Exercise",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "workout",
  }
);

module.exports = Workout;
