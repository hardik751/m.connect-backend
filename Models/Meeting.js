const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  link: String,
  participant: String, // student / parent / both
});

module.exports = mongoose.model("Meeting", meetingSchema);