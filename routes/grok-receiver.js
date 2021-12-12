const express = require("express");
const grok = require("grok-js").loadDefaultSync();
const grokController = require("../controllers/grokController");
const router = express.Router();

// grok
router.post("/grok", grokController.setData);

module.exports = router;
