const express = require("express");
const path = require("path");
const db = require("./data/database");
const csrf = require("csurf");
const addCsrfTokenMiddleware = require("./middlewares/csrf_token");

const authRoutes = require("./routes/auth.routs");
const app = express();
const erroHandlerMiddleware=require('./middlewares/error-handler')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(csrf());

app.use(addCsrfTokenMiddleware);


app.use(authRoutes);

app.use(erroHandlerMiddleware)

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("failed to connect to database");
    console.log(error);
  });
