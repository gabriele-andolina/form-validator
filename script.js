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

// Event Listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (username.value === "") {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }
});
