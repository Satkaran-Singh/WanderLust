module.exports = (req, res, next, url) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }

        res.redirect(url);
    });
};