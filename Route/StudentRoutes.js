const express = require("express");
const bcrypt = require("bcryptjs");
const Student = require("../Models/Student");

const router = express.Router();

// ✅ CLEAN ROUTE
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, age, password } = req.body;

    // Check if student exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create student
    const student = new Student({
      name,
      email,
      phone,
      age,
      password: hashedPassword,
    });

    await student.save();

    // ✅ ALWAYS RETURN JSON
    res.status(201).json({
      success: true,
      message: "Student Registered Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
