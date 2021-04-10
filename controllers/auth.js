const User = require("../models/User");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

module.exports = {
  register: async (req, res, next) => {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(400).json("This user already exists");
    }

    try {
      const salt = await bcrypt.genSalt(SALT_ROUNDS);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({ email, password: hashedPassword });
      const savedUser = await newUser.save();

      res.status(200).json(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  login: async (req, res, next) => {
    try {
      res.status(200).json("login endpoint");
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
