import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello ji");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server running on port " + port);
});
