const userService = require('../services/userService');

const updateUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const updatedUser = await userService.updateUser(req.params.id, req.body);
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('You can update only your account');
    }
};

const deleteUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await userService.deleteUser(req.params.id);
            res.status(200).json('User has been deleted');
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('You can delete only your account');
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json('User not found');
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers(req.query.new);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUserStats = async (req, res) => {
    try {
        const stats = await userService.getUserStats();
        res.status(200).json(stats);
    } catch (err) {
        res.status(500).json(err);
    }
};

const changePassword = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const result = await userService.changePassword(req.params.id, req.body.oldPassword, req.body.password);
            res.status(result.success ? 200 : 403).json(result.message);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('You can update only your account');
    }
};

module.exports = { updateUser, deleteUser, getUserById, getAllUsers, getUserStats, changePassword };
