const express = require("express");

const router = express.Router();

const bookController = require("../Controllers/book.controller");

//Get all the books
router.get("/", bookController.getAllBooks);

//Create a new book
router.post("/", bookController.createNewBook);

//Get a single book by id
router.get("/:id", bookController.findBookById);

//Update a book by id
router.patch("/:id", bookController.updateBook);

//Delete a book by id
router.delete("/:id", bookController.deleteBook);

module.exports = router;
