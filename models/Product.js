const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide the name of the product'],
    },
    description: {
        type: String,
        required: [true, 'Please provide description of the product'],
    },
    price: {
        type: Number,
        required: [true, 'Please enter the product price'],
    },
});

module.exports = mongoose.model('Product', ProductSchema);