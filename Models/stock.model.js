const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema(
  {
    stock: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("stock", StockSchema);
module.exports = Stock;
