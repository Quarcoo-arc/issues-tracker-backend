const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/config");
const app = express();
const port = process.env.PORT || 3000;

dbConnect();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Issues App Running!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port} 🚀`);
});
