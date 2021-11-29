const calculate = require("fitness-health-calculations");
const helper = require("../../utils/helpers");
const sequelize = require("../../config/connection");
const { User } = require("../../models");
const session = require("express-session");

const health = {
  username: "",
  height: 0,
  formatHeight: "",
  weight: 0,
  age: 0,
  bmr: 0,
  tdee: 0,
  calNeedReduc: 0,
  calNeedGain: 0,
};

const exampleUser = {
  id: 2,
  username: "Lernantino",
  email: "lernantino@gmail.com",
  password: "password10",
  height: 77,
  weight: 210,
  age: 30,
  gender: "male",
};

console.log("this user" + exampleUser);

health.username = exampleUser.username;
health.height = exampleUser.height;
health.weight = exampleUser.weight;
health.age = exampleUser.age;

exampleUser.height = exampleUser.height * 0.8333333333;

//calculates basal metoabolic rate

//bmr(gender, age, height, weight)
let myBmr = calculate.bmr(
  exampleUser.gender,
  exampleUser.age,
  exampleUser.height,
  exampleUser.weight
);

health.bmr = myBmr.toFixed(1);

//calculates total daily energyh expenditure
let tdee = calculate.tdee(
  exampleUser.gender,
  exampleUser.age,
  exampleUser.height,
  exampleUser.weight,
  "moderate"
);

health.tdee = tdee;

//caloricNeeds(gender, age, height, weight, activity_level, goal, approach)
let calNeedReduc = calculate.caloricNeeds(
  exampleUser.gender,
  exampleUser.age,
  exampleUser.height,
  exampleUser.weight,
  "moderate",
  "reduction"
);
health.calNeedReduc = calNeedReduc;

let calNeedGain = calculate.caloricNeeds(
  exampleUser.gender,
  exampleUser.age,
  exampleUser.height,
  exampleUser.weight,
  "moderate",
  "gain"
);
health.calNeedGain = calNeedGain;

health.formatHeight = helper.format_height(health.height);

module.exports = health;

// {
//   run_Calc: async (id) => {
//     const health = {
//       username: "",
//       height: 0,
//       formatHeight: "",
//       weight: 0,
//       age: 0,
//       bmr: 0,
//       tdee: 0,
//       calNeedReduc: 0,
//       calNeedGain: 0,
//     };

//     // const exampleUser = {
//     //   id: 2,
//     //   username: "Lernantino",
//     //   email: "lernantino@gmail.com",
//     //   password: "password10",
//     //   height: 77,
//     //   weight: 210,
//     //   age: 30,
//     //   gender: "male",
//     // };

//     const exampleUser = await fetch("https//:localhost:3001/api/users/" + id, {
//       method: "Get",
//       headers: { "Content-Type": "application/json" },
//     });

//     health.username = exampleUser.username;
//     health.height = exampleUser.height;
//     health.weight = exampleUser.weight;
//     health.age = exampleUser.age;

//     exampleUser.height = exampleUser.height * 0.8333333333;

//     //calculates basal metoabolic rate

//     //bmr(gender, age, height, weight)
//     let myBmr = calculate.bmr(
//       exampleUser.gender,
//       exampleUser.age,
//       exampleUser.height,
//       exampleUser.weight
//     );

//     health.bmr = myBmr.toFixed(1);

//     //calculates total daily energyh expenditure
//     let tdee = calculate.tdee(
//       exampleUser.gender,
//       exampleUser.age,
//       exampleUser.height,
//       exampleUser.weight,
//       "moderate"
//     );

//     health.tdee = tdee;

//     //caloricNeeds(gender, age, height, weight, activity_level, goal, approach)
//     let calNeedReduc = calculate.caloricNeeds(
//       exampleUser.gender,
//       exampleUser.age,
//       exampleUser.height,
//       exampleUser.weight,
//       "moderate",
//       "reduction"
//     );
//     health.calNeedReduc = calNeedReduc;

//     let calNeedGain = calculate.caloricNeeds(
//       exampleUser.gender,
//       exampleUser.age,
//       exampleUser.height,
//       exampleUser.weight,
//       "moderate",
//       "gain"
//     );
//     health.calNeedGain = calNeedGain;

//     health.formatHeight = helper.format_height(health.height);

//     return health;
//   },
// };
