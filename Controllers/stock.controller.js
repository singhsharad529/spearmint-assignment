const createError = require("http-errors");
const mongoose = require("mongoose");
const Stock = require("../Models/stock.model");

module.exports = {
  getAllStocks: async (req, res, next) => {
    try {
      const results = await Stock.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewStock: async (req, res, next) => {
    try {
      const stock = new Stock(req.body);
      const result = await stock.save();
      res.send(result);
    } catch (error) {
      if (error.name === "ValidationError") {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  findStockById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const stock = await Stock.findById(id);
      if (!stock) {
        throw createError(404, "Stock does not exist");
      }
      res.send(stock);
    } catch (error) {
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Stock Id"));
        return;
      }
      next(error);
    }
  },
};
