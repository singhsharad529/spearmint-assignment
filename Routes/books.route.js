const express = require("express");
const createError = require('http-errors')
const mongoose = require('mongoose');
const router = express.Router();

const Book = require("../Models/user.model");

//Get all the books
router.get("/", async (req, res, next) => {
  try {
    const results = await Book.find({}, { __v: 0 });
    res.send(results);
  } catch (error) {
    console.log(error.message);
  }
});

//Create a new book
router.post("/", async (req, res, next) => {
  try {
    const book = new Book(req.body);
    const result = await book.save();
    res.send(result);
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(createError(422, error.message));
      return;
    }
    next(error);
  }
});

//Get a single book by id
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (!book) {
      throw createError(404, "Book does not exist");
    }
    res.send(book);
  }
  catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid Book Id"))
      return;
    }
    next(error);
  }
});

//Update a book by id
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true }
    const result = await Book.findByIdAndUpdate(id, updates, options);
    if (!result) {
      throw createError(404, "Book does not exist");
    }
    res.send(result);
  }
  catch (error) {
    if (error instanceof mongoose.CastError) {
      return next(createError(400, "Invalid Book Id"))

    }
    next(error);
  }
});

//Delete a book by id
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      throw createError(404, "Book does not exist");
    }
    res.send(book);
  }
  catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid Book Id"))
      return;
    }
    next(error);
  }
});

module.exports = router;
