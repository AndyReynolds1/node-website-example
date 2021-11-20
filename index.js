// Required External Modules
const express = require("express");
const path = require("path");
const os = require("os");
const app = express();
const hostname = os.hostname();

// App Configuration
var port = process.env.PORT || 8080;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// Routes Definitions
app.get("/", (req, res) => {
    res.render("home", { "hostname": hostname });
});

// Server Activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});