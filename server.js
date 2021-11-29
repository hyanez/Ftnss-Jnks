const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
// Import express-session
const session = require("express-session");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const models = require("./models");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret", //like a password
  resave: false,
  saveUninitialized: false, //only have saved when we use like a login
};

app.use(session(sess));
const hbs = exphbs.create({ helpers });

//Sets 'hbs.engine' as 'handlebars'
app.engine("handlebars", hbs.engine);
//Lets express know that we want the view engine to be 'handlebars'
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("Server listening on: http://localhost:" + PORT)
  );
});
