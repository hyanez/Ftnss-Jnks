const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
//Sets 'hbs.engine' as 'handlebars'
app.engine("handlebars", hbs.engine);
//Lets express know that we want the view engine to be 'handlebars'
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/"));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
