const Menu = require("../models/Menu");

module.exports = {
  getMenu: async (req, res, next) => {
    try {
      const menuItems = await Menu.find();
      res.status(200).json(menuItems);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  postMenu: async (req, res, next) => {
    const newMenu = new Menu(req.body);

    const alreadyExists = await Menu.findOne({ name: newMenu.name });

    if (alreadyExists) {
      return res.status(400).json("Deze category bestaat al");
    }

    try {
      await newMenu.save();
      res.status(200).json(newMenu);
    } catch (error) {
      res.status(400).json("Could not save menu item");
    }
  },

  deleteMenu: async (req, res, next) => {
    const { name } = req.body;
    try {
      await Menu.deleteOne({ name });
      res.status(200).json("Het item is verwijderd");
    } catch (error) {
      res.status(400).json("Could not delete item.");
    }
  }
};
