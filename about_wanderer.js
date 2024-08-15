const teamMembers = [
    {
        name: "Emily Rivers",
        role: "Founder & CEO",
        about: "Emily is the visionary behind Wanderer. With over 15 years of experience in the travel industry, Emily has a knack for finding hidden gems and creating bespoke travel experiences that leave a lasting impact. Her love for travel is matched only by her commitment to sustainable tourism and supporting local communities."
    },
    {
        name: "Liam Brooks",
        role: "Chief Travel Officer",
        about: "Liam is the heart of Wanderer’s travel planning. With a background in hospitality and a deep passion for adventure, Liam ensures that every itinerary is perfectly crafted to meet the unique needs of our clients. From off-the-beaten-path adventures to luxury getaways, Liam’s expertise guarantees a memorable journey."
    },
    {
        name: "Sophia Chen",
        role: "Marketing & Communications Manager",
        about: "Sophia is the voice of Wanderer. She’s responsible for sharing our stories, adventures, and travel tips with the world. With her creative storytelling skills and a deep understanding of the digital landscape, Sophia ensures that Wanderer’s message reaches travelers everywhere, inspiring them to explore new horizons."
    },
    {
        name: "Ethan Patel",
        role: "Lead Travel Consultant",
        about: "Ethan is your go-to guide for all things travel. With extensive experience in both group and solo travel, Ethan specializes in crafting personalized itineraries that reflect each client’s interests and travel style. His attention to detail and insider knowledge make him a trusted resource for travelers."
    },
    {
        name: "Ava Martinez",
        role: "Customer Experience Manager",
        about: "Ava is the friendly face behind Wanderer’s exceptional customer service. She’s dedicated to ensuring that every client’s journey is seamless and stress-free. From the moment you start planning your trip to the moment you return home, Ava is there to assist with any questions or needs."
    },
    {
        name: "Jackson Lee",
        role: "Head of Operations",
        about: "Jackson keeps Wanderer running smoothly. He’s responsible for overseeing all logistical aspects of our trips, ensuring that everything from transportation to accommodations is of the highest quality. With his background in operations management, Jackson ensures that every detail is perfectly executed."
    },
    {
        name: "Mia Clark",
        role: "Content Creator & Travel Photographer",
        about: "Mia captures the essence of Wanderer’s adventures through her lens. Her stunning photography and engaging content bring our destinations to life, allowing our clients to see the world through her eyes before they embark on their own journeys. Mia’s work is a visual celebration of the beauty and diversity of the world."
    }
];

function displayteam() {
    const teamlist = document.getElementById("teamList");
    teamMembers.forEach((member)=>{
        const listItem = document.createElement('div');
        listItem.innerHTML = `<p>${member.name}<br>${member.role}<br>${member.about}</p>`;
        teamlist.append(listItem);
    });
}

displayteam();