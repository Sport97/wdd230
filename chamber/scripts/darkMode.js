const darkButton = document.querySelector("#dark-svg");
const lightButton = document.querySelector("#light-svg");
const body = document.querySelector("body");
const content = document.querySelector("#content");

darkButton.addEventListener("click", function() {
	body.classList.toggle("dark-mode")
	content.classList.toggle("dark-mode")
}, false);

lightButton.addEventListener("click", function() {
	body.classList.toggle("dark-mode")
	content.classList.toggle("dark-mode")
}, false);