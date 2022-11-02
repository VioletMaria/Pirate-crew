const express = require("express");
const cors = require("cors");
const app = express();
require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./server/routes/pirate.routes")(app);
app.get("/", function (req, res) {
  res.redirect("/pirate");
});
app.get("/pirate", function (req, res) {
  res.send("Redirected to User Page");
});
app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
