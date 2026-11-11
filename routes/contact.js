const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const contactController = require("../controllers/contacts");

// Display contact form
router.get("/", contactController.renderContactForm);

// Submit contact form
router.post("/", wrapAsync(contactController.submitContactForm));

module.exports = router;