const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/config");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./src/routes");

dbConnect();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Issues App Running!");
});

app.use("/issues", routes);

app.listen(port, () => {
  console.log(`App listening on port ${port} 🚀`);
});
