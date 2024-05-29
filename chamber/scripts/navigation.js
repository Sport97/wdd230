const mainNav = document.querySelector(".navigation")
const hamButton = document.querySelector("#menu");
const joinButton = document.querySelector("#join");

hamButton.addEventListener("click", function() {
	mainNav.classList.toggle("responsive")
	hamButton.classList.toggle("responsive")
}, false);

joinButton.addEventListener("click", function() {
    window.location.href = "join.html";
});