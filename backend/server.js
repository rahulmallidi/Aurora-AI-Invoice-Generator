require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

const allowedOrigins = [
  "https://aurora-ai-invoice-generator-3.onrender.com", // your frontend Render URL
  "http://localhost:5173" // local dev (optional)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/ai", aiRoutes);

if (process.env.NODE_ENV === "production") {
  const frontendDist = path.join(__dirname, "../frontend/invoice-generator/dist");
  app.use(express.static(frontendDist));
  
  // ✅ FIXED: Use wildcard middleware instead of route
  app.use((req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
