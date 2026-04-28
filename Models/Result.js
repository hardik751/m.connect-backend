const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userType: String, // student / parent
  score: Number,
  total: Number,
  testId: String,
});

module.exports = mongoose.model("Result", resultSchema);  