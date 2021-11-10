const express = require("express");
const router = express.Router();

// controller
const {
  create,
  read,
  update,
  remove,
  list,
  getSubs,
} = require("../controllers/category");

// routes
router.post("/category",  create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", update);
router.delete("/category/:slug", remove);
router.get("/category/subs/:_id", getSubs);

module.exports = router;
