const currentDate = new Date(document.lastModified); // gets todays date based on computer system
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
const footerYear = `© ${year} | Stephen Port - Minnesota`;
const lastModified = `Last Modified: ${currentDate}`;

document.querySelector("#time").textContent = time;
document.querySelector("#footerYear").textContent = footerYear
document.querySelector("#lastModified").textContent = lastModified