const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const apiKey = "57b8b7debc7d98c16aa0fc90ddc00636";
const lat = 44.85;
const lon = -93.47;
const units = "imperial";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayResults(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    currentTemp.textContent = `${temp.toFixed(0)}°F`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = description;
    captionDesc.textContent = description;
}

apiFetch();