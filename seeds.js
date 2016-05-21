/**
 * This file sends a request to the activities endpoint and seeds the database with the response using
 * the Activity model
 **/
var mongoose = require("mongoose");
var request = require("request");
var Activity = require("./models/activity");

function seedDB(){
  Activity.remove({}, function(err){
    if(err){
      console.log(err);
    }
  });
  console.log("Removed all Activities");
  request("https://nuvi-challenge.herokuapp.com/activities", function(error, res, data) {
    if (!error && res.statusCode == 200) {
      JSON.parse(data).forEach(function(seed){
        Activity.create(seed, function(err, activity){
          if(err){
            console.log(err);
          } else {
            activity.save();
          }
        });
      });
      console.log("Added Activities");
    }
  });
}

module.exports = seedDB;
