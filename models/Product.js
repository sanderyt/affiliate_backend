const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: false
  },
  brand: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false
  },
  deliveryTime: {
    type: String,
    required: false
  },
  EAN: {
    type: String,
    required: false
  },
  fromPrice: {
    type: Number,
    required: false
  },
  discount: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model("Product", productSchema);
