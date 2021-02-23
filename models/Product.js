const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    color:  {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('Product', ProductSchema);