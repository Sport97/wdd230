const baseURL = "https://sport97.github.io/wdd230/";
const linksURL = "https://sport97.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error("Link Error: " + response.statusText);
        }
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Data Error:", error);
    }
}

getLinks();

function displayLinks(weeks) {
    const card = document.querySelector(".card");
    const h2 = card.querySelector("h2");
    const list = document.createElement("ul");

    weeks.forEach(week => {
        week.links.forEach(link => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.title;
            const underline = document.createElement("u");
            anchor.appendChild(underline);

            listItem.appendChild(anchor);
            list.appendChild(listItem);
        });
    });

    h2.insertAdjacentElement("afterend", list);
}