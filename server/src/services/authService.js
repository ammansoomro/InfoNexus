const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (data) => {
    const { username, email, password } = data;

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        throw new Error('Username or email already exists');
    }

    // Encrypt password
    const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();

    // Save new user to DB
    const newUser = new User({ username, email, password: encryptedPassword });
    return await newUser.save();
};

// Login user
exports.loginUser = async ({ username, password }) => {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) throw new Error('Wrong username or password');

    // Decrypt stored password
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    
    // Validate password
    if (originalPassword !== password) throw new Error('Wrong username or password');

    // Generate JWT token (valid for 1 year)
    const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.PASS_SEC,
        { expiresIn: '1y' }
    );

    // Exclude password from response
    const { password: _, ...userData } = user._doc;
    return { userData, accessToken };
};
