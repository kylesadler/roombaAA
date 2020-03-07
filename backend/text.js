const mongoose = require('mongoose');

//File Schema
const TextSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Text = module.exports = mongoose.model('Text', TextSchema);