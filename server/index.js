require("dotenv").config(); 
const express = require("express");
const cookieParser = require("cookie-parser"); // For handling cookies
const { connectDB } = require("./src/config/db");
const authRoutes = require('./src/routes/authRoutes');
const courseRoutes = require('./src/routes/courseRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const eventRoutes = require('./routes/eventRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const projectRoutes = require('./routes/projectRoutes');
const reviewCourseRoutes = require('./routes/reviewCourseRoutes');
const materialRoutes = require('./routes/materialRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser()); // Middleware for handling cookies

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/department', departmentRoutes);
app.use('/api/announcement', announcementRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/reviewCourse', reviewCourseRoutes);
app.use('/api/material', materialRoutes);

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
