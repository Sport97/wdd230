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