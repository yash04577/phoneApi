const mongoose = require("mongoose");

const ProductSchmea = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    feature: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi", "realme"],
            message: `{VALUE} is not supported`
        }
    }
});

module.exports = mongoose.model("Product", ProductSchmea);