const mongoose = require("mongoose");

const subMenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("SubMenu", subMenuSchema);
