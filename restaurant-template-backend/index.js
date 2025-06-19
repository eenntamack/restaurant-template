import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
// Import routes
import { router as employee } from "./routes/employee.js";
import { router as guests } from "./routes/guests.js";
import { router as inventory } from "./routes/inventory.js";
import { router as products } from "./routes/products.js";
import { router as login } from "./routes/login.js";

// Load environment variables


const app = express();

const PORT = process.env.PORT || 5050;

// Connect to MongoDB
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ Connected to MongoDB");
} catch (err) {
  console.error("❌ MongoDB connection error:", err);
}

// Middleware


// ✅ Place CORS and body parser middleware before all routes
app.use(cors({
  origin: 'http://localhost:5173',  // React dev server
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());


// Routes
app.use("/employee", employee);
app.use("/guests", guests);
app.use("/inventory", inventory);
app.use("/products", products);
app.use("/api/authenticate", login);

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Backend is live" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});