const currentDay = new Date().getDay();
const home = document.querySelector("#home-page");
const banner = document.querySelector("#banner");
const closeBanner = document.querySelector("#close-banner");

function displayBanner() {
    if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
        const message = document.createElement("p");
		message.innerHTML = "Meet and Greet on Wednesday at 7:00 p.m";
        banner.appendChild(message);
    }
}

closeBanner.addEventListener("click", () => {
    banner.style.display = "none";
});

closeBanner.addEventListener("click", function() {
	home.classList.toggle("close")
    closeBanner.classList.toggle("close")
    banner.classList.toggle("close")
}, false);

displayBanner();