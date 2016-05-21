var express = require("express");
var mongoose = require("mongoose");
var SeedDB = require("./seeds");
var Activity = require("./models/activity");
var app = express();

mongoose.connect("mongodb://localhost/nuvi_activities");
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

SeedDB();

//index
app.get("/", function(req, res){
  res.redirect("/activity");
});

//index
app.get("/activity", function(req, res) {
  Activity.find({}, function(err, allActivities){
    if(err){
      console.log(err);
      res.render("error", {error: err});
    } else{
      res.render("index", {activities:allActivities});
    }
  });
});

//like
app.get("/activity/:id/like", function(req,res){
  Activity.findById(req.params.id).exec(function(err, foundActivity){
    if(err){
      console.log(err);
      res.render("error", {error: err});
    } else {
      foundActivity.activity_likes += 1;
      foundActivity.save(function(err){
        if(err){
          console.log(err);
          res.render("error", {error: err});
        }
      });
      res.json({likes: foundActivity.activity_likes}); 
    }
  });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started");
});
