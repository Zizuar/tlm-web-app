'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    mailName: {
        type: String,
        required: true
    },
    street1: {
        type: String,
        required: true
    },
    street2: String,
    city: {
        type: String,
        required: true
    },
    state: String,
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    cart: [{productName: String, signatureName: String}],
    shippingPrice: Number,
    productsPrice: Number,
    otherRequests: String
});

module.exports = new mongoose.model("Order", orderSchema);
