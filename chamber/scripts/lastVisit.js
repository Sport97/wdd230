const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("visits-ls"));
const lastVisitDate = localStorage.getItem("lastVisitDate");

window.addEventListener("load", function() {
    if (!lastVisitDate) {
        visitsDisplay.textContent = "Welcome, let us know if you have any questions.";
    } else {
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const timeDifference = currentDate.getTime() - new Date(lastVisitDate).getTime();
        const daysDifference = Math.floor(timeDifference / millisecondsPerDay);

        if (daysDifference < 1) {
            visitsDisplay.textContent = "Welcome Back";
        } else {
            const plural = daysDifference === 1 ? "" : "s";
            visitsDisplay.textContent = `You last visited ${daysDifference} day${plural} ago.`;
        }
    }

    localStorage.setItem("lastVisitDate", currentDate.toISOString());
});