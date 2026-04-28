const express = require("express");
const router = express.Router();
const Result = require("../Models/Result"); // ✅ correct path

// SAVE RESULT
router.post("/", async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET RESULTS
router.get("/", async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; // ✅ VERY IMPORTANT