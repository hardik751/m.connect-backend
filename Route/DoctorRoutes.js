const express = require("express");
const bcrypt = require("bcryptjs");
const Doctor = require("../Models/Doctor");

const router = express.Router();

// Register Doctor
router.post("/DRregister", async (req, res) => {
  try {
    const { name, email, phone, specialization, password } = req.body;

    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const doctor = new Doctor({
      name,
      email,
      phone,
      specialization,
      password: hashedPassword,
    });

    await doctor.save();

    res.status(201).json({ message: "Doctor Registered Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;