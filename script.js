const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
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
