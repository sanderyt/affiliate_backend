const User = require("../models/User");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

module.exports = {
  register: async (req, res, next) => {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(400).json("This user already exists");
    }

    try {
      const salt = await bcrypt.genSalt(SALT_ROUNDS);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({ email, password: hashedPassword });
      const savedUser = await newUser.save();

      return res.status(200).json(savedUser);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  login: async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("The user was not found.");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).send("You entered a wrong password");
    }

    res.status(200).send("You logged in succesfully.");
  }
};
