const mongoose = require('mongoose');

//File Schema
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    count:{
        type: Number,
        required: true
    },
    lookupCode:{
        type: Number,
        required: true,
        unique: true
    }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);