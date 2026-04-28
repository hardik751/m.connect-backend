const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  specialization: String,
  password: String,
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);