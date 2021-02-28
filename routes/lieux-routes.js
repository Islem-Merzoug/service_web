const express = require("express");
const router = express.Router();

const lieuxConroller = require("../Controllers/lieuxController");

router.get("/", lieuxConroller.getLieux);
router.get("/:id", lieuxConroller.getLieuxById);

module.exports = router;