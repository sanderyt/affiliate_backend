const router = require("express").Router();
const ProductsController = require("../controllers/products");

router.route("/").get(ProductsController.getAllProducts);
router.route("/").post(ProductsController.postProduct);

module.exports = router;
