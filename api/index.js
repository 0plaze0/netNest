import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

import connectDB from "./config/dbConn.js";
import authRoute from "./routes/authRoutes.js";
connectDB();

const PORT = process.env.PORT || 8080;
const app = express();

//middleware

app.use(express.json());
//TO DO:remove morgan in production
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/v1/auth", authRoute);

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
  });
});
