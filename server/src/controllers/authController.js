const authService = require('../services/authService');

// Register a new user
const register = async (req, res) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Login user
const login = async (req, res) => {
    try {
        const { userData, accessToken } = await authService.loginUser(req.body);

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 30 * 12 // 1 year
        });

        res.status(200).json({ ...userData, accessToken });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = { register, login };
