// ------ Dependencies ------

const router = require("express").Router();
const bookRoutes = require("./books");


// ------ Router use bookRoutes ------

router.use("/books", bookRoutes);


// ------ Export router ------

module.exports = router;