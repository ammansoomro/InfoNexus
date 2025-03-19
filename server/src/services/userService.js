const User = require('../models/User');
const CryptoJS = require('crypto-js');

exports.updateUser = async (userId, data) => {
    if (data.password) {
        data.password = CryptoJS.AES.encrypt(data.password, process.env.PASS_SEC).toString();
    }
    return await User.findByIdAndUpdate(userId, { $set: data }, { new: true });
};

exports.deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};

exports.getUserById = async (userId) => {
    const user = await User.findById(userId);
    if (user) {
        const { password, ...others } = user._doc;
        return others;
    }
    return null;
};

exports.getAllUsers = async (isNew) => {
    return isNew ? await User.find().sort({ _id: -1 }).limit(6) : await User.find();
};

exports.getUserStats = async () => {
    return await User.aggregate([
        { $project: { month: { $month: '$createdAt' } } },
        { $group: { _id: '$month', total: { $sum: 1 } } },
    ]);
};

exports.changePassword = async (userId, oldPassword, newPassword) => {
    const user = await User.findById(userId);
    if (user) {
        const decryptedPass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8);
        if (decryptedPass === oldPassword) {
            user.password = CryptoJS.AES.encrypt(newPassword, process.env.PASS_SEC).toString();
            await user.save();
            return { success: true, message: 'Password has been changed' };
        } else {
            return { success: false, message: 'Wrong password' };
        }
    }
    return { success: false, message: 'User not found' };
};
