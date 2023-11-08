const express = require("express");
const creatError = require("http-errors");
const dotenv = require("dotenv").config();

const app = express();

const booksRoutes = require("./Routes/books.route");

//Parsing body string into json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initialize db
require("./initDB")();

//routes to access books endpoints
app.use("/books", booksRoutes);

//for invalid urls
app.use((req, res, next) => {
  next(creatError(404, "Not Found"));
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
