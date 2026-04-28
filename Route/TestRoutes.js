const express = require("express");
const router = express.Router();

// ✅ IMPORTANT: use Models (capital M)
const Test = require("../Models/Test");

router.post("/", async (req, res) => {
  try {
    const test = new Test(req.body);
    await test.save();
    res.json(test);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  const tests = await Test.find();
  res.json(tests);
});

router.get("/:id", async (req, res) => {
  const test = await Test.findById(req.params.id);
  res.json(test);
});

module.exports = router;