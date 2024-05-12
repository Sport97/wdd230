const currentDate = new Date(document.lastModified);
const year = currentDate.getFullYear();
const footerYear = `© ${year} | Stephen Port | Minnesota`;
const lastModified = `Last Modified: ${currentDate}`;
const mainNav = document.querySelector(".navigation")
const hamButton = document.querySelector("#menu");
const darkButton = document.querySelector("#dark-svg");
const lightButton = document.querySelector("#light-svg");
const body = document.querySelector("body");
const content = document.querySelector("#content");
const imagesToLoad = document.querySelectorAll("img[data-src]");
const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("visits-ls"));
const lastVisitDate = localStorage.getItem("lastVisitDate");

document.querySelector("#footerYear").textContent = footerYear
document.querySelector("#lastModified").textContent = lastModified

hamButton.addEventListener("click", function() {
	mainNav.classList.toggle("responsive")
	hamButton.classList.toggle("responsive")
}, false);

darkButton.addEventListener("click", function() {
	body.classList.toggle("dark-mode")
	content.classList.toggle("dark-mode")
}, false);

lightButton.addEventListener("click", function() {
	body.classList.toggle("dark-mode")
	content.classList.toggle("dark-mode")
}, false);

function loadImages(image){
    image.setAttribute("src", image.getAttribute("data-src"));
    window.addEventListener("load", function() {
        image.removeAttribute("data-src");
    });
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

window.addEventListener("load", function() {
    if (!lastVisitDate) {
        visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const timeDifference = currentDate.getTime() - new Date(lastVisitDate).getTime();
        const daysDifference = Math.floor(timeDifference / millisecondsPerDay);

        if (daysDifference < 1) {
            visitsDisplay.textContent = "Back so soon! Awesome!";
        } else {
            const plural = daysDifference === 1 ? "" : "s";
            visitsDisplay.textContent = `You last visited ${daysDifference} day${plural} ago.`;
        }
    }

    localStorage.setItem("lastVisitDate", currentDate.toISOString());
});