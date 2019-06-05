const tables= require("../data/tables.js");
const waitList = require("../data/waitList.js");

module.exports = function(app){
app.get("/data/tables", function(req, res){
  return res.json(tables)
});
app.get("/data/waitList", function (req, res) {
  return res.json(waitList)
});
app.post("../data/tables.js", function(req, res){
    var newReserve = req.body;
    if (tables.length>=5) {
      app.post("../data/waitList.js", function (req, res) {
        waitList.push(newReserve)});
    } else {
        tables.push(newReserve);
    }
});
};
