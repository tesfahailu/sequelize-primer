const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("cooling");
  res.send("Hello there new world");
});

require("./src/database/connection");
require("./src/bootstrap")();

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});
