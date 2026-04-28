const express = require("express");
const router = express.Router();
const Meeting = require("../Models/Meeting");

// CREATE
router.post("/", async (req, res) => {
  const meeting = new Meeting(req.body);
  await meeting.save();
  res.json(meeting);
});

// GET ALL
router.get("/", async (req, res) => {
  const meetings = await Meeting.find();
  res.json(meetings);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Meeting.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// UPDATE (Reschedule)
router.put("/:id", async (req, res) => {
  const updated = await Meeting.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

module.exports = router;