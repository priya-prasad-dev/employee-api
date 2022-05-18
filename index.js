const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const empRoute = require("./routes/empRoute");

const app = express();

app.use(express.json(), cors());

app.use("/", empRoute);

// Database Connection String
const url =
  "mongodb+srv://Priya_Prasad_NEW:Priya123@cluster0.7y6kf.mongodb.net/employee?retryWrites=true&w=majority";
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("App listening on port 8080");
});