const express = require("express");
const bcrypt = require("bcryptjs");
const Parent = require("../Models/Parent");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, age, password } = req.body;

    const existingParent = await Parent.findOne({ email });
    if (existingParent) {
      return res.status(400).json({ message: "Parent already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const parent = new Parent({
      name,
      email,
      phone,
      age,
      password: hashedPassword,
    });

    await parent.save();

    res.status(201).json({ message: "Parent Registered Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;