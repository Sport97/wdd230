const passwordField = document.getElementById("pwd");
const confirmPasswordField = document.getElementById("pwd_confirm");
const errorPassword = document.getElementById("pwd_error");

confirmPasswordField.addEventListener("focusout", validatePasswords);
confirmPasswordField.addEventListener("input", clearError);

function validatePasswords() {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    if (confirmPasswordField.value !== "" && !confirmPasswordField.matches(":focus")) {
        if (password !== confirmPassword) {
            errorPassword.textContent = "Passwords do not match. Please try again.";
            confirmPasswordField.setCustomValidity("Passwords do not match.");
            passwordField.focus();
            passwordField.value = "";
            confirmPasswordField.value = "";
        } else {
            errorPassword.textContent = "";
            confirmPasswordField.setCustomValidity("");
        }
    } else {
        errorPassword.textContent = "";
        confirmPasswordField.setCustomValidity(""); 
    }
}

function clearError() {
    errorPassword.textContent = "";
    confirmPasswordField.setCustomValidity("");
}

const rangeInput = document.getElementById("pageRating");
const displayRate = document.getElementById("ratingDisplay");

rangeInput.addEventListener("input", updateValue);

function updateValue() {
    displayRate.textContent = rangeInput.value;
}