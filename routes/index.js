// ------ Dependencies ------

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


// ------ API Routes ------

router.use("/api", apiRoutes);

// If hitting no API routes, route to index.html
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


// ------ Export router ------

module.exports = router;