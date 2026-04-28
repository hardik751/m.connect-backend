const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Existing Routes
app.use("/api/doctors", require("./Route/DoctorRoutes"));
app.use("/api/parents", require("./Route/ParentRoutes"));
app.use("/api/students", require("./Route/StudentRoutes"));

// Test + Result Routes
app.use("/api/tests", require("./Route/TestRoutes"));
app.use("/api/results", require("./Route/resultRoutes"));


// ✅ ADD THIS (Meetings)
app.use("/api/meetings", require("./Route/MeetingRoutes"));

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));