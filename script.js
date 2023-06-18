const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit");
});
