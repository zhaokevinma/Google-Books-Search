// ------ Dependencies ------

const router = require("express").Router();
const booksController = require("../../controllers/booksController");


// ------ "/api/books" ------

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);


// ------ "/api/books/:id" ------

router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);


// ------ Export router ------ 

module.exports = router;