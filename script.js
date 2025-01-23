// script.js

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", () => {
        alert("Welcome to WatchTogether! More features coming soon.");
    });

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            alert(`Welcome, ${username}! Login successful.`);
            // Add backend integration here for real authentication
        } else {
            alert("Please fill in both username and password fields.");
        }
    });
});
