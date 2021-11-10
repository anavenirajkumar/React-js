const express = require("express");
const router = express.Router();

// middlewares

// controllers
const { upload, remove } = require("../controllers/cloudinary");

router.post("/uploadimages", upload);
router.post("/removeimage", remove);

module.exports = router;
