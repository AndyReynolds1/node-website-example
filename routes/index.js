var express = require("express");
var router = express.Router();

// Home
router.get("/", function(req,res){
    res.render("index", {"page":"home"});
});
    
// About
router.get("/about", function(req,res){
    res.render("about", {"page":"about"}); 
});

// Login
router.get("/login", function(req,res){
    res.render("login", {"page":"login"}); 
});

// Default route to catch 404 errors
router.use("*",function(req,res){
    res.render("404");
});

module.exports = router;