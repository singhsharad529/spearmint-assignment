const express = require("express");

const router = express.Router();

const Book = require("../Models/user.model");

//Get all the books
router.get("/", async (req, res) => {
  try {
    const results = await Book.find({}, { __v: 0 });
    res.send(results);
  } catch (error) {
    console.log(error.message);
  }
});

//Create a new book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    const result = await book.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

//Get a single book by id
router.get("/:id", (req, res) => {
  console.log("getting a single book");
});

//Update a book by id
router.patch("/:id", (req, res) => {
  console.log("updating a single bookd");
});

//Delete a book by id
router.delete("/:id", (req, res) => {
  console.log("delete a book");
});

module.exports = router;
