document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const passwordInput = document.getElementById("password");
    const showPasswordButton = document.getElementById("show-password-button");

    // Initially, the password is hidden
    let passwordHidden = true;

    showPasswordButton.addEventListener("click", function () {
        // Toggle the password visibility when the button is clicked
        passwordHidden = !passwordHidden;
        passwordInput.type = passwordHidden ? "password" : "text";

        // Change the button text accordingly
        showPasswordButton.textContent = passwordHidden ? "Show Password" : "Hide Password";
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input values
        const email = document.getElementById("email").value;
        const password = passwordInput.value;

        // Create a data object to send to the server
        const data = {
            email: email,
            password: password
        };

        // Make a POST request to the server's login endpoint
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.username) {
                // Successful login, you can redirect or perform other actions
                errorMessage.textContent = "";
                alert("Login successful!");
            } else {
                // Display an error message from the server
                errorMessage.textContent = data.message || "Invalid email or password. Please try again.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            errorMessage.textContent = "An error occurred while processing your request. Please try again later.";
        });
    });
});
