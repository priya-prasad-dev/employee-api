const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
    EmpId: {
        type: Number,
        required: true,
    },
    EmpName: {
        type: String,
        required: true,
    },
    Mobile: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("employee", EmpSchema);