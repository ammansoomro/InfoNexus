const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        default: ""
    },
    backgroundpicture: {
        type: String,
        default: ""
    },
    about : {
        type: String,
        default: ""
    },
    studyplan: {
        type: String,
        default: ""
    },
    code: {
        type: String,
        default: ""
    }
}, { timestamps: true });

module.exports = mongoose.model("Department", DepartmentSchema);
