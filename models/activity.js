var mongoose = require("mongoose");

var activitySchema = new mongoose.Schema({
    id: String,
    actor_username: String,
    actor_description: String,
    actor_name: String,
    actor_avator: String,
    actor_url: String,
    provider: String,
    activity_url: String,
    activity_latitude: String,
    activity_longitude: String,
    activity_date: String,
    activity_message: String,
    activity_likes: Number,
    activity_shares: Number,
    activity_comments: Number,
    activity_attachment: String,
    activity_attachment_type: String,
    activity_sentiment: Number
});

module.exports = mongoose.model("Activity", activitySchema);