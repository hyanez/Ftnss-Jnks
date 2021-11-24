const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//user class
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      // prevents duplicate email addresses in DB
      unique: true,
      // checks for email format (foo@bar.com)
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [10],
      },
    },
    //in inches
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //in pounds
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // mealPlan_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "mealplan",
    //     key: "id",
    //   },
    // },
    // fitnessPlan_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "FitnessPlan",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
