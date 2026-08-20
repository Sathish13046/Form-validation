const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    clearErrors();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Name Validation
    if (name === "") {
        showError("nameError", "Name is required");
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (email === "") {
        showError("emailError", "Email is required");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError("emailError", "Invalid email address");
        isValid = false;
    }

    // Password Validation
    if (password.length < 8) {
        showError("passwordError", "Password must be at least 8 characters");
        isValid = false;
    }
    

    // Success
    if (isValid) {
        document.getElementById("successMessage").textContent =
            "Registration Successful!";
        form.reset();
    }
});

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll(".error");

    errors.forEach(error => {
        error.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";
}