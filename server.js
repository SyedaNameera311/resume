const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();

// MongoDB Connect
connectDB();

// Middleware
app.use(
  cors({
    origin: "https://frontend-lime-eight-81.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Auth Routes
app.use("/api/auth", authRoutes);

// Start Server
// Server Port configuration (Railway isko automatic configure kar lega)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});