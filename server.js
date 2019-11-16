// ------ Dependencies ------
const express = require("express");
const mongoose = require('mongoose');

// ------ Environmental Variables ------
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';

// ------ Create App -------
const app = express();

// ------ Define Middleware Here ------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ------ Serve Up Static Assets (usually on heroku) ------
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ------ Use apiRoutes ------
app.use(routes);

// ------ Connect to Database ------
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// ------ Start App ------
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
