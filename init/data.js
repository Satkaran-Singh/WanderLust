const sampleListings = [
    {
        title: "Luxury Countryside Farmhouse",
        description: "Escape to a peaceful countryside farmhouse surrounded by green fields, open spaces and fresh air. Enjoy a relaxing rural stay with a traditional farmhouse experience.",
        image: {
            filename: "farmhouse",
            url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
        },
        price: 4500,
        location: "Hoshiarpur, Punjab",
        country: "India",
        category: "Trending",
        geometry: {
            type: "Point",
            coordinates: [75.9115, 31.5320]
        }
    },
    {
        title: "Cozy Private Guest Room",
        description: "A comfortable private guest room with a welcoming interior, cozy bedding and essential amenities. Ideal for solo travellers and couples.",
        image: {
            filename: "guest-room",
            url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32"
        },
        price: 2200,
        location: "Jaipur, Rajasthan",
        country: "India",
        category: "Rooms",
        geometry: {
            type: "Point",
            coordinates: [75.7873, 26.9124]
        }
    },
    {
        title: "Elegant Paris City Apartment",
        description: "Experience the charm of Paris from a stylish city apartment. Explore iconic streets, cafes, museums and famous landmarks just a short distance away.",
        image: {
            filename: "paris-apartment",
            url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
        },
        price: 8500,
        location: "Paris",
        country: "France",
        category: "Iconic Cities",
        geometry: {
            type: "Point",
            coordinates: [2.3522, 48.8566]
        }
    },
    {
        title: "Himalayan Mountain Cabin",
        description: "Stay in a peaceful mountain cabin surrounded by beautiful Himalayan scenery. Perfect for nature lovers, hikers and travellers seeking a quiet retreat.",
        image: {
            filename: "mountain-cabin",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
        },
        price: 5200,
        location: "Manali, Himachal Pradesh",
        country: "India",
        category: "Mountains",
        geometry: {
            type: "Point",
            coordinates: [77.1887, 32.2432]
        }
    },
    {
        title: "Historic European Castle Stay",
        description: "Experience a memorable stay in a historic castle surrounded by beautiful grounds and traditional architecture. A unique getaway for history and architecture enthusiasts.",
        image: {
            filename: "urquhart-castle",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Urquhart_Castle_%28Unsplash%29.jpg/1280px-Urquhart_Castle_%28Unsplash%29.jpg"
        },
        price: 12000,
        location: "Edinburgh",
        country: "Scotland",
        category: "Castles",
        geometry: {
            type: "Point",
            coordinates: [-3.1883, 55.9533]
        }
    },
    {
        title: "Private Infinity Pool Villa",
        description: "Enjoy a luxurious villa featuring a private swimming pool, relaxing outdoor spaces and beautiful surroundings. Perfect for a peaceful holiday.",
        image: {
            filename: "infinity-pool",
            url: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc"
        },
        price: 9500,
        location: "Udaipur, Rajasthan",
        country: "India",
        category: "Amazing Pools",
        geometry: {
            type: "Point",
            coordinates: [73.6820, 24.5854]
        }
    },
    {
        title: "Luxury Forest Glamping Retreat",
        description: "Reconnect with nature in a comfortable glamping tent surrounded by trees. Enjoy outdoor adventures, peaceful evenings and a unique camping experience.",
        image: {
            filename: "forest-camping",
            url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d"
        },
        price: 3800,
        location: "Rishikesh, Uttarakhand",
        country: "India",
        category: "Camping",
        geometry: {
            type: "Point",
            coordinates: [78.2676, 30.0869]
        }
    },
    {
        title: "Traditional Organic Farm Stay",
        description: "Experience rural life at a traditional farm stay surrounded by agricultural landscapes. Discover farm activities, fresh local produce and peaceful countryside living.",
        image: {
            filename: "organic-farm",
            url: "https://images.unsplash.com/photo-1761839257658-23502c67f6d5"
        },
        price: 3000,
        location: "Amritsar, Punjab",
        country: "India",
        category: "Farms",
        geometry: {
            type: "Point",
            coordinates: [74.8723, 31.6340]
        }
    },
    {
        title: "Arctic Wilderness Cabin",
        description: "Discover the beauty of the Arctic from a cozy wilderness cabin. Enjoy snowy landscapes, winter adventures and the possibility of witnessing the northern lights.",
        image: {
            filename: "arctic-cabin",
            url: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a"
        },
        price: 15000,
        location: "Tromso",
        country: "Norway",
        category: "Arctic",
        geometry: {
            type: "Point",
            coordinates: [18.9553, 69.6492]
        }
    },
    {
        title: "Unique Riverside Treehouse",
        description: "Enjoy an unusual stay in a beautiful treehouse surrounded by nature. Relax in a peaceful setting and experience a different kind of accommodation.",
        image: {
            filename: "riverside-treehouse",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
        },
        price: 4200,
        location: "Coorg, Karnataka",
        country: "India",
        category: "Other",
        geometry: {
            type: "Point",
            coordinates: [75.7390, 12.3375]
        }
    }
];

sampleListings.push(
    // 11. Trending
    {
        title: "Bali Cliffside Luxury Villa",
        description: "Experience a spectacular tropical getaway in a cliffside villa overlooking the ocean. Enjoy lush greenery, beautiful architecture and peaceful island surroundings.",
        image: {
            filename: "bali-cliffside-villa",
            url: "https://images.unsplash.com/photo-1791551957866-f10f51ae917e"
        },
        price: 11500,
        location: "Nusa Penida, Bali",
        country: "Indonesia",
        category: "Trending",
        geometry: {
            type: "Point",
            coordinates: [115.5444, -8.7278]
        }
    },

    // 12. Rooms
    {
        title: "Premium Modern Hotel Room",
        description: "Relax in a beautifully furnished hotel room featuring comfortable bedding, modern interiors and essential amenities for a pleasant city stay.",
        image: {
            filename: "premium-hotel-room",
            url: "https://images.unsplash.com/photo-1725962479542-1be0a6b0d444"
        },
        price: 3200,
        location: "New Delhi",
        country: "India",
        category: "Rooms",
        geometry: {
            type: "Point",
            coordinates: [77.2090, 28.6139]
        }
    },

    // 13. Iconic Cities
    {
        title: "Parisian Balcony City Apartment",
        description: "Discover Paris from a charming apartment in a classic residential building. Explore nearby cafes, shopping streets and the city's beautiful architecture.",
        image: {
            filename: "parisian-apartment",
            url: "https://images.unsplash.com/photo-1766916138109-5289659dcbea"
        },
        price: 7800,
        location: "Paris",
        country: "France",
        category: "Iconic Cities",
        geometry: {
            type: "Point",
            coordinates: [2.3522, 48.8566]
        }
    },

    // 14. Mountains
    {
        title: "Alpine Snow Mountain Lodge",
        description: "Stay in a peaceful mountain lodge surrounded by snow-covered peaks. Enjoy breathtaking scenery, fresh mountain air and access to outdoor adventures.",
        image: {
            filename: "alpine-mountain-lodge",
            url: "https://images.unsplash.com/photo-1675526193131-83c24921f33c"
        },
        price: 8500,
        location: "South Tyrol",
        country: "Italy",
        category: "Mountains",
        geometry: {
            type: "Point",
            coordinates: [11.7667, 46.5500]
        }
    },

    // 15. Castles
    {
        title: "Edinburgh Historic Castle Retreat",
        description: "Experience the historic atmosphere of Edinburgh with a memorable stay near its famous medieval castle, surrounded by centuries of Scottish history and architecture.",
        image: {
            filename: "edinburgh-castle",
            url: "https://images.unsplash.com/photo-1793476196570-f06d508da4cd"
        },
        price: 10500,
        location: "Edinburgh",
        country: "Scotland",
        category: "Castles",
        geometry: {
            type: "Point",
            coordinates: [-3.1883, 55.9533]
        }
    },

    // 16. Amazing Pools
    {
        title: "Hillside Infinity Pool Resort",
        description: "Enjoy a luxurious hillside resort featuring a stunning infinity pool, relaxing outdoor spaces and beautiful scenic views. Ideal for a peaceful holiday.",
        image: {
            filename: "hillside-infinity-pool",
            url: "https://images.unsplash.com/photo-1776761731066-c89caa8d25e6"
        },
        price: 12500,
        location: "Ubud, Bali",
        country: "Indonesia",
        category: "Amazing Pools",
        geometry: {
            type: "Point",
            coordinates: [115.2625, -8.5069]
        }
    },

    // 17. Camping
    {
        title: "Woodland Tent Camping Escape",
        description: "Enjoy an outdoor camping experience in a peaceful forest setting. Wake up surrounded by trees, explore nature trails and spend relaxing evenings outdoors.",
        image: {
            filename: "woodland-camping",
            url: "https://images.unsplash.com/photo-1775542536213-007344f06feb"
        },
        price: 1800,
        location: "Rishikesh, Uttarakhand",
        country: "India",
        category: "Camping",
        geometry: {
            type: "Point",
            coordinates: [78.2676, 30.0869]
        }
    },

    // 18. Farms
    {
        title: "Rustic Countryside Barn Stay",
        description: "Experience peaceful countryside living in a rustic farmhouse surrounded by agricultural fields and traditional rural scenery. Perfect for a relaxing countryside holiday.",
        image: {
            filename: "countryside-barn",
            url: "https://images.unsplash.com/photo-1607651445987-f2ba2afdbcea"
        },
        price: 3600,
        location: "Yorkshire",
        country: "United Kingdom",
        category: "Farms",
        geometry: {
            type: "Point",
            coordinates: [-1.5491, 53.9590]
        }
    },

    // 19. Arctic
    {
        title: "Northern Lights Forest Cabin",
        description: "Stay in a cozy cabin surrounded by snowy Arctic forests. Experience peaceful winter landscapes and the possibility of watching the spectacular northern lights.",
        image: {
            filename: "northern-lights-cabin",
            url: "https://images.unsplash.com/photo-1792442454910-c041cd088c9a"
        },
        price: 14500,
        location: "Finnish Lapland",
        country: "Finland",
        category: "Arctic",
        geometry: {
            type: "Point",
            coordinates: [25.7482, 66.5039]
        }
    },

    // 20. Other
    {
        title: "Modern Glass Treehouse Retreat",
        description: "Enjoy a unique forest escape in a modern glass cabin suspended among trees. Reconnect with nature while experiencing a distinctive architectural retreat.",
        image: {
            filename: "glass-treehouse",
            url: "https://images.unsplash.com/photo-1755795922314-a74332360877"
        },
        price: 6500,
        location: "British Columbia",
        country: "Canada",
        category: "Other",
        geometry: {
            type: "Point",
            coordinates: [-123.1207, 49.2827]
        }
    }
);

sampleListings.push(

    // 21. TRENDING
    {
        title: "Luxury Tropical Beachfront Villa",
        description: "A beautiful tropical escape with spacious interiors, relaxing outdoor areas and stunning ocean surroundings.",
        image: { filename: "tropical-beachfront-villa", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
        price: 14000,
        location: "Phuket",
        country: "Thailand",
        category: "Trending",
        geometry: { type: "Point", coordinates: [98.3923, 7.8804] }
    },
    {
        title: "Contemporary Desert Architecture Stay",
        description: "Experience a distinctive architectural retreat surrounded by desert landscapes and peaceful natural scenery.",
        image: { filename: "desert-architecture-stay", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
        price: 9800,
        location: "Jaisalmer",
        country: "India",
        category: "Trending",
        geometry: { type: "Point", coordinates: [70.9083, 26.9157] }
    },
    {
        title: "Luxury Garden Courtyard Residence",
        description: "A stylish residence with elegant interiors, landscaped gardens and comfortable spaces for a relaxing holiday.",
        image: { filename: "garden-courtyard-residence", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
        price: 7500,
        location: "Jaipur",
        country: "India",
        category: "Trending",
        geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
    },

    // 22. ROOMS
    {
        title: "Minimalist Scandinavian Bedroom",
        description: "A bright and peaceful private room with minimalist furnishings, comfortable bedding and a relaxing atmosphere.",
        image: { filename: "scandinavian-bedroom", url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace" },
        price: 2900,
        location: "Copenhagen",
        country: "Denmark",
        category: "Rooms",
        geometry: { type: "Point", coordinates: [12.5683, 55.6761] }
    },
    {
        title: "Elegant Heritage Guest Room",
        description: "Enjoy a comfortable guest room featuring traditional design elements and modern amenities in a historic setting.",
        image: { filename: "heritage-guest-room", url: "https://images.unsplash.com/photo-1615874694520-474822394e73" },
        price: 2500,
        location: "Amritsar",
        country: "India",
        category: "Rooms",
        geometry: { type: "Point", coordinates: [74.8723, 31.6340] }
    },
    {
        title: "Modern City Studio Room",
        description: "A compact and thoughtfully designed studio room with modern furniture, natural lighting and convenient city access.",
        image: { filename: "modern-city-studio", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" },
        price: 3500,
        location: "Mumbai",
        country: "India",
        category: "Rooms",
        geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
    },

    // 23. ICONIC CITIES
    {
        title: "New York Skyline Apartment",
        description: "Stay in the heart of New York and enjoy convenient access to famous landmarks, restaurants and vibrant city life.",
        image: { filename: "new-york-apartment", url: "https://images.unsplash.com/photo-1494526585095-c41746248156" },
        price: 12500,
        location: "New York",
        country: "United States",
        category: "Iconic Cities",
        geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
    },
    {
        title: "London Classic Townhouse",
        description: "Discover London from a charming townhouse featuring classic architecture and convenient access to the city's attractions.",
        image: { filename: "london-townhouse", url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" },
        price: 10500,
        location: "London",
        country: "United Kingdom",
        category: "Iconic Cities",
        geometry: { type: "Point", coordinates: [-0.1276, 51.5072] }
    },
    {
        title: "Tokyo Urban Apartment",
        description: "Experience the energy of Tokyo from a modern apartment surrounded by shopping, restaurants and public transport.",
        image: { filename: "tokyo-urban-apartment", url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf" },
        price: 8200,
        location: "Tokyo",
        country: "Japan",
        category: "Iconic Cities",
        geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
    },

    // 24. MOUNTAINS
    {
        title: "Swiss Alpine Wooden Chalet",
        description: "A traditional wooden chalet surrounded by dramatic Alpine scenery, offering a peaceful mountain holiday.",
        image: { filename: "swiss-alpine-chalet", url: "https://images.unsplash.com/photo-1781458378182-0d946f4988cb" },
        price: 13500,
        location: "Zermatt",
        country: "Switzerland",
        category: "Mountains",
        geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
    },
    {
        title: "Mountain View Cottage",
        description: "Relax in a cozy cottage with beautiful mountain views, fresh air and access to scenic walking trails.",
        image: { filename: "mountain-view-cottage", url: "https://images.unsplash.com/photo-1699388714243-091f7f90623c" },
        price: 4800,
        location: "Shimla",
        country: "India",
        category: "Mountains",
        geometry: { type: "Point", coordinates: [77.1734, 31.1048] }
    },
    {
        title: "Rocky Mountain Wilderness Lodge",
        description: "A secluded mountain lodge offering scenic wilderness surroundings and a comfortable base for outdoor exploration.",
        image: { filename: "rocky-mountain-lodge", url: "https://images.unsplash.com/photo-1448375240586-882707db888b" },
        price: 9200,
        location: "Banff",
        country: "Canada",
        category: "Mountains",
        geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
    },

    // 25. CASTLES
    {
        title: "Medieval Stone Castle Residence",
        description: "Experience the atmosphere of medieval Europe in a historic stone residence surrounded by beautiful architecture.",
        image: { filename: "medieval-stone-castle", url: "https://images.unsplash.com/photo-1781385664584-bc6afae64060?auto=format&fit=crop&fm=jpg&w=1200&q=80" },
        price: 18000,
        location: "Dublin",
        country: "Ireland",
        category: "Castles",
        geometry: { type: "Point", coordinates: [-6.2603, 53.3498] }
    },
    {
        title: "Scottish Highland Castle Stay",
        description: "Discover Scotland's historic heritage with a memorable stay near ancient castles and beautiful Highland landscapes.",
        image: { filename: "scottish-highland-castle", url: "https://images.unsplash.com/photo-1500534623283-312aade485b7" },
        price: 16000,
        location: "Inverness",
        country: "Scotland",
        category: "Castles",
        geometry: { type: "Point", coordinates: [-4.2247, 57.4778] }
    },
    {
        title: "Historic Fortress Countryside Retreat",
        description: "A distinctive heritage retreat inspired by historic European fortresses and traditional stone architecture.",
        image: { filename: "fortress-countryside-retreat", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" },
        price: 14500,
        location: "Bran",
        country: "Romania",
        category: "Castles",
        geometry: { type: "Point", coordinates: [25.3672, 45.5150] }
    },

    // 26. AMAZING POOLS
    {
        title: "Tropical Resort Infinity Pool",
        description: "Enjoy a spectacular infinity pool surrounded by tropical greenery and beautiful holiday resort surroundings.",
        image: { filename: "tropical-resort-pool", url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7" },
        price: 11000,
        location: "Bali",
        country: "Indonesia",
        category: "Amazing Pools",
        geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
    },
    {
        title: "Private Courtyard Swimming Pool Villa",
        description: "A private villa featuring a refreshing swimming pool, relaxing outdoor seating and elegant modern interiors.",
        image: { filename: "courtyard-pool-villa", url: "https://a0.muscache.com/im/pictures/miso/Hosting-678671914178877701/original/12eb9689-daa8-4a38-a4d9-e92e78d69a47.png?im_w=720" },
        price: 8900,
        location: "Goa",
        country: "India",
        category: "Amazing Pools",
        geometry: { type: "Point", coordinates: [73.8278, 15.4909] }
    },
    {
        title: "Oceanfront Luxury Pool Residence",
        description: "A luxury coastal residence with a beautiful swimming pool and relaxing views of the surrounding ocean.",
        image: { filename: "oceanfront-pool-residence", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d" },
        price: 15500,
        location: "Maldives",
        country: "Maldives",
        category: "Amazing Pools",
        geometry: { type: "Point", coordinates: [73.5093, 4.1755] }
    },

    // 27. CAMPING
    {
        title: "Mountain Valley Tent Retreat",
        description: "Spend peaceful nights camping in a mountain valley with fresh air, beautiful landscapes and outdoor adventures.",
        image: { filename: "mountain-valley-camping", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4" },
        price: 2200,
        location: "Spiti Valley",
        country: "India",
        category: "Camping",
        geometry: { type: "Point", coordinates: [78.0349, 32.2461] }
    },
    {
        title: "Lakeside Forest Camping",
        description: "Enjoy a relaxing lakeside camping experience surrounded by forest landscapes and peaceful natural scenery.",
        image: { filename: "lakeside-forest-camping", url: "https://images.unsplash.com/photo-1598507776352-1cb620d8aa92" },
        price: 2600,
        location: "Lake District",
        country: "United Kingdom",
        category: "Camping",
        geometry: { type: "Point", coordinates: [-3.0886, 54.4609] }
    },
    {
        title: "Desert Stargazing Camp",
        description: "Experience the magic of desert camping with open skies, traditional outdoor arrangements and unforgettable stargazing.",
        image: { filename: "desert-stargazing-camp", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
        price: 4200,
        location: "Jaisalmer",
        country: "India",
        category: "Camping",
        geometry: { type: "Point", coordinates: [70.9083, 26.9157] }
    },

    // 28. FARMS
    {
        title: "Green Countryside Farmhouse",
        description: "Enjoy rural living in a countryside farmhouse surrounded by green agricultural fields and peaceful natural landscapes.",
        image: { filename: "green-countryside-farmhouse", url: "https://s3.amazonaws.com/propertybase-clients/00Di0000000f7m6EAA/a0CNu000023QC52/5scdtpgx9/lewis-farm-021.jpg" },
        price: 3400,
        location: "Hoshiarpur",
        country: "India",
        category: "Farms",
        geometry: { type: "Point", coordinates: [75.9115, 31.5320] }
    },
    {
        title: "Traditional Vineyard Farm Stay",
        description: "Experience countryside hospitality at a vineyard property surrounded by cultivated land and scenic rural views.",
        image: { filename: "vineyard-farm-stay", url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3" },
        price: 7600,
        location: "Tuscany",
        country: "Italy",
        category: "Farms",
        geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
    },
    {
        title: "Rustic Agricultural Farm Cottage",
        description: "A peaceful rural cottage offering a relaxing countryside experience close to farms, orchards and open landscapes.",
        image: { filename: "agricultural-farm-cottage", url: "https://images.unsplash.com/photo-1773415671159-83f6987311b2?auto=format&fit=crop&fm=jpg&w=1200&q=80" },
        price: 3100,
        location: "Nashik",
        country: "India",
        category: "Farms",
        geometry: { type: "Point", coordinates: [73.7898, 19.9975] }
    },

    // 29. ARCTIC
    {
        title: "Snowy Wilderness Glass Cabin",
        description: "Stay in a cozy winter cabin surrounded by snowy wilderness and beautiful northern landscapes.",
        image: { filename: "snowy-wilderness-cabin", url: "https://i.f1g.fr/media/cms/1920x1440/2023/11/09/15e66068967b2f3bf5c543006ac2b41febbd80104e95b1beb8a76a3d6cddfa15.jpg" },
        price: 15500,
        location: "Rovaniemi",
        country: "Finland",
        category: "Arctic",
        geometry: { type: "Point", coordinates: [25.7294, 66.5039] }
    },
    {
        title: "Remote Arctic Wooden Lodge",
        description: "A secluded wooden lodge offering a peaceful winter escape amid snow-covered forests and dramatic northern scenery.",
        image: { filename: "arctic-wooden-lodge", url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73" },
        price: 13500,
        location: "Abisko",
        country: "Sweden",
        category: "Arctic",
        geometry: { type: "Point", coordinates: [18.8290, 68.3490] }
    },
    {
        title: "Northern Winter Mountain Cabin",
        description: "Enjoy a winter retreat surrounded by snow-covered mountains, peaceful forests and spectacular Arctic landscapes.",
        image: { filename: "northern-winter-cabin", url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606" },
        price: 14800,
        location: "Tromso",
        country: "Norway",
        category: "Arctic",
        geometry: { type: "Point", coordinates: [18.9553, 69.6492] }
    },

    // 30. OTHER
    {
        title: "Peaceful Lakeside Houseboat",
        description: "Enjoy a unique stay aboard a comfortable houseboat with peaceful water views and a memorable waterfront atmosphere.",
        image: { filename: "lakeside-houseboat", url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5" },
        price: 5800,
        location: "Srinagar",
        country: "India",
        category: "Other",
        geometry: { type: "Point", coordinates: [74.7973, 34.0837] }
    },
    {
        title: "Architectural Forest Hideaway",
        description: "A distinctive architectural retreat tucked into a forest setting, combining contemporary design with a peaceful natural environment.",
        image: { filename: "architectural-forest-hideaway", url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80" },
        price: 6900,
        location: "Vancouver",
        country: "Canada",
        category: "Other",
        geometry: { type: "Point", coordinates: [-123.1207, 49.2827] }
    },
    {
        title: "Seaside Wooden Cottage",
        description: "A charming coastal cottage offering a relaxing escape with fresh sea air, comfortable interiors and beautiful surroundings.",
        image: { filename: "seaside-wooden-cottage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2" },
        price: 6200,
        location: "Algarve",
        country: "Portugal",
        category: "Other",
        geometry: { type: "Point", coordinates: [-8.2275, 37.0179] }
    }

);

module.exports = { data: sampleListings };