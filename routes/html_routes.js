// const table = require("../data/tables.js");
// const waitList = require("../data/waitList.js");
const path = require("path");

module.exports = function(app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,"../public/home.html"))
  });
  app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"))
  });
  app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname,"../public/tables.html"))
  });
};
