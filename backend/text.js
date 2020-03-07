const mongoose = require('mongoose');

//File Schema
const TextSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { timestamps: true });

const Text = module.exports = mongoose.model('Text', TextSchema);