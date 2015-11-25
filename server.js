var express = require("express");
var app = express();
var port = process.env.PORT;

// Templating engine
app.set("views", __dirname + "/views");
app.set("view engine", "jade");

// Set route for static content
app.use(express.static(__dirname + "/bower_components"));
app.use(express.static(__dirname + "/public"));

// Routes
app.use(require("./routes"));

// Start server
app.listen(port,function(){
  console.log("Live at Port " + port);
});
