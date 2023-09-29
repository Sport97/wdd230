const currentDate = new Date(document.lastModified); // gets todays date based on computer system
const year = currentDate.getFullYear();
const footerYear = `© ${year} | Stephen Port | Minnesota`;
const lastModified = `Last Modified: ${currentDate}`;
const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

document.querySelector("#footerYear").textContent = footerYear
document.querySelector("#lastModified").textContent = lastModified

hambutton.addEventListener("click", function() {
	mainnav.classList.toggle("responsive")
}, false);