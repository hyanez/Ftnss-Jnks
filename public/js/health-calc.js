const calculate = require("fitness-health-calculations");

const health = {
  username: "",
  height: 0,
  weight: 0,
  age: 0,
  bmr: 0,
  tdee: 0,
};

const exampleUser = {
  id: 1,
  username: "Sal",
  email: "sal@hotmail.com",
  password: "safepass12",
  height: 70,
  weight: 155,
  age: 25,
  gender: "male",
};

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

function getCaloricNeed() {
  //caloricNeeds(gender, age, height, weight, activity_level, goal, approach)
  console.log(calNeed);
}

function idealBodyWEight() {
  //idealBodyWeight(height, gender, units[optional])
  console.log(idealWeight);
}

module.exports = health;
