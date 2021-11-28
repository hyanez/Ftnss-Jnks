const calculate = require("fitness-health-calculations");
const helper = require("../../utils/helpers");

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
console.log(health.bmr);

//calculates total daily energyh expenditure
let tdee = calculate.tdee(
  exampleUser.gender,
  exampleUser.age,
  exampleUser.height,
  exampleUser.weight,
  "moderate"
);

health.tdee = tdee;
console.log(health.tdee);

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
console.log(health.calNeedReduc);

let calNeedGain = calculate.caloricNeeds(
  exampleUser.gender,
  exampleUser.age,
  exampleUser.height,
  exampleUser.weight,
  "moderate",
  "gain"
);
health.calNeedGain = calNeedGain;
console.log(health.calNeedGain);
health.formatHeight = helper.format_height(health.height);

console.log(health);
module.exports = health;
