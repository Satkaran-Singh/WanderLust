const Contact = require("../models/contact");
const flashRedirect = require("../utils/flashRedirect");

module.exports.renderContactForm = (req, res) => {
    res.render("contacts/contact.ejs");
};

module.exports.submitContactForm = async (req, res, next) => {
    let { name, email, message } = req.body;

    let newContact = new Contact({
        name,
        email,
        message,
    });

    await newContact.save();

    req.flash("success", "Your message has been submitted successfully!");

    flashRedirect(req, res, next, "/contact");
};