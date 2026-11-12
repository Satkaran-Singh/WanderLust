require("dotenv").config();

const mongoose = require("mongoose");

const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const initData = require("./data.js");

const categories = [
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
];

async function main() {
    let session;

    try {
        // 1. Connect to MongoDB Atlas
        if (!process.env.ATLASDB_URL) {
            throw new Error("ATLASDB_URL is missing from .env");
        }

        await mongoose.connect(process.env.ATLASDB_URL);

        console.log("Connected to MongoDB Atlas!");

        // 2. Validate dataset
        const data = initData.data;

        if (data.length !== 50) {
            throw new Error(
                `Expected 50 listings, found ${data.length}`
            );
        }

        // Check unique image URLs
        const uniqueImages = new Set(
            data.map(listing => listing.image?.url)
        );

        if (uniqueImages.size !== 50) {
            throw new Error("Duplicate or missing image URLs detected!");
        }

        // Check category distribution
        for (const category of categories) {
            const count = data.filter(
                listing => listing.category === category
            ).length;

            if (count !== 5) {
                throw new Error(
                    `${category} must contain exactly 5 listings. Found: ${count}`
                );
            }
        }

        // Check required fields
        for (const [index, listing] of data.entries()) {
            if (
                !listing.title ||
                !listing.description ||
                !listing.image?.url ||
                !listing.image?.filename ||
                !listing.price ||
                !listing.location ||
                !listing.country ||
                !listing.geometry ||
                listing.geometry.type !== "Point" ||
                !Array.isArray(listing.geometry.coordinates) ||
                listing.geometry.coordinates.length !== 2
            ) {
                throw new Error(
                    `Invalid listing data at index ${index}: ${listing.title || "Unknown listing"}`
                );
            }
        }

        console.log("Dataset validation successful!");
        console.log("Total listings: 50");
        console.log("Unique images: 50");
        console.log("Categories: 10 (5 listings each)");

        // 3. Start MongoDB transaction
        session = await mongoose.startSession();

        await session.withTransaction(async () => {

            // Find existing administrator
            const admin = await User.findOne({
                username: "Satkaran_Singh",
                isAdmin: true
            }).session(session);

            if (!admin) {
                throw new Error("Administrator account not found!");
            }

            // Prevent accidental duplicate insertion
            const existingCount = await Listing.countDocuments({})
                .session(session);

            if (existingCount > 0) {
                throw new Error(
                    `Database already contains ${existingCount} listings. Seeding cancelled.`
                );
            }

            // Assign administrator as owner
            const listingsToInsert = data.map(listing => ({
                ...listing,
                owner: admin._id
            }));

            // Insert all 50 listings
            const insertedListings = await Listing.insertMany(
                listingsToInsert,
                { session }
            );

            console.log(
                `Successfully inserted ${insertedListings.length} listings!`
            );
        });

        console.log("\nDatabase seeding completed successfully!");

    } catch (error) {
        console.error("\nSeeding Error:", error.message);
        process.exitCode = 1;

    } finally {
        if (session) {
            await session.endSession();
        }

        await mongoose.disconnect();

        console.log("\nDatabase connection closed.");
    }
}

main();