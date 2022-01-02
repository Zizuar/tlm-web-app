const Order = require('../models/Order');
const mongoose = require('mongoose');

// POST new Order
exports.order_create_post = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const orderCart = req.body.cart.map(cartItem => {
      return {
        productName: cartItem.product.name,
        signatureName: cartItem.signatureRequested.requested ? cartItem.signatureRequested.toWhom : ''}
    });
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
      shippingPrice: calculateShipping(req.body.country),
      productsPrice: calculateProductsPrice(req.body.cart),
      cart: orderCart
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

function calculateShipping(country) {
  const domesticShippingCountries = ['United States of America', 'American Samoa', 'Guam', 'Marshall Islands',
    'Micronesia (Federated States of)', 'Northern Mariana Islands', 'Palau', 'Puerto Rico',
    'United States Minor Outlying Islands', 'Virgin Islands (U.S.)'];
  return country === 'Canada' ? 10
    : domesticShippingCountries.includes(country) ? 7 : 15;
}

function calculateProductsPrice(cart) {
  const discount = (cart.find(cartItem => cartItem.product.name === 'Songs for Being Alone CD') &&
    cart.find(cartItem => cartItem.product.name === 'Tyler Levs EP (2019) CD'))
    ? 500 : 0;
  let productsPrice = 0;
  cart.forEach(cartItem => {
    productsPrice += cartItem.product.price
  });
  return (productsPrice - discount)/100;
}
