const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//ROUTES
const productsRoute = require("./routes/products");

//ROUTE MIDDLEWARES
app.use("/api/products", authRoute);

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
