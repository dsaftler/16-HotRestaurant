const express = require("express");
const path = require("path");

const app  = express();
const PORT = 3000;
app.use(express.urlencoded({extended: true})) ;
app.use(express.json());

require("./routes/html_routes")(app);
require("./routes/api_routes")(app);

app.listen(PORT, function(){
  console.log("app listening on port: " + PORT);
});
