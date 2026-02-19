import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.routes.js";

dotenv.config();

const app = express();

/* ================== MIDDLEWARE (ORDER MATTERS) ================== */

// CORS — MUST be before routes
app.use(
  cors({
    origin: "*", // allow all for now
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Handle preflight explicitly
app.options("*", cors());

// Parse JSON body
app.use(express.json());

/* ================== ROUTES ================== */

// Contact API
app.use("/api/contact", contactRoutes);

// Health check
app.get("/", (req, res) => {
  res.status(200).send("API running");
});

/* ================== DB + SERVER ================== */

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
