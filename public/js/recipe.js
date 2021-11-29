//Dependencies and Global Vars
const edApiKey = process.env.Ed_APIKey;
const edAppId = process.env.Ed_AppID;

var recipeList = document.getElementById("recipes");

var recipeBtn = document.querySelector("#recipe");
recipeBtn.addEventListener("click", getRecipe);

function getRandomIngridient() {
  var ingridientList = [
    "chicken",
    "pork",
    "beef",
    "eggs",
    "salmon",
    "tilapia",
    "fish",
    "tomatoes",
    "potatoes",
    "ginger",
    "peppers",
    "rice",
    "avocado",
    "beans",
    "corn",
    "spinach",
    "pasta",
    "onions",
    "garlic",
    "scallops",
  ];
  var i = Math.floor(Math.random() * (ingridientList.length - 1));
  var ingridient = ingridientList[i];
  return ingridient;
}

function getRecipe() {
  var keyword = getRandomIngridient();
  var dietSelector = "high-protein";
  var edRequestURL =
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
    keyword +
    "&app_id=" +
    edAppId +
    "&app_key=" +
    edApiKey +
    "&diet=" +
    dietSelector;
  //   var exampleURL =
  //     "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=6514ecc7&app_key=%20acbc552b3d19b454a25e304e3010ca7e&diet=high-protein";
  $.ajax({
    url: edRequestURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    for (var i = 0; i < 1; i++) {
      var fiveRecipes = document.createElement("li");
      fiveRecipes.innerHTML = `${response.hits[i].recipe.label}
        /// ${response.hits[i].recipe.dietLabels[0]} ///
         '${response.hits[i].recipe.url}'`;
      recipeList.appendChild(fiveRecipes);
    }
  });
}
