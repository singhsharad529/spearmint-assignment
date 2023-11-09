const express = require("express");

const router = express.Router();

const stockController = require("../Controllers/stock.controller");

//Get all the books
router.get("/", stockController.getAllStocks);

//Create a new book
router.post("/", stockController.createNewStock);

//Get a single book by id
router.get("/:id", stockController.findStockById);

module.exports = router;
