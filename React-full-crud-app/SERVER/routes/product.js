const express = require("express");
const router = express.Router();

// middlewares

// controller
const {
  create,
  listAll,
  remove,
  read,
  update,
} = require("../controllers/product");

// routes
router.post("/product",  create);
router.get("/products/:count", listAll); // products/100
router.delete("/product/:slug", remove);
router.get("/product/:slug", read);
router.put("/product/:slug", update);

module.exports = router;
