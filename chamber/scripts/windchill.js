const temp = document.querySelector("#temp");
const speed = document.querySelector("#speed");

function windChill(number1, number2){
    return 35.74 + 0.6215 * (number1) - 35.75 * (number2 ** 0.16) + 0.4275 * (number1) * (number2 ** 0.16);
};

document.querySelector("#calculate").addEventListener("click",  function() {
    if (temp.value <= 50 & speed.value >= 3) {
        const temp = document.querySelector("#temp").value;
        const speed = document.querySelector("#speed").value;
        const chill = windChill(parseInt(temp), parseInt(speed));
        const output = Math.round(chill);
        return document.querySelector("#chill").value = `${output} ℉`;
    }
    else {
        return document.querySelector("#chill").value = "N/A"
    }
});