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
  subItems: [{ type: Schema.Types.ObjectId, ref: "SubMenu" }],
  depth: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Menu", menuSchema);
