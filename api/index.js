import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

import connectDB from "./config/dbConn.js";

connectDB();

const PORT = process.env.PORT || 8080;
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("hello");
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
  });
});
