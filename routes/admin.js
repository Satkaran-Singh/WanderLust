const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isAdmin } = require("../middleware");
const adminController = require("../controllers/admin");

router.get(
    "/dashboard",
    isLoggedIn,
    isAdmin,
    wrapAsync(adminController.renderDashboard)
);
router.delete(
    "/contacts/:id",
    isLoggedIn,
    isAdmin,
    wrapAsync(adminController.deleteContact)
);

module.exports = router;