const router = require("express").Router();
const AuthController = require("../controllers/auth");

router.route("/register").post(AuthController.register);
router.route("/login").post(AuthController.login);

module.exports = router;
