module.exports = function(app) {
    
    // Home
    app.get("/", function(req,res){
        res.render("index", {"page":"home"});
    });
    
    // About
    app.get("/about", function(req,res){
       res.render("about", {"page":"about"}); 
    });
    
    // Login
    app.get("/login", function(req,res){
       res.render("login", {"page":"login"}); 
    });
}