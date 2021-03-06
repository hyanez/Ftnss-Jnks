//Dependencies and Global Vars
const recipeHandler = async (event) => {
  // event.preventDefault();

  var FETCH_TIMEOUT = 5000;
  new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      reject(new Error("Request timed out"));
    }, FETCH_TIMEOUT);
    fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        clearTimeout(timeout);
        if (response && response.status == 200) return response.json();
        else reject(new Error("Response error"));
      })
      .then(function (responseObject) {
        // process results

        const exportData = {
          name: responseObject.name,
          url: responseObject.url,
          calories: responseObject.calories,
          diet: responseObject.diet,
          image: responseObject.image_url,
          loggedIn: true,
        };
        console.log(exportData);
        // module.exports = exportData;
        resolve();
      })
      .catch(function (err) {
        reject(err);
      });
  })
    .then(function () {
      // request succeed
    })
    .catch(function (err) {
      // error: response error, request timeout or runtime error
    });
};

document.querySelector("#recipe").addEventListener("click", function () {
  recipeHandler();
  document.location.replace("/mealplan");
});
