import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 8080;
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
