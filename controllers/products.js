const Product = require("../models/Product");

module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  postProduct: async (req, res, next) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
