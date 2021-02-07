const express = require("express");
var path = require('path')

const pendulumRefresh = require("../apis/routes/pendulumRefresh.js");

const app = express();

app.use(express.static(__dirname+'/../frontend/'));
app.use("/refresh", pendulumRefresh);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname+'/../frontend/index.html'));
});

app.listen(80);

