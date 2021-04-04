const router = require("express").Router();
const MenuController = require("../controllers/menu");

router.route("/").get(MenuController.getMenu);
router.route("/").post(MenuController.postMenu);

module.exports = router;
