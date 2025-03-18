require("dotenv").config(); 
const express = require("express");
const cookieParser = require("cookie-parser"); // For handling cookies
const { connectDB } = require("./src/config/db");
const authRoutes = require('./src/routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser()); // Middleware for handling cookies

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/auth', authRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message || "Internal Server Error" });
});

// Start server only after DB is connected
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
    console.error("Failed to start server:", error);
});
