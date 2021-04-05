const Menu = require("../models/Menu");

module.exports = {
  getMenu: async (req, res, next) => {
    try {
      const menuItems = await Menu.find();
      console.log(menuItems, "menuItems");
      res.status(200).json(menuItems);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  postMenu: async (req, res, next) => {
    const newMenu = new Menu(req.body);

    try {
      await newMenu.save();
      res.status(200).json(newMenu);
    } catch (error) {
      res.status(400).json("Could not save menu item");
    }
  }
};
