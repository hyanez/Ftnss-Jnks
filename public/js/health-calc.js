const calculate = require("fitness-health-calculations");

//calculates basal metoabolic rate
function getBMR() {
  //bmr(gender, age, height, weight)
  let myBmr = calculate.bmr("female", 22, 168, 65);
  console.log(myBmr);
}

//calculates total daily energyh expenditure
function getTDEE() {
  //calculate.tdee(gender, age, height, weight)
  console.log(tdee);
}

function getCaloricNeed() {
  //caloricNeeds(gender, age, height, weight, activity_level, goal, approach)
  console.log(calNeed);
}

function idealBodyWEight() {
  //idealBodyWeight(height, gender, units[optional])
  console.log(idealWeight);
}
