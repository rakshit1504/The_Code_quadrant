document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const errorMessage = document.getElementById("error-message");
    const passwordField = document.getElementById("password");
    const togglePasswordButton = document.getElementById("toggle-password");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input values
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = passwordField.value;

        // Create a data object to send to the server
        const data = {
            username: username,
            email: email,
            password: password
        };

        // Make a POST request to the server's registration endpoint
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.user) {
                // Successful registration, you can redirect or perform other actions
                errorMessage.textContent = "";
                alert("Sign Up successful!");
            } else {
                // Display an error message from the server
                errorMessage.textContent = data.error || "Sign Up failed. Please try again.";
            }
        })
        .catch(error => {
            console.log("Error:", error);
            errorMessage.textContent = "An error occurred while processing your request. Please try again later.";
        });
    });

    // Toggle password visibility
    togglePasswordButton.addEventListener("click", function () {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePasswordButton.textContent = "Hide Password";
        } else {
            passwordField.type = "password";
            togglePasswordButton.textContent = "Show Password";
        }
    });
    console.log("Data to send to server:", data);
});
