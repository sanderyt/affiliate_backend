const Menu = require("../models/Menu");

module.exports = {
  getMenu: async (req, res, next) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  postMenu: async (req, res, next) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
