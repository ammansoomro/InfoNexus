require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db"); 

const app = express();
const PORT = 5000;

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
    console.error("Failed to start server:", error);
});
