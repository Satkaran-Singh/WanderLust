const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({

    title: Joi.string().min(2).required(),

    description: Joi.string().min(3).required(),

    price: Joi.number().min(0).required(),

    location: Joi.string().min(2).required(),

    country: Joi.string().min(2).required(),

    image: Joi.string().uri().allow("", null),

    category: Joi.string()
    .valid(
        "Trending",
        "Rooms",
        "Iconic Cities",
        "Mountains",
        "Castles",
        "Amazing Pools",
        "Camping",
        "Farms",
        "Arctic",
        "Other"
    ).required(),

    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
})