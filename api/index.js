
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the CORS middleware
dotenv.config();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
const authRoute = require("./roots/auth");
const moviesRoute = require("./roots/movies");
const theaterRoute = require("./roots/theaters");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to MongoDB");
}

app.use("/api/theater", theaterRoute);
app.use("/api/auth", authRoute);
app.use("/api/movie", moviesRoute);
app.listen(5000, () => {
  console.log("Backend is running");
});
