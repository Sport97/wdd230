const imagesToLoad = document.querySelectorAll("img[data-src]");
const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("visits-ls"));

function loadImages(image){
    image.setAttribute("src", image.getAttribute("data-src"));
    window.addEventListener("load", function() {
        image.removeAttribute("data-src");
    });
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

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