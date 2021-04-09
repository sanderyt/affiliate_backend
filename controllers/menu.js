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
    const allMenuItems = await Menu.find();
    const newMenu = new Menu({ ...req.body, id: allMenuItems.length });

    const alreadyExists = await Menu.findOne({ name: newMenu.name });

    if (alreadyExists) {
      return res.status(400).json("Deze categorie bestaat al");
    }

    try {
      await newMenu.save();
      res.status(200).json(newMenu);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  editMenu: async (req, res, next) => {
    const { menuItems } = req.body;

    await Menu.deleteMany({});

    try {
      menuItems.map(async (item, index) => {
        const newItem = new Menu({ ...item, id: index });
        await newItem.save();
      });
      res.status(200).json("Saved all the items");
    } catch (error) {
      res.status(400).json(error);
    }
  },

  deleteMenu: async (req, res, next) => {
    const { name } = req.body;
    try {
      await Menu.deleteOne({ name });
      res.status(200).json("Het item is verwijderd");
    } catch (error) {
      res.status(400).json(error);
    }
  }
};
