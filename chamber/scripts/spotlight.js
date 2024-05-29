const url = "data/members.json";
const spotlight = document.querySelector(".spotlight");

async function getMemberData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displaySpotlights(data.members);
    } catch (error) {
        console.error("Error:", error);
    }
}

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displaySpotlights(members) {
    const qualifiedMembers = members.filter(member => 
        member.membership_level === "Silver" || member.membership_level === "Gold"
    );

    const spotlights = getRandomMembers(qualifiedMembers, 3);
    
    spotlights.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");

        const image = document.createElement("img");
        image.src = member.image;
        image.alt = member.name;
        image.loading = "lazy";
        image.width = "200";
        image.height = "300";

        const details = document.createElement("div");
        details.classList.add("details");

        const name = document.createElement("h2");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = member.phone;

        const website = document.createElement("p");
        website.innerHTML = `<a href="${member.website}" target="_blank">${member.website}</a>`;

        const membershipLevel = document.createElement("p");
        membershipLevel.textContent = member.membership_level;

        const info = document.createElement("p");
        info.textContent = member.description;

        spotlight.appendChild(memberCard);

        memberCard.appendChild(image);
        memberCard.appendChild(details);

        details.appendChild(name);
        details.appendChild(address);
        details.appendChild(phone);
        details.appendChild(website);
        details.appendChild(membershipLevel);
        details.appendChild(info);
    });
}

getMemberData();