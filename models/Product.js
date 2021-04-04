const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  unlocked: {
    type: Boolean,
    required: true
  },
  progress: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Product", productSchema);
