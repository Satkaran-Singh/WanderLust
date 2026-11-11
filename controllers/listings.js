const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const categoryMap = {
    trending: "Trending",
    rooms: "Rooms",
    iconicCities: "Iconic Cities",
    mountains: "Mountains",
    castles: "Castles",
    amazingPools: "Amazing Pools",
    camping: "Camping",
    farms: "Farms",
    arctic: "Arctic",
    other: "Other"
};

module.exports.index  = async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs", { listing: null });
};

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate: {
            path: "author"
        },
    })
    .populate("owner");
    if(!listing) {
        req.flash("error","Listing you request does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
};

module.exports.createListing = async(req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
  .send()

  const feature = response.body.features[0];
    if (!feature) {
        req.flash("error", "Invalid location! Please enter a valid location.");
        return res.status(400).render("listings/new.ejs", {
        listing: req.body.listing,
        error: req.flash("error")
    });
    }
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    newListing.geometry = feature.geometry;
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created Succesfully!");
    res.redirect("/listings")
}

module.exports.renderEditForm = async(req, res) => {
    let {id} =req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error","Listing you requested for editing does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url.replace("/upload/h_300,w_250", "/upload");
    res.render("listings/edit.ejs", {listing, originalImageUrl});
};

module.exports.updateListing = async (req,res) => {
    let {id} = req.params;
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    }).send();
    const feature = response.body.features[0];
    if (!feature) {
        req.flash("error", "Invalid location! Please enter a valid location.");
        return res.redirect(`/listings/${id}/edit`);
    }

    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing, geometry: feature.geometry});

    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success", "Listing Updated Succesfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async(req,res) => {
    let {id} = req.params;
    let deleted_listing = await Listing.findByIdAndDelete(id);
    console.log(deleted_listing);
    req.flash("success", "Listing Deleted Succesfully!");
    res.redirect("/listings");
};

module.exports.filterListing = async (req,res) => {
    let {category} = req.params;
    let selectedCategory = categoryMap[category];
    if (!selectedCategory) {
        req.flash("error", "Category not found!");
        return res.redirect("/listings");
    }
    const categoryListings = await Listing.find({category: selectedCategory});
    if (categoryListings.length === 0) {
        req.flash("error", `No listing exists in ${selectedCategory} yet!`);
        return res.redirect("/listings");
    }
    res.render("listings/index.ejs", {allListings: categoryListings });
};

module.exports.searchListing = async (req, res) => {
    let { q } = req.query;
    if(!q || !q.trim()){
        req.flash("error", "Invalid search input. Please try again with valid input!!")
        return res.redirect("/listings");
    }
    let data = q.trim();
    let foundListing = await Listing.find({
        $or: [
            {title: {$regex: data, $options: "i"}},
            {description: {$regex: data, $options: "i"}},
            {price: !isNaN(data) ? Number(data) : null},
            {location: {$regex: data, $options: "i"}},
            {country: {$regex: data, $options: "i"}},
            {category: {$regex: data, $options: "i"}}
        ].filter(condition => condition !== null)
    });
    if(foundListing.length === 0){
        req.flash("error", "No data is found. Please try again!!")
        return res.redirect("/listings");
    }
    req.flash("success", `Listings found for ${data}`);
    res.render("listings/index.ejs", {allListings: foundListing});
};

module.exports.liveSearch = async (req, res) => {
    let { q } = req.query;

    if (!q || !q.trim()) {
        return res.json([]);
    }

    let data = q.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    let foundListing = await Listing.find({
        $or: [
            { title: { $regex: data, $options: "i" } },
            { location: { $regex: data, $options: "i" } },
            { country: { $regex: data, $options: "i" } },
            { category: { $regex: data, $options: "i" } },
            {description: {$regex: data, $options: "i"}},
            {price: !isNaN(data) ? Number(data) : null}
        ]
    })
    .select("title location country image price category descrription")
    .limit(8);

    res.json(foundListing);
};