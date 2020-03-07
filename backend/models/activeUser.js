const mongoose = require('mongoose');

const ActiveUserSchema = mongoose.Schema({
    employeeId:{ // references Employee schema 
        type: Number,
        required: true
    },
    sessionId: {
        type: String,
        required: true
    }
});

const ActiveUser = module.exports = mongoose.model('ActiveUser', ActiveUserSchema);