const mainNav = document.querySelector(".navigation")
const hamButton = document.querySelector("#menu");

hamButton.addEventListener("click", function() {
	mainNav.classList.toggle("responsive")
	hamButton.classList.toggle("responsive")
}, false);