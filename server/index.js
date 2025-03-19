require("dotenv").config(); 
const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser"); // For handling cookies
const { connectDB } = require("./src/config/db");
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const courseRoutes = require('./src/routes/courseRoutes');
const departmentRoutes = require('./src/routes/departmentRoutes');
const announcementRoutes = require('./src/routes/announcementRoutes');
const eventRoutes = require('./src/routes/eventRoutes');
const facultyRoutes = require('./src/routes/facultyRoutes');
const projectRoutes = require('./src/routes/projectRoutes');
const reviewFacultyRoutes = require('./src/routes/reviewFacultyRoutes');
const reviewCourseRoutes = require('./src/routes/reviewCourseRoutes');
const materialRoutes = require('./src/routes/materialRoutes');
const societyRoutes = require('./src/routes/societyRoutes');


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser()); // Middleware for handling cookies

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/department', departmentRoutes);
app.use('/api/announcement', announcementRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/reviewCourse', reviewCourseRoutes);
app.use('/api/reviewFaculty', reviewFacultyRoutes);
app.use('/api/material', materialRoutes);
app.use('/api/society', societyRoutes);

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
