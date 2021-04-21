'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
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
    wantsEP: Boolean,
    wantsSignature: Boolean,
    signatureName: String,
    otherRequests: String
});

module.exports = new mongoose.model("Order", orderSchema);