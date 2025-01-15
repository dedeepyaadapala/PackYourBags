// Function to toggle between login and register forms
function toggleForm(formType) {
    if (formType === 'register') {
        // Show Register Form
        document.getElementById('register-section').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    } else {
        // Show Login Form
        document.getElementById('register-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    }
}

// Validate Login Form
function validateLogin(event) {
    const email = document.querySelector('#login-section input[type="email"]').value;
    const password = document.querySelector('#login-section input[type="password"]').value;

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault(); // Prevent form submission
        return false;
    }

    return true;
}

// Validate Register Form
function validateRegister(event) {
    const name = document.querySelector('#register-section input[type="text"]').value;
    const email = document.querySelector('#register-section input[type="email"]').value;
    const password = document.querySelector('#register-section input[type="password"]').value;
    const confirmPassword = document.querySelectorAll('#register-section input[type="password"]')[1].value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name.trim() === "") {
        alert("Name cannot be empty.");
        event.preventDefault();
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return false;
    }

    return true;
}

// Attach validation to forms
document.querySelector('#login-section form').addEventListener('submit', validateLogin);
document.querySelector('#register-section form').addEventListener('submit', validateRegister);
