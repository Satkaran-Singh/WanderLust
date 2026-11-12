require("dotenv").config();

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");

// Five review styles for each property category
const reviewTemplates = {
    "Trending": [
        "The overall experience at this property was excellent. The setting around {location} made the stay even more memorable.",
        "Really enjoyed the atmosphere here. The property is beautifully presented and offers a lovely experience.",
        "A wonderful place to spend a few relaxing days. Everything felt comfortable and well thought out.",
        "The property has a special charm. It was a refreshing change from our usual accommodation.",
        "We had a pleasant stay overall. A few small improvements could make the experience even better."
    ],

    "Rooms": [
        "The room was comfortable and made a great base for exploring {location}. I would happily consider staying again.",
        "A pleasant room with a welcoming atmosphere. It worked perfectly for a short stay.",
        "Really appreciated the comfortable and private setting. The overall experience was smooth.",
        "The room was just what we needed after a long day of travelling. Good experience overall.",
        "A nice option for travellers looking for a comfortable place to stay. There is a little room for improvement."
    ],

    "Iconic Cities": [
        "Staying in {location} was a highlight of the trip. The property made exploring the city a wonderful experience.",
        "Loved the city atmosphere and the experience of staying here. It made our visit feel more memorable.",
        "A lovely place to return to after spending the day exploring the surrounding city.",
        "The property gave us a comfortable stay while enjoying everything {location} has to offer.",
        "Enjoyed the location and overall experience. Some minor details could be improved, but it was a good stay."
    ],

    "Mountains": [
        "The mountain surroundings were absolutely beautiful. Waking up in a peaceful setting like this was special.",
        "A refreshing escape from busy everyday life. The natural surroundings made the stay memorable.",
        "Loved the peaceful atmosphere and the feeling of being close to nature.",
        "The scenery around this property was the biggest highlight of our stay.",
        "A lovely mountain getaway. The experience was good, although a few small improvements would help."
    ],

    "Castles": [
        "Staying in a historic setting like this was a unique experience. The atmosphere made the trip memorable.",
        "The character of the property really stands out. It felt different from an ordinary accommodation.",
        "A fascinating place to stay, especially for anyone who enjoys history and architecture.",
        "The historic surroundings made our visit feel special. We enjoyed the overall experience.",
        "A memorable stay with plenty of character. Some modern comforts could be improved."
    ],

    "Amazing Pools": [
        "The pool area was definitely a highlight. It made relaxing and enjoying the stay much more enjoyable.",
        "A beautiful setting for a relaxing holiday. We especially enjoyed spending time around the pool.",
        "The overall atmosphere was wonderful, and the pool experience made the stay feel special.",
        "Perfect for slowing down and enjoying a peaceful break. We had a really pleasant experience.",
        "Enjoyed the property and its relaxing atmosphere. A few minor details could be better."
    ],

    "Camping": [
        "A refreshing outdoor experience. We really enjoyed being surrounded by nature during our stay.",
        "The peaceful environment made this trip memorable. It was a lovely break from city life.",
        "A great experience for anyone who enjoys spending time outdoors and appreciating nature.",
        "The natural surroundings were beautiful, and the overall experience felt different from a regular hotel stay.",
        "We enjoyed the outdoor atmosphere. Travellers should be comfortable with a more nature-focused stay."
    ],

    "Farms": [
        "A peaceful countryside experience. It was lovely to enjoy a slower pace away from the city.",
        "The rural surroundings made the stay feel refreshing and relaxing.",
        "A wonderful way to experience countryside life. We enjoyed the calm atmosphere.",
        "The farm setting was the best part of our visit. It made the experience feel authentic and memorable.",
        "A pleasant countryside stay. A few small improvements could make it even better."
    ],

    "Arctic": [
        "The remote surroundings made this an unforgettable experience. The natural landscape was incredible.",
        "A peaceful escape surrounded by beautiful winter scenery. We really enjoyed the atmosphere.",
        "The unique setting was the highlight of the trip. It felt like a completely different world.",
        "A memorable stay for anyone who appreciates quiet places and dramatic natural landscapes.",
        "We enjoyed the unusual setting and peaceful surroundings. Be prepared for a remote environment."
    ],

    "Other": [
        "A unique property that made our trip more interesting. We really enjoyed the overall experience.",
        "The surroundings and atmosphere made this stay stand out from ordinary accommodation.",
        "A lovely place to spend some time relaxing and enjoying a different kind of stay.",
        "The property had its own character, and we appreciated the experience.",
        "A good overall experience in an interesting setting. There are a few small areas that could improve."
    ]
};

const ratings = [5, 5, 4, 5, 4];

async function main() {
    let session;

    try {
        await mongoose.connect(process.env.ATLASDB_URL);
        console.log("Connected to MongoDB Atlas!");

        const listings = await Listing.find({});
        const reviewers = await User.find({
        username: {
            $in: [
                "olivia_martin",
                "ethan_wilson",
                "sophia_anderson",
                "daniel_cooper",
                "isabella_thomas",
                "james_taylor",
                "amelia_johnson",
                "noah_brown",
                "charlotte_davis",
                "lucas_miller",
                "mia_garcia",
                "benjamin_clark",
                "ava_rodriguez",
                "henry_lewis",
                "grace_walker"
            ]
        },
        isAdmin: false
});

        if (listings.length !== 50) {
            throw new Error(
                `Expected 50 listings, but found ${listings.length}.`
            );
        }

        if (reviewers.length !== 15) {
            throw new Error(
                `Expected 15 reviewers, but found ${reviewers.length}.`
            );
        }

        const existingReviews = await Review.countDocuments({});

        const listingsWithReviews = listings.filter(
            listing => listing.reviews.length > 0
        );

        if (existingReviews > 0 || listingsWithReviews.length > 0) {
            throw new Error(
                "Reviews already exist. Seeding cancelled to prevent duplicates."
            );
        }

        const reviewDocuments = [];
        const listingReviewMap = new Map();

        let reviewerIndex = 0;

        for (let listingIndex = 0; listingIndex < listings.length; listingIndex++) {
            const listing = listings[listingIndex];

            const templates = reviewTemplates[listing.category];

            if (!templates) {
                throw new Error(
                    `No review templates found for category: ${listing.category}`
                );
            }

            const reviewIds = [];

            for (let i = 0; i < 5; i++) {
                const reviewer = reviewers[reviewerIndex % reviewers.length];

                const comment = templates[i].replace(
                    /\{location\}/g,
                    listing.location
                );

                const daysAgo = 5 + (
                    (listingIndex * 7 + i * 13) % 180
                );

                const createdAt = new Date(
                    Date.now() - daysAgo * 24 * 60 * 60 * 1000
                );

                const reviewId = new mongoose.Types.ObjectId();

                reviewDocuments.push({
                    _id: reviewId,
                    comment,
                    rating: ratings[i],
                    author: reviewer._id,
                    createdAt
                });

                reviewIds.push(reviewId);

                reviewerIndex++;
            }

            listingReviewMap.set(
                listing._id.toString(),
                reviewIds
            );
        }

        session = await mongoose.startSession();

        await session.withTransaction(async () => {

            await Review.insertMany(reviewDocuments, { session });

            const bulkOperations = listings.map(listing => ({
                updateOne: {
                    filter: { _id: listing._id },
                    update: {
                        $push: {
                            reviews: {
                                $each: listingReviewMap.get(
                                    listing._id.toString()
                                )
                            }
                        }
                    }
                }
            }));

            await Listing.bulkWrite(bulkOperations, { session });

        });

        console.log("\nReview seeding completed successfully!");
        console.log("Listings:", listings.length);
        console.log("Reviews created:", reviewDocuments.length);
        console.log("Reviewers used:", reviewers.length);

    } catch (error) {
        console.error("\nSeeding failed:", error.message);
        process.exitCode = 1;

    } finally {
        if (session) {
            await session.endSession();
        }

        await mongoose.disconnect();
        console.log("Database connection closed.");
    }
}

main();