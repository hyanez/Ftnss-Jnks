//Dependencies and Global Vars
const edApiKey = process.env.Ed_APIKey;
const edAppId = process.env.Ed_AppID;

// ("https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free");

function getRecipe() {
  console.log("there was a click");
  alert("function is running");
  var query = "chicken";
  var dietSelector = "high-protein";
  var edRequestURL =
    " https://api.edamam.com/api/recipes/v2/search?q=" +
    query +
    "&app_id=" +
    edAppId +
    "&app_key=" +
    edApiKey +
    "&diet+" +
    dietSelector;
  $.ajax({
    url: edRequestURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });

  //   fetch(edRequestURL)
  //     .then(function (response) {
  //       console.log("response" + response);
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log("data" + data);
  //     });
}

// getRecipe();

document
  .querySelector(".mealplan")
  .addEventListener("submit", loginFormHandler);
