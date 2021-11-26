//Dependencies and Global Vars
const edApiKey = process.env.Ed_APIKey;
const edAppId = process.env.Ed_AppID;

var recipeBtn = document.querySelector("#recipe");
recipeBtn.addEventListener("click", getRecipe);

function getRandomIngridient() {
  var ingridientList = [];
  var ingridient = "";
}

function getRecipe() {
  var query = "chicken";
  var dietSelector = "high-protein";
  var edRequestURL =
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
    query +
    "&app_id=" +
    edAppId +
    "&app_key=" +
    edApiKey +
    "&diet=" +
    dietSelector;
  //   var edRequestURL =
  //     "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=6514ecc7&app_key=%20acbc552b3d19b454a25e304e3010ca7e&diet=high-protein";
  $.ajax({
    url: edRequestURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}
