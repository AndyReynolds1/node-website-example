var express = require("express");
var router = express.Router();

router.use("/secure", require("./secure"));

// Home
router.get("/", function(req, res) {
    res.render("index", {
        "page": "home"
    });
});

// About
router.get("/about", function(req, res) {
    res.render("about", {
        "page": "about"
    });
});

// Login
router.get("/login", function(req, res) {
    res.render("login", {
        "page": "login"
    });
});

router.post("/login", function(req, res) {
    if (req.body.inputUsername === "example" && req.body.inputPassword === "password") {
        req.session.loggedIn = true;
        res.redirect("/secure");
    }

    res.render("login", {
        "page": "login",
        "loginFailed": true
    });
});

// Logout
router.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect("/");
});

// Default route to catch 404 errors
router.use("*", function(req, res) {
    res.render("404");
});

module.exports = router;