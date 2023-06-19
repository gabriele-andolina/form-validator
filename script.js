const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

// Show error outline
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Check if e-mail is valid
function isValidEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

// Event Listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (username.value === "") {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, "E-mail is required");
    } else if (!isValidEmail(email.value)) {
        showError(email, "E-mail is not valid.");
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }

    if (confirmPassword.value === "") {
        showError(confirmPassword, "Password confirmation is required");
    } else {
        showSuccess(confirmPassword);
    }
});
