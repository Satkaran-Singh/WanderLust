const User = require("../models/user.js");
const flashRedirect = require("../utils/flashRedirect");

module.exports.renderSignupForm = (req,res) =>{
    res.render("users/signup.ejs");
};

module.exports.signup = async(req, res, next) =>{
    try {
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "User registered successfully.... Welcome to Wanderlust!");
            flashRedirect(req, res, next, "/listings");
        })
    } catch(e) {
        req.flash("error", e.message);
        flashRedirect(req, res, next, "/signup");
    }
};

module.exports.renderLoginForm = (req,res) =>{
    res.render("users/login.ejs");
}

module.exports.login = async(req, res, next) => {
        req.flash("success", "Welcome back to Wanderlust!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        flashRedirect(req, res, next, redirectUrl);
}

module.exports.logout =(req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out sucessfully!");
        flashRedirect(req, res, next, "/listings");
    })
}