const mongoose = require("mongoose");
const Stock = require("./Models/stock.model");

// Function to update stock prices every minute
function updateStockPrices() {
  setInterval(async () => {
    try {
      const stocks = await Stock.find();
      stocks.forEach(async (stock) => {
        // Generate random price update logic here
        stock.price = (Math.random() * 1000).toFixed(2);
        await stock.save();
        console.log("stocks changed");
      });
    } catch (error) {
      console.error(error);
    }
  }, 60000); // Update every minute
}

module.exports = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongo Connected...");
      // Start updating stock prices
      updateStockPrices();
    })
    .catch((err) => console.log(err.message));

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to db...");
  });

  mongoose.connection.on("error", (err) => {
    console.log(err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongo Connection Disconnected");
  });

  process.on("SIGINT", () => {
    mongoose.connection.close().then(() => {
      console.log(
        "Mongoose connection is disconnected due to app termination..."
      );
      process.exit(0);
    });
  });
};
