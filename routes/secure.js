var express = require("express");
var router = express.Router();
var auth = require("../middleware/auth");

// Index
router.get("/", auth, function(req,res){
    res.render("secure/index", {"page":"secure"});
});

module.exports = router;