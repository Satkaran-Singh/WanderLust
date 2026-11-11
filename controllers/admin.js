const Contact = require("../models/contact");
const flashRedirect = require("../utils/flashRedirect");

module.exports.renderDashboard = async (req, res) => {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.render("admin/dashboard.ejs", { contacts });
};

module.exports.deleteContact = async (req, res, next) => {
    let { id } = req.params;

    await Contact.findByIdAndDelete(id);

    req.flash("success", "Contact message deleted successfully!");
    flashRedirect(req, res, next, "/admin/dashboard");
};