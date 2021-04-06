const router = require("express").Router();
const MenuController = require("../controllers/menu");

router.route("/").get(MenuController.getMenu);
router.route("/").post(MenuController.postMenu);
router.route("/").delete(MenuController.deleteMenu);

module.exports = router;
