const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  age: Number,
  password: String,
}, { timestamps: true });

module.exports = mongoose.model("Parent", parentSchema);