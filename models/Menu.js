const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  depth: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Menu", menuSchema);
