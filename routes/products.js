const router = require("express").Router();
const ProductsController = require("../controllers/products");

router.route("/").get(ProductsController.getAllProducts);

module.exports = router;
