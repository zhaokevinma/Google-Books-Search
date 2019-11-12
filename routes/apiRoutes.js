const axios = require("axios");
const router = require("express").Router();
const queryURL = "https://www.googleapis.com/books/v1/volumes?q=";
const API_KEY = process.env.API_KEY;

router.get("/recipes", (req, res) => {
  axios
    .get(`${queryURL}${req.query }&key=${API_KEY}`)
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
