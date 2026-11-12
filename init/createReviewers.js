require("dotenv").config();

const mongoose = require("mongoose");
const crypto = require("crypto");
const User = require("../models/user.js");

const reviewers = [
    { username: "olivia_martin", email: "olivia@example.com" },
    { username: "ethan_wilson", email: "ethan@example.com" },
    { username: "sophia_anderson", email: "sophia@example.com" },
    { username: "daniel_cooper", email: "daniel@example.com" },
    { username: "isabella_thomas", email: "isabella@example.com" },
    { username: "james_taylor", email: "james@example.com" },
    { username: "amelia_johnson", email: "amelia@example.com" },
    { username: "noah_brown", email: "noah@example.com" },
    { username: "charlotte_davis", email: "charlotte@example.com" },
    { username: "lucas_miller", email: "lucas@example.com" },
    { username: "mia_garcia", email: "mia@example.com" },
    { username: "benjamin_clark", email: "benjamin@example.com" },
    { username: "ava_rodriguez", email: "ava@example.com" },
    { username: "henry_lewis", email: "henry@example.com" },
    { username: "grace_walker", email: "grace@example.com" }
];

async function main() {
    try {
        await mongoose.connect(process.env.ATLASDB_URL);

        console.log("Connected to MongoDB Atlas!");

        let created = 0;
        let skipped = 0;

        for (const reviewer of reviewers) {

            const existingUser = await User.findOne({
                username: reviewer.username
            });

            if (existingUser) {
                if (existingUser.isAdmin) {
                    throw new Error(
                        `Username conflict with administrator: ${reviewer.username}`
                    );
                }

                console.log(`Already exists: ${reviewer.username}`);
                skipped++;
                continue;
            }

            // Generate a secure random password
            const password = crypto.randomBytes(24).toString("hex");

            const newUser = new User({
                username: reviewer.username,
                email: reviewer.email,
                isAdmin: false
            });

            await User.register(newUser, password);

            console.log(`Created: ${reviewer.username}`);
            created++;
        }

        console.log("\nReviewer account creation completed!");
        console.log("Created:", created);
        console.log("Already existed:", skipped);
        console.log("Total reviewer accounts:", reviewers.length);

    } catch (error) {
        console.error("\nError:", error.message);
        process.exitCode = 1;

    } finally {
        await mongoose.disconnect();
        console.log("\nDatabase connection closed.");
    }
}

main();