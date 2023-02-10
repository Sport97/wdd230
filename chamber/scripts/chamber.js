const currentDate = new Date(document.lastModified);
const dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const dayName = dayNames[currentDate.getDay()];
const monthName = months[currentDate.getMonth()];
const year = currentDate.getFullYear();
const time = `${dayName}, ${monthName} ${currentDate.getDate()}, ${year}`;
const footerYear = `© ${year} Chamber of Commerce Project | Stephen Port | WDD 230 Project`;
const lastModified = `Last Modified: ${currentDate}`;
const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

document.querySelector("#time").textContent = time;
document.querySelector("#footerYear").textContent = footerYear
document.querySelector("#lastModified").textContent = lastModified

hambutton.addEventListener("click", function() {
	mainnav.classList.toggle("responsive")
}, false);

window.addEventListener("load", function() {
    if (dayName == "Monday" | dayName == "Tuesday") {
        const message = document.createElement("p");
		message.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 pm";
        document.querySelector("#banner").appendChild(message);
    }
});