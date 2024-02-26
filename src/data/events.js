// -- Testing Data for Events -- // 

// -- DATA STRUCTURES -- // 
/* 

const event = { 
    title: STRING, 
    description: STRING, 
    created_at: DATE, 
    tags: [tag] 
}

const tag = { 
    title: STRING, 
    category: STRING 
}

*/


const testEvents = [
    { 
        title: "Rock the Park",
        description: "A night of rock music under the stars",
        created_at: new Date("2024-02-15"),
        tags: [
            { title: "Rock", category: "Music" },
            { title: "Outdoor", category: "Venue" }
        ]
    },
    { 
        title: "Jazz Fusion Festival",
        description: "Experience the fusion of jazz with other genres",
        created_at: new Date("2024-02-20"),
        tags: [
            { title: "Jazz", category: "Music" },
            { title: "Festival", category: "Event Type" }
        ]
    },
    { 
        title: "Pop Sensation Live",
        description: "Get ready for a night of chart-topping hits",
        created_at: new Date("2024-02-10"),
        tags: [
            { title: "Pop", category: "Music" },
            { title: "Concert", category: "Event Type" }
        ]
    },
    { 
        title: "Indie Showcase",
        description: "Discover the best indie bands in town",
        created_at: new Date("2024-02-05"),
        tags: [
            { title: "Indie", category: "Music" },
            { title: "Showcase", category: "Event Type" }
        ]
    },
    { 
        title: "Classical Night at the Symphony",
        description: "An evening of classical masterpieces performed by the symphony orchestra",
        created_at: new Date("2024-02-02"),
        tags: [
            { title: "Classical", category: "Music" },
            { title: "Symphony", category: "Orchestra" }
        ]
    },
    { 
        title: "Recording",
        description: "three piece recording session",
        created_at: new Date("2024-02-02"),
        tags: [
            { title: "Funky Town", category: "Recording" },
        ]
    }
];


export default testEvents;