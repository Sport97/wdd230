const currentDay = new Date().getDay();
const home = document.querySelector("#home-page");
const banner = document.querySelector("#banner");

function displayBanner() {
    if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
        const message = document.createElement("p");
		message.textContent = "Meet and Greet on Wednesday at 7:00 p.m.";

        const closeBanner = document.createElement("button");
        closeBanner.textContent = "✖";
        closeBanner.setAttribute("id", "close-banner");

        banner.appendChild(message);
        banner.appendChild(closeBanner);

        closeBanner.addEventListener("click", function() {
            home.classList.toggle("close")
            closeBanner.classList.toggle("close")
            banner.classList.toggle("close")
        }, false);
    }
}

displayBanner();