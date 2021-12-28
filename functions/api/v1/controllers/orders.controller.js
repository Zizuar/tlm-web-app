const Order = require('../models/Order');
const mongoose = require('mongoose');

// POST new Order
exports.order_create_post = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    console.log('Adding new order...', req.body);
    const newOrder = new Order({
      email: req.body.email,
      mailName: req.body.name,
      street1: req.body.street1,
      street2: req.body.street2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country,
      otherRequests: req.body.other,
      cart: req.body.cart.map(cartItem => {
        console.log(cartItem);
        return {
          productName: cartItem.product.name,
          signatureName: cartItem.signatureRequested.requested ? cartItem.signatureRequested.toWhom : ''}
      })
    });
    await newOrder.save();
    await session.commitTransaction();
    await session.endSession();
    console.log('New order added!')
    res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
    await session.endSession();
    res.status(400).json({
      success: false,
      type: "database",
      message: error.toString()
    });
  }
};
