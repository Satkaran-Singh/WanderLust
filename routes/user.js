const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");
const flashRedirect = require("../utils/flashRedirect");

router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));

router.route("/login")
    .get(userController.renderLoginForm)
    .post(
        saveRedirectUrl,
        (req, res, next) => {
            passport.authenticate("local", (err, user, info) => {
                if (err) {
                    return next(err);
                }

                if (!user) {
                    req.flash("error", "Invalid username or password. Please try again.");
                    return flashRedirect(req, res, next, "/login");
                }

                req.logIn(user, (err) => {
                    if (err) {
                        return next(err);
                    }

                    next();
                });
            })(req, res, next);
        },
        userController.login
    );

router.get("/logout", userController.logout);

module.exports = router;