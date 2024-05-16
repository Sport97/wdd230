const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("visits-ls"));

window.addEventListener("load", function() {
    if (numVisits !== 0) {
        visits = `Number of visits: ${numVisits}`;
        visitsDisplay.textContent = visits;
    } else {
        visitsDisplay.textContent = "First Time Here";
    }

    numVisits++;
    localStorage.setItem("visits-ls", numVisits);
});