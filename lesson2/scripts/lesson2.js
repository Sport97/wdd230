const currentDate = new Date(document.lastModified); // gets todays date based on computer system
const year = currentDate.getFullYear();
const footerYear = `© ${year} | Stephen Port - Minnesota`;
const lastModified = `Last Modified: ${currentDate}`;
document.querySelector("#footerYear").textContent = footerYear
document.querySelector("#lastModified").textContent = lastModified