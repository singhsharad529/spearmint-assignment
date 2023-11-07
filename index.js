const express = require("express");
const mongoose = require("mongoose");

const app = express();

const booksRoutes = require("./Routes/books.route");

//Parsing body string into json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Mongo Connection
mongoose
  .connect("mongodb+srv://cluster0.x5agcuu.mongodb.net/", {
    dbName: "RestApi_brewapps",
    user: "singhsharad529",
    pass: "sharad123",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connected...");
  });

//routes to access books endpoints
app.use("/books", booksRoutes);

//for invalid urls
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
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

app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
