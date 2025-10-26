require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require('./routes/authRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

// -------------------------
// CORS Middleware
// -------------------------
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // e.g., https://aurora-ai-invoice-generator-3.onrender.com
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // required if frontend sends cookies or auth headers
  })
);

// -------------------------
// Connect Database
// -------------------------
connectDB();

// -------------------------
// Middleware
// -------------------------
app.use(express.json());

// -------------------------
// API Routes
// -------------------------
app.use("/api/auth", authRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/ai", aiRoutes);

// -------------------------
// Serve frontend in production
// -------------------------
if (process.env.NODE_ENV === "production") {
  const frontendDist = path.join(__dirname, "../frontend/invoice-generator/dist");
  app.use(express.static(frontendDist));

  // Catch-all route to serve index.html for React Router
  app.get("/*", (req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

// -------------------------
// Start Server
// -------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
