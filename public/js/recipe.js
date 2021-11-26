//Dependencies and Global Vars
const edApiKey = process.env.Ed_APIKey;

("https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free");

function getRecipe() {
  var llRequestURL =
    " https://api.edamam.com/api/recipes/v2" +
    positionStackApiKey +
    "&query=" +
    cityName;
  $.ajax({
    url: llRequestURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}
