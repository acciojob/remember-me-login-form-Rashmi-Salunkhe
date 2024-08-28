//your JS code here. If required.
// JavaScript to handle the login functionality

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("checkbox").checked;

    if (rememberMe) {
        // Save username and password in localStorage if "Remember me" is checked
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);
    } else {
        // Remove stored username and password if "Remember me" is unchecked
        localStorage.removeItem("savedUsername");
        localStorage.removeItem("savedPassword");
    }

    alert(`Logged in as ${username}`);

    // Check if user details are stored and show the "Login as existing user" button
    checkExistingUser();
});

function checkExistingUser() {
    const existingUserDiv = document.getElementById("existingUserDiv");
    existingUserDiv.innerHTML = ""; // Clear the div content

    const savedUsername = localStorage.getItem("savedUsername");

    if (savedUsername) {
        const existingUserButton = document.createElement("button");
        existingUserButton.id = "existing";
        existingUserButton.textContent = 'Login as existing user';
        existingUserButton.addEventListener("click", function () {
            alert(`Logged in as ${savedUsername}`);
        });

        existingUserDiv.appendChild(existingUserButton);
    }
}

// Initial check to display the "Login as existing user" button if details are already saved
checkExistingUser();
