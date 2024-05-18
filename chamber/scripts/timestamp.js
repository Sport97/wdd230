window.onload = function() {
    const timestampField = document.getElementById("timestamp");
    const currentDate = new Date();
    timestampField.value = currentDate.toISOString();
};