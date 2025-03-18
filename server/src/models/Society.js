const mongoose = require('mongoose');

const SocietySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ''
    },
    picture: {
        type: String,
        default: ''
    },
    background: {
        type: String,
        default: ''
    },
    code: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Society', SocietySchema);
