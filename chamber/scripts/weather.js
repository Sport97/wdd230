const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const forecast = document.querySelector("#forecast");
const apiKey = "57b8b7debc7d98c16aa0fc90ddc00636";
const lat = 41.40;
const lon = -75.67;
const units = "imperial";
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(await response.text());
        }
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

async function displayCurrentWeather() {
    const data = await apiFetch(currentWeatherUrl);
    if (data) {
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        currentTemp.textContent = `${temp.toFixed(0)}°F`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherIcon.alt = description;
        captionDesc.textContent = description;
    }
}

async function displayForecast() {
    const data = await apiFetch(forecastUrl);
    if (data) {
        forecast.innerHTML = "";

        const dailyData = {};

        data.list.forEach(item => {
            const date = new Date(item.dt_txt);
            const day = date.toLocaleDateString(undefined, { weekday: "long" });

            if (!dailyData[day]) {
                dailyData[day] = {
                    temps: [],
                    icons: [],
                    descriptions: []
                };
            }
            dailyData[day].temps.push(item.main.temp);
            dailyData[day].icons.push(item.weather[0].icon);
            dailyData[day].descriptions.push(item.weather[0].description);
        });

        const days = Object.keys(dailyData).slice(0, 3);

        days.forEach(day => {
            const dayData = dailyData[day];
            const avgTemp = dayData.temps.reduce((acc, temp) => acc + temp, 0) / dayData.temps.length;
            const mostCommonIcon = dayData.icons[0];
            const mostCommonDescription = dayData.descriptions[0];

            const dayForecast = document.createElement("div");
            dayForecast.classList.add("day-forecast");

            const dayName = document.createElement("h3");
            dayName.textContent = day;

            const temp = document.createElement("p");
            temp.textContent = `${avgTemp.toFixed(0)}°F`;

            const iconImg = document.createElement("img");
            iconImg.src = `https://openweathermap.org/img/wn/${mostCommonIcon}@2x.png`;
            iconImg.alt = mostCommonDescription;

            const description = document.createElement("p");
            description.textContent = mostCommonDescription;

            dayForecast.appendChild(dayName);
            dayForecast.appendChild(temp);
            dayForecast.appendChild(iconImg);
            dayForecast.appendChild(description);

            forecast.appendChild(dayForecast);
        });
    }
}

displayCurrentWeather();
displayForecast();